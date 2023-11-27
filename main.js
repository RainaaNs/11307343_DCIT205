document.addEventListener("DOMContentLoaded", function () {
    // Define the path to your header file
    var headerPath = "header.html";

    // Use the fetch API
    fetch(headerPath)
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error(`Failed to load ${headerPath}: ${response.statusText}`);
            }
            // Return the response text
            return response.text();
        })
        .then(html => {
            // Insert the header content into the <header> element
            document.querySelector("header").innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
});
