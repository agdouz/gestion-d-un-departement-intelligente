export interface Professor {
  id: string;
  name: string;
  specialty: string;
  weeklyHours: number;
  performanceScore: number;
  riskLevel: "Low" | "Medium" | "High";
  email: string;
  department: string;
  courses: string[];
  yearsOfService: number;
  avatar: string;
  phone: string;
  office: string;
  bio: string;
  education: string[];
  publications: number;
  researchInterests: string[];
  studentRating: number;
  totalStudents: number;
  rattrapageRate: number;
  materials: { title: string; type: "pdf" | "video"; url: string }[];
  passRate: number;
  evaluations: {
    clarity: number;
    engagement: number;
    support: number;
    materials: number;
  };
  aiFeedback: {
    strengths: string[];
    improvements: string[];
    summary: string;
  };
}

export const professors: Professor[] = [
  {
    id: "1", name: "Dr. Sarah Chen", specialty: "Machine Learning", weeklyHours: 22, performanceScore: 94, riskLevel: "Low", email: "s.chen@uni.edu", department: "Computer Science", courses: ["ML 101", "Deep Learning", "AI Ethics"], yearsOfService: 8, avatar: "SC", phone: "+1 (555) 234-5678", office: "Building A, Room 305", bio: "Dr. Chen is a leading researcher in Machine Learning with over 50 published papers. She specializes in neural architecture search and federated learning.", education: ["PhD Computer Science, Stanford University", "MSc AI, MIT", "BSc Mathematics, UC Berkeley"], publications: 52, researchInterests: ["Neural Architecture Search", "Federated Learning", "AutoML"], studentRating: 4.8, totalStudents: 180, rattrapageRate: 15, materials: [{ title: "Support de cours ML 101", type: "pdf", url: "#" }, { title: "Enregistrement Chapitre 1", type: "video", url: "#" }],
    passRate: 85,
    evaluations: { clarity: 4.9, engagement: 4.8, support: 4.6, materials: 4.9 },
    aiFeedback: {
      strengths: ["Excellente clarté d'exposition", "Supports de cours de très haute qualité"],
      improvements: ["Pourrait inclure plus de travaux pratiques dirigés"],
      summary: "Les étudiants louent votre expertise et la pédagogie de vos supports. Intégrer des mini-projets réguliers augmenterait davantage l'engagement."
    }
  },
  {
    id: "2", name: "Dr. James Wilson", specialty: "Data Science", weeklyHours: 30, performanceScore: 78, riskLevel: "High", email: "j.wilson@uni.edu", department: "Computer Science", courses: ["Data Mining", "Statistics", "Big Data", "Python Lab"], yearsOfService: 12, avatar: "JW", phone: "+1 (555) 345-6789", office: "Building B, Room 210", bio: "Dr. Wilson brings 12 years of academic and industry experience in Data Science. He previously worked at Google Research before joining academia.", education: ["PhD Statistics, Harvard University", "MSc Data Science, Columbia University", "BSc Computer Science, Georgia Tech"], publications: 38, researchInterests: ["Big Data Analytics", "Statistical Learning", "Data Visualization"], studentRating: 4.2, totalStudents: 240, rattrapageRate: 22, materials: [{ title: "TD Statistiques", type: "pdf", url: "#" }, { title: "Correction TD 1", type: "video", url: "#" }],
    passRate: 78,
    evaluations: { clarity: 4.0, engagement: 4.2, support: 4.5, materials: 4.1 },
    aiFeedback: {
      strengths: ["Grande disponibilité pour les étudiants", "Cas d'usage réels pertinents"],
      improvements: ["Rythme parfois trop rapide en début de semestre", "Légère surcharge de travail identifiée"],
      summary: "Bonne implication, mais la charge de cours dense impacte l'assimilation. L'IA suggère de lisser la progression des TD sur le mois."
    }
  },
  {
    id: "3", name: "Dr. Amira Hassan", specialty: "Cybersecurity", weeklyHours: 18, performanceScore: 91, riskLevel: "Low", email: "a.hassan@uni.edu", department: "Information Security", courses: ["Network Security", "Cryptography"], yearsOfService: 5, avatar: "AH", phone: "+1 (555) 456-7890", office: "Building C, Room 112", bio: "Dr. Hassan is an expert in post-quantum cryptography and network security protocols. Her research has been funded by NSF and DARPA.", education: ["PhD Cybersecurity, Carnegie Mellon University", "MSc Information Security, ETH Zurich", "BSc Computer Engineering, AUC"], publications: 28, researchInterests: ["Post-Quantum Cryptography", "Network Intrusion Detection", "Zero Trust Architecture"], studentRating: 4.7, totalStudents: 95, rattrapageRate: 8, materials: [{ title: "Fascicule Cryptographie", type: "pdf", url: "#" }, { title: "Introduction à la sécurité des réseaux", type: "video", url: "#" }],
    passRate: 92,
    evaluations: { clarity: 4.7, engagement: 4.6, support: 4.8, materials: 4.7 },
    aiFeedback: {
      strengths: ["Forte capacité à simplifier des concepts complexes", "Excellente interaction en salle"],
      improvements: ["Plus d'exemples sur les technologies cloud seraient appréciés"],
      summary: "Pédagogie remarquable. Les étudiants sont très satisfaits. Envisagez d'intégrer des modules sur la sécurité cloud pour répondre à la demande."
    }
  },
  {
    id: "4", name: "Dr. Michael Park", specialty: "Software Engineering", weeklyHours: 26, performanceScore: 82, riskLevel: "Medium", email: "m.park@uni.edu", department: "Computer Science", courses: ["SE Principles", "Agile Dev", "Cloud Computing"], yearsOfService: 10, avatar: "MP", phone: "+1 (555) 567-8901", office: "Building A, Room 418", bio: "Dr. Park focuses on cloud-native architectures and DevOps practices. He has consulted for major tech companies including Microsoft and Amazon.", education: ["PhD Software Engineering, University of Toronto", "MSc Computer Science, KAIST", "BSc Software Engineering, Seoul National University"], publications: 31, researchInterests: ["Cloud-Native Architecture", "DevOps & CI/CD", "Microservices Patterns"], studentRating: 4.4, totalStudents: 165, rattrapageRate: 12, materials: [{ title: "Guide de conception Agile", type: "pdf", url: "#" }, { title: "Atelier Cloud Computing", type: "video", url: "#" }],
    passRate: 88,
    evaluations: { clarity: 4.3, engagement: 4.5, support: 4.4, materials: 4.4 },
    aiFeedback: {
      strengths: ["Approche très pratique (orientée projet)", "Mise en contexte en entreprise excellente"],
      improvements: ["Les critères d'évaluation des livrables manquent parfois de précision"],
      summary: "Vos projets sont très appréciés. Il serait bénéfique de clarifier les barèmes de notation dès le début du sprint."
    }
  },
  {
    id: "5", name: "Dr. Elena Petrova", specialty: "Natural Language Processing", weeklyHours: 20, performanceScore: 96, riskLevel: "Low", email: "e.petrova@uni.edu", department: "AI Research", courses: ["NLP Fundamentals", "Computational Linguistics"], yearsOfService: 6, avatar: "EP", phone: "+1 (555) 678-9012", office: "Building D, Room 201", bio: "Dr. Petrova is a pioneer in transformer-based language models. Her work on multilingual NLP has been cited over 3,000 times.", education: ["PhD Computational Linguistics, University of Cambridge", "MSc NLP, University of Edinburgh", "BSc Linguistics, Moscow State University"], publications: 45, researchInterests: ["Large Language Models", "Multilingual NLP", "Sentiment Analysis"], studentRating: 4.9, totalStudents: 110, rattrapageRate: 5, materials: [{ title: "Cours NLP Fondamental", type: "pdf", url: "#" }, { title: "Les modèles Transformers en 60 mins", type: "video", url: "#" }],
    passRate: 95,
    evaluations: { clarity: 4.8, engagement: 4.9, support: 4.9, materials: 5.0 },
    aiFeedback: {
      strengths: ["Passion communicative", "Supports visuels exceptionnels", "Accompagnement personnalisé"],
      improvements: ["Aucun axe d'amélioration détecté"],
      summary: "Performances exceptionnelles. L'IA n'identifie aucun point de friction. Envisagez un séminaire de partage de vos méthodes pédagogiques avec vos collègues."
    }
  },
  {
    id: "6", name: "Dr. Robert Kim", specialty: "Computer Vision", weeklyHours: 28, performanceScore: 75, riskLevel: "High", email: "r.kim@uni.edu", department: "AI Research", courses: ["Image Processing", "CV Applications", "Robotics"], yearsOfService: 15, avatar: "RK", phone: "+1 (555) 789-0123", office: "Building D, Room 315", bio: "Dr. Kim has 15 years of experience in Computer Vision and Robotics. He leads the university's autonomous systems lab.", education: ["PhD Robotics, University of Michigan", "MSc Computer Vision, Georgia Tech", "BSc EE, UC San Diego"], publications: 67, researchInterests: ["Autonomous Navigation", "3D Object Detection", "Medical Imaging"], studentRating: 4.1, totalStudents: 200, rattrapageRate: 18, materials: [{ title: "TP Traitement d'images 1-4", type: "pdf", url: "#" }, { title: "Démonstration Robotique Avancée", type: "video", url: "#" }],
    passRate: 82,
    evaluations: { clarity: 3.9, engagement: 4.1, support: 4.0, materials: 4.4 },
    aiFeedback: {
      strengths: ["Expertise technique indiscutable", "Démonstrations robotiques très captivantes"],
      improvements: ["Transition un peu brusque entre les concepts théoriques et la pratique", "Délais de réponse aux emails relativement longs"],
      summary: "Une forte charge de recherche semble impacter votre disponibilité pour le suivi des élèves. L'emploi d'un TA dédié aux réponses par email pourrait améliorer ce point."
    }
  },
  {
    id: "7", name: "Dr. Lisa Thompson", specialty: "Database Systems", weeklyHours: 24, performanceScore: 87, riskLevel: "Medium", email: "l.thompson@uni.edu", department: "Computer Science", courses: ["DBMS", "NoSQL", "Data Warehousing"], yearsOfService: 9, avatar: "LT", phone: "+1 (555) 890-1234", office: "Building B, Room 305", bio: "Dr. Thompson specializes in distributed database systems and data warehousing. She holds two patents in query optimization.", education: ["PhD Computer Science, University of Wisconsin-Madison", "MSc Database Systems, UC Santa Barbara", "BSc CS, University of Illinois"], publications: 29, researchInterests: ["Distributed Databases", "Query Optimization", "Graph Databases"], studentRating: 4.5, totalStudents: 155, rattrapageRate: 14, materials: [{ title: "Schémas relationnels et requêtes SQL", type: "pdf", url: "#" }, { title: "Introduction au NoSQL", type: "video", url: "#" }],
    passRate: 86,
    evaluations: { clarity: 4.6, engagement: 4.4, support: 4.5, materials: 4.5 },
    aiFeedback: {
      strengths: ["Patience et écoute pendant les TDs", "Structure des cours claire et logique"],
      improvements: ["Manque de quiz formatifs en cours de séquence"],
      summary: "Pédagogie très équilibrée. Intégrer des petits tests interactifs (type QCM rapide) à la fin des chapitres lourds améliorerait la mémorisation du NoSQL."
    }
  },
  {
    id: "8", name: "Dr. Ahmed Nasser", specialty: "IoT & Embedded Systems", weeklyHours: 16, performanceScore: 92, riskLevel: "Low", email: "a.nasser@uni.edu", department: "Electrical Engineering", courses: ["Embedded Systems", "IoT Architecture"], yearsOfService: 4, avatar: "AN", phone: "+1 (555) 901-2345", office: "Building E, Room 102", bio: "Dr. Nasser is an emerging leader in IoT and edge computing. His smart campus project was featured in IEEE Spectrum.", education: ["PhD Electrical Engineering, TU Munich", "MSc Embedded Systems, KTH Stockholm", "BSc EE, Cairo University"], publications: 19, researchInterests: ["Edge Computing", "Smart Campus IoT", "RISC-V Architecture"], studentRating: 4.6, totalStudents: 75, rattrapageRate: 10, materials: [{ title: "Architecture IoT - Slides", type: "pdf", url: "#" }, { title: "Programmation des systèmes embarqués", type: "video", url: "#" }],
    passRate: 90,
    evaluations: { clarity: 4.5, engagement: 4.8, support: 4.6, materials: 4.5 },
    aiFeedback: {
      strengths: ["Énergie exceptionnelle en cours", "Sujets très à jour avec les avancées technologiques"],
      improvements: ["Le matériel de TP (cartes Arduino) est parfois insuffisant ou défectueux"],
      summary: "Cours extrêmement dynamique. Le principal frein relevé est d'ordre logistique : prévoyez un budget accru ou un simulateur, car l'équipement limite l'expérience étudiante."
    }
  },
];

