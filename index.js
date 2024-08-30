const textP = document.querySelector(".html-text");
console.log(textP);
const text = textP.innerHTML;

let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
let randomIndex = "";
for (let i = 0; i < 4; i++) {
  randomIndex += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
}
console.log(`Случайные буквы из алфавита: ${randomIndex}`);

textP.innerText = `Случайные буквы из алфавита: ${randomIndex}`;
