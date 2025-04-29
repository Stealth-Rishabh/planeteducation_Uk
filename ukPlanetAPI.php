<?php
// Add these CORS headers at the top
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// print_r($_POST);die;

header('Content-Type: application/json');
try {
    // Get JSON data from the request
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    // Debug logging
    error_log("Received data: " . print_r($data, true));

    // Validate required fields
    $required_fields = ['Name', 'email', 'phone', 'qualification', 'course', 'ielts'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Field '$field' is mandatory");
        }
    }

    // Prepare data for Google Sheets
    $sheetsData = json_encode([
        'Name' => $data['Name'],
        'email' => $data['email'],
        'phone' => $data['phone'],
        'qualification' => $data['qualification'],
        'course' => $data['course'],
        'ielts' => $data['ielts'],
        'utm_source' => $data['utm_source'] ?? '',
        'utm_medium' => $data['utm_medium'] ?? '',
        'utm_campaign' => $data['utm_campaign'] ?? '',
        'utm_term' => $data['utm_term'] ?? '',
        'utm_content' => $data['utm_content'] ?? '',
        'submission_url' => $data['submission_url'] ?? '',
        'referrer' => $data['referrer'] ?? ''
    ]);

    // Debug logging
    error_log("Sending data to sheets: " . $sheetsData);

    // Send to Google Sheets
    $sheetsResponse = file_get_contents(
        'https://script.google.com/macros/s/AKfycby9U1HXfE2ZMdDYANETHMoR-YGYG1lLM-jxaxR0AfBFWUjb-tKWJa9FI0nGtEqQAsSL/exec',
        false,
        stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => [
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($sheetsData)
                ],
                'content' => $sheetsData
            ]
        ])
    );

    // Debug logging
    error_log("Sheets response: " . $sheetsResponse);

    // Parse sheets response
    $responseData = json_decode($sheetsResponse, true);
    if (!$responseData['success']) {
        throw new Exception("Google Sheets error: " . ($responseData['message'] ?? 'Unknown error'));
    }

    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully'
    ]);

} catch (Exception $e) {
    error_log("Error in form submission: " . $e->getMessage());
    // Return error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>