<?php

    // configuration
    require_once(dirname(__FILE__) . "/config.php");

    if (isset($_GET["src"]))
    {
    	if (filter_var($_GET["src"], FILTER_VALIDATE_URL) === false) {
	    http_response_code(404);
	    die("404 Not Found");
	}
	else {
	    $_SESSION['src'] = $_GET['src'];
	}
    }

    if (!isset($_SESSION['src'])) {
	http_response_code(404);
	die("404 Not Found");
    }

    if (!isset($_SESSION['user'])) {
    	header('Location: https://video.cs50.net/161/login.php');
        exit;
    }


?>

<!DOCTYPE html>

<html>
    <head>
        <link data-library="video50" href="build/css/cs50.video.min.css" rel="stylesheet"/>
        <script src="/video50/src/lib/jquery-1.9.1.min.js"></script>
        <script data-library="video50" src="build/js/cs50.video.min.js"></script>
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
                new CS50.Video(
		    "#v",
		    {"analytics50": {"mixpanel": {"token": "56c3b1504dd27b8f0c82b72d653b7c94"}},
		    "captions":[],"downloads":[{"label":"MP4","src":<?= json_encode($_GET["src"])
		    ?>}],"sources":{"source":[{"src":<?= json_encode($_SESSION["src"]) ?>,"type":"video\/mp4"}]}},
		    {
		    	identify: "<?= $_SESSION['user']['email'] ?>",
		    	nametag: "<?= $_SESSION['user']['fullname'] ?>"
		    }
		);
            });

        </script>
        <title>CS161</title>
    </head>
    <body>
        <div id="v"></div>
    </body>
</html>
