/* ================= PAGE LOADER ================= */

let loadValue = 0;

const loader = document.getElementById("page-loader");
const count = document.getElementById("loader-count");
const progress = document.getElementById("loader-progress");

const loaderInterval = setInterval(() => {
  loadValue++;

  count.innerText = loadValue + "%";
  progress.style.width = loadValue + "%";

  if (loadValue >= 100) {
    if (loadValue >= 100) {
      clearInterval(loaderInterval);

      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        // ===== REVEAL ANIMATION START =====
        const header = document.querySelector(".reveal-header");
        const hero = document.querySelector(".reveal-hero");
        const buttons = document.querySelectorAll(".hero-buttons button");

        header.classList.add("show-header");

        setTimeout(() => {
          hero.classList.add("show-hero");
        }, 300);

        buttons.forEach((btn, index) => {
          setTimeout(() => {
            btn.classList.add("show-btn");
          }, 500 + index * 150);
        });
        // ===== REVEAL ANIMATION END =====

        setTimeout(() => {
          loader.style.display = "none";
        }, 800);

      }, 200);
    }

    clearInterval(loaderInterval);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
    }, 200);
  }
}, 20); // ≈ 3 seconds total



const menu = document.getElementById("menu");
const navWrapper = document.getElementById("navWrapper");

menu.addEventListener("click", () => {
  navWrapper.classList.toggle("active");
});

// auto close menu on link click
document.querySelectorAll(".nav a, .mobile-book-btn").forEach(link => {
  link.addEventListener("click", () => {
    navWrapper.classList.remove("active");
  });
});



const cards = document.querySelectorAll(".review-card");

cards.forEach(card => {
  const video = card.querySelector("video");
  const btn = card.querySelector(".play-btn");

  btn.addEventListener("click", () => {

    // stop all other videos
    document.querySelectorAll(".review-card video").forEach(v => {
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
        v.parentElement.querySelector(".play-btn").innerHTML = "▶";
      }
    });

    if (video.paused) {
      video.play();
      btn.innerHTML = "❚❚";
    } else {
      video.pause();
      btn.innerHTML = "▶";
    }
  });

  video.addEventListener("ended", () => {
    btn.innerHTML = "▶";
  });
});






// booking form
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let message = document.getElementById("message").value;

  let whatsappNumber = "8377932338";

  let whatsappMessage =
    `🎵 *BOOK MY SLOT* 🎵


👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🎧 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}

📝 Details:
${message}`;

  let whatsappURL =
    `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
});





// scroll

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  });
});

// View All Services → Booking section
document.getElementById("viewAllServices").addEventListener("click", () => {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
