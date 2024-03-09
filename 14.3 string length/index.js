var text = prompt("Type in your message: ");
textLength = text.length;
leftLength = 140 - textLength;
alert(`Your message have ${textLength} charachters, you have ${leftLength} charachters left.`);