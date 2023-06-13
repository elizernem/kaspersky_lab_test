const text = Array.from(document.querySelectorAll(".card__text"));
const select = document.querySelector('[name="os-select"]');
const form = document.querySelector(".pagination");

const content = {
  windows: "Essential antivirus protection for Windows PCs",
  macos: "Essential antivirus protection for macOS PCs",
  ios: "Essential antivirus protection for iOS",
  android: "Essential antivirus protection for Android",
  tools: "Essential antivirus protection for free tools",
};

const changeText = (element) => {
  element.addEventListener("change", function handleChange(event) {
    const value = event.target.value;
    const values = Object.values(content);
    text.forEach((item) => {
      item.textContent = `${content[value]}`;
    });
    if (value === "all") {
      for (let i = 0; i < text.length; i++) {
        text[i].textContent = `${values[i]}`;
      }
    }
  });
};

changeText(select);
changeText(form);
