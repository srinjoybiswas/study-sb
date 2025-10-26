let selectedPdfUrl = "";
let isLoggedIn = false;
let loggedInUserName = "";
const MAX_FREE_VIEWS = 5;

// 1. Master list of authorized students with hardcoded College Email IDs
const authorizedStudents = [
    { roll: "184216", name: "Abhigyan biswas", email: "abhigyan.biswas@tha.edu.in" },
    { roll: "1842132", name: "Abhirup Bhattacharya", email: "abhirup.bhattacharya@tha.edu.in" },
    { roll: "184239", name: "ABHIRUP GHOSH", email: "abhirup.ghosh@tha.edu.in" },
    { roll: "1842142", name: "Aditya Alok", email: "aditya.alok@tha.edu.in" },
    { roll: "184242", name: "ADITYA SEN", email: "aditya.sen@tha.edu.in" },
    { roll: "184251", name: "ADRITA PAUL", email: "adrita.paul@tha.edu.in" },
    { roll: "184205", name: "Aishani Gupta", email: "aishani.gupta@tha.edu.in" },
    { roll: "184243", name: "AKASH DAS", email: "akash.das@tha.edu.in" },
    { roll: "1842143", name: "ALOK KUMAR PANDEY", email: "alok.kumar.pandey@tha.edu.in" },
    { roll: "1842148", name: "ANANBADYO DAS", email: "ananbadyo.das@tha.edu.in" },
    { roll: "1842144", name: "ANAND KUMAR SHAW", email: "anand.kumar.shaw@tha.edu.in" },
    { roll: "184231", name: "ANIRBAN MONDAL", email: "anirban.mondal@tha.edu.in" },
    { roll: "184204", name: "ANJASH KAR", email: "anjash.kar@tha.edu.in" },
    { roll: "184258", name: "ANKITA BANERJEE", email: "ankita.banerjee@tha.edu.in" },
    { roll: "184214", name: "ankita sardar", email: "ankita.sardar@tha.edu.in" },
    { roll: "184229", name: "ANUBHAV BAGCHI", email: "anubhav.bagchi@tha.edu.in" },
    { roll: "1842113", name: "Anwesha paul", email: "anwesha.paul@tha.edu.in" },
    { roll: "1842123", name: "arjeeta Chakraborty", email: "arjeeta.chakraborty@tha.edu.in" },
    { roll: "184255", name: "ARKO BANERJEE", email: "arko.banerjee@tha.edu.in" },
    { roll: "1842151", name: "ARYA MUKHOPADHYAY", email: "arya.mukhopadhyay@tha.edu.in" },
    { roll: "1842131", name: "Aryan Shaw", email: "aryan.shaw@tha.edu.in" },
    { roll: "1842145", name: "ASIT KUMAR BARIK", email: "asit.kumar.barik@tha.edu.in" },
    { roll: "184276", name: "AYAN KUMAR SAHOO", email: "ayan.kumar.sahoo@tha.edu.in" },
    { roll: "184217", name: "bhakti kothari", email: "bhakti.kothari@tha.edu.in" },
    { roll: "1842136", name: "Bidisha Baidya", email: "bidisha.baidya@tha.edu.in" },
    { roll: "184249", name: "BRISTI MONDAL", email: "bristi.mondal@tha.edu.in" },
    { roll: "1842107", name: "Debadrita Dutta", email: "debadrita.dutta@tha.edu.in" },
    { roll: "184297", name: "DEBAMITA SINHA", email: "debamita.sinha@tha.edu.in" },
    { roll: "1842133", name: "Debapriya Giri", email: "debapriya.giri@tha.edu.in" },
    { roll: "1842141", name: "Debarghya Poddar", email: "debarghya.poddar@tha.edu.in" },
    { roll: "1842109", name: "Deppankar shaw", email: "deppankar.shaw@tha.edu.in" },
    { roll: "1842118", name: "Deti Ray", email: "deti.ray@tha.edu.in" },
    { roll: "1842124", name: "Dipsikha Banerjee", email: "dipsikha.banerjee@tha.edu.in" },
    { roll: "184209", name: "Dristi Patel", email: "dristi.patel@tha.edu.in" },
    { roll: "1842105", name: "FAIZ KHAN", email: "faiz.khan@tha.edu.in" },
    { roll: "184206", name: "Jagnik Dhar", email: "jagnik.dhar@tha.edu.in" },
    { roll: "184256", name: "JAISMINE JAISWAL", email: "jaismine.jaiswal@tha.edu.in" },
    { roll: "1842129", name: "Jayashree Dey", email: "jayashree.dey@tha.edu.in" },
    { roll: "184223", name: "Jenia Parveen", email: "jenia.parveen@tha.edu.in" },
    { roll: "1842128", name: "Kaushal Khandelwal", email: "kaushal.khandelwal@tha.edu.in" },
    { roll: "1842121", name: "Kaustav Sadhu", email: "kaustav.sadhu@tha.edu.in" },
    { roll: "184287", name: "Khadija Indorewala", email: "khadija.indorewala@tha.edu.in" },
    { roll: "184212", name: "Krish Viradiya", email: "krish.viradiya@tha.edu.in" },
    { roll: "184237", name: "MAHARGHYA SARKAR", email: "mahargya.sarkar@tha.edu.in" },
    { roll: "184265", name: "MD ALTAF HOSSAIN", email: "md.altaf.hossain@tha.edu.in" },
    { roll: "1842137", name: "Md Arbaz", email: "md.arbaz@tha.edu.in" },
    { roll: "184236", name: "MD KAIF ALI", email: "md.kaif.ali@tha.edu.in" },
    { roll: "184282", name: "MIRAJ HOSSAIN", email: "miraj.hossain@tha.edu.in" },
    { roll: "1842130", name: "Mohmmad Irfan", email: "mohmmad.irfan@tha.edu.in" },
    { roll: "184269", name: "MOUSUMI BAIDYA", email: "mousumi.baidya@tha.edu.in" },
    { roll: "184235", name: "NABHONEEL KAR", email: "nabhoneel.kar@tha.edu.in" },
    { roll: "184215", name: "nadeem khan", email: "nadeem.khan@tha.edu.in" },
    { roll: "1842122", name: "Nandita Pramanik", email: "nandita.pramanik@tha.edu.in" },
    { roll: "184260", name: "NEHA SINGH", email: "neha.singh@tha.edu.in" },
    { roll: "184219", name: "NILANKO DAS", email: "nilanko.das@tha.edu.in" },
    { roll: "184213", name: "nimisha biswas", email: "nimisha.biswas@tha.edu.in" },
    { roll: "184230", name: "NIRJHAR BAKSH", email: "nirjhar.baksh@tha.edu.in" },
    { roll: "184280", name: "PRANESHA DUTTA", email: "pranesha.dutta@tha.edu.in" },
    { roll: "184270", name: "NITAL KUMAR", email: "nital.kumar@tha.edu.in" },
    { roll: "1842138", name: "KASAF MAKSUD", email: "kasaf.maksud@tha.edu.in" },
    { roll: "1842117", name: "VIKAS KUMAR RAY", email: "vikas.kumar.ray@tha.edu.in" },
    { roll: "184241", name: "PURBITA KARMAKAR", email: "purbita.karmakar@tha.edu.in" },
    { roll: "184234", name: "PUSHKAR SHAW", email: "pushkar.shaw@tha.edu.in" },
    { roll: "1842110", name: "SAGNIK SAHA", email: "sagnik.saha@tha.edu.in" },
    { roll: "184228", name: "SANIYA KUMARI SINGH", email: "saniya.kumari.singh@tha.edu.in" },
    { roll: "184250", name: "PARTHA DAS", email: "partha.das@tha.edu.in" },
    { roll: "184285", name: "PIYUSH SINGH", email: "piyush.singh@tha.edu.in" },
    { roll: "1842120", name: "POUSALI CHATTERJEE", email: "pousali.chatterjee@tha.edu.in" },
    { roll: "184222", name: "PRATYUSHA SHARMA", email: "pratyusha.sharma@tha.edu.in" },
    { roll: "184232", name: "PRINCE JHA", email: "prince.jha@tha.edu.in" },
    { roll: "184284", name: "PRIYANKA SAMANTA", email: "priyanka.samanta@tha.edu.in" },
    { roll: "1842127", name: "RANA GHOSH", email: "rana.ghosh@tha.edu.in" },
    { roll: "1842116", name: "RITORMI GHOSH", email: "ritormi.ghosh@tha.edu.in" },
    { roll: "184240", name: "RUPAM BHOWMICK", email: "rupam.bhowmick@tha.edu.in" },
    { roll: "184268", name: "RUPSA GHOSH", email: "rupsa.ghosh@tha.edu.in" },
    { roll: "184272", name: "SATYAKI HAZRA", email: "satyaki.hazra@tha.edu.in" },
    { roll: "184290", name: "SHARBANI MITRA", email: "sharbani.mitra@tha.edu.in" },
    { roll: "184245", name: "SHINJINI BHATTACHARJEE", email: "shinjini.bhattacharjee@tha.edu.in" },
    { roll: "1842101", name: "SHRESTH MADANI", email: "shresth.madani@tha.edu.in" },
    { roll: "1842147", name: "SHREYA SAHOO", email: "shreya.sahoo@tha.edu.in" },
    { roll: "184233", name: "SHREYAS GHOSH", email: "shreyas.ghosh@tha.edu.in" },
    { roll: "184298", name: "SNEHA SHAW", email: "sneha.shaw@tha.edu.in" },
    { roll: "184264", name: "SOUMILI GHOSH", email: "soumili.ghosh@tha.edu.in" },
    { roll: "184210", name: "SOUMITA DAS", email: "soumita.das@tha.edu.in" },
    { roll: "184254", name: "SOUNAK GHOSH", email: "sounak.ghosh@tha.edu.in" },
    { roll: "1842146", name: "SOURAB GUPTA", email: "sourab.gupta@tha.edu.in" },
    { roll: "184299", name: "SOURODEEP SARKAR", email: "sourodeep.sarkar@tha.edu.in" },
    { roll: "184218", name: "SOUVIK MONDAL", email: "souvik.mondal@tha.edu.in" },
    { roll: "1842102", name: "SRINJOY BISWAS", email: "srinjoy.biswas@tha.edu.in" },
    { roll: "184252", name: "SUBHADIP KAR", email: "subhadip.kar@tha.edu.in" },
    { roll: "184289", name: "SUBHAJIT SAMANTA", email: "subhajit.samanta@tha.edu.in" },
    { roll: "1842125", name: "SUBHAM KUMAR PANDEY", email: "subham.kumar.pandey@tha.edu.in" },
    { roll: "184247", name: "SUMIT MAHATO", email: "sumit.mahato@tha.edu.in" },
    { roll: "184211", name: "SUPRATIM SAHA", email: "supratim.saha@tha.edu.in" },
    { roll: "184271", name: "SWASTICKA NANDY", email: "swasticka.nandy@tha.edu.in" },
    { roll: "184288", name: "SWATI KUMARI SAH", email: "swati.kumari.sah@tha.edu.in" },
    { roll: "1842149", name: "TANISHA GUPTA", email: "tanisha.gupta@tha.edu.in" },
    { roll: "184267", name: "TANISHA SHAW", email: "tanisha.shaw@tha.edu.in" },
    { roll: "184238", name: "TANNISHTHA BERA", email: "tannishttha.bera@tha.edu.in" },
    { roll: "1842103", name: "UDITA GUHA", email: "udita.guha@tha.edu.in" },
    { roll: "184281", name: "SANJANA GHOSH", email: "sanjana.ghosh@tha.edu.in" },
    { roll: "184225", name: "RAJOSHREE DAS", email: "rajoshree.das@tha.edu.in" },
    { roll: "184201", name: "SOUMYAJIT NAIYA", email: "soumyajit.naiya@tha.edu.in" },
    { roll: "1842100", name: "PRIYANSHU MONDAL", email: "priyanshu.mondal@tha.edu.in" },
    { roll: "1842140", name: "ROHIT PRASAD", email: "rohit.prasad@tha.edu.in" },
    { roll: "1842135", name: "Shubham Ray", email: "shubham.ray@tha.edu.in" },
    { roll: "1842126", name: "SOHAM SARKAR", email: "soham.sarkar@tha.edu.in" },
    { roll: "184257", name: "SOUMYA PRATIM SARKAR", email: "soumya.pratim.sarkar@tha.edu.in" },
    { roll: "184208", name: "Prithbi Raj Ghosh", email: "prithbi.raj.ghosh@tha.edu.in" },
    { roll: "184203", name: "SNEHA DUTTA", email: "sneha.dutta@tha.edu.in" },
    { roll: "184295", name: "RWITIKA SARKAR", email: "rwitika.sarkar@tha.edu.in" }
];

