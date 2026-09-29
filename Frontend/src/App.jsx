import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";

const careers = [
  {
    id: 1,
    title: "Web Developer",
    icon: "🌐",
    description: "Build websites and modern web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"],
  },
  {
    id: 2,
    title: "Data Analyst",
    icon: "📊",
    description: "Analyze data and create useful business insights.",
    skills: ["Excel", "SQL", "Python", "Statistics", "Power BI", "Data Visualization"],
  },
  {
    id: 3,
    title: "Data Scientist",
    icon: "🧠",
    description: "Use data, statistics and machine learning to solve problems.",
    skills: ["Python", "Statistics", "Pandas", "Machine Learning", "SQL", "Data Visualization"],
  },
  {
    id: 4,
    title: "Cloud Engineer",
    icon: "☁️",
    description: "Design, deploy and manage cloud-based systems.",
    skills: ["Linux", "Networking", "AWS", "Docker", "Cloud Security", "DevOps"],
  },
  {
    id: 5,
    title: "Cyber Security Analyst",
    icon: "🔐",
    description: "Protect systems, networks and data from security threats.",
    skills: ["Networking", "Linux", "Cyber Security", "Ethical Hacking", "SIEM", "Python"],
  },
  {
    id: 6,
    title: "AI / ML Engineer",
    icon: "🤖",
    description: "Build intelligent systems using artificial intelligence and machine learning.",
    skills: ["Python", "Statistics", "Machine Learning", "Deep Learning", "TensorFlow", "Data Processing"],
  },
  {
    id: 7,
    title: "Software Developer",
    icon: "💻",
    description: "Design and develop software applications.",
    skills: ["Programming", "Data Structures", "OOP", "Git", "SQL", "Problem Solving"],
  },
  {
    id: 8,
    title: "UI/UX Designer",
    icon: "🎨",
    description: "Design user-friendly and attractive digital experiences.",
    skills: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping", "Typography"],
  },
  {
    id: 9,
    title: "DevOps Engineer",
    icon: "⚙️",
    description: "Automate development, deployment and infrastructure processes.",
    skills: ["Linux", "Git", "Docker", "CI/CD", "AWS", "Kubernetes"],
  },
  {
    id: 10,
    title: "Mobile App Developer",
    icon: "📱",
    description: "Create applications for Android and mobile platforms.",
    skills: ["Java/Kotlin", "Android Studio", "UI Design", "APIs", "Firebase", "Git"],
  },
  {
    id: 11,
    title: "Database Administrator",
    icon: "🗄️",
    description: "Manage, secure and maintain databases.",
    skills: ["SQL", "Database Design", "MySQL", "Backup & Recovery", "Database Security", "Performance Tuning"],
  },
  {
    id: 12,
    title: "QA / Software Tester",
    icon: "🧪",
    description: "Test software and identify bugs before release.",
    skills: ["Manual Testing", "Test Cases", "Bug Tracking", "SQL", "Automation Testing", "Selenium"],
  },
];


/* =========================================================
   PERSONALIZED ROADMAP DATA
========================================================= */

