from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load sentiment analysis model
sentiment_pipeline = pipeline("sentiment-analysis")

@app.route('/')
def home():
    return "Sentiment Analysis Chatbot API is Running!"

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json  
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"})

    result = sentiment_pipeline(text)[0]
    sentiment = result["label"]
    confidence = round(result["score"] * 100, 2)

    return jsonify({"sentiment": sentiment, "confidence": confidence})

if __name__ == '__main__':
    app.run(debug=True)