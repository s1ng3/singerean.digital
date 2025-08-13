const langDropdownBtn = document.getElementById('lang-dropdown-btn');
const langDropdownMenu = document.getElementById('lang-dropdown-menu');
const langOptions = document.querySelectorAll('.lang-option');

const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-research': 'Research',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'Cybersecurity Engineering Master\'s Student',
        'hero-description-1': '• Passionate about technology, entrepreneurship, and software engineering.',
        'hero-description-2': '• Studying at Technical University of Cluj-Napoca.',
        'get-in-touch': 'Get in Touch',
        'preview-cv': 'Preview CV',
        'about-title': 'About Me',
        'about-text-1': 'I\'m a highly motivated and ambitious student at the Technical University of Cluj-Napoca, specializing in',
        'about-text-2': 'Cybersecurity Engineering',
        'about-text-3': 'My passion lies in technology, entrepreneurship, and software engineering.',
        'about-text-4': 'Currently, I\'m focusing on improving my skills in',
        'about-text-5': 'Rust',
        'about-text-6': 'and exploring various technologies, and web development. I\'m excited to start my career in software engineering and contribute to innovative projects.',
        'about-text-7': 'Based in',
        'about-text-8': 'Cluj-Napoca',
        'about-text-9': 'I\'m always looking for opportunities to learn, grow, and collaborate on interesting projects.',
        'years-experience': 'Years Experience',
        'projects-completed': 'Projects Completed',
        'technologies': 'Technologies',
        'research-papers': 'Research Papers',
        'experience-title': 'Work Experience',
        'education-title': 'Education',
        'research-title': 'Research & Publications',
        'projects-title': 'Featured Projects',
        'skills-title': 'Skills & Technologies',
        'contact-title': 'Get In Touch',
        
        'job-title-ntt': 'Infrastructure & Platform Services - Working Student',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'Part-time',
        'date-ntt': 'December 2024 - Present',
        'location-cluj': 'Cluj-Napoca, Cluj, Romania',
        'work-arrangement-remote': 'Remote',
        'skill-linux': 'Linux',
        'skill-network-design': 'Network Design',
        'skill-infrastructure': 'Infrastructure',
        'job-title-bitdefender': 'Junior Software Engineer',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'Internship',
        'date-bitdefender': 'July 2024 - September 2024 (3 months)',
        'work-arrangement-hybrid': 'Hybrid',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'Software Engineering',
        
        'degree-title-masters': 'Master of Science - M.Sc, Cybersecurity Engineering',
        'university-name': 'Technical University of Cluj Napoca',
        'education-date-masters': 'July 2025 - July 2027',
        'education-status-in-progress': 'In Progress',
        'education-description-masters': 'Specialized program focusing on advanced cybersecurity concepts, network security, and digital forensics.',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, Automation & Computer Science',
        'education-date-bachelors': 'October 2021 - July 2025',
        'education-grade': 'Grade: 10/10',
        'education-status-completed': 'Completed',
        'education-description-bachelors': 'Comprehensive program covering automation systems, computer science fundamentals, and engineering principles.',
        'achievements-title': 'Key Achievements:',
        'achievement-1': 'Outstanding academic performance',
        'achievement-2': 'Active participation in technical projects and research',
        'achievement-3': 'Strong foundation in both theoretical and practical engineering concepts',
        
        'research-paper-title': 'Development of a Comprehensive Process Management and Optimization System Using the Windows API',
        'research-date': '2025',
        'research-institution': 'Technical University of Cluj-Napoca',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': 'Research Paper',
        'abstract-title': 'Abstract',
        'abstract-1': 'Modern operating systems manage a varied set of processes, demanding sophisticated tools for supervision, management, and optimization to ensure system stability and performance. This paper describes the structure and theoretical foundations of a complete process management and performance optimization system using the functions of the Windows Application Programming Interface.',
        'abstract-2': 'The system presented here is meant to provide detailed information on process behavior, resource usage (CPU, memory, I/O), and inter-process relationships, with the ability for dynamic parameter-informed enhancement through experiential insight.',
        'abstract-3': 'Key Windows APIs for process enumeration and resource querying (including Performance Data Helper - PDH), prioritization, and exploring affinities such as alteration, memory resource management, and inter-process communication, form a fundamental part of the system architecture.',
        'abstract-4': 'While several existing tools offer resource insights (e.g., Task Manager, Process Hacker), they often lack extensibility, dynamic rule-based controls, and integrated heuristic engines. Our system addresses this gap through a multi-layered, API-centric architecture that emphasizes process behavior modeling and real-time optimization.',
        'keywords-title': 'Keywords',
        'keyword-process-management': 'Process Management',
        'keyword-system-optimization': 'System Optimization',
        'keyword-windows-api': 'Windows API',
        'keyword-performance-monitoring': 'Performance Monitoring',
        'keyword-resource-management': 'Resource Management',
        'keyword-pdh': 'PDH',
        'preview-paper': 'Preview Paper',
        'download-pdf': 'Download PDF',
        
        'project-title-1': 'Process Monitoring Application',
        'project-description-1': 'Real-time system monitoring tool for tracking processes, file system, registry, and network activities.',
        'project-title-2': 'SoBuddy',
        'project-description-2': 'Modern web platform for social networking and community building with advanced features.',
        'project-title-3': 'User Evaluation System',
        'project-description-3': 'Comprehensive system for evaluating user interactions and feedback analysis.',
        'project-title-4': 'Stock Portfolio Management',
        'project-description-4': 'Comprehensive Java application with secure authentication and real-time data integration through APIs.',
        'project-title-5': 'Air Traffic Control System',
        'project-description-5': 'Simplified air traffic control system in Java for managing airplanes and flight operations.',
        'project-title-6': 'Cat Blog Post App',
        'project-description-6': 'Interactive web application for creating and sharing cat-related blog posts and content.',
        'view-details': 'View Details',
        
        'skill-java': 'Java',
        'skill-java-description': 'Advanced proficiency in Java development with Spring framework and Lombok',
        'skill-python': 'Python',
        'skill-python-description': 'Data analysis and automation scripting',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'Systems programming and performance-critical applications',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Unity development and .NET applications',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Web development and Node.js applications',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'Responsive web design and modern CSS techniques',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'Database design and management',
        'skill-git': 'Git',
        'skill-git-description': 'Version control and collaborative development',
        'skill-blender': 'Blender',
        'skill-blender-description': '3D modeling and visualization',
        'skill-unity': 'Unity',
        'skill-unity-description': 'Game development and 3D applications',
        
        'contact-connect-title': 'Let\'s Connect',
        'contact-connect-description-1': 'I\'m always interested in new opportunities and collaborations.',
        'contact-connect-description-2': 'Feel free to reach out!',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'Cluj-Napoca, Romania',
        'contact-university': 'Technical University of Cluj-Napoca',
        'form-name-label': 'Name',
        'form-email-label': 'Email',
        'form-subject-label': 'Subject',
        'form-message-label': 'Message',
        'form-submit': 'Send Message',
        'form-success': 'Message sent successfully!',
        'form-error': 'Failed to send message. Please try again.',
        'form-validation-required': 'Please fill in all fields',
        'form-validation-email': 'Please enter a valid email address',
        'form-rate-limit': 'Please wait {seconds} seconds before sending another message',
        
        'cv-modal-title': 'Curriculum Vitae',
        'cv-download': 'Download CV',
        'cv-print': 'Print',
        'research-modal-title': 'Development of a Comprehensive Process Management and Optimization System Using the Windows API',
        'research-download': 'Download Paper',
        'research-print': 'Print',
        
        'project-modal-title-1': 'Process Monitoring Application',
        'project-modal-description-1': 'A comprehensive real-time system monitoring application that tracks and logs processes, file system, registry, and network activities. This application helps in troubleshooting, performance analysis, and system security monitoring.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Modern web platform for social networking and community building with advanced features. Built with modern web technologies for a seamless user experience.',
        'project-modal-title-3': 'User Evaluation System',
        'project-modal-description-3': 'A comprehensive system designed for evaluating user interactions and feedback analysis. This application provides detailed insights into user behavior and interaction patterns.',
        'project-modal-title-4': 'Stock Portfolio Management',
        'project-modal-description-4': 'A comprehensive Java application with secure authentication and real-time data integration through APIs. Features advanced portfolio tracking and analysis tools.',
        'project-modal-title-5': 'Air Traffic Control System',
        'project-modal-description-5': 'A simplified air traffic control system built in Java for managing airplanes and flight operations. Includes real-time flight tracking and safety protocols.',
        'project-modal-title-6': 'Cat Blog Post App',
        'project-modal-description-6': 'An interactive web application for creating and sharing cat-related blog posts and content. Features user-friendly interface and social sharing capabilities.',
        'project-modal-close': '×',
        'project-modal-view-live': 'View Live',
        'project-modal-view-code': 'View Code',
        'project-modal-technologies-title': 'Technologies Used:',
        'project-modal-view-github': 'View on GitHub'
    },
    ro: {
        'nav-home': 'Acasă',
        'nav-about': 'Despre',
        'nav-experience': 'Experiență',
        'nav-education': 'Educație',
        'nav-research': 'Cercetare',
        'nav-projects': 'Proiecte',
        'nav-skills': 'Competențe',
        'nav-contact': 'Contact',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'Student Masterat Inginerie Securitate Cibernetică',
        'hero-description-1': '• Pasionat de tehnologie, antreprenoriat și inginerie software.',
        'hero-description-2': '• Studiez la Universitatea Tehnică din Cluj-Napoca.',
        'get-in-touch': 'Ia Legătura',
        'preview-cv': 'Previzualizare CV',
        'about-title': 'Despre Mine',
        'about-text-1': 'Sunt un student foarte motivat și ambițios la Universitatea Tehnică din Cluj-Napoca, specializându-mă în',
        'about-text-2': 'Inginerie Securitate Cibernetică',
        'about-text-3': 'Pasiunea mea se concentrează pe tehnologie, antreprenoriat și inginerie software.',
        'about-text-4': 'În prezent, mă concentrez pe îmbunătățirea abilităților în',
        'about-text-5': 'Rust',
        'about-text-6': 'și explorarea diverselor tehnologii și dezvoltare web. Sunt entuziasmat să îmi încep cariera în inginerie software și să contribui la proiecte inovatoare.',
        'about-text-7': 'Bazat în',
        'about-text-8': 'Cluj-Napoca',
        'about-text-9': 'Întotdeauna caut oportunități să învăț, să cresc și să colaborez la proiecte interesante.',
        'years-experience': 'Ani Experiență',
        'projects-completed': 'Proiecte Finalizate',
        'technologies': 'Tehnologii',
        'research-papers': 'Lucrări Cercetare',
        'experience-title': 'Experiență de Lucru',
        'education-title': 'Educație',
        'research-title': 'Cercetare & Publicații',
        'projects-title': 'Proiecte',
        'skills-title': 'Competențe',
        'contact-title': 'Contact',
        
        'job-title-ntt': 'Infrastructură și Servicii Platformă - Student Muncitor',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'Part-time',
        'date-ntt': 'Decembrie 2024 - Prezent',
        'location-cluj': 'Cluj-Napoca, Cluj, România',
        'work-arrangement-remote': 'Remote',
        'skill-linux': 'Linux',
        'skill-network-design': 'Design Rețea',
        'skill-infrastructure': 'Infrastructură',
        'job-title-bitdefender': 'Inginer Software Junior',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'Internship',
        'date-bitdefender': 'Iulie 2024 - Septembrie 2024 (3 luni)',
        'work-arrangement-hybrid': 'Hibrid',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'Inginerie Software',
        
        'research-paper-title': 'Dezvoltarea unui Sistem Complet de Gestionare și Optimizare a Proceselor Folosind API-ul Windows',
        'research-date': '2025',
        'research-institution': 'Universitatea Tehnică din Cluj-Napoca',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': 'Lucrare de Cercetare',
        'abstract-title': 'Rezumat',
        'abstract-1': 'Sistemele de operare moderne gestionează un set variat de procese, necesitând instrumente sofisticate pentru supervizare, gestionare și optimizare pentru a asigura stabilitatea și performanța sistemului. Această lucrare descrie structura și fundamentele teoretice ale unui sistem complet de gestionare și optimizare a performanței proceselor folosind funcțiile API-ului de Programare a Aplicațiilor Windows.',
        'abstract-2': 'Sistemul prezentat aici este destinat să ofere informații detaliate despre comportamentul proceselor, utilizarea resurselor (CPU, memorie, I/O) și relațiile inter-procese, cu capacitatea de îmbunătățire dinamică informată de parametri prin înțelegerea experiențială.',
        'abstract-3': 'API-urile Windows cheie pentru enumerarea proceselor și interogarea resurselor (inclusiv Performance Data Helper - PDH), prioritizarea și explorarea afinităților precum alterarea, gestionarea resurselor de memorie și comunicarea inter-procese, formează o parte fundamentală a arhitecturii sistemului.',
        'abstract-4': 'Deși mai multe instrumente existente oferă informații despre resurse (ex. Task Manager, Process Hacker), acestea adesea lipsesc extensibilitatea, controalele dinamice bazate pe reguli și motoarele euristice integrate. Sistemul nostru abordează această lacună printr-o arhitectură multi-nivel, centrată pe API, care evidențiază modelarea comportamentului proceselor și optimizarea în timp real.',
        'keywords-title': 'Cuvinte cheie',
        'keyword-process-management': 'Gestionarea Proceselor',
        'keyword-system-optimization': 'Optimizarea Sistemului',
        'keyword-windows-api': 'API Windows',
        'keyword-performance-monitoring': 'Monitorizarea Performanței',
        'keyword-resource-management': 'Gestionarea Resurselor',
        'keyword-pdh': 'PDH',
        'preview-paper': 'Previzualizare Lucrare',
        'download-pdf': 'Descarcă PDF',
        
        'degree-title-masters': 'Master of Science - M.Sc, Inginerie Securitate Cibernetică',
        'university-name': 'Universitatea Tehnică din Cluj Napoca',
        'education-date-masters': 'Iulie 2025 - Iulie 2027',
        'education-status-in-progress': 'În Curs',
        'education-description-masters': 'Program specializat concentrat pe concepte avansate de securitate cibernetică, securitate de rețea și informatică forensică.',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, Automatizare și Știința Calculatoarelor',
        'education-date-bachelors': 'Octombrie 2021 - Iulie 2025',
        'education-grade': 'Nota: 10/10',
        'education-status-completed': 'Finalizat',
        'education-description-bachelors': 'Program comprehensiv acoperind sisteme de automatizare, fundamentale ale științei calculatoarelor și principii de inginerie.',
        'achievements-title': 'Realizări Cheie:',
        'achievement-1': 'Performanță academică excepțională',
        'achievement-2': 'Participare activă în proiecte tehnice și cercetare',
        'achievement-3': 'Fundament puternic atât în concepte teoretice cât și practice de inginerie',
        
        'project-title-1': 'Aplicație de Monitorizare a Proceselor',
        'project-description-1': 'Instrument de monitorizare a sistemului în timp real pentru urmărirea proceselor, sistemului de fișiere, registrului și activităților de rețea.',
        'project-title-2': 'SoBuddy',
        'project-description-2': 'Platformă web modernă pentru rețele sociale și construirea comunităților cu funcții avansate.',
        'project-title-3': 'Sistem de Evaluare a Utilizatorilor',
        'project-description-3': 'Sistem comprehensiv pentru evaluarea interacțiunilor utilizatorilor și analiza feedback-ului.',
        'project-title-4': 'Gestionarea Portofoliului de Acțiuni',
        'project-description-4': 'Aplicație Java comprehensivă cu autentificare securizată și integrare de date în timp real prin API-uri.',
        'project-title-5': 'Sistem de Control al Traficului Aerian',
        'project-description-5': 'Sistem simplificat de control al traficului aerian în Java pentru gestionarea avioanelor și operațiunilor de zbor.',
        'project-title-6': 'Aplicația de Blog pentru Pisici',
        'project-description-6': 'Aplicație web interactivă pentru crearea și partajarea postărilor de blog și conținut legat de pisici.',
        'view-details': 'Vezi Detalii',
        

        'project-modal-title-1': 'Aplicație de Monitorizare a Proceselor',
        'project-modal-description-1': 'O aplicație comprehensivă de monitorizare a sistemului în timp real care urmărește și înregistrează procese, sistem de fișiere, registru și activități de rețea. Această aplicație ajută la depanare, analiza performanței și monitorizarea securității sistemului.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Platformă web modernă pentru rețele sociale și construirea comunităților cu funcții avansate. Construită cu tehnologii web moderne pentru o experiență de utilizare fără probleme.',
        'project-modal-title-3': 'Sistem de Evaluare a Utilizatorilor',
        'project-modal-description-3': 'Un sistem comprehensiv conceput pentru evaluarea interacțiunilor utilizatorilor și analiza feedback-ului. Această aplicație oferă informații detaliate despre comportamentul utilizatorilor și modelele de interacțiune.',
        'project-modal-title-4': 'Gestionarea Portofoliului de Acțiuni',
        'project-modal-description-4': 'O aplicație Java comprehensivă cu autentificare securizată și integrare de date în timp real prin API-uri. Include instrumente avansate de urmărire și analiză a portofoliului.',
        'project-modal-title-5': 'Sistem de Control al Traficului Aerian',
        'project-modal-description-5': 'Un sistem simplificat de control al traficului aerian construit în Java pentru gestionarea avioanelor și operațiunilor de zbor. Include urmărirea zborurilor în timp real și protocoale de siguranță.',
        'project-modal-title-6': 'Aplicația de Blog pentru Pisici',
        'project-modal-description-6': 'O aplicație web interactivă pentru crearea și partajarea postărilor de blog și conținut legat de pisici. Include interfață prietenoasă și capacități de partajare socială.',
        'project-modal-close': 'Închide',
        'project-modal-view-live': 'Vezi Live',
        'project-modal-view-code': 'Vezi Codul',
        'project-modal-technologies-title': 'Tehnologii Utilizate:',
        'project-modal-view-github': 'Vezi pe GitHub',
        
        'project-modal-title-1': 'Aplicație de Monitorizare a Proceselor',
        'project-modal-description-1': 'O aplicație comprehensivă de monitorizare a sistemului în timp real care urmărește și înregistrează procese, sistem de fișiere, registru și activități de rețea. Această aplicație ajută la depanare, analiza performanței și monitorizarea securității sistemului.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Platformă web modernă pentru rețele sociale și construirea comunităților cu funcții avansate. Construită cu tehnologii web moderne pentru o experiență de utilizare fără probleme.',
        'project-modal-title-3': 'Sistem de Evaluare a Utilizatorilor',
        'project-modal-description-3': 'Un sistem comprehensiv conceput pentru evaluarea interacțiunilor utilizatorilor și analiza feedback-ului. Această aplicație oferă informații detaliate despre comportamentul utilizatorilor și modelele de interacțiune.',
        'project-modal-title-4': 'Gestionarea Portofoliului de Acțiuni',
        'project-modal-description-4': 'O aplicație Java comprehensivă cu autentificare securizată și integrare de date în timp real prin API-uri. Include instrumente avansate de urmărire și analiză a portofoliului.',
        'project-modal-title-5': 'Sistem de Control al Traficului Aerian',
        'project-modal-description-5': 'Un sistem simplificat de control al traficului aerian construit în Java pentru gestionarea avioanelor și operațiunilor de zbor. Include urmărirea zborurilor în timp real și protocoale de siguranță.',
        'project-modal-title-6': 'Aplicația de Blog pentru Pisici',
        'project-modal-description-6': 'O aplicație web interactivă pentru crearea și partajarea postărilor de blog și conținut legat de pisici. Include interfață prietenoasă și capacități de partajare socială.',
        'project-modal-close': '×',
        'project-modal-view-live': 'Vezi Live',
        'project-modal-view-code': 'Vezi Codul',
        'project-modal-technologies-title': 'Tehnologii Utilizate:',
        'project-modal-view-github': 'Vezi pe GitHub',
        
        'contact-connect-title': 'Să Ne Conectăm',
        'contact-connect-description-1': 'Sunt întotdeauna interesat de oportunități noi și colaborări.',
        'contact-connect-description-2': 'Nu ezita să mă contactezi!',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'Cluj-Napoca, România',
        'contact-university': 'Universitatea Tehnică din Cluj-Napoca',
        'form-name-label': 'Nume',
        'form-email-label': 'Email',
        'form-subject-label': 'Subiect',
        'form-message-label': 'Mesaj',
        'form-submit': 'Trimite Mesaj',
        'form-success': 'Mesajul a fost trimis cu succes!',
        'form-error': 'Eșec la trimiterea mesajului. Vă rugăm să încercați din nou.',
        'form-validation-required': 'Vă rugăm să completați toate câmpurile',
        'form-validation-email': 'Vă rugăm să introduceți o adresă de email validă',
        'form-rate-limit': 'Vă rugăm să așteptați {seconds} secunde înainte de a trimite un alt mesaj',
        
        'skill-java': 'Java',
        'skill-java-description': 'Competențe avansate în dezvoltarea Java cu framework-ul Spring și Lombok',
        'skill-python': 'Python',
        'skill-python-description': 'Analiza datelor și scripting pentru automatizare',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'Programare de sisteme și aplicații critice pentru performanță',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Dezvoltare Unity și aplicații .NET',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Dezvoltare web și aplicații Node.js',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'Design web responsive și tehnici CSS moderne',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'Design și gestionarea bazelor de date',
        'skill-git': 'Git',
        'skill-git-description': 'Controlul versiunilor și dezvoltarea colaborativă',
        'skill-blender': 'Blender',
        'skill-blender-description': 'Modelare 3D și vizualizare',
        'skill-unity': 'Unity',
        'skill-unity-description': 'Dezvoltare de jocuri și aplicații 3D'
    },
    de: {
        'nav-home': 'Startseite',
        'nav-about': 'Über mich',
        'nav-experience': 'Erfahrung',
        'nav-education': 'Bildung',
        'nav-research': 'Forschung',
        'nav-projects': 'Projekte',
        'nav-skills': 'Fähigkeiten',
        'nav-contact': 'Kontakt',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'Masterstudent für Cybersicherheitstechnik',
        'hero-description-1': '• Leidenschaftlich für Technologie, Unternehmertum und Softwareentwicklung.',
        'hero-description-2': '• Studiere an der Technischen Universität Cluj-Napoca.',
        'get-in-touch': 'Kontakt aufnehmen',
        'preview-cv': 'Lebenslauf anzeigen',
        'about-title': 'Über mich',
        'about-text-1': 'Ich bin ein hochmotivierter und ehrgeiziger Student an der Technischen Universität Cluj-Napoca, spezialisiert auf',
        'about-text-2': 'Cybersicherheitstechnik',
        'about-text-3': 'Meine Leidenschaft liegt in Technologie, Unternehmertum und Softwareentwicklung.',
        'about-text-4': 'Derzeit konzentriere ich mich auf die Verbesserung meiner Fähigkeiten in',
        'about-text-5': 'Rust',
        'about-text-6': 'und die Erforschung verschiedener Technologien und Webentwicklung. Ich freue mich darauf, meine Karriere in der Softwareentwicklung zu beginnen und zu innovativen Projekten beizutragen.',
        'about-text-7': 'Ansässig in',
        'about-text-8': 'Cluj-Napoca',
        'about-text-9': 'Ich suche immer nach Möglichkeiten zu lernen, zu wachsen und an interessanten Projekten zu arbeiten.',
        'years-experience': 'Jahre Erfahrung',
        'projects-completed': 'Abgeschlossene Projekte',
        'technologies': 'Technologien',
        'research-papers': 'Forschungsarbeiten',
        'experience-title': 'Berufserfahrung',
        'education-title': 'Bildung',
        'research-title': 'Forschung & Publikationen',
        'projects-title': 'Projekte',
        'skills-title': 'Fähigkeiten',
        'contact-title': 'Kontakt',
        
        'job-title-ntt': 'Infrastruktur & Plattform-Services - Werkstudent',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'Teilzeit',
        'date-ntt': 'Dezember 2024 - Gegenwärtig',
        'location-cluj': 'Cluj-Napoca, Cluj, Rumänien',
        'work-arrangement-remote': 'Remote',
        'skill-linux': 'Linux',
        'skill-network-design': 'Netzwerk-Design',
        'skill-infrastructure': 'Infrastruktur',
        'job-title-bitdefender': 'Junior Software Engineer',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'Praktikum',
        'date-bitdefender': 'Juli 2024 - September 2024 (3 Monate)',
        'work-arrangement-hybrid': 'Hybrid',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'Software-Entwicklung',
        
        'research-paper-title': 'Entwicklung eines umfassenden Prozessmanagement- und Optimierungssystems unter Verwendung der Windows API',
        'research-date': '2025',
        'research-institution': 'Technische Universität Cluj-Napoca',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': 'Forschungsarbeit',
        'abstract-title': 'Zusammenfassung',
        'abstract-1': 'Moderne Betriebssysteme verwalten eine Vielzahl von Prozessen und benötigen ausgefeilte Tools für Überwachung, Verwaltung und Optimierung, um Systemstabilität und -leistung zu gewährleisten. Diese Arbeit beschreibt die Struktur und theoretischen Grundlagen eines vollständigen Prozessmanagement- und Leistungsoptimierungssystems unter Verwendung der Funktionen der Windows Application Programming Interface.',
        'abstract-2': 'Das hier vorgestellte System soll detaillierte Informationen über Prozessverhalten, Ressourcennutzung (CPU, Speicher, I/O) und interprozessuale Beziehungen liefern, mit der Fähigkeit zur dynamischen parameterinformierten Verbesserung durch Erfahrungswissen.',
        'abstract-3': 'Wichtige Windows APIs für Prozessenumeration und Ressourcenabfrage (einschließlich Performance Data Helper - PDH), Priorisierung und Erforschung von Affinitäten wie Änderung, Speicherressourcenverwaltung und interprozessuale Kommunikation bilden einen grundlegenden Teil der Systemarchitektur.',
        'abstract-4': 'Während mehrere bestehende Tools Ressourceneinblicke bieten (z.B. Task Manager, Process Hacker), fehlt ihnen oft Erweiterbarkeit, dynamische regelbasierte Steuerungen und integrierte heuristische Engines. Unser System behebt diese Lücke durch eine mehrschichtige, API-zentrierte Architektur, die Prozessverhaltensmodellierung und Echtzeitoptimierung betont.',
        'keywords-title': 'Schlüsselwörter',
        'keyword-process-management': 'Prozessmanagement',
        'keyword-system-optimization': 'Systemoptimierung',
        'keyword-windows-api': 'Windows API',
        'keyword-performance-monitoring': 'Leistungsüberwachung',
        'keyword-resource-management': 'Ressourcenverwaltung',
        'keyword-pdh': 'PDH',
        'preview-paper': 'Arbeit anzeigen',
        'download-pdf': 'PDF herunterladen',
        
        'degree-title-masters': 'Master of Science - M.Sc, Cybersicherheitstechnik',
        'university-name': 'Technische Universität Cluj Napoca',
        'education-date-masters': 'Juli 2025 - Juli 2027',
        'education-status-in-progress': 'In Bearbeitung',
        'education-description-masters': 'Spezialisiertes Programm mit Fokus auf fortgeschrittene Cybersicherheitskonzepte, Netzwerksicherheit und digitale Forensik.',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, Automatisierung und Informatik',
        'education-date-bachelors': 'Oktober 2021 - Juli 2025',
        'education-grade': 'Note: 10/10',
        'education-status-completed': 'Abgeschlossen',
        'education-description-bachelors': 'Umfassendes Programm, das Automatisierungssysteme, Informatikgrundlagen und Ingenieurprinzipien abdeckt.',
        'achievements-title': 'Wichtige Erfolge:',
        'achievement-1': 'Hervorragende akademische Leistung',
        'achievement-2': 'Aktive Teilnahme an technischen Projekten und Forschung',
        'achievement-3': 'Starke Grundlage sowohl in theoretischen als auch praktischen Ingenieurkonzepten',
        
        'project-title-1': 'Prozessüberwachungsanwendung',
        'project-description-1': 'Echtzeit-Systemüberwachungstool zur Verfolgung von Prozessen, Dateisystem, Registrierung und Netzwerkaktivitäten.',
        'project-title-2': 'SoBuddy',
        'project-description-2': 'Moderne Webplattform für soziale Netzwerke und Community-Aufbau mit erweiterten Funktionen.',
        'project-title-3': 'Benutzerbewertungssystem',
        'project-description-3': 'Umfassendes System zur Bewertung von Benutzerinteraktionen und Feedback-Analyse.',
        'project-title-4': 'Aktienportfolio-Management',
        'project-description-4': 'Umfassende Java-Anwendung mit sicherer Authentifizierung und Echtzeit-Datenintegration über APIs.',
        'project-title-5': 'Flugverkehrskontrollsystem',
        'project-description-5': 'Vereinfachtes Flugverkehrskontrollsystem in Java zur Verwaltung von Flugzeugen und Flugbetrieb.',
        'project-title-6': 'Katzen-Blog-App',
        'project-description-6': 'Interaktive Webanwendung zum Erstellen und Teilen von katzenbezogenen Blog-Beiträgen und Inhalten.',
        'view-details': 'Details anzeigen',
        
        'project-modal-title-1': 'Prozessüberwachungsanwendung',
        'project-modal-description-1': 'Eine umfassende Echtzeit-Systemüberwachungsanwendung, die Prozesse, Dateisystem, Registrierung und Netzwerkaktivitäten verfolgt und protokolliert. Diese Anwendung hilft bei der Fehlerbehebung, Leistungsanalyse und Systemüberwachung.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Moderne Webplattform für soziale Netzwerke und Community-Aufbau mit erweiterten Funktionen. Gebaut mit modernen Webtechnologien für eine nahtlose Benutzererfahrung.',
        'project-modal-title-3': 'Benutzerbewertungssystem',
        'project-modal-description-3': 'Ein umfassendes System zur Bewertung von Benutzerinteraktionen und Feedback-Analyse. Diese Anwendung bietet detaillierte Einblicke in Benutzerverhalten und Interaktionsmuster.',
        'project-modal-title-4': 'Aktienportfolio-Management',
        'project-modal-description-4': 'Eine umfassende Java-Anwendung mit sicherer Authentifizierung und Echtzeit-Datenintegration über APIs. Enthält erweiterte Portfolio-Tracking- und Analysetools.',
        'project-modal-title-5': 'Flugverkehrskontrollsystem',
        'project-modal-description-5': 'Ein vereinfachtes Flugverkehrskontrollsystem in Java zur Verwaltung von Flugzeugen und Flugbetrieb. Enthält Echtzeit-Flugverfolgung und Sicherheitsprotokolle.',
        'project-modal-title-6': 'Katzen-Blog-App',
        'project-modal-description-6': 'Eine interaktive Webanwendung zum Erstellen und Teilen von katzenbezogenen Blog-Beiträgen und Inhalten. Enthält benutzerfreundliche Oberfläche und Social-Sharing-Funktionen.',
        'project-modal-close': 'Schließen',
        'project-modal-view-live': 'Live anzeigen',
        'project-modal-view-code': 'Code anzeigen',
        'project-modal-technologies-title': 'Verwendete Technologien:',
        'project-modal-view-github': 'Auf GitHub anzeigen',
        
        'project-modal-title-1': 'Prozessüberwachungsanwendung',
        'project-modal-description-1': 'Eine umfassende Echtzeit-Systemüberwachungsanwendung, die Prozesse, Dateisystem, Registrierung und Netzwerkaktivitäten verfolgt und protokolliert. Diese Anwendung hilft bei der Fehlerbehebung, Leistungsanalyse und Systemüberwachung.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Moderne Webplattform für soziale Netzwerke und Community-Aufbau mit erweiterten Funktionen. Gebaut mit modernen Webtechnologien für eine nahtlose Benutzererfahrung.',
        'project-modal-title-3': 'Benutzerbewertungssystem',
        'project-modal-description-3': 'Ein umfassendes System zur Bewertung von Benutzerinteraktionen und Feedback-Analyse. Diese Anwendung bietet detaillierte Einblicke in Benutzerverhalten und Interaktionsmuster.',
        'project-modal-title-4': 'Aktienportfolio-Management',
        'project-modal-description-4': 'Eine umfassende Java-Anwendung mit sicherer Authentifizierung und Echtzeit-Datenintegration über APIs. Enthält erweiterte Portfolio-Tracking- und Analysetools.',
        'project-modal-title-5': 'Flugverkehrskontrollsystem',
        'project-modal-description-5': 'Ein vereinfachtes Flugverkehrskontrollsystem in Java zur Verwaltung von Flugzeugen und Flugbetrieb. Enthält Echtzeit-Flugverfolgung und Sicherheitsprotokolle.',
        'project-modal-title-6': 'Katzen-Blog-App',
        'project-modal-description-6': 'Eine interaktive Webanwendung zum Erstellen und Teilen von katzenbezogenen Blog-Beiträgen und Inhalten. Enthält benutzerfreundliche Oberfläche und Social-Sharing-Funktionen.',
        'project-modal-close': '×',
        'project-modal-view-live': 'Live anzeigen',
        'project-modal-view-code': 'Code anzeigen',
        'project-modal-technologies-title': 'Verwendete Technologien:',
        'project-modal-view-github': 'Auf GitHub anzeigen',
        
        'contact-connect-title': 'Lass uns in Verbindung bleiben',
        'contact-connect-description-1': 'Ich bin immer an neuen Möglichkeiten und Kooperationen interessiert.',
        'contact-connect-description-2': 'Zögere nicht, mich zu kontaktieren!',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'Cluj-Napoca, Rumänien',
        'contact-university': 'Technische Universität Cluj-Napoca',
        'form-name-label': 'Name',
        'form-email-label': 'E-Mail',
        'form-subject-label': 'Betreff',
        'form-message-label': 'Nachricht',
        'form-submit': 'Nachricht senden',
        'form-success': 'Nachricht erfolgreich gesendet!',
        'form-error': 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
        'form-validation-required': 'Bitte füllen Sie alle Felder aus',
        'form-validation-email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        'form-rate-limit': 'Bitte warten Sie {seconds} Sekunden, bevor Sie eine weitere Nachricht senden',
        
        'skill-java': 'Java',
        'skill-java-description': 'Fortgeschrittene Kenntnisse in Java-Entwicklung mit Spring Framework und Lombok',
        'skill-python': 'Python',
        'skill-python-description': 'Datenanalyse und Automatisierungsscripting',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'Systemprogrammierung und leistungskritische Anwendungen',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Unity-Entwicklung und .NET-Anwendungen',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Webentwicklung und Node.js-Anwendungen',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'Responsive Webdesign und moderne CSS-Techniken',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'Datenbankdesign und -verwaltung',
        'skill-git': 'Git',
        'skill-git-description': 'Versionskontrolle und kollaborative Entwicklung',
        'skill-blender': 'Blender',
        'skill-blender-description': '3D-Modellierung und Visualisierung',
        'skill-unity': 'Unity',
        'skill-unity-description': 'Spieleentwicklung und 3D-Anwendungen'
    },
    fr: {
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-experience': 'Expérience',
        'nav-education': 'Éducation',
        'nav-research': 'Recherche',
        'nav-projects': 'Projets',
        'nav-skills': 'Compétences',
        'nav-contact': 'Contact',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'Étudiant en Master d\'Ingénierie Cybersécurité',
        'hero-description-1': '• Passionné par la technologie, l\'entrepreneuriat et l\'ingénierie logicielle.',
        'hero-description-2': '• Étudiant à l\'Université Technique de Cluj-Napoca.',
        'get-in-touch': 'Me contacter',
        'preview-cv': 'Aperçu CV',
        'about-title': 'À propos de moi',
        'about-text-1': 'Je suis un étudiant très motivé et ambitieux à l\'Université Technique de Cluj-Napoca, spécialisé en',
        'about-text-2': 'Ingénierie Cybersécurité',
        'about-text-3': 'Ma passion réside dans la technologie, l\'entrepreneuriat et l\'ingénierie logicielle.',
        'about-text-4': 'Actuellement, je me concentre sur l\'amélioration de mes compétences en',
        'about-text-5': 'Rust',
        'about-text-6': 'et l\'exploration de diverses technologies et du développement web. Je suis enthousiaste à l\'idée de commencer ma carrière en ingénierie logicielle et de contribuer à des projets innovants.',
        'about-text-7': 'Basé à',
        'about-text-8': 'Cluj-Napoca',
        'about-text-9': 'Je cherche toujours des opportunités d\'apprendre, de grandir et de collaborer sur des projets intéressants.',
        'years-experience': 'Années d\'Expérience',
        'projects-completed': 'Projets Terminés',
        'technologies': 'Technologies',
        'research-papers': 'Articles de Recherche',
        'experience-title': 'Expérience Professionnelle',
        'education-title': 'Éducation',
        'research-title': 'Recherche & Publications',
        'projects-title': 'Projets',
        'skills-title': 'Compétences',
        'contact-title': 'Contact',
        
        'job-title-ntt': 'Infrastructure & Services de Plateforme - Étudiant Travailleur',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'Temps partiel',
        'date-ntt': 'Décembre 2024 - Présent',
        'location-cluj': 'Cluj-Napoca, Cluj, Roumanie',
        'work-arrangement-remote': 'Télétravail',
        'skill-linux': 'Linux',
        'skill-network-design': 'Conception de Réseau',
        'skill-infrastructure': 'Infrastructure',
        'job-title-bitdefender': 'Ingénieur Logiciel Junior',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'Stage',
        'date-bitdefender': 'Juillet 2024 - Septembre 2024 (3 mois)',
        'work-arrangement-hybrid': 'Hybride',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'Ingénierie Logicielle',
        
        'research-paper-title': 'Développement d\'un Système Complet de Gestion et d\'Optimisation des Processus Utilisant l\'API Windows',
        'research-date': '2025',
        'research-institution': 'Université Technique de Cluj-Napoca',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': 'Article de Recherche',
        'abstract-title': 'Résumé',
        'abstract-1': 'Les systèmes d\'exploitation modernes gèrent un ensemble varié de processus, nécessitant des outils sophistiqués pour la supervision, la gestion et l\'optimisation afin d\'assurer la stabilité et les performances du système. Cet article décrit la structure et les fondements théoriques d\'un système complet de gestion et d\'optimisation des performances des processus utilisant les fonctions de l\'Interface de Programmation d\'Applications Windows.',
        'abstract-2': 'Le système présenté ici est destiné à fournir des informations détaillées sur le comportement des processus, l\'utilisation des ressources (CPU, mémoire, I/O) et les relations inter-processus, avec la capacité d\'amélioration dynamique informée par les paramètres grâce à la perspicacité expérientielle.',
        'abstract-3': 'Les API Windows clés pour l\'énumération des processus et l\'interrogation des ressources (y compris Performance Data Helper - PDH), la priorisation et l\'exploration des affinités telles que l\'altération, la gestion des ressources mémoire et la communication inter-processus, forment une partie fondamentale de l\'architecture du système.',
        'abstract-4': 'Bien que plusieurs outils existants offrent des aperçus des ressources (ex. Task Manager, Process Hacker), ils manquent souvent d\'extensibilité, de contrôles dynamiques basés sur des règles et de moteurs heuristiques intégrés. Notre système aborde cette lacune grâce à une architecture multicouche centrée sur l\'API qui met l\'accent sur la modélisation du comportement des processus et l\'optimisation en temps réel.',
        'keywords-title': 'Mots-clés',
        'keyword-process-management': 'Gestion des Processus',
        'keyword-system-optimization': 'Optimisation du Système',
        'keyword-windows-api': 'API Windows',
        'keyword-performance-monitoring': 'Surveillance des Performances',
        'keyword-resource-management': 'Gestion des Ressources',
        'keyword-pdh': 'PDH',
        'preview-paper': 'Aperçu de l\'Article',
        'download-pdf': 'Télécharger PDF',
        
        'degree-title-masters': 'Master of Science - M.Sc, Ingénierie Cybersécurité',
        'university-name': 'Université Technique de Cluj Napoca',
        'education-date-masters': 'Juillet 2025 - Juillet 2027',
        'education-status-in-progress': 'En Cours',
        'education-description-masters': 'Programme spécialisé axé sur les concepts avancés de cybersécurité, la sécurité réseau et la forensique numérique.',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, Automatisation et Informatique',
        'education-date-bachelors': 'Octobre 2021 - Juillet 2025',
        'education-grade': 'Note: 10/10',
        'education-status-completed': 'Terminé',
        'education-description-bachelors': 'Programme complet couvrant les systèmes d\'automatisation, les fondamentaux de l\'informatique et les principes d\'ingénierie.',
        'achievements-title': 'Réalisations Clés:',
        'achievement-1': 'Performance académique exceptionnelle',
        'achievement-2': 'Participation active aux projets techniques et à la recherche',
        'achievement-3': 'Fondation solide dans les concepts d\'ingénierie théoriques et pratiques',
        
        'project-title-1': 'Application de Surveillance des Processus',
        'project-description-1': 'Outil de surveillance système en temps réel pour suivre les processus, le système de fichiers, le registre et les activités réseau.',
        'project-title-2': 'SoBuddy',
        'project-description-2': 'Plateforme web moderne pour les réseaux sociaux et la construction de communautés avec des fonctionnalités avancées.',
        'project-title-3': 'Système d\'Évaluation des Utilisateurs',
        'project-description-3': 'Système complet pour l\'évaluation des interactions utilisateur et l\'analyse des retours.',
        'project-title-4': 'Gestion de Portefeuille d\'Actions',
        'project-description-4': 'Application Java complète avec authentification sécurisée et intégration de données en temps réel via des API.',
        'project-title-5': 'Système de Contrôle du Trafic Aérien',
        'project-description-5': 'Système de contrôle du trafic aérien simplifié en Java pour la gestion des avions et des opérations de vol.',
        'project-title-6': 'Application de Blog pour Chats',
        'project-description-6': 'Application web interactive pour créer et partager des articles de blog et du contenu lié aux chats.',
        'view-details': 'Voir les Détails',
        
        'project-modal-title-1': 'Application de Surveillance des Processus',
        'project-modal-description-1': 'Une application complète de surveillance système en temps réel qui suit et enregistre les processus, le système de fichiers, le registre et les activités réseau. Cette application aide au dépannage, à l\'analyse des performances et à la surveillance de la sécurité du système.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Plateforme web moderne pour les réseaux sociaux et la construction de communautés avec des fonctionnalités avancées. Construite avec des technologies web modernes pour une expérience utilisateur transparente.',
        'project-modal-title-3': 'Système d\'Évaluation des Utilisateurs',
        'project-modal-description-3': 'Un système complet conçu pour l\'évaluation des interactions utilisateur et l\'analyse des retours. Cette application fournit des informations détaillées sur le comportement des utilisateurs et les modèles d\'interaction.',
        'project-modal-title-4': 'Gestion de Portefeuille d\'Actions',
        'project-modal-description-4': 'Une application Java complète avec authentification sécurisée et intégration de données en temps réel via des API. Inclut des outils avancés de suivi et d\'analyse de portefeuille.',
        'project-modal-title-5': 'Système de Contrôle du Trafic Aérien',
        'project-modal-description-5': 'Un système de contrôle du trafic aérien simplifié construit en Java pour la gestion des avions et des opérations de vol. Inclut le suivi des vols en temps réel et les protocoles de sécurité.',
        'project-modal-title-6': 'Application de Blog pour Chats',
        'project-modal-description-6': 'Une application web interactive pour créer et partager des articles de blog et du contenu lié aux chats. Inclut une interface conviviale et des capacités de partage social.',
        'project-modal-close': 'Fermer',
        'project-modal-view-live': 'Voir en Direct',
        'project-modal-view-code': 'Voir le Code',
        'project-modal-technologies-title': 'Technologies Utilisées:',
        'project-modal-view-github': 'Voir sur GitHub',
        
        'project-modal-title-1': 'Application de Surveillance des Processus',
        'project-modal-description-1': 'Une application complète de surveillance système en temps réel qui suit et enregistre les processus, le système de fichiers, le registre et les activités réseau. Cette application aide au dépannage, à l\'analyse des performances et à la surveillance de la sécurité du système.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Plateforme web moderne pour les réseaux sociaux et la construction de communautés avec des fonctionnalités avancées. Construite avec des technologies web modernes pour une expérience utilisateur transparente.',
        'project-modal-title-3': 'Système d\'Évaluation des Utilisateurs',
        'project-modal-description-3': 'Un système complet conçu pour l\'évaluation des interactions utilisateur et l\'analyse des retours. Cette application fournit des informations détaillées sur le comportement des utilisateurs et les modèles d\'interaction.',
        'project-modal-title-4': 'Gestion de Portefeuille d\'Actions',
        'project-modal-description-4': 'Une application Java complète avec authentification sécurisée et intégration de données en temps réel via des API. Inclut des outils avancés de suivi et d\'analyse de portefeuille.',
        'project-modal-title-5': 'Système de Contrôle du Trafic Aérien',
        'project-modal-description-5': 'Un système de contrôle du trafic aérien simplifié construit en Java pour la gestion des avions et des opérations de vol. Inclut le suivi des vols en temps réel et les protocoles de sécurité.',
        'project-modal-title-6': 'Application de Blog pour Chats',
        'project-modal-description-6': 'Une application web interactive pour créer et partager des articles de blog et du contenu lié aux chats. Inclut une interface conviviale et des capacités de partage social.',
        'project-modal-close': '×',
        'project-modal-view-live': 'Voir en Direct',
        'project-modal-view-code': 'Voir le Code',
        'project-modal-technologies-title': 'Technologies Utilisées:',
        'project-modal-view-github': 'Voir sur GitHub',
        
        'contact-connect-title': 'Connectons-nous',
        'contact-connect-description-1': 'Je suis toujours intéressé par de nouvelles opportunités et collaborations.',
        'contact-connect-description-2': 'N\'hésitez pas à me contacter !',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'Cluj-Napoca, Roumanie',
        'contact-university': 'Université Technique de Cluj-Napoca',
        'form-name-label': 'Nom',
        'form-email-label': 'Email',
        'form-subject-label': 'Sujet',
        'form-message-label': 'Message',
        'form-submit': 'Envoyer le message',
        'form-success': 'Message envoyé avec succès !',
        'form-error': 'Échec de l\'envoi du message. Veuillez réessayer.',
        'form-validation-required': 'Veuillez remplir tous les champs',
        'form-validation-email': 'Veuillez entrer une adresse e-mail valide',
        'form-rate-limit': 'Veuillez attendre {seconds} secondes avant d\'envoyer un autre message',
        
        'skill-java': 'Java',
        'skill-java-description': 'Maîtrise avancée du développement Java avec le framework Spring et Lombok',
        'skill-python': 'Python',
        'skill-python-description': 'Analyse de données et scripts d\'automatisation',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'Programmation système et applications critiques pour les performances',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Développement Unity et applications .NET',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Développement web et applications Node.js',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'Design web responsive et techniques CSS modernes',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'Conception et gestion de bases de données',
        'skill-git': 'Git',
        'skill-git-description': 'Contrôle de version et développement collaboratif',
        'skill-blender': 'Blender',
        'skill-blender-description': 'Modélisation 3D et visualisation',
        'skill-unity': 'Unity',
        'skill-unity-description': 'Développement de jeux et applications 3D'
    },
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de',
        'nav-experience': 'Experiencia',
        'nav-education': 'Educación',
        'nav-research': 'Investigación',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contacto',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'Estudiante de Maestría en Ingeniería de Ciberseguridad',
        'hero-description-1': '• Apasionado por la tecnología, el emprendimiento y la ingeniería de software.',
        'hero-description-2': '• Estudiando en la Universidad Técnica de Cluj-Napoca.',
        'get-in-touch': 'Ponerse en contacto',
        'preview-cv': 'Vista previa CV',
        'about-title': 'Acerca de mí',
        'about-text-1': 'Soy un estudiante muy motivado y ambicioso en la Universidad Técnica de Cluj-Napoca, especializado en',
        'about-text-2': 'Ingeniería de Ciberseguridad',
        'about-text-3': 'Mi pasión radica en la tecnología, el emprendimiento y la ingeniería de software.',
        'about-text-4': 'Actualmente, me estoy enfocando en mejorar mis habilidades en',
        'about-text-5': 'Rust',
        'about-text-6': 'y explorando varias tecnologías y desarrollo web. Estoy emocionado de comenzar mi carrera en ingeniería de software y contribuir a proyectos innovadores.',
        'about-text-7': 'Basado en',
        'about-text-8': 'Cluj-Napoca',
        'about-text-9': 'Siempre busco oportunidades para aprender, crecer y colaborar en proyectos interesantes.',
        'years-experience': 'Años de Experiencia',
        'projects-completed': 'Proyectos Completados',
        'technologies': 'Tecnologías',
        'research-papers': 'Artículos de Investigación',
        'experience-title': 'Experiencia Laboral',
        'education-title': 'Educación',
        'research-title': 'Investigación & Publicaciones',
        'projects-title': 'Proyectos',
        'skills-title': 'Habilidades',
        'contact-title': 'Contacto',
        
        'job-title-ntt': 'Infraestructura y Servicios de Plataforma - Estudiante Trabajador',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'Tiempo parcial',
        'date-ntt': 'Diciembre 2024 - Presente',
        'location-cluj': 'Cluj-Napoca, Cluj, Rumania',
        'work-arrangement-remote': 'Remoto',
        'skill-linux': 'Linux',
        'skill-network-design': 'Diseño de Red',
        'skill-infrastructure': 'Infraestructura',
        'job-title-bitdefender': 'Ingeniero de Software Junior',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'Pasantía',
        'date-bitdefender': 'Julio 2024 - Septiembre 2024 (3 meses)',
        'work-arrangement-hybrid': 'Híbrido',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'Ingeniería de Software',
        
        'research-paper-title': 'Desarrollo de un Sistema Integral de Gestión y Optimización de Procesos Utilizando la API de Windows',
        'research-date': '2025',
        'research-institution': 'Universidad Técnica de Cluj-Napoca',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': 'Artículo de Investigación',
        'abstract-title': 'Resumen',
        'abstract-1': 'Los sistemas operativos modernos gestionan un conjunto variado de procesos, requiriendo herramientas sofisticadas para supervisión, gestión y optimización para asegurar la estabilidad y rendimiento del sistema. Este artículo describe la estructura y fundamentos teóricos de un sistema completo de gestión y optimización de rendimiento de procesos utilizando las funciones de la Interfaz de Programación de Aplicaciones de Windows.',
        'abstract-2': 'El sistema presentado aquí está destinado a proporcionar información detallada sobre el comportamiento de procesos, uso de recursos (CPU, memoria, I/O) y relaciones inter-proceso, con la capacidad de mejora dinámica informada por parámetros a través de la perspicacia experiencial.',
        'abstract-3': 'Las APIs clave de Windows para enumeración de procesos y consulta de recursos (incluyendo Performance Data Helper - PDH), priorización y exploración de afinidades como alteración, gestión de recursos de memoria y comunicación inter-proceso, forman una parte fundamental de la arquitectura del sistema.',
        'abstract-4': 'Mientras que varias herramientas existentes ofrecen información sobre recursos (ej. Task Manager, Process Hacker), a menudo carecen de extensibilidad, controles dinámicos basados en reglas y motores heurísticos integrados. Nuestro sistema aborda esta brecha a través de una arquitectura multicapa centrada en API que enfatiza el modelado de comportamiento de procesos y optimización en tiempo real.',
        'keywords-title': 'Palabras Clave',
        'keyword-process-management': 'Gestión de Procesos',
        'keyword-system-optimization': 'Optimización del Sistema',
        'keyword-windows-api': 'API de Windows',
        'keyword-performance-monitoring': 'Monitoreo de Rendimiento',
        'keyword-resource-management': 'Gestión de Recursos',
        'keyword-pdh': 'PDH',
        'preview-paper': 'Vista Previa del Artículo',
        'download-pdf': 'Descargar PDF',
        
        'degree-title-masters': 'Master of Science - M.Sc, Ingeniería Ciberseguridad',
        'university-name': 'Universidad Técnica de Cluj Napoca',
        'education-date-masters': 'Julio 2025 - Julio 2027',
        'education-status-in-progress': 'En Progreso',
        'education-description-masters': 'Programa especializado enfocado en conceptos avanzados de ciberseguridad, seguridad de redes y forense digital.',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, Automatización e Informática',
        'education-date-bachelors': 'Octubre 2021 - Julio 2025',
        'education-grade': 'Nota: 10/10',
        'education-status-completed': 'Completado',
        'education-description-bachelors': 'Programa integral que cubre sistemas de automatización, fundamentos de informática y principios de ingeniería.',
        'achievements-title': 'Logros Clave:',
        'achievement-1': 'Rendimiento académico excepcional',
        'achievement-2': 'Participación activa en proyectos técnicos e investigación',
        'achievement-3': 'Base sólida tanto en conceptos de ingeniería teóricos como prácticos',
        
        'project-title-1': 'Aplicación de Monitoreo de Procesos',
        'project-description-1': 'Herramienta de monitoreo del sistema en tiempo real para rastrear procesos, sistema de archivos, registro y actividades de red.',
        'project-title-2': 'SoBuddy',
        'project-description-2': 'Plataforma web moderna para redes sociales y construcción de comunidades con funciones avanzadas.',
        'project-title-3': 'Sistema de Evaluación de Usuarios',
        'project-description-3': 'Sistema integral para evaluar interacciones de usuarios y análisis de comentarios.',
        'project-title-4': 'Gestión de Portafolio de Acciones',
        'project-description-4': 'Aplicación Java integral con autenticación segura e integración de datos en tiempo real a través de APIs.',
        'project-title-5': 'Sistema de Control de Tráfico Aéreo',
        'project-description-5': 'Sistema simplificado de control de tráfico aéreo en Java para gestionar aviones y operaciones de vuelo.',
        'project-title-6': 'Aplicación de Blog para Gatos',
        'project-description-6': 'Aplicación web interactiva para crear y compartir publicaciones de blog y contenido relacionado con gatos.',
        'view-details': 'Ver Detalles',
        
        'project-modal-title-1': 'Aplicación de Monitoreo de Procesos',
        'project-modal-description-1': 'Una aplicación completa de monitoreo del sistema en tiempo real que rastrea y registra procesos, sistema de archivos, registro y actividades de red. Esta aplicación ayuda en la resolución de problemas, análisis de rendimiento y monitoreo de seguridad del sistema.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Plataforma web moderna para redes sociales y construcción de comunidades con funciones avanzadas. Construida con tecnologías web modernas para una experiencia de usuario sin problemas.',
        'project-modal-title-3': 'Sistema de Evaluación de Usuarios',
        'project-modal-description-3': 'Un sistema integral diseñado para evaluar interacciones de usuarios y análisis de comentarios. Esta aplicación proporciona información detallada sobre el comportamiento del usuario y patrones de interacción.',
        'project-modal-title-4': 'Gestión de Portafolio de Acciones',
        'project-modal-description-4': 'Una aplicación Java integral con autenticación segura e integración de datos en tiempo real a través de APIs. Incluye herramientas avanzadas de seguimiento y análisis de portafolio.',
        'project-modal-title-5': 'Sistema de Control de Tráfico Aéreo',
        'project-modal-description-5': 'Un sistema simplificado de control de tráfico aéreo construido en Java para gestionar aviones y operaciones de vuelo. Incluye seguimiento de vuelos en tiempo real y protocolos de seguridad.',
        'project-modal-title-6': 'Aplicación de Blog para Gatos',
        'project-modal-description-6': 'Una aplicación web interactiva para crear y compartir publicaciones de blog y contenido relacionado con gatos. Incluye interfaz amigable y capacidades de compartir en redes sociales.',
        'project-modal-close': 'Cerrar',
        'project-modal-view-live': 'Ver en Vivo',
        'project-modal-view-code': 'Ver Código',
        'project-modal-technologies-title': 'Tecnologías Utilizadas:',
        'project-modal-view-github': 'Ver en GitHub',
        
        'project-modal-title-1': 'Aplicación de Monitoreo de Procesos',
        'project-modal-description-1': 'Una aplicación completa de monitoreo del sistema en tiempo real que rastrea y registra procesos, sistema de archivos, registro y actividades de red. Esta aplicación ayuda en la resolución de problemas, análisis de rendimiento y monitoreo de seguridad del sistema.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Plataforma web moderna para redes sociales y construcción de comunidades con funciones avanzadas. Construida con tecnologías web modernas para una experiencia de usuario sin problemas.',
        'project-modal-title-3': 'Sistema de Evaluación de Usuarios',
        'project-modal-description-3': 'Un sistema integral diseñado para evaluar interacciones de usuarios y análisis de comentarios. Esta aplicación proporciona información detallada sobre el comportamiento del usuario y patrones de interacción.',
        'project-modal-title-4': 'Gestión de Portafolio de Acciones',
        'project-modal-description-4': 'Una aplicación Java integral con autenticación segura e integración de datos en tiempo real a través de APIs. Incluye herramientas avanzadas de seguimiento y análisis de portafolio.',
        'project-modal-title-5': 'Sistema de Control de Tráfico Aéreo',
        'project-modal-description-5': 'Un sistema simplificado de control de tráfico aéreo construido en Java para gestionar aviones y operaciones de vuelo. Incluye seguimiento de vuelos en tiempo real y protocolos de seguridad.',
        'project-modal-title-6': 'Aplicación de Blog para Gatos',
        'project-modal-description-6': 'Una aplicación web interactiva para crear y compartir publicaciones de blog y contenido relacionado con gatos. Incluye interfaz amigable y capacidades de compartir en redes sociales.',
        'project-modal-close': '×',
        'project-modal-view-live': 'Ver en Vivo',
        'project-modal-view-code': 'Ver Código',
        'project-modal-technologies-title': 'Tecnologías Utilizadas:',
        'project-modal-view-github': 'Ver en GitHub',
        
        'contact-connect-title': 'Conectémonos',
        'contact-connect-description-1': 'Siempre estoy interesado en nuevas oportunidades y colaboraciones.',
        'contact-connect-description-2': '¡No dudes en contactarme!',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'Cluj-Napoca, Rumania',
        'contact-university': 'Universidad Técnica de Cluj-Napoca',
        'form-name-label': 'Nombre',
        'form-email-label': 'Correo electrónico',
        'form-subject-label': 'Asunto',
        'form-message-label': 'Mensaje',
        'form-submit': 'Enviar mensaje',
        'form-success': '¡Mensaje enviado con éxito!',
        'form-error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        'form-validation-required': 'Por favor, completa todos los campos',
        'form-validation-email': 'Por favor, introduce una dirección de correo válida',
        'form-rate-limit': 'Por favor, espera {seconds} segundos antes de enviar otro mensaje',
        
        'skill-java': 'Java',
        'skill-java-description': 'Competencia avanzada en desarrollo Java con framework Spring y Lombok',
        'skill-python': 'Python',
        'skill-python-description': 'Análisis de datos y scripting de automatización',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'Programación de sistemas y aplicaciones críticas para el rendimiento',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Desarrollo Unity y aplicaciones .NET',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Desarrollo web y aplicaciones Node.js',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'Diseño web responsivo y técnicas CSS modernas',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'Diseño y gestión de bases de datos',
        'skill-git': 'Git',
        'skill-git-description': 'Control de versiones y desarrollo colaborativo',
        'skill-blender': 'Blender',
        'skill-blender-description': 'Modelado 3D y visualización',
        'skill-unity': 'Unity',
        'skill-unity-description': 'Desarrollo de juegos y aplicaciones 3D'
    },
    it: {
        'nav-home': 'Home',
        'nav-about': 'Chi sono',
        'nav-experience': 'Esperienza',
        'nav-education': 'Istruzione',
        'nav-research': 'Ricerca',
        'nav-projects': 'Progetti',
        'nav-skills': 'Competenze',
        'nav-contact': 'Contatto',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'Studente Magistrale in Ingegneria della Sicurezza Informatica',
        'hero-description-1': '• Appassionato di tecnologia, imprenditorialità e ingegneria del software.',
        'hero-description-2': '• Studente presso l\'Università Tecnica di Cluj-Napoca.',
        'get-in-touch': 'Mettiti in contatto',
        'preview-cv': 'Anteprima CV',
        'about-title': 'Chi sono',
        'about-text-1': 'Sono uno studente molto motivato e ambizioso presso l\'Università Tecnica di Cluj-Napoca, specializzato in',
        'about-text-2': 'Ingegneria della Sicurezza Informatica',
        'about-text-3': 'La mia passione risiede nella tecnologia, nell\'imprenditorialità e nell\'ingegneria del software.',
        'about-text-4': 'Attualmente, mi sto concentrando sul miglioramento delle mie competenze in',
        'about-text-5': 'Rust',
        'about-text-6': 'e l\'esplorazione di varie tecnologie e sviluppo web. Sono entusiasta di iniziare la mia carriera nell\'ingegneria del software e contribuire a progetti innovativi.',
        'about-text-7': 'Basato a',
        'about-text-8': 'Cluj-Napoca',
        'about-text-9': 'Cerco sempre opportunità per imparare, crescere e collaborare su progetti interessanti.',
        'years-experience': 'Anni di Esperienza',
        'projects-completed': 'Progetti Completati',
        'technologies': 'Tecnologie',
        'research-papers': 'Articoli di Ricerca',
        'experience-title': 'Esperienza Lavorativa',
        'education-title': 'Istruzione',
        'research-title': 'Ricerca & Pubblicazioni',
        'projects-title': 'Progetti',
        'skills-title': 'Competenze',
        'contact-title': 'Contatto',
        
        'job-title-ntt': 'Infrastruttura e Servizi di Piattaforma - Studente Lavoratore',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'Part-time',
        'date-ntt': 'Dicembre 2024 - Presente',
        'location-cluj': 'Cluj-Napoca, Cluj, Romania',
        'work-arrangement-remote': 'Remoto',
        'skill-linux': 'Linux',
        'skill-network-design': 'Progettazione di Rete',
        'skill-infrastructure': 'Infrastruttura',
        'job-title-bitdefender': 'Ingegnere Software Junior',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'Stage',
        'date-bitdefender': 'Luglio 2024 - Settembre 2024 (3 mesi)',
        'work-arrangement-hybrid': 'Ibrido',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'Ingegneria del Software',
        
        'research-paper-title': 'Sviluppo di un Sistema Completo di Gestione e Ottimizzazione dei Processi Utilizzando l\'API Windows',
        'research-date': '2025',
        'research-institution': 'Università Tecnica di Cluj-Napoca',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': 'Articolo di Ricerca',
        'abstract-title': 'Riassunto',
        'abstract-1': 'I sistemi operativi moderni gestiscono un insieme vario di processi, richiedendo strumenti sofisticati per supervisione, gestione e ottimizzazione per garantire stabilità e prestazioni del sistema. Questo articolo descrive la struttura e i fondamenti teorici di un sistema completo di gestione e ottimizzazione delle prestazioni dei processi utilizzando le funzioni dell\'Interfaccia di Programmazione delle Applicazioni Windows.',
        'abstract-2': 'Il sistema presentato qui è destinato a fornire informazioni dettagliate sul comportamento dei processi, utilizzo delle risorse (CPU, memoria, I/O) e relazioni inter-processo, con la capacità di miglioramento dinamico informato dai parametri attraverso la comprensione esperienziale.',
        'abstract-3': 'Le API Windows chiave per l\'enumerazione dei processi e l\'interrogazione delle risorse (incluso Performance Data Helper - PDH), prioritizzazione ed esplorazione delle affinità come alterazione, gestione delle risorse di memoria e comunicazione inter-processo, formano una parte fondamentale dell\'architettura del sistema.',
        'abstract-4': 'Mentre diversi strumenti esistenti offrono informazioni sulle risorse (es. Task Manager, Process Hacker), spesso mancano di estensibilità, controlli dinamici basati su regole e motori euristici integrati. Il nostro sistema affronta questa lacuna attraverso un\'architettura multi-livello centrata sull\'API che enfatizza la modellazione del comportamento dei processi e l\'ottimizzazione in tempo reale.',
        'keywords-title': 'Parole Chiave',
        'keyword-process-management': 'Gestione dei Processi',
        'keyword-system-optimization': 'Ottimizzazione del Sistema',
        'keyword-windows-api': 'API Windows',
        'keyword-performance-monitoring': 'Monitoraggio delle Prestazioni',
        'keyword-resource-management': 'Gestione delle Risorse',
        'keyword-pdh': 'PDH',
        'preview-paper': 'Anteprima Articolo',
        'download-pdf': 'Scarica PDF',
        
        'degree-title-masters': 'Master of Science - M.Sc, Ingegneria della Sicurezza Informatica',
        'university-name': 'Università Tecnica di Cluj Napoca',
        'education-date-masters': 'Luglio 2025 - Luglio 2027',
        'education-status-in-progress': 'In Corso',
        'education-description-masters': 'Programma specializzato focalizzato su concetti avanzati di sicurezza informatica, sicurezza di rete e forensics digitale.',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, Automazione e Informatica',
        'education-date-bachelors': 'Ottobre 2021 - Luglio 2025',
        'education-grade': 'Voto: 10/10',
        'education-status-completed': 'Completato',
        'education-description-bachelors': 'Programma completo che copre sistemi di automazione, fondamenta dell\'informatica e principi di ingegneria.',
        'achievements-title': 'Risultati Chiave:',
        'achievement-1': 'Prestazione accademica eccezionale',
        'achievement-2': 'Partecipazione attiva a progetti tecnici e ricerca',
        'achievement-3': 'Fondazione solida sia in concetti di ingegneria teorici che pratici',
        
        'project-title-1': 'Applicazione di Monitoraggio dei Processi',
        'project-description-1': 'Strumento di monitoraggio del sistema in tempo reale per tracciare processi, file system, registro e attività di rete.',
        'project-title-2': 'SoBuddy',
        'project-description-2': 'Piattaforma web moderna per social networking e costruzione di comunità con funzionalità avanzate.',
        'project-title-3': 'Sistema di Valutazione Utenti',
        'project-description-3': 'Sistema completo per la valutazione delle interazioni utente e l\'analisi del feedback.',
        'project-title-4': 'Gestione Portfolio Azionario',
        'project-description-4': 'Applicazione Java completa con autenticazione sicura e integrazione dati in tempo reale tramite API.',
        'project-title-5': 'Sistema di Controllo del Traffico Aereo',
        'project-description-5': 'Sistema semplificato di controllo del traffico aereo in Java per la gestione di aerei e operazioni di volo.',
        'project-title-6': 'App Blog per Gatti',
        'project-description-6': 'Applicazione web interattiva per creare e condividere post di blog e contenuti relativi ai gatti.',
        'view-details': 'Vedi Dettagli',
        
        'project-modal-title-1': 'Applicazione di Monitoraggio dei Processi',
        'project-modal-description-1': 'Un\'applicazione completa di monitoraggio del sistema in tempo reale che traccia e registra processi, file system, registro e attività di rete. Questa applicazione aiuta nel troubleshooting, analisi delle prestazioni e monitoraggio della sicurezza del sistema.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Piattaforma web moderna per social networking e costruzione di comunità con funzionalità avanzate. Costruita con tecnologie web moderne per un\'esperienza utente senza problemi.',
        'project-modal-title-3': 'Sistema di Valutazione Utenti',
        'project-modal-description-3': 'Un sistema completo progettato per la valutazione delle interazioni utente e l\'analisi del feedback. Questa applicazione fornisce informazioni dettagliate sul comportamento degli utenti e sui modelli di interazione.',
        'project-modal-title-4': 'Gestione Portfolio Azionario',
        'project-modal-description-4': 'Un\'applicazione Java completa con autenticazione sicura e integrazione dati in tempo reale tramite API. Include strumenti avanzati di monitoraggio e analisi del portfolio.',
        'project-modal-title-5': 'Sistema di Controllo del Traffico Aereo',
        'project-modal-description-5': 'Un sistema semplificato di controllo del traffico aereo costruito in Java per la gestione di aerei e operazioni di volo. Include monitoraggio dei voli in tempo reale e protocolli di sicurezza.',
        'project-modal-title-6': 'App Blog per Gatti',
        'project-modal-description-6': 'Un\'applicazione web interattiva per creare e condividere post di blog e contenuti relativi ai gatti. Include interfaccia user-friendly e capacità di condivisione sociale.',
        'project-modal-close': 'Chiudi',
        'project-modal-view-live': 'Vedi Live',
        'project-modal-view-code': 'Vedi Codice',
        'project-modal-technologies-title': 'Tecnologie Utilizzate:',
        'project-modal-view-github': 'Vedi su GitHub',
        
        'project-modal-title-1': 'Applicazione di Monitoraggio dei Processi',
        'project-modal-description-1': 'Un\'applicazione completa di monitoraggio del sistema in tempo reale che traccia e registra processi, file system, registro e attività di rete. Questa applicazione aiuta nel troubleshooting, analisi delle prestazioni e monitoraggio della sicurezza del sistema.',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': 'Piattaforma web moderna per social networking e costruzione di comunità con funzionalità avanzate. Costruita con tecnologie web moderne per un\'esperienza utente senza problemi.',
        'project-modal-title-3': 'Sistema di Valutazione Utenti',
        'project-modal-description-3': 'Un sistema completo progettato per la valutazione delle interazioni utente e l\'analisi del feedback. Questa applicazione fornisce informazioni dettagliate sul comportamento degli utenti e sui modelli di interazione.',
        'project-modal-title-4': 'Gestione Portfolio Azionario',
        'project-modal-description-4': 'Un\'applicazione Java completa con autenticazione sicura e integrazione dati in tempo reale tramite API. Include strumenti avanzati di monitoraggio e analisi del portfolio.',
        'project-modal-title-5': 'Sistema di Controllo del Traffico Aereo',
        'project-modal-description-5': 'Un sistema semplificato di controllo del traffico aereo costruito in Java per la gestione di aerei e operazioni di volo. Include monitoraggio dei voli in tempo reale e protocolli di sicurezza.',
        'project-modal-title-6': 'App Blog per Gatti',
        'project-modal-description-6': 'Un\'applicazione web interattiva per creare e condividere post di blog e contenuti relativi ai gatti. Include interfaccia user-friendly e capacità di condivisione sociale.',
        'project-modal-close': '×',
        'project-modal-view-live': 'Vedi Live',
        'project-modal-view-code': 'Vedi Codice',
        'project-modal-technologies-title': 'Tecnologie Utilizzate:',
        'project-modal-view-github': 'Vedi su GitHub',
        
        'contact-connect-title': 'Mettiamoci in contatto',
        'contact-connect-description-1': 'Sono sempre interessato a nuove opportunità e collaborazioni.',
        'contact-connect-description-2': 'Non esitare a contattarmi!',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'Cluj-Napoca, Romania',
        'contact-university': 'Università Tecnica di Cluj-Napoca',
        'form-name-label': 'Nome',
        'form-email-label': 'Email',
        'form-subject-label': 'Oggetto',
        'form-message-label': 'Messaggio',
        'form-submit': 'Invia messaggio',
        'form-success': 'Messaggio inviato con successo!',
        'form-error': 'Impossibile inviare il messaggio. Riprova.',
        'form-validation-required': 'Compila tutti i campi',
        'form-validation-email': 'Inserisci un indirizzo email valido',
        'form-rate-limit': 'Attendi {seconds} secondi prima di inviare un altro messaggio',
        
        'skill-java': 'Java',
        'skill-java-description': 'Competenza avanzata nello sviluppo Java con framework Spring e Lombok',
        'skill-python': 'Python',
        'skill-python-description': 'Analisi dei dati e scripting per automazione',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'Programmazione di sistemi e applicazioni critiche per le prestazioni',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Sviluppo Unity e applicazioni .NET',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Sviluppo web e applicazioni Node.js',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'Design web responsive e tecniche CSS moderne',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'Progettazione e gestione di database',
        'skill-git': 'Git',
        'skill-git-description': 'Controllo versioni e sviluppo collaborativo',
        'skill-blender': 'Blender',
        'skill-blender-description': 'Modellazione 3D e visualizzazione',
        'skill-unity': 'Unity',
        'skill-unity-description': 'Sviluppo di giochi e applicazioni 3D'
    },
    ja: {
        'nav-home': 'ホーム',
        'nav-about': '私について',
        'nav-experience': '経験',
        'nav-education': '教育',
        'nav-research': '研究',
        'nav-projects': 'プロジェクト',
        'nav-skills': 'スキル',
        'nav-contact': 'お問い合わせ',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': 'サイバーセキュリティ工学修士課程学生',
        'hero-description-1': '• テクノロジー、起業、ソフトウェア工学に情熱を持っています。',
        'hero-description-2': '• クルジュ・ナポカ工科大学で学んでいます。',
        'get-in-touch': 'お問い合わせ',
        'preview-cv': '履歴書プレビュー',
        'about-title': '私について',
        'about-text-1': '私はクルジュ・ナポカ工科大学の非常に意欲的で野心的な学生で、',
        'about-text-2': 'サイバーセキュリティ工学',
        'about-text-3': 'に専攻しています。私の情熱はテクノロジー、起業、ソフトウェア工学にあります。',
        'about-text-4': '現在、',
        'about-text-5': 'Rust',
        'about-text-6': 'のスキル向上と様々なテクノロジーとウェブ開発の探求に集中しています。ソフトウェア工学でのキャリアを始め、革新的なプロジェクトに貢献できることを楽しみにしています。',
        'about-text-7': '拠点は',
        'about-text-8': 'クルジュ・ナポカ',
        'about-text-9': 'で、常に学び、成長し、興味深いプロジェクトで協力する機会を探しています。',
        'years-experience': '年の経験',
        'projects-completed': '完了プロジェクト',
        'technologies': 'テクノロジー',
        'research-papers': '研究論文',
        'experience-title': '職歴',
        'education-title': '教育',
        'research-title': '研究・出版物',
        'projects-title': 'プロジェクト',
        'skills-title': 'スキル',
        'contact-title': 'お問い合わせ',
        
        'job-title-ntt': 'インフラストラクチャー＆プラットフォームサービス - 学生労働者',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': 'パートタイム',
        'date-ntt': '2024年12月 - 現在',
        'location-cluj': 'クルジュ・ナポカ、クルジュ、ルーマニア',
        'work-arrangement-remote': 'リモート',
        'skill-linux': 'Linux',
        'skill-network-design': 'ネットワーク設計',
        'skill-infrastructure': 'インフラストラクチャー',
        'job-title-bitdefender': 'ジュニアソフトウェアエンジニア',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': 'インターンシップ',
        'date-bitdefender': '2024年7月 - 2024年9月（3ヶ月）',
        'work-arrangement-hybrid': 'ハイブリッド',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': 'ソフトウェアエンジニアリング',
        
        'research-paper-title': 'Windows APIを使用した包括的なプロセス管理・最適化システムの開発',
        'research-date': '2025',
        'research-institution': 'クルジュ・ナポカ工科大学',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': '研究論文',
        'abstract-title': '要約',
        'abstract-1': '現代のオペレーティングシステムは多様なプロセスを管理し、システムの安定性とパフォーマンスを確保するために、監視、管理、最適化のための高度なツールを必要とします。本論文では、Windows Application Programming Interfaceの機能を使用した完全なプロセス管理・パフォーマンス最適化システムの構造と理論的基盤について説明します。',
        'abstract-2': 'ここで提示するシステムは、プロセス動作、リソース使用量（CPU、メモリ、I/O）、プロセス間関係に関する詳細な情報を提供し、経験的洞察による動的パラメータ情報に基づく改善能力を持つことを目的としています。',
        'abstract-3': 'プロセス列挙とリソース照会（Performance Data Helper - PDHを含む）のための主要なWindows API、優先順位付け、変更、メモリリソース管理、プロセス間通信などの親和性の探索は、システムアーキテクチャの基本的な部分を形成します。',
        'abstract-4': '既存のツール（例：Task Manager、Process Hacker）はリソース洞察を提供しますが、拡張性、動的ルールベース制御、統合ヒューリスティックエンジンが不足していることが多いです。私たちのシステムは、プロセス動作モデリングとリアルタイム最適化を重視する多層API中心アーキテクチャを通じてこのギャップに対処します。',
        'keywords-title': 'キーワード',
        'keyword-process-management': 'プロセス管理',
        'keyword-system-optimization': 'システム最適化',
        'keyword-windows-api': 'Windows API',
        'keyword-performance-monitoring': 'パフォーマンス監視',
        'keyword-resource-management': 'リソース管理',
        'keyword-pdh': 'PDH',
        'preview-paper': '論文プレビュー',
        'download-pdf': 'PDFダウンロード',
        
        'degree-title-masters': 'Master of Science - M.Sc, サイバーセキュリティ工学',
        'university-name': 'クルジュ・ナポカ工科大学',
        'education-date-masters': '2025年7月 - 2027年7月',
        'education-status-in-progress': '進行中',
        'education-description-masters': '高度なサイバーセキュリティ概念、ネットワークセキュリティ、デジタルフォレンジックに焦点を当てた専門プログラム。',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, 自動化・コンピュータサイエンス',
        'education-date-bachelors': '2021年10月 - 2025年7月',
        'education-grade': '成績: 10/10',
        'education-status-completed': '完了',
        'education-description-bachelors': '自動化システム、コンピュータサイエンス基礎、工学原理をカバーする包括的プログラム。',
        'achievements-title': '主要な成果:',
        'achievement-1': '卓越した学業成績',
        'achievement-2': '技術プロジェクトと研究への積極的な参加',
        'achievement-3': '理論的および実践的工学概念の両方における強固な基盤',
        
        'project-title-1': 'プロセス監視アプリケーション',
        'project-description-1': 'プロセス、ファイルシステム、レジストリ、ネットワーク活動を追跡するリアルタイムシステム監視ツール。',
        'project-title-2': 'SoBuddy',
        'project-description-2': '高度な機能を持つソーシャルネットワーキングとコミュニティ構築のためのモダンなWebプラットフォーム。',
        'project-title-3': 'ユーザー評価システム',
        'project-description-3': 'ユーザーインタラクションとフィードバック分析のための包括的なシステム。',
        'project-title-4': '株式ポートフォリオ管理',
        'project-description-4': '安全な認証とAPIを通じたリアルタイムデータ統合を備えた包括的なJavaアプリケーション。',
        'project-title-5': '航空交通管制システム',
        'project-description-5': '航空機とフライト運用を管理するためのJavaで構築された簡素化された航空交通管制システム。',
        'project-title-6': '猫ブログアプリ',
        'project-description-6': '猫関連のブログ投稿やコンテンツを作成・共有するためのインタラクティブなWebアプリケーション。',
        'view-details': '詳細を見る',
        
        'project-modal-title-1': 'プロセス監視アプリケーション',
        'project-modal-description-1': 'プロセス、ファイルシステム、レジストリ、ネットワーク活動を追跡・記録する包括的なリアルタイムシステム監視アプリケーション。このアプリケーションはトラブルシューティング、パフォーマンス分析、システムセキュリティ監視に役立ちます。',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': '高度な機能を持つソーシャルネットワーキングとコミュニティ構築のためのモダンなWebプラットフォーム。シームレスなユーザーエクスペリエンスのために現代的なWeb技術で構築されています。',
        'project-modal-title-3': 'ユーザー評価システム',
        'project-modal-description-3': 'ユーザーインタラクションとフィードバック分析のための包括的なシステム。このアプリケーションはユーザー行動とインタラクションパターンに関する詳細な洞察を提供します。',
        'project-modal-title-4': '株式ポートフォリオ管理',
        'project-modal-description-4': '安全な認証とAPIを通じたリアルタイムデータ統合を備えた包括的なJavaアプリケーション。高度なポートフォリオ追跡・分析ツールを含みます。',
        'project-modal-title-5': '航空交通管制システム',
        'project-modal-description-5': '航空機とフライト運用を管理するためのJavaで構築された簡素化された航空交通管制システム。リアルタイムフライト追跡と安全プロトコルを含みます。',
        'project-modal-title-6': '猫ブログアプリ',
        'project-modal-description-6': '猫関連のブログ投稿やコンテンツを作成・共有するためのインタラクティブなWebアプリケーション。ユーザーフレンドリーなインターフェースとソーシャルシェアリング機能を含みます。',
        'project-modal-close': '閉じる',
        'project-modal-view-live': 'ライブで見る',
        'project-modal-view-code': 'コードを見る',
        'project-modal-technologies-title': '使用技術:',
        'project-modal-view-github': 'GitHubで見る',
        
        'project-modal-title-1': 'プロセス監視アプリケーション',
        'project-modal-description-1': 'プロセス、ファイルシステム、レジストリ、ネットワーク活動を追跡・記録する包括的なリアルタイムシステム監視アプリケーション。このアプリケーションはトラブルシューティング、パフォーマンス分析、システムセキュリティ監視に役立ちます。',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': '高度な機能を持つソーシャルネットワーキングとコミュニティ構築のためのモダンなWebプラットフォーム。シームレスなユーザーエクスペリエンスのために現代的なWeb技術で構築されています。',
        'project-modal-title-3': 'ユーザー評価システム',
        'project-modal-description-3': 'ユーザーインタラクションとフィードバック分析のための包括的なシステム。このアプリケーションはユーザー行動とインタラクションパターンに関する詳細な洞察を提供します。',
        'project-modal-title-4': '株式ポートフォリオ管理',
        'project-modal-description-4': '安全な認証とAPIを通じたリアルタイムデータ統合を備えた包括的なJavaアプリケーション。高度なポートフォリオ追跡・分析ツールを含みます。',
        'project-modal-title-5': '航空交通管制システム',
        'project-modal-description-5': '航空機とフライト運用を管理するためのJavaで構築された簡素化された航空交通管制システム。リアルタイムフライト追跡と安全プロトコルを含みます。',
        'project-modal-title-6': '猫ブログアプリ',
        'project-modal-description-6': '猫関連のブログ投稿やコンテンツを作成・共有するためのインタラクティブなWebアプリケーション。ユーザーフレンドリーなインターフェースとソーシャルシェアリング機能を含みます。',
        'project-modal-close': '×',
        'project-modal-view-live': 'ライブで見る',
        'project-modal-view-code': 'コードを見る',
        'project-modal-technologies-title': '使用技術:',
        'project-modal-view-github': 'GitHubで見る',
        
        'contact-connect-title': 'つながりましょう',
        'contact-connect-description-1': '私は常に新しい機会やコラボレーションに興味があります。',
        'contact-connect-description-2': 'お気軽にご連絡ください！',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': 'クルジュ・ナポカ、ルーマニア',
        'contact-university': 'クルジュ・ナポカ工科大学',
        'form-name-label': 'お名前',
        'form-email-label': 'メールアドレス',
        'form-subject-label': '件名',
        'form-message-label': 'メッセージ',
        'form-submit': 'メッセージを送信',
        'form-success': 'メッセージが正常に送信されました！',
        'form-error': 'メッセージの送信に失敗しました。もう一度お試しください。',
        'form-validation-required': 'すべてのフィールドを入力してください',
        'form-validation-email': '有効なメールアドレスを入力してください',
        'form-rate-limit': '別のメッセージを送信する前に{seconds}秒待ってください',
        
        'skill-java': 'Java',
        'skill-java-description': 'SpringフレームワークとLombokを使用したJava開発の高度なスキル',
        'skill-python': 'Python',
        'skill-python-description': 'データ分析と自動化スクリプティング',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': 'システムプログラミングとパフォーマンスクリティカルなアプリケーション',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Unity開発と.NETアプリケーション',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Web開発とNode.jsアプリケーション',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': 'レスポンシブWebデザインとモダンCSS技術',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': 'データベース設計と管理',
        'skill-git': 'Git',
        'skill-git-description': 'バージョン管理とコラボレーティブ開発',
        'skill-blender': 'Blender',
        'skill-blender-description': '3Dモデリングとビジュアライゼーション',
        'skill-unity': 'Unity',
        'skill-unity-description': 'ゲーム開発と3Dアプリケーション'
    },
    zh: {
        'nav-home': '首页',
        'nav-about': '关于',
        'nav-experience': '经验',
        'nav-education': '教育',
        'nav-research': '研究',
        'nav-projects': '项目',
        'nav-skills': '技能',
        'nav-contact': '联系',
        'hero-title': 'Tudor-Cristian Sîngerean',
        'hero-subtitle': '网络安全工程硕士学生',
        'hero-description-1': '• 对技术、创业和软件工程充满热情。',
        'hero-description-2': '• 在克卢日-纳波卡技术大学学习。',
        'get-in-touch': '联系我',
        'preview-cv': '简历预览',
        'about-title': '关于我',
        'about-text-1': '我是克卢日-纳波卡技术大学的一名非常有动力和雄心勃勃的学生，专攻',
        'about-text-2': '网络安全工程',
        'about-text-3': '。我的热情在于技术、创业和软件工程。',
        'about-text-4': '目前，我正在专注于提高',
        'about-text-5': 'Rust',
        'about-text-6': '的技能，并探索各种技术和网络开发。我很兴奋能开始我的软件工程职业生涯并为创新项目做出贡献。',
        'about-text-7': '位于',
        'about-text-8': '克卢日-纳波卡',
        'about-text-9': '，我一直在寻找学习、成长和合作有趣项目的机会。',
        'years-experience': '年经验',
        'projects-completed': '已完成项目',
        'technologies': '技术',
        'research-papers': '研究论文',
        'experience-title': '工作经验',
        'education-title': '教育',
        'research-title': '研究与出版物',
        'projects-title': '项目',
        'skills-title': '技能',
        'contact-title': '联系',
        
        'job-title-ntt': '基础设施和平台服务 - 工作学生',
        'company-ntt': 'NTT DATA',
        'employment-type-part-time': '兼职',
        'date-ntt': '2024年12月 - 至今',
        'location-cluj': '克卢日-纳波卡，克卢日，罗马尼亚',
        'work-arrangement-remote': '远程',
        'skill-linux': 'Linux',
        'skill-network-design': '网络设计',
        'skill-infrastructure': '基础设施',
        'job-title-bitdefender': '初级软件工程师',
        'company-bitdefender': 'Bitdefender',
        'employment-type-internship': '实习',
        'date-bitdefender': '2024年7月 - 2024年9月（3个月）',
        'work-arrangement-hybrid': '混合',
        'skill-c': 'C',
        'skill-cpp': 'C++',
        'skill-software-engineering': '软件工程',
        
        'research-paper-title': '使用Windows API开发综合进程管理和优化系统',
        'research-date': '2025',
        'research-institution': '克卢日-纳波卡技术大学',
        'research-authors': 'Tudor-Cristian Sîngerean, Bogdan Gabriel Drăghici, Alexandra Elena Dobre, Ovidiu Petru Stan, Liviu Cristian Miclea',
        'research-type': '研究论文',
        'abstract-title': '摘要',
        'abstract-1': '现代操作系统管理各种进程，需要复杂的工具进行监督、管理和优化，以确保系统稳定性和性能。本文描述了使用Windows应用程序编程接口功能构建的完整进程管理和性能优化系统的结构和理论基础。',
        'abstract-2': '这里提出的系统旨在提供有关进程行为、资源使用（CPU、内存、I/O）和进程间关系的详细信息，具有通过经验洞察进行动态参数信息增强的能力。',
        'abstract-3': '用于进程枚举和资源查询的关键Windows API（包括性能数据助手-PDH）、优先级排序以及探索诸如更改、内存资源管理和进程间通信等亲和性，构成了系统架构的基本部分。',
        'abstract-4': '虽然几个现有工具提供资源洞察（例如任务管理器、进程黑客），但它们通常缺乏可扩展性、动态基于规则的控件和集成启发式引擎。我们的系统通过强调进程行为建模和实时优化的多层API中心架构来解决这一差距。',
        'keywords-title': '关键词',
        'keyword-process-management': '进程管理',
        'keyword-system-optimization': '系统优化',
        'keyword-windows-api': 'Windows API',
        'keyword-performance-monitoring': '性能监控',
        'keyword-resource-management': '资源管理',
        'keyword-pdh': 'PDH',
        'preview-paper': '预览论文',
        'download-pdf': '下载PDF',
        
        'degree-title-masters': 'Master of Science - M.Sc, 网络安全工程',
        'university-name': '克卢日-纳波卡技术大学',
        'education-date-masters': '2025年7月 - 2027年7月',
        'education-status-in-progress': '进行中',
        'education-description-masters': '专注于高级网络安全概念、网络安全和数字取证的专业课程。',
        'degree-title-bachelors': 'Bachelor of Engineering - BE, 自动化与计算机科学',
        'education-date-bachelors': '2021年10月 - 2025年7月',
        'education-grade': '成绩: 10/10',
        'education-status-completed': '已完成',
        'education-description-bachelors': '涵盖自动化系统、计算机科学基础和工程原理的综合课程。',
        'achievements-title': '主要成就:',
        'achievement-1': '卓越学术表现',
        'achievement-2': '积极参与技术项目和研究',
        'achievement-3': '在理论和实践工程概念方面都有坚实基础',
        
        'project-title-1': '进程监控应用程序',
        'project-description-1': '实时系统监控工具，用于跟踪进程、文件系统、注册表和网络活动。',
        'project-title-2': 'SoBuddy',
        'project-description-2': '具有高级功能的现代Web平台，用于社交网络和社区建设。',
        'project-title-3': '用户评估系统',
        'project-description-3': '用于评估用户交互和反馈分析的综合系统。',
        'project-title-4': '股票投资组合管理',
        'project-description-4': '具有安全认证和通过API实时数据集成功能的综合Java应用程序。',
        'project-title-5': '空中交通管制系统',
        'project-description-5': '用Java构建的简化空中交通管制系统，用于管理飞机和飞行操作。',
        'project-title-6': '猫咪博客应用',
        'project-description-6': '用于创建和分享猫咪相关博客文章和内容的交互式Web应用程序。',
        'view-details': '查看详情',
        
        'project-modal-title-1': '进程监控应用程序',
        'project-modal-description-1': '一个全面的实时系统监控应用程序，用于跟踪和记录进程、文件系统、注册表和网络活动。此应用程序有助于故障排除、性能分析和系统安全监控。',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': '具有高级功能的现代Web平台，用于社交网络和社区建设。使用现代Web技术构建，提供无缝的用户体验。',
        'project-modal-title-3': '用户评估系统',
        'project-modal-description-3': '一个专为用户交互评估和反馈分析而设计的综合系统。此应用程序提供有关用户行为和交互模式的详细洞察。',
        'project-modal-title-4': '股票投资组合管理',
        'project-modal-description-4': '一个具有安全认证和通过API实时数据集成功能的综合Java应用程序。包含高级投资组合跟踪和分析工具。',
        'project-modal-title-5': '空中交通管制系统',
        'project-modal-description-5': '用Java构建的简化空中交通管制系统，用于管理飞机和飞行操作。包括实时飞行跟踪和安全协议。',
        'project-modal-title-6': '猫咪博客应用',
        'project-modal-description-6': '一个用于创建和分享猫咪相关博客文章和内容的交互式Web应用程序。包含用户友好的界面和社交分享功能。',
        'project-modal-close': '关闭',
        'project-modal-view-live': '在线查看',
        'project-modal-view-code': '查看代码',
        'project-modal-technologies-title': '使用技术:',
        'project-modal-view-github': '在GitHub上查看',
        
        'project-modal-title-1': '进程监控应用程序',
        'project-modal-description-1': '一个全面的实时系统监控应用程序，用于跟踪和记录进程、文件系统、注册表和网络活动。此应用程序有助于故障排除、性能分析和系统安全监控。',
        'project-modal-title-2': 'SoBuddy',
        'project-modal-description-2': '具有高级功能的现代Web平台，用于社交网络和社区建设。使用现代Web技术构建，提供无缝的用户体验。',
        'project-modal-title-3': '用户评估系统',
        'project-modal-description-3': '一个专为用户交互评估和反馈分析而设计的综合系统。此应用程序提供有关用户行为和交互模式的详细洞察。',
        'project-modal-title-4': '股票投资组合管理',
        'project-modal-description-4': '一个具有安全认证和通过API实时数据集成功能的综合Java应用程序。包含高级投资组合跟踪和分析工具。',
        'project-modal-title-5': '空中交通管制系统',
        'project-modal-description-5': '用Java构建的简化空中交通管制系统，用于管理飞机和飞行操作。包括实时飞行跟踪和安全协议。',
        'project-modal-title-6': '猫咪博客应用',
        'project-modal-description-6': '一个用于创建和分享猫咪相关博客文章和内容的交互式Web应用程序。包含用户友好的界面和社交分享功能。',
        'project-modal-close': '×',
        'project-modal-view-live': '在线查看',
        'project-modal-view-code': '查看代码',
        'project-modal-technologies-title': '使用技术:',
        'project-modal-view-github': '在GitHub上查看',
        
        'contact-connect-title': '让我们联系',
        'contact-connect-description-1': '我一直对新的机会和合作感兴趣。',
        'contact-connect-description-2': '请随时联系我！',
        'contact-email': 'singerean.digital@gmail.com',
        'contact-location': '克卢日-纳波卡，罗马尼亚',
        'contact-university': '克卢日-纳波卡技术大学',
        'form-name-label': '姓名',
        'form-email-label': '邮箱',
        'form-subject-label': '主题',
        'form-message-label': '消息',
        'form-submit': '发送消息',
        'form-success': '消息发送成功！',
        'form-error': '消息发送失败。请重试。',
        'form-validation-required': '请填写所有字段',
        'form-validation-email': '请输入有效的邮箱地址',
        'form-rate-limit': '请等待{seconds}秒后再发送另一条消息',
        
        'skill-java': 'Java',
        'skill-java-description': '使用Spring框架和Lombok的Java开发高级技能',
        'skill-python': 'Python',
        'skill-python-description': '数据分析和自动化脚本编写',
        'skill-c-cpp': 'C/C++',
        'skill-c-cpp-description': '系统编程和性能关键型应用程序',
        'skill-csharp': 'C#',
        'skill-csharp-description': 'Unity开发和.NET应用程序',
        'skill-javascript': 'JavaScript',
        'skill-javascript-description': 'Web开发和Node.js应用程序',
        'skill-html-css': 'HTML/CSS',
        'skill-html-css-description': '响应式Web设计和现代CSS技术',
        'skill-mysql': 'MySQL',
        'skill-mysql-description': '数据库设计和管理',
        'skill-git': 'Git',
        'skill-git-description': '版本控制和协作开发',
        'skill-blender': 'Blender',
        'skill-blender-description': '3D建模和可视化',
        'skill-unity': 'Unity',
        'skill-unity-description': '游戏开发和3D应用程序'
    }
};

