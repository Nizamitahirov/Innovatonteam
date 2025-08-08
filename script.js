document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        az: {
            dept_name: "İnnovasiya və Sistem Davamlılığı",
            nav_hero: "Başlanğıc", nav_about: "Haqqımızda", nav_value: "Dəyərlər", nav_approach: "Yanaşma", nav_tech: "Texnologiyalar", nav_team: "Struktur",
            hero_title: "Dəyişikliyi idarə, <br> Davamlılığı təmin edirik.",
            purpose_statement: "Biznesimizin rəqəmsal potensialını tam reallaşdırmaq, davamlı innovasiyalarla gələcəyə hazırlamaq və texnoloji ekosistemimizin dayanıqlığını təmin edərək dayanıqlı inkişafa təkan vermək üçün varıq.",
            vision_title: "Vizyonumuz",
            vision_text: "Proseslərin ağıllı avtomatlaşdırıldığı, qərarların data əsasında verildiyi və texnoloji innovasiyaların biznes strategiyamızın mərkəzində dayandığı, sənayedə rəqəmsal mükəmməllik etalonu olan bir şirkətə çevrilmək.",
            mission_title: "Missiyamız",
            mission_1: "<strong>İnnovasiya:</strong> Səmərəliliyi artırmaq üçün qabaqcıl texnologiyaları araşdırmaq, tətbiq etmək.",
            mission_2: "<strong>Davamlılıq:</strong> Kritik sistemlərin fasiləsiz, təhlükəsiz və səmərəli işini təmin etmək.",
            mission_3: "<strong>Tərəfdaşlıq:</strong> Biznes hədəflərinə çatmaq üçün departamentlərə xüsusi rəqəmsal həllər təqdim etmək.",
            value_title: "Şirkətə Töhfəmiz",
            value_item1_title: "Artan Səmərəlilik",
            value_item1_text: "Rutin prosesləri avtomatlaşdıraraq əməkdaşların strateji işlərə fokuslanması üçün vaxt qazandırırıq.",
            value_item2_title: "Ağıllı Qərarlar",
            value_item2_text: "Data analizi və vizuallaşdırma ilə rəhbərliyi daha dəqiq və sürətli qərarlar üçün təmin edirik.",
            value_item3_title: "Əməliyyat Dayanıqlığı",
            value_item3_text: "Kritik sistemlərin fasiləsiz işini təmin edərək biznes risklərini minimuma endiririk.",
            approach_title: "Bizim Yanaşmamız: 4-Mərhələli Proses",
            step1_title: "Kəşfiyyat və Analiz",
            step1_text: "Biznes ehtiyaclarını dərindən anlayır, mövcud prosesləri təhlil edir və təkmilləşdirmə imkanlarını müəyyən edirik.",
            step2_title: "Strategiya və Dizayn",
            step2_text: "Ən effektiv həlli dizayn edir, layihə planını və gözlənilən nəticələri təqdim edirik.",
            step3_title: "Tətbiq və İnteqrasiya",
            step3_text: "Həlləri çevik metodologiya ilə hazırlayır, test edir və mövcud sistemlərlə problemsiz inteqrasiya edirik.",
            step4_title: "Dəstək və Davamlılıq",
            step4_text: "Sistemlərin davamlı işini təmin edir, istifadəçilərə dəstək göstərir və daimi optimallaşdırma aparırıq.",
            tech_title: "İstifadə Etdiyimiz Texnologiyalar",
            tech_subtitle: "Biznes məqsədlərinə çatmaq üçün sənayenin qabaqcıl alətlərindən istifadə edirik.",
            tech_cat1: "Avtomatlaşdırma (RPA)",
            tech_cat2: "Data və Analitika",
            tech_cat3: "Əməkdaşlıq və Layihə",
            tech_cat4: "Low-Code/No-Code",
            tech_cat5: "Development",
            tech_cat6: "Cloud Sistemlər",
            team_title: "Komandamızın Strukturu: Çevik və Düz İyerarxiya",
            role_head: "Şöbə Rəhbəri",
            role_head_desc: "Strateji vizyon, komanda liderliyi və biznes tərəfdaşlığı.",
            role_expert: "Ekspert",
            role_expert_desc: "Texniki memarlıq, R&D.",
            role_senior_1: "Böyük Mütəxəssis",
            role_senior_desc_1: "Avtomatlaşdırma layihələri.",
            role_senior_2: "Böyük Mütəxəssis",
            role_senior_desc_2: "Rəqəmsallaşdırma.",
            role_specialist: "Mütəxəssis",
            role_specialist_desc: "Sistem dəstəyi, icra.",
            next_btn: "Növbəti",
            restart_btn: "Yenidən Başla"
        },
        en: {
            dept_name: "Innovation & Systems Sustainability",
            nav_hero: "Intro", nav_about: "About", nav_value: "Value", nav_approach: "Approach", nav_tech: "Tech", nav_team: "Sructure",
            hero_title: "Driving Change. <br> Ensuring Stability.",
            purpose_statement: "We exist to unlock our business's full digital potential, future-proof it through continuous innovation, and drive sustainable growth by ensuring the resilience of our technological ecosystem.",
            vision_title: "Our Vision",
            vision_text: "To become an industry benchmark for digital excellence, where processes are intelligently automated, decisions are data-driven, and technological innovation is at the core of our business strategy.",
            mission_title: "Our Mission",
            mission_1: "<strong>Innovate:</strong> To research and implement cutting-edge technologies to enhance efficiency.",
            mission_2: "<strong>Sustain:</strong> To ensure the uninterrupted, secure, and efficient operation of critical systems.",
            mission_3: "<strong>Partner:</strong> To deliver tailored digital solutions to departments to achieve their business goals.",
            value_title: "Our Value Proposition",
            value_item1_title: "Increased Efficiency",
            value_item1_text: "We save employees' time for strategic work by automating routine processes.",
            value_item2_title: "Smarter Decisions",
            value_item2_text: "We empower leadership with data for more accurate and faster decisions through analysis and visualization.",
            value_item3_title: "Operational Resilience",
            value_item3_text: "We minimize business risks by ensuring the uninterrupted operation of critical systems.",
            approach_title: "Our Approach: A 4-Stage Process",
            step1_title: "Discovery & Analysis",
            step1_text: "We deeply understand business needs, analyze existing processes, and identify opportunities for improvement.",
            step2_title: "Strategy & Design",
            step2_text: "We design the most effective solution, present the project roadmap, and define expected outcomes.",
            step3_title: "Implementation & Integration",
            step3_text: "We develop solutions with agile methodology, conduct thorough testing, and ensure seamless integration.",
            step4_title: "Support & Sustainability",
            step4_text: "We ensure the continuous operation of systems, provide user support, and perform ongoing optimization.",
            tech_title: "Our Technology Stack",
            tech_subtitle: "We leverage industry-leading tools to achieve business objectives.",
            tech_cat1: "Automation (RPA)",
            tech_cat2: "Data & Analytics",
            tech_cat3: "Collaboration & Project",
            tech_cat4: "Low-Code/No-Code",
            tech_cat5: "Development",
            tech_cat6: "Cloud Systems",
            team_title: "Our Team Structure: Flat & Agile",
            role_head: "Head of Department",
            role_head_desc: "Strategic vision, team leadership, and business partnership.",
            role_expert: "Expert",
            role_expert_desc: "Technical architecture, R&D.",
            role_senior_1: "Senior Specialist",
            role_senior_desc_1: "Automation projects.",
            role_senior_2: "Senior Specialist",
            role_senior_desc_2: "Digitalization.",
            role_specialist: "Specialist",
            role_specialist_desc: "System support, execution.",
            next_btn: "Next",
            restart_btn: "Restart"
        }
    };

    const slides = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('.nav-link');
    const nextBtn = document.getElementById('next-btn');
    const langToggle = document.getElementById('lang-toggle');
    const themeToggle = document.getElementById('theme-toggle');

    let currentSectionIndex = 0;
    let currentLang = 'az';

    function showSection(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });

        if (index === slides.length - 1) {
            nextBtn.textContent = translations[currentLang].restart_btn;
        } else {
            nextBtn.textContent = translations[currentLang].next_btn;
        }
        currentSectionIndex = index;
    }

    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentSectionIndex + 1) % slides.length;
        showSection(nextIndex);
    });

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(index);
        });
    });

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        const translation = translations[lang];
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translation[key]) {
                element.innerHTML = translation[key];
            }
        });
        showSection(currentSectionIndex); 
        const langAz = document.querySelector('.lang-az');
        const langEn = document.querySelector('.lang-en');
        langAz.classList.toggle('active', lang === 'az');
        langEn.classList.toggle('active', lang === 'en');
        langToggle.checked = (lang === 'en');
        localStorage.setItem('language', lang);
    }

    langToggle.addEventListener('change', () => {
        setLanguage(langToggle.checked ? 'en' : 'az');
    });

    function setTheme(theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        themeToggle.checked = (theme === 'dark');
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked ? 'dark' : 'light');
    });

    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array.from({ length: columns }).fill(1);

    function draw() {
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--bg-color') + '0D';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--primary-color');
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }
    const matrixInterval = setInterval(draw, 40);

    function initialize() {
        const savedLang = localStorage.getItem('language') || 'az';
        setLanguage(savedLang);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        showSection(0);
    }

    initialize();
});
