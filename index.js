const typingElements = document.querySelectorAll('.typing');
let currentIndex = 0;

function typeText() {
    if (currentIndex >= typingElements.length) {
        currentIndex = 0; // Reset to the first line
    }

    typingElements.forEach((element, index) => {
        if (index === currentIndex) {
            const text = element.getAttribute('data-text');
            element.textContent = ''; // Clear the text
            const speed = 100; // Typing speed in milliseconds
            let charIndex = 0;

            function typeChar() {
                if (charIndex < text.length) {
                    element.textContent += text[charIndex];
                    charIndex++;
                    setTimeout(typeChar, speed);
                } else {
                    setTimeout(() => {
                        currentIndex++;
                        typeText(); // Move to the next line
                    }, 1000); // Delay before next line appears
                }
            }

            typeChar(); // Start typing the line
        } else {
            element.textContent = ''; // Clear text for other lines
        }
    });
}

typeText(); // Start the typing animation
