<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.php");
    exit();
}

$loggedInUser = isset($_SESSION["user"]) ? $_SESSION["user"] : "";
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="loggedin.css">
    <title>Rush hour - Main menu</title>
</head>
<body>
    <div class="menu">
        <div class="loggedInUser">
            <?php echo $loggedInUser; ?>
        </div>
        <div class="logoutBtn">
            <a href="logout.php"><img src="logout2.png" alt="Kilépés"></a>
        </div>
        <ul class="button-container">
                <h1>Rush hour</h1>
                <li><a href="level_1.html">Starter</a></li>
                <li><a href="level_2.html">Beginner</a></li>
                <li><a href="level_3.html">Intermediate</a></li>
                <li><a href="level_4.html">Advanced</a></li>
                <li><a href="level_5.html">Expert</a></li>
                <li><a href="https://github.com/Lacikaki7/Rush-hour-game">Forráskód</a></li>
        </ul>
        <div class="info">
            <i class="fas fa-info-circle"></i>
            <div class="description">
                <h2>Cél:</h2>
                <p>A játék célja eljutni a karaktereddel (sötét zöld) a pálya jobb szélén található célmezőig, elkerülve az akadályokat.</p>

                <h2>Hogyan kell játszani:</h2>
                <ul>
                    <li>A karakteredet a nyilak segítségével mozgathatod. Jobbra, balra, fel vagy le léphet a pályán.</li>
                    <li>Az akadályokat kattintással választhatod ki és mozgathatod meg őket a szabad helyeken.</li>
                    <li>A játék akkor ér véget, amikor a karaktered elér a pálya jobb szélén található célmezőig.</li>
                    <li>A "Újrakezdés" gombbal bármikor újrakezdheted az adott szintet.</li>
                    <li>A "Főmenü" gombbal visszaléphetsz a főmenübe, ahol választhatsz másik szintet.</li>
                </ul>

                <h2>Akadályok:</h2>
                <p>Az akadályokat meg kell mozgatnod úgy, hogy szabad utat biztosíts a karakterednek a célmezőig. Vigyázz, ne zárd el a karakteredet!</p>

                <p><strong>Jó szórakozást és sok sikert a kihívásokhoz!</strong></p>
            </div>
        </div>
    </div>
</body>
</html>