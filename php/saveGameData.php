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

    // Assuming you already have a database connection
    require_once "database.php";

    // Get the user ID based on the session
    $userFullName = $_SESSION["user"];
    $sqlUserId = "SELECT id FROM users WHERE full_name = '$userFullName'";
    $resultUserId = mysqli_query($conn, $sqlUserId);
    $user = mysqli_fetch_assoc($resultUserId);
    $userId = $user["id"];

    // Insert game data into user_game_data table
    $sqlInsertGameData = "INSERT INTO user_game_data (user_id, level, steps, completion_time) VALUES ('$userId', '$level', '$steps', '$completionTime')";
    mysqli_query($conn, $sqlInsertGameData);
}
?>