let word = prompt("Ismingizni kiriting")

let letter = prompt("Bironta harf kiriting")

if (word.includes(letter.toLowerCase())||word.includes(letter.toUpperCase())) {
    alert(word + " ismining " + letter + " harfi mavjud")
} else {
    alert(word + " ismining " + letter + " harfi mavjud emas")   
}