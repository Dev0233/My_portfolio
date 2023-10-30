<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $otherQuery = $_POST['otherQuery'];

    // Basic validation - check if required fields are not empty
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Validation successful, you can proceed with handling the data

        // For instance, log the data to a file or database
        $log = "Name: $name, Email: $email, Message: $message, Other Query: $otherQuery\n";
        file_put_contents('form_data.log', $log, FILE_APPEND);

        // Alternatively, you might send an email with this data
        // mail($yourEmail, "New form submission", "Name: $name, Email: $email, Message: $message, Other Query: $otherQuery");
        
        // Redirect the user after form submission (optional)
        header("Location: thank_you.html");
        exit;
    } else {
        // If required fields are empty, you might redirect back to the form page with an error message
        header("Location: contact_form.html?error=1");
        exit;
    }
}
?>
