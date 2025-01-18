# The Matrix Chrome Extension

This is a simple Chrome extension that blocks websites not in an allowed list. The extension displays a minimalistic, Matrix-themed page when an unauthorized URL is visited.
  
## Installation Instructions (Developer Mode)

To install this extension using Developer Mode, follow the steps below:

### 1. Clone the repository or download the extension files.
   - Clone the repository:
     ```bash
     git clone https://github.com/swarooppatix/the-matrix.git
     ```

### 2. Open Google Chrome and navigate to the extensions page.
   - In the Chrome browser, type `chrome://extensions/` in the address bar and press Enter.

### 3. Enable Developer Mode.
   - In the top right corner of the Extensions page, toggle the **Developer mode** switch to **ON**.

### 4. Load the extension.
   - Click on the **Load unpacked** button.
   - In the file dialog, navigate to the folder containing the downloaded extension files (where your `manifest.json` file is located) and click **Select Folder**.

### 5. Access the extension.
   - The extension should now be installed.
   - You can access the popup by clicking the extension icon in the Chrome toolbar.

### 6. Modify the Allowed URLs.
   - Open the `content.js` file to modify the list of allowed URLs.
   - The `allowedUrls` array can be updated with the URLs that should not be blocked by the extension.

