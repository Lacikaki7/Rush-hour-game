<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: index.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $level = $_POST["level"];
    $steps = $_POST["steps"];
    $completionTime = $_POST["completionTime"];

    require_once "database.php";

    $userFullName = $_SESSION["user"];
    $sqlUserId = "SELECT id FROM users WHERE full_name = '$userFullName'";
    $resultUserId = mysqli_query($conn, $sqlUserId);
    $user = mysqli_fetch_assoc($resultUserId);
    $userId = $user["id"];

    $sqlInsertGameData = "INSERT INTO user_game_data (user_id, level, steps, completion_time) VALUES ('$userId', '$level', '$steps', '$completionTime')";
    mysqli_query($conn, $sqlInsertGameData);
}
?>
