<?php

    if (!isset($_GET["src"]) || filter_var($_GET["src"], FILTER_VALIDATE_URL) === false) {
        http_response_code(404);
        die("404 Not Found");
    }

?>

<!DOCTYPE html>

<html>
    <head>
        <link data-library="video50" href="/video50/build/css/cs50.video.min.css" rel="stylesheet"/>
        <script src="/video50/src/lib/jquery-1.9.1.min.js"></script>
        <script data-library="video50" src="/video50/build/js/cs50.video.min.js"></script>
        <style>

            html, body, #v {
                height: 100%;
                margin: 0px;
                padding: 0px;
                width: 100%;
            }

        </style>
        <script>

            $(function() {
                new CS50.Video("#v", {"captions":[],"downloads":[{"label":"MP4","src":<?= json_encode($_GET["src") ?>}],"sources":{"source":[{"src":<?= json_encode($_GET["src") ?>,"type":"video\/mp4"}]}});
            });

        </script>
        <title>CS161</title>
    </head>
    <body>
        <div id="v"></div>
    </body>
</html>
