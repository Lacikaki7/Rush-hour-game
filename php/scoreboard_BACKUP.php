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

// Fetch the scoreboard data for the first level
$level = 'level_1.html';  // Change this if needed
$sqlScoreboard = "SELECT DISTINCT full_name, steps, completion_time
                  FROM user_game_data
                  JOIN users ON user_game_data.user_id = users.id
                  WHERE user_game_data.level = '$level'
                  ORDER BY steps, completion_time";

$resultScoreboard = mysqli_query($conn, $sqlScoreboard);
$level = 'level 1';
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scoreboard</title>
    <link rel="stylesheet" href="your_styles.css">
</head>
<body>

    <h1>Scoreboard - Level 1</h1>

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

    <a href="index.php">Vissza a főmenübe</a>

</body>
</html>

<?php
function formatTime($seconds) {
    $minutes = floor($seconds / 60);
    $seconds %= 60;
    return sprintf("%02d:%02d", $minutes, $seconds);
}
?>