export const workloadData = [
  { name: "Lun", hours: 32 },
  { name: "Mar", hours: 45 },
  { name: "Mer", hours: 38 },
  { name: "Jeu", hours: 50 },
  { name: "Ven", hours: 28 },
];

export const performanceData = [
  { month: "Sep", score: 82 },
  { month: "Oct", score: 85 },
  { month: "Nov", score: 79 },
  { month: "Déc", score: 88 },
  { month: "Jan", score: 91 },
  { month: "Fév", score: 87 },
];

export const departmentDistribution = [
  { name: "Informatique", value: 4, fill: "hsl(215, 88%, 35%)" },
  { name: "Recherche IA", value: 2, fill: "hsl(210, 20%, 65%)" },
  { name: "Sécurité Info", value: 1, fill: "hsl(142, 71%, 45%)" },
  { name: "Réseaux", value: 1, fill: "hsl(38, 92%, 50%)" },
];

export const aiInsights = [
  { id: 1, type: "warning" as const, title: "Déséquilibre de charge détecté", description: "Dr. James Wilson et Dr. Robert Kim dépassent leur charge. Pensez à redistribuer les cours.", confidence: 94, timestamp: "Il y a 2h" },
  { id: 2, type: "prediction" as const, title: "Baisse de performance prévue", description: "D'après les tendances, 2 enseignants pourraient voir une baisse de 10-15% au prochain semestre si la charge reste inchangée.", confidence: 87, timestamp: "Il y a 5h" },
  { id: 3, type: "optimization" as const, title: "Optimisation de l'emploi du temps", description: "L'IA a trouvé un planning optimal réduisant les conflits de salles de 34%.", confidence: 91, timestamp: "Il y a 1 jour" },
  { id: 4, type: "warning" as const, title: "Alerte d'épuisement professionnel", description: "Dr. Robert Kim présente des indicateurs de burn-out. Une réévaluation immédiate est recommandée.", confidence: 89, timestamp: "Il y a 1 jour" },
  { id: 5, type: "prediction" as const, title: "Hausse des inscriptions", description: "Les cours de Machine Learning devraient connaître une augmentation de 40% des inscriptions.", confidence: 82, timestamp: "Il y a 2 jours" },
  { id: 6, type: "optimization" as const, title: "Amélioration de l'allocation des ressources", description: "Réaffecter 2 sessions de TP pourrait économiser des ressources considérables.", confidence: 76, timestamp: "Il y a 3 jours" },
];

