// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Expected version
const expectedVersion = "0.0.1";

// Get the version parameter from the URL
const version = getUrlParameter('ver');

// Creating delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to check version and redirect or show update message
async function checkVersion() {
    const messageDiv = document.getElementById('message');
    const logDiv = document.getElementById('log');
    console.log('Starting version check');

    // Show log message on HTML page
    logDiv.innerHTML += 'Starting version check<br>';

    await delay(1000);
    
    if (!version) {
        console.log('No version parameter found');
        logDiv.innerHTML += 'No version parameter found<br>';
        
        // Redirect to a specified URL if no version parameter is present
        window.location.href = "https://aryan9019.github.io/stotra/";
    } else if (version === expectedVersion) {
        console.log('Version matches. Redirecting to local HTML file');
        logDiv.innerHTML += 'Version matches. Redirecting to local HTML file<br>';
        
        // Redirect to the desired URL if version matches
        // Find the hidden button
            const hiddenButton = document.getElementById('hiddenButton');

            // Automatically click the hidden button
            hiddenButton.click();
    } else {
        console.log('Version mismatch. Showing update message');
        logDiv.innerHTML += 'Version mismatch. Showing update message<br>';
        
        // Hide loader
        document.getElementById('loader').style.display = 'none';

        // Show message to update the app
        messageDiv.innerHTML = `Your app version (${version || 'unknown'}) is outdated. Please update to the latest version. <br><a class="update-link" href="https://example.com/download.apk">Download APK</a>`;
    }
}

// Run the version check on page load
window.onload = checkVersion;
