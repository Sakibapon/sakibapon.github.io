// Theme Management
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    // Exact match with original logic: Light = sun, Dark = moon
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
};

// Default to dark theme as requested
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
};

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  initTheme();

  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const themeToggle = document.querySelector('.theme-toggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Set active nav link
  let currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'page') currentPage = 'index.html'; // Handle subpath roots

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === '/')) {
      link.classList.add('active');
    }
  });

  renderPublications();
  renderProjects();
});

// Publications Data
const publications = [
  {
    title: "Explainable Indoor Localization of BLE Devices through RSSI using Recursive Continuous Wavelet Transformation and XGBoost Classifier",
    category: "Journal Articles",
    authors: "A.H.M.Kamal, Md. Golam Rabiul, Md Rafiul Hassan, Tasnim Sakib Apon, Mohammad Mehedi Hassan",
    venue: "Future Generation Computer Systems (Q1, IF: 7.307)",
    date: "2022-11",
    excerpt: "This paper presents an explainable AI approach for indoor localization using BLE devices with RSSI measurements.",
    paperUrl: "https://doi.org/10.1016/j.future.2022.11.001",
    codeUrl: "https://github.com/Sakibapon/IndoorLocalaization",
    datasetUrl: "https://www.kaggle.com/datasets/sakibapon/bledataset"
  },
  {
    title: "Interpretable Differential Diagnosis of Viral Pneumonia, Lung Opacity and Covid-19 using Tuned Transfer Learning and Explainable AI",
    category: "Journal Articles",
    authors: "Md Nazmul Islam, Md. Golam Rabiul Alam, Tasnim Sakib Apon, Abdul Kader Muhammad Masum, Md Zia Uddin",
    venue: "Healthcare (Q2, IF: 3.160)",
    date: "2023-02",
    excerpt: "This paper presents an interpretable approach for differential diagnosis of COVID-19, viral pneumonia, and lung opacity.",
    paperUrl: "https://www.mdpi.com/2227-9032/11/3/410",
    codeUrl: "https://github.com/Sakibapon/Interpretable-Differential-Diagnosis-of-Viral-Pneumonia-Lung-Opacity-and-COVID-19"
  },
  {
    title: "Increasing Embedding Capacity by Exploiting Edge Pixels in Prediction Error Space",
    category: "Journal Articles",
    authors: "Habiba Sultana, A. H. M. Kamal, Tasnim Sakib Apon, Md. Golam Rabiul",
    venue: "Cyber Security and Applications",
    date: "2023-03",
    excerpt: "This paper presents a novel steganography technique that increases embedding capacity by exploiting edge pixels.",
    paperUrl: "https://www.sciencedirect.com/science/article/pii/S2772918423000164"
  },
  {
    title: "Machine Learning based Stream Selection of Secondary School Students in Bangladesh",
    category: "Journal Articles",
    authors: "Shabbir Ahmad, Md. Golam Rabiul Alam, Jia Uddin, Md Roman Bhuiyan, Tasnim Sakib Apon",
    venue: "Indonesian Journal of Electrical Engineering and Informatics (IJEEI)",
    date: "2023-01",
    excerpt: "This paper develops a machine learning-based system for educational stream recommendation.",
    paperUrl: "http://section.iaesonline.com/index.php/IJEEI/article/view/4302"
  },
  {
    title: "Transforming Precision: A Comparative Analysis of Vision Transformers, CNNs, and Traditional ML for Knee Osteoarthritis Severity Diagnosis",
    category: "Conference Papers",
    authors: "Tasnim Sakib Apon, Md. Fahim-Ul-Islam, Nafiz Imtiaz Rafin, Joya Akter, Md. Golam Rabiul Alam",
    venue: "2024 6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)",
    date: "2024-05",
    excerpt: "This paper presents a comparative study of vision transformers, CNNs, and traditional ML methods.",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10534528"
  },
  {
    title: "Explainable AI based Glaucoma Detection using Transfer Learning and LIME",
    category: "Conference Papers",
    authors: "Touhidul Islam Chayan, Anita Islam, Eftykhar Rahman, Md. Tanzim Reza, Tasnim Sakib Apon, Md. Golam Rabiul Alam",
    venue: "9th IEEE Asia Pacific Conference on Computer Science and Data Engineering",
    date: "2022-12",
    excerpt: "This paper develops a transfer learning-based glaucoma detection system with LIME explanations.",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10089310",
    datasetUrl: "https://www.kaggle.com/datasets/sshikamaru/glaucoma-detection"
  },
  {
    title: "BanglaSarc: A Dataset for Sarcasm Detection",
    category: "Conference Papers",
    authors: "Tasnim Sakib Apon, Ramisa Anan, Elizabeth Antora Modhu, Arjun Suter, Ifrit Jamal Sneha, Md. Golam Rabiul Alam",
    venue: "9th IEEE Asia Pacific Conference on Computer Science and Data Engineering",
    date: "2022-12",
    excerpt: "This paper introduces BanglaSarc, a novel dataset for sarcasm detection in the Bangla language.",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10089322",
    codeUrl: "https://github.com/Sakibapon/SarcasmDetection",
    datasetUrl: "https://www.kaggle.com/datasets/sakibapon/banglasarc"
  },
  {
    title: "Interpretable Bangla Sarcasm Detection using BERT and Explainable AI",
    category: "Conference Papers",
    authors: "Ramisa Anan, Tasnim Sakib Apon, Elizabeth Antora Modhu, Jeba Tahsin, Sudipta Mondal, MD. Golam Rabiul Alam",
    venue: "13th IEEE CCWC 2022",
    date: "2022-01",
    excerpt: "This paper develops an interpretable BERT-based system for Bangla sarcasm detection.",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10099331",
    codeUrl: "https://github.com/Sakibapon/SarcasmDetection",
    datasetUrl: "https://www.kaggle.com/datasets/sakibapon/banglasarc"
  },
  {
    title: "Demystifying Deep Learning Models for Retinal OCT Disease Classification using Explainable AI",
    category: "Conference Papers",
    authors: "Tasnim Sakib Apon, Mohammad Mahmudul Hasan, Abrar Islam, Md. Golam Rabiul Alam",
    venue: "8th IEEE Asia Pacific Conference on Computer Science and Data Engineering",
    date: "2021-12",
    excerpt: "This paper proposes an efficient CNN model for retinal OCT disease classification with explainable AI.",
    paperUrl: "https://ieeexplore.ieee.org/document/9718400",
    codeUrl: "https://github.com/Sakibapon/RetinalOCT",
    datasetUrl: "https://www.kaggle.com/datasets/paultimothymooney/kermany2018"
  },
  {
    title: "Real Time Action Recognition from Video Footage",
    category: "Conference Papers",
    authors: "Tasnim Sakib Apon, Mushfiqul Islam Chowdhury, Md Zubair Reza, Arpita Datta, Syeda Tanjina Hasan, Md. Golam Rabiul Alam",
    venue: "3rd International Conference on Sustainable Technologies for Industry 4.0",
    date: "2021-12",
    excerpt: "This paper presents a real-time action recognition system capable of detecting physical bullying from video footage.",
    paperUrl: "https://ieeexplore.ieee.org/document/9732601",
    codeUrl: "https://github.com/Sakibapon/Real-Time-Action-Recognition-from-Video-Footage",
    datasetUrl: "https://drive.google.com/drive/u/2/folders/1BTUFlf-5CBbTuCmE6mEv3CBD1TjGEhkU"
  },
  {
    title: "CS: GO Action Recognition and Data Collection Automation Using Transfer Learning and Majority Voting",
    category: "Conference Papers",
    authors: "Tasnim Sakib Apon, Abrar Islam, Md. Golam Rabiul Alam",
    venue: "13th International Conference on Information & Communication Technology and System",
    date: "2021-10",
    excerpt: "This paper presents a video game action recognition system with automated data collection.",
    paperUrl: "https://ieeexplore.ieee.org/document/9608407",
    codeUrl: "https://github.com/Sakibapon/CSGO-Video-Analysis"
  }
];

