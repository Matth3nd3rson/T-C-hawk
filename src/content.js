// Identify anchor links containing "Privacy" or "Terms"
const detectTCs = () => {
  const links = document.querySelectorAll("a");
  const tcLinks = Array.from(links).filter(link => 
    /privacy|terms/i.test(link.textContent)
  );

  if (tcLinks.length > 0) {
    console.log("Detected T&C links:", tcLinks);
    // Optionally, auto-click the link or highlight it for user confirmation
    return tcLinks[0].href;
  }

  console.warn("No Terms or Privacy links detected.");
  return null;
};

// Extract and process text from the detected page section
const extractText = async (url) => {
  if (!url) return null;

  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Example: Extract main content of the page
  const mainText = doc.body.textContent || "Unable to extract content";
  return mainText;
};

// Main function triggered by user clicking the extension
(async () => {
  const tcUrl = detectTCs();
  if (tcUrl) {
    const tcText = await extractText(tcUrl);
    console.log("Extracted T&C Text:", tcText);
    // Send this text to the sidebar for further analysis
  }
})();
