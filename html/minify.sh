#!/bin/sh

rm -rf build
mkdir -p build/img
mkdir -p build/examples

echo "Building JavaScript..."
cat \
    video50/lib/underscore-min.js \
    video50/lib/jwplayer.js \
    video50/js/video50.js \
    video50/js/video50.languages.js \
    > build/cs50.video.min.js

java -jar yuicompressor-2.4.7.jar -o build/cs50.video.min.js build/cs50.video.min.js

sass video50/css/video50.scss > video50/css/video50.css

echo "Building CSS..."
cat \
    video50/css/video50.css \
    > build/cs50.video.min.css
java -jar yuicompressor-2.4.7.jar -o build/cs50.video.min.css build/cs50.video.min.css

echo "Copying assets..."
cp video50/lib/jwplayer/jwplayer.flash.swf build/jwplayer.flash.swf
cp video50/img/* build/img
