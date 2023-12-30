<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: index.php");
    exit();
}

require_once "database.php";

// Fetch the user ID based on the session
$userFullName = $_SESSION["user"];
$sqlUserId = "SELECT id FROM users WHERE full_name = '$userFullName'";
$resultUserId = mysqli_query($conn, $sqlUserId);
$user = mysqli_fetch_assoc($resultUserId);
$userId = $user["id"];

// Fetch the scoreboard data for the selected level
$level = isset($_GET['level']) ? $_GET['level'] : 'level_1.html';  // Default to level 1 if no level is selected
$activeLevel = str_replace('.html', '', $level);
$sqlScoreboard = "SELECT DISTINCT full_name, steps, completion_time
                  FROM user_game_data
                  JOIN users ON user_game_data.user_id = users.id
                  WHERE user_game_data.level = '$level'
                  ORDER BY steps, completion_time";

$resultScoreboard = mysqli_query($conn, $sqlScoreboard);

if ($level == 'level_1.html') {
    $level = '1. szint';
}else if ($level == 'level_2.html') {
    $level = '2. szint';
}else if ($level == 'level_3.html') {
    $level = '3. szint';
}else if ($level == 'level_4.html') {
    $level = '4. szint';
}else {
    $level = '5. szint';
}
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scoreboard</title>
    <link rel="stylesheet" href="scoreboard.css">
</head>
<body>
    <header>
        <h1>Scoreboard</h1>
    </header>
    <main>
        <div class="buttons">
            <?php for ($i = 1; $i <= 5; $i++): ?>
                <button class="<?php echo $activeLevel === "level_$i" ? 'active' : ''; ?>" onclick="window.location.href='scoreboard.php?level=level_<?php echo $i; ?>.html'"><?php echo $i; ?>. szint</button>
            <?php endfor; ?>
            <a href="index.php">Vissza a főmenübe</a>
        </div>

        <div class="main-content">
            <table border="1">
                <thead>
                    <tr>
                        <th>Helyezés</th>
                        <th>Név</th>
                        <th>Pálya</th>
                        <th>Lépések</th>
                        <th>Idő</th>
                    </tr>
                </thead>
                <tbody>

                    <?php
                    $rank = 1;

                    while ($row = mysqli_fetch_assoc($resultScoreboard)) {
                        echo "<tr>";
                        echo "<td>" . $rank++ . ".</td>";
                        echo "<td>" . $row['full_name'] . "</td>";
                        echo "<td>" . $level . "</td>";
                        echo "<td>" . $row['steps'] . "</td>";
                        echo "<td>" . formatTime($row['completion_time']) . "</td>";
                        echo "</tr>";
                    }
                    ?>

                </tbody>
            </table>
        </div>
    </main>

</body>
</html>





<?php
function formatTime($seconds) {
    $minutes = floor($seconds / 60);
    $seconds %= 60;
    return sprintf("%02d:%02d", $minutes, $seconds);
}
?>