// Projects Data
const projects = [
  {
    title: "HD-AI Monitor: Agentic AI for Home Hemodialysis",
    excerpt: "Multi-agent AI system with LLM-powered clinical decision support for home hemodialysis monitoring.",
    image: "images/Hemodialysis.jpg",
    description: "Designing a comprehensive multi-agent AI system that monitors 30+ critical hemodialysis parameters in real-time. The system combines deterministic threshold detection with 8 LLM agents and 3 deep learning models to provide autonomous clinical decision support. Features include RAG pipeline using FAISS and sentence-transformers, severity-based alert escalation, SBAR-formatted clinician reports, and real-time patient alerts. Built with Streamlit, Qwen/TinyLlama models, and grounded in KDOQI clinical practice guidelines.",
    technologies: ["Multi-Agent Systems", "RAG", "LLM", "FAISS", "Clinical AI", "Qwen", "TinyLlama", "Streamlit"],
    githubUrl: "#",
    paperUrl: ""
  },
  {
    title: "SAM-Enhanced Zebrafish Segmentation System",
    excerpt: "Multi-architecture deep learning pipeline for zebrafish embryo microscopy analysis.",
    image: "images/zebrafish.png",
    description: "Architected a comprehensive segmentation pipeline integrating Segment Anything Model (SAM), Attention U-Net, ResNet50, and Mask R-CNN for precise zebrafish embryo analysis in microscopy images. Implemented SAM (ViT-B) fine-tuning with automated prompt generation from ground truth masks, achieving improved segmentation accuracy. Established rigorous evaluation framework using Dice coefficient, Hausdorff distance, and pixel accuracy metrics. The system processes large-scale microscopy datasets with real-time inference capabilities and comprehensive training monitoring via progress tracking and metric visualization.",
    technologies: ["SAM", "PyTorch", "Attention U-Net", "ResNet50", "Mask R-CNN", "Computer Vision", "Medical Imaging"],
    githubUrl: "#",
    paperUrl: ""
  },
  {
    title: "Interpretable 3D CNN for Phase-Field Regression",
    excerpt: "Deep learning framework for predicting material properties from microstructure simulations.",
    image: "images/materials.png",
    description: "Developed a 3D convolutional neural network to predict mechanical properties from phase-field microstructure simulations in materials science. The model processes 3D volumetric data (phase-field images) to predict 12-dimensional material property vectors including elastic moduli and Poisson's ratios. Implements a multi-layer 3D CNN architecture with three convolutional blocks followed by fully connected layers, achieving high prediction accuracy on 1600+ material samples. Features separate normalization for different property types (elastic vs. Poisson parameters) and comprehensive training pipeline with validation and test set evaluation.",
    technologies: ["3D CNN", "PyTorch", "Materials Science", "Phase-Field", "Regression", "Deep Learning"],
    githubUrl: "#",
    paperUrl: ""
  },
  {
    title: "Real-Time Action Recognition from Video Footage",
    excerpt: "Deep learning system for detecting physical bullying in real-time.",
    image: "images/action.JPG",
    description: "Developed a real-time action recognition system capable of detecting physical bullying from video footage using deep neural networks.",
    technologies: ["TensorFlow", "OpenCV", "Deep Learning"],
    githubUrl: "https://github.com/Sakibapon/Real-Time-Action-Recognition-from-Video-Footage",
    paperUrl: "https://ieeexplore.ieee.org/document/9732601"
  },
  {
    title: "CS:GO Action Recognition & Data Automation",
    excerpt: "Transfer learning system for video game action recognition.",
    image: "images/csgo_project.PNG",
    description: "Automated system for CS:GO action recognition using transfer learning and majority voting.",
    technologies: ["Transfer Learning", "Python", "API"],
    githubUrl: "https://github.com/Sakibapon/CSGO-Video-Analysis",
    paperUrl: "https://ieeexplore.ieee.org/document/9608407"
  },
  {
    title: "Retinal OCT Disease Classification",
    excerpt: "Efficient CNN model with LIME and Grad-CAM interpretability.",
    image: "images/retinaOCT.PNG",
    description: "Efficient CNN model for retinal disease classification with explainable AI capabilities.",
    technologies: ["CNN", "Explainable AI", "LIME"],
    githubUrl: "https://github.com/Sakibapon/RetinalOCT",
    paperUrl: "https://ieeexplore.ieee.org/document/9718400"
  },
  {
    title: "YOLO V4 Custom Object Detection",
    excerpt: "Advanced object detection system with tracking and OCR.",
    image: "images/yolo_project.PNG",
    description: "Implements YOLO V4 for custom object detection with tracking, counting, and OCR capabilities.",
    technologies: ["YOLO V4", "Darknet", "TensorFlow"],
    githubUrl: "#"
  },
  {
    title: "Self-Driving Car Simulation",
    excerpt: "Autonomous vehicle simulation using CNN and image processing.",
    image: "images/selfdriving.PNG",
    description: "Autonomous vehicle simulation using CNN and image processing in Udacity simulator.",
    technologies: ["CNN", "Computer Vision", "Python"],
    githubUrl: "https://github.com/CSE474/SelfDriving_Implementation"
  },
  {
    title: "Geonosis Study Abroad App",
    excerpt: "Full-stack application for study abroad consultation.",
    image: "images/Genosis.PNG",
    description: "Full-stack web application for university management and study abroad consultation.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/Sakibapon/GeonosisStudyAbroad.github.io"
  },
  {
    title: "Advanced Car Parts Web App",
    excerpt: "Service management application with admin panel.",
    image: "images/car.PNG",
    description: "Web application for car parts and services with user requests and admin management.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/Sakibapon/GeonosisStudyAbroad.github.io"
  },
  {
    title: "House Pricing Prediction",
    excerpt: "Machine learning system for house price prediction.",
    image: "images/house.JPG",
    description: "Uses various ML algorithms to predict house prices based on 80+ features.",
    technologies: ["Scikit-learn", "Pandas", "Random Forest"],
    githubUrl: "#"
  }
];

