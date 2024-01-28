// -------------------------------------------- Header - Burger Menu --------------------------------------------
const hamMenu = document.querySelector(".nav-btn");

const offScreenMenu = document.querySelector(".off_screen_menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// -------------------------------------------- Section 5 - Slider --------------------------------------------

const partnersSlider = document.querySelector(".partners-slider");

let p = 0;
const changeLogos = (p) => {
  //წინა ლოგოების დამალვა
  const prevLogos = partnersSlider.firstElementChild;
  prevLogos.classList.add("hide");
  prevLogos.classList.remove("show");

  setTimeout(() => {
    partnersSlider.removeChild(prevLogos);
  }, 1300);

  //ახალი ლოგოების გამოტანა
  const newPartnersLogos = document.createElement("div");
  newPartnersLogos.classList.add("partners-logos");
  newPartnersLogos.classList.add("show");

  //img ელემენტების დინამიურად შექმნა და მშობელ ელემენტში ჩამატება
  for (let i = p * 3; i < p * 3 + 3; ++i) {
    const imgEl = document.createElement("img");
    if (i === 6) imgEl.classList.add("centered");
    if (i < 7) {
      imgEl.src = `./images/slider_image_${i + 1}.webp`;
      newPartnersLogos.append(imgEl);
    }
  }

  partnersSlider.prepend(newPartnersLogos);
  // console.log(p);
};

//1 წამიანი ინტერვალი ღილაკის დაკლიკვიდან შემდეგ დაკლიკვამდე
const clickDelay = () => {
  const sliderBtns = document.querySelectorAll(".partners-content button");

  sliderBtns.forEach((btn) => (btn.disabled = true));

  setTimeout(() => {
    sliderBtns.forEach((btn) => (btn.disabled = false));
  }, 1000);
};

//ტაიმერი ლოგოების ავტომატური ცვლილებისთვის
let sliderInterval;
const setSliderInterval = () => {
  sliderInterval = setInterval(() => {
    if (p == 2) p = 0;
    else p++;
    changeLogos(p);
  }, 3000);
};

setSliderInterval();

//hover ევენთზე ტაიმერის გათიშვა/ჩართვა:
const partnersSection = document.querySelector("section#partners");

partnersSection.addEventListener("mouseenter", () => {
  clearInterval(sliderInterval);
});

partnersSection.addEventListener("mouseleave", () => {
  setSliderInterval();
});

//სლაიდერის ღილაკები
const partnersContent = document.querySelector(".partners-content");
partnersContent.addEventListener("click", (e) => {
  if (e.target.id === "arrow-right") {
    if (p == 2) p = 0;
    else p++;
  } else if (e.target.id === "arrow-left") {
    if (p == 0) p = 2;
    else p--;
  } else if (e.target.id === "slider-btn-0") p = 0;
  else if (e.target.id === "slider-btn-1") p = 1;
  else if (e.target.id === "slider-btn-2") p = 2;

  changeLogos(p);
  clickDelay();
});

// -------------------------------------------- Section 6 - FAQ --------------------------------------------

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector(".arrow");
    answer.classList.toggle("active");
    if (answer.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
    arrow.classList.toggle("up");
  });
});
