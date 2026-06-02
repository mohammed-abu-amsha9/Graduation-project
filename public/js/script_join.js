const sidebar = document.getElementById("sidebar");
const topbar = document.getElementById("topbar");
const content = document.getElementById("content");

function toggleSidebar() {
  if (window.innerWidth <= 1024) {
    sidebar.classList.toggle("mobile-open");
    sidebarOverlay.classList.toggle("show");

    updateMobileMenuIcon();
    return;
  }

  sidebar.classList.toggle("closed");

  if (sidebar.classList.contains("closed")) {
    sidebar.style.width = "80px";
    topbar.style.right = "80px";
    content.style.paddingRight = "110px";
  } else {
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
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function toggleMobileSidebar() {
  sidebar.classList.toggle("mobile-open");
  sidebarOverlay.classList.toggle("show");

  const icon = mobileMenuBtn.querySelector("i");

  if (sidebar.classList.contains("mobile-open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

function closeMobileSidebar() {
  sidebar.classList.remove("mobile-open");
  sidebarOverlay.classList.remove("show");

  const icon = mobileMenuBtn.querySelector("i");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
}

function updateMobileMenuIcon() {
  const icon = mobileMenuBtn.querySelector("i");

  if (sidebar.classList.contains("mobile-open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

function toggleMobileSidebar() {
  sidebar.classList.toggle("mobile-open");
  sidebarOverlay.classList.toggle("show");

  updateMobileMenuIcon();
}

function closeMobileSidebar() {
  sidebar.classList.remove("mobile-open");
  sidebarOverlay.classList.remove("show");

  updateMobileMenuIcon();
}
