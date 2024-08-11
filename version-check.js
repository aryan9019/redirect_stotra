// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function redirectTo(url) {
            window.location.href = url;
        }

// Expected version
const expectedVersion = "1.3.1";

// Get the version parameter from the URL
const version = getUrlParameter('ver');

// Creating delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to check version and redirect or show update message
async function checkVersion() {
    const messageDiv = document.getElementById('message');
    await delay(500);
    
    if (!version) {
        // Redirect to a specified URL if no version parameter is present
        window.location.href = "#";
    } else if (version === expectedVersion) {
        // Redirect to the desired URL if version matches
        /*const hiddenButton = document.getElementById('hiddenButton');
        hiddenButton.click();*/
        redirectTo("https://www.youtube.com");
    } else {
        // Hide loader
        document.getElementById('loader').style.display = 'none';

        // Show message to update the app
        messageDiv.innerHTML = `Your app version (${version || 'unknown'}) is outdated. Please update to the latest version.<br><a class="update-link" href="https://aryan9019.github.io/redirect_stotra/Stotra.apk" target="_blank">Download New App</a>`}
}
