#!/usr/bin/env bash

OUT=out
mkdir -p "$OUT"

function copy() {
    file=$1
    cp -r "$1" "$OUT"
}

function build() {
    page=$1
    j2 "$page" > "$OUT/$page"
}

sass index.scss assets/index.css

copy robots.txt

copy assets
copy docs

build index.html
build demos.html
build hunk.html
