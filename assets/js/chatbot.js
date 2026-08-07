/* ==========================================================================
   Rahul R Portfolio - Intelligent AI Chatbot Assistant (Resume Updated)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const chatbotHTML = `
    <button class="chatbot-trigger" id="chatbotTrigger" aria-label="Open AI Assistant">
      <i class="fas fa-robot"></i>
      <span class="chatbot-badge-indicator"></span>
    </button>

    <div class="chatbot-window" id="chatbotWindow">
      <div class="chatbot-header">
        <div class="chatbot-bot-info">
          <div class="bot-avatar-icon"><i class="fas fa-microchip"></i></div>
          <div>
            <div class="bot-title">Rahul's AI Assistant</div>
            <div class="bot-status"><span class="bot-status-dot"></span> Online & Ready</div>
          </div>
        </div>
        <button class="chatbot-close-btn" id="chatbotCloseBtn"><i class="fas fa-xmark"></i></button>
      </div>

      <div class="chatbot-messages" id="chatbotMessages">
        <div class="chat-msg bot">
          <div class="msg-bubble">
            👋 Hi there! I'm <strong>Rahul's AI Assistant</strong>. Ask me anything about Rahul R, his <strong>VINS Christian College</strong> degree (Dept 1st Rank), <strong>Azentra Global</strong> & <strong>AK Infopark</strong> internships, AI Projects, or download his <strong>Resume</strong>!
          </div>
          <div class="chat-suggestions">
            <button class="chip-btn" onclick="sendQuickReply('Tell me about Rahul R')">👨‍💻 About Rahul</button>
            <button class="chip-btn" onclick="sendQuickReply('College Details')">🎓 VINS College</button>
            <button class="chip-btn" onclick="sendQuickReply('Azentra Global Internship')">💼 Azentra Internship</button>
            <button class="chip-btn" onclick="sendQuickReply('AK Infopark')">🏢 AK Infopark</button>
            <button class="chip-btn" onclick="sendQuickReply('Projects')">💻 Learnixo & AI Apps</button>
            <button class="chip-btn" onclick="sendQuickReply('Download Resume')">📄 Resume PDF</button>
          </div>
        </div>
      </div>

      <div class="chatbot-input-area">
        <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Type a message..." autocomplete="off" />
        <button class="chatbot-send-btn" id="chatbotSendBtn"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  const trigger = document.getElementById('chatbotTrigger');
  const windowEl = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotCloseBtn');
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSendBtn');
  const messagesContainer = document.getElementById('chatbotMessages');

  trigger.addEventListener('click', () => windowEl.classList.toggle('active'));
  closeBtn.addEventListener('click', () => windowEl.classList.remove('active'));

  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `📄 You can view and download Rahul's official Resume PDF here:<br><br>👉 <a href="assets/docs/Rahul_R_Resume.pdf" download class="btn btn-primary btn-sm" style="margin-top:0.4rem; display:inline-flex; color:#0b0f19;"><i class="fas fa-download"></i> Download Resume PDF</a>`;
    }
    else if (q.includes('rahul') || q.includes('who') || q.includes('about')) {
      return `<strong>Rahul R</strong> is a Junior Full Stack Developer & 3rd-year <strong>B.E. Computer Science & Engineering</strong> student at <strong>VINS Christian College of Engineering</strong>. He secured <strong>Department First Rank</strong> consecutively for 1st, 2nd, and 3rd year with CGPA 8.5/10!`;
    } 
    else if (q.includes('college') || q.includes('vins') || q.includes('study') || q.includes('degree')) {
      return `Rahul is pursuing <strong>B.E. Computer Science & Engineering</strong> at <strong>VINS Christian College of Engineering</strong>, Chunkankadai, Nagercoil (Anna University).<br>🏆 <strong>Achievement:</strong> Department First Rank (1st, 2nd & 3rd Year)!<br>📍 <a href="https://vinsengineeringcollege.org/" target="_blank" style="color:#38bdf8;">vinsengineeringcollege.org</a>`;
    }
    else if (q.includes('azentra') || q.includes('offer')) {
      return `Rahul was selected as a <strong>Full Stack Development Intern</strong> at <strong>Azentra Global</strong> under the Career Excellence Program with a monthly stipend of ₹2,000! You can see his official offer letter handover ceremony photo on the <a href="experience.html" style="color:#38bdf8;">Experience Page</a>.`;
    }
    else if (q.includes('ak infopark') || q.includes('infopark') || q.includes('internship')) {
      return `Rahul is working as a <strong>Full Stack & Flutter Developer Intern</strong> at <strong>AK Infopark Pvt. Ltd.</strong>, Nagercoil, building production-ready MERN & Flutter web/mobile apps. He also completed 30-day remote internship at IBM SkillsBuild through an IBM Hackathon!`;
    }
    else if (q.includes('project') || q.includes('learnixo') || q.includes('mini ai') || q.includes('doc mind')) {
      return `Rahul has built flagship AI applications:<br>1. <strong>Learnixo LMS</strong>: AI-Powered Learning Management System (Groq AI, Razorpay, MERN)<br>2. <strong>AK Mini AI</strong>: AI Chatbot App<br>3. <strong>Doc Mind AI</strong>: Document Analysis Platform<br><br>Check out all projects with live links on the <a href="projects.html" style="color:#38bdf8;">Projects Page</a>!`;
    }
    else if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('reach')) {
      return `Contact Rahul R:<br>📧 Email: <a href="mailto:rahul.r.devop@gmail.com" style="color:#38bdf8;">rahul.r.devop@gmail.com</a><br>📞 Phone: <a href="tel:+919514701296" style="color:#38bdf8;">+91 9514701296</a><br>💬 WhatsApp: Available<br>🌐 GitHub & LinkedIn links on the <a href="contact.html" style="color:#38bdf8;">Contact Page</a>!`;
    }
    else {
      return `Thanks for asking! Rahul is skilled in MERN Stack, Flutter, Groq AI, studying CSE at VINS College (Dept 1st Rank), interning at AK Infopark & Azentra Global. Would you like to <a href="assets/docs/Rahul_R_Resume.pdf" download style="color:#38bdf8;">Download his Resume</a> or check his <a href="projects.html" style="color:#38bdf8;">Projects</a>?`;
    }
  };

  const addMessage = (text, sender) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const handleSend = () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    input.value = '';

    setTimeout(() => {
      const response = getBotResponse(text);
      addMessage(response, 'bot');
    }, 400);
  };

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  window.sendQuickReply = (text) => {
    addMessage(text, 'user');
    setTimeout(() => {
      const response = getBotResponse(text);
      addMessage(response, 'bot');
    }, 350);
  };
});
