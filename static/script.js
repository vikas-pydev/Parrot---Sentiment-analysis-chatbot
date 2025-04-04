function analyzeSentiment() {
    const text = document.getElementById("userInput").value;
    if (!text.trim()) return; // Prevent empty submissions

    fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    })
    .then(res => res.json())
    .then(data => {
      const emoji = data.label === "POSITIVE" ? "😊" : "😞";
      const resultText = `Sentiment: ${data.label} ${emoji} | Confidence: ${(data.score * 100).toFixed(2)}%`;

      // Append the result to the reviews list
      const reviewsList = document.getElementById("reviewsList");
      const reviewItem = document.createElement("div");
      reviewItem.className = "review-item";
      reviewItem.innerText = `Review: ${text}\n${resultText}`;
      reviewsList.appendChild(reviewItem);

      // Apply animation
      setTimeout(() => {
        reviewItem.classList.add("show");
      }, 100);

      // Clear the input field
      document.getElementById("userInput").value = "";
    })
    .catch(err => {
      console.error(err);
    });
}

// Add event listener for Enter key
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default Enter key behavior
        analyzeSentiment();
    }
});
  