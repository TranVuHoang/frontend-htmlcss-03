/** ------- sticky navbar -------*/
// Lấy phần tử có class "header" từ DOM
const header = document.querySelector(".header");

// Lắng nghe sự kiện scroll của window
window.addEventListener("scroll", () => {
  // Thêm class "sticky" nếu scrollY > 0
  // Xóa class "sticky" nếu scrollY = 0
  header.classList.toggle("sticky", window.scrollY > 0);
});
