#!/bin/sh

# http://stackoverflow.com/a/4774063
pushd `dirname $0` > /dev/null
SCRIPTPATH=`pwd`
popd > /dev/null

rm -rf $SCRIPTPATH/../public/video50/build
mkdir -p $SCRIPTPATH/../public/video50/build/{css,img,js}

echo "Building JavaScript..."
cat \
    $SCRIPTPATH/../public/video50/src/lib/underscore-min.js \
    $SCRIPTPATH/../public/video50/src/lib/jwplayer/jwplayer.js \
    $SCRIPTPATH/../public/video50/src/lib/cs50.analytics.js \
    $SCRIPTPATH/../public/video50/src/js/video50.js \
    $SCRIPTPATH/../public/video50/src/js/video50.languages.js \
    > $SCRIPTPATH/../public/video50/build/js/cs50.video.min.js

java -jar $SCRIPTPATH/../lib/yuicompressor-2.4.7.jar -o $SCRIPTPATH/../public/video50/build/js/cs50.video.min.js $SCRIPTPATH/../public/video50/build/js/cs50.video.min.js

sass $SCRIPTPATH/../public/video50/src/css/video50.scss > $SCRIPTPATH/../public/video50/src/css/video50.css

echo "Building CSS..."
cat \
    $SCRIPTPATH/../public/video50/src/css/video50.css \
    > $SCRIPTPATH/../public/video50/build/css/cs50.video.min.css
java -jar $SCRIPTPATH/../lib/yuicompressor-2.4.7.jar -o $SCRIPTPATH/../public/video50/build/css/cs50.video.min.css $SCRIPTPATH/../public/video50/build/css/cs50.video.min.css

echo "Copying assets..."
cp $SCRIPTPATH/../public/video50/src/lib/jwplayer/jwplayer.flash.swf $SCRIPTPATH/../public/video50/build/js/
cp $SCRIPTPATH/../public/video50/src/img/* $SCRIPTPATH/../public/video50/build/img/