export const professorWorkloadChart = [
  { name: "Dr. Chen", hours: 22, capacity: 24 },
  { name: "Dr. Wilson", hours: 30, capacity: 24 },
  { name: "Dr. Hassan", hours: 18, capacity: 24 },
  { name: "Dr. Park", hours: 26, capacity: 24 },
  { name: "Dr. Petrova", hours: 20, capacity: 24 },
  { name: "Dr. Kim", hours: 28, capacity: 24 },
  { name: "Dr. Thompson", hours: 24, capacity: 24 },
  { name: "Dr. Nasser", hours: 16, capacity: 24 },
];

export interface ScheduleSlot {
  id: string;
  day: string;
  timeSlot: string;
  course: string;
  professor: string;
  room: string;
  type: "cm" | "tp" | "td";
  conflict?: boolean;
}

export const scheduleData: ScheduleSlot[] = [
  { id: "s1", day: "Lundi", timeSlot: "08:00-09:30", course: "ML 101", professor: "Dr. Chen", room: "A-301", type: "cm" },
  { id: "s2", day: "Lundi", timeSlot: "10:00-11:30", course: "Data Mining", professor: "Dr. Wilson", room: "B-205", type: "cm" },
  { id: "s3", day: "Lundi", timeSlot: "13:00-14:30", course: "Sécurité Réseaux", professor: "Dr. Hassan", room: "C-110", type: "cm" },
  { id: "s4", day: "Lundi", timeSlot: "15:00-16:30", course: "Principes GL", professor: "Dr. Park", room: "A-415", type: "cm" },
  { id: "s5", day: "Mardi", timeSlot: "08:00-09:30", course: "Deep Learning", professor: "Dr. Chen", room: "A-301", type: "tp" },
  { id: "s6", day: "Mardi", timeSlot: "10:00-11:30", course: "Statistiques", professor: "Dr. Wilson", room: "B-205", type: "cm" },
  { id: "s7", day: "Mardi", timeSlot: "10:00-11:30", course: "Traitement d'Image", professor: "Dr. Kim", room: "D-310", type: "tp", conflict: true },
  { id: "s8", day: "Mardi", timeSlot: "13:00-14:30", course: "Bases NLP", professor: "Dr. Petrova", room: "D-200", type: "cm" },
  { id: "s9", day: "Mercredi", timeSlot: "08:00-09:30", course: "SGBD", professor: "Dr. Thompson", room: "B-300", type: "cm" },
  { id: "s10", day: "Mercredi", timeSlot: "10:00-11:30", course: "Systèmes Embarqués", professor: "Dr. Nasser", room: "E-100", type: "tp" },
  { id: "s11", day: "Mercredi", timeSlot: "13:00-14:30", course: "Éthique de l'IA", professor: "Dr. Chen", room: "A-301", type: "td" },
  { id: "s12", day: "Mercredi", timeSlot: "15:00-16:30", course: "Big Data", professor: "Dr. Wilson", room: "B-205", type: "cm", conflict: true },
  { id: "s13", day: "Jeudi", timeSlot: "08:00-09:30", course: "Cryptographie", professor: "Dr. Hassan", room: "C-110", type: "cm" },
  { id: "s14", day: "Jeudi", timeSlot: "10:00-11:30", course: "Dev Agile", professor: "Dr. Park", room: "A-415", type: "td" },
  { id: "s15", day: "Jeudi", timeSlot: "13:00-14:30", course: "Applications CV", professor: "Dr. Kim", room: "D-310", type: "cm" },
  { id: "s16", day: "Jeudi", timeSlot: "15:00-16:30", course: "Ling. Informatique", professor: "Dr. Petrova", room: "D-200", type: "td" },
  { id: "s17", day: "Vendredi", timeSlot: "08:00-09:30", course: "NoSQL", professor: "Dr. Thompson", room: "B-300", type: "tp" },
  { id: "s18", day: "Vendredi", timeSlot: "10:00-11:30", course: "Architecture IoT", professor: "Dr. Nasser", room: "E-100", type: "cm" },
  { id: "s19", day: "Vendredi", timeSlot: "13:00-14:30", course: "Cloud Computing", professor: "Dr. Park", room: "A-415", type: "tp" },
  { id: "s20", day: "Vendredi", timeSlot: "15:00-16:30", course: "Robotique", professor: "Dr. Kim", room: "D-310", type: "tp" },
];