const roadmapData = {

  "Web Developer": {
    "HTML": {
      priority: "High",
      why: "HTML is the basic structure of every web page.",
      learn: "Semantic HTML, forms, tables, links and accessibility.",
      practice: "Build a personal profile webpage."
    },
    "CSS": {
      priority: "High",
      why: "CSS is required to create attractive and responsive websites.",
      learn: "Flexbox, Grid, responsive design, animations and layouts.",
      practice: "Create a responsive landing page."
    },
    "JavaScript": {
      priority: "High",
      why: "JavaScript adds logic and interactivity to websites.",
      learn: "Variables, functions, arrays, objects, DOM, events and ES6.",
      practice: "Build a calculator or to-do application."
    },
    "React": {
      priority: "High",
      why: "React is widely used for building modern interactive web applications.",
      learn: "Components, Props, State, Hooks and React Router.",
      practice: "Build a React portfolio website."
    },
    "Git": {
      priority: "Medium",
      why: "Git helps developers track and manage project code.",
      learn: "Repositories, commits, branches, push, pull and GitHub.",
      practice: "Upload one of your projects to GitHub."
    },
    "Node.js": {
      priority: "Medium",
      why: "Node.js allows you to build backend applications using JavaScript.",
      learn: "Node basics, Express.js, REST APIs and database connection.",
      practice: "Build a simple REST API."
    }
  },

  "Data Analyst": {
    "Excel": {
      priority: "High",
      why: "Excel is commonly used for cleaning and exploring data.",
      learn: "Formulas, Pivot Tables, VLOOKUP/XLOOKUP and charts.",
      practice: "Analyze a student marks dataset."
    },
    "SQL": {
      priority: "High",
      why: "SQL is essential for retrieving data from databases.",
      learn: "SELECT, WHERE, JOIN, GROUP BY, subqueries and aggregate functions.",
      practice: "Create and analyze a student database."
    },
    "Python": {
      priority: "High",
      why: "Python makes data cleaning and analysis easier.",
      learn: "Python basics, functions, lists and data handling.",
      practice: "Analyze a CSV dataset using Python."
    },
    "Statistics": {
      priority: "High",
      why: "Statistics helps you understand patterns and trends in data.",
      learn: "Mean, median, probability, correlation and distributions.",
      practice: "Analyze statistics from a real dataset."
    },
    "Power BI": {
      priority: "Medium",
      why: "Power BI helps turn data into interactive dashboards.",
      learn: "Data import, Power Query, charts, filters and dashboards.",
      practice: "Create a sales dashboard."
    },
    "Data Visualization": {
      priority: "Medium",
      why: "Good visualizations make data easier to understand.",
      learn: "Bar charts, line charts, pie charts and dashboard design.",
      practice: "Create a dashboard from a public dataset."
    }
  },

  "Data Scientist": {
    "Python": {
      priority: "High",
      why: "Python is one of the main languages used in data science.",
      learn: "Functions, OOP, NumPy and data handling.",
      practice: "Build a small data analysis project."
    },
    "Statistics": {
      priority: "High",
      why: "Statistics is the foundation for understanding data and models.",
      learn: "Probability, distributions, hypothesis testing and correlation.",
      practice: "Perform statistical analysis on a dataset."
    },
    "Pandas": {
      priority: "High",
      why: "Pandas is used for cleaning and analyzing structured data.",
      learn: "DataFrames, filtering, grouping and missing values.",
      practice: "Clean and analyze a real dataset."
    },
    "Machine Learning": {
      priority: "High",
      why: "Machine learning allows systems to learn patterns from data.",
      learn: "Regression, classification, training and evaluation.",
      practice: "Build a simple prediction model."
    },
    "SQL": {
      priority: "Medium",
      why: "Data scientists often need data directly from databases.",
      learn: "Queries, joins, grouping and subqueries.",
      practice: "Analyze a database using SQL."
    },
    "Data Visualization": {
      priority: "Medium",
      why: "Visualization helps communicate findings from data.",
      learn: "Matplotlib, charts, trends and distributions.",
      practice: "Create visual reports from a dataset."
    }
  },

  "Cloud Engineer": {
    "Linux": {
      priority: "High",
      why: "Many cloud servers and systems run on Linux.",
      learn: "Terminal commands, files, permissions and processes.",
      practice: "Set up and manage a Linux virtual machine."
    },
    "Networking": {
      priority: "High",
      why: "Cloud infrastructure depends heavily on networking.",
      learn: "IP addresses, DNS, HTTP, TCP/IP and subnets.",
      practice: "Design a small network diagram."
    },
    "AWS": {
      priority: "High",
      why: "AWS provides widely used cloud infrastructure services.",
      learn: "EC2, S3, IAM and basic cloud architecture.",
      practice: "Deploy a simple website on cloud infrastructure."
    },
    "Docker": {
      priority: "Medium",
      why: "Docker makes applications easier to package and deploy.",
      learn: "Images, containers, Dockerfiles and volumes.",
      practice: "Containerize a small web application."
    },
    "Cloud Security": {
      priority: "Medium",
      why: "Cloud systems must protect data, accounts and services.",
      learn: "IAM, permissions, encryption and security principles.",
      practice: "Create a secure cloud architecture diagram."
    },
    "DevOps": {
      priority: "Medium",
      why: "Cloud engineers often work with automated deployment processes.",
      learn: "CI/CD, automation and infrastructure concepts.",
      practice: "Create a basic CI/CD pipeline."
    }
  },

  "Cyber Security Analyst": {
    "Networking": {
      priority: "High",
      why: "Understanding networks is essential for identifying attacks.",
      learn: "TCP/IP, DNS, ports, protocols and network traffic.",
      practice: "Study and analyze network traffic."
    },
    "Linux": {
      priority: "High",
      why: "Linux is widely used in security tools and servers.",
      learn: "Linux commands, permissions, processes and logs.",
      practice: "Set up a Linux security lab."
    },
    "Cyber Security": {
      priority: "High",
      why: "Security concepts help you understand threats and protection methods.",
      learn: "CIA triad, authentication, malware and vulnerabilities.",
      practice: "Create a basic security assessment."
    },
    "Ethical Hacking": {
      priority: "High",
      why: "Ethical hacking teaches how vulnerabilities are discovered.",
      learn: "Reconnaissance, vulnerability scanning and security testing.",
      practice: "Practice on a legal cybersecurity lab."
    },
    "SIEM": {
      priority: "Medium",
      why: "SIEM tools help monitor and investigate security events.",
      learn: "Logs, alerts, event correlation and monitoring.",
      practice: "Analyze sample security logs."
    },
    "Python": {
      priority: "Medium",
      why: "Python can automate security tasks and analysis.",
      learn: "Python basics, files, requests and automation.",
      practice: "Create a simple log-analysis script."
    }
  },

  "AI / ML Engineer": {
    "Python": {
      priority: "High",
      why: "Python is heavily used for AI and machine learning.",
      learn: "Python, NumPy, functions and object-oriented programming.",
      practice: "Build a small Python data project."
    },
    "Statistics": {
      priority: "High",
      why: "Statistics helps understand model behavior and data.",
      learn: "Probability, distributions, correlation and hypothesis testing.",
      practice: "Analyze a real dataset statistically."
    },
    "Machine Learning": {
      priority: "High",
      why: "Machine learning is the foundation of many AI applications.",
      learn: "Regression, classification, clustering and model evaluation.",
      practice: "Build a prediction model."
    },
    "Deep Learning": {
      priority: "High",
      why: "Deep learning is used for advanced AI applications.",
      learn: "Neural networks, layers, training and optimization.",
      practice: "Build a simple image classification model."
    },
    "TensorFlow": {
      priority: "Medium",
      why: "TensorFlow can be used to build and train machine learning models.",
      learn: "Tensors, models, layers and training.",
      practice: "Train a simple neural network."
    },
    "Data Processing": {
      priority: "Medium",
      why: "Good data preparation is important before training models.",
      learn: "Cleaning, missing values, encoding and feature preparation.",
      practice: "Prepare a messy dataset for ML."
    }
  },

  "Software Developer": {
    "Programming": {
      priority: "High",
      why: "Programming is the core skill required to build software.",
      learn: "Variables, functions, loops, conditions and error handling.",
      practice: "Build small console applications."
    },
    "Data Structures": {
      priority: "High",
      why: "Data structures help organize information efficiently.",
      learn: "Arrays, stacks, queues, linked lists and trees.",
      practice: "Implement common data structures."
    },
    "OOP": {
      priority: "High",
      why: "Object-oriented programming is widely used in software development.",
      learn: "Classes, objects, inheritance, polymorphism and abstraction.",
      practice: "Build a small OOP-based application."
    },
    "Git": {
      priority: "Medium",
      why: "Git helps manage code and collaborate with developers.",
      learn: "Commits, branches, merging and GitHub.",
      practice: "Maintain a project repository."
    },
    "SQL": {
      priority: "Medium",
      why: "Many applications store information in databases.",
      learn: "Queries, joins, tables and relationships.",
      practice: "Build a database-backed application."
    },
    "Problem Solving": {
      priority: "High",
      why: "Developers solve technical problems every day.",
      learn: "Algorithms, debugging and logical thinking.",
      practice: "Solve programming problems regularly."
    }
  },

  "UI/UX Designer": {
    "Figma": {
      priority: "High",
      why: "Figma is commonly used for interface and prototype design.",
      learn: "Frames, components, auto layout and prototyping.",
      practice: "Design a mobile application in Figma."
    },
    "UI Design": {
      priority: "High",
      why: "UI design creates the visual interface users interact with.",
      learn: "Colors, spacing, layouts, buttons and design systems.",
      practice: "Redesign a simple website."
    },
    "UX Research": {
      priority: "High",
      why: "UX research helps understand real user needs.",
      learn: "User interviews, surveys, personas and usability testing.",
      practice: "Conduct a small user research study."
    },
    "Wireframing": {
      priority: "Medium",
      why: "Wireframes help plan an interface before visual design.",
      learn: "Layouts, user flows and low-fidelity screens.",
      practice: "Create wireframes for an app."
    },
    "Prototyping": {
      priority: "Medium",
      why: "Prototypes demonstrate how users will interact with a design.",
      learn: "Interactions, navigation and clickable prototypes.",
      practice: "Create a clickable app prototype."
    },
    "Typography": {
      priority: "Low",
      why: "Typography improves readability and visual hierarchy.",
      learn: "Font selection, hierarchy, spacing and readability.",
      practice: "Create a typography-based landing page."
    }
  },

  "DevOps Engineer": {
    "Linux": {
      priority: "High",
      why: "Linux is commonly used for servers and DevOps environments.",
      learn: "Commands, permissions, processes and shell basics.",
      practice: "Manage a Linux server environment."
    },
    "Git": {
      priority: "High",
      why: "Git is essential for source-code management.",
      learn: "Branches, merging, commits and GitHub workflows.",
      practice: "Create a Git workflow for a project."
    },
    "Docker": {
      priority: "High",
      why: "Docker helps package applications consistently.",
      learn: "Images, containers, Dockerfiles and networking.",
      practice: "Containerize your web application."
    },
    "CI/CD": {
      priority: "High",
      why: "CI/CD automates testing and deployment.",
      learn: "Build pipelines, automated tests and deployment.",
      practice: "Create a basic CI/CD pipeline."
    },
    "AWS": {
      priority: "Medium",
      why: "Cloud platforms are commonly used for deployment.",
      learn: "EC2, S3, IAM and cloud basics.",
      practice: "Deploy an application to AWS."
    },
    "Kubernetes": {
      priority: "Medium",
      why: "Kubernetes manages containerized applications at scale.",
      learn: "Pods, deployments, services and clusters.",
      practice: "Deploy a container using Kubernetes."
    }
  },

  "Mobile App Developer": {
    "Java/Kotlin": {
      priority: "High",
      why: "Programming knowledge is required to build Android applications.",
      learn: "Variables, functions, classes and Android programming basics.",
      practice: "Build a simple calculator app."
    },
    "Android Studio": {
      priority: "High",
      why: "Android Studio is the main development environment for Android apps.",
      learn: "Project structure, emulator, activities and debugging.",
      practice: "Create your first Android application."
    },
    "UI Design": {
      priority: "High",
      why: "Mobile applications need clear and usable interfaces.",
      learn: "Layouts, buttons, navigation and responsive screens.",
      practice: "Design a login and home screen."
    },
    "APIs": {
      priority: "Medium",
      why: "APIs allow mobile applications to communicate with servers.",
      learn: "HTTP, GET, POST, JSON and API integration.",
      practice: "Connect an app to a public API."
    },
    "Firebase": {
      priority: "Medium",
      why: "Firebase provides useful backend services for mobile apps.",
      learn: "Authentication, database and storage.",
      practice: "Add login and data storage to an app."
    },
    "Git": {
      priority: "Low",
      why: "Git helps manage application source code.",
      learn: "Repositories, commits, branches and GitHub.",
      practice: "Upload your mobile project to GitHub."
    }
  },

  "Database Administrator": {
    "SQL": {
      priority: "High",
      why: "SQL is the main language for managing relational databases.",
      learn: "Queries, joins, functions and transactions.",
      practice: "Create and manage a student database."
    },
    "Database Design": {
      priority: "High",
      why: "Good database design prevents duplicate and inconsistent data.",
      learn: "ER diagrams, normalization, keys and relationships.",
      practice: "Design a database for a college system."
    },
    "MySQL": {
      priority: "High",
      why: "MySQL is a widely used relational database system.",
      learn: "Tables, users, queries, indexes and administration.",
      practice: "Build and manage a MySQL database."
    },
    "Backup & Recovery": {
      priority: "High",
      why: "Backups protect important information from data loss.",
      learn: "Backup strategies, restore processes and recovery planning.",
      practice: "Create and restore a sample database backup."
    },
    "Database Security": {
      priority: "Medium",
      why: "Database security protects sensitive information.",
      learn: "Users, permissions, authentication and encryption.",
      practice: "Create different database access roles."
    },
    "Performance Tuning": {
      priority: "Medium",
      why: "Optimization helps databases respond efficiently.",
      learn: "Indexes, query optimization and performance monitoring.",
      practice: "Optimize a slow SQL query."
    }
  },

  "QA / Software Tester": {
    "Manual Testing": {
      priority: "High",
      why: "Manual testing helps identify problems from a user's perspective.",
      learn: "Testing process, test scenarios and test execution.",
      practice: "Test a sample website manually."
    },
    "Test Cases": {
      priority: "High",
      why: "Test cases provide a structured way to verify software behavior.",
      learn: "Test conditions, expected results and test documentation.",
      practice: "Write test cases for a login page."
    },
    "Bug Tracking": {
      priority: "High",
      why: "Bug tracking helps teams record and manage software problems.",
      learn: "Bug reports, severity, priority and issue lifecycle.",
      practice: "Create sample bug reports."
    },
    "SQL": {
      priority: "Medium",
      why: "Testers often verify data stored in databases.",
      learn: "SELECT, JOIN, filtering and validation queries.",
      practice: "Validate application data using SQL."
    },
    "Automation Testing": {
      priority: "High",
      why: "Automation makes repetitive testing faster.",
      learn: "Automation concepts, locators and test scripts.",
      practice: "Automate a simple login test."
    },
    "Selenium": {
      priority: "Medium",
      why: "Selenium is commonly used for web automation testing.",
      learn: "WebDriver, locators, waits and test execution.",
      practice: "Automate a website login page."
    }
  }
};


