# 📚 Tài Liệu Tra Cứu Quản Lý Dự Án Phần Mềm (Câu 1 - 38)

Trang web tra cứu và ôn tập nhanh ngân hàng 38 câu hỏi môn **Quản lý Dự án Phần mềm** (Software Project Management), được số hóa và chuẩn hóa 100% bám sát tập tài liệu ảnh gốc (giáo trình Pankaj Jalote / Infosys).

---

## ✨ Điểm nổi bật

1. **Nội dung chuẩn xác & bám sát ảnh gốc**:
   - Đầy đủ 38 câu hỏi từ Câu 1 tới Câu 38.
   - Giữ nguyên cấu trúc, danh sách gạch đầu dòng, các bước quy trình và bảng đối chiếu.
   - Các bảng đối chiếu (Câu 33, Câu 34) và sơ đồ quy trình (Câu 30) được định dạng bảng HTML đẹp mắt đồng thời có **ảnh cắt trực tiếp từ tài liệu gốc**.
   - Nút **"🖼️ Xem ảnh trang sách gốc"** trên mỗi câu cho phép đối chiếu trực tiếp bản chụp gốc qua Lightbox phóng to/thu nhỏ.

2. **Tra cứu siêu tốc**:
   - **Tìm kiếm thông minh**: Hỗ trợ tiếng Việt không dấu (gõ `spc`, `rui ro`, `thac nuoc`, `14`, `cau 22` đều tìm ra ngay tức thì).
   - **Lưới nhảy nhanh (1 → 38)**: Bấm số câu ở thanh bên để cuộn ngay đến vị trí câu hỏi.
   - **Lọc theo chủ đề**: Phân loại theo 8 chuyên đề kiến thức.
   - **Đánh dấu câu hỏi ⭐**: Lưu các câu quan trọng vào bộ nhớ trình duyệt để ôn tập trước khi thi.

3. **Giao diện thân thiện, ưa nhìn**:
   - Phong cách giao diện tài liệu học thuật (sạch sẽ, thanh lịch, không màu mè AI).
   - Hỗ trợ chế độ **Sáng / Tối** (Dark / Light mode).
   - Tăng giảm kích cỡ chữ (`A-` / `A+`) linh hoạt cho mắt.
   - Nút sao chép nội dung câu hỏi kèm đáp án chỉ với 1 click.
   - Hỗ trợ in ấn / Xuất file PDF gọn gàng (`Ctrl + P`).
   - Tương thích hoàn hảo trên điện thoại di động, máy tính bảng và máy tính.

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (Chỉ Mất 1 Phút)

Trang web là **Pure Static Web** (HTML, CSS, JS thuần), không cần cài đặt NodeJS hay build, có thể deploy ngay lập tức lên GitHub Pages miễn phí:

### Cách 1: Dùng lệnh Git (Khuyên dùng)

Mở terminal tại thư mục này và chạy lần lượt các lệnh:

```bash
# 1. Khởi tạo Git
git init

# 2. Thêm tất cả file
git add .

# 3. Commit
git commit -m "Khoi tao trang tra cuu tai lieu QLDAPM Cau 1-38"

# 4. Đổi tên nhánh chính thành main
git branch -M main

# 5. Liên kết tới repository GitHub của bạn (thay URL của bạn vào)
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/TÊN_REPO.git

# 6. Đẩy lên GitHub
git push -u origin main
```

Sau khi push:
1. Vào trang GitHub của bạn -> Chọn tab **Settings** của repository.
2. Tại cột bên trái, chọn **Pages**.
3. Ở mục **Build and deployment** -> **Source**: Chọn `Deploy from a branch`.
4. Ở mục **Branch**: Chọn `main` và thư mục `/ (root)` -> bấm **Save**.
5. Đợi khoảng 30 giây - 1 phút, GitHub sẽ cấp cho bạn một đường link trang web dạng:
   `https://TÊN_GITHUB_CỦA_BẠN.github.io/TÊN_REPO/`

---

### Cách 2: Kéo thả trực tiếp trên web GitHub (Không cần cài Git)

1. Tạo một repository mới trên GitHub (đặt tên ví dụ: `on-tap-qldapm`, để chế độ **Public**).
2. Bấm vào **"uploading an existing file"**.
3. Kéo toàn bộ các file và thư mục (`index.html`, `style.css`, `app.js`, `data.js`, `.nojekyll`, thư mục `assets`) thả vào trình duyệt.
4. Bấm **Commit changes**.
5. Vào **Settings** -> **Pages** -> Chọn Branch `main` -> **Save**.

---

## 💻 Xem Trực Tiếp Trên Máy Tính Cá Nhân

- Bạn chỉ cần **click đúp vào file `index.html`** để mở ngay trên trình duyệt (Chrome, Edge, Cốc Cốc, Firefox,...).
- Hoặc dùng Python mở server local:
  ```bash
  python -m http.server 8000
  ```
  Sau đó mở trình duyệt truy cập: `http://localhost:8000`

---

## 📁 Cấu Trúc Thư Mục

```text
file_taileu/
├── index.html        # Trang chính
├── style.css         # Giao diện thanh lịch, responsive, dark/light mode
├── app.js            # Logic tìm kiếm, lọc câu, đánh dấu, lightbox
├── data.js           # Toàn bộ dữ liệu 38 câu hỏi đã số hóa
├── .nojekyll         # File cấu hình bắt buộc cho GitHub Pages
├── README.md         # Hướng dẫn chi tiết
└── assets/
    ├── images/       # Ảnh cắt các hình vẽ, bảng biểu (Sơ đồ câu 30, Bảng câu 33, Bảng câu 34)
    └── pages/        # Ảnh chụp các trang sách gốc (page_01 -> page_19)
```
