let comics = null;

let comicsUrl =
    "https://raw.githubusercontent.com/Schwungus/schwung.us/refs/heads/rework/www/comic/db.json";

if (window.location.hostname == "localhost") {
    comicsUrl = "/comic/db.json";
}

fetch(comicsUrl)
    .then((x) => x.json())
    .then((x) => {
        comics = x;
    })
    .then(startup);

const params = new URLSearchParams(window.location.search);

function startup() {
    const previous = document.getElementById("previous");
    const pageImg = document.getElementById("page");
    const next = document.getElementById("next");

    previous.addEventListener("click", previousPage);
    pageImg.addEventListener("click", nextPage);
    next.addEventListener("click", nextPage);

    setPage(getPageNum(), true);

    const title = getComic().name;
    document.title = `${title} | Schwungus Comics`;
}

document.addEventListener("DOMContentLoaded", () => {
    if (comics != null) {
        startup();
    }
});

function getPageNum() {
    return +params.get("page") ?? 0;
}

function getComic() {
    const id = params.get("id");
    return comics[id in comics ? id : ""];
}

function previousPage() {
    const oldPage = Math.min(getPageNum(), getComic().pages);
    const newPage = Math.max(oldPage - 1, 0);
    setPage(newPage);
}

function nextPage() {
    const newPage = Math.min(getPageNum() + 1, getComic().pages - 1);
    setPage(newPage);
}

function setPage(page, force) {
    const previous = document.getElementById("previous");
    const pageImg = document.getElementById("page");
    const next = document.getElementById("next");

    const id = params.get("id");
    const comic = getComic();

    if (!force && getPageNum() == page) {
        return;
    }

    params.set("page", page);
    window.history.pushState(null, "", "/comic?" + params.toString());
    pageImg.src = `/comics/assets/${id}/${page}.png`;

    if (page <= 0) {
        previous.style.visibility = "hidden";
        previous.style.cursor = "default";
    } else {
        previous.style.visibility = "visible";
        previous.style.cursor = "pointer";
    }

    if (page >= comic.pages - 1) {
        pageImg.style.cursor = "default";
        next.style.visibility = "hidden";
        next.style.cursor = "default";
    } else {
        pageImg.style.cursor = "pointer";
        next.style.visibility = "visible";
        next.style.cursor = "pointer";
    }
}
