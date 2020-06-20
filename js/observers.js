/* Efectele de fade si de slide in(de la stanga spre dreapta sau doar de aparitie) */
const faders = document.querySelectorAll(".fade-in");
const fadersForm = document.querySelectorAll(".fade-in-form");
const sliders = document.querySelectorAll(".slide-in");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

fadersForm.forEach(faderForm => {
  appearOnScroll.observe(faderForm);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