// Function to render publications
function renderPublications() {
  const container = document.getElementById('publications-container');
  if (!container) return;

  // Group by category
  const categories = ["Journal Articles", "Conference Papers"];
  const grouped = {};
  categories.forEach(cat => grouped[cat] = []);

  publications.forEach(pub => {
    if (grouped[pub.category]) {
      grouped[pub.category].push(pub);
    }
  });

  // Sort each category by date (newest first)
  Object.keys(grouped).forEach(category => {
    grouped[category].sort((a, b) => b.date.localeCompare(a.date));
  });

  // Render
  let html = '';
  categories.forEach(category => {
    if (grouped[category].length > 0) {
      html += `<h2 class="archive__subtitle">${category}</h2><div class="list__wrapper">`;
      grouped[category].forEach(pub => {
        html += `
          <div class="archive__item">
            <h3 class="archive__item-title">
              <a href="${pub.paperUrl || '#'}" target="_blank">${pub.title}</a>
            </h3>
            <div class="archive__item-content">
              <div class="archive__item-body">
                <div class="authors">${pub.authors || ''}</div>
                <div class="venue">${pub.venue}</div>
                <p class="archive__item-excerpt">${pub.excerpt}</p>
                <div class="links">
                  ${pub.paperUrl ? `<a href="${pub.paperUrl}" target="_blank"><i class="fas fa-fw fa-file-pdf icon-pad-right"></i> Paper</a>` : ''}
                  ${pub.codeUrl ? `<a href="${pub.codeUrl}" target="_blank"><i class="fab fa-fw fa-github icon-pad-right"></i> Code</a>` : ''}
                  ${pub.datasetUrl ? `<a href="${pub.datasetUrl}" target="_blank"><i class="fas fa-fw fa-database icon-pad-right"></i> Dataset</a>` : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }
  });

  container.innerHTML = html;
}

// Function to render projects
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  let html = '<div class="list__wrapper">';
  projects.forEach(project => {
    html += `
      <div class="archive__item">
        <h3 class="archive__item-title">
            <a href="${project.githubUrl || '#'}" target="_blank">${project.title}</a>
        </h3>
        <div class="archive__item-content">
            ${project.image ? `
            <div class="archive__item-teaser">
                <img src="${project.image}" alt="${project.title}">
            </div>` : ''}
            <div class="archive__item-body">
                <p class="archive__item-excerpt">${project.description}</p>
                <div class="tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="links">
                  ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank"><i class="fab fa-fw fa-github icon-pad-right"></i> Code</a>` : ''}
                  ${project.paperUrl ? `<a href="${project.paperUrl}" target="_blank"><i class="fas fa-fw fa-file-pdf icon-pad-right"></i> Paper</a>` : ''}
                </div>
            </div>
        </div>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}
