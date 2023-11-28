const demos = [
    {
        name: "Bombswab",
        url: "https://bombswab.schwungus.software",
        img: "/assets/bombswab.png"
    }
];

const root = document.getElementById("demos");

for (const demo of demos) {
    const div = document.createElement("div");

    const a = document.createElement("a");
    a.href = demo.url;

    const img = document.createElement("img");
    img.src = demo.img;

    a.appendChild(img);
    div.appendChild(a);
    root.appendChild(div);
}
