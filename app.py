from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load sentiment model
classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    user_input = request.json.get("text")
    if not user_input:
        return jsonify({"error": "No text provided"}), 400
    result = classifier(user_input)[0]
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
