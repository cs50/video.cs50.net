<?php

    // URL that CS50 ID should ask users to trust; must be a prefix of RETURN_TO and
    // must be registered with CS50, per https://manual.cs50.net/ID
    define("TRUST_ROOT", "https://video.cs50.net/161/");

    // URL to which CS50 ID should return users;
    // must be registered with CS50, per https://manual.cs50.net/id/
    define("RETURN_TO", "http://video.cs50.net/161/return_to.php");

    // CS50 Library; ideally, this should not be inside public_html (or DocumentRoot)
    require_once(__DIR__ . "/CS50/CS50.php");

    // ensure $_SESSION exists
    session_start();

?>
