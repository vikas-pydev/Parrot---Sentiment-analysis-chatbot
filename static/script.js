<script>
async function analyzeSentiment(event) {
    if (event.key === "Enter" || event.type === "click") {
        let userInput = document.getElementById("userInput").value;
        let response = await fetch("http://127.0.0.1:5000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userInput })
        });
        let data = await response.json();
        
        let sentimentColor = "#28a745"; 
        if (data.sentiment === "NEGATIVE") sentimentColor = "#dc3545";
        else if (data.sentiment === "NEUTRAL") sentimentColor = "#ffc107";

        let reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.innerHTML = `<strong>Review:</strong> ${userInput}<br>
            <span class='sentiment' style='color:${sentimentColor}'>Sentiment: ${data.sentiment} (${data.confidence}%)</span>`;
        document.getElementById("reviews").prepend(reviewDiv);
        
        document.getElementById("userInput").value = "";
    }
}
</script>