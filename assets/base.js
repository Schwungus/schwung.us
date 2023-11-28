setTimeout(function () {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = "https://kit.fontawesome.com/6ad2356fdb.js";

    try {
        const head = document.getElementsByTagName("HEAD")[0];
        head.appendChild(script);
    } catch (e) {}
}, 1000);
