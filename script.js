const welcomeBtn = document.querySelector('#welcomeBtn');

window.addEventListener("DOMContentLoaded", () => {
    arrayOfBtns.forEach(btn => btn.style.display = "none");
});

welcomeBtn.addEventListener("click", (e) => {
    welcomeBtn.style.display = "none";
    arrayOfBtns.forEach(btn => btn.style.display = "block");
})

const aboutBtn = document.querySelector("#aboutBtn");
const skillsBtn = document.querySelector("#skillsBtn");
const educationBtn = document.querySelector("#educationBtn");
const workBtn = document.querySelector("#workBtn");

const arrayOfBtns = [aboutBtn, skillsBtn, educationBtn, workBtn];

arrayOfBtns.forEach(btn => {
    const targetId = btn.getAttribute("data-bs-target");
    const target = document.querySelector(targetId);
    const collapseInstance = new bootstrap.Collapse(target, { toggle: false });

    // Show section and hide other buttons on click
    btn.addEventListener("click", () => {
        arrayOfBtns.forEach(b => {
            if (b !== btn) b.style.display = "none";
        });
        collapseInstance.show();
    });

    // When section hides, show all buttons again
    target.addEventListener('hidden.bs.collapse', () => {
        arrayOfBtns.forEach(b => b.style.display = "inline-block");
    });
});