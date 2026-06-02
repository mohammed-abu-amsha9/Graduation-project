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

const revenueCanvas = document.getElementById("revenueChart");

if (revenueCanvas) {
  const ctx = revenueCanvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(0, "#4338CA");
  gradient.addColorStop(0.4, "#4F46E5");
  gradient.addColorStop(0.8, "#818CF8");
  gradient.addColorStop(1, "#C7D2FE");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "السبت",
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
      ],
      datasets: [
        {
          label: "الإيرادات",
          data: [1200, 1800, 2100, 1600, 2400, 800],

          backgroundColor: gradient,

          borderRadius: 12,

          borderSkipped: false,

          barThickness: 50,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          rtl: true,

          textDirection: "rtl",

          backgroundColor: "#111827",

          callbacks: {
            label: function (context) {
              return context.raw + " ₪";
            },
          },
        },
      },

      scales: {
        x: {
          grid: {
            display: false,
          },

          border: {
            display: false,
          },

          ticks: {
            color: "#64748B",

            font: {
              size: 13,
            },
          },
        },

        y: {
          beginAtZero: true,

          grid: {
            color: "#F1F5F9",
          },

          border: {
            display: false,
          },

          ticks: {
            color: "#94A3B8",

            callback: function (value) {
              return value + " ₪";
            },
          },
        },
      },

      animation: {
        duration: 1500,
      },
    },
  });
}