const shopButton = document.querySelector(".Shop_botum");
const images = document.querySelectorAll("#golum");
console.log(images);

let sliderIndex = 0;

shopButton.addEventListener("click", () => {
  images[sliderIndex].classList.add("showimg");
  sliderIndex++;
  images[sliderIndex].classList.remove("showimg");
});