function toggleLanguageDropdown() {
    const isOpen = langDropdownMenu.classList.contains('show');
    langDropdownMenu.classList.toggle('show');
    langDropdownBtn.classList.toggle('active');
    langDropdownBtn.setAttribute('aria-expanded', !isOpen);
}

function closeLanguageDropdown() {
    langDropdownMenu.classList.remove('show');
    langDropdownBtn.classList.remove('active');
    langDropdownBtn.setAttribute('aria-expanded', 'false');
}

function changeLanguage(lang) {
    langOptions.forEach(option => {
        option.classList.remove('active');
    });
    
    const activeOption = document.querySelector(`[data-lang="${lang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
    
    const flag = activeOption.querySelector('.flag').textContent;
    const langText = activeOption.querySelector('.lang-text').textContent;
    langDropdownBtn.querySelector('.flag').textContent = flag;
    langDropdownBtn.querySelector('.lang-text').textContent = langText.split(' ')[0];
    
    document.documentElement.lang = lang;
    
    if (translations[lang]) {
        Object.keys(translations[lang]).forEach(key => {
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            elements.forEach(element => {
                element.textContent = translations[lang][key];
            });
        });
    }
    
    localStorage.setItem('preferred-language', lang);
    
    closeLanguageDropdown();
}

if (langDropdownBtn) {
    langDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLanguageDropdown();
    });
}

if (langDropdownMenu) {
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            changeLanguage(lang);
        });
    });
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-dropdown')) {
        closeLanguageDropdown();
    }
});

const savedLanguage = localStorage.getItem('preferred-language') || 'en';
changeLanguage(savedLanguage);


function animateCounter(element, target, duration = 6000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '+';
      element.classList.add('animate');
      setTimeout(() => element.classList.remove('animate'), 600);
    }
  }
  
  updateCounter();
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target.querySelector('.counter');
      const target = parseInt(entry.target.dataset.target);
      if (counter && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        animateCounter(counter, target);
      }
    }
  });
}, { threshold: 0.5 });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-transition');
  
  document.querySelectorAll('.stat').forEach(stat => {
    counterObserver.observe(stat);
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        document.body.classList.add('transitioning');
        
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          document.body.classList.remove('transitioning');
        }, 1000);
      }
    });
  });
});

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('back-to-top');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const scrollCue = document.querySelector('.scroll-cue');

const cvButton = document.getElementById('cv-button');
const cvModal = document.getElementById('cv-modal');
const cvModalClose = document.getElementById('cv-modal-close');
const cvDownload = document.getElementById('cv-download');
const cvPrint = document.getElementById('cv-print');
const cvIframe = document.getElementById('cv-iframe');

const researchPreviewBtn = document.querySelector('.research-preview');
const researchModal = document.getElementById('research-modal');
const researchModalClose = document.getElementById('research-modal-close');
const researchDownload = document.getElementById('research-download');
const researchPrint = document.getElementById('research-print');
const researchIframe = document.getElementById('research-iframe');

function shouldDisableResearchButtons() {
    const currentDate = new Date();
    const targetDate = new Date('2025-10-09T00:00:00.000Z');
    return currentDate < targetDate;
}

function disableResearchButtons() {
    if (researchPreviewBtn) {
        researchPreviewBtn.disabled = true;
        researchPreviewBtn.style.opacity = '0.5';
        researchPreviewBtn.style.cursor = 'not-allowed';
        researchPreviewBtn.title = 'Available from October 9th, 2025';
    }
    
    const downloadPdfLink = document.querySelector('a[href="scientific_paper_v10.pdf"]');
    if (downloadPdfLink) {
        downloadPdfLink.style.pointerEvents = 'none';
        downloadPdfLink.style.opacity = '0.5';
        downloadPdfLink.style.cursor = 'not-allowed';
        downloadPdfLink.title = 'Available from October 9th, 2025';
        downloadPdfLink.removeAttribute('download');
        downloadPdfLink.href = 'javascript:void(0)';
    }
}

function enableResearchButtons() {
    if (researchPreviewBtn) {
        researchPreviewBtn.disabled = false;
        researchPreviewBtn.style.opacity = '1';
        researchPreviewBtn.style.cursor = 'pointer';
        researchPreviewBtn.title = '';
    }
    
    const downloadPdfLink = document.querySelector('a[href="javascript:void(0)"]') || document.querySelector('a[data-translate="download-pdf"]');
    if (downloadPdfLink) {
        downloadPdfLink.style.pointerEvents = 'auto';
        downloadPdfLink.style.opacity = '1';
        downloadPdfLink.style.cursor = 'pointer';
        downloadPdfLink.title = '';
        downloadPdfLink.setAttribute('download', '');
        downloadPdfLink.href = 'scientific_paper_v10.pdf';
    }
}

if (shouldDisableResearchButtons()) {
    disableResearchButtons();
} else {
    enableResearchButtons();
}

const downloadPdfLink = document.querySelector('a[href="scientific_paper_v10.pdf"]');
if (downloadPdfLink) {
    downloadPdfLink.addEventListener('click', (e) => {
        if (shouldDisableResearchButtons()) {
            e.preventDefault();
            return false;
        }
    });
}

const projectData = {
    procmon: {
        title: "Process Monitoring Application",
        description: "A comprehensive real-time system monitoring tool that tracks and logs processes, file system, registry, and network activities. This application aids in troubleshooting, performance analysis, and system security monitoring.",
        technologies: ["C++", "Windows API", "Network Programming", "System Monitoring"],
        github: "https://github.com/s1ng3/procmon_network_application"
    },
    sobuddy: {
        title: "SoBuddy",
        description: "Modern web platform for social networking and community building with advanced features. Built with modern web technologies for seamless user experience.",
        technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Web Development"],
        github: "https://github.com/s1ng3/SoBuddy"
    },
    usereval: {
        title: "User Evaluation System",
        description: "Comprehensive system for evaluating user interactions and feedback analysis. Provides detailed insights into user behavior and preferences.",
        technologies: ["Java", "Spring Framework", "Data Analysis", "User Research"],
        github: "https://github.com/s1ng3/User_Evaluation_System"
    },
    stock: {
        title: "Stock Portfolio Management Application",
        description: "A comprehensive Java application featuring secure user authentication, real-time data integration through APIs, and advanced portfolio management capabilities. Built with Spring framework and Lombok for clean, maintainable code.",
        technologies: ["Java", "Spring Framework", "Lombok", "REST APIs", "MySQL"],
        github: "https://github.com/s1ng3/Stock_Portfolio_Management_Application"
    },
    airtraffic: {
        title: "Air Traffic Control System",
        description: "A simplified air traffic control system implemented in Java. Provides users with the capability to add and manage airplanes, track flight paths, and ensure safe airspace management.",
        technologies: ["Java", "Data Structures", "Algorithm Design", "System Simulation"],
        github: "https://github.com/s1ng3/Air_Traffic_Control_System"
    },
    catblog: {
        title: "Cat Blog Post App",
        description: "Interactive web application for creating and sharing cat-related blog posts and content. Features modern UI/UX design and responsive layout.",
        technologies: ["JavaScript", "HTML/CSS", "Web Development", "UI/UX Design"],
        github: "https://github.com/s1ng3/cat_blog_post_app"
    }
};

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

let scrollThreshold = 10;

const handleScroll = throttle(() => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDifference = Math.abs(currentScrollTop - lastScrollTop);
    
    if (scrollDifference > scrollThreshold) {
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            navbar.classList.remove('navbar-visible');
            navbar.classList.add('navbar-hidden');
        } else if (currentScrollTop < lastScrollTop) {
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
        }
    }
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
    
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.particles');
    
    if (hero && particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || 'dark';
document.documentElement.setAttribute('data-theme', initialTheme);
const icon = themeToggle.querySelector('i');
icon.className = initialTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

scrollCue.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            if (projectModal.style.display === 'block') {
                return;
            }
            
            const currentLang = document.documentElement.lang || 'en';
            
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalTechnologies = document.getElementById('modal-technologies');
            const modalTechnologiesTitle = document.querySelector('.modal-tech h3');
            const modalGithub = document.getElementById('modal-github');
            const modalClose = document.querySelector('.modal-close');
            
            const projectKeyMap = {
                'procmon': '1',
                'sobuddy': '2',
                'usereval': '3',
                'stock': '4',
                'airtraffic': '5',
                'catblog': '6'
            };
            
            const projectNumber = projectKeyMap[projectId];
            
            if (projectNumber && translations[currentLang]) {
                const titleKey = `project-modal-title-${projectNumber}`;
                const descriptionKey = `project-modal-description-${projectNumber}`;
                
                if (translations[currentLang][titleKey]) {
                    modalTitle.textContent = translations[currentLang][titleKey];
                } else {
                    modalTitle.textContent = project.title;
                }
                
                if (translations[currentLang][descriptionKey]) {
                    modalDescription.textContent = translations[currentLang][descriptionKey];
                } else {
                    modalDescription.textContent = project.description;
                }
                
                if (translations[currentLang]['project-modal-technologies-title']) {
                    modalTechnologiesTitle.textContent = translations[currentLang]['project-modal-technologies-title'];
                }
                
                if (translations[currentLang]['project-modal-view-github']) {
                    modalGithub.textContent = translations[currentLang]['project-modal-view-github'];
                }
                
                if (translations[currentLang]['project-modal-close']) {
                    modalClose.textContent = translations[currentLang]['project-modal-close'];
                }
            } else {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
            }
            
            modalGithub.href = project.github;
            modalGithub.setAttribute('target', '_blank');
            modalGithub.setAttribute('rel', 'noopener noreferrer');
            
            modalTechnologies.innerHTML = project.technologies.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');
            
            projectModal.style.opacity = '0';
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            projectModal.offsetHeight;
            
            projectModal.style.opacity = '1';
            
            console.log('GitHub URL set to:', project.github);
        }
    });
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeModal();
    }
});

document.getElementById('modal-github').addEventListener('click', (e) => {
    e.stopPropagation();
    const href = e.currentTarget.href;
    if (href && href !== '#') {
        window.open(href, '_blank', 'noopener,noreferrer');
    }
});

function closeModal() {
    projectModal.style.opacity = '0';
    setTimeout(() => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

if (researchPreviewBtn) {
    researchPreviewBtn.addEventListener('click', () => {
        if (researchPreviewBtn.disabled) {
            return;
        }
        
        researchModal.style.opacity = '0';
        researchModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        researchModal.offsetHeight;
        
        researchModal.style.opacity = '1';
    });
}

if (researchModalClose) {
    researchModalClose.addEventListener('click', () => {
        closeResearchModal();
    });
}

if (researchModal) {
    researchModal.addEventListener('click', (e) => {
        if (e.target === researchModal) {
            closeResearchModal();
        }
    });
}

if (researchDownload) {
    researchDownload.addEventListener('click', () => {
        if (shouldDisableResearchButtons()) {
            return;
        }
        
        const link = document.createElement('a');
        link.href = 'scientific_paper_v10.pdf';
        link.download = 'Advanced-Cybersecurity-Methodologies-Research-Paper.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        const originalText = researchDownload.innerHTML;
        researchDownload.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        researchDownload.style.background = 'var(--red-secondary)';
        
        setTimeout(() => {
            researchDownload.innerHTML = originalText;
            researchDownload.style.background = '';
        }, 2000);
    });
}

if (researchPrint) {
    researchPrint.addEventListener('click', () => {
        if (shouldDisableResearchButtons()) {
            return;
        }
        
        const printWindow = window.open('scientific_paper_v10.pdf', '_blank');
        
        if (printWindow) {
            printWindow.onload = function() {
                printWindow.print();
            };
        } else {
            if (researchIframe && researchIframe.contentWindow) {
                researchIframe.contentWindow.print();
            }
        }
    });
}

function closeResearchModal() {
    researchModal.style.opacity = '0';
    setTimeout(() => {
        researchModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

cvButton.addEventListener('click', () => {
    cvModal.style.opacity = '0';
    cvModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    cvModal.offsetHeight;
    
    cvModal.style.opacity = '1';
});

cvModalClose.addEventListener('click', () => {
    closeCVModal();
});

cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        closeCVModal();
    }
});

cvDownload.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Tudor-Cristian-Singerean-Resume.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    const originalText = cvDownload.innerHTML;
    cvDownload.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    cvDownload.style.background = 'var(--red-secondary)';
    
    setTimeout(() => {
        cvDownload.innerHTML = originalText;
        cvDownload.style.background = '';
    }, 2000);
});

cvPrint.addEventListener('click', () => {
    const printWindow = window.open('resume.pdf', '_blank');
    
    if (printWindow) {
        printWindow.onload = function() {
            printWindow.print();
        };
    } else {
        const iframe = document.getElementById('cv-iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.print();
        }
    }
});

function closeCVModal() {
    cvModal.style.opacity = '0';
    setTimeout(() => {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

function getTranslation(key) {
    const currentLang = document.documentElement.lang || 'en';
    const langTranslations = translations[currentLang] || translations['en'];
    return langTranslations[key] || key;
}

let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN = 30000;

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
        const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmissionTime)) / 1000);
        const rateLimitMessage = getTranslation('form-rate-limit').replace('{seconds}', remainingTime);
        showNotification(rateLimitMessage, 'error');
        return;
    }
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
        showNotification(getTranslation('form-validation-required'), 'error');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification(getTranslation('form-validation-email'), 'error');
        return;
    }
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    try {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const result = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
            name: name,
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: EMAILJS_CONFIG.RECIPIENT_NAME,
            time: timeString
        });
        
        showNotification(getTranslation('form-success'), 'success');
        submitButton.textContent = getTranslation('form-success');
        submitButton.style.background = 'var(--red-secondary)';
        
        lastSubmissionTime = Date.now();
        
        contactForm.reset();
        
        const counter = document.getElementById('message-counter');
        if (counter) {
            counter.textContent = '0/1000';
            counter.style.color = 'var(--text-secondary)';
        }
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        
        showNotification(getTranslation('form-error'), 'error');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

const messageTextarea = document.getElementById('message');
messageTextarea.addEventListener('input', () => {
    const maxLength = 1000;
    const currentLength = messageTextarea.value.length;
    
    if (currentLength > maxLength) {
        messageTextarea.value = messageTextarea.value.substring(0, maxLength);
    }
    
    messageTextarea.style.height = 'auto';
    messageTextarea.style.height = messageTextarea.scrollHeight + 'px';
    
    const counter = document.getElementById('message-counter');
    
    if (counter) {
        const finalLength = Math.min(currentLength, maxLength);
        counter.textContent = `${finalLength}/${maxLength}`;
        const newColor = finalLength > maxLength * 0.9 ? 'var(--red-primary)' : 'var(--text-secondary)';
        if (counter.style.color !== newColor) {
            counter.style.color = newColor;
            counter.style.transform = 'scale(1.1)';
            setTimeout(() => {
                counter.style.transform = 'scale(1)';
            }, 150);
        }
    }
});

const messageFormGroup = document.querySelector('#message').closest('.form-group');
if (messageFormGroup && !document.getElementById('message-counter')) {
    const counter = document.createElement('span');
    counter.id = 'message-counter';
    counter.className = 'char-counter';
    counter.textContent = '0/1000';
    messageFormGroup.appendChild(counter);
}

let scrollDirection = 'down';
let lastScrollTop = 0;
const animatedSections = new Set();
let resizeTimeout;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;
});

window.addEventListener('resize', () => {

    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
    
    resizeTimeout = setTimeout(() => {
        
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = null;
        });
        
        
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.style.display = 'none';
            projectsGrid.offsetHeight;
            projectsGrid.style.display = 'grid';
        }
        
        initializeProjectCards();
        
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-optimized');
        } else {
            document.body.classList.remove('mobile-optimized');
        }
    }, 150);
});

const sectionObserverOptions = {
    threshold: 0.3,
    rootMargin: '-15% 0px -15% 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target;
        const sectionId = section.id || section.className;
        
        if (entry.isIntersecting) {
            
            if (!animatedSections.has(sectionId)) {
                animatedSections.add(sectionId);
                
                section.classList.add('section-visible');
                section.classList.remove('section-hidden');
                
                
                if (scrollDirection === 'down') {
                    section.classList.add('scroll-down');
                    section.classList.remove('scroll-up');
                } else {
                    section.classList.add('scroll-up');
                    section.classList.remove('scroll-down');
                }
                
                
                animateChildElements(section, scrollDirection);
            }
        }
        
    });
}, sectionObserverOptions);


function animateChildElements(section, direction) {
    const animatableElements = section.querySelectorAll('.project-card, .skill-card, .stat, .contact-item, .about-text p, .hero-text > *, .section-title');
    
    animatableElements.forEach((element, index) => {
        
        if (!element.classList.contains('animate-in-up') && !element.classList.contains('animate-in-down')) {

            setTimeout(() => {
                if (direction === 'down') {
                    element.classList.add('animate-in-up');
                } else {
                    element.classList.add('animate-in-down');
                }
            }, index * 100); 
        }
    });
}


document.querySelectorAll('section, .hero').forEach(section => {
    sectionObserver.observe(section);
});


const elementObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px'
};

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, elementObserverOptions);


document.querySelectorAll('.project-card, .skill-card, .stat, .contact-item').forEach(el => {
    elementObserver.observe(el);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            
            document.body.classList.add('smooth-scrolling');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            
            setTimeout(() => {
                document.body.classList.remove('smooth-scrolling');
            }, 1000);
        }
    });
});


function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : 0;
    
    if (scrolled < heroHeight) {
        const particles = document.querySelector('.particles');
        const redGradient = document.querySelector('.red-gradient');
        
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0002})`;
        }
        if (redGradient) {
            redGradient.style.transform = `translateY(${scrolled * 0.2}px)`;
            redGradient.style.opacity = Math.max(0.3, 0.8 - scrolled * 0.001);
        }
    }
}


