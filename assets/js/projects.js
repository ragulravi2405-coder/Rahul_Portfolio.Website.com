/* ==========================================================================
   Rahul R Portfolio - Projects Data & Category Filters (Updated from Resume)
   ========================================================================== */

const projectsData = [
  {
    id: 'p1',
    title: 'Learnixo — AI-Powered LMS Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack + AI',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop',
    description: 'Full-stack AI-Powered Learning Management System enabling students to browse, purchase, and access online courses. Integrated Groq AI (Nixo AI Tutor) for instant doubt solving and automated quiz generation, with Razorpay payments, Cloudinary media management, and JWT auth.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Groq AI', 'Razorpay', 'JWT'],
    liveLink: 'https://learnixo-ai-the-learning-paltform-1.onrender.com',
    githubLink: 'https://github.com/ragulravi2405-coder',
    linkedinLink: 'https://linkedin.com'
  },
  {
    id: 'p2',
    title: 'AK Mini AI — AI Chatbot Web App',
    category: 'ai',
    categoryLabel: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    description: 'Intelligent AI-powered chatbot application enabling users to interact in real-time for question answering and productivity tasks. Features RESTful backend services, Groq AI API integration, secure user auth, and responsive React interface.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Groq AI', 'Cloudinary', 'Render'],
    liveLink: 'https://ak-mini-ai.onrender.com',
    githubLink: 'https://github.com/ragulravi2405-coder',
    linkedinLink: 'https://linkedin.com'
  },
  {
    id: 'p3',
    title: 'Doc Mind AI — AI Document Analysis Platform',
    category: 'ai',
    categoryLabel: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800&auto=format&fit=crop',
    description: 'AI-powered document analysis platform that allows users to upload documents (PDF processing) and receive intelligent summaries and context-aware answers using Groq AI and Cloudinary file management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI', 'PDF Processing', 'Vercel'],
    liveLink: 'https://doc-mind-ai-seven.vercel.app/',
    githubLink: 'https://github.com/ragulravi2405-coder',
    linkedinLink: 'https://linkedin.com'
  },
  {
    id: 'p4',
    title: 'MERN E-Commerce Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    description: 'Scalable MERN stack e-commerce web application featuring product catalog filtering, cart state management, checkout flow, and secure user authentication.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    liveLink: 'https://rappid-bazzar-app-3.onrender.com',
    githubLink: 'https://github.com/ragulravi2405-coder',
    linkedinLink: 'https://linkedin.com'
  },
  {
    id: 'p5',
    title: 'Flutter Mobile Task & Expense Manager',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    description: 'Mobile application developed with Flutter & Dart for tracking daily expenses, managing budget targets, and setting academic task deadlines with responsive UI.',
    technologies: ['Flutter', 'Dart', 'Material 3', 'REST API'],
    liveLink: 'https://rahul-task-tracker.netlify.app',
    githubLink: 'https://github.com/ragulravi2405-coder',
    linkedinLink: 'https://linkedin.com'
  },
  {
    id: 'p6',
    title: 'IBM Cognos Business Intelligence Dashboard',
    category: 'web',
    categoryLabel: 'Data & Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    description: 'Interactive analytics and business intelligence reporting dashboard built during IBM SkillsBuild 30-day internship, featuring data visualization and metrics insights.',
    technologies: ['IBM Cognos Analytics', 'Data Visualization', 'Reporting'],
    liveLink: '#',
    githubLink: 'https://github.com/ragulravi2405-coder',
    linkedinLink: 'https://linkedin.com'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!projectsGrid) return;

  const renderProjects = (filterCategory = 'all') => {
    projectsGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filterCategory);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-img">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <span class="project-tag-badge">${project.categoryLabel}</span>
        </div>
        <div class="project-content">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-chip">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.liveLink !== '#' ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="project-link-item"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : `<span class="project-link-item"><i class="fas fa-check-circle"></i> IBM Verified</span>`}
            <a href="${project.githubLink}" target="_blank" class="project-link-item"><i class="fab fa-github"></i> Code</a>
            <a href="${project.linkedinLink}" target="_blank" class="project-link-item"><i class="fab fa-linkedin"></i> Share</a>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  };

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
});
