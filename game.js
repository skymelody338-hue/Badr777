function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

window.onload = function() {
  console.log("مرحباً بك في صفحة محافظة بدر التاريخية"); 
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } 
    else {
        menu.style.display = "flex";
    }
}

function showAlert() {
    alert("شكراً لاهتمامك بأخبار محافظة بدر! سيتم تحديث التفاصيل قريباً.");
}
