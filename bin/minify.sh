#!/bin/sh

# http://stackoverflow.com/a/4774063
pushd `dirname $0` > /dev/null
SCRIPTPATH=`pwd`
popd > /dev/null

rm -rf $SCRIPTPATH/../html/video50/build
mkdir -p $SCRIPTPATH/../html/video50/build/{css,img,js}

echo "Building JavaScript..."
cat \
    $SCRIPTPATH/../html/video50/src/lib/underscore-min.js \
    $SCRIPTPATH/../html/video50/src/lib/jwplayer/jwplayer.js \
    $SCRIPTPATH/../html/video50/src/lib/cs50.analytics.js \
    $SCRIPTPATH/../html/video50/src/js/video50.js \
    $SCRIPTPATH/../html/video50/src/js/video50.languages.js \
    > $SCRIPTPATH/../html/video50/build/js/cs50.video.min.js

java -jar $SCRIPTPATH/../lib/yuicompressor-2.4.7.jar -o $SCRIPTPATH/../html/video50/build/js/cs50.video.min.js $SCRIPTPATH/../html/video50/build/js/cs50.video.min.js

sass $SCRIPTPATH/../html/video50/src/css/video50.scss > $SCRIPTPATH/../html/video50/src/css/video50.css

echo "Building CSS..."
cat \
    $SCRIPTPATH/../html/video50/src/css/video50.css \
    > $SCRIPTPATH/../html/video50/build/css/cs50.video.min.css
java -jar $SCRIPTPATH/../lib/yuicompressor-2.4.7.jar -o $SCRIPTPATH/../html/video50/build/css/cs50.video.min.css $SCRIPTPATH/../html/video50/build/css/cs50.video.min.css

echo "Copying assets..."
cp $SCRIPTPATH/../html/video50/src/lib/jwplayer/jwplayer.flash.swf $SCRIPTPATH/../html/video50/build/js/
cp $SCRIPTPATH/../html/video50/src/img/* $SCRIPTPATH/../html/video50/build/img/