/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [page, setPage] = useState("home");
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  function handleLogin(data) {
    setLoggedInUser(data.user);
    setPage("home");
  }

  function openAdminDashboard() {
    setPage("admin");
  }

  function chooseCareer(career) {
    setSelectedCareer(career);
    setSelectedSkills([]);
    setPage("assessment");
  }

  function toggleSkill(skill) {
    setSelectedSkills((previous) => {
      if (previous.includes(skill)) {
        return previous.filter((item) => item !== skill);
      }

      return [...previous, skill];
    });
  }

  function getPriorityNumber(priority) {
    if (priority === "High") return 1;
    if (priority === "Medium") return 2;
    return 3;
  }

  function getRoadmapForMissingSkills() {
    if (!selectedCareer) return [];

    const careerRoadmap = roadmapData[selectedCareer.title] || {};

    return selectedCareer.skills
      .filter((skill) => !selectedSkills.includes(skill))
      .map((skill) => ({
        skill,
        ...(careerRoadmap[skill] || {
          priority: "Medium",
          why: `This skill is useful for a ${selectedCareer.title} career.`,
          learn: `Learn the fundamentals of ${skill} and practice regularly.`,
          practice: `Build a small project using ${skill}.`,
        }),
      }))
      .sort(
        (a, b) =>
          getPriorityNumber(a.priority) -
          getPriorityNumber(b.priority)
      );
  }

  async function goToResult() {
    if (!loggedInUser) {
      alert("Please login before taking the assessment.");
      setPage("login");
      return;
    }

    if (!selectedCareer) {
      return;
    }

    const totalSkills = selectedCareer.skills.length;

    const matchPercentage = totalSkills
      ? Math.round((selectedSkills.length / totalSkills) * 100)
      : 0;

    const missingSkills = selectedCareer.skills.filter(
      (skill) => !selectedSkills.includes(skill)
    );

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/assessments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: loggedInUser.id,
            career: selectedCareer.title,
            selectedSkills,
            missingSkills,
            matchPercentage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(
          "Assessment could not be saved:",
          data.message
        );

        alert(data.message || "Assessment could not be saved.");
        return;
      }

      console.log("Assessment saved successfully ✅");
      setPage("result");
    } catch (error) {
      console.error("Could not connect to backend:", error);
      alert(
        "Could not save assessment. Please make sure the backend is running."
      );
    }
  }

  /* =========================
     HOME
  ========================= */

  if (page === "home") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">
            Skill<span>Gap</span> Detector
          </div>

          <div className="nav-actions">
            {loggedInUser ? (
              <>
                <span className="welcome">
                  Welcome 👋 {loggedInUser.name}
                </span>

                {loggedInUser.email === "admin@test.com" && (
                  <button
                    className="nav-btn"
                    onClick={openAdminDashboard}
                  >
                    Admin Dashboard
                  </button>
                )}

                <button
                  className="nav-btn"
                  onClick={() => setLoggedInUser(null)}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="nav-btn"
                  onClick={() => setPage("login")}
                >
                  Login
                </button>

                <button
                  className="nav-btn primary"
                  onClick={() => setPage("register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <p className="hero-tag">SMART CAREER DISCOVERY</p>

            <h1>
              Discover Your
              <span> Skill Gap</span>
            </h1>

            <p>
              Find out which skills you already have,
              which skills you need to develop, and get
              a personalized learning roadmap for your
              dream career.
            </p>

            <button
              className="hero-btn"
              onClick={() => setPage("careers")}
            >
              Find My Skill Gap →
            </button>
          </div>

          <div className="hero-visual">
            <div className="skill-circle">
              <div className="circle-center">🎯</div>

              <div className="floating-skill skill-one">
                React
              </div>

              <div className="floating-skill skill-two">
                Python
              </div>

              <div className="floating-skill skill-three">
                AWS
              </div>

              <div className="floating-skill skill-four">
                SQL
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div>🔍</div>
            <h3>Analyze Skills</h3>
            <p>
              Compare your current skills with the
              skills required for your target career.
            </p>
          </div>

          <div className="feature-card">
            <div>📊</div>
            <h3>See Your Gap</h3>
            <p>
              Understand your skill match percentage
              and identify what you need to improve.
            </p>
          </div>

          <div className="feature-card">
            <div>🚀</div>
            <h3>Get a Roadmap</h3>
            <p>
              Receive a personalized learning plan
              with priorities and practical projects.
            </p>
          </div>
        </section>
      </div>
    );
  }


  /* =========================
     ADMIN DASHBOARD
  ========================= */

  if (page === "admin") {
    return <AdminDashboard />;
  }


  /* =========================
     LOGIN
  ========================= */

  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
      />
    );
  }


  /* =========================
     REGISTER
  ========================= */

  if (page === "register") {
    return <Register />;
  }


  /* =========================
     CAREERS
  ========================= */

  if (page === "careers") {
    return (
      <div className="career-page">
        <div className="career-header">
          <p className="hero-tag">CHOOSE YOUR PATH</p>

          <h1>
            Which career are you
            <span> interested in?</span>
          </h1>

          <p>
            Select a career to discover the skills
            you need to build.
          </p>
        </div>

        <div className="career-grid">
          {careers.map((career) => (
            <div
              className="career-card"
              key={career.id}
              onClick={() => chooseCareer(career)}
            >
              <div className="career-icon">
                {career.icon}
              </div>

              <h2>{career.title}</h2>

              <p>{career.description}</p>

              <div className="career-skills">
                {career.skills.slice(0, 4).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <button>
                Check Skill Gap →
              </button>
            </div>
          ))}
        </div>

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>
      </div>
    );
  }


  /* =========================
     ASSESSMENT
  ========================= */

  if (page === "assessment" && selectedCareer) {
    return (
      <div className="assessment-page">
        <div className="assessment-container">

          <div className="assessment-header">
            <div className="assessment-icon">
              {selectedCareer.icon}
            </div>

            <p className="hero-tag">
              SKILL ASSESSMENT
            </p>

            <h1>{selectedCareer.title}</h1>

            <p>
              Select the skills you already know.
              Be honest — this helps us create a
              better learning roadmap for you.
            </p>
          </div>

          <div className="skill-selection">
            {selectedCareer.skills.map((skill) => (
              <button
                key={skill}
                className={
                  selectedSkills.includes(skill)
                    ? "skill-option selected"
                    : "skill-option"
                }
                onClick={() => toggleSkill(skill)}
              >
                <span>
                  {selectedSkills.includes(skill)
                    ? "✓"
                    : "+"}
                </span>

                {skill}
              </button>
            ))}
          </div>

          <div className="assessment-actions">
            <button
              className="back-btn"
              onClick={() => setPage("careers")}
            >
              ← Change Career
            </button>

            <button
              className="hero-btn"
              onClick={goToResult}
            >
              Analyze My Skills →
            </button>
          </div>

        </div>
      </div>
    );
  }


  /* =========================
     RESULT
  ========================= */

  if (page === "result" && selectedCareer) {

    const totalSkills = selectedCareer.skills.length;

    const matchPercentage = totalSkills
      ? Math.round(
          (selectedSkills.length / totalSkills) * 100
        )
      : 0;

    const missingSkills =
      selectedCareer.skills.filter(
        (skill) => !selectedSkills.includes(skill)
      );

    const roadmap = getRoadmapForMissingSkills();

    let readiness = "Beginner";

    let readinessMessage =
      "You are at the beginning of your journey. Start building the missing skills.";

    if (matchPercentage >= 80) {
      readiness = "Highly Prepared";

      readinessMessage =
        "You have a strong foundation for this career. Focus on advanced skills and real-world projects.";
    } else if (matchPercentage >= 50) {
      readiness = "Developing";

      readinessMessage =
        "You have a good starting foundation. Strengthen your missing skills through practice and projects.";
    }


    return (
      <div className="result-page">

        <div className="result-container">

          {/* HEADER */}

          <div className="result-header">

            <div className="result-icon">
              {selectedCareer.icon}
            </div>

            <p className="hero-tag">
              YOUR SKILL GAP REPORT
            </p>

            <h1>
              {selectedCareer.title}
            </h1>

            <p>
              Here is your personalized skill analysis
              and learning roadmap.
            </p>

          </div>


          {/* SCORE */}

          <div className="result-score-card">

            <div className="score-circle">
              <strong>
                {matchPercentage}%
              </strong>

              <span>Skill Match</span>
            </div>

            <div className="score-info">

              <h2>
                Career Readiness:
                <span> {readiness}</span>
              </h2>

              <p>
                {readinessMessage}
              </p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${matchPercentage}%`,
                  }}
                />
              </div>

            </div>

          </div>


          {/* SKILLS */}

          <div className="result-columns">

            <div className="result-box">

              <h2>
                ✅ Skills You Have
              </h2>

              {selectedSkills.length > 0 ? (
                <div className="result-tags">

                  {selectedSkills.map((skill) => (
                    <span
                      className="have-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              ) : (
                <p className="empty-text">
                  No skills selected yet.
                </p>
              )}

            </div>


            <div className="result-box">

              <h2>
                📚 Skills You Need to Learn
              </h2>

              {missingSkills.length > 0 ? (
                <div className="result-tags">

                  {missingSkills.map((skill) => (
                    <span
                      className="need-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              ) : (
                <p className="empty-text">
                  🎉 You have selected all required
                  skills!
                </p>
              )}

            </div>

          </div>


          {/* PERSONALIZED ROADMAP */}

          <div className="roadmap-section">

            <div className="roadmap-heading">

              <p className="hero-tag">
                PERSONALIZED LEARNING PLAN
              </p>

              <h2>
                Your Roadmap 🚀
              </h2>

              <p>
                We arranged your missing skills by
                priority and added what to learn and
                how to practice each one.
              </p>

            </div>


            {roadmap.length > 0 ? (

              <div className="roadmap-list">

                {roadmap.map((item, index) => (

                  <div
                    className="roadmap-card"
                    key={item.skill}
                  >

                    <div className="roadmap-number">
                      {index + 1}
                    </div>


                    <div className="roadmap-content">

                      <div className="roadmap-title-row">

                        <h3>
                          {item.skill}
                        </h3>

                        <span
                          className={`priority priority-${item.priority.toLowerCase()}`}
                        >
                          {item.priority} Priority
                        </span>

                      </div>


                      <div className="roadmap-detail">

                        <strong>
                          💡 Why you need it ?
                        </strong>

                        <p>
                          {item.why}
                        </p>

                      </div>


                      <div className="roadmap-detail">

                        <strong>
                          📖 What should you learn?
                        </strong>

                        <p>
                          {item.learn}
                        </p>

                      </div>


                      <div className="roadmap-detail">

                        <strong>
                          🛠️ What should you practice?
                        </strong>

                        <p>
                          {item.practice}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="complete-roadmap">

                <div>
                  🎉
                </div>

                <h3>
                  Amazing! You selected all the
                  required skills.
                </h3>

                <p>
                  Your next step is to build real-world
                  projects and strengthen your skills
                  through practical experience.
                </p>

              </div>

            )}

          </div>


          {/* RECOMMENDATION */}

          <div className="recommendation-box">

            <h2>
              🎯 Your Next Move
            </h2>

            {roadmap.length > 0 ? (

              <p>
                Start with the{" "}
                <strong>
                  {roadmap[0].skill}
                </strong>{" "}
                skill because it has{" "}
                <strong>
                  {roadmap[0].priority.toLowerCase()}
                </strong>{" "}
                priority. After learning it, complete
                the suggested practice project before
                moving to the next skill.
              </p>

            ) : (

              <p>
                You already have all the listed skills.
                Focus on advanced learning, projects,
                internships and real-world experience.
              </p>

            )}

          </div>


          {/* BUTTONS */}

          <div className="result-actions">

            <button
              className="back-btn"
              onClick={() => setPage("careers")}
            >
              Check Another Career
            </button>

            <button
              className="hero-btn"
              onClick={() => setPage("home")}
            >
              Back to Home
            </button>

          </div>

        </div>

      </div>
    );
  }


  return null;
}

export default App;