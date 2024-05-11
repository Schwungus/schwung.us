const wavies = document.getElementsByClassName("wavy-text");

for (const wavy of wavies) {
    spanify(wavy);
}

function spanify(element) {
    const text = element.textContent;
    element.textContent = "";

    let counter = 1;

    for (const c of text) {
        const span = document.createElement("span");
        span.textContent = c;

        if (c == " ") {
            span.classList.add("space");
        }

        span.style.animationDelay = 0.1 * counter + "s";

        counter += 1;

        element.appendChild(span);
    }
}
