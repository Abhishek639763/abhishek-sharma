export const personalInfo = {
  name: "Abhishek Sharma",
  title: "Software Engineer | Java Developer",
  summary: "A passionate and detail-oriented Java Developer seeking to apply knowledge of Java, backend development, and database management. Proficient in building reliable and scalable applications using Spring Boot, JDBC, and MySQL. Eager to learn new technologies and contribute to real-world projects.",
  email: "abhishekupadhyay639763@gmail.com",
  phone: "+91 6397631971",
  location: "India",
  github: "https://github.com/Abhishek639763",
  linkedin: "https://linkedin.com/in/abhishek639"
};

export const skillsData = {
  categories: [
    {
      category: "Programming Languages",
      description: "Proficient in high-level programming for building complex backend architectures and modern web interfaces.",
      skills: ["Java", "JavaScript", "Core Java", "HTML", "XML", "CSS"],
      color: "blue"
    },
    {
      category: "Frameworks & Libraries",
      description: "Extensive experience using enterprise-grade frameworks to build scalable and maintainable applications.",
      skills: ["Spring Boot", "Spring MVC", "Spring JDBC", "Hibernate", "Servlets", "JDBC", "JSP"],
      color: "green"
    },
    {
      category: "Databases & Management",
      description: "Strong foundation in data modeling, SQL query optimization, and managing large-scale relational databases.",
      skills: ["SQL", "MySQL", "SQLite", "PostgreSQL", "Query Optimization"],
      color: "orange"
    },
    {
      category: "Tools & Platforms",
      description: "Skilled in using industry-standard development environments for efficient coding and project management.",
      skills: ["Eclipse", "IntelliJ IDEA", "VS Code", "Maven", "Tomcat", "Git", "Postman", "GitHub"],
      color: "purple"
    },
    {
      category: "Cloud & Services",
      description: "Knowledgeable in deploying applications and integrating cloud services for high availability.",
      skills: ["AWS Basics", "Google Cloud", "RESTful Web Services", "Microservices Architecture"],
      color: "cyan"
    },
    {
      category: "Professional Concepts",
      description: "Solid grasp of software development principles for creating robust and efficient code architectures.",
      skills: ["OOPs", "MVC Architecture", "DSA", "API Development", "CRUD", "Exception Handling"],
      color: "red"
    }
  ],
  proficiencies: [
    { skill: "Java Backend Development", level: 92, details: "Experienced in Spring Boot REST APIs and MVC pattern." },
    { skill: "Database Architecture (SQL/MySQL)", level: 88, details: "Expert in schema design and JDBC connectivity." },
    { skill: "API Integration & Development", level: 90, details: "Building high-performance RESTful web services." },
    { skill: "Core Programming Logic", level: 85, details: "Strong foundation in OOP and DSA principles." },
    { skill: "Frontend Integration", level: 78, details: "Hands-on with HTML5, CSS3, and JavaScript logic." },
    { skill: "Development Toolchain (IDE/Git)", level: 85, details: "Proficient in Git-based collaboration and Maven." }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Online Quiz Application",
    description: "A comprehensive web-based quiz platform with user authentication, question management, and real-time scoring. Features include timer functionality, multiple question types, and detailed result analysis.",
    detailedDescription: "The Online Quiz Application is a full-featured testing platform designed for educational institutions. It provides a secure environment for students to take assessments with features like automatic grading, time limits, and progress tracking. The admin dashboard allows instructors to manage question banks, categorize quizzes by subject, and view detailed performance analytics for every participant.",
    github: "https://github.com/Abhishek639763/OnlineQuizApp.git",
    technologies: ["Java", "JSP", "Servlets", "MySQL", "HTML/CSS", "JavaScript"],
    detailedFeatures: [
      "Secure student login and registration system",
      "Dynamic question loading from MySQL database",
      "Configurable time limits per quiz or per question",
      "Instant performance feedback and grade calculation",
      "Admin panel for question bank management and user monitoring",
      "Responsive design for mobile and desktop assessment"
    ]
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "A robust JDBC-based application for managing employee records with CRUD operations. Includes employee profile management, department allocation, and comprehensive reporting features.",
    detailedDescription: "This enterprise-grade management system simplifies HR operations by centralizing employee data. Built using the MVC architecture, it ensures a clean separation of concerns, making the system highly maintainable. The application handles everything from recruitment details to department transfers and performance history, providing a unified view for managers and administrators.",
    github: "https://github.com/Abhishek639763/Employee-JDBC-App.git",
    technologies: ["Java", "JDBC", "MySQL", "Swing", "MVC Pattern"],
    detailedFeatures: [
      "Full CRUD lifecycle management for employee records",
      "Advanced search capabilities across multiple data fields",
      "Department-wise employee categorization and reporting",
      "Input validation to ensure data integrity",
      "Seamless database connectivity using JDBC drivers",
      "User-friendly desktop interface using Java Swing"
    ]
  },
  {
    id: 3,
    title: "Todo Application",
    description: "A modern task management application with intuitive UI for organizing daily tasks. Features include task categorization, priority setting, due dates, and progress tracking.",
    detailedDescription: "A productivity-focused application designed to help users stay organized. Unlike simple todo lists, this application supports complex task hierarchies, priority-based sorting, and deadline reminders. The persistent storage ensures that tasks are always available across sessions, while the clean UI helps users focus on completion rather than management.",
    github: "https://github.com/Abhishek639763/ToDoApp.git",
    technologies: ["Java", "JavaFX", "SQLite", "CSS Styling"],
    detailedFeatures: [
      "Intuitive task creation with custom categories",
      "Priority-based sorting and color coding",
      "Deadline management with reminder features",
      "Persistent data storage using SQLite",
      "Modern and responsive UI built with JavaFX",
      "Dark mode support for better accessibility"
    ]
  },
  {
    id: 4,
    title: "Bank Account Simulation",
    description: "A comprehensive banking system simulation with account management, transaction processing, and balance tracking. Implements secure authentication and transaction history.",
    detailedDescription: "A complex simulation of core banking operations. This project demonstrates strong object-oriented design and secure data handling. It simulates the lifecycle of various account types (Savings, Current), handles deposits/withdrawals with concurrency awareness, and maintains a perfect audit trail through local file logs or database records.",
    github: "https://github.com/Abhishek639763/Bank-Account-Simulation-System.git",
    technologies: ["Java", "OOPs", "File I/O", "Exception Handling"],
    detailedFeatures: [
      "Multiple account type support with unique logic",
      "Secure pin-based transaction verification",
      "Detailed transaction history and statement generation",
      "Robust exception handling for edge cases (e.g., overdraft)",
      "Persistent account data management",
      "Concurrent transaction safety implementations"
    ]
  },
  {
    id: 5,
    title: "Notes Manager",
    description: "A digital note-taking application with rich text editing capabilities. Features include note categorization, search functionality, and cloud synchronization for seamless access.",
    detailedDescription: "Notes Manager is designed for heavy users who need to organize large volumes of information. It features a hierarchical folder system, rich formatting options, and a powerful search engine that indexes note content. It serves as a personal knowledge base for developers and students alike.",
    github: "https://github.com/Abhishek639763/Notes-Manager.git",
    technologies: ["Java", "Swing", "File Handling", "Search Algorithms"],
    detailedFeatures: [
      "Rich text formatting support (Bold, Italics, Lists)",
      "Instant full-text search across all notes",
      "Note categorization and tagging system",
      "Automatic autosave and version recovery",
      "Export notes to various formats (TXT, PDF)",
      "Clean, distraction-free writing environment"
    ]
  },
  {
    id: 6,
    title: "Library Management System",
    description: "A complete library automation system handling book inventory, member management, and lending operations. Includes fine calculation and overdue notifications.",
    detailedDescription: "This system automates the manual workflows of a library. It tracks the physical location of books, manages member accounts, and handles the entire lending/returning logic including automated fine calculations for late returns. It provides administrators with a powerful dashboard to monitor library health and circulation statistics.",
    github: "https://github.com/Abhishek639763/LibraryManagementSystem-3.git",
    technologies: ["Java", "MySQL", "Swing", "JDBC", "MVC"],
    detailedFeatures: [
      "Searchable book inventory with availability status",
      "Student and staff member registration and profile management",
      "Automated due date tracking and fine generation",
      "Barcode/Unique-ID based issue and return system",
      "Detailed circulation reports and inventory audits",
      "Integrated MySQL database for large scale data handling"
    ]
  },
  {
    id: 7,
    title: "Scientific Calculator",
    description: "An advanced calculator application with scientific functions, memory operations, and history tracking. Features a clean, intuitive interface with keyboard shortcuts.",
    detailedDescription: "Beyond basic arithmetic, this calculator provides complex mathematical tools for engineering and scientific applications. It handles trigonometric, logarithmic, and power functions with high precision. The history tracking allows users to review and reuse previous calculations seamlessly.",
    github: "https://github.com/Abhishek639763/Calculator.git",
    technologies: ["Java", "Swing", "Mathematical Libraries", "GUI Design"],
    detailedFeatures: [
      "Advanced scientific functions including Trig and Log",
      "Memory management (MC, MR, M+, M-)",
      "Running history log of all operations",
      "Keyboard-driven operation for high speed",
      "Precision handling for large and fractional numbers",
      "Customizable GUI themes and layouts"
    ]
  },
  {
    id: 8,
    title: "Doctor Appointment System",
    description: "A healthcare management system for scheduling appointments, managing patient records, and doctor availability. Includes notification system and appointment reminders.",
    detailedDescription: "Designed to clinical standards, this system manages the interaction between patients and healthcare providers. It features a real-time availability calendar for doctors, a patient medical history portal, and an automated notification system that reduces no-shows through timely reminders.",
    github: "https://github.com/Abhishek639763/Doctor-Appointment-System.git",
    technologies: ["Java", "MySQL", "JavaFX", "Date/Time APIs"],
    detailedFeatures: [
      "Real-time appointment booking with slot visibility",
      "Centralized patient medical records and visit history",
      "Doctor specialization and schedule management",
      "Automated reminders via email/SMS integration",
      "Pharmacy and prescription management support",
      "Admin billing and report generation tools"
    ]
  }
];