const throttledParallax = throttle(updateParallax, 16);
window.addEventListener('scroll', throttledParallax);

function resetAnimations() {
    animatedSections.clear();
    document.querySelectorAll('section, .hero').forEach(section => {
        section.classList.remove('section-visible', 'section-hidden', 'scroll-down', 'scroll-up');
    });
    document.querySelectorAll('.animate-in-up, .animate-in-down').forEach(element => {
        element.classList.remove('animate-in-up', 'animate-in-down');
    });
}


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    setTimeout(() => {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroId = heroSection.id || 'hero';
            if (!animatedSections.has(heroId)) {
                animatedSections.add(heroId);
                animateChildElements(heroSection, 'down');
            }
        }
    }, 300);
    
    initializeProjectCards();
    
    if (window.innerWidth <= 768) {
        
        document.body.classList.add('mobile-optimized');

        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.animation = 'none';
        });
        
        document.body.classList.add('touch-device');
        
        const hoverElements = document.querySelectorAll('.project-card, .skill-card, .btn, .nav-link');
        hoverElements.forEach(element => {
            element.style.pointerEvents = 'auto';
        });
        
        document.documentElement.style.scrollBehavior = 'smooth';
        
        if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
            document.body.classList.add('mobile-safari');
        }
    } else {
        document.body.classList.remove('mobile-optimized');
        document.body.classList.remove('touch-device');
        document.body.classList.remove('mobile-safari');
    }
});

