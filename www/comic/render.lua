local db = json("comic/db.json");

for id, comic in pairs(db) do
    local outpath = "comic/" .. id .. "/index.html";

    render("comic/_comic.html", outpath, {
        id = id,
        title = comic.name,
        description = comic.description,
    });
end
