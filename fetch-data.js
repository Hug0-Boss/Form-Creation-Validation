// Define an asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user names
        const userList = document.createElement('ul');

        // Loop through each user and create a list item
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li> for each user
            listItem.textContent = user.name; // Set the user's name as text
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by displaying a failure message
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
    }
}

// Invoke fetchUserData when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
