$(document).ready(function() {
    $(".container").mouseenter(function() {
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function() {
        $(".card").stop().animate({
            top: 0
        }, "slow");
    });
});
// Gift card сонгох + typewriter эффект
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".gift-card");
  let chosen = false;

  function runTypewriter(el) {
    if (!el) return;

    const raw = el.innerHTML.replace(/<br\s*\/?>/gi, "\n");
    el.innerHTML = "";

    let i = 0;
    function type() {
      if (i >= raw.length) return;
      const ch = raw[i];

      if (ch === "\n") {
        el.innerHTML += "<br>";
      } else {
        el.innerHTML += ch;
      }

      i++;
      setTimeout(type, 60);
    }

    type();
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (chosen) return;          // нэгийг сонгосны дараа бусдыг дарж болохгүй

      chosen = true;
      card.classList.add("selected");

      // бусад 3 card-ыг идэвхгүй болгоно
      cards.forEach(other => {
        if (other !== card) {
          other.classList.add("disabled");
        }
      });

      // сонгогдсон card-ийн нууц мессеж дээр typewriter ажиллуулна
      const hidden = card.querySelector(".gift-hidden");
      runTypewriter(hidden);
    });
  });
});
