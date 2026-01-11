// Main JavaScript file for CV website

document.addEventListener('DOMContentLoaded', function() {
    
    // TODO: Implement Dark Mode Toggle
    // 1. Get the theme toggle button: document.getElementById('theme-toggle')
    // 2. Add click event listener to the button
    // 3. Toggle 'dark-mode' class on body element
    // 4. Save theme preference to localStorage
    // 5. Load saved theme when page loads
    // 6. Update button text based on current theme (🌙 Dark Mode / ☀️ Light Mode)
    // Hint: Use body.classList.toggle('dark-mode') and localStorage.setItem/getItem
    
    // TODO: Add smooth scrolling for anchor links
    // Hint: Use querySelectorAll for links starting with '#'
    // Hint: Use element.scrollIntoView({ behavior: 'smooth' })
    
    // TODO: Add scroll animations to sections
    // Hint: Use IntersectionObserver API to detect when sections enter viewport
    // Hint: Add/remove CSS classes or modify styles when sections become visible
    
    // TODO: Add click-to-copy functionality for email
    // Hint: Use navigator.clipboard.writeText() to copy text
    // Hint: Show a notification after copying
    
    // TODO: Add hover effects to skill tags
    // Hint: Use mouseenter and mouseleave events
    // Hint: Modify styles or add CSS classes on hover
    
    // TODO: Add a function to show notifications
    // Hint: Create a div element dynamically
    // Hint: Style it with position: fixed and add fade in/out animations
    // Hint: Use setTimeout to remove the notification after a few seconds
    
    // --- Theme toggle (dark/light) ---
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('cv-theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-mode');

    function updateThemeButton() {
        if (!themeToggle) return;
        const isDark = document.body.classList.contains('dark-mode');
        const lang = localStorage.getItem('cv-lang') || 'en';
        const texts = {
            en: { dark: '🌙 Dark Mode', light: '☀️ Light Mode' },
            zh: { dark: '🌙 深色模式', light: '☀️ 淺色模式' }
        };
        themeToggle.textContent = isDark ? texts[lang].light : texts[lang].dark;
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
            updateThemeButton();
        });
    }

    // --- Simple i18n language toggle ---
    const translations = {
        en: {
            'title': 'Personal CV - Long-Ting',
            'profile.initials': 'LT',
            'profile.name': 'Long-Ting',
            'profile.roles': 'Engineering Intern · Equipment Engineer Intern · Aspiring Product Manager',
            'profile.tagline': 'Your professional tagline here',
            'contact.email': 'ttiimm940810@gmail.com',
            'contact.phone': '0966306506',
            'contact.location': 'Taiwan',
            'contact.link': '[linkedin.com/in/yourprofile]',
            'section.about.title': 'About Me',
            'section.about.content': 'Bio‑Industrial Mechatronics Engineering student at National Chung Hsing University with a strong interest in automation equipment, mechanical design, image recognition, and manufacturing processes. I have practical experience from semiconductor equipment training with TSMC, enterprise visits, and hands‑on projects. Short‑term goal: grow as an engineer; long‑term goal: transition into Product Management. Proactive learner with proven cross‑disciplinary communication and teamwork abilities.',
            'section.experience.title': 'Experience',
            'exp.1.title': 'Equipment Engineering Program Trainee',
            'exp.1.company': 'National Chung Hsing University × TSMC',
            'exp.1.li1': 'Participated in a semiconductor equipment engineering training program and enterprise visits.',
            'exp.1.li2': 'Gained hands‑on experience with automation systems and manufacturing workflows.',
            'exp.1.li3': 'Collaborated on team problem‑solving and technical competitions to improve equipment reliability.',
            'exp.2.title': 'Production Engineer',
            'exp.2.company': 'Zhaoyi Nanotech Co., Ltd.',
            'exp.2.li1': 'Supported production operations and performed routine equipment maintenance.',
            'exp.2.li2': 'Collaborated with engineering and production teams to troubleshoot issues and improve process flow.',
            'exp.2.li3': 'Contributed to process improvement initiatives to enhance yield and reduce downtime.',
            'exp.3.title': 'Vice Captain, Department Basketball Team',
            'exp.3.company': 'National Chung Hsing University',
            'exp.3.li1': 'Led team communication and strategy execution under pressure; developed leadership and teamwork.',
            'exp.3.li2': 'Coordinated practices and in‑game adjustments, contributing to championship results.',
            'exp.4.title': 'Teaching Assistant / Tutor',
            'exp.4.company': 'Education Center',
            'exp.4.li1': 'Delivered lessons and guided large student groups; adapted quickly to unexpected responsibilities.',
            'exp.4.li2': 'Strengthened presentation, mentoring, and communication skills.',
            'section.education.title': 'Education',
            'education.degree': 'B.S., Bio‑Industrial Mechatronics Engineering',
            'education.institution': 'National Chung Hsing University',
            'section.skills.title': 'Skills',
            'skills.tech.title': 'Technical Skills',
            'skill.solidworks': 'SolidWorks',
            'skill.mechanical': 'Mechanical Design',
            'skill.automation': 'Automation Basics',
            'skill.imageproc': 'Image Processing (basic)',
            'skills.lang.title': 'Language',
            'lang.mandarin': 'Mandarin (Native)',
            'lang.english': 'English (TOEIC ~800)',
            'skills.soft.title': 'Soft Skills',
            'soft.fastlearner': 'Fast Learner',
            'soft.proactive': 'Proactive',
            'soft.teamwork': 'Teamwork',
            'soft.crosscom': 'Cross‑functional Communication',
            'section.activities.title': 'Selected Programs & Activities',
            'act.1.title': 'SPIL (Siliconware Precision Industries) Corporate Mentor Program',
            'act.1.li1': 'Gained in‑depth exposure to <strong>OSAT processes</strong>, including <strong>bumping</strong> and <strong>IC testing</strong>.',
            'act.1.li2': 'Observed fully automated production lines and OHT systems; learned cleanliness and process stability requirements.',
            'act.1.li3': 'Developed system‑level thinking by practicing anomaly localization across process stages.',
            'act.1.li4': 'Collaborated in team competitions, strengthening decision‑making and cross‑functional communication.',
            'act.2.title': 'Quanta Maker Co‑Creation Program',
            'act.2.li1': 'Participated in cross‑functional case studies and high‑intensity group competitions.',
            'act.2.li2': 'Analyzed differences between precision manufacturing and system assembly industries.',
            'act.2.li3': 'Applied SWOT analysis and technical feasibility evaluation to support business strategies.',
            'act.2.li4': 'Demonstrated strong potential in project coordination and logical decision‑making.',
            'act.3.title': 'Software‑Defined Intelligent Vehicle Hands‑on Program',
            'act.3.li1': 'Completed intensive training on SDV architecture, sensing, and vehicle control.',
            'act.3.li2': 'Implemented navigation and path planning algorithms with real vehicle testing.',
            'act.3.li3': 'Resolved sensor accuracy issues via image preprocessing and parameter tuning.',
            'act.3.li4': 'Strengthened hands‑on experience in autonomous driving and vehicle software development.',
            'section.interests.title': 'Interests',
            'section.interests.content': 'Surfing; Robotics & Hardware Projects; Autonomous Driving; Photography; Reading',
            'section.projects.title': 'Featured Projects',
            'project.one.title': 'Auto-Probe Gripping & Positioning System',
            'project.one.desc': 'Designed a custom vibration plate and gripping mechanism. Integrated Arduino control with OpenCV image recognition to achieve automated probe positioning.',
            'project.one.tag1': 'Arduino',
            'project.one.tag2': 'OpenCV',
            'project.one.tag3': 'SolidWorks',
            'project.one.tag4': 'Mechanism Design',
            'project.two.title': 'Stock Selection Strategy Algorithm',
            'project.two.desc': 'Developed automated stock screening scripts using XScript. Analyzed market trends and implemented technical indicators for optimized portfolio selection.',
            'project.two.tag1': 'XScript',
            'project.two.tag2': 'Data Analysis',
            'project.two.tag3': 'Financial Modeling',
            'project.three.title': 'Color Blob Separation Algorithm',
            'project.three.desc': 'Implemented image processing algorithms in Visual Basic 6.0 to detect and separate colored balls within complex visual data, focusing on blob analysis.',
            'project.three.tag1': 'Visual Basic 6.0',
            'project.three.tag2': 'Image Processing',
            'project.three.tag3': 'Algorithm',
            'footer.copy': '© 2024 Long-Ting. Built with HTML, CSS, and JavaScript.',
            'button.theme': '🌙 Dark Mode',
            'button.lang': '中文'
        },
        zh: {
            'title': '個人履歷 - 龍霆',
            'profile.initials': 'LT',
            'profile.name': '龍霆',
            'profile.roles': '工程實習生 · 設備工程實習生 · 準產品經理',
            'profile.tagline': '在此填寫你的專業標語',
            'contact.email': 'ttiimm940810@gmail.com',
            'contact.phone': '0966306506',
            'contact.location': '台灣',
            'contact.link': '[linkedin.com/in/yourprofile]',
            'section.about.title': '關於我',
            'section.about.content': '國立中興大學生物產業機電工程學系學生，對自動化設備、機構設計、影像識別與製程有強烈興趣。曾參與台積電設備工程訓練、企業參訪及多項實作專案。短期目標：成長為工程師；長期目標：轉型為產品經理。主動學習且具跨領域溝通與團隊協作能力。',
            'section.experience.title': '經歷',
            'exp.1.title': '設備工程專題實習',
            'exp.1.company': '國立中興大學 × 台積電',
            'exp.1.li1': '參與半導體設備工程訓練課程與企業參訪。',
            'exp.1.li2': '獲得自動化系統與製程工作流程之實作經驗。',
            'exp.1.li3': '在團隊問題解決與技術競賽中合作，以提升設備可靠度。',
            'exp.2.title': '製程工程師',
            'exp.2.company': '兆益奈米股份有限公司',
            'exp.2.li1': '支援生產作業並執行例行設備保養。',
            'exp.2.li2': '與工程及生產團隊協作，排除問題並改善製程流程。',
            'exp.2.li3': '參與製程改進以提升良率並降低停機時間。',
            'exp.3.title': '系隊副隊長（籃球）',
            'exp.3.company': '國立中興大學',
            'exp.3.li1': '在壓力下領導隊內溝通與戰術執行，培養領導與團隊合作能力。',
            'exp.3.li2': '協調訓練與賽中調整，貢獻團隊成績。',
            'exp.4.title': '助教 / 家教',
            'exp.4.company': '教育中心',
            'exp.4.li1': '授課並帶領大班學生，能快速應變臨時任務。',
            'exp.4.li2': '強化了簡報、指導與溝通能力。',
            'section.education.title': '教育',
            'education.degree': '生物產業機電工程學系 學士',
            'education.institution': '國立中興大學',
            'section.skills.title': '技能',
            'skills.tech.title': '技術技能',
            'skill.solidworks': 'SolidWorks',
            'skill.mechanical': '機構設計',
            'skill.automation': '自動化基礎',
            'skill.imageproc': '影像處理（基礎）',
            'skills.lang.title': '語言',
            'lang.mandarin': '中文（母語）',
            'lang.english': '英文（TOEIC 約 800）',
            'skills.soft.title': '軟技能',
            'soft.fastlearner': '學習快速',
            'soft.proactive': '主動積極',
            'soft.teamwork': '團隊合作',
            'soft.crosscom': '跨領域溝通',
            'section.activities.title': '參與活動與計畫',
            'act.1.title': 'SPIL（矽品）企業師徒計畫',
            'act.1.li1': '深入了解 <strong>OSAT 製程</strong>，包括 <strong>凸塊</strong> 與 <strong>IC 測試</strong>。',
            'act.1.li2': '觀察到全自動化生產線與 OHT 系統，學習潔淨與製程穩定性需求。',
            'act.1.li3': '透過各製程階段的異常定位練習，建立系統層級思維。',
            'act.1.li4': '參與團隊競賽，強化決策能力與跨部門溝通。',
            'act.2.title': '廣達 Maker 協作計畫',
            'act.2.li1': '參與跨職能的案例研究與高強度團隊競賽。',
            'act.2.li2': '分析精密製造與系統組裝業之差異。',
            'act.2.li3': '運用 SWOT 與技術可行性評估以支持商業策略。',
            'act.2.li4': '展現良好的專案協調與邏輯判斷能力。',
            'act.3.title': '軟體定義智慧車實作課程',
            'act.3.li1': '完成 SDV 架構、感測與車輛控制之密集訓練。',
            'act.3.li2': '實作導航與路徑規劃演算法並進行實車測試。',
            'act.3.li3': '透過影像前處理與參數調校解決感測器精度問題。',
            'act.3.li4': '強化自駕車軟體開發與實作經驗。',
            'section.interests.title': '興趣',
            'section.interests.content': '衝浪；機器人與硬體專案；自駕車；攝影；閱讀',
            'section.projects.title': '專案精選',
            'project.one.title': '自動探針夾持與定位系統',
            'project.one.desc': '設計震動板與夾持機構，整合 Arduino 控制與 OpenCV 影像辨識以達成自動化探針定位。',
            'project.one.tag1': 'Arduino',
            'project.one.tag2': 'OpenCV',
            'project.one.tag3': 'SolidWorks',
            'project.one.tag4': '機構設計',
            'project.two.title': '選股策略演算法',
            'project.two.desc': '使用 XScript 開發自動選股腳本，分析市場趨勢並實作技術指標以優化投資組合篩選。',
            'project.two.tag1': 'XScript',
            'project.two.tag2': '資料分析',
            'project.two.tag3': '財務建模',
            'project.three.title': '顏色斑塊分離演算法',
            'project.three.desc': '以 Visual Basic 6.0 實作影像處理演算法，於複雜影像中偵測並分離不同顏色之球體，聚焦於斑塊分析。',
            'project.three.tag1': 'Visual Basic 6.0',
            'project.three.tag2': '影像處理',
            'project.three.tag3': '演算法',
            'footer.copy': '© 2024 龍霆. 使用 HTML、CSS 與 JavaScript 製作。',
            'button.theme': '🌙 深色模式',
            'button.lang': 'EN'
        }
    };

    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = (translations[lang] && translations[lang][key]) ? translations[lang][key] : null;
            if (text !== null) {
                // allow simple markup in translations (e.g., <strong>)
                el.innerHTML = text;
            }
        });

        // Some specific mapped IDs (project titles/descriptions)
        const map = [
            { sel: '.projects-grid .project-card:nth-child(1) h4', key: 'project.one.title' },
            { sel: '.projects-grid .project-card:nth-child(1) p', key: 'project.one.desc' },
            { sel: '.projects-grid .project-card:nth-child(2) h4', key: 'project.two.title' },
            { sel: '.projects-grid .project-card:nth-child(2) p', key: 'project.two.desc' },
            { sel: '.projects-grid .project-card:nth-child(3) h4', key: 'project.three.title' },
            { sel: '.projects-grid .project-card:nth-child(3) p', key: 'project.three.desc' }
        ];
        map.forEach(m => {
            const el = document.querySelector(m.sel);
            if (el && translations[lang] && translations[lang][m.key]) el.innerHTML = translations[lang][m.key];
        });

        updateThemeButton();
        // update document title if available
        if (translations[lang] && translations[lang]['title']) document.title = translations[lang]['title'];
    }

    // Initialize language from localStorage or browser settings
    const savedLang = localStorage.getItem('cv-lang') || (navigator.language && navigator.language.startsWith('zh') ? 'zh' : 'en');
    applyTranslations(savedLang);

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            console.log('lang-toggle clicked');
            const current = localStorage.getItem('cv-lang') || 'en';
            const next = current === 'en' ? 'zh' : 'en';
            console.log('lang current', current, '-> next', next);
            localStorage.setItem('cv-lang', next);
            applyTranslations(next);
        });
    }

    // Fallback: event delegation in case direct handler isn't attached
    document.addEventListener('click', function(e) {
        const btn = e.target.closest && e.target.closest('#lang-toggle');
        if (btn) {
            console.log('lang-toggle (delegated) clicked');
            const current = localStorage.getItem('cv-lang') || 'en';
            const next = current === 'en' ? 'zh' : 'en';
            localStorage.setItem('cv-lang', next);
            applyTranslations(next);
        }
    });

    // Ensure theme button label is correct at start
    updateThemeButton();

    console.log('CV website loaded successfully!');
});
