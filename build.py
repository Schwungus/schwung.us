#!/usr/bin/env python3

"""A small, hopefully cross-platform script for generating static website data from Jinja and SCSS sources."""

import shutil
import os.path

import jinja2
import sass as libsass # deprecated, but better than nothing

OUT_DIR = "out"

jn_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader("pages", "utf-8"),
    autoescape=True,
)

def sass(inf, outf):
    out = libsass.compile(filename=inf, output_style="compressed")

    with open(os.path.join(outf), "w") as f:
        print(out, file=f, flush=True)

def build(j2):
    out = jn_env.get_template(j2).render()

    base_name = os.path.splitext(j2)[0]
    html = base_name + ".html"

    with open(os.path.join(OUT_DIR, html), "w") as f:
        print(out, file=f, flush=True)

def main():
    sass("pages/index.scss", "assets/index.css")

    if os.path.exists(OUT_DIR):
        shutil.rmtree(OUT_DIR)

    shutil.copytree("assets", os.path.join(OUT_DIR, "assets"))
    shutil.copytree("docs", os.path.join(OUT_DIR, "docs"))
    shutil.copy("static/robots.txt", OUT_DIR)

    build("index.j2")
    build("demos.j2")
    build("hunk.j2")

if __name__ == "__main__":
    try:
        main()
    except Exception as ex:
        print("Operation failed:", ex)
        exit(1)
    else:
        exit(0)
