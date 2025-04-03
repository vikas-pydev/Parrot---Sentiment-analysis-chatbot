from transformers import pipeline  

# Load the DistilBERT sentiment analysis model
sentiment_pipeline = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

# Test it on a sentence
result = sentiment_pipeline("I love this chatbot! 😃")
print(result)  

while True:
    user_text = input("Type something: ")  # User enters a message
    result = sentiment_pipeline(user_text)  # AI predicts the sentiment
    print(f"Sentiment: {result[0]['label']} (Confidence: {result[0]['score']:.2f})\n")
