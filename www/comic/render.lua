local db = json("comic/db.json");

for id, comic in pairs(db) do
    if id ~= "" then
        local outpath = "comic/" .. id .. "/index.html";

        render("_comic.html", outpath, {
            id = id,
            title = comic.name,
            description = comic.description,
        });
    end
end
