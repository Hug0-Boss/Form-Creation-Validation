document.addEventListener("DOMContentLoaded", async function () {
    const apiDataDiv = document.getElementById("api-data");

    try {
        // Fetch user data from the public API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Check if the response is okay (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const users = await response.json();
        
        // Clear the loading message
        apiDataDiv.textContent = "";

        // Display each user's name
        users.forEach(user => {
            const userName = document.createElement("p");
            userName.textContent = user.name; // Display user name
            apiDataDiv.appendChild(userName); // Append to the div
        });
    } catch (error) {
        // Handle errors
        apiDataDiv.textContent = `Error fetching user data: ${error.message}`;
        apiDataDiv.style.color = "red"; // Optional: change text color to indicate error
    }
});
