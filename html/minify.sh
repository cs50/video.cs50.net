#!/bin/sh

rm -rf build
mkdir -p build/img
mkdir -p build/js
mkdir -p build/css
mkdir -p build/examples

echo "Building JavaScript..."
cat \
    video50/lib/underscore-min.js \
    video50/lib/jwplayer/jwplayer.js \
    video50/js/video50.js \
    video50/js/video50.languages.js \
    > build/js/cs50.video.min.js

java -jar yuicompressor-2.4.7.jar -o build/js/cs50.video.min.js build/js/cs50.video.min.js

sass video50/css/video50.scss > video50/css/video50.css

echo "Building CSS..."
cat \
    video50/css/video50.css \
    > build/css/cs50.video.min.css
java -jar yuicompressor-2.4.7.jar -o build/css/cs50.video.min.css build/css/cs50.video.min.css

echo "Copying assets..."
cp video50/lib/jwplayer/jwplayer.flash.swf build/jwplayer.flash.swf
cp video50/img/* build/img
cp video50/examples/* build/examples
