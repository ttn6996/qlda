/**
 * Logic điều khiển tra cứu ngân hàng câu hỏi Quản lý dự án phần mềm (Câu 1 - Câu 38)
 * Sử dụng toàn bộ biểu tượng vector SVG chuyên nghiệp, hỗ trợ Mục lục câu hỏi riêng biệt.
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
  let currentViewMode = 'reading'; // 'reading' | 'toc'
  let allChaptersCollapsed = false;

  // DOM Elements
  const questionsContainer = document.getElementById('questionsContainer');
  const dedicatedTocView = document.getElementById('dedicatedTocView');
  const tocChaptersGrid = document.getElementById('tocChaptersGrid');
  const tocModal = document.getElementById('tocModal');
  const tocModalContent = document.getElementById('tocModalContent');
  const tocModalSearchInput = document.getElementById('tocModalSearchInput');
  const openTocModalBtn = document.getElementById('openTocModalBtn');
  const closeTocModalBtn = document.getElementById('closeTocModalBtn');
  const viewReadingBtn = document.getElementById('viewReadingBtn');
  const viewTocBtn = document.getElementById('viewTocBtn');
  const categoryFilterWrapper = document.getElementById('categoryFilterWrapper');
  const tocExpandAllBtn = document.getElementById('tocExpandAllBtn');
  const tocExpandAllText = document.getElementById('tocExpandAllText');

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
  const themeIconContainer = document.getElementById('themeIconContainer');
  const fontDecBtn = document.getElementById('fontDecBtn');
  const fontIncBtn = document.getElementById('fontIncBtn');
  const printDocBtn = document.getElementById('printDocBtn');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const appSidebar = document.getElementById('appSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastEl = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');

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

  // SVG Icons Library
  const ICONS = {
    sun: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    book: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    starOutline: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    starFilled: `<svg width="17" height="17" viewBox="0 0 24 24" fill="#d97706" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    image: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
    chevronDown: `<svg class="toc-toggle-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    searchEmpty: `<svg class="empty-state-svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`
  };

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
    toastText.textContent = message;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2200);
  }

  // 8 Chapters definition for Dedicated TOC
  const CHAPTERS_DATA = [
    {
      id: 1,
      num: 'Chương 1',
      title: 'Tổng quan & Khái niệm Quản lý Dự án',
      range: 'Câu 1 - Câu 5',
      qIds: [1, 2, 3, 4, 5]
    },
    {
      id: 2,
      num: 'Chương 2',
      title: 'Tiến trình chuẩn Infosys, Baseline & BOK',
      range: 'Câu 6 - Câu 10',
      qIds: [6, 7, 8, 9, 10]
    },
    {
      id: 3,
      num: 'Chương 3',
      title: 'Quản lý thay đổi yêu cầu & Ước lượng nỗ lực',
      range: 'Câu 11 - Câu 14',
      qIds: [11, 12, 13, 14]
    },
    {
      id: 4,
      num: 'Chương 4',
      title: 'Quản lý chất lượng & Hoạt động phòng ngừa lỗi',
      range: 'Câu 15 - Câu 17',
      qIds: [15, 16, 17]
    },
    {
      id: 5,
      num: 'Chương 5',
      title: 'Quản lý rủi ro dự án (Đánh giá & Kiểm soát)',
      range: 'Câu 18 - Câu 20',
      qIds: [18, 19, 20]
    },
    {
      id: 6,
      num: 'Chương 6',
      title: 'Hệ thống số đo, SPC & Cơ cấu tổ chức đội dự án',
      range: 'Câu 21 - Câu 26',
      qIds: [21, 22, 23, 24, 25, 26]
    },
    {
      id: 7,
      num: 'Chương 7',
      title: 'Quản lý cấu hình (CM) & Tiến trình xem xét lại',
      range: 'Câu 27 - Câu 32',
      qIds: [27, 28, 29, 30, 31, 32]
    },
    {
      id: 8,
      num: 'Chương 8',
      title: 'Kiểm soát cột mốc & Phân tích kết thúc (Dự án ACIC)',
      range: 'Câu 33 - Câu 38',
      qIds: [33, 34, 35, 36, 37, 38]
    }
  ];

  // Categories list
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

      const label = cat === 'all' ? 'Tất cả 38 câu' : cat;
      btn.innerHTML = `${label} <span class="chip-count">${count}</span>`;
      btn.addEventListener('click', () => {
        currentCategory = cat;
        renderAll();
      });
      categoryChips.appendChild(btn);
    });
  }

  // Filter questions based on current state
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
        switchToReadingAndScrollTo(q.id);
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
        ${isStarred ? `<span class="sidebar-star-icon">${ICONS.starFilled}</span>` : ''}
      `;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        switchToReadingAndScrollTo(q.id);
        if (window.innerWidth <= 960) closeSidebar();
      });

      sidebarNav.appendChild(a);
    });
  }

  // Switch to Reading View if in TOC view, then scroll to question
  function switchToReadingAndScrollTo(id) {
    if (currentViewMode !== 'reading') {
      setViewMode('reading');
    }
    // Small timeout to let DOM render reading view
    setTimeout(() => {
      scrollToQuestion(id);
    }, 60);
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

  // Render Questions in Main Pane (Reading View)
  function renderQuestionsList(filtered) {
    questionsContainer.innerHTML = '';

    if (filtered.length === 0) {
      questionsContainer.innerHTML = `
        <div class="empty-state">
          ${ICONS.searchEmpty}
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
            <span class="page-tag">${ICONS.book} ${q.bookPage}</span>
          </div>
          <div class="card-actions">
            <button class="icon-btn ${isStarred ? 'starred' : ''}" data-star="${q.id}" title="${isStarred ? 'Bỏ đánh dấu' : 'Đánh dấu câu này'}">
              ${isStarred ? ICONS.starFilled : ICONS.starOutline}
            </button>
            <button class="icon-btn" data-copy="${q.id}" title="Sao chép nội dung câu hỏi & câu trả lời">
              ${ICONS.copy}
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
            ${ICONS.image}
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
            ${ICONS.copy}
            Chép câu ${q.id}
          </button>
        </div>
      `;

      card.innerHTML = header + title + body + footer;
      questionsContainer.appendChild(card);
    });

    attachCardListeners();
  }

  // Attach card action listeners
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
          showToast(`Đã lưu Câu ${id} vào mục đánh dấu`);
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

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = q.contentHtml;
    const plainAnswer = tempDiv.innerText.trim();
    const fullText = `CÂU ${q.id}: ${q.title}\n(${q.bookPage})\n\n${plainAnswer}`;

    navigator.clipboard.writeText(fullText).then(() => {
      showToast(`Đã sao chép nội dung Câu ${q.id}!`);
    }).catch(() => {
      showToast(`Không thể sao chép`);
    });
  }

  // =========================================================================
  // DEDICATED TABLE OF CONTENTS (MỤC LỤC RIÊNG) LOGIC
  // =========================================================================

  function renderDedicatedToc(filterQuery = '') {
    const normFilter = removeVietnameseTones(filterQuery.trim());
    tocChaptersGrid.innerHTML = '';

    CHAPTERS_DATA.forEach(chap => {
      // Get questions in this chapter
      const chapterQuestions = QUESTIONS_DATA.filter(q => chap.qIds.includes(q.id));
      
      // Filter if there's a filter query
      const visibleQuestions = chapterQuestions.filter(q => {
        if (!normFilter) return true;
        const normTitle = removeVietnameseTones(q.title);
        return normTitle.includes(normFilter) || String(q.id) === normFilter;
      });

      if (visibleQuestions.length === 0) return;

      const card = document.createElement('div');
      card.className = `toc-chapter-card ${allChaptersCollapsed ? 'collapsed' : ''}`;
      card.id = `toc-chapter-${chap.id}`;

      // Chapter Header
      const header = document.createElement('div');
      header.className = 'toc-chapter-header';
      header.innerHTML = `
        <div class="toc-chapter-title-group">
          <span class="toc-chapter-num">${chap.num}</span>
          <span class="toc-chapter-name">${chap.title}</span>
        </div>
        <div class="toc-chapter-meta">
          <span class="toc-chapter-count">${visibleQuestions.length} câu</span>
          ${ICONS.chevronDown}
        </div>
      `;

      header.addEventListener('click', () => {
        card.classList.toggle('collapsed');
      });

      // Questions List in Chapter
      const list = document.createElement('div');
      list.className = 'toc-questions-list';

      visibleQuestions.forEach(q => {
        const row = document.createElement('a');
        row.href = `#cau-${q.id}`;
        row.className = 'toc-q-row';

        // Badges for special questions
        let badgeHtml = '';
        if (q.id === 30) {
          badgeHtml = `<span class="badge-figure">Có sơ đồ quy trình</span>`;
        } else if (q.id === 33 || q.id === 34) {
          badgeHtml = `<span class="badge-table">Có bảng đối chiếu</span>`;
        } else if (q.id === 25) {
          badgeHtml = `<span class="badge-note">Bổ sung chuẩn</span>`;
        }

        const isStarred = starredQuestions.has(q.id);

        row.innerHTML = `
          <div class="toc-q-left">
            <span class="toc-q-num">Câu ${q.id}</span>
            <span class="toc-q-title">${q.title}</span>
          </div>
          <div class="toc-q-right">
            ${badgeHtml}
            <span class="toc-q-page">${q.bookPage}</span>
            ${isStarred ? `<span style="color:var(--accent-gold);">${ICONS.starFilled}</span>` : ''}
            ${ICONS.chevronRight}
          </div>
        `;

        row.addEventListener('click', (e) => {
          e.preventDefault();
          switchToReadingAndScrollTo(q.id);
        });

        list.appendChild(row);
      });

      card.appendChild(header);
      card.appendChild(list);
      tocChaptersGrid.appendChild(card);
    });

    if (tocChaptersGrid.children.length === 0) {
      tocChaptersGrid.innerHTML = `
        <div class="empty-state">
          ${ICONS.searchEmpty}
          <p>Không có câu hỏi nào khớp với "${filterQuery}".</p>
        </div>
      `;
    }
  }

  // Render Table of Contents in Quick Modal
  function renderTocModal(filterQuery = '') {
    const normFilter = removeVietnameseTones(filterQuery.trim());
    tocModalContent.innerHTML = '';

    CHAPTERS_DATA.forEach(chap => {
      const chapterQuestions = QUESTIONS_DATA.filter(q => chap.qIds.includes(q.id));
      const visibleQuestions = chapterQuestions.filter(q => {
        if (!normFilter) return true;
        const normTitle = removeVietnameseTones(q.title);
        return normTitle.includes(normFilter) || String(q.id) === normFilter;
      });

      if (visibleQuestions.length === 0) return;

      const groupDiv = document.createElement('div');
      groupDiv.style.marginBottom = '1.25rem';

      const groupHeader = document.createElement('div');
      groupHeader.style.cssText = 'font-size:0.8rem; font-weight:700; color:var(--primary); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:0.4rem; padding-bottom:0.25rem; border-bottom:1px solid var(--border-color);';
      groupHeader.textContent = `${chap.num}: ${chap.title} (${chap.range})`;
      groupDiv.appendChild(groupHeader);

      visibleQuestions.forEach(q => {
        const row = document.createElement('div');
        row.className = 'toc-q-row';
        row.style.cursor = 'pointer';

        let badgeHtml = '';
        if (q.id === 30) badgeHtml = `<span class="badge-figure">Có sơ đồ</span>`;
        if (q.id === 33 || q.id === 34) badgeHtml = `<span class="badge-table">Có bảng</span>`;

        row.innerHTML = `
          <div class="toc-q-left">
            <span class="toc-q-num">#${q.id}</span>
            <span class="toc-q-title">${q.title}</span>
          </div>
          <div class="toc-q-right">
            ${badgeHtml}
            <span class="toc-q-page">${q.bookPage}</span>
          </div>
        `;

        row.addEventListener('click', () => {
          closeTocModal();
          switchToReadingAndScrollTo(q.id);
        });

        groupDiv.appendChild(row);
      });

      tocModalContent.appendChild(groupDiv);
    });

    if (tocModalContent.children.length === 0) {
      tocModalContent.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:1rem;">Không tìm thấy câu hỏi nào phù hợp.</p>`;
    }
  }

  // View Mode Switching
  function setViewMode(mode) {
    currentViewMode = mode;
    if (mode === 'reading') {
      viewReadingBtn.classList.add('active');
      viewTocBtn.classList.remove('active');
      categoryFilterWrapper.style.display = 'block';
      questionsContainer.style.display = 'flex';
      dedicatedTocView.style.display = 'none';
    } else {
      viewTocBtn.classList.add('active');
      viewReadingBtn.classList.remove('active');
      categoryFilterWrapper.style.display = 'none';
      questionsContainer.style.display = 'none';
      dedicatedTocView.style.display = 'flex';
      renderDedicatedToc();
    }
  }

  viewReadingBtn.addEventListener('click', () => setViewMode('reading'));
  viewTocBtn.addEventListener('click', () => setViewMode('toc'));

  // Expand / Collapse All Chapters in TOC View
  tocExpandAllBtn.addEventListener('click', () => {
    allChaptersCollapsed = !allChaptersCollapsed;
    document.querySelectorAll('.toc-chapter-card').forEach(card => {
      card.classList.toggle('collapsed', allChaptersCollapsed);
    });
    tocExpandAllText.textContent = allChaptersCollapsed ? 'Mở rộng tất cả' : 'Thu gọn tất cả';
  });

  // TOC Modal Controls
  function openTocModal() {
    renderTocModal(tocModalSearchInput.value);
    tocModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => tocModalSearchInput.focus(), 100);
  }

  function closeTocModal() {
    tocModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openTocModalBtn.addEventListener('click', openTocModal);
  closeTocModalBtn.addEventListener('click', closeTocModal);
  tocModal.addEventListener('click', (e) => {
    if (e.target === tocModal) closeTocModal();
  });

  tocModalSearchInput.addEventListener('input', (e) => {
    renderTocModal(e.target.value);
  });

  // Lightbox Modal Functions
  window.openLightbox = function (imgSrc) {
    activeLightboxPages = [imgSrc];
    currentLightboxIndex = 0;
    currentZoom = 1;
    lightboxTitle.textContent = 'Hình vẽ / Bảng trích từ tài liệu gốc';
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
    lightboxTitle.textContent = `Ảnh tài liệu gốc: Câu ${q.id} (${q.bookPage})`;

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
    searchClearBtn.style.display = searchQuery ? 'flex' : 'none';
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

  // Star filter toggle
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
      themeIconContainer.innerHTML = ICONS.sun;
      themeToggleBtn.title = 'Chuyển sang giao diện Sáng';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIconContainer.innerHTML = ICONS.moon;
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

  // Scrollspy & Back-to-top
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    if (currentViewMode === 'reading') {
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
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Focus search on '/' or 'Ctrl+K'
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput && document.activeElement !== tocModalSearchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    // Open TOC Modal on key 'm' / 'M'
    if ((e.key === 'm' || e.key === 'M') && document.activeElement !== searchInput && document.activeElement !== tocModalSearchInput) {
      e.preventDefault();
      openTocModal();
    }
    // Close modals on 'Escape'
    if (e.key === 'Escape') {
      if (lightboxModal.classList.contains('open')) {
        closeLightbox();
      } else if (tocModal.classList.contains('open')) {
        closeTocModal();
      } else if (document.activeElement === searchInput) {
        searchInput.blur();
      }
    }
  });

  // Main Render Routine
  function renderAll() {
    renderCategories();
    const filtered = getFilteredQuestions();

    if (searchQuery || currentCategory !== 'all' || showOnlyStarred) {
      searchResultsBar.classList.add('visible');
      resultsCountEl.textContent = `${filtered.length} / ${QUESTIONS_DATA.length}`;
    } else {
      searchResultsBar.classList.remove('visible');
    }

    renderQuickJump();
    renderSidebarList(filtered);
    renderQuestionsList(filtered);
    renderDedicatedToc(searchQuery);
  }

  // Initialization
  initTheme();
  renderAll();

})();
