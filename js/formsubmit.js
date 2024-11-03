document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("loadingOverlay").style.display = "flex";

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    timestamp: new Date().toISOString(),
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwIxSdl6TG-hnzwGlJ0WmsiM0Wh0tcojr2OEFMwYK6dkY1NB_lVBR3pR6Pwti-Ea-U/exec";

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      document.getElementById("loadingOverlay").style.display = "none";
      alert("Thank you! Your message has been submitted successfully.");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      document.getElementById("loadingOverlay").style.display = "none";
      console.error("Error:", error);
      alert(
        "Oops! There was an error submitting your message. Please try again."
      );
    });
});

// // Google Apps Script code
// function doPost(e) {
//   // Get the spreadsheet and sheet
//   const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
//   const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();

//   // Parse the JSON data from the request
//   const data = JSON.parse(e.postData.contents);

//   // Prepare the row data
//   const rowData = [
//     new Date(), // Timestamp
//     data.name,
//     data.email,
//     data.subject,
//     data.message
//   ];

//   // Append the row to the spreadsheet
//   sheet.appendRow(rowData);

//   // Return success response
//   return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
//     .setMimeType(ContentService.MimeType.JSON);
// }

// // Add this function to test if the spreadsheet is accessible
// function testSpreadsheetAccess() {
//   const spreadsheetId = 'YOUR_SPREADSHEET_ID';
//   try {
//     const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
//     Logger.log('Successfully accessed the spreadsheet');
//   } catch(error) {
//     Logger.log('Error accessing spreadsheet: ' + error.toString());
//   }
// }