function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        
        card.removeEventListener('mousemove', handleCardMouseMove);
        card.removeEventListener('mouseleave', handleCardMouseLeave);
        card.addEventListener('mousemove', handleCardMouseMove);
        card.addEventListener('mouseleave', handleCardMouseLeave);
    });
}

function handleCardMouseMove(e) {
    if (window.innerWidth > 768) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }
}

function handleCardMouseLeave(e) {
    // Only apply 3D effect on desktop
    if (window.innerWidth > 768) {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

initializeProjectCards();

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeProjectCards();
        
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
});

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.style.display === 'block') {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.project-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
    
    img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Image+Not+Found';
    });
});

console.log('🚀 Tudor-Cristian Sîngerean Portfolio Website Loaded Successfully!');
console.log('📧 Contact: singerean.digital@gmail.com');
console.log('🌐 GitHub: https://github.com/s1ng3');
console.log('💼 LinkedIn: https://www.linkedin.com/in/tudor-cristian-singerean/');

console.log('🔗 Testing GitHub URLs:');
Object.keys(projectData).forEach(key => {
    console.log(`${key}: ${projectData[key].github}`);
});

let deferredPrompt;
const installPrompt = document.getElementById('install-prompt');
const installBtn = document.getElementById('install-btn');
const dismissBtn = document.getElementById('dismiss-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    setTimeout(() => {
        if (deferredPrompt) {
            installPrompt.classList.add('show');
        }
    }, 3000);
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
        installPrompt.classList.remove('show');
    }
});

dismissBtn.addEventListener('click', () => {
    installPrompt.classList.remove('show');
});


const offlineIndicator = document.getElementById('offline-indicator');

window.addEventListener('online', () => {
    offlineIndicator.classList.remove('show');
    console.log('🟢 Back online');
});

window.addEventListener('offline', () => {
    offlineIndicator.classList.add('show');
    console.log('🔴 Gone offline');
});

const loading = document.getElementById('loading');

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

const timelineItems = document.querySelectorAll('.timeline-item');
const educationCards = document.querySelectorAll('.education-card');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

timelineItems.forEach(item => observer.observe(item));
educationCards.forEach(card => observer.observe(card));

const sections = document.querySelectorAll('section');
const enhancedSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

sections.forEach(section => enhancedSectionObserver.observe(section));

let newWorker;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (newWorker) {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (projectModal.style.display === 'block') {
            closeModal();
        }
        if (cvModal.style.display === 'block') {
            closeCVModal();
        }
        if (installPrompt.classList.contains('show')) {
            installPrompt.classList.remove('show');
        }
    }
    
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('📊 Page Load Performance:', {
                'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
                'Total Load Time': perfData.loadEventEnd - perfData.fetchStart
            });
        }, 0);
    });
} 