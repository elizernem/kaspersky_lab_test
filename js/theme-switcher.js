// There is no switcher in the layout.
// This code does not work, it is added as an example of the theme switch implementation

// const switcher = document.querySelector(".theme-switcher");

const theme = document.querySelector(".theme");
const labels = Array.from(document.querySelectorAll(".switch"));
const path = Array.from(document.querySelectorAll("path"));
const texts = Array.from(document.querySelectorAll(".light"));
const svgStroke = document.querySelector(".stroke");

const switchTheme = (array, theme) => {
  array.forEach((item) => {
    if (item.classList.contains(theme)) {
      item.classList.remove(theme);
    } else {
      item.classList.add(theme);
    }
  });
};

switcher.addEventListener("click", () => {
  switchTheme(labels, "dark-theme-label");
  switchTheme(path, "dark-theme-path");
  switchTheme(texts, "dark-theme-text");
  svgStroke.classList.remove("dark-theme-path");
  if (theme.classList.contains("dark-theme")) {
    theme.classList.remove("dark-theme");
    svgStroke.classList.remove("dark-theme-stroke");
  } else {
    theme.classList.add("dark-theme");
    svgStroke.classList.add("dark-theme-stroke");
  }
});
