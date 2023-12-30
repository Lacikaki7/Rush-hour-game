<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rush hour - Main menu</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <div class="menu">
    <?php
        session_start();
        if (isset($_SESSION["user"])) {
        ?>
        <div class="logReg">
            <p><b>Bejelentkezve: <?php echo $_SESSION["user"]; ?></b></p>
            <a href="logout.php">Kijelentkezés</a><br>
            <a href="scoreboard.php">Scoreboard</a>
        </div>

        <?php
        } else {
        ?>
        <div class="logReg">
            <a href="registration.php">Regisztráció</a>
            <span style="color: #892222;">|</span>
            <a href="login.php">Bejelentkezés</a>
        </div>
        <?php
        }
        ?>
        <ul class="button-container">
            <h1>Rush hour</h1>
            <li><a href="level_1.html">1. szint</a></li>
            <li><a href="level_2.html">2. szint</a></li>
            <li><a href="level_3.html">3. szint</a></li>
            <li><a href="level_4.html">4. szint</a></li>
            <li><a href="level_5.html">5. szint</a></li>
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
    <div class="mainMenuButton" onclick="location.href='./index.php';"></div>
</body>
</html>
