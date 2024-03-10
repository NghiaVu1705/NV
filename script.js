const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})


document.getElementById("lienhe").addEventListener("click", function() {
  window.location.href = "youtube.com"; // Thay thế "lienhe.html" bằng URL thật của trang Liên hệ
});

document.getElementById("trangchu").addEventListener("click", function() {
  window.location.href = "trangchu.html"; // Thay thế "trangchu.html" bằng URL thật của trang Trang chủ
});

document.getElementById("blog").addEventListener("click", function() {
  window.location.href = "blog.html"; // Thay thế "blog.html" bằng URL thật của trang Blog
});

document.getElementById("sanpham").addEventListener("click", function() {
  window.location.href = "sanpham.html"; // Thay thế "sanpham.html" bằng URL thật của trang Sản phẩm
});
