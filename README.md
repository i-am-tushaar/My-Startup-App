<div align="center">

# 🎯 **Lakshya AI**
### *From Aspirants to Achievers*

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF.svg?logo=vite)
![AI Powered](https://img.shields.io/badge/AI-Powered-FF6B6B.svg)

<p align="center">
  <img src="https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Lakshya+AI+Dashboard" alt="Lakshya AI Dashboard" width="80%">
</p>

*An AI-powered UPSC mentor that transforms aspirants into achievers through intelligent guidance, predictive analytics, and personalized preparation strategies.*

[🚀 Live Demo](https://lakshya-ai.vercel.app) • [📖 Documentation](https://docs.lakshya-ai.com) • [🐛 Report Bug](https://github.com/your-username/lakshya-ai/issues) • [💡 Request Feature](https://github.com/your-username/lakshya-ai/issues)

</div>

---

## 🌟 **Overview**

**Lakshya AI** is a revolutionary AI-powered UPSC preparation platform that serves as your personal mentor throughout your civil services journey. Built with cutting-edge artificial intelligence and machine learning technologies, Lakshya AI analyzes 15 years of UPSC exam patterns (2011-2025) to provide:

- 🎯 **Predictive Analytics** for upcoming exam trends
- 📊 **Personalized Study Plans** based on your strengths and weaknesses
- 🤖 **AI Tutor** for instant doubt resolution
- 📈 **Smart Progress Tracking** with detailed analytics
- 🔮 **Probability-based Guidance** for strategic preparation

Whether you're a first-time aspirant or a seasoned candidate, Lakshya AI adapts to your learning style and guides you towards success.

---

## ✨ **Key Features**

### 🤖 **AI-Powered Mentor**
- Instant doubt clearing with contextual explanations
- Personalized study recommendations
- Adaptive learning path suggestions
- 24/7 availability for guidance

### 🔮 **UPSC Predictor AI** *(NEW)*
- **Subject-wise Weightage Analysis**: Predict which subjects will have higher weightage
- **Question Pattern Recognition**: Identify trending question types and formats
- **Difficulty Level Forecasting**: Anticipate the complexity of upcoming exams
- **Probability-based Insights**: Get confidence percentages for each prediction
- **Strategic Guidance**: Receive actionable recommendations for optimal preparation

### 📚 **Comprehensive Study Materials**
- Complete UPSC syllabus coverage (GS 1-4, CSAT, Optional)
- Topic-wise organized content
- Current affairs integration
- Previous year questions analysis

### 📊 **Smart Analytics & Tracking**
- Real-time progress monitoring
- Performance analytics with detailed insights
- Study streak tracking
- Goal setting and achievement tracking

### 📝 **Interactive Practice Tools**
- AI-generated mock tests
- Answer writing practice with evaluation
- Sectional tests for focused preparation
- Time management training

---

## 🛠️ **Tech Stack**

### **Frontend**
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Recharts** - Interactive data visualization

### **Backend & AI**
- **Node.js/Express** - Server framework
- **Python/FastAPI** - AI model serving
- **LangChain/LangGraph** - AI orchestration
- **Llama 3.2 via Ollama** - Language model
- **mxbai-embed-large** - Text embeddings

### **Database & Storage**
- **PostgreSQL** - Primary database
- **ChromaDB** - Vector database for embeddings
- **Redis** - Caching and session management

### **Automation & Deployment**
- **n8n** - Workflow automation
- **Docker** - Containerization
- **Vercel/Netlify** - Frontend deployment
- **Railway/Heroku** - Backend deployment

---

## 🚀 **Installation & Setup**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lakshya-ai.git
   cd lakshya-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   VITE_OPENAI_API_KEY=your_openai_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

### **Backend Setup** (Optional for full functionality)

1. **Set up Python environment**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. **Start the AI backend**
   ```bash
   python main.py
   ```

---

## 📖 **Usage**

### **Getting Started**

1. **Dashboard Overview**: Access your personalized dashboard with quick stats and recommendations
2. **Start Learning**: Choose from syllabus topics, current affairs, or AI tutor
3. **Take Tests**: Practice with mock tests and track your performance
4. **Analyze Progress**: Review detailed analytics and adjust your strategy

### **UPSC Predictor AI Usage**

```bash
# Example interaction flow:
1. Navigate to "UPSC Predictor AI" from sidebar
2. Click "Start Prediction" button
3. Wait for AI analysis (3 seconds)
4. Explore predictions across 4 tabs:
   - Subject Weightage
   - Question Patterns  
   - Difficulty Analysis
   - 2025 Predictions
```

### **Sample Predictor Outputs**

- **Polity**: 70% chance of increased weightage (▲ 3% from historical average)
- **Economy**: 68% probability of application-based questions
- **Environment**: 75% likelihood of reduced weightage
- **Current Affairs**: 85% integration with static topics

### **AI Tutor Examples**

```
User: "Explain the difference between Article 356 and Article 365"
AI: "Article 356 allows the President to impose President's Rule..."

User: "What are the recent changes in GST structure?"
AI: "Based on the latest data, here are the key GST updates..."
```

---

## 📊 **Data Sources**

### **UPSC Papers Analysis (2011-2025)**
- **Prelims**: 15 years of question papers with detailed analysis
- **Mains**: GS papers 1-4 with trend identification
- **Interview**: Transcripts and commonly asked topics
- **Cut-offs**: Historical data for prediction modeling

### **Continuous Updates**
- Real-time current affairs integration
- Government reports and policy documents
- Supreme Court judgments
- Economic survey and budget analysis

### **Future Data Integration**
- **2026+ Papers**: Automatic integration as papers are released
- **Live News**: PIB, Press Information Bureau integration
- **Video Content**: Rajya Sabha TV, Lok Sabha TV analysis

---

## 🗺️ **Roadmap**

### **Phase 1: Core Features** ✅
- [x] Dashboard and navigation
- [x] UPSC Predictor AI
- [x] Basic AI tutor
- [x] Syllabus coverage

### **Phase 2: Enhanced AI** 🚧
- [ ] Advanced pattern recognition
- [ ] Personalized study plans
- [ ] Voice-based interactions
- [ ] Mobile app development

### **Phase 3: Comprehensive Platform** 🔮
- [ ] **Auto-update System**: Automatic integration of latest UPSC papers
- [ ] **PIB/RS TV Integration**: Real-time current affairs from official sources
- [ ] **Mains Answer Evaluator**: AI-powered answer checking with detailed feedback
- [ ] **Adaptive Mock Tests**: Tests that adjust difficulty based on performance
- [ ] **Community Features**: Discussion forums and peer learning
- [ ] **Offline Mode**: Download content for offline study

### **Phase 4: Advanced Analytics** 📈
- [ ] Predictive performance modeling
- [ ] Weakness identification algorithms
- [ ] Success probability calculator
- [ ] Rank predictor based on performance

---

## 🤝 **Contributing**

We welcome contributions from the community! Here's how you can help:

### **Getting Started**

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   ```bash
   # Implement your feature or fix
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a clear description of changes

### **Contribution Guidelines**

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive in discussions

### **Areas for Contribution**

- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📖 Documentation updates
- 🎨 UI/UX improvements
- 🧪 Test coverage expansion
- 🌐 Internationalization

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Lakshya AI Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 **Credits & Acknowledgments**

### **AI & ML Technologies**
- **[OpenAI](https://openai.com)** - For inspiring AI development
- **[Ollama](https://ollama.ai)** - Local AI model serving
- **[LangChain](https://langchain.com)** - AI application framework
- **[LangGraph](https://langgraph.com)** - AI workflow orchestration

### **Embedding Models**
- **[mxbai-embed-large](https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1)** - Text embedding model
- **[Sentence Transformers](https://www.sbert.net)** - Semantic similarity

### **Data Sources**
- **UPSC** - For providing transparent access to previous year papers
- **Press Information Bureau (PIB)** - Government communications
- **Economic Survey** - Economic data and analysis
- **Supreme Court of India** - Legal precedents and judgments

### **Open Source Libraries**
- **[React](https://reactjs.org)** - UI framework
- **[Tailwind CSS](https://tailwindcss.com)** - Styling framework
- **[shadcn/ui](https://ui.shadcn.com)** - Component library
- **[Recharts](https://recharts.org)** - Data visualization

### **Special Thanks**
- UPSC aspirants community for valuable feedback
- Contributors who helped improve the platform
- Beta testers who provided early insights

---

## 📞 **Contact & Support**

<div align="center">

### **Get in Touch**

[![GitHub](https://img.shields.io/badge/GitHub-181717.svg?logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![Email](https://img.shields.io/badge/Email-EA4335.svg?logo=gmail&logoColor=white)](mailto:contact@lakshya-ai.com)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2.svg?logo=twitter&logoColor=white)](https://twitter.com/lakshya_ai)

**📧 Email**: [contact@lakshya-ai.com](mailto:contact@lakshya-ai.com)

**💬 Community Discord**: [Join our Discord Server](https://discord.gg/lakshya-ai)

**📞 Support**: [Open a Support Ticket](https://github.com/your-username/lakshya-ai/issues/new?template=support.md)

</div>

### **Feedback & Suggestions**

We value your feedback! Please share your thoughts:

- 🌟 **Feature Requests**: [Request new features](https://github.com/your-username/lakshya-ai/issues/new?template=feature_request.md)
- 🐛 **Bug Reports**: [Report bugs](https://github.com/your-username/lakshya-ai/issues/new?template=bug_report.md)
- 💡 **General Feedback**: [Share your experience](https://forms.gle/your-feedback-form)

---

<div align="center">

### **⭐ If you find Lakshya AI helpful, please give it a star!**

**Made with ❤️ for UPSC Aspirants**

*"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill*

**From Aspirants to Achievers - Your Journey Starts Here! 🎯**

</div>
