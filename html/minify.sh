#!/bin/sh

rm -rf video50/build
mkdir -p video50/build/img
mkdir -p video50/build/js
mkdir -p video50/build/css

echo "Building JavaScript..."
cat \
    video50/src/lib/underscore-min.js \
    video50/src/lib/jwplayer/jwplayer.js \
    video50/src/js/video50.js \
    video50/src/js/video50.languages.js \
    > video50/build/js/cs50.video.min.js

java -jar yuicompressor-2.4.7.jar -o video50/build/js/cs50.video.min.js video50/build/js/cs50.video.min.js

sass video50/src/css/video50.scss > video50/src/css/video50.css

echo "Building CSS..."
cat \
    video50/src/css/video50.css \
    > video50/build/css/cs50.video.min.css
java -jar yuicompressor-2.4.7.jar -o video50/build/css/cs50.video.min.css video50/build/css/cs50.video.min.css

echo "Copying assets..."
cp video50/src/lib/jwplayer/jwplayer.flash.swf video50/build/jwplayer.flash.swf
cp video50/src/img/* video50/build/img
cp -r video50/src/examples video50/build/
mv -f video50/build/examples/1-build.html video50/build/examples/1.html
mv -f video50/build/examples/2-build.html video50/build/examples/2.html