export interface SemesterAssignment {
  professorId: string;
  courses: {
    name: string;
    type: "CM" | "TD" | "TP";
    hours: number;
    color: string;
  }[];
}

export const semesterData: Record<"Automne" | "Printemps", SemesterAssignment[]> = {
  Automne: [
    {
      professorId: "1",
      courses: [
        { name: "ML 101", type: "CM", hours: 30, color: "hsl(var(--primary))" },
        { name: "ML 101", type: "TP", hours: 15, color: "hsl(var(--primary))" },
      ],
    },
    {
      professorId: "2",
      courses: [
        { name: "Data Mining", type: "CM", hours: 20, color: "hsl(215, 88%, 45%)" },
        { name: "Big Data", type: "CM", hours: 25, color: "hsl(215, 88%, 45%)" },
      ],
    },
    {
      professorId: "3",
      courses: [
        { name: "Network Security", type: "CM", hours: 25, color: "hsl(142, 71%, 45%)" },
        { name: "Network Security", type: "TD", hours: 10, color: "hsl(142, 71%, 45%)" },
      ],
    },
    {
      professorId: "4",
      courses: [
        { name: "SE Principles", type: "CM", hours: 25, color: "hsl(280, 65%, 60%)" },
        { name: "Agile Dev", type: "TD", hours: 20, color: "hsl(280, 65%, 60%)" },
      ],
    },
    {
      professorId: "8",
      courses: [
        { name: "Embedded Systems", type: "CM", hours: 25, color: "hsl(38, 92%, 50%)" },
        { name: "Embedded Systems", type: "TP", hours: 20, color: "hsl(38, 92%, 50%)" },
      ],
    },
  ],
  Printemps: [
    {
      professorId: "1",
      courses: [
        { name: "Deep Learning", type: "CM", hours: 35, color: "hsl(var(--primary))" },
        { name: "AI Ethics", type: "TD", hours: 15, color: "hsl(var(--primary))" },
      ],
    },
    {
      professorId: "2",
      courses: [
        { name: "Statistics", type: "CM", hours: 30, color: "hsl(215, 88%, 45%)" },
        { name: "Python Lab", type: "TP", hours: 20, color: "hsl(215, 88%, 45%)" },
      ],
    },
    {
      professorId: "5",
      courses: [
        { name: "NLP Fundamentals", type: "CM", hours: 30, color: "hsl(280, 65%, 60%)" },
        { name: "Computational Linguistics", type: "TD", hours: 15, color: "hsl(280, 65%, 60%)" },
      ],
    },
    {
      professorId: "6",
      courses: [
        { name: "Image Processing", type: "CM", hours: 25, color: "hsl(var(--primary))" },
        { name: "Robotics", type: "TP", hours: 30, color: "hsl(var(--primary))" },
        { name: "CV Applications", type: "CM", hours: 20, color: "hsl(var(--primary))" },
      ],
    },
    {
      professorId: "7",
      courses: [
        { name: "DBMS", type: "CM", hours: 25, color: "hsl(215, 88%, 45%)" },
        { name: "NoSQL", type: "TP", hours: 15, color: "hsl(215, 88%, 45%)" },
        { name: "Data Warehousing", type: "CM", hours: 20, color: "hsl(215, 88%, 45%)" },
      ],
    },
  ],
};
