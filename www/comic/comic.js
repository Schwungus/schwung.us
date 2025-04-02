const comics = {
    null: {
        name: "404",
        pages: 1,
    },

    "sfusion-1": {
        name: "S-Fusion Prologue Ch. 1",
        pages: 3,
    },
};

const params = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", () => {
    const previous = document.getElementById("previous");
    const pageImg = document.getElementById("page");
    const next = document.getElementById("next");

    previous.addEventListener("click", previousPage);
    pageImg.addEventListener("click", nextPage);
    next.addEventListener("click", nextPage);

    var id = params.get("id");
    var page = params.get("page") ?? 0;
    var comic, title;

    if (id in comics) {
        comic = comics[id];
        page = Math.min(Math.max(page, 0), comic.pages - 1);
        title = comic.name;
    } else {
        comic = comics[null];
        id = null;
        page = 0;
        title = comic.name;
    }

    if (page <= 0) {
        previous.style.visibility = "hidden";
        previous.style.cursor = "default";
    }

    if (page >= comic.pages - 1) {
        pageImg.style.cursor = "default";
        next.style.visibility = "hidden";
        next.style.cursor = "default";
    }

    document.title = `${title} - Schwungus Comics`;
    pageImg.src = `/comics/assets/${id}/${page}.png`;
});

function previousPage() {
    const previous = document.getElementById("previous");
    const pageImg = document.getElementById("page");
    const next = document.getElementById("next");

    var id = params.get("id");
    var comic = comics[id in comics ? id : null];
    var oldPage = Math.min(params.get("page") ?? 0, comic.pages);
    var page = Math.max(oldPage - 1, 0);

    if (oldPage != page) {
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
}

function nextPage() {
    const previous = document.getElementById("previous");
    const pageImg = document.getElementById("page");
    const next = document.getElementById("next");

    var oldPage = params.get("page") ?? 0;
    var id = params.get("id");
    var comic = comics[id in comics ? id : null];
    var page = Math.min(oldPage + 1, comic.pages - 1);

    if (oldPage != page) {
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
}
