# Sentiment Analysis Chatbot - "Parrot" 🦜💬

## 📌 Overview
Parrot is a **Sentiment Analysis Chatbot** that classifies user text into **positive, negative, or neutral sentiment** using a pre-trained **DistilBERT** model. The chatbot is built with **Flask (backend)** and a modern **Amazon-style UI (frontend)**, making it ideal for product reviews, customer feedback, and real-time sentiment monitoring.

---
## 🚀 Features
✅ **Real-time Sentiment Analysis** (Positive, Negative, Neutral)  
✅ **Pre-trained NLP Model** (DistilBERT for efficiency)  
✅ **Amazon-Style UI** (Looks like customer reviews and responses)  
✅ **Flask Backend with REST API**  
✅ **Interactive and Responsive Design**  
✅ **Deployable on the Web (AWS, Heroku, Custom Domain, etc.)**  

---
## 📁 Project Structure
```
sentiment-chatbot/
│── app.py              # Backend (Flask API)
│── model/              # Pre-trained sentiment model
│── templates/
│   └── index.html      # Frontend UI (Amazon-style)
│── static/
│   ├── style.css       # CSS for styling
│   ├── script.js       # JavaScript for interaction
│── requirements.txt    # List of dependencies
│── README.md           # Project documentation
│── .gitignore          # Ignore unnecessary files
```

---
## 🛠 Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/sentiment-chatbot.git
cd sentiment-chatbot
```

### **2️⃣ Install Dependencies**
```bash
pip install -r requirements.txt
```

### **3️⃣ Run the Flask App**
```bash
python app.py
```
You should see output like:
```
 * Running on http://127.0.0.1:5000/
```

### **4️⃣ Open the Web Interface**
- Open **`http://127.0.0.1:5000/`** in a browser.
- Type a message (e.g., *"I love this product!"*).
- Click "Analyze" and see the chatbot's response!

---
## 🎨 UI Preview (Amazon-Style)
The chatbot interface is designed like **Amazon product reviews**, where user input looks like a review, and the chatbot replies like a seller.

Example:
💬 *"The product is amazing, I love it!"*  
🤖 *"Sentiment: Positive 😊"*

---
## 🤖 How It Works
1. **User enters a message** (e.g., "This product is bad.")
2. **Message is sent to Flask API** (`/analyze` endpoint)
3. **DistilBERT NLP model processes the sentiment**
4. **Bot returns a response** (`Positive`, `Negative`, or `Neutral`)
5. **UI updates to display chatbot's reply**

---
## 🏗 Future Enhancements
🔹 Add multilingual support 🌍  
🔹 Improve accuracy with fine-tuned models 🎯  
🔹 Deploy to AWS/GCP for scalability ☁️  
🔹 Store user feedback for model improvement 📊  

---
## 🎯 Deployment Options
You can deploy this chatbot using:
- **Heroku** (`git push heroku main`)
- **AWS EC2 / Lambda** (Using Flask & API Gateway)
- **Custom Domain** (Host on your own website)

---
## 🙌 Credits & Acknowledgments
Developed by **VIKAS THIRUMANYAM** ❤️  
Powered by **Flask, DistilBERT, HTML/CSS/JS**  

---
## 📜 License
This project is **open-source** and licensed under the **MIT License**. Feel free to modify and use it! 🎉

