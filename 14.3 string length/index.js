let text = prompt("Type in your message: ");
let textLength = text.length;
let leftLength = 140 - textLength;
alert(`Your message have ${textLength} characters, you have ${leftLength} characters left.`);