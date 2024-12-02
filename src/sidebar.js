// Fetch the analysis data and display it in the sidebar
const displayAnalysis = async () => {
  const analysisContainer = document.getElementById("analysis-results");

  // Sample analysis data (replace with real data from ChatGPT)
  const sampleAnalysis = {
    commonClauses: ["Data usage", "Cookies", "User rights"],
    unusualTerms: ["Non-compete clause", "Unclear termination conditions"],
    summary: "This agreement includes common clauses related to data usage, but also contains unusual terms around termination and non-compete clauses. It's important to review these carefully."
  };

  // Display the results
  analysisContainer.innerHTML = `
    <h2>Summary</h2>
    <p>${sampleAnalysis.summary}</p>
    <h3>Common Clauses:</h3>
    <ul>${sampleAnalysis.commonClauses.map(term => `<li>${term}</li>`).join("")}</ul>
    <h3>Unusual Terms:</h3>
    <ul>${sampleAnalysis.unusualTerms.map(term => `<li>${term}</li>`).join("")}</ul>
  `;
};

// Close the sidebar
document.getElementById("close-sidebar").addEventListener("click", () => {
  window.close();
});

// Trigger the display function
displayAnalysis();
