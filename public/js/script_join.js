const sidebar = document.getElementById("sidebar");
const topbar = document.getElementById("topbar");
const content = document.getElementById("content");

function toggleSidebar() {
  sidebar.classList.toggle("closed");

  if (sidebar.classList.contains("closed")) {
    // عند الإغلاق
    sidebar.style.width = "80px";
    topbar.style.right = "80px";
    content.style.paddingRight = "110px";
  } else {
    // عند الفتح
    sidebar.style.width = "265px";
    topbar.style.right = "265px";
    content.style.paddingRight = "295px";
  }
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // حذف الألوان من الجميع
    menuLinks.forEach((item) => {
      item.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-[#818CF8]",
        "to-[#4F46E5]",
        "to-[#4338CA]",
      );
    });

    // إضافة اللون للعنصر الحالي
    this.classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-[#818CF8]",
      "to-[#4F46E5]",
      "to-[#4338CA]",
    );
  });
});
