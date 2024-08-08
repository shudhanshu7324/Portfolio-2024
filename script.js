document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Coder!", "FullStack Developer", "Software Developer"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150; // milliseconds
    const delayBetweenTexts = 800; // milliseconds

    function type() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("typed-text").textContent += texts[textIndex].charAt(charIndex) ;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                deleteText();
            }, delayBetweenTexts);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            document.getElementById("typed-text").textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, typingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
