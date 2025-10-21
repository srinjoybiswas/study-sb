let selectedPdfUrl = "";
let isLoggedIn = false;
let loggedInUserName = "";
const MAX_FREE_VIEWS = 5;


// 1. Master list of authorized students (Roll No. must be exact, Name comparison is now robust)
const authorizedStudents = [
    { roll: "184216", name: "Abhigyan biswas" },
    { roll: "184266", name: "ABHINANDAN PAUL" },
    { roll: "1842132", name: "Abhirup Bhattacharya" },
    { roll: "184239", name: "ABHIRUP GHOSH" },
    //{ roll: "1842108", name: "Aditi Kamila" },
    { roll: "1842142", name: "Aditya Alok" },
    { roll: "184242", name: "ADITYA SEN" },
    { roll: "184251", name: "ADRITA PAUL" },
    { roll: "184205", name: "Aishani Gupta" },
    { roll: "184243", name: "AKASH DAS" },
    { roll: "1842143", name: "ALOK KUMAR PANDEY" },
    { roll: "1842148", name: "ANANBADYO DAS" },
    { roll: "1842144", name: "ANAND KUMAR SHAW" },
    { roll: "184231", name: "ANIRBAN MONDAL" },
    { roll: "184204", name: "ANJASH KAR" },
    { roll: "184258", name: "ANKITA BANERJEE" },
    { roll: "184214", name: "ankita sardar" },
    { roll: "184229", name: "ANUBHAV BAGCHI" },
    { roll: "1842113", name: "Anwesha paul" },
    { roll: "1842123", name: "arjeeta Chakraborty" },
    { roll: "184255", name: "ARKO BANERJEE" },
    { roll: "1842151", name: "ARYA MUKHOPADHYAY" },
    { roll: "1842131", name: "Aryan Shaw" },
    { roll: "1842145", name: "ASIT KUMAR BARIK" },
    { roll: "184276", name: "AYAN KUMAR SAHOO" },
    { roll: "184217", name: "bhakti kothari" },
    { roll: "1842136", name: "Bidisha Baidya" },
    { roll: "184249", name: "BRISTI MONDAL" },
    { roll: "1842107", name: "Debadrita Dutta" },
    { roll: "184297", name: "DEBAMITA SINHA" },
    { roll: "1842133", name: "Debapriya Giri" },
    { roll: "1842141", name: "Debarghya Poddar" },
    { roll: "1842109", name: "Deppankar shaw" },
    { roll: "1842118", name: "Deti Ray" },
    { roll: "1842124", name: "Dipsikha Banerjee" },
    { roll: "184209", name: "Dristi Patel" },
    { roll: "1842105", name: "FAIZ KHAN" },
    { roll: "184206", name: "Jagnik Dhar" },
    { roll: "184256", name: "JAISMINE JAISWAL" },
    { roll: "1842129", name: "Jayashree Dey" },
    { roll: "184223", name: "Jenia Parveen" },
    { roll: "1842128", name: "Kaushal Khandelwal" },
    { roll: "1842121", name: "Kaustav Sadhu" },
    { roll: "184287", name: "Khadija Indorewala" },
    { roll: "184212", name: "Krish Viradiya" },
    { roll: "184237", name: "MAHARGHYA SARKAR" },
    //{ roll: "184246", name: "MANONIYA MAJUMDER" },
    { roll: "184265", name: "MD ALTAF HOSSAIN" },
    { roll: "1842137", name: "Md Arbaz" },
    { roll: "184236", name: "MD KAIF ALI" },
    { roll: "184282", name: "MIRAJ HOSSAIN" },
    { roll: "1842130", name: "Mohmmad Irfan" },
    { roll: "184269", name: "MOUSUMI BAIDYA" },
    { roll: "184235", name: "NABHONEEL KAR" },
    { roll: "184215", name: "nadeem khan" },
    { roll: "1842122", name: "Nandita Pramanik" },
    { roll: "184260", name: "NEHA SINGH" },
    { roll: "184219", name: "NILANKO DAS" },
    { roll: "184213", name: "nimisha biswas" },
    { roll: "184230", name: "NIRJHAR BAKSH" },
    { roll: "184280", name: "PRANESHA DUTTA" },
    { roll: "184270", name: "NITAL KUMAR" },
    { roll: "1842138", name: "KASAF MAKSUD" },
    { roll: "1842117", name: "VIKAS KUMAR RAY" },
    { roll: "184241", name: "PURBITA KARMAKAR" },
    { roll: "184234", name: "PUSHKAR SHAW" },
    { roll: "1842110", name: "SAGNIK SAHA" },
    { roll: "184228", name: "SANIYA KUMARI SINGH" },
    { roll: "184250", name: "PARTHA DAS" },
    { roll: "184285", name: "PIYUSH SINGH" },
    { roll: "1842120", name: "POUSALI CHATTERJEE" },
    { roll: "184222", name: "PRATYUSHA SHARMA" },
    { roll: "184232", name: "PRINCE JHA" },
    { roll: "184284", name: "PRIYANKA SAMANTA" },
    { roll: "1842127", name: "RANA GHOSH" },
    { roll: "1842116", name: "RITORMI GHOSH" },
    { roll: "184240", name: "RUPAM BHOWMICK" },
    { roll: "184268", name: "RUPSA GHOSH" },
    { roll: "184272", name: "SATYAKI HAZRA" },
    { roll: "184290", name: "SHARBANI MITRA" },
    { roll: "184245", name: "SHINJINI BHATTACHARJEE" },
    { roll: "1842101", name: "SHRESTH MADANI" },
    { roll: "1842147", name: "SHREYA SAHOO" },
    { roll: "184233", name: "SHREYAS GHOSH" },
    { roll: "184298", name: "SNEHA SHAW" },
  //  { roll: "184277", name: "SOHAM SAHA" },
    { roll: "184264", name: "SOUMILI GHOSH" },
    { roll: "184210", name: "SOUMITA DAS" },
    { roll: "184254", name: "SOUNAK GHOSH" },
    { roll: "1842146", name: "SOURAB GUPTA" },
    { roll: "184299", name: "SOURODEEP SARKAR" },
    { roll: "184218", name: "SOUVIK MONDAL" },
    //{ roll: "184279", name: "SREEJA CHAKRABARTY" },
    { roll: "1842102", name: "SRINJOY BISWAS" },
    { roll: "184252", name: "SUBHADIP KAR" },
    { roll: "184289", name: "SUBHAJIT SAMANTA" },
    { roll: "1842125", name: "SUBHAM KUMAR PANDEY" },
  //  { roll: "1842150", name: "SUGANDHA SINGH" },
    { roll: "184247", name: "SUMIT MAHATO" },
    { roll: "184211", name: "SUPRATIM SAHA" },
    { roll: "184271", name: "SWASTICKA NANDY" },
    { roll: "184288", name: "SWATI KUMARI SAH" },
    { roll: "1842149", name: "TANISHA GUPTA" },
    { roll: "184267", name: "TANISHA SHAW" },
    { roll: "184238", name: "TANNISHTHA BERA" },
    { roll: "1842103", name: "UDITA GUHA" },
    { roll: "184281", name: "SANJANA GHOSH" },
    { roll: "184225", name: "RAJOSHREE DAS" },
    { roll: "184201", name: "SOUMYAJIT NAIYA" },
    //{ roll: "184295", name: "RWITIKA SARKAR" },
    { roll: "1842100", name: "PRIYANSHU MONDAL" },
    { roll: "1842140", name: "ROHIT PRASAD" },
    { roll: "1842135", name: "Shubham Ray" },
    { roll: "1842126", name: "SOHAM SARKAR" },
    { roll: "184257", name: "SOUMYA PRATIM SARKAR" },
    { roll: "184208", name: "Prithbi Raj Ghosh" },
    { roll: "184203", name: "SNEHA DUTTA" }
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
            { title: "Module 1: Basic Data Structures", pdfLink: "assets/pdfs/3RD-SEM/M-1.pdf" },
            { title: "Module 2: Advanced Data Structures", pdfLink: "assets/pdfs/3RD-SEM/M-2.pdf" },
            { title: "Module 3: Algorithms and Analysis", pdfLink: "assets/pdfs/3RD-SEM/M-3.pdf" },
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

/**
 * 2. MODIFIED performLogin function for strict RollNo/Name check
 */
function performLogin() {
    // Trim and normalize inputs
    const nameInput = document.getElementById('loginName').value.trim();
    const rollInput = document.getElementById('loginRoll').value.trim();
    const emailInput = document.getElementById('loginEmail').value.trim();

    if (!nameInput || !rollInput || !emailInput) {
        alert("All login fields are required.");
        return;
    }

    // Prepare inputs for comparison: lowercase and remove all internal whitespace for robustness
    const normalizedInputName = nameInput.toLowerCase().replace(/\s/g, '');
    
    // --- AUTHENTICATION LOGIC ---
    const isAuthorized = authorizedStudents.some(student => {
        // Roll must be an EXACT match
        const rollMatch = student.roll === rollInput;
        
        // Normalize student data name: lowercase and remove all internal whitespace
        const normalizedStudentName = student.name.toLowerCase().replace(/\s/g, '');
        
        // Name must match after normalization (handles case and extra spaces)
        const nameMatch = normalizedStudentName === normalizedInputName;
        
        return rollMatch && nameMatch;
    });

    if (!isAuthorized) {
        alert("Login Failed: Your University Roll No. and Full Name combination does not match our authorized student list. Please check for spelling, capitalization, and roll number accuracy.");
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
    alert(`Welcome, ${nameInput}! Access granted. You are now logged in.`);
    
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