const contentData = [
    // --- Semister 1: Year 2025 (Foundation) - 2 Subjects ---
    {id:"sem1-sub1", title:"C-Programming", genre:"Programming", year:2025, rating:9.0, pdfLink:"#404", modules: []},
    {id:"sem1-sub2", title:"Digital Electronics", genre:"Hardware", year:2025, rating:8.5, pdfLink:"assets/pdfs/Digital_Electronics_Handbook.pdf", modules: []},
    
    // --- Semister 2: Year 2025 (Web Dev & Architecture) - 2 Subjects ---
    {id:"sem2-sub1", title:"HTML, CSS, & JavaScript", genre:"Web Dev", year:2025, rating:9.2, pdfLink:"#404", modules: []},
    {id:"sem2-sub2", title:"Computer Architecture", genre:"Core CS", year:2025, rating:8.8, pdfLink:"assets/pdfs/Computer_Architecture_Book.pdf", modules: []},
    
    // --- Semister 3: Year 2026 (DSA, Python, Constitution, Marketing) - 4 Subjects ---
    {
        id:"sem3-sub1",
        title:"Data Struct. & Algo. (C)",
        genre:"Algorithms",
        year:2026,
        rating:9.5,
        pdfLink:"assets/pdfs/DSA_Notes_Full.pdf",
        modules:[
            { title: "Module 1: Basic Data Structures", pdfLink: "assets/pdfs/3RD-SEM/DSA/M-1.pdf" },
            { title: "Module 2: Advanced Data Structures", pdfLink: "assets/pdfs/3RD-SEM/DSA/M-2.pdf" },
            { title: "Module 3: Algorithms and Analysis", pdfLink: "assets/pdfs/3RD-SEM/DSA/M-3.pdf" },
            { title: "MCQ: CA3", pdfLink:"" },
        ]
    },
    {
        id:"sem3-sub2",
        title:"Python Programming",
        genre:"Programming",
        year:2026,
        rating:9.1,
        pdfLink:"assets/pdfs/Python_for_Data.pdf",
        modules: [
            { title: "Module 1", pdfLink: "/assets/pdfs/3RD-SEM/PYTHON/M1.pdf" },
            { title: "Module 2", pdfLink: "/assets/pdfs/3RD-SEM/PYTHON/M2.pdf" },
            { title: "MCQ: CA3", pdfLink:"pdf-error.html"},
        ]
    },
    {
        id:"sem3-sub3",
        title:"Indian Constitution",
        genre:"AECC",
        year:2026,
        rating:9.1,
        pdfLink:"assets/pdfs/Python_for_Data.pdf",
        modules: [
            { title: "Module 1: Introduction to Constitution", pdfLink: "assets/pdfs/3RD-SEM/INDIAN CONSTITUTION/M1.pdf" },
            { title: "Module 2: Union Executive", pdfLink: "assets/pdfs/3RD-SEM/INDIAN CONSTITUTION/M2.pdf" },
            { title: "Module 3: State and Local Governments", pdfLink: "assets/pdfs/3RD-SEM/INDIAN CONSTITUTION/M3.pdf" },
        ]
    },
    {
        id:"sem3-sub4",
        title:"Principal of Marketing",
        genre:"MIM",
        year:2026,
        rating:9.0,
        pdfLink:"assets/pdfs/Marketing_Principles.pdf",
        modules: [
            { title: "Module 1", pdfLink: "assets/pdfs/3RD-SEM/PRINCIPAL OF MAKETING/M1.pdf" },
            { title: "Module 2", pdfLink: "assets/pdfs/3RD-SEM/PRINCIPAL OF MAKETING/M2.pdf" },
            { title: "Module 3", pdfLink: "assets/pdfs/3RD-SEM/PRINCIPAL OF MAKETING/M3.pdf"},
            { title: "Module 4", pdfLink: "assets/pdfs/3RD-SEM/PRINCIPAL OF MAKETING/M4.pdf"},
            { title: "Module 5", pdfLink: "assets/pdfs/3RD-SEM/PRINCIPAL OF MAKETING/M5.pdf"},
        ]
    },
    
    // --- Semister 4: Year 2026 (OS & DBMS) - 3 Subjects ---
    {id:"sem4-sub1", title:"Operating Systems", genre:"Core CS", year:2026, rating:8.7, pdfLink:"assets/pdfs/OS_Principles.pdf", modules: []},
    {id:"sem4-sub2", title:"Database Management (DBMS)", genre:"Data", year:2026, rating:8.9, pdfLink:"assets/pdfs/DBMS_Concepts.pdf", modules: []},
    {id:"sem4-sub3", title:"Software Engineering", genre:"Methodology", year:2026, rating:8.4, pdfLink:"assets/pdfs/Software_Engineering_Practices.pdf", modules: []},


    // --- Semister 5: Year 2027 (Engineering) - 2 Subjects ---
    {id:"sem5-sub1", title:" PHP WITH MYSQL", genre:"Data Base Management", year:2027, rating:8, pdfLink:"assets/pdfs/Computer_Networks_Protocols.pdf", modules: []},
    {id:"sem5-sub2", title:"Object Oriented Programming with Java", genre:"Programming", year:2027, rating:9, pdfLink:"assets/pdfs/Mobile_App_Notes.pdf", modules: []},


    // --- Semister 6: Year 2027 (Emerging Tech) - 2 Subjects ---
    {id:"sem6-sub1", title:"Advance Java with Web Application", genre:"Advance Java", year:2027, rating:6, pdfLink:"assets/pdfs/AI_Fundamentals.pdf", modules: []},
    {id:"sem6-sub2", title:" Unix and Shell Programming ", genre:"Programming", year:2027, rating:8, pdfLink:"assets/pdfs/Compiler_Design_Theory.pdf", modules: []},


    // --- Semister 7: Year 2028 (Advanced Dev) - 2 Subjects ---
    {id:"sem7-sub1", title:"Cloud Computing", genre:"Emerging", year:2028, rating:8.5, pdfLink:"assets/pdfs/Cloud_Tech_Basics.pdf", modules: []},
    {id:"sem7-sub2", title:"Cyber Security & Cryptography", genre:"Security", year:2028, rating:8.8, pdfLink:"assets/pdfs/Cyber_Security_Handbook.pdf", modules: []},
    
    // --- Semister 8: Year 2028 (Finals) - 2 Subjects ---
    {id:"sem8-sub1", title:"Major Project / Thesis", genre:"Final", year:2028, rating:9.7, pdfLink:"assets/pdfs/Thesis_Guidelines.pdf", modules: []},
    {id:"sem8-sub2", title:"Professional Ethics & Law", genre:"Ethics", year:2028, rating:8.2, pdfLink:"assets/pdfs/Ethics_and_Law_for_IT.pdf", modules: []}
];


