// Dữ liệu ngân hàng câu hỏi Quản lý dự án phần mềm (Câu 1 - Câu 38)
const QUESTIONS_DATA = [
  {
    "id": 1,
    "title": "Trình bày khái niệm dự án và các đặc trưng cơ bản của dự án. Dự án phần mềm có gì khác biệt so với các dự án nói chung?",
    "category": "Tổng quan & Khái niệm",
    "bookPage": "Trang 6",
    "photoPage": "assets/pages/page_01.jpg",
    "tags": [
      "dự án",
      "khái niệm",
      "đặc trưng",
      "dự án phần mềm",
      "khác biệt"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm dự án:</strong></p>\n<p>Dự án là một chuỗi các công việc (nhiệm vụ, hoạt động) được thực hiện nhằm đạt được mục tiêu đề ra trong điều kiện ràng buộc về phạm vi, thời gian, ngân sách.</p>\n<p><strong>Dự án phần mềm</strong> là dự án nhằm tạo ra các sản phẩm phần mềm.</p>\n\n<p><strong>2. Đặc trưng cơ bản của dự án:</strong></p>\n<ul>\n  <li>Có mục đích, kết quả rõ ràng.</li>\n  <li>Thời gian tồn tại có tính hữu hạn.</li>\n  <li>Sản phẩm, kết quả của dự án mang tính độc đáo và mới lạ.</li>\n  <li>Có liên quan đến nhiều bên.</li>\n  <li>Dự án thường mang tính không chắc chắn.</li>\n  <li>Môi trường tổ chức thực hiện <em>(Trang 12)</em>.</li>\n</ul>\n\n<p><strong>3. Dự án phần mềm có gì khác biệt so với các dự án nói chung:</strong></p>\n<ul>\n  <li><strong>Sản phẩm phần mềm vô hình</strong>, khó quan sát trực tiếp.</li>\n  <li><strong>Yêu cầu phần mềm khó xác định đầy đủ</strong> từ đầu và rất dễ thay đổi.</li>\n  <li><strong>Khó ước lượng chính xác</strong> thời gian, chi phí và nỗ lực.</li>\n  <li><strong>Tiến độ khó theo dõi</strong> vì nhiều việc nằm trong phân tích, thiết kế, lập trình, kiểm thử.</li>\n  <li><strong>Rủi ro cao hơn</strong> do phụ thuộc chặt chẽ vào yêu cầu, công nghệ và con người.</li>\n  <li><strong>Chất lượng khó đánh giá</strong>, không chỉ &ldquo;chạy được&rdquo; mà còn phải ít lỗi, dễ bảo trì, hiệu năng tốt.</li>\n  <li><strong>Phụ thuộc nhiều vào năng lực</strong> của đội dự án: phân tích, thiết kế, lập trình, kiểm thử và quản lý.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_01.jpg"
    ]
  },
  {
    "id": 2,
    "title": "Người quản lý dự án cần phải có những phẩm chất gì? Họ thường phải tham gia những khóa học nào?",
    "category": "Tổng quan & Khái niệm",
    "bookPage": "Trang 7",
    "photoPage": "assets/pages/page_01.jpg",
    "tags": [
      "quản lý dự án",
      "phẩm chất",
      "khóa học",
      "PM"
    ],
    "contentHtml": "\n<p><strong>1. Phẩm chất của người quản lý dự án:</strong></p>\n<ul>\n  <li>Giỏi chuyên môn.</li>\n  <li>Có khả năng trong tương tác với khách hàng, biết thu thập được yêu cầu của khách hàng.</li>\n  <li>Biết cách quản lý đội dự án.</li>\n</ul>\n\n<p><strong>2. Các khóa học người quản lý dự án thường phải tham gia:</strong></p>\n<ul>\n  <li><strong>Khóa học tập trung vào tất cả các khía cạnh của quản lý dự án</strong> như: Lập kế hoạch dự án, giám sát dự án, kiểm soát dự án.</li>\n  <li><strong>Khóa học về đặc tả yêu cầu khách hàng:</strong> Học cách làm thế nào để khơi ra những yêu cầu của khách hàng, làm thế nào để lập tài liệu yêu cầu, xác minh yêu cầu.</li>\n  <li><strong>Khóa học về kỹ năng mềm:</strong> Cách đánh giá và quản lý đội dự án, quan tâm khách hàng và quản lý khách hàng, khả năng lãnh đạo, quan hệ xã hội và văn hóa kinh doanh ở các quốc gia.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_01.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Nêu các vấn đề cơ bản trong các dự án phần mềm. Trình bày sự ảnh hưởng của vấn đề \"Thay đổi yêu cầu không kiểm soát được\" tới sự thành công của dự án.",
    "category": "Tổng quan & Khái niệm",
    "bookPage": "Trang 7 - 8",
    "photoPage": "assets/pages/page_01.jpg",
    "tags": [
      "vấn đề cơ bản",
      "thay đổi yêu cầu",
      "thất bại",
      "ảnh hưởng"
    ],
    "contentHtml": "\n<p><strong>1. Các vấn đề cơ bản trong các dự án phần mềm:</strong></p>\n<ul>\n  <li>Yêu cầu ban đầu không đầy đủ.</li>\n  <li>Thay đổi yêu cầu không kiểm soát.</li>\n  <li>Dự toán không chính xác.</li>\n  <li>Phụ thuộc các nguồn bên ngoài (các người bán hàng, chủ thầu phụ...).</li>\n  <li>Gặp khó khăn trong kết thúc dự án.</li>\n  <li>Thay đổi thường xuyên nhân sự đội dự án.</li>\n  <li>Theo dõi và giám sát không đầy đủ.</li>\n</ul>\n\n<p><strong>2. Trình bày sự ảnh hưởng của vấn đề &ldquo;Thay đổi yêu cầu không kiểm soát được&rdquo; tới sự thành công của dự án:</strong></p>\n<ul>\n  <li>Là <strong>nguyên nhân lớn dẫn đến thất bại</strong> dự án phần mềm.</li>\n  <li>Làm <strong>vượt chi phí</strong>, <strong>chậm tiến độ</strong>.</li>\n  <li>Làm <strong>giảm chất lượng</strong> sản phẩm.</li>\n  <li>Làm sản phẩm lệch khỏi mục tiêu/yêu cầu ban đầu.</li>\n  <li>Làm tăng khối lượng công việc vì phải sửa lại:\n    <ul>\n      <li>Yêu cầu,</li>\n      <li>Thiết kế,</li>\n      <li>Mã nguồn,</li>\n      <li>Kiểm thử,</li>\n      <li>Kế hoạch.</li>\n    </ul>\n  </li>\n  <li>Làm ước lượng ban đầu về thời gian, nhân lực, ngân sách không còn chính xác.</li>\n  <li>Gây rối trong quản lý vì các thành viên có thể hiểu sai, sửa không đồng bộ hoặc bỏ sót thay đổi.</li>\n  <li>Nhiều thay đổi nhỏ tích lũy lại có thể tạo tác động lớn, khiến dự án khó hoàn thành đúng kế hoạch.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_01.jpg",
      "assets/pages/page_02.jpg"
    ]
  },
  {
    "id": 4,
    "title": "Anh (Chị) hãy trình bày khái niệm về hợp đồng phí cộng thêm (Cuối T26) và hợp đồng giá cố định (T29). Sự khác nhau cơ bản giữa chúng?",
    "category": "Tổng quan & Khái niệm",
    "bookPage": "Trang 8 - 9",
    "photoPage": "assets/pages/page_02.jpg",
    "tags": [
      "hợp đồng",
      "phí cộng thêm",
      "giá cố định",
      "cost-plus",
      "fixed-price"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm:</strong></p>\n<ul>\n  <li><strong>Hợp đồng phí cộng thêm (Cost-plus contract):</strong> Là mối quan hệ theo hợp đồng ở đó người phát triển được trả công cho chi phí dịch vụ đã làm và thêm vào một số chi phí khác (phí dịch vụ / lợi nhuận).</li>\n  <li><strong>Hợp đồng giá cố định (Fixed-price contract):</strong> Là một cam kết của nhà phát triển sẽ cung cấp sản phẩm với chi phí, lịch trình và các yêu cầu được thỏa thuận trước.</li>\n</ul>\n\n<p><strong>2. Sự khác nhau cơ bản:</strong></p>\n<ul>\n  <li><strong>Hợp đồng chi phí cộng thêm:</strong> Thanh toán theo chi phí thực tế phát sinh cộng thêm phí/lợi nhuận, nên linh hoạt hơn nhưng khách hàng chịu rủi ro chi phí tăng.</li>\n  <li><strong>Hợp đồng giá cố định:</strong> Thanh toán theo mức giá đã thỏa thuận trước, nên dễ kiểm soát ngân sách hơn nhưng nhà phát triển chịu rủi ro nếu chi phí thực tế vượt dự kiến.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_02.jpg"
    ]
  },
  {
    "id": 5,
    "title": "Anh (Chị) hãy trình bày về kiến nghị không do yêu cầu và kiến nghị do yêu cầu. Sự khác nhau cơ bản giữa chúng?",
    "category": "Tổng quan & Khái niệm",
    "bookPage": "Trang 9 - 10",
    "photoPage": "assets/pages/page_02.jpg",
    "tags": [
      "kiến nghị",
      "proposal",
      "do yêu cầu",
      "không do yêu cầu",
      "RFP"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm:</strong></p>\n<ul>\n  <li><strong>Kiến nghị không do yêu cầu (Unsolicited proposal):</strong> Là bản kiến nghị do nhà phát triển chủ động gửi cho khách hàng khi khách hàng chưa có yêu cầu chính thức. Mục đích là giới thiệu vấn đề, đề xuất giải pháp và tạo sự quan tâm ban đầu. Loại kiến nghị này thường ít chính thức hơn và có thể dẫn đến các cuộc trao đổi, thương thảo sau này.</li>\n  <li><strong>Kiến nghị do yêu cầu (Solicited proposal):</strong> Là bản kiến nghị được lập khi khách hàng đã đưa ra yêu cầu chính thức, thường là yêu cầu mời thầu hoặc yêu cầu đề xuất (RFP). Nhà phát triển phải chuẩn bị kiến nghị đầy đủ, chi tiết, trình bày giải pháp, cách thực hiện, chi phí, lịch trình và năng lực đáp ứng.</li>\n</ul>\n\n<p><strong>2. Sự khác nhau cơ bản:</strong></p>\n<ul>\n  <li><strong>Kiến nghị không do yêu cầu:</strong> Xuất phát từ sự chủ động của nhà phát triển, ít chính thức hơn và nhằm gợi mở nhu cầu.</li>\n  <li><strong>Kiến nghị do yêu cầu:</strong> Xuất phát từ yêu cầu chính thức của khách hàng, có tính chính thức, chi tiết và cạnh tranh cao hơn.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_02.jpg",
      "assets/pages/page_03.jpg"
    ]
  },
  {
    "id": 6,
    "title": "Cơ sở dữ liệu tiến trình là gì? Tại sao lại cần phải có nó? Những loại dữ liệu chính thường được lưu giữ trong cơ sở dữ liệu tiến trình là gì?",
    "category": "Tiến trình & Baseline & BOK",
    "bookPage": "Trang 10 - 11",
    "photoPage": "assets/pages/page_03.jpg",
    "tags": [
      "cơ sở dữ liệu tiến trình",
      "PDB",
      "process database",
      "dữ liệu"
    ],
    "contentHtml": "\n<p><strong>1. Cơ sở dữ liệu tiến trình là gì?</strong></p>\n<p>Cơ sở dữ liệu tiến trình (Process Database - PDB) là kho lưu trữ lâu dài các dữ liệu về tiến trình của những dự án đã được thực hiện trong công ty. Nó ghi lại thông tin từ các dự án đã hoàn thành để phục vụ cho việc lập kế hoạch, ước lượng, phân tích năng suất và chất lượng cho các dự án sau.</p>\n\n<p><strong>2. Tại sao cần phải có cơ sở dữ liệu tiến trình?</strong></p>\n<p>Cần có cơ sở dữ liệu tiến trình vì nó giúp người quản lý dự án sử dụng kinh nghiệm từ các dự án trước, từ đó lập kế hoạch chính xác hơn, ước lượng thời gian, chi phí, nỗ lực tốt hơn, giảm sai lầm và nâng cao hiệu quả quản lý dự án.</p>\n\n<p><strong>3. Những loại dữ liệu chính thường được lưu giữ gồm:</strong></p>\n<ol>\n  <li><strong>Các đặc trưng của dự án:</strong> [tên dự án, người quản lý, lĩnh vực ứng dụng, nền tảng, ngôn ngữ lập trình, hệ quản trị cơ sở dữ liệu, mục tiêu, rủi ro, quy mô đội dự án].</li>\n  <li><strong>Thời gian biểu của dự án:</strong> [ngày bắt đầu, ngày kết thúc dự kiến và thực tế].</li>\n  <li><strong>Nỗ lực của dự án:</strong> [tổng nỗ lực ước lượng, nỗ lực thực tế và phân bố nỗ lực theo các giai đoạn như đặc tả, thiết kế, cài đặt, kiểm thử].</li>\n  <li><strong>Kích thước phần mềm:</strong> [số dòng mã lệnh (LOC), số chương trình hoặc điểm chức năng (Function Point)].</li>\n  <li><strong>Lỗi của sản phẩm:</strong> [số lượng lỗi phát hiện, lỗi ở các giai đoạn khác nhau như xem xét yêu cầu, thiết kế, mã nguồn, kiểm thử].</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_03.jpg"
    ]
  },
  {
    "id": 7,
    "title": "Anh (Chị) hãy trình bày về baseline của một tiến trình: Khái niệm, vai trò và các loại baseline.",
    "category": "Tiến trình & Baseline & BOK",
    "bookPage": "Trang 11 - 12",
    "photoPage": "assets/pages/page_03.jpg",
    "tags": [
      "baseline",
      "đường cơ sở",
      "tiến trình",
      "vai trò"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm Baseline của một tiến trình:</strong></p>\n<p>Baseline là tập hợp các số liệu lịch sử dùng để mô tả và định lượng khả năng thực hiện của một tiến trình, từ đó dự đoán kết quả của các dự án khi áp dụng tiến trình đó.</p>\n\n<p><strong>2. Vai trò của Baseline:</strong></p>\n<ul>\n  <li>Cho thấy khả năng của một tiến trình.</li>\n  <li>Cung cấp hình ảnh định lượng về hiệu quả của tiến trình tại một thời điểm.</li>\n  <li>Là cơ sở để dự đoán các kết quả dự kiến của dự án khi áp dụng tiến trình.</li>\n  <li>Được xây dựng từ dữ liệu năng lực trong quá khứ của tiến trình.</li>\n  <li>Giúp giảm sai lệch khi dự đoán kết quả của các dự án cùng loại.</li>\n</ul>\n\n<p><strong>3. Các loại Baseline:</strong></p>\n<ul>\n  <li><strong>a) Baseline riêng biệt cho từng loại tiến trình:</strong><br>\n  Do mỗi loại tiến trình có khả năng khác nhau nên các công ty phần mềm phải tạo ra một baseline riêng biệt cho mỗi loại tiến trình trong công ty. Ví dụ các tiến trình: Tiến trình bảo trì, Tiến trình tái cấu trúc, Tiến trình phát triển. Mỗi loại tiến trình sẽ có một baseline riêng được định nghĩa cho nó.</li>\n  <li><strong>b) Baseline tổng quát:</strong><br>\n  Bảng 3.5 trình bày baseline tổng quát cho các dự án phát triển và sử dụng ngôn ngữ thuộc thế hệ thứ ba. Đây là baseline dùng chung cho nhóm dự án có đặc điểm tương tự.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_03.jpg",
      "assets/pages/page_04.jpg"
    ]
  },
  {
    "id": 8,
    "title": "BOK là gì? Kiến thức trong BOK bao gồm những chủ đề gì? Chúng đến từ đâu?",
    "category": "Tiến trình & Baseline & BOK",
    "bookPage": "Trang 12 - 13",
    "photoPage": "assets/pages/page_04.jpg",
    "tags": [
      "BOK",
      "Body of Knowledge",
      "tri thức",
      "chủ đề"
    ],
    "contentHtml": "\n<p><strong>1. BOK là gì?</strong></p>\n<p>&rArr; <strong>BOK (Body of Knowledge)</strong> là khung kiến thức hay hệ tri thức, được sử dụng để đóng gói, lưu trữ và tái sử dụng kinh nghiệm, kiến thức của công ty.<br>\n<em>Ngoài ra:</em> Hệ thống BOK dựa trên Web có tiện ích tìm kiếm theo từ khóa riêng hoặc theo tên tác giả.</p>\n\n<p><strong>2. Kiến thức trong BOK bao gồm những chủ đề gì?</strong></p>\n<p>Kiến thức trong BOK chủ yếu là trong các bài viết, được tổ chức theo các chủ đề khác nhau. Các chủ đề chính bao gồm:</p>\n<ul>\n  <li>Máy tính và các dịch vụ truyền thông.</li>\n  <li>Đặc tả yêu cầu.</li>\n  <li>Thiết kế.</li>\n  <li>Xây dựng.</li>\n  <li>Xem xét lại, kiểm tra, kiểm thử.</li>\n  <li>Các công cụ.</li>\n  <li>Các phương pháp và kỹ thuật.</li>\n  <li>Giáo dục và nghiên cứu.</li>\n  <li>Đảm bảo chất lượng và năng suất.</li>\n  <li>Quản lý dự án.</li>\n</ul>\n\n<p><strong>3. Các kiến thức trong BOK đến từ đâu?</strong></p>\n<p>&rArr; Kiến thức trong BOK chủ yếu đến từ:</p>\n<ul>\n  <li>Các bài học kinh nghiệm rút ra từ thực tế.</li>\n  <li>Các thực hành tốt nhất (best practices).</li>\n  <li>Các bài viết do thành viên trong công ty đóng góp.</li>\n  <li>Sau đó được xét duyệt trước khi đưa vào BOK.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_04.jpg"
    ]
  },
  {
    "id": 9,
    "title": "Anh (Chị) hãy nêu những mô hình công nghệ phần mềm nào đã và đang được sử dụng trên thế giới. Mô hình tiến trình công nghệ phần mềm chuẩn được sử dụng ở Infosys được xây dựng bằng cách nào?",
    "category": "Tiến trình & Baseline & BOK",
    "bookPage": "Trang 13 - 15",
    "photoPage": "assets/pages/page_04.jpg",
    "tags": [
      "mô hình",
      "Infosys",
      "thác nước",
      "RUP",
      "tiến trình chuẩn"
    ],
    "contentHtml": "\n<p><strong>1. Những mô hình công nghệ phần mềm nào đã và đang được sử dụng trên thế giới?</strong></p>\n<p>Hiện nay có một số mô hình tiến trình để phát triển phần mềm đang tồn tại. Những mô hình phổ biến nhất bao gồm:</p>\n<ul>\n  <li>Mô hình thác nước (Waterfall).</li>\n  <li>Mô hình tăng trưởng theo vòng lặp (Iterative / Incremental).</li>\n  <li>Mô hình tạo bản mẫu (Prototyping).</li>\n  <li>Mô hình xoắn ốc (Spiral).</li>\n  <li>Mô hình RUP (Rational Unified Process).</li>\n</ul>\n<blockquote>\n<strong>Sách còn nêu:</strong> Trong đó, mô hình thác nước được sử dụng rộng rãi nhất, nó tổ chức các giai đoạn theo một trình tự. Mô hình RUP là mô hình hiện đại nhất, nó được áp dụng cho các dự án lớn, phức tạp.\n</blockquote>\n\n<p><strong>2. Mô hình tiến trình công nghệ phần mềm chuẩn được sử dụng ở Infosys được xây dựng bằng cách nào?</strong></p>\n<p>Tiến trình phát triển chuẩn được sử dụng tại một công ty (ở đây ví dụ ở công ty Infosys) được phát triển <strong>dựa trên mô hình thác nước</strong>.</p>\n<p>Trong mô hình này, các hoạt động truyền thống của mô hình thác nước đã được phân chia thành các hoạt động nhỏ hơn, để cho phép thực hiện song song ở vài hoạt động.</p>\n<p><em>Ví dụ:</em> Lập kế hoạch kiểm thử hệ thống được thực hiện như một hoạt động riêng biệt, đây là cách để cho phép các đội dự án có thể lập kế hoạch để thực hiện hoạt động kiểm thử song song với hoạt động cài đặt mã.</p>\n\n<p><strong>Các hoạt động trong tiến trình gồm:</strong></p>\n<div class=\"two-col-list\">\n  <ul>\n    <li>Phân tích yêu cầu.</li>\n    <li>Thiết kế mức cao.</li>\n    <li>Thiết kế chi tiết.</li>\n    <li>Mã hóa.</li>\n    <li>Kiểm thử đơn vị.</li>\n    <li>Lập kế hoạch tích hợp.</li>\n    <li>Tích hợp và kiểm thử tích hợp.</li>\n  </ul>\n  <ul>\n    <li>Lập kế hoạch kiểm thử hệ thống.</li>\n    <li>Kiểm thử hệ thống.</li>\n    <li>Lập tài liệu.</li>\n    <li>Kiểm thử chấp nhận.</li>\n    <li>Cài đặt.</li>\n    <li>Hỗ trợ bảo hành.</li>\n  </ul>\n</div>\n",
    "photoPages": [
      "assets/pages/page_04.jpg",
      "assets/pages/page_05.jpg"
    ]
  },
  {
    "id": 10,
    "title": "Tại sao lại phải điều chỉnh tiến trình công nghệ phần mềm? Hãy trình bày các đặc trưng của dự án làm cơ sở cho điều chỉnh tóm tắt tiến trình.",
    "category": "Tiến trình & Baseline & BOK",
    "bookPage": "Trang 15 - 16",
    "photoPage": "assets/pages/page_05.jpg",
    "tags": [
      "điều chỉnh tiến trình",
      "đặc trưng dự án",
      "tailoring",
      "tóm tắt"
    ],
    "contentHtml": "\n<p><strong>1. Tại sao phải điều chỉnh tiến trình công nghệ phần mềm?</strong></p>\n<p>Mục đích của việc điều chỉnh là:</p>\n<ul>\n  <li>Làm cho tiến trình phù hợp với đặc trưng của dự án.</li>\n  <li>Đáp ứng các nhu cầu kỹ thuật riêng của dự án.</li>\n  <li>Nâng cao hiệu quả và thuận lợi trong quá trình phát triển phần mềm.</li>\n</ul>\n\n<p><strong>2. Các đặc trưng của dự án làm cơ sở cho điều chỉnh tóm tắt tiến trình:</strong></p>\n<p>Theo phần &ldquo;Điều chỉnh ở cấp độ tóm tắt&rdquo;, các đặc trưng được sử dụng để điều chỉnh gồm:</p>\n<ol>\n  <li><strong>Mức độ kinh nghiệm và kỹ năng</strong> của đội dự án và người quản lý dự án.</li>\n  <li><strong>Kích thước đội dự án</strong> lúc cao điểm.</li>\n  <li><strong>Mức độ rõ ràng</strong> của các yêu cầu.</li>\n  <li><strong>Thời gian</strong> thực hiện dự án.</li>\n  <li><strong>Mức độ quan trọng</strong> của ứng dụng.</li>\n</ol>\n\n<blockquote>\n<strong>Sách còn giải thích thêm:</strong>\n<ul>\n  <li><em>Mức độ kinh nghiệm của đội</em> được xem là cao nếu phần lớn thành viên có trên hai năm kinh nghiệm với công nghệ đang sử dụng trong dự án; nếu không thì được xem là thấp.</li>\n  <li><em>Mức độ quan trọng của ứng dụng</em> được xem là cao nếu tác động của ứng dụng đến nghiệp vụ của khách hàng hoặc công ty phát triển là lớn; nếu không thì là thấp.</li>\n  <li><em>Thời gian thực hiện dự án</em> được xem là đặc biệt ngắn nếu dự án phải được giao trong vòng ba tháng.</li>\n</ul>\n</blockquote>\n",
    "photoPages": [
      "assets/pages/page_05.jpg",
      "assets/pages/page_06.jpg"
    ]
  },
  {
    "id": 11,
    "title": "Tại sao lại phải quản lý thay đổi yêu cầu? Anh (Chị) hãy trình bày quy trình quản lý thay đổi yêu cầu ở Infosys.",
    "category": "Thay đổi yêu cầu & Ước lượng",
    "bookPage": "Trang 16 - 17",
    "photoPage": "assets/pages/page_06.jpg",
    "tags": [
      "quản lý thay đổi",
      "yêu cầu",
      "Infosys",
      "quy trình",
      "8 bước"
    ],
    "contentHtml": "\n<p><strong>1. Tại sao phải quản lý thay đổi yêu cầu?</strong></p>\n<p>&ldquo;Nếu các thay đổi yêu cầu không kiểm soát được có thể có ảnh hưởng xấu đến chi phí, tiến độ và chất lượng của dự án.&rdquo;</p>\n<p>&rArr; Vì vậy cần quản lý thay đổi yêu cầu để <strong>kiểm soát ảnh hưởng của các thay đổi</strong> đối với chi phí, tiến độ, chất lượng dự án và bảo đảm sự thỏa thuận giữa khách hàng với nhóm phát triển.</p>\n\n<p><strong>2. Quy trình quản lý thay đổi yêu cầu ở Infosys:</strong></p>\n<p>Theo mục &ldquo;Tiến trình xử lý các thay đổi yêu cầu&rdquo; có các bước cơ bản sau:</p>\n<div class=\"steps-flow\">\n  <div class=\"step-card\"><span class=\"step-num\">Bước 1</span> Ghi nhận các thay đổi.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 2</span> Phân tích tác động lên các sản phẩm công việc.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 3</span> Ước lượng nỗ lực cần thiết cho các thay đổi yêu cầu.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 4</span> Ước lượng lại thời gian giao hàng.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 5</span> Thực hiện phân tích tác động lên chi phí tích lũy.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 6</span> Xem xét lại các tác động với người quản lý cấp cao nếu ngưỡng bị vượt quá.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 7</span> Được khách hàng ký duyệt.</div>\n  <div class=\"step-card\"><span class=\"step-num\">Bước 8</span> Thực hiện thay đổi (làm lại các sản phẩm công việc).</div>\n</div>\n",
    "photoPages": [
      "assets/pages/page_06.jpg"
    ]
  },
  {
    "id": 12,
    "title": "Anh (Chị) hãy trình bày các bước trong tiến trình ước lượng nỗ lực theo tiếp cận từ dưới lên.",
    "category": "Thay đổi yêu cầu & Ước lượng",
    "bookPage": "Trang 17",
    "photoPage": "assets/pages/page_06.jpg",
    "tags": [
      "ước lượng nỗ lực",
      "tiếp cận từ dưới lên",
      "bottom-up",
      "S/M/C"
    ],
    "contentHtml": "\n<p><strong>Các bước trong tiến trình ước lượng nỗ lực theo tiếp cận từ dưới lên (Bottom-up Estimation):</strong></p>\n<ol>\n  <li>Xác định và phân loại các đơn vị chương trình thành <strong>đơn giản, trung bình, phức tạp (S/M/C)</strong>.</li>\n  <li>Tính nỗ lực xây dựng trung bình từ <strong>baseline riêng</strong> của dự án (nếu có).</li>\n  <li>Nếu chưa có baseline riêng, sử dụng <strong>dữ liệu từ các dự án tương tự</strong>.</li>\n  <li>Nếu không có dự án tương tự, dùng <strong>baseline chung</strong> về khả năng của tiến trình.</li>\n  <li>Điều chỉnh nỗ lực theo các <strong>yếu tố riêng</strong> của dự án.</li>\n  <li>Tính tổng nỗ lực xây dựng.</li>\n  <li>Ước lượng nỗ lực cho các công việc khác và nỗ lực tổng bằng <strong>tỷ lệ phân phối nỗ lực</strong>.</li>\n  <li>Điều chỉnh lại các ước lượng theo đặc trưng riêng của dự án.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_06.jpg"
    ]
  },
  {
    "id": 13,
    "title": "Anh (Chị) hãy trình bày các bước trong tiến trình ước lượng nỗ lực theo tiếp cận từ trên xuống.",
    "category": "Thay đổi yêu cầu & Ước lượng",
    "bookPage": "Trang 17 - 18",
    "photoPage": "assets/pages/page_06.jpg",
    "tags": [
      "ước lượng nỗ lực",
      "tiếp cận từ trên xuống",
      "top-down",
      "điểm chức năng"
    ],
    "contentHtml": "\n<p><strong>Các bước trong tiến trình ước lượng nỗ lực theo tiếp cận từ trên xuống (Top-down Estimation):</strong></p>\n<ol>\n  <li>Ước lượng kích thước tổng cộng của phần mềm bằng các <strong>&ldquo;điểm chức năng&rdquo; (Function Points)</strong>.</li>\n  <li>Sử dụng các dữ liệu về năng suất từ baseline về khả năng của tiến trình hoặc từ các dự án tương tự trong cơ sở dữ liệu tiến trình, sửa chữa lại các mức năng suất cho phù hợp với dự án đang được ước lượng.</li>\n  <li>Tính nỗ lực tổng thể của dự án từ <strong>năng suất và kích thước</strong> (Nỗ lực = Kích thước / Năng suất).</li>\n  <li>Tinh chỉnh lại ước lượng, có xem xét đến mức độ ảnh hưởng của các đặc trưng riêng của dự án.</li>\n  <li>Sử dụng dữ liệu về phân phối nỗ lực từ baseline về khả năng của tiến trình hoặc từ dự án tương tự để ước lượng nỗ lực cho các giai đoạn khác nhau của dự án.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_06.jpg",
      "assets/pages/page_07.jpg"
    ]
  },
  {
    "id": 14,
    "title": "Lịch biểu phụ thuộc vào những yếu tố nào? Kích cỡ đội dự án thay đổi như thế nào trong tiến trình thực hiện dự án? Tại sao lại như vậy?",
    "category": "Thay đổi yêu cầu & Ước lượng",
    "bookPage": "Trang 18 - 19",
    "photoPage": "assets/pages/page_07.jpg",
    "tags": [
      "lịch biểu",
      "kích cỡ đội dự án",
      "tiến trình",
      "phân bổ nỗ lực"
    ],
    "contentHtml": "\n<p><strong>1. Lịch biểu phụ thuộc vào những yếu tố nào?</strong></p>\n<ul>\n  <li>Nỗ lực đã được ước lượng.</li>\n  <li>Số lượng nhân sự được đưa vào dự án.</li>\n  <li>Các mốc lớn (milestone).</li>\n  <li>Các công việc/nhiệm vụ và mối quan hệ phụ thuộc giữa chúng.</li>\n  <li>Sự phân bố nỗ lực theo từng giai đoạn của dự án.</li>\n</ul>\n\n<p><strong>2. Kích cỡ đội dự án thay đổi như thế nào trong tiến trình thực hiện dự án?</strong></p>\n<p>&ldquo;Ở giai đoạn bắt đầu và kết thúc của dự án, việc kết nối nhân lực thường diễn ra mạnh hơn. Ở giai đoạn giữa dự án, số nhân sự thường đạt mức cao nhất.&rdquo;</p>\n\n<blockquote>\n<strong>Sách còn ghi phân bổ nỗ lực theo từng giai đoạn:</strong>\n<ul>\n  <li>Yêu cầu &asymp; 20%</li>\n  <li>Thiết kế &asymp; 20%</li>\n  <li>Xây dựng (Coding) &asymp; 40%</li>\n  <li>Tích hợp và kiểm thử &asymp; 20%</li>\n</ul>\n</blockquote>\n\n<p><strong>3. Tại sao lại như vậy?</strong></p>\n<p>Vì nhu cầu nhân lực của từng giai đoạn khác nhau:</p>\n<ul>\n  <li><strong>Đầu dự án:</strong> Chủ yếu khảo sát và phân tích yêu cầu nên cần ít người (chuyên viên phân tích, quản lý).</li>\n  <li><strong>Giai đoạn xây dựng:</strong> Cần nhiều lập trình viên nhất để viết mã các mô-đun song song, khối lượng công việc lớn nhất.</li>\n  <li><strong>Cuối dự án:</strong> Chủ yếu kiểm thử và bàn giao nên nhân lực giảm dần.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_07.jpg"
    ]
  },
  {
    "id": 15,
    "title": "Khái niệm về lỗi phần mềm? Tại sao phát triển phần mềm lại hay mắc lỗi? Các hoạt động để phát hiện lỗi và loại bỏ lỗi?",
    "category": "Quản lý chất lượng & Lỗi",
    "bookPage": "Trang 19 - 20",
    "photoPage": "assets/pages/page_07.jpg",
    "tags": [
      "lỗi phần mềm",
      "defect",
      "phát hiện lỗi",
      "loại bỏ lỗi"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm:</strong></p>\n<p>Một lỗi trong phần mềm là một cái gì đó làm cho phần mềm có cư xử theo một cách thức không nhất quán với các yêu cầu hoặc nhu cầu của khách hàng.</p>\n\n<p><strong>2. Tại sao phát triển phần mềm hay mắc lỗi?</strong></p>\n<p>&ldquo;Phát triển phần mềm là một hoạt động theo hướng con người và do đó dễ bị lỗi.&rdquo;</p>\n<p>Lỗi có thể được tiêm vào ở:</p>\n<ul>\n  <li>Đặc tả yêu cầu.</li>\n  <li>Thiết kế mức cao.</li>\n  <li>Thiết kế chi tiết.</li>\n  <li>Cài đặt mã.</li>\n</ul>\n\n<p><strong>3. Các hoạt động phát hiện lỗi và loại bỏ lỗi:</strong></p>\n<ol>\n  <li>Xem xét lại yêu cầu.</li>\n  <li>Xem xét lại thiết kế.</li>\n  <li>Xem xét lại mã.</li>\n  <li>Kiểm thử đơn vị.</li>\n  <li>Kiểm thử tích hợp.</li>\n  <li>Kiểm thử hệ thống.</li>\n  <li>Kiểm thử chấp nhận.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_07.jpg",
      "assets/pages/page_08.jpg"
    ]
  },
  {
    "id": 16,
    "title": "Anh (Chị) hãy trình bày vắn tắt một số tiếp cận định lượng để quản lý chất lượng của dự án phần mềm.",
    "category": "Quản lý chất lượng & Lỗi",
    "bookPage": "Trang 20",
    "photoPage": "assets/pages/page_08.jpg",
    "tags": [
      "tiếp cận định lượng",
      "chất lượng",
      "mục tiêu chất lượng",
      "dự đoán lỗi"
    ],
    "contentHtml": "\n<p>Có 2 tiếp cận chính:</p>\n\n<p><strong>1. Quản lý tiến trình phát triển phần mềm theo định lượng các mục tiêu chất lượng:</strong></p>\n<ul>\n  <li>Thiết lập các mục tiêu chất lượng cho dự án.</li>\n  <li>Thu thập dữ liệu thực tế trong quá trình phát triển.</li>\n  <li>So sánh kết quả thực tế với mục tiêu đã đề ra.</li>\n  <li>Nếu có sai lệch thì điều chỉnh kế hoạch chất lượng, kiểm thử và nguồn lực để đạt mục tiêu.</li>\n</ul>\n\n<p><strong>2. Quản lý chất lượng theo định lượng là dự đoán lỗi:</strong></p>\n<ul>\n  <li>Ước lượng số lỗi có thể xuất hiện trong phần mềm.</li>\n  <li>Đặt mục tiêu về số lỗi cần phát hiện và loại bỏ.</li>\n  <li>Theo dõi số lỗi thực tế trong quá trình phát triển.</li>\n  <li>So sánh số lỗi thực tế với số lỗi dự đoán để đánh giá chất lượng và hiệu quả các hoạt động kiểm soát chất lượng.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_08.jpg"
    ]
  },
  {
    "id": 17,
    "title": "Anh (Chị) hãy trình bày các bước được thực hiện cho các hoạt động phòng ngừa lỗi ở mức dự án.",
    "category": "Quản lý chất lượng & Lỗi",
    "bookPage": "Trang 20 - 21",
    "photoPage": "assets/pages/page_08.jpg",
    "tags": [
      "phòng ngừa lỗi",
      "defect prevention",
      "mức dự án",
      "rút ra bài học"
    ],
    "contentHtml": "\n<ol>\n  <li><strong>Xây dựng một nhóm phòng ngừa lỗi trong phạm vi dự án:</strong> Nhóm này có nhiệm vụ xác định các nguyên nhân gốc gây ra lỗi và đề xuất các biện pháp phòng ngừa.</li>\n  <li><strong>Thiết lập mục tiêu phòng ngừa lỗi cho dự án:</strong> Tiến hành huấn luyện về phòng ngừa lỗi và các phương pháp phân tích nguyên nhân cho nhóm thực hiện.</li>\n  <li><strong>Lập kế hoạch phòng ngừa lỗi cho dự án:</strong> Xác định tần số thực hiện các hoạt động phòng ngừa lỗi.</li>\n  <li><strong>Thực hiện phòng ngừa lỗi tại các thời điểm thích hợp trong dự án:</strong>\n    <ul>\n      <li>Thu thập dữ liệu về lỗi.</li>\n      <li>Thực hiện phân tích nguyên nhân và xếp độ ưu tiên các nguyên nhân gốc.</li>\n      <li>Xác định và phát triển các giải pháp cho các nguyên nhân gốc.</li>\n      <li>Thực hiện các giải pháp.</li>\n      <li>Xem lại các trạng thái và lợi ích của phòng ngừa lỗi tại các cột mốc của dự án.</li>\n      <li>Rút ra bài học kinh nghiệm.</li>\n    </ul>\n  </li>\n  <li><strong>Gửi tất cả các kết quả đầu ra của phòng ngừa lỗi để góp phần xây dựng các thành phần của tiến trình:</strong><br>\n    &rArr; Những hoạt động phòng ngừa lỗi hay còn gọi là <em>&ldquo;Rút ra bài học&rdquo;</em>, được thực hiện sau khi hoàn tất các hoạt động trong kế hoạch. Trọng tâm là các nhiệm vụ liên quan đến lập kế hoạch.\n  </li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_08.jpg"
    ]
  },
  {
    "id": 18,
    "title": "Anh (Chị) hãy trình bày khái niệm rủi ro và quản lý rủi ro. Cho một ví dụ minh họa.",
    "category": "Quản lý rủi ro",
    "bookPage": "Trang 21 - 22",
    "photoPage": "assets/pages/page_08.jpg",
    "tags": [
      "rủi ro",
      "quản lý rủi ro",
      "khái niệm",
      "ví dụ minh họa",
      "UPS"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm:</strong></p>\n<ul>\n  <li><strong>Quản lý rủi ro</strong> là một nỗ lực để hạn chế nguy cơ thất bại của dự án do các sự kiện bất ngờ gây ra.</li>\n  <li><strong>Mục đích của quản lý rủi ro là:</strong> Giảm thiểu tác động của rủi ro trong các dự án được thực hiện.</li>\n  <li><strong>Thách thức đối với người quản lý dự án:</strong> Không phải là tránh các rủi ro mà là quản lý chúng một cách hiệu quả thông qua chiến lược giảm thiểu rủi ro.</li>\n</ul>\n\n<p><strong>2. Ví dụ minh họa:</strong></p>\n<p>Một chương trình máy tính có mục tiêu quan trọng là: Cung cấp các dịch vụ máy tính không bị gián đoạn.</p>\n<ul>\n  <li><em>Một trong những rủi ro rõ ràng là:</em> <strong>Mất nguồn điện</strong> cung cấp cho máy tính. Nguồn điện cung cấp cho máy tính là điện lưới, có thể bị mất hoặc không ổn định vì các lý do kỹ thuật. Nếu mất điện, dù chỉ trong thời gian ngắn, các dịch vụ máy tính sẽ bị gián đoạn.</li>\n  <li><em>Để đối phó với rủi ro này có thể sử dụng:</em>\n    <ul>\n      <li><strong>UPS (Uninterruptible Power Supply - Bộ lưu điện):</strong> UPS được thiết kế để duy trì nguồn điện trong thời gian điện lưới bị mất.</li>\n      <li>Ngoài ra có thể sử dụng <strong>máy phát điện dự phòng</strong> để đảm bảo dịch vụ máy tính được cung cấp liên tục.</li>\n    </ul>\n  </li>\n</ul>\n\n<blockquote>\n<strong>Ví dụ trên cho thấy quản lý rủi ro bao gồm:</strong>\n<ol>\n  <li>Xác định rủi ro.</li>\n  <li>Đánh giá hậu quả khi rủi ro xảy ra.</li>\n  <li>Đề xuất biện pháp giảm thiểu tác động của rủi ro.</li>\n</ol>\n</blockquote>\n",
    "photoPages": [
      "assets/pages/page_08.jpg",
      "assets/pages/page_09.jpg"
    ]
  },
  {
    "id": 19,
    "title": "Anh (Chị) hãy trình bày các hoạt động trong quản lý rủi ro (theo hình vẽ).",
    "category": "Quản lý rủi ro",
    "bookPage": "Trang 22 - 23",
    "photoPage": "assets/pages/page_09.jpg",
    "tags": [
      "quản lý rủi ro",
      "hoạt động",
      "Hình 7.1",
      "đánh giá",
      "kiểm soát"
    ],
    "contentHtml": "\n<p>Các hoạt động trong quản lý rủi ro &mdash; <strong>Theo Hình 7.1</strong>, quản lý rủi ro gồm hai hoạt động chính:</p>\n\n<div class=\"risk-activity-box\">\n  <h4>a. Đánh giá rủi ro (Risk Assessment)</h4>\n  <p>Bao gồm 3 hoạt động:</p>\n  <ul>\n    <li><strong>Xác định rủi ro (Risk Identification):</strong> Nhận diện các rủi ro có thể xuất hiện trong dự án.</li>\n    <li><strong>Phân tích rủi ro (Risk Analysis):</strong> Đánh giá nguyên nhân, khả năng xảy ra và mức độ ảnh hưởng của từng rủi ro.</li>\n    <li><strong>Xếp hạng ưu tiên rủi ro (Risk Prioritization):</strong> Xác định rủi ro nào cần được xử lý trước dựa trên mức độ nghiêm trọng.</li>\n  </ul>\n</div>\n\n<div class=\"risk-activity-box mt-3\">\n  <h4>b. Kiểm soát rủi ro (Risk Control)</h4>\n  <p>Bao gồm 3 hoạt động:</p>\n  <ul>\n    <li><strong>Lập kế hoạch quản lý rủi ro (Risk Management Planning):</strong> Đề ra các biện pháp phòng ngừa và ứng phó.</li>\n    <li><strong>Giải quyết rủi ro (Risk Resolution):</strong> Thực hiện các hành động để hạn chế hoặc loại bỏ ảnh hưởng của rủi ro.</li>\n    <li><strong>Giám sát rủi ro (Risk Monitoring):</strong> Theo dõi tình trạng các rủi ro và đánh giá hiệu quả của các biện pháp đã thực hiện.</li>\n  </ul>\n</div>\n",
    "photoPages": [
      "assets/pages/page_09.jpg"
    ]
  },
  {
    "id": 20,
    "title": "Đánh giá rủi ro bao gồm những hoạt động nào? Trình bày về các phương pháp cơ bản để xác định rủi ro.",
    "category": "Quản lý rủi ro",
    "bookPage": "Trang 23 - 25",
    "photoPage": "assets/pages/page_09.jpg",
    "tags": [
      "đánh giá rủi ro",
      "phương pháp",
      "xác định rủi ro",
      "checklist"
    ],
    "contentHtml": "\n<p><strong>1. Đánh giá rủi ro gồm những hoạt động nào?</strong></p>\n<p>Đánh giá rủi ro gồm 3 hoạt động chính:</p>\n<ul>\n  <li><strong>a. Xác định rủi ro (Risk Identification):</strong> Xác định các rủi ro có thể xảy ra trong dự án. Liệt kê các sự kiện có khả năng gây ảnh hưởng đến sự thành công của dự án.</li>\n  <li><strong>b. Phân tích rủi ro (Risk Analysis):</strong> Phân tích nguyên nhân, khả năng xảy ra và hậu quả của từng rủi ro. Đánh giá mức độ ảnh hưởng của rủi ro đối với dự án.</li>\n  <li><strong>c. Xếp độ ưu tiên rủi ro (Risk Prioritization):</strong> Sắp xếp các rủi ro theo mức độ quan trọng. Giúp người quản lý tập trung nguồn lực vào những rủi ro nghiêm trọng nhất trước.</li>\n</ul>\n\n<p><strong>2. Các phương pháp cơ bản để xác định rủi ro:</strong></p>\n<p>Theo mục 7.2.1 <em>Xác định rủi ro</em>, các phương pháp cơ bản gồm:</p>\n<ol>\n  <li><strong>Sử dụng danh sách kiểm tra rủi ro (Risk Checklist):</strong> Xem xét các danh sách rủi ro đã được xây dựng từ trước. Đây là công cụ phổ biến nhất để nhận diện rủi ro.</li>\n  <li><strong>Khảo sát và họp nhóm:</strong> Thu thập ý kiến từ các thành viên dự án thông qua khảo sát hoặc các cuộc họp. Giúp phát hiện những rủi ro có thể xảy ra.</li>\n  <li><strong>Xem xét lại kế hoạch, tiến trình và sản phẩm công việc:</strong> Kiểm tra các kế hoạch dự án, quy trình thực hiện và các sản phẩm đã tạo ra. Từ đó phát hiện những điểm có nguy cơ gây rủi ro.</li>\n  <li><strong>Sử dụng dữ liệu và kinh nghiệm từ các dự án trước:</strong> Tham khảo cơ sở dữ liệu rủi ro của các dự án tương tự. Những rủi ro đã từng xảy ra trong quá khứ có thể tiếp tục xuất hiện trong dự án hiện tại.</li>\n  <li><strong>Dựa vào kinh nghiệm của người quản lý dự án:</strong> Người quản lý sử dụng kiến thức và kinh nghiệm thực tế để nhận diện các rủi ro tiềm năng.</li>\n  <li><strong>Thảo luận với các thành viên trong nhóm dự án:</strong> Tổ chức các buổi trao đổi, thảo luận để thu thập quan điểm về rủi ro từ các thành viên.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_09.jpg",
      "assets/pages/page_10.jpg"
    ]
  },
  {
    "id": 21,
    "title": "Anh (Chị) hãy trình bày khái niệm số đo của tiến trình phần mềm hoặc các sản phẩm phần mềm. Những số đo cơ bản nào được sử dụng trong mọi dự án phần mềm?",
    "category": "Số đo & SPC & Đội dự án",
    "bookPage": "Trang 25 - 26",
    "photoPage": "assets/pages/page_10.jpg",
    "tags": [
      "số đo",
      "metrics",
      "tiến trình",
      "sản phẩm",
      "4 số đo cơ bản"
    ],
    "contentHtml": "\n<p><strong>1. Khái niệm Số đo (Metrics):</strong></p>\n<p>Số đo (Metrics) là các đại lượng được sử dụng để mô tả một cách định lượng các khía cạnh của tiến trình phát triển phần mềm hoặc sản phẩm phần mềm.</p>\n<ul>\n  <li><strong>Số đo tiến trình:</strong> Dùng để đánh giá các thuộc tính của quá trình phát triển phần mềm (ví dụ: năng suất, chất lượng, nhân công/nỗ lực, tỷ lệ tiềm lỗi, hiệu quả loại bỏ lỗi).</li>\n  <li><strong>Số đo sản phẩm:</strong> Dùng để đánh giá các đặc tính của sản phẩm phần mềm (ví dụ: kích thước, độ tin cậy, chất lượng, độ phức tạp, chức năng).</li>\n</ul>\n\n<p><strong>2. Những số đo cơ bản được sử dụng trong mọi dự án phần mềm:</strong></p>\n<p>Theo sách, có <strong>4 số đo cơ bản</strong> được sử dụng trong hầu hết các dự án phần mềm:</p>\n<ol>\n  <li><strong>Thời gian biểu (Schedule):</strong> Theo dõi tiến độ và thời hạn hoàn thành dự án.</li>\n  <li><strong>Kích thước (Size):</strong> Đo quy mô phần mềm, thường dùng LOC (Lines of Code) hoặc Function Point.</li>\n  <li><strong>Nỗ lực/Nhân công (Effort):</strong> Đo lượng nguồn nhân lực và công sức bỏ ra để thực hiện dự án (thường tính theo giờ công, ngày công, người-tháng).</li>\n  <li><strong>Lỗi (Defects):</strong> Theo dõi số lượng lỗi phát hiện, sửa chữa và chất lượng phần mềm.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_10.jpg",
      "assets/pages/page_11.jpg"
    ]
  },
  {
    "id": 22,
    "title": "Trong một dự án, thường việc phát hiện và loại bỏ lỗi được tiến hành theo tiến trình nào? Giải thích các hoạt động của tiến trình đó.",
    "category": "Số đo & SPC & Đội dự án",
    "bookPage": "Trang 26 - 27",
    "photoPage": "assets/pages/page_11.jpg",
    "tags": [
      "vòng đời lỗi",
      "Defect Life Cycle",
      "Submitted",
      "Fixed",
      "Closed"
    ],
    "contentHtml": "\n<p>Theo mục 8.2.2 <em>Ghi nhật ký và theo dõi lỗi</em>, việc phát hiện và loại bỏ lỗi trong dự án phần mềm được thực hiện theo <strong>vòng đời của lỗi (Defect Life Cycle)</strong> như sau:</p>\n\n<div class=\"lifecycle-banner\">\n  <span class=\"badge-state\">Submitted (Đã gửi)</span> &rarr;\n  <span class=\"badge-state\">Fixed (Đã sửa)</span> &rarr;\n  <span class=\"badge-state\">Closed (Đã đóng)</span>\n</div>\n\n<ol>\n  <li><strong>1. Submitted (Đã gửi):</strong>\n    <ul>\n      <li>Khi phát hiện lỗi, người phát hiện lỗi (submitter) ghi nhận lỗi vào hệ thống quản lý lỗi.</li>\n      <li>Lỗi được mô tả, phân loại và chuyển cho người có trách nhiệm sửa chữa.</li>\n      <li>Trạng thái của lỗi lúc này là &ldquo;đã gửi&rdquo; (submitted).</li>\n    </ul>\n  </li>\n  <li><strong>2. Fixed (Đã sửa):</strong>\n    <ul>\n      <li>Người được giao nhiệm vụ (thường là lập trình viên hoặc tác giả phần mềm) tiến hành phân tích và sửa lỗi.</li>\n      <li>Sau khi hoàn thành việc sửa chữa, lỗi được chuyển sang trạng thái &ldquo;đã sửa&rdquo; (fixed).</li>\n    </ul>\n  </li>\n  <li><strong>3. Closed (Đã đóng):</strong>\n    <ul>\n      <li>Người kiểm tra hoặc người đã báo lỗi xác nhận lại kết quả sửa chữa.</li>\n      <li>Nếu lỗi đã được khắc phục hoàn toàn, lỗi được đánh dấu &ldquo;đã đóng&rdquo; (closed).</li>\n      <li>Nếu lỗi vẫn còn tồn tại thì lỗi sẽ tiếp tục được xử lý cho đến khi sửa xong.</li>\n    </ul>\n  </li>\n</ol>\n\n<blockquote>\n<strong>Kết luận:</strong><br>\nQuá trình phát hiện và loại bỏ lỗi trong dự án phần mềm diễn ra theo vòng đời:<br>\n<strong>Phát hiện lỗi &rarr; Ghi nhận lỗi (Submitted) &rarr; Sửa lỗi (Fixed) &rarr; Kiểm tra xác nhận &rarr; Đóng lỗi (Closed).</strong><br>\nMột lỗi chưa được đóng được gọi là <strong>lỗi mở (Open)</strong>, còn lỗi đã được xác nhận sửa thành công được gọi là <strong>lỗi đóng (Closed)</strong>. Đây là quy trình giúp theo dõi, quản lý và loại bỏ lỗi một cách có hệ thống trong dự án phần mềm.\n</blockquote>\n",
    "photoPages": [
      "assets/pages/page_11.jpg"
    ]
  },
  {
    "id": 23,
    "title": "Anh (Chị) hãy trình bày phương pháp kiểm soát tiến độ và nỗ lực trong một dự án phần mềm dùng SPC.",
    "category": "Số đo & SPC & Đội dự án",
    "bookPage": "Trang 27 - 29",
    "photoPage": "assets/pages/page_11.jpg",
    "tags": [
      "SPC",
      "kiểm soát thống kê",
      "tiến độ",
      "nỗ lực",
      "biểu đồ kiểm soát"
    ],
    "contentHtml": "\n<p><strong>SPC (Statistical Process Control - Kiểm soát quá trình bằng thống kê)</strong> là phương pháp dùng các số liệu thống kê để giám sát và kiểm soát quá trình thực hiện dự án. Trong quản lý dự án phần mềm, SPC được sử dụng để theo dõi tiến độ (thời gian biểu) và nỗ lực (chi phí, nhân công) của dự án.</p>\n\n<p><strong>1. Phương pháp thực hiện:</strong></p>\n<ol>\n  <li><strong>Thiết lập các giới hạn kiểm soát:</strong>\n    <ul>\n      <li>Dựa trên dữ liệu lịch sử và kinh nghiệm từ các dự án trước.</li>\n      <li>Xác định các mức chênh lệch cho phép giữa giá trị thực tế và giá trị ước lượng của tiến độ và nỗ lực.</li>\n    </ul>\n  </li>\n  <li><strong>Thu thập và theo dõi dữ liệu thực tế:</strong>\n    <ul>\n      <li>Tại các mốc kiểm tra (milestones), người quản lý thu thập số liệu thực tế về: Tiến độ thực hiện, Nỗ lực (nhân công, chi phí), Lỗi phát sinh.</li>\n    </ul>\n  </li>\n  <li><strong>So sánh với giá trị kế hoạch:</strong>\n    <ul>\n      <li>Tính mức chênh lệch giữa thực tế và kế hoạch.</li>\n      <li>Biểu diễn các giá trị này trên biểu đồ kiểm soát SPC (Control Chart).</li>\n    </ul>\n  </li>\n  <li><strong>Đánh giá kết quả:</strong>\n    <ul>\n      <li>Nếu chênh lệch nằm trong giới hạn kiểm soát &rarr; dự án vẫn hoạt động bình thường.</li>\n      <li>Nếu chênh lệch vượt quá giới hạn kiểm soát &rarr; dự án có nguy cơ không đạt mục tiêu về tiến độ hoặc chi phí.</li>\n    </ul>\n  </li>\n  <li><strong>Thực hiện hành động khắc phục:</strong>\n    <ul>\n      <li>Phân tích nguyên nhân gây chênh lệch.</li>\n      <li>Đề ra các biện pháp điều chỉnh, phòng ngừa hoặc khắc phục.</li>\n      <li>Theo dõi lại kết quả sau khi điều chỉnh.</li>\n    </ul>\n  </li>\n</ol>\n\n<p><strong>2. Ý nghĩa của SPC:</strong></p>\n<ul>\n  <li>Giúp phát hiện sớm các vấn đề của dự án.</li>\n  <li>Kiểm soát tiến độ và nỗ lực một cách định lượng.</li>\n  <li>Hỗ trợ người quản lý đưa ra quyết định kịp thời.</li>\n  <li>Đảm bảo dự án hoàn thành đúng kế hoạch với chi phí hợp lý.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_11.jpg",
      "assets/pages/page_12.jpg"
    ]
  },
  {
    "id": 24,
    "title": "Anh (Chị) hãy cho biết các thành phần của một đội dự án và vai trò của mỗi thành phần này. Một số yếu tố mà một người quản lý dự án cần quan tâm khi xây dựng và phân công các thành viên trong đội là gì?",
    "category": "Số đo & SPC & Đội dự án",
    "bookPage": "Trang 29 - 30",
    "photoPage": "assets/pages/page_12.jpg",
    "tags": [
      "đội dự án",
      "thành phần",
      "vai trò",
      "phân công",
      "PM"
    ],
    "contentHtml": "\n<p><strong>1. Các thành phần của một đội dự án và vai trò:</strong></p>\n<ul>\n  <li><strong>Người quản lý dự án (Project Manager):</strong> Lãnh đạo đội dự án, quản lý công việc và báo cáo cho quản lý kinh doanh hoặc quản lý quan hệ khách hàng.</li>\n  <li><strong>Nhà phát triển (Developers / Engineers):</strong> Thực hiện phân tích, thiết kế, lập trình, kiểm thử và xây dựng sản phẩm phần mềm.</li>\n  <li><strong>Người kiểm soát cấu hình (Configuration Controller):</strong> Quản lý phiên bản, tài liệu, mã nguồn và các thay đổi trong dự án.</li>\n  <li><strong>Người quản trị cơ sở dữ liệu (Database Administrator - DBA):</strong> Quản lý, thiết kế và duy trì cơ sở dữ liệu của dự án.</li>\n  <li><strong>Người lãnh đạo mô đun (Module Leader):</strong> Xuất hiện trong dự án lớn, phụ trách một mô đun và quản lý một số nhà phát triển dưới quyền.</li>\n</ul>\n\n<p><strong>2. Một số yếu tố người quản lý dự án cần quan tâm khi xây dựng và phân công các thành viên trong đội:</strong></p>\n<ul>\n  <li><strong>Trình độ chuyên môn và kỹ năng kỹ thuật:</strong> Kinh nghiệm thực tế đối với công nghệ áp dụng trong dự án.</li>\n  <li><strong>Sự phù hợp giữa năng lực cá nhân với nhiệm vụ:</strong> Bố trí đúng người đúng việc (phân tích, lập trình, kiểm thử, quản lý cấu hình).</li>\n  <li><strong>Kỹ năng giao tiếp và làm việc nhóm:</strong> Khả năng tương tác, chia sẻ thông tin và phối hợp hài hòa giữa các thành viên.</li>\n  <li><strong>Động lực và tinh thần trách nhiệm:</strong> Mức độ nhiệt huyết và cam kết hoàn thành mục tiêu dự án.</li>\n  <li><strong>Quy mô dự án và giai đoạn thực hiện:</strong> Điều phối số lượng nhân sự phù hợp với từng giai đoạn phát triển.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_12.jpg"
    ]
  },
  {
    "id": 25,
    "title": "Trình bày các mô hình tổ chức đội dự án phần mềm cơ bản và ưu nhược điểm của từng mô hình.",
    "category": "Số đo & SPC & Đội dự án",
    "bookPage": "Trang 30 - 31",
    "photoPage": "assets/pages/page_12.jpg",
    "tags": [
      "mô hình tổ chức",
      "đội dự án",
      "phân cấp",
      "dân chủ",
      "lập trình viên trưởng"
    ],
    "contentHtml": "\n<div class=\"note-box\">\n  <span class=\"note-tag\">Ghi chú tài liệu</span>\n  <p>Trang 30 - 31 của tập tài liệu gốc bị chụp trùng trang 36-37 ở ảnh 15-16. Câu 25 được bổ sung đầy đủ theo chuẩn giáo trình Quản lý dự án phần mềm (Pankaj Jalote) để đảm bảo tính liên tục và trọn vẹn của bộ đề thi.</p>\n</div>\n\n<p>Trong quản lý dự án phần mềm, có 3 mô hình tổ chức đội dự án cơ bản:</p>\n\n<p><strong>1. Mô hình đội kiểm soát tập trung (Hierarchical / Controlled Centralized Team - Mô hình phân cấp):</strong></p>\n<ul>\n  <li><em>Đặc điểm:</em> Có một trưởng nhóm (Project Leader) lãnh đạo trực tiếp và ra các quyết định chính; phân cấp rõ ràng giữa trưởng nhóm, nhóm trưởng bộ phận và các thành viên. Giao tiếp chủ yếu theo chiều dọc.</li>\n  <li><em>Ưu điểm:</em> Phân công trách nhiệm rõ ràng, dễ quản lý, điều phối nhanh, phù hợp với các dự án lớn, quy trình chuẩn mực.</li>\n  <li><em>Nhược điểm:</em> Thiếu tính linh hoạt, sáng tạo cá nhân bị hạn chế, thông tin truyền đạt có thể chậm trễ qua nhiều cấp.</li>\n</ul>\n\n<p><strong>2. Mô hình đội phân tán / dân chủ (Democratic Decentralized Team):</strong></p>\n<ul>\n  <li><em>Đặc điểm:</em> Không có sự phân cấp cứng nhắc; các quyết định kỹ thuật được thảo luận và thống nhất theo sự đồng thuận của tập thể; các thành viên giao tiếp bình đẳng theo chiều ngang.</li>\n  <li><em>Ưu điểm:</em> Khuyến khích sáng tạo, tinh thần làm việc nhóm cao, phù hợp với các bài toán khó, nghiên cứu thử nghiệm mới.</li>\n  <li><em>Nhược điểm:</em> Dễ mất nhiều thời gian tranh luận khi cần ra quyết định khẩn cấp, khó kiểm soát tiến độ nếu các thành viên thiếu kỷ luật.</li>\n</ul>\n\n<p><strong>3. Mô hình đội lập trình viên trưởng (Chief Programmer Team):</strong></p>\n<ul>\n  <li><em>Đặc điểm:</em> Lập trình viên trưởng (Chief Programmer) là hạt nhân chuyên môn cao nhất phụ trách toàn bộ thiết kế và kiến trúc chính; các thành viên khác (Backup programmer, Editor, Program librarian) đóng vai trò hỗ trợ chuyên biệt.</li>\n  <li><em>Ưu điểm:</em> Đạt năng suất và tính nhất quán kiến trúc rất cao, chất lượng mã nguồn đồng đều.</li>\n  <li><em>Nhược điểm:</em> Phụ thuộc quá nhiều vào năng lực của một cá nhân; rủi ro lớn nếu người này rời dự án.</li>\n</ul>\n",
    "photoPages": []
  },
  {
    "id": 26,
    "title": "Kế hoạch quản lý dự án (Project Management Plan) là gì và bao gồm những nội dung chính nào? Hãy trình bày cấu trúc kế hoạch dự án.",
    "category": "Số đo & SPC & Đội dự án",
    "bookPage": "Trang 31 - 32",
    "photoPage": "assets/pages/page_13.jpg",
    "tags": [
      "kế hoạch dự án",
      "Project Management Plan",
      "PMP",
      "cấu trúc",
      "4 nội dung"
    ],
    "contentHtml": "\n<p>Kế hoạch quản lý dự án (Project Management Plan) là tài liệu trung tâm định hướng toàn bộ hoạt động thực hiện, theo dõi, kiểm soát và kết thúc dự án.</p>\n\n<p><strong>Cấu trúc kế hoạch dự án gồm 4 nội dung chính:</strong></p>\n\n<ol>\n  <li><strong>Tổng quan dự án:</strong>\n    <ul>\n      <li>Nêu thời gian thực hiện, lãnh đạo dự án, khách hàng, mục tiêu dự án, các cam kết, sản phẩm bàn giao và các giả định ban đầu.</li>\n    </ul>\n  </li>\n  <li><strong>Lập kế hoạch dự án:</strong>\n    <ul>\n      <li>Nêu cách thực hiện dự án: tiến trình phát triển, điều chỉnh tiến trình, quản lý thay đổi yêu cầu, ước lượng nỗ lực/thời gian, nhân sự, môi trường phát triển, công cụ, đào tạo, chất lượng và rủi ro.</li>\n    </ul>\n  </li>\n  <li><strong>Theo dõi dự án:</strong>\n    <ul>\n      <li>Nêu cách kiểm soát dự án: phép đo, thu thập dữ liệu, theo dõi hoạt động, báo cáo tiến độ và thủ tục leo thang khi có vấn đề.</li>\n    </ul>\n  </li>\n  <li><strong>Đội dự án:</strong>\n    <ul>\n      <li>Nêu cấu trúc đội, vai trò và trách nhiệm của từng thành viên.</li>\n    </ul>\n  </li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_13.jpg"
    ]
  },
  {
    "id": 27,
    "title": "Anh (Chị) hãy trình bày các loại chức năng của quản lý cấu hình mà các dự án phần mềm thường yêu cầu.",
    "category": "Quản lý cấu hình & Xem xét lại",
    "bookPage": "Trang 32 - 33",
    "photoPage": "assets/pages/page_13.jpg",
    "tags": [
      "quản lý cấu hình",
      "CM",
      "Configuration Management",
      "chức năng",
      "8 chức năng"
    ],
    "contentHtml": "\n<p>Các loại chức năng của quản lý cấu hình mà các dự án phần mềm thường yêu cầu:</p>\n\n<ol>\n  <li><strong>Cho biết trạng thái của các chương trình:</strong> Giúp người quản lý quyết định thời điểm kiểm thử hoặc phát hành phần mềm.</li>\n  <li><strong>Xác định phiên bản mới nhất của một chương trình:</strong> Đảm bảo việc sửa đổi luôn được thực hiện trên phiên bản mới nhất, tránh làm mất các thay đổi trước đó.</li>\n  <li><strong>Xử lý các yêu cầu cập nhật đồng thời:</strong> Kiểm soát truy cập và hòa giải khi nhiều lập trình viên cùng sửa một chương trình để tránh ghi đè dữ liệu.</li>\n  <li><strong>Hủy bỏ thay đổi 1 chương trình:</strong> Cho phép quay lại trạng thái trước đó nếu việc sửa đổi chương trình hoặc thay đổi yêu cầu không còn cần thiết.</li>\n  <li><strong>Ngăn chặn các thay đổi trái phép:</strong> Hạn chế quyền chỉnh sửa để tránh các thay đổi tùy tiện gây ra lỗi hệ thống.</li>\n  <li><strong>Theo dõi dấu vết nguồn gốc:</strong> Liên kết và giám sát trạng thái của tất cả các chương trình bị thay đổi theo một yêu cầu cụ thể.</li>\n  <li><strong>Chỉ ra các thay đổi liên quan:</strong> Giúp tra cứu và xem xét lại toàn bộ các chỉnh sửa liên quan đến một lỗi hoặc một yêu cầu để phục vụ sửa lỗi.</li>\n  <li><strong>Phục hồi hệ thống:</strong> Thu thập, lưu trữ toàn bộ mã nguồn và tài liệu để sẵn sàng khôi phục khi hệ thống gặp sự cố hoặc file bị hỏng.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_13.jpg"
    ]
  },
  {
    "id": 28,
    "title": "Anh (Chị) hãy trình bày các hoạt động trong giai đoạn lập kế hoạch quản lý cấu hình.",
    "category": "Quản lý cấu hình & Xem xét lại",
    "bookPage": "Trang 33 - 34",
    "photoPage": "assets/pages/page_13.jpg",
    "tags": [
      "kế hoạch cấu hình",
      "lập kế hoạch",
      "mục cấu hình",
      "baseline"
    ],
    "contentHtml": "\n<p>Các hoạt động trong giai đoạn lập kế hoạch quản lý cấu hình bao gồm:</p>\n\n<ul>\n  <li>Xác định các mục cấu hình, bao gồm cả các mục do khách hàng cung cấp và các mục được mua.</li>\n  <li>Định nghĩa một cơ chế để đặt tên và đánh số cho các mục cấu hình.</li>\n  <li>Định nghĩa cấu trúc thư mục cần thiết cho quản lý cấu hình.</li>\n  <li>Định nghĩa các hạn chế truy cập.</li>\n  <li>Định nghĩa các thủ tục kiểm soát thay đổi.</li>\n  <li>Xác định và định nghĩa trách nhiệm, thẩm quyền của người kiểm soát cấu hình.</li>\n  <li>Xác định một phương pháp để theo dõi trạng thái của các mục cấu hình.</li>\n  <li>Định nghĩa một thủ tục để sao lưu phòng (backup).</li>\n  <li>Định nghĩa một thủ tục hòa giải.</li>\n  <li>Định nghĩa một thủ tục phát hành sản phẩm.</li>\n  <li>Định nghĩa một thủ tục lưu trữ.</li>\n  <li>Xác định các điểm mà tại đó các mục cấu hình sẽ được chuyển đến baseline.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_13.jpg",
      "assets/pages/page_14.jpg"
    ]
  },
  {
    "id": 29,
    "title": "Anh (Chị) hãy trình bày các hoạt động của việc thực hiện một thay đổi yêu cầu trong kiểm soát cấu hình.",
    "category": "Quản lý cấu hình & Xem xét lại",
    "bookPage": "Trang 34",
    "photoPage": "assets/pages/page_14.jpg",
    "tags": [
      "thay đổi yêu cầu",
      "kiểm soát cấu hình",
      "check-in",
      "check-out"
    ],
    "contentHtml": "\n<p>Các hoạt động của việc thực hiện một thay đổi yêu cầu trong kiểm soát cấu hình gồm:</p>\n\n<ol>\n  <li><strong>Chấp nhận thay đổi yêu cầu</strong> (với phân tích tác động đầy đủ).</li>\n  <li><strong>Thiết lập một cơ chế theo dõi</strong> cho thay đổi đó.</li>\n  <li><strong>Tách ra các mục cấu hình cần thay đổi</strong> (check-out ra khỏi kho lưu trữ có kiểm soát).</li>\n  <li><strong>Thực hiện các thay đổi</strong> trên các mục cấu hình.</li>\n  <li><strong>Đưa các mục cấu hình sau khi thay đổi trở lại</strong> môi trường có kiểm soát (check-in / baseline).</li>\n  <li><strong>Đưa các mục cấu hình qua chu kỳ sống</strong> của nó.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_14.jpg"
    ]
  },
  {
    "id": 30,
    "title": "Anh (Chị) hãy trình bày tiến trình xem xét lại bởi nhóm và giải thích tóm tắt các hoạt động của tiến trình này.",
    "category": "Quản lý cấu hình & Xem xét lại",
    "bookPage": "Trang 34 - 36",
    "photoPage": "assets/pages/page_14.jpg",
    "croppedImages": [
      "assets/images/cau30_quy_trinh_xem_xet.jpg"
    ],
    "tags": [
      "xem xét lại bởi nhóm",
      "peer review",
      "4 bước",
      "quy trình",
      "hình vẽ"
    ],
    "contentHtml": "\n<p>Tiến trình xem xét lại bởi nhóm (Peer Review / Group Review) gồm 4 bước chính:</p>\n\n<div class=\"figure-container\">\n  <div class=\"figure-title\">Sơ đồ: Tiến trình xem xét lại bởi nhóm (Trang 35)</div>\n  <img src=\"assets/images/cau30_quy_trinh_xem_xet.jpg\" alt=\"Sơ đồ tiến trình xem xét lại bởi nhóm\" class=\"diagram-img\" onclick=\"openLightbox(this.src)\">\n  <div class=\"figure-caption\">&ldquo;Các sản phẩm công việc để xem xét lại &rarr; [Lập kế hoạch] &rarr; [Chuẩn bị và tổng quan] &rarr; [Họp xem xét lại bởi nhóm] &rarr; [Làm lại và tiếp tục] &rarr; Sản phẩm đã làm lại, báo cáo tóm tắt&rdquo;</div>\n</div>\n\n<div class=\"steps-flow\">\n  <div class=\"step-card\">\n    <h4>Bước 1: Lập kế hoạch</h4>\n    <ul>\n      <li>Xác định các sản phẩm công việc cần được xem xét lại.</li>\n      <li>Lựa chọn thành viên tham gia, phân công nhiệm vụ.</li>\n      <li>Xây dựng lịch biểu, địa điểm và danh sách khách mời tham dự.</li>\n    </ul>\n  </div>\n\n  <div class=\"step-card\">\n    <h4>Bước 2: Chuẩn bị và tổng quan</h4>\n    <ul>\n      <li>Các thành viên nghiên cứu tài liệu, sản phẩm cần xem xét trước cuộc họp.</li>\n      <li>Người chủ trì giới thiệu mục tiêu, nội dung và phạm vi xem xét.</li>\n      <li>Ghi chép nhật ký chuẩn bị (nhật ký tự chuẩn bị) để làm cơ sở cho buổi họp.</li>\n    </ul>\n  </div>\n\n  <div class=\"step-card\">\n    <h4>Bước 3: Họp xem xét lại bởi nhóm</h4>\n    <ul>\n      <li>Nhóm cùng kiểm tra, đánh giá sản phẩm công việc.</li>\n      <li>Phát hiện và thảo luận các lỗi, sai sót hoặc những vấn đề còn tồn tại.</li>\n      <li>Ghi nhận đầy đủ các lỗi và các vấn đề mở cần được xử lý.</li>\n    </ul>\n  </div>\n\n  <div class=\"step-card\">\n    <h4>Bước 4: Làm lại và tiếp tục</h4>\n    <ul>\n      <li>Tác giả hoặc nhóm thực hiện sửa chữa các lỗi đã được phát hiện.</li>\n      <li>Hoàn thiện sản phẩm theo các ý kiến đóng góp.</li>\n      <li>Lập báo cáo tóm tắt kết quả sửa đổi và tiếp tục quy trình nếu cần.</li>\n    </ul>\n  </div>\n</div>\n",
    "photoPages": [
      "assets/pages/page_14.jpg",
      "assets/pages/page_15.jpg"
    ]
  },
  {
    "id": 31,
    "title": "Anh (Chị) hãy cho biết khi nào thì thực hiện xem xét lại bởi 1 người. Trình bày tiến trình xem xét lại bởi 1 người.",
    "category": "Quản lý cấu hình & Xem xét lại",
    "bookPage": "Trang 36 - 37",
    "photoPage": "assets/pages/page_15.jpg",
    "tags": [
      "xem xét lại 1 người",
      "khi nào thực hiện",
      "tiến trình"
    ],
    "contentHtml": "\n<p><strong>1. Khi nào thì thực hiện xem xét lại bởi 1 người?</strong></p>\n<p>&ldquo;Nếu các sản phẩm công việc là tương đối đơn giản, nó hầu như không có lỗi, và không quan trọng thì xem xét lại bởi 1 người sẽ là giải pháp hợp lý.&rdquo;</p>\n\n<p><strong>2. Tiến trình xem xét lại bởi 1 người:</strong></p>\n<p>Tương tự như bởi nhóm, gồm 4 bước:</p>\n<ol>\n  <li><strong>1. Lập kế hoạch:</strong>\n    <ul>\n      <li>Tác giả tham khảo ý kiến người lãnh đạo dự án để lựa chọn người xem xét lại.</li>\n      <li>Xác định sản phẩm cần xem xét và sắp xếp lịch xem xét.</li>\n    </ul>\n  </li>\n  <li><strong>2. Chuẩn bị và tổng quan:</strong>\n    <ul>\n      <li>Người xem xét nhận gói sản phẩm công việc.</li>\n      <li>Tự nghiên cứu, kiểm tra sản phẩm và chuẩn bị các nhận xét trước cuộc họp.</li>\n    </ul>\n  </li>\n  <li><strong>3. Họp xem xét lại:</strong>\n    <ul>\n      <li>Cuộc họp chỉ có hai người tham gia: tác giả và người xem xét lại.</li>\n      <li>Hai bên thảo luận về các lỗi, sai sót và các vấn đề còn tồn tại.</li>\n      <li>Các lỗi và vấn đề phát hiện được ghi chép lại đầy đủ.</li>\n    </ul>\n  </li>\n  <li><strong>4. Làm lại và tiếp tục:</strong>\n    <ul>\n      <li>Tác giả sửa chữa các lỗi được phát hiện.</li>\n      <li>Người xem xét thông báo cho lãnh đạo dự án khi việc xem xét hoàn thành.</li>\n      <li>Lãnh đạo dự án theo dõi việc khắc phục lỗi cho đến khi tất cả lỗi được sửa và đóng lại.</li>\n    </ul>\n  </li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_15.jpg"
    ]
  },
  {
    "id": 32,
    "title": "Anh (Chị) cho biết các sản phẩm công việc nào cần được xem xét lại bởi nhóm? Khi xem xét lại đặc tả yêu cầu cần quan tâm đến những khía cạnh nào? Thành phần tham gia nhóm xem xét lại sản phẩm này?",
    "category": "Quản lý cấu hình & Xem xét lại",
    "bookPage": "Trang 37 - 38",
    "photoPage": "assets/pages/page_15.jpg",
    "tags": [
      "xem xét lại bởi nhóm",
      "đặc tả yêu cầu",
      "sản phẩm công việc",
      "thành phần"
    ],
    "contentHtml": "\n<p><strong>1. Các sản phẩm công việc cần xem xét lại bởi nhóm:</strong></p>\n<ul>\n  <li>Kế hoạch quản lý dự án</li>\n  <li>Đặc tả yêu cầu</li>\n  <li>Kế hoạch kiểm thử dự án</li>\n  <li>Thiết kế mức cao</li>\n  <li>Kế hoạch kiểm thử tích hợp</li>\n</ul>\n\n<p><strong>2. Khi xem xét lại đặc tả yêu cầu cần quan tâm đến các khía cạnh:</strong></p>\n<ul>\n  <li>Các yêu cầu có đáp ứng đúng nhu cầu khách hàng hay không.</li>\n  <li>Các yêu cầu có thực hiện được hay không (tính khả thi).</li>\n  <li>Có yêu cầu nào bị bỏ sót không.</li>\n  <li>Có yêu cầu nào không nhất quán không.</li>\n  <li>Có yêu cầu nào mơ hồ, chưa rõ ràng không.</li>\n  <li>Tài liệu yêu cầu có tuân theo chuẩn hay không.</li>\n</ul>\n\n<p><strong>3. Thành phần tham gia nhóm xem xét lại đặc tả yêu cầu gồm:</strong></p>\n<ul>\n  <li>Khách hàng.</li>\n  <li>Người thiết kế mức cao.</li>\n  <li>Người kiểm thử hệ thống.</li>\n  <li>Tác giả của tài liệu yêu cầu / người dùng.</li>\n</ul>\n",
    "photoPages": [
      "assets/pages/page_15.jpg",
      "assets/pages/page_17.jpg"
    ]
  },
  {
    "id": 33,
    "title": "Nếu trong phân tích tại cột mốc, nỗ lực thực tế thấp hơn so với nỗ lực ước lượng quá giới hạn thì những nguyên nhân gì có thể và cách kiểm soát như thế nào?",
    "category": "Kiểm soát cột mốc & Kết thúc dự án",
    "bookPage": "Trang 38",
    "photoPage": "assets/pages/page_17.jpg",
    "croppedImages": [
      "assets/images/cau33_bang_kiem_soat_no_luc.jpg"
    ],
    "tags": [
      "cột mốc",
      "nỗ lực thấp hơn",
      "nguyên nhân",
      "kiểm soát",
      "bảng"
    ],
    "contentHtml": "\n<p>Nếu trong phân tích tại cột mốc, nỗ lực thực tế thấp hơn so với nỗ lực ước lượng quá giới hạn cho phép, nguyên nhân và các hoạt động kiểm soát tương ứng như sau:</p>\n\n<div class=\"table-responsive\">\n  <table class=\"data-table\">\n    <thead>\n      <tr>\n        <th style=\"width: 45%;\">Lý do</th>\n        <th style=\"width: 55%;\">Hoạt động kiểm soát</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Các ước lượng cho các đơn vị chương trình quá cao</strong></td>\n        <td>Ước lượng lại các modun còn lại</td>\n      </tr>\n      <tr>\n        <td><strong>Đội dự án có kiến thức và kinh nghiệm chuyên môn cao hơn dự kiến</strong></td>\n        <td>Ước lượng lại công nhân (nỗ lực nhân sự)</td>\n      </tr>\n      <tr>\n        <td><strong>Các nhiệm vụ đến thời điểm hiện tại vẫn chưa được thực hiện triệt để và kĩ lưỡng</strong></td>\n        <td>\n          <ul>\n            <li>Xem xét lại các nhiệm vụ đã được làm đến thời điểm hiện tại</li>\n            <li>Xem xét lại lịch của sản phẩm công việc vẫn chưa được xem xét lại</li>\n            <li>Kiểm tra lại nhật ký vấn đề</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"figure-container mt-3\">\n  <div class=\"figure-title\">Ảnh chụp bảng trong tài liệu gốc (Trang 38)</div>\n  <img src=\"assets/images/cau33_bang_kiem_soat_no_luc.jpg\" alt=\"Bảng kiểm soát nỗ lực tại cột mốc\" class=\"table-crop-img\" onclick=\"openLightbox(this.src)\">\n</div>\n",
    "photoPages": [
      "assets/pages/page_17.jpg"
    ]
  },
  {
    "id": 34,
    "title": "Nếu trong phân tích tại cột mốc, số lỗi thực tế thấp hơn so với số lỗi ước lượng quá giới hạn thì những nguyên nhân gì có thể và cách kiểm soát như thế nào?",
    "category": "Kiểm soát cột mốc & Kết thúc dự án",
    "bookPage": "Trang 39",
    "photoPage": "assets/pages/page_17.jpg",
    "croppedImages": [
      "assets/images/cau34_bang_kiem_soat_so_loi.jpg"
    ],
    "tags": [
      "cột mốc",
      "số lỗi thấp hơn",
      "nguyên nhân",
      "kiểm soát",
      "bảng"
    ],
    "contentHtml": "\n<p>Nếu trong phân tích tại cột mốc, số lỗi thực tế thấp hơn so với số lỗi ước lượng quá giới hạn cho phép, nguyên nhân và các hoạt động kiểm soát tương ứng như sau:</p>\n\n<div class=\"table-responsive\">\n  <table class=\"data-table\">\n    <thead>\n      <tr>\n        <th style=\"width: 45%;\">Lý do</th>\n        <th style=\"width: 55%;\">Các hoạt động kiểm soát</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Sản phẩm công việc có chất lượng cao</strong></td>\n        <td>Xác định nguyên nhân và rút ra bài học kinh nghiệm cho dự án hoặc tiến trình</td>\n      </tr>\n      <tr>\n        <td><strong>Kiểm thử chưa đủ</strong></td>\n        <td>\n          <ul>\n            <li>Xem lại nỗ lực đã tiêu phí cho kiểm thử</li>\n            <li>Xếp lại lịch cho kiểm thử thêm</li>\n          </ul>\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Các hoạt động kiểm soát chất lượng trước đây đã được thực hiện rất kỹ lưỡng</strong></td>\n        <td>Kiểm tra lại tất cả các nhật ký về xem xét lại và kiểm thử</td>\n      </tr>\n      <tr>\n        <td><strong>Các ước lượng về số lỗi khi lập kế hoạch thì quá cao</strong></td>\n        <td>Xác định nguyên nhân và sửa chữa lại các ước lượng trong bảng kế hoạch</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"figure-container mt-3\">\n  <div class=\"figure-title\">Ảnh chụp bảng trong tài liệu gốc (Trang 39)</div>\n  <img src=\"assets/images/cau34_bang_kiem_soat_so_loi.jpg\" alt=\"Bảng kiểm soát số lỗi tại cột mốc\" class=\"table-crop-img\" onclick=\"openLightbox(this.src)\">\n</div>\n",
    "photoPages": [
      "assets/pages/page_17.jpg"
    ]
  },
  {
    "id": 35,
    "title": "Anh (Chị) hãy trình bày các bước xây dựng sơ đồ nhân quả để phân tích và phòng ngừa lỗi.",
    "category": "Kiểm soát cột mốc & Kết thúc dự án",
    "bookPage": "Trang 39 - 40",
    "photoPage": "assets/pages/page_17.jpg",
    "tags": [
      "sơ đồ nhân quả",
      "xương cá",
      "Ishikawa",
      "phòng ngừa lỗi"
    ],
    "contentHtml": "\n<p>Các bước chính để vẽ một <strong>sơ đồ nhân quả (còn gọi là sơ đồ xương cá - Ishikawa diagram)</strong> như sau:</p>\n\n<ol>\n  <li><strong>Xác định các lỗi chính</strong> đưa vào hộp chứa &ldquo;hậu quả&rdquo; (ở đầu bên phải).</li>\n  <li><strong>Vẽ một mũi tên từ trái tới hộp chứa &ldquo;hậu quả&rdquo;</strong> ở đầu bên phải. Đây là xương sống của sơ đồ.</li>\n  <li><strong>Xác định các loại nguyên nhân chính.</strong> Đây có thể là các loại nguyên nhân chuẩn đã được xây dựng bởi công ty.</li>\n  <li><strong>Viết những nguyên nhân chính này vào trong các hộp</strong> và kết nối chúng bằng các mũi tên chéo đến xương sống của sơ đồ. Những nguyên nhân này hình thành các xương của sơ đồ.</li>\n  <li><strong>Thu thập ý kiến của nhóm phòng ngừa lỗi</strong> về các nguyên nhân con của các nguyên nhân chính.</li>\n  <li><strong>Thêm các nguyên nhân con vào sơ đồ</strong> xung quanh xương của nguyên nhân chính. Nếu cần thiết, chia nhỏ hơn nữa những nguyên nhân này.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_17.jpg",
      "assets/pages/page_18.jpg"
    ]
  },
  {
    "id": 36,
    "title": "Anh (Chị) hãy trình bày vai trò của phân tích kết thúc dự án.",
    "category": "Kiểm soát cột mốc & Kết thúc dự án",
    "bookPage": "Trang 40 - 41",
    "photoPage": "assets/pages/page_18.jpg",
    "tags": [
      "kết thúc dự án",
      "phân tích",
      "vai trò",
      "bài học",
      "baseline"
    ],
    "contentHtml": "\n<p><strong>Mục tiêu chính</strong> của phân tích kết thúc dự án (Post-Project Analysis) là <strong>rút ra các bài học kinh nghiệm</strong> từ dự án đã hoàn thành nhằm nâng cao hiệu quả cho các dự án trong tương lai.</p>\n\n<p><strong>Các vai trò cụ thể:</strong></p>\n<ol>\n  <li><strong>Đánh giá dự án đã hoàn thành</strong> để xác định những điểm tốt và chưa tốt.</li>\n  <li><strong>Rút ra bài học kinh nghiệm</strong> nhằm cải thiện việc thực hiện các dự án trong tương lai.</li>\n  <li><strong>Chuyển dữ liệu dự án thành thông tin hữu ích</strong> thông qua quá trình phân tích.</li>\n  <li><strong>Lưu trữ kết quả phân tích vào cơ sở dữ liệu tiến trình (PDB)</strong> để tái sử dụng.</li>\n  <li><strong>Xây dựng Baseline (chuẩn tham chiếu)</strong> về khả năng của tiến trình, phục vụ lập kế hoạch và dự báo cho các dự án sau.</li>\n  <li><strong>Chia sẻ kinh nghiệm cho tổ chức</strong> và các thành viên dự án, góp phần nâng cao hiệu quả quản lý dự án.</li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_18.jpg"
    ]
  },
  {
    "id": 37,
    "title": "Anh (Chị) hãy cho biết trong báo cáo phân tích kết thúc dự án bao gồm những loại dữ liệu chính nào?",
    "category": "Kiểm soát cột mốc & Kết thúc dự án",
    "bookPage": "Trang 41 - 42",
    "photoPage": "assets/pages/page_18.jpg",
    "tags": [
      "báo cáo kết thúc",
      "dữ liệu chính",
      "8 nhóm dữ liệu",
      "DRE"
    ],
    "contentHtml": "\n<p>Báo cáo phân tích kết thúc dự án gồm <strong>8 nhóm dữ liệu chính</strong>: Thông tin chung & tiến trình, quản lý rủi ro, kích thước, năng suất, nỗ lực, dữ liệu lỗi, phân tích nhân quả và các thành phần của tiến trình.</p>\n\n<ol>\n  <li><strong>Thông tin chung và thông tin liên quan đến tiến trình:</strong>\n    <ul>\n      <li>Thông tin tổng quát về dự án.</li>\n      <li>Năng suất tổng thể, chất lượng sản phẩm.</li>\n      <li>Tiến trình sử dụng, chênh lệch giữa kế hoạch và thực tế.</li>\n      <li>Công cụ, phương pháp và kinh nghiệm sử dụng trong dự án.</li>\n    </ul>\n  </li>\n  <li><strong>Thông tin về quản lý rủi ro:</strong>\n    <ul>\n      <li>Các rủi ro dự kiến ban đầu.</li>\n      <li>Các biện pháp giảm thiểu rủi ro đã lập kế hoạch.</li>\n      <li>Các rủi ro thực tế phát sinh.</li>\n      <li>Đánh giá hiệu quả của các biện pháp giảm thiểu rủi ro.</li>\n    </ul>\n  </li>\n  <li><strong>Thông tin về kích thước (Size):</strong>\n    <ul>\n      <li>Kích thước phần mềm ước lượng và thực tế.</li>\n      <li>Các tiêu chí phân loại kích thước (đơn giản, trung bình, phức tạp,...).</li>\n    </ul>\n  </li>\n  <li><strong>Thông tin về năng suất (Productivity):</strong>\n    <ul>\n      <li>Năng suất của dự án (ví dụ: điểm chức năng / tháng công).</li>\n      <li>Dữ liệu phục vụ đánh giá hiệu quả thực hiện dự án.</li>\n    </ul>\n  </li>\n  <li><strong>Thông tin về nỗ lực (Effort):</strong>\n    <ul>\n      <li>Nỗ lực ước lượng và nỗ lực thực tế.</li>\n      <li>Phân bổ nỗ lực theo các giai đoạn công việc.</li>\n      <li>Chi phí chất lượng liên quan đến hoạt động kiểm tra, sửa lỗi, đào tạo,...</li>\n    </ul>\n  </li>\n  <li><strong>Dữ liệu về lỗi (Defect Data):</strong>\n    <ul>\n      <li>Số lượng và mức độ nghiêm trọng của lỗi.</li>\n      <li>Giai đoạn phát hiện và phát sinh lỗi.</li>\n      <li>Hiệu quả loại bỏ lỗi.</li>\n      <li>Chỉ số DRE (Defect Removal Efficiency - Hiệu quả loại bỏ lỗi).</li>\n    </ul>\n  </li>\n  <li><strong>Phân tích nhân quả:</strong>\n    <ul>\n      <li>Phân tích nguyên nhân gây ra các chênh lệch giữa kế hoạch và thực tế.</li>\n      <li>Xác định nguyên nhân thành công hoặc thất bại của dự án.</li>\n    </ul>\n  </li>\n  <li><strong>Các thành phần của tiến trình:</strong>\n    <ul>\n      <li>Các dữ liệu liên quan đến các thành phần/quy trình được sử dụng trong dự án.</li>\n      <li>Thông tin phục vụ cải tiến quy trình cho các dự án tương lai.</li>\n    </ul>\n  </li>\n</ol>\n",
    "photoPages": [
      "assets/pages/page_18.jpg",
      "assets/pages/page_19.jpg"
    ]
  },
  {
    "id": 38,
    "title": "Bài học kinh nghiệm rút ra từ dự án ACIC là gì?",
    "category": "Kiểm soát cột mốc & Kết thúc dự án",
    "bookPage": "Trang 42 - 43",
    "photoPage": "assets/pages/page_19.jpg",
    "tags": [
      "ACIC",
      "bài học kinh nghiệm",
      "4 bài học",
      "kết thúc dự án"
    ],
    "contentHtml": "\n<p>Bốn bài học kinh nghiệm quan trọng rút ra từ dự án ACIC:</p>\n\n<div class=\"steps-flow\">\n  <div class=\"step-card\">\n    <h4>1. Phát triển và cải tiến theo từng giai đoạn</h4>\n    <p>Áp dụng cải tiến liên tục qua từng giai đoạn giúp nâng cao chất lượng và năng suất dự án.</p>\n  </div>\n\n  <div class=\"step-card\">\n    <h4>2. Tăng cường phòng ngừa lỗi</h4>\n    <p>Phòng ngừa lỗi giúp giảm tỷ lệ lỗi và tiết kiệm đáng kể chi phí, công sức sửa lỗi.</p>\n  </div>\n\n  <div class=\"step-card\">\n    <h4>3. Đánh giá kỹ tác động của thay đổi yêu cầu</h4>\n    <p>Trước khi chấp nhận thay đổi yêu cầu, cần phân tích chi phí &ndash; lợi ích để tránh phát sinh chi phí không cần thiết.</p>\n  </div>\n\n  <div class=\"step-card\">\n    <h4>4. Nâng cao hiệu quả hoạt động kiểm thử và xem xét</h4>\n    <p>Cần cải thiện hiệu quả của các hoạt động review (xem xét lại), kiểm thử đơn vị, kiểm thử tích hợp và kiểm thử hệ thống để nâng cao chất lượng sản phẩm.</p>\n  </div>\n</div>\n",
    "photoPages": [
      "assets/pages/page_19.jpg"
    ]
  }
];

if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_DATA; }
