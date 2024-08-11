(function () {
    const slidesRoot = document.getElementsByTagName("main").item(0);
    const slides = slidesRoot.children;

    let idx = 0;

    for (const slide of slides) {
        const nextButt = document.createElement("button");
        nextButt.textContent = "Next";

        const prevButt = document.createElement("button");
        prevButt.textContent = "Previous";

        // TODO: add event handlers.

        const buttsRoot = document.createElement("div");

        for (const node of [buttsRoot, nextButt, prevButt]) {
            node.classList = ["slide-goto"];
        }

        nextButt.classList.add("next");
        prevButt.classList.add("prev");

        if (idx != 0) {
            buttsRoot.appendChild(prevButt);
        }

        if (idx != slides.length - 1) {
            buttsRoot.appendChild(nextButt);
        }

        slide.appendChild(buttsRoot);

        idx++;
    }

    slidesRoot.focus({ preventScroll: true });
})()
