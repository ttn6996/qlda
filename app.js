/**
 * Logic điều khiển tra cứu ngân hàng câu hỏi Quản lý dự án phần mềm (Câu 1 - Câu 38)
 */

(function () {
  'use strict';

  // State
  let currentCategory = 'all';
  let searchQuery = '';
  let starredQuestions = new Set(JSON.parse(localStorage.getItem('starred_questions') || '[]'));
  let showOnlyStarred = false;
  let currentZoom = 1;
  let activeLightboxPages = [];
  let currentLightboxIndex = 0;

  // DOM Elements
  const questionsContainer = document.getElementById('questionsContainer');
  const sidebarNav = document.getElementById('sidebarNav');
  const quickJumpGrid = document.getElementById('quickJumpGrid');
  const categoryChips = document.getElementById('categoryChips');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const searchResultsBar = document.getElementById('searchResultsBar');
  const resultsCountEl = document.getElementById('resultsCount');
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  const toggleStarredFilterBtn = document.getElementById('toggleStarredFilterBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const fontDecBtn = document.getElementById('fontDecBtn');
  const fontIncBtn = document.getElementById('fontIncBtn');
  const printDocBtn = document.getElementById('printDocBtn');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const appSidebar = document.getElementById('appSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastEl = document.getElementById('toastNotice');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxZoomIn = document.getElementById('lightboxZoomIn');
  const lightboxZoomOut = document.getElementById('lightboxZoomOut');
  const lightboxZoomReset = document.getElementById('lightboxZoomReset');
  const lightboxOpenNewTab = document.getElementById('lightboxOpenNewTab');
  const lightboxTabs = document.getElementById('lightboxTabs');

  // Vietnamese normalization for search
  function removeVietnameseTones(str) {
    if (!str) return '';
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    return str.trim();
  }

  // Toast notification
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2200);
  }

  // Categories extraction
  const categories = [
    'all',
    'Tổng quan & Khái niệm',
    'Tiến trình & Baseline & BOK',
    'Thay đổi yêu cầu & Ước lượng',
    'Quản lý chất lượng & Lỗi',
    'Quản lý rủi ro',
    'Số đo & SPC & Đội dự án',
    'Quản lý cấu hình & Xem xét lại',
    'Kiểm soát cột mốc & Kết thúc dự án'
  ];

  // Render Category Chips
  function renderCategories() {
    categoryChips.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `chip-btn ${cat === currentCategory ? 'active' : ''}`;
      
      let count = 0;
      if (cat === 'all') {
        count = QUESTIONS_DATA.length;
      } else {
        count = QUESTIONS_DATA.filter(q => q.category === cat).length;
      }

      const label = cat === 'all' ? 'Tất cả câu hỏi' : cat;
      btn.innerHTML = `${label} <span class="chip-count">${count}</span>`;
      btn.addEventListener('click', () => {
        currentCategory = cat;
        renderAll();
      });
      categoryChips.appendChild(btn);
    });
  }

  // Filter questions based on state
  function getFilteredQuestions() {
    const rawQuery = searchQuery.trim().toLowerCase();
    const normQuery = removeVietnameseTones(rawQuery);

    return QUESTIONS_DATA.filter(q => {
      // Category filter
      if (currentCategory !== 'all' && q.category !== currentCategory) {
        return false;
      }

      // Starred filter
      if (showOnlyStarred && !starredQuestions.has(q.id)) {
        return false;
      }

      // Search filter
      if (!rawQuery) return true;

      // Match question ID directly: "14", "cau 14", "câu 14"
      if (rawQuery === String(q.id) || rawQuery === `cau ${q.id}` || rawQuery === `câu ${q.id}`) {
        return true;
      }

      const titleNorm = removeVietnameseTones(q.title);
      const tagsNorm = q.tags ? q.tags.map(t => removeVietnameseTones(t)).join(' ') : '';
      const textNorm = removeVietnameseTones(q.contentHtml.replace(/<[^>]+>/g, ' '));

      return (
        titleNorm.includes(normQuery) ||
        textNorm.includes(normQuery) ||
        tagsNorm.includes(normQuery)
      );
    });
  }

  // Render Quick Jump grid in sidebar
  function renderQuickJump() {
    quickJumpGrid.innerHTML = '';
    QUESTIONS_DATA.forEach(q => {
      const a = document.createElement('a');
      a.href = `#cau-${q.id}`;
      a.className = 'quick-btn';
      a.textContent = q.id;
      a.title = `Câu ${q.id}: ${q.title.slice(0, 50)}...`;

      if (starredQuestions.has(q.id)) {
        a.classList.add('has-star');
      }

      a.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToQuestion(q.id);
        if (window.innerWidth <= 960) closeSidebar();
      });

      quickJumpGrid.appendChild(a);
    });
  }

  // Render Sidebar navigation list
  function renderSidebarList(filtered) {
    sidebarNav.innerHTML = '';
    const filteredIds = new Set(filtered.map(q => q.id));

    QUESTIONS_DATA.forEach(q => {
      const isVisible = filteredIds.has(q.id);
      const a = document.createElement('a');
      a.href = `#cau-${q.id}`;
      a.id = `sidebar-link-${q.id}`;
      a.className = `sidebar-item ${!isVisible ? 'dimmed' : ''}`;
      if (!isVisible) {
        a.style.opacity = '0.35';
      }

      const isStarred = starredQuestions.has(q.id);
      a.innerHTML = `
        <span class="sidebar-num">#${q.id}</span>
        <span class="sidebar-text">${q.title}</span>
        ${isStarred ? '<span style="color:var(--accent-gold); font-size:0.8rem;">★</span>' : ''}
      `;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToQuestion(q.id);
        if (window.innerWidth <= 960) closeSidebar();
      });

      sidebarNav.appendChild(a);
    });
  }

  // Scroll to question smoothly
  function scrollToQuestion(id) {
    const el = document.getElementById(`cau-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      highlightActiveCard(id);
    }
  }

  function highlightActiveCard(id) {
    document.querySelectorAll('.question-card').forEach(c => c.style.outline = 'none');
    const el = document.getElementById(`cau-${id}`);
    if (el) {
      el.style.outline = '2px solid var(--primary)';
      setTimeout(() => {
        el.style.outline = 'none';
      }, 1600);
    }
  }

  // Render Questions in Main Pane
  function renderQuestionsList(filtered) {
    questionsContainer.innerHTML = '';

    if (filtered.length === 0) {
      questionsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 style="margin-bottom:0.5rem; color:var(--text-primary);">Không tìm thấy câu hỏi phù hợp</h3>
          <p>Hãy thử tìm với từ khóa khác (ví dụ: "rủi ro", "thác nước", "baseline", "SPC", "câu 14") hoặc xóa bộ lọc.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement('article');
      card.className = 'question-card';
      card.id = `cau-${q.id}`;

      const isStarred = starredQuestions.has(q.id);

      // Card Header
      const header = `
        <div class="card-header">
          <div class="card-meta">
            <span class="q-badge">CÂU ${q.id}</span>
            <span class="category-tag">${q.category}</span>
            <span class="page-tag">📖 ${q.bookPage}</span>
          </div>
          <div class="card-actions">
            <button class="icon-btn ${isStarred ? 'starred' : ''}" data-star="${q.id}" title="${isStarred ? 'Bỏ đánh dấu' : 'Đánh dấu câu này'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
            <button class="icon-btn" data-copy="${q.id}" title="Sao chép nội dung câu hỏi & câu trả lời">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Title
      const title = `<h2 class="question-title">Câu ${q.id}: ${q.title}</h2>`;

      // Body
      const body = `<div class="card-body">${q.contentHtml}</div>`;

      // Footer
      let footerOriginalBtn = '';
      if (q.photoPages && q.photoPages.length > 0) {
        footerOriginalBtn = `
          <button class="original-photo-btn" data-view-pages="${q.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Xem ảnh trang sách gốc (${q.bookPage})
          </button>
        `;
      } else {
        footerOriginalBtn = `<span style="font-size:0.78rem; color:var(--text-muted); font-style:italic;">(Nội dung chuẩn hóa giáo trình Jalote)</span>`;
      }

      const footer = `
        <div class="card-footer">
          ${footerOriginalBtn}
          <button class="copy-content-btn" data-copy="${q.id}">
            📋 Chép câu ${q.id}
          </button>
        </div>
      `;

      card.innerHTML = header + title + body + footer;
      questionsContainer.appendChild(card);
    });

    // Attach event listeners for card buttons
    attachCardListeners();
  }

  // Attach card action buttons
  function attachCardListeners() {
    // Star toggle
    document.querySelectorAll('[data-star]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-star'), 10);
        if (starredQuestions.has(id)) {
          starredQuestions.delete(id);
          showToast(`Đã bỏ đánh dấu Câu ${id}`);
        } else {
          starredQuestions.add(id);
          showToast(`Đã đánh dấu lưu trữ Câu ${id} ⭐`);
        }
        localStorage.setItem('starred_questions', JSON.stringify([...starredQuestions]));
        renderAll();
      });
    });

    // Copy question & answer
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-copy'), 10);
        copyQuestionText(id);
      });
    });

    // View original book photo pages
    document.querySelectorAll('[data-view-pages]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-view-pages'), 10);
        openQuestionLightbox(id);
      });
    });
  }

  // Copy full question and text
  function copyQuestionText(id) {
    const q = QUESTIONS_DATA.find(item => item.id === id);
    if (!q) return;

    // Convert HTML to clean plain text
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = q.contentHtml;
    const plainAnswer = tempDiv.innerText.trim();

    const fullText = `CÂU ${q.id}: ${q.title}\n(${q.bookPage})\n\n${plainAnswer}`;

    navigator.clipboard.writeText(fullText).then(() => {
      showToast(`Đã sao chép nội dung Câu ${q.id} vào bộ nhớ tạm!`);
    }).catch(() => {
      showToast(`Không thể sao chép tự động`);
    });
  }

  // Lightbox Modal Functions
  window.openLightbox = function (imgSrc) {
    activeLightboxPages = [imgSrc];
    currentLightboxIndex = 0;
    currentZoom = 1;
    lightboxTitle.textContent = 'Hình vẽ / Bảng trích từ tài liệu';
    lightboxTabs.innerHTML = '';
    updateLightboxImage();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function openQuestionLightbox(id) {
    const q = QUESTIONS_DATA.find(item => item.id === id);
    if (!q || !q.photoPages || q.photoPages.length === 0) return;

    activeLightboxPages = q.photoPages;
    currentLightboxIndex = 0;
    currentZoom = 1;
    lightboxTitle.textContent = `Ảnh chụp tài liệu: Câu ${q.id} (${q.bookPage})`;

    // Render tabs if multiple pages
    lightboxTabs.innerHTML = '';
    if (activeLightboxPages.length > 1) {
      activeLightboxPages.forEach((page, idx) => {
        const tab = document.createElement('button');
        tab.className = `tab-btn ${idx === 0 ? 'active' : ''}`;
        tab.textContent = `Trang ${idx + 1}`;
        tab.addEventListener('click', () => {
          currentLightboxIndex = idx;
          currentZoom = 1;
          updateLightboxImage();
          document.querySelectorAll('.lightbox-tabs .tab-btn').forEach((b, i) => {
            b.classList.toggle('active', i === idx);
          });
        });
        lightboxTabs.appendChild(tab);
      });
    }

    updateLightboxImage();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxImage() {
    const src = activeLightboxPages[currentLightboxIndex];
    lightboxImg.src = src;
    lightboxImg.style.transform = `scale(${currentZoom})`;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Zoom controls
  lightboxZoomIn.addEventListener('click', () => {
    currentZoom = Math.min(currentZoom + 0.25, 3.0);
    lightboxImg.style.transform = `scale(${currentZoom})`;
  });

  lightboxZoomOut.addEventListener('click', () => {
    currentZoom = Math.max(currentZoom - 0.25, 0.5);
    lightboxImg.style.transform = `scale(${currentZoom})`;
  });

  lightboxZoomReset.addEventListener('click', () => {
    currentZoom = 1;
    lightboxImg.style.transform = `scale(${currentZoom})`;
  });

  lightboxOpenNewTab.addEventListener('click', () => {
    if (activeLightboxPages[currentLightboxIndex]) {
      window.open(activeLightboxPages[currentLightboxIndex], '_blank');
    }
  });

  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Search input handlers
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClearBtn.style.display = searchQuery ? 'block' : 'none';
    renderAll();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    searchInput.focus();
    renderAll();
  });

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    currentCategory = 'all';
    showOnlyStarred = false;
    toggleStarredFilterBtn.classList.remove('active');
    searchClearBtn.style.display = 'none';
    renderAll();
  });

  // Star filter button
  toggleStarredFilterBtn.addEventListener('click', () => {
    showOnlyStarred = !showOnlyStarred;
    toggleStarredFilterBtn.classList.toggle('active', showOnlyStarred);
    renderAll();
  });

  // Theme Toggle (Light / Dark)
  function initTheme() {
    const saved = localStorage.getItem('theme_preference');
    if (saved) {
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      themeToggleBtn.title = 'Chuyển sang giao diện Sáng';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
      themeToggleBtn.title = 'Chuyển sang giao diện Tối';
    }
    localStorage.setItem('theme_preference', theme);
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
  });

  // Font Size Adjuster
  let baseFontSize = parseInt(localStorage.getItem('user_font_size') || '16', 10);
  document.documentElement.style.setProperty('--font-base-size', `${baseFontSize}px`);

  fontIncBtn.addEventListener('click', () => {
    if (baseFontSize < 22) {
      baseFontSize += 1;
      document.documentElement.style.setProperty('--font-base-size', `${baseFontSize}px`);
      localStorage.setItem('user_font_size', baseFontSize);
      showToast(`Cỡ chữ: ${baseFontSize}px`);
    }
  });

  fontDecBtn.addEventListener('click', () => {
    if (baseFontSize > 13) {
      baseFontSize -= 1;
      document.documentElement.style.setProperty('--font-base-size', `${baseFontSize}px`);
      localStorage.setItem('user_font_size', baseFontSize);
      showToast(`Cỡ chữ: ${baseFontSize}px`);
    }
  });

  // Print button
  printDocBtn.addEventListener('click', () => {
    window.print();
  });

  // Mobile Drawer Toggle
  menuToggleBtn.addEventListener('click', () => {
    appSidebar.classList.toggle('open');
    sidebarBackdrop.classList.toggle('open');
  });

  sidebarBackdrop.addEventListener('click', closeSidebar);

  function closeSidebar() {
    appSidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('open');
  }

  // Back to top button & Scrollspy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scrollspy for sidebar links
    const cards = document.querySelectorAll('.question-card');
    let currentId = null;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = card.id.replace('cau-', '');
      }
    });

    if (currentId) {
      document.querySelectorAll('.sidebar-item').forEach(link => {
        link.classList.toggle('active', link.id === `sidebar-link-${currentId}`);
      });
      document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === currentId);
      });
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Focus search on '/' or 'Ctrl+K'
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    // Close modal on 'Escape'
    if (e.key === 'Escape') {
      if (lightboxModal.classList.contains('open')) {
        closeLightbox();
      } else if (document.activeElement === searchInput) {
        searchInput.blur();
      }
    }
  });

  // Main Render Routine
  function renderAll() {
    renderCategories();
    const filtered = getFilteredQuestions();

    // Update search bar info
    if (searchQuery || currentCategory !== 'all' || showOnlyStarred) {
      searchResultsBar.classList.add('visible');
      resultsCountEl.textContent = `${filtered.length} / ${QUESTIONS_DATA.length}`;
    } else {
      searchResultsBar.classList.remove('visible');
    }

    renderQuickJump();
    renderSidebarList(filtered);
    renderQuestionsList(filtered);
  }

  // Initialization
  initTheme();
  renderAll();

})();
