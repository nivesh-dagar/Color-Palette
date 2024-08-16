var generateBtn = document.getElementById("generateBtn");

// FUNCTION TO GENERATE A SINGLE RANDOM COLOR
var singleHexColorGenerator = () => {
  var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, "A", "B", "C", "D", "E", "F"];
  var hexColor = "#";
  for (var i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
  }
  return hexColor;
};

// FULL COLOR PALETTE GENERATOR
var colorPaletteGenerator = () => {
  var colorPalette = [];
  for (var i = 0; i < 4; i++) {
    colorPalette.push(singleHexColorGenerator());
  }
  return colorPalette;
};

// FUNCTION TO RENDER COLORS
var renderColorPalette = () => {
  var colorsContainer = document.querySelector(".colors-container");
  colorsContainer.innerHTML = "";

  var colorPalette = colorPaletteGenerator();
  colorPalette.forEach((color, i) => {
    var colorDiv = document.createElement("div");
    colorDiv.id = `color${i + 1}`;
    colorDiv.style.background = color;
    colorDiv.className = "color-box";

    var colorTag = document.createElement("p");
    colorTag.id = `color${i + 1}Tag`;
    colorTag.className = "colorTag";
    colorTag.innerHTML = color;

    colorDiv.appendChild(colorTag);
    colorsContainer.appendChild(colorDiv);
  });
  // COPY COLOR TAG TO CLIPBOARD

  var copyToClipboard = (id) => {
    var el = document.getElementById(id);

    navigator.clipboard
      .writeText(el.innerText)
      .then(() => {
        alert("Copied To Clipboard!");
      })
      .catch((err) => {
        alert("Could Not Copy!");
      });
  };

  var colorTags = document.querySelectorAll(".colorTag");
  colorTags.forEach((colorTag, i) => {
    colorTag.addEventListener("click", () =>
      copyToClipboard(`color${i + 1}Tag`)
    );
  });
};
renderColorPalette();
generateBtn.addEventListener("click", renderColorPalette);
