let comics = null;

let comicsUrl =
    "https://raw.githubusercontent.com/Schwungus/schwung.us/refs/heads/rework/www/comic/db.json";
let pagesUrl =
    "https://raw.githubusercontent.com/Schwungus/schwung.us/refs/heads/rework/www/comics/assets/";

if (["localhost", "127.0.0.1", ""].includes(window.location.hostname)) {
    comicsUrl = "/comic/db.json";
    pagesUrl = "/comics/assets/";
}

const params = new URLSearchParams(window.location.search);

function startup() {
    document.getElementById("previous").addEventListener("click", previousPage);
    document.getElementById("page").addEventListener("click", nextPage);
    document.getElementById("next").addEventListener("click", nextPage);

    setPage(getPageNum(), true);

    const comic = getComic();
    document.title = `${comic.name} | Schwungus Comics`;

    if ("newgrounds" in comic) {
        const link = document.createElement("a");
        link.href = `https://newgrounds.com/art/view/${comic.newgrounds}`;
        link.textContent = "Newgrounds";

        const viewOn = document.createElement("p");
        viewOn.textContent = "View on ";
        viewOn.className = "newgrounds";
        viewOn.appendChild(link);
        viewOn.appendChild(document.createTextNode("."));

        const copying = document.getElementById("copying");
        copying.appendChild(viewOn);
        copying.appendChild(separator);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(comicsUrl)
        .then((x) => x.json())
        .then((x) => {
            comics = x;
        })
        .then(startup);
});

document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowLeft":
            previousPage();
            break;

        case " ":
        case "ArrowRight":
            nextPage();
            break;

        default:
            return;
    }

    event.preventDefault();
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
    pageImg.src = "";
    pageImg.src = `${pagesUrl}${id}/${page}.png`;

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

function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.getElementById("comic").requestFullscreen();
    }
}
