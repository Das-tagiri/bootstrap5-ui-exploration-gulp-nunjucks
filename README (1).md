# 🧩 Internship Task 2 — Bootstrap 5 UI Exploration & Page Design  
### 🚀 Project Title: *SkyForge Tech — Modern Responsive UI Design*

---

## 🎯 Objective  
The goal of this project was to explore **Bootstrap 5’s official documentation** and **example components**, understand their structure, and creatively remix them to design **clean, modern, and responsive** web pages.  

This task also involved learning to use a **templating engine (Nunjucks)** and a **task runner/bundler (Gulp)** to build and automate the project workflow — as part of the *Strict Tech Stack Implementation* internship requirement.

---

## 🧠 Learning Goals  
- Explore and understand **Bootstrap 5** components  
- Learn how to use **Nunjucks** as a templating engine  
- Automate builds using **Gulp**  
- Create fully responsive, professional-quality pages  
- Host the site live using **Netlify**  
- Gain hands-on experience with **Git & GitHub version control**

---

## 🛠️ Tech Stack Used  
| Category | Tools / Technologies |
|-----------|----------------------|
| Frontend | HTML5, CSS3, Bootstrap 5 |
| Templating | Nunjucks |
| Automation | Gulp (task runner) |
| Version Control | Git & GitHub |
| Deployment | Netlify (Free Hosting) |

---

## 📁 Project Structure  
```
bootstrap5-ui-exploration-gulp-nunjucks/
│
├── src/                  # Source files
│   ├── templates/        # Nunjucks templates
│   ├── styles/           # CSS & SCSS files
│   ├── scripts/          # JS files
│   └── images/           # Project images
│
├── dist/                 # Compiled output (deployed to Netlify)
│   ├── index.html
│   ├── about.html
│   └── contact.html
│
├── gulpfile.js           # Gulp automation tasks
├── package.json          # Project dependencies
├── README.md             # Reflection report (this file)
└── netlify.toml          # (optional) Netlify configuration
```

---

## 🌐 Live Demo  
🟢 **Hosted on Netlify:**  
👉 [https://skyforge-task2.netlify.app](https://skyforge-task2.netlify.app)

🗂️ **Source Code on GitHub:**  
👉 [https://github.com/Das-tagiri/bootstrap5-ui-exploration-gulp-nunjucks](https://github.com/Das-tagiri/bootstrap5-ui-exploration-gulp-nunjucks)

---

## 🧩 Pages Built  
| Page | Features Included |
|-------|-------------------|
| **Home** | Navbar, Hero Section, Feature Cards, Footer |
| **About / Services** | Company info, mission, team section |
| **Contact** | Contact form with responsive design |
| **Layout** | Responsive grid, Bootstrap utility classes, and smooth spacing |

---

## ⚙️ Build Process  
1. Installed dependencies using **npm install**  
2. Used **Gulp** to:
   - Compile Nunjucks templates → HTML  
   - Optimize CSS & JS  
   - Move final files into the `dist/` folder  
3. Tested pages locally with BrowserSync (`npm start`)  
4. Deployed final build (`dist/`) to **Netlify**  

---

## 🧩 Challenges Faced & Solutions  

| Challenge | Solution |
|------------|-----------|
| Gulp setup on Windows gave *execution policy* errors | Fixed by allowing PowerShell scripts using `Set-ExecutionPolicy RemoteSigned` |
| Understanding Nunjucks template inheritance | Learned how `{% extends %}` and `{% block %}` work from documentation |
| Maintaining consistent design across pages | Used common `layout.njk` template and Bootstrap utilities |
| Deployment build errors | Resolved by setting `gulp build` as Netlify’s build command and publishing `dist/` |

---

## 🕓 Time Taken  
| Task | Time |
|------|------|
| Research & component exploration | 2 hours |
| Page design & layout creation | 3 hours |
| Gulp + Nunjucks setup | 1 hour |
| Testing & debugging | 1 hour |
| Deployment & verification | 30 minutes |
| **Total** | **~7.5 hours** |

---

## 💡 Learnings & Takeaways  
- Gained strong understanding of **Bootstrap 5 UI components**  
- Learned to automate builds using **Gulp**  
- Experienced working with **templating engines (Nunjucks)**  
- Learned how to host live projects using **Netlify + GitHub**  
- Improved my **UI/UX design and layout composition skills**  
- Understood the value of **clean, modular project structure**

---

## 🧾 Declaration  
> I, **Kagadamodardastagiri**, completed this project as part of my internship Task 2 — *Bootstrap 5 UI Exploration & Page Design*.  
> I used the official Bootstrap documentation, Gulp + Nunjucks tutorials, and guidance from online developer resources.  
> AI tools (like ChatGPT) were used only for learning, explanation, and setup support — all design, composition, and integration were done by me.  

---

## 🏁 Final Outcome  
By completing this project, I:
- Achieved a fully responsive, modern website design  
- Gained experience with the full frontend workflow  
- Successfully hosted my work publicly using Netlify  

📍 **Live Project:** [skyforge-task2.netlify.app](https://skyforge-task2.netlify.app)  
📍 **GitHub Repo:** [github.com/Das-tagiri/bootstrap5-ui-exploration-gulp-nunjucks](https://github.com/Das-tagiri/bootstrap5-ui-exploration-gulp-nunjucks)
