import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Download, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailCopy from './EmailCopy';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState(new Set<string>());

  useEffect(() => {
  const sections = ['about', 'skills', 'projects', 'experience', 'leadership', 'profiles', 'contact'];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setRevealedSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px',
    }
  );

  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) observer.observe(element);
  });

  return () => {
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.unobserve(element);
    });
  };
}, []);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="bg-[#1C1C1C] text-[#E5E5E5] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xl font-bold text-[#B48A3A] hover:text-[#D4AA4A] transition-colors duration-300 focus:outline-none"
              >
                {'</>'}
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm text-[#E5E5E5] nav-item ${
                      activeSection === item.id
                        ? 'text-[#B48A3A] bg-[#B48A3A]/20 active'
                        : 'hover:text-[#B48A3A] hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/vuppalavarshith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Linkedin size={20} className="text-[#B48A3A]" />
                </a>
                <a
                  href="https://github.com/varshithvuppala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Github size={20} className="text-[#B48A3A]" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-[#B48A3A]/20 transition-all duration-300 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} className="text-[#E5E5E5]" /> : <Menu size={24} className="text-[#E5E5E5]" />}
              </button>
            </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm text-[#E5E5E5] ${
                      activeSection === item.id
                        ? 'text-[#B48A3A] bg-[#B48A3A]/20'
                        : 'hover:text-[#B48A3A] hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex justify-center space-x-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/vuppalavarshith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Linkedin size={20} className="text-[#B48A3A]" />
                  </a>
                  <a
                    href="https://github.com/varshithvuppala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Github size={20} className="text-[#B48A3A]" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#B48A3A] to-[#D4AA4A] bg-clip-text text-transparent">
            Vuppala Varshith
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E5E5E5] mb-8 font-medium">
            Java Full Stack Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#E5E5E5] mb-12 max-w-3xl mx-auto leading-relaxed">
            Java Full Stack Developer focused on building secure, scalable backend systems with Spring Boot and intuitive React interfaces. Experienced in designing REST APIs, implementing role-based authentication, and developing end-to-end applications used in real-world workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-[#E5E5E5] rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-xl border border-white/20"
            >
              View Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1s8UrRl7Wt60Sr5WEXuyGWOcr-kiezQYP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-[#E5E5E5] hover:bg-white/20 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-xl"
            >
              <Download size={20} className="text-[#B48A3A]" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            
            <a
              href="https://www.linkedin.com/in/vuppalavarshith/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-xl border border-white/20"
            >
              <Linkedin size={24} className="text-[#B48A3A]" />
            </a>
            <a
              href="https://github.com/varshithvuppala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-xl border border-white/20"
            >
              <Github size={24} className="text-[#B48A3A]" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 section-reveal ${revealedSections.has('about') ? 'revealed' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#B48A3A]">About Me</h2>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12">
            <p className="text-lg leading-relaxed text-[#E5E5E5]">
            I build for tomorrow with the proven tools of today. My expertise lies in creating future-proof web solutions using the powerful combination of Java/Spring Boot for the backend and React for the frontend. My degree in Artificial Intelligence and Machine Learning informs my work, pushing me to build not just functional applications, but intelligent systems ready for what's next</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 section-reveal ${revealedSections.has('skills') ? 'revealed' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#B48A3A]">My Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Frontend',
                skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap']
              },
              {
                title: 'Backend',
                skills: ['Java', 'Spring Boot', 'Microservices', 'Hibernate', 'RESTful APIs']
              },
              {
                title: 'Databases',
                skills: ['MySQL', 'MongoDB', 'PostgreSQL']
              },
              {
                title: 'DevOps & Tools',
                skills: ['Git', 'Docker', 'AWS (Basics)', 'Maven', 'Postman']
              }
            ].map((category, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 card-hover`}>
                <h3 className="text-xl font-bold mb-4 text-[#B48A3A]">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-[#E5E5E5] flex items-center">
                      <span className="w-2 h-2 bg-[#B48A3A] rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}

      

      <section
        id="projects"
        className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 section-reveal ${
          revealedSections.has('projects') || window.innerWidth < 768
            ? 'revealed'
            : ''
        }`}
      >

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#B48A3A]">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">GraphGuard – Explainable AML Risk Analysis System</h3>
              <p className="text-[#E5E5E5] mb-6 leading-relaxed">
                A graph-based Anti-Money Laundering (AML) risk analysis system that prioritizes suspicious bank accounts by modeling financial transactions as a graph and applying explainable Graph Neural Networks, with an interactive Streamlit dashboard for analyst-driven investigation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'PyTorch Geometric', 'Graph Neural Networks', 'Streamlit'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#B48A3A]/20 text-[#B48A3A] rounded-full text-sm backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
  <Link
    to="/case-study/graphguard"
    className="inline-flex items-center gap-2 px-4 py-2 bg-[#B48A3A]/20 text-[#B48A3A] rounded-lg hover:bg-[#B48A3A]/30 transition-all duration-300"
  >
    View Case Study →
  </Link>

  <a
    href="https://github.com/VUPPALAVARSHITH/GraphGuard-AML"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-[#B48A3A] hover:text-[#D4AA4A] transition-colors duration-300"
  >
    <Github size={20} />
    GitHub
    <ExternalLink size={16} />
  </a>
</div>

            </div>



            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">InsurAI – Enterprise Insurance Claim Management System</h3>
              <p className="text-[#E5E5E5] mb-6 leading-relaxed">
                A full-stack enterprise insurance claim management system built with React and Spring Boot, featuring JWT-based authentication, role-based dashboards, automated claim workflows, fraud detection hooks, and audit logging.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Spring Boot', 'Spring Security', 'JWT Authentication', 'REST APIs', 'JPA / Hibernate'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#B48A3A]/20 text-[#B48A3A] rounded-full text-sm backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
  <Link
    to="/case-study/insurai"
    className="inline-flex items-center gap-2 px-4 py-2 bg-[#B48A3A]/20 text-[#B48A3A] rounded-lg hover:bg-[#B48A3A]/30 transition-all duration-300"
  >
    View Case Study →
  </Link>

  <a
    href="https://github.com/VUPPALAVARSHITH/InsurAI"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-[#B48A3A] hover:text-[#D4AA4A] transition-colors duration-300"
  >
    <Github size={20} />
    GitHub
    <ExternalLink size={16} />
  </a>
</div>

            </div>



            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">Employee Management System</h3>
              <p className="text-[#E5E5E5] mb-6 leading-relaxed">
                A full-stack application featuring a dynamic React frontend and a robust Spring Boot backend.
                Implemented REST APIs and CRUD operations to manage employee records, reducing manual HR tasks by 70%.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Spring Boot', 'REST APIs', 'JDBC', 'MySQL'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#B48A3A]/20 text-[#B48A3A] rounded-full text-sm backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/varshithvuppala/employee-management"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B48A3A] hover:text-[#D4AA4A] transition-colors duration-300"
              >
                <Github size={20} className="text-[#B48A3A]" />
                View on GitHub
                <ExternalLink size={16} className="text-[#B48A3A]" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">ICU Readmission Prediction System</h3>
              <p className="text-[#E5E5E5] mb-6 leading-relaxed">
                A predictive machine learning system with 85% accuracy in identifying ICU readmission risks,
                featuring an interactive Streamlit dashboard for real-time predictions by clinicians.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Machine Learning', 'CatBoost', 'Streamlit'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#B48A3A]/20 text-[#B48A3A] rounded-full text-sm backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/varshithvuppala/icu-prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B48A3A] hover:text-[#D4AA4A] transition-colors duration-300"
              >
                <Github size={20} className="text-[#B48A3A]" />
                View on GitHub
                <ExternalLink size={16} className="text-[#B48A3A]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#B48A3A]">Professional Experience</h2>
            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#B48A3A]/30"></div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 relative sm:ml-16 mb-8">
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden sm:block absolute -left-10 top-8 w-4 h-4 bg-[#B48A3A] rounded-full border-4 border-[#1C1C1C]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#B48A3A] mb-2">Intern – Java Full Stack</h3>
                <h4 className="text-lg sm:text-xl text-[#E5E5E5] mb-2">Infosys Springboard</h4>
                <p className="text-sm sm:text-base text-[#B48A3A] mb-4">Nov 2025 – Present</p>
                <p className="text-[#E5E5E5] leading-relaxed text-sm sm:text-base">
                  Developing a full-stack enterprise insurance application "InsurAI: Corporate Policy Automation & Intelligence System" using Java Spring Boot, React, and MySQL. Implemented role-based authentication, automated claim processing workflows, and secure REST APIs to digitize policy management, improve transparency, and reduce claim processing time significantly.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 relative sm:ml-16">
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden sm:block absolute -left-10 top-8 w-4 h-4 bg-[#B48A3A] rounded-full border-4 border-[#1C1C1C]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#B48A3A] mb-2">Summer Intern</h3>
                <h4 className="text-lg sm:text-xl text-[#E5E5E5] mb-2">Swecha</h4>
                <p className="text-sm sm:text-base text-[#B48A3A] mb-4">May 2024 - June 2024</p>
                <p className="text-[#E5E5E5] leading-relaxed text-sm sm:text-base">
                  Systematized the annotation pipeline for Telugu audio data, which improved ASR model accuracy by 20%.
                  Contributed to LLM-based voice avatar development, focusing on data preprocessing and feature extraction.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className={`py-20 px-4 sm:px-6 lg:px-8 section-reveal ${revealedSections.has('leadership') ? 'revealed' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#B48A3A]">Leadership & Activities</h2>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#B48A3A] mb-2">Finance and Documentation Head, Content Writer | E-Cell BVRIT</h3>
              <ul className="text-[#E5E5E5] leading-relaxed text-sm sm:text-base space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#B48A3A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Managed the club's budget and maintained detailed financial records, ensuring operational transparency.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#B48A3A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Authored and organized official documentation and content, improving the club's communication strategy.
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#B48A3A] mb-2">Organizing Committee | BVRIT Model United Nations</h3>
              <ul className="text-[#E5E5E5] leading-relaxed text-sm sm:text-base space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#B48A3A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Collaborated with a large team to plan and execute the 7th edition of the BVRIT MUN.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#B48A3A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Managed key logistical areas to ensure a smooth and successful event for all participants.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section id="profiles" className={`py-20 px-4 sm:px-6 lg:px-8 section-reveal ${revealedSections.has('profiles') ? 'revealed' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#B48A3A]">Coding Profiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://leetcode.com/u/VUPPALA_VARSHITH/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center card-hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">LeetCode</h3>
              <p className="text-[#E5E5E5] mb-4">Problem-solving and coding challenges</p>
              <ExternalLink size={24} className="mx-auto text-[#B48A3A]" />
            </a>
            <a
              href="https://smartinterviews.in/profile/vuppala_varshith"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center card-hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">SmartInterviews</h3>
              <p className="text-[#E5E5E5] mb-4">Interview preparation platform</p>
              <ExternalLink size={24} className="mx-auto text-[#B48A3A]" />
            </a>
            <a
              href="https://www.codechef.com/users/varshith28"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center card-hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">CodeChef</h3>
              <p className="text-[#E5E5E5] mb-4">Competitive programming platform</p>
              <ExternalLink size={24} className="mx-auto text-[#B48A3A]" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/23211a66j6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center card-hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#B48A3A]">HackerRank</h3>
              <p className="text-[#E5E5E5] mb-4">Coding interviews and challenges</p>
              <ExternalLink size={24} className="mx-auto text-[#B48A3A]" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 section-reveal ${revealedSections.has('contact') ? 'revealed' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#B48A3A]">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-[#E5E5E5] mb-12">
            I am always open to discussing new projects and opportunities. Feel free to contact me.
          </p>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12">
            <EmailCopy />
          </div>


          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/vuppalavarshith/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-xl border border-white/20"
            >
              <Linkedin size={32} className="text-[#B48A3A]" />
            </a>
            <a
              href="https://github.com/varshithvuppala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-xl border border-white/20"
            >
              <Github size={32} className="text-[#B48A3A]" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E5E5E5]">
            Designed and Developed by Vuppala Varshith
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;