// ... (Keep other functions like getViewCounts, saveViewCounts, createSubjectCard, etc., as they are) ...

/**
 * Function to get or initialize the view count object from localStorage.
 */
function getViewCounts() {
    const counts = localStorage.getItem('pdfViewCounts');
    return counts ? JSON.parse(counts) : {};
}

/**
 * Function to save the view count object to localStorage.
 */
function saveViewCounts(counts) {
    localStorage.setItem('pdfViewCounts', JSON.stringify(counts));
}

/**
 * Creates the HTML markup for a single subject card.
 */
function createSubjectCard(item) {
    const card = document.createElement("a");
    card.href = "#";
    card.className = "subject-card";
    card.dataset.id = item.id;
    card.dataset.pdfLink = item.pdfLink;

    const semesterNumberMatch = item.id.match(/sem(\d+)/);
    const semesterNumber = semesterNumberMatch ? parseInt(semesterNumberMatch[1]) : 0;

    card.addEventListener('click', (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            alert("Please log in first to access the notes.");
            showLoginModal();
            return;
        }

        if (item.pdfLink === "#404") {
            alert("Error: The requested resource is not available (404 Not Found).");
            return;
        }
        
        if (semesterNumber <= 2 || semesterNumber >= 4) {
            showNotesUnavailableModal();
            return;
        }

        if (item.modules && item.modules.length > 0) {
            showModuleModal(item);
        } else {
            selectedPdfUrl = item.pdfLink;
            showWatermarkModal();
        }
    });
    
    const posterContent = `<i class="fa-solid fa-file-pdf"></i>`;


    card.innerHTML = `
        <div class="subject-poster">
            ${posterContent}
            <div class="subject-rating">${item.rating}</div>
        </div>
        <div class="subject-info">
            <h3 class="subject-title">${item.title}</h3>
            <div class="subject-meta">
                <span>${item.genre}</span>
                <span>${item.year || ""}</span>
            </div>
        </div>
    `;
    return card;
}


/**
 * Generates and inserts subject cards into the specified container.
 */
function generateCards(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container not found for ID: ${containerId}`);
        return;
    }
    container.innerHTML = "";
    items.forEach(item => {
        container.appendChild(createSubjectCard(item));
    });
}

// --- MODAL CONTROL FUNCTIONS ---

/* --- Login Modal Handlers --- */
function showLoginModal(e) {
    if (e) e.preventDefault();
    if (!isLoggedIn) {
        document.getElementById('loginModal').style.display = 'flex';
    } else {
        alert(`You are already logged in as ${loggedInUserName}.`);
    }
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// --- NEW FUNCTION: Custom Error Card Simulation ---
function showErrorCard(message) {
    // This simulates a custom error card reflecting the login failure details.
    const styledMessage = `❌ Authentication Error ❌\n\n${message}`;
    alert(styledMessage);
}
// --- END NEW FUNCTION ---

/**
 * MODIFIED performLogin function for strict RollNo/Name/Email check
 */
function performLogin() {
    // Trim and normalize inputs
    const nameInput = document.getElementById('loginName').value.trim();
    const rollInput = document.getElementById('loginRoll').value.trim();
    const emailInput = document.getElementById('loginEmail').value.trim(); // Get the email input

    if (!nameInput || !rollInput || !emailInput) {
        showErrorCard("All login fields (Name, Roll, College Email) are required.");
        return;
    }

    // Prepare inputs for comparison: lowercase and remove all internal whitespace for robustness
    const normalizedInputName = nameInput.toLowerCase().replace(/\s/g, '');
    
    // --- AUTHENTICATION LOGIC ---
    let matchedStudent = null;

    authorizedStudents.forEach(student => {
        // 1. Roll must be an EXACT match
        const rollMatch = student.roll === rollInput;
        
        // 2. Name must match after normalization (handles case and extra spaces)
        const normalizedStudentName = student.name.toLowerCase().replace(/\s/g, '');
        const nameMatch = normalizedStudentName === normalizedInputName;

        // 3. Email must be an EXACT match (case-insensitive check)
        const emailMatch = student.email.toLowerCase() === emailInput.toLowerCase();
        
        // Final check: All three must match
        if (rollMatch && nameMatch && emailMatch) {
            matchedStudent = student;
        }
    });

    if (!matchedStudent) {
        showErrorCard("Login Failed: The combination of your University Roll No., Full Name, and College Email ID does not match our authorized student records. Please ensure all details are correct.");
        return;
    }
    
    // If we reach here, the user is authorized
    isLoggedIn = true;
    loggedInUserName = nameInput;
    
    // Update Header
    const loginButton = document.getElementById('loginButton');
    loginButton.textContent = `Logged in as ${loggedInUserName.split(' ')[0]}`;
    loginButton.className = loginButton.className.replace('bg-primary-color', 'bg-secondary-color').replace('hover:bg-blue-600', 'hover:bg-green-600');
    loginButton.onclick = () => alert(`You are logged in as ${loggedInUserName}.`);

    closeLoginModal();
    alert(`✅ Welcome, ${nameInput}! Access granted. You are now logged in.`);
    
    // Set the user name for the watermarking step
    document.getElementById('userName').value = nameInput;
}


/* --- Subject/Module Modals --- */
function showModuleModal(subject) {
    document.getElementById('modalSubjectTitle').textContent = `Modules for ${subject.title}`;
    const modulesListContainer = document.getElementById('modulesList');
    modulesListContainer.innerHTML = '';


    subject.modules.forEach(module => {
        const moduleItem = document.createElement('div');
        moduleItem.className = 'modal-list-item';
        moduleItem.innerHTML = `
            <span>${module.title}</span>
            <i class="fa-solid fa-book text-lg text-secondary-color"></i>
        `;
        moduleItem.onclick = () => {
            selectedPdfUrl = module.pdfLink;
            closeModuleModal();
            showWatermarkModal();
        };
        modulesListContainer.appendChild(moduleItem);
    });
    
    document.getElementById('moduleModal').style.display = 'flex';
}


function closeModuleModal() {
    document.getElementById('moduleModal').style.display = 'none';
}

function showWatermarkModal() {
    document.getElementById('watermarkModal').style.display = 'flex';
}

function closeWatermarkModal() {
    document.getElementById('watermarkModal').style.display = 'none';
}

function showNotesUnavailableModal() {
    document.getElementById('notesUnavailableModal').style.display = 'flex';
}

function closeNotesUnavailableModal() {
    document.getElementById('notesUnavailableModal').style.display = 'none';
}

/* --- PDF Viewer Modal Handlers --- */
function showPdfViewerModal(pdfUrl) {
    const iframe = document.getElementById('pdfFrame');
    // Load the URL into the iframe
    iframe.src = pdfUrl; 
    document.getElementById('pdfViewerModal').style.display = 'flex';
    
    // Re-apply right-click prevention on the iframe's content if possible (limited by CORS)
    iframe.onload = function() {
        try {
            iframe.contentWindow.document.body.oncontextmenu = function() { return false; };
        } catch (e) {
            // This often fails due to CORS, but it's the best client-side attempt
            console.log("Could not disable right-click inside PDF viewer (CORS restriction).");
        }
    };
}

function closePdfViewerModal() {
    document.getElementById('pdfViewerModal').style.display = 'none';
    // Clear the iframe source to stop any loading/viewing processes
    document.getElementById('pdfFrame').src = ''; 
}


/**
 * Handles usage tracking, prepares the URL with watermark params, and opens the PDF viewer.
 */
function accessDocument() {
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();

    if (!name || !phone) {
        alert("Please enter both your name and phone number for the watermark.");
        return;
    }
    
    const counts = getViewCounts();
    let currentCount = counts[selectedPdfUrl] || 0;
    
    // --- USAGE TRACKING LOGIC (Client-Side Simulation) ---
    if (currentCount >= MAX_FREE_VIEWS) {
        alert(`🚨 Free Trial Limit Reached 🚨\nYou have viewed this document ${currentCount} times. You have used your free trial and should consider taking a subscription soon. The document will still open for now.`);
    }

    counts[selectedPdfUrl] = currentCount + 1;
    saveViewCounts(counts);
    // --- END USAGE TRACKING ---


    // Construct a URL with parameters for the watermark
    const finalUrl = `${selectedPdfUrl}?user=${encodeURIComponent(name)}&id=${encodeURIComponent(phone)}#toolbar=0&navpanes=0&scrollbar=0`; 


    // Open the document in the custom viewer modal
    closeWatermarkModal();
    showPdfViewerModal(finalUrl);
    
    // Clear phone input (optional)
    document.getElementById('userPhone').value = '';
}


