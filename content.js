const allowedUrls = [
  "https://bit-by-query.onrender.com/*",
  "https://ioit.acm.org/*",
  "http://172.16.16.1:8090/*",
  "https://aissmsioit.org/*",
];

function isAllowedUrl(url) {
  // Normalize URLs by removing trailing slashes
  const normalizedUrl = url.replace(/\/+$/, "");

  return allowedUrls.some((allowedUrl) => {
    // Remove the wildcard for base comparison
    const baseUrl = allowedUrl.endsWith("/*")
      ? allowedUrl.slice(0, -2)
      : allowedUrl;

    // Normalize base URL as well
    const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");

    if (allowedUrl.endsWith("/*")) {
      // Check if the URL starts with the base URL, ignoring protocol
      const urlWithoutProtocol = normalizedUrl.replace(/^https?:\/\//, "");
      const baseWithoutProtocol = normalizedBaseUrl.replace(/^https?:\/\//, "");
      return urlWithoutProtocol.startsWith(baseWithoutProtocol);
    }

    return normalizedUrl === normalizedBaseUrl;
  });
}

const currentUrl = window.location.href;
if (!isAllowedUrl(currentUrl)) {
  document.documentElement.innerHTML = `
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: black;
        font-family: 'Courier New', Courier, monospace;
        color: #00ff00;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
      }
      .matrix-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("https://ichef.bbci.co.uk/news/1024/cpsprodpb/57CA/production/_122247422_pills.jpg.webp");
        background-size: cover;
        z-index: -1;
        opacity: 0.6;
      }
      .block-container {
        padding: 30px;
        border: 2px solid #00ff00;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 1);
        max-width: 700px;
        text-align: center;
        z-index: 1;
      }
      h1 {
        margin: 10px;
        font-size: 2.5rem;
      }
      p {
        margin: 10px;
        font-size: 1.2rem;
      }
      .allowed-sites {
        margin-top: 20px;
        padding: 15px;
        border-radius: 5px;
      }
      .allowed-sites a {
        color: #00ff00;
        text-decoration: none;
      }
      .allowed-sites a:hover {
        text-decoration: underline;
      }
    </style>
    <div class="matrix-background"></div>
    <div class="block-container">
      <h1>The Website is Blocked!</h1>
      <p><i>"The Matrix has you."</i></p>
      <p>This path is blocked.</p>
      <p><i>"Unfortunately, you're not The One."</i></p>
      <div class="allowed-sites">
        <p>Allowed websites:</p>
        ${allowedUrls
          .map(
            (site) =>
              `<div>• <a href="${site.replace(
                "/*",
                ""
              )}" target="_blank">${site.replace("/*", "")}</a></div>`
          )
          .join("")}
      </div>
    </div>
  `;
}
