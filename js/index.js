function spanify(element) {
    const text = element.textContent;
    element.textContent = "";

    for (const c of text) {
        const span = document.createElement("span");
        span.textContent = c;

        if (c == " ") {
            span.classList.add("space");
        }

        element.appendChild(span);
    }
}

const wavy = document.getElementById("wavy-text");
spanify(wavy);
