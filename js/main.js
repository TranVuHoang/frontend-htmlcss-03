/** ------- sticky navbar -------*/
// Lấy phần tử có class "header" từ DOM
const header = document.querySelector(".header");

// Lắng nghe sự kiện scroll của window
window.addEventListener("scroll", () => {
  // Thêm class "sticky" nếu scrollY > 0
  // Xóa class "sticky" nếu scrollY = 0
  header.classList.toggle("sticky", window.scrollY > 0);
});

/** đóng mở menu responsive */
// Lấy phần tử có id="menu-icon"
const menu = document.querySelector("#menu-icon");

// Lấy phần tử có class="header__navbar"
const navbar = document.querySelector(".header__navbar");

// Hàm xử lý khi click menu
const handleClick = () => {
  // Thêm/xóa class "bx-x"
  // Thường dùng để đổi icon hamburger thành icon X
  menu.classList.toggle("bx-x");

  // Thêm/xóa class "open"
  // Dùng để mở/đóng navbar
  navbar.classList.toggle("open");
};

// Lắng nghe sự kiện click vào menu
menu.addEventListener("click", handleClick);

// Khi người dùng scroll trang
window.onscroll = () => {
  // Xóa class "bx-x"
  // Đổi icon X về lại hamburger
  menu.classList.remove("bx-x");

  // Xóa class "open"
  // Đóng navbar
  navbar.classList.remove("open");
};

// Khởi tạo ScrollReveal với cấu hình mặc định
const sr = ScrollReveal({
  // Khoảng cách element di chuyển khi reveal
  distance: "60px",

  // Thời gian animation (ms)
  duration: 2500,

  // Delay mặc định trước khi animation chạy
  delay: 400,

  // true = scroll lên/xuống sẽ animate lại nhiều lần
  reset: true,
});

// Reveal phần text của home section
sr.reveal(".home__text", {
  // Delay riêng cho element này
  delay: 200,

  // Animation bắt đầu từ phía trên
  origin: "top",
});

// Reveal ảnh trong home section
sr.reveal(".home__img", {
  delay: 300,
  origin: "top",
});

// Reveal nhiều section cùng lúc
sr.reveal(".feature, .product, .cta-content, .contact", {
  delay: 200,
  origin: "top",
});