// Global functions to allow them to be called from the inline onclick in the modals
window.accessDocument = accessDocument;
window.closeModuleModal = closeModuleModal;
window.closeWatermarkModal = closeWatermarkModal;
window.closeNotesUnavailableModal = closeNotesUnavailableModal;
window.closeLoginModal = closeLoginModal;
window.showLoginModal = showLoginModal;
window.performLogin = performLogin;
window.closePdfViewerModal = closePdfViewerModal; 
window.showErrorCard = showErrorCard;


/**
 * Initializes semester cards.
 */
function initializeSemesters(data) {
    const semesterMap = {1: 2, 2: 2, 3: 4, 4: 3, 5: 2, 6: 2, 7: 2, 8: 2};
    let dataIndex = 0;
    for (let i = 1; i <= 8; i++) {
        const containerId = `semister-${i}-container`;
        const itemsPerSection = semesterMap[i] || 0;
        const sectionData = data.slice(dataIndex, dataIndex + itemsPerSection);
        dataIndex += itemsPerSection;
        generateCards(containerId, sectionData);
    }
}


// Event listeners for initialization and modal closing
document.addEventListener('DOMContentLoaded', () => {
    initializeSemesters(contentData);
    const modals = [
        document.getElementById('moduleModal'),
        document.getElementById('watermarkModal'),
        document.getElementById('notesUnavailableModal'),
        document.getElementById('loginModal'),
        document.getElementById('pdfViewerModal') 
    ];

    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
                if (modal.id === 'pdfViewerModal') {
                        // If the user clicks outside the viewer, clear the content
                    closePdfViewerModal(); 
                }
            }
        });
    }
});