<?php

    // configuration
    require_once(dirname(__FILE__) . "/config.php");

    // remember which user, if any, logged in
    $user = CS50::getUser(RETURN_TO);
    if ($user !== false)
        $_SESSION["user"] = $user;

    // redirect user to index.php
    $protocol = (isset($_SERVER["HTTPS"])) ? "https" : "http";
    $host  = $_SERVER["HTTP_HOST"];
    $path = rtrim(dirname($_SERVER["PHP_SELF"]), "/\\");
    header("Location: {$protocol}://{$host}{$path}/index.php");

?>
