// Modal functionality
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-card img, .journal-card img").forEach(img => {

  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalTitle.textContent = img.dataset.title;
    modalText.textContent = img.dataset.description;
  });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

document.querySelectorAll(".certificates-track img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalText.textContent = img.alt;
  });
});

const reveals = document.querySelectorAll(".panel");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal", "active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

document.addEventListener("mousemove", e => {
  document.querySelectorAll(".journal-card img").forEach(card => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    card.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
  });
});
