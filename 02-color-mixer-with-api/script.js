const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const hexValue = document.getElementById("hex-value");

function rgbToHex(r, g, b) {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function updateColor() {
  const red = parseInt(redSlider.value);
  const green = parseInt(greenSlider.value);
  const blue = parseInt(blueSlider.value);

  const hex = rgbToHex(red, green, blue);

  document.body.style.backgroundColor = hex;
  hexValue.textContent = hex;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

updateColor();

const randomColorButton = document.querySelector("#random-color-button");

randomColorButton.addEventListener("click", async function () {
  const response = await fetch("https://dummy-apis.netlify.app/api/color");
  const data = await response.json();
  const r = parseInt(data.rgb.r);
  const g = parseInt(data.rgb.g);
  const b = parseInt(data.rgb.b);
  redSlider.value = r;
  greenSlider.value = g;
  blueSlider.value = b;

  updateColor();
});

// randomColorButton.addEventListener("click", function () {
//   fetch("https://dummy-apis.netlify.app/api/color")
//     .then((response) => response.json())
//     .then((data) => {
//       /*const color = data.color.slice(1); // remove the '#' from the color
//       const r = parseInt(color.slice(0, 2), 16);
//       const g = parseInt(color.slice(2, 4), 16);
//       const b = parseInt(color.slice(4, 6), 16);
//       */
//       const r = parseInt(data.rgb.r);
//       const g = parseInt(data.rgb.g);
//       const b = parseInt(data.rgb.b);
//       redSlider.value = r;
//       greenSlider.value = g;
//       blueSlider.value = b;

//       updateColor();
//     });
// });