export const experienceData = [
  {
    title: "Java Developer Intern",
    company: "Elevate Labs",
    location: "Bengaluru, Karnataka",
    period: "August 2025 – September 2025",
    description: "Worked on backend development and Java-based projects including task schedulers, REST APIs, and management systems. Gained hands-on experience with modern Java technologies and enterprise-level development practices.",
    achievements: [
      "Developed Java backend applications with REST APIs using Spring Boot",
      "Implemented database operations using JDBC and MySQL",
      "Designed relational databases and performed CRUD operations",
      "Applied OOP concepts, exception handling, and debugging techniques"
    ],
    technologies: ["Spring Boot", "JDBC", "MySQL", "REST APIs", "Java"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Information Technology",
    school: "Chaudhary Charan Singh University, Meerut, UP",
    period: "2025",
    description: "Foundation in Information Technology, Software Engineering, and Computer Science principles."
  },
  {
    degree: "Intermediate",
    school: "Chandausi Inter College, Chandausi, UP",
    period: "2021",
    description: "Physics, Chemistry, Maths."
  }
];

export const achievementsData = [
  {
    title: "Java Full Stack & DSA",
    organization: "Apna College",
    period: "2023",
    description: "Completed comprehensive certification covering full-stack Java development, data structures, and algorithms. Built a strong foundation in Spring Boot, MySQL, and problem-solving.",
    highlights: ["Java Full Stack", "Data Structures", "Algorithms", "Spring Boot"]
  },
  {
    title: "National Social Summit 2024",
    organization: "IIT Roorkee",
    period: "2024",
    description: "Participated in the prestigious National Social Summit at IIT Roorkee, engaging with industry leaders and fellow developers on technology's role in social impact and innovation.",
    highlights: ["Industry Networking", "Social Impact Tech", "Innovation Discussions", "Professional Development"]
  }
];
