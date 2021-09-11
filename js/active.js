// Thẻ ul
var mainNav = document.getElementById("mainNav");
// Các thẻ con li
var listNav = mainNav.getElementsByTagName('li');
for (var i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function() {
        // Tìm thẻ đang được gắng class active
        var current = document.querySelector("#mainNav .active");
        // Xóa class active của thẻ đang được gắn 
        current.className = current.className.replace("active", "");
        // Thêm class active vào thẻ li được click
        // += cộng thêm active vào và giữ class cũ
        this.className += " active";
    });
}