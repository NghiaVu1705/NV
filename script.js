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
  window.location.href = "https://www.facebook.com/nghia.vu.39589149?mibextid=dGKdO6";
});

document.getElementById("trangchu").addEventListener("click", function() {
  window.location.href = "trangchu.html";
});

document.getElementById("blog").addEventListener("click", function() {
  window.location.href = "space.html";
});

document.getElementById("sanpham").addEventListener("click", function() {
  window.location.href = "sanpham.html"; 
});

document.getElementById("hinh").addEventListener("click", function() {
  window.location.href = "space.html";
});


var signupBtn = document.getElementById("signupBtn");

    // Gắn sự kiện click vào nút "Đăng kí"
    signupBtn.addEventListener("click", function() {
        // Chuyển hướng người dùng đến trang "register.html"
        window.location.href = "register.html";
    });

