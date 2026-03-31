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
    id: "1",
    name: "Pr. Loulid Mohamed",
    specialty: "Management Stratégique",
    weeklyHours: 20,
    performanceScore: 95,
    riskLevel: "Low",
    email: "m.loulid@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Management Stratégique I", "Management des Organisations", "Gestion des Entreprises"],
    yearsOfService: 18,
    avatar: "LM",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 201",
    bio: "Chef du Département des Sciences de la Gestion à la FSJES Marrakech, Pr. Loulid Mohamed est spécialiste en management stratégique et gouvernance des organisations. Il est reconnu pour ses travaux sur la performance des entreprises marocaines.",
    education: ["Doctorat en Sciences de Gestion, Université Cadi Ayyad", "Master Management Stratégique, FSJES Marrakech", "Licence en Économie, Université Mohammed V"],
    publications: 32,
    researchInterests: ["Gouvernance des Entreprises", "Management Strategique", "Performance Organisationnelle"],
    studentRating: 4.7,
    totalStudents: 210,
    rattrapageRate: 10,
    materials: [{ title: "Cours Management Stratégique S5", type: "pdf", url: "#" }, { title: "Études de cas Entreprises Marocaines", type: "video", url: "#" }],
    passRate: 88,
    evaluations: { clarity: 4.7, engagement: 4.8, support: 4.6, materials: 4.7 },
    aiFeedback: {
      strengths: ["Leadership pédagogique exemplaire", "Lien fort entre théorie et pratique locale"],
      improvements: ["Intégrer plus de cas d'entreprises internationales"],
      summary: "Pr. Loulid incarne l'excellence académique du département. Sa connaissance du tissu économique marocain est un atout précieux pour les étudiants."
    }
  },
  {
    id: "2",
    name: "Pr. Abaaokide Kamar",
    specialty: "Marketing et Commerce",
    weeklyHours: 24,
    performanceScore: 88,
    riskLevel: "Low",
    email: "k.abaaokide@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Marketing Stratégique", "Techniques de Vente", "Marketing Opérationnel", "CRM"],
    yearsOfService: 12,
    avatar: "AK",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 115",
    bio: "Coordinatrice de la filière Marketing et Commerce, Pr. Abaaokide Kamar est experte en stratégie marketing et comportement du consommateur. Elle coordonne les partenariats entreprises pour les stages des étudiants.",
    education: ["Doctorat en Marketing, Université Cadi Ayyad", "Master Marketing International, ENCG Marrakech", "Licence Économie-Gestion, FSJES Marrakech"],
    publications: 18,
    researchInterests: ["Comportement du Consommateur", "Marketing Digital", "Commerce International"],
    studentRating: 4.5,
    totalStudents: 185,
    rattrapageRate: 14,
    materials: [{ title: "Support Marketing Stratégique S5", type: "pdf", url: "#" }, { title: "Techniques d'études de marché", type: "video", url: "#" }],
    passRate: 84,
    evaluations: { clarity: 4.5, engagement: 4.6, support: 4.4, materials: 4.5 },
    aiFeedback: {
      strengths: ["Approche terrain très appréciée des étudiants", "Réseau professionnel riche et partagé"],
      improvements: ["Développer davantage le marketing numérique dans les cours"],
      summary: "Pédagogie dynamique axée sur la pratique. L'intégration des outils digitaux renforcerait la préparation des étudiants au marché du travail actuel."
    }
  },
  {
    id: "3",
    name: "Pr. Cherkaoui Rquia",
    specialty: "Management des Entreprises",
    weeklyHours: 22,
    performanceScore: 91,
    riskLevel: "Low",
    email: "r.cherkaoui@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Management des Entreprises", "Gestion de Projet", "Management Opérationnel"],
    yearsOfService: 15,
    avatar: "CR",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 108",
    bio: "Coordinatrice de la filière Management des Entreprises, Pr. Cherkaoui Rquia est spécialisée dans la gestion des organisations et le management de projet. Ses recherches portent sur la performance des PME marocaines.",
    education: ["Doctorat en Sciences de Gestion, Université Cadi Ayyad", "Master Management des PME, FSJES Marrakech", "Licence en Gestion, Université Hassan II"],
    publications: 24,
    researchInterests: ["Management des PME", "Gestion de Projet", "Performance Organisationnelle"],
    studentRating: 4.6,
    totalStudents: 200,
    rattrapageRate: 11,
    materials: [{ title: "Cours Management des Entreprises S4", type: "pdf", url: "#" }, { title: "Gestion de Projet - Méthodes Agiles", type: "video", url: "#" }],
    passRate: 86,
    evaluations: { clarity: 4.7, engagement: 4.5, support: 4.6, materials: 4.5 },
    aiFeedback: {
      strengths: ["Très forte expertise en management des PME", "Accompagnement personnalisé des étudiants en difficulté"],
      improvements: ["Augmenter la fréquence des simulations d'entreprises en classe"],
      summary: "Excellente enseignante qui combine rigueur académique et pragmatisme. Les simulations de gestion d'entreprise pourraient encore renforcer l'apprentissage actif."
    }
  },
  {
    id: "4",
    name: "Pr. Grine Abdelhadi",
    specialty: "Comptabilité, Fiscalité et Finance",
    weeklyHours: 28,
    performanceScore: 82,
    riskLevel: "Medium",
    email: "a.grine@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Comptabilité Générale I & II", "Comptabilité Analytique", "Analyse Financière", "Fiscalité", "Audit et Contrôle"],
    yearsOfService: 10,
    avatar: "GA",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 212",
    bio: "Coordinateur de la filière Comptabilité Fiscalité Finance, Pr. Grine Abdelhadi est expert-comptable et spécialiste en fiscalité marocaine. Sa charge d'enseignement élevée reflète la forte demande pour ses cours.",
    education: ["Doctorat en Sciences Comptables, Université Cadi Ayyad", "Master Comptabilité et Audit, ENCG Casablanca", "Licence Comptabilité-Finance, FSJES Marrakech"],
    publications: 14,
    researchInterests: ["Fiscalité d'Entreprise", "Contrôle de Gestion", "Audit Financier"],
    studentRating: 4.2,
    totalStudents: 250,
    rattrapageRate: 20,
    materials: [{ title: "Fascicule Comptabilité Générale", type: "pdf", url: "#" }, { title: "Correction TD Analyse Financière", type: "video", url: "#" }],
    passRate: 78,
    evaluations: { clarity: 4.1, engagement: 4.3, support: 4.5, materials: 4.2 },
    aiFeedback: {
      strengths: ["Grand disponibilité pour les étudiants", "Maîtrise approfondie de la fiscalité marocaine"],
      improvements: ["Rythme d'avancement des cours parfois trop rapide", "Charge de cours à réévaluer pour éviter l'épuisement"],
      summary: "Expertise indiscutable mais la densité des cours impacte l'assimilation. Une redistribution partielle de la charge d'enseignement est recommandée."
    }
  },
  {
    id: "5",
    name: "Pr. Naoui Fouad",
    specialty: "Logistique et Supply Chain Management",
    weeklyHours: 20,
    performanceScore: 93,
    riskLevel: "Low",
    email: "f.naoui@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Logistique Internationale", "Supply Chain Management", "Gestion des Stocks", "Transport et Distribution"],
    yearsOfService: 8,
    avatar: "NF",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 119",
    bio: "Coordinateur de la filière Logistique et Supply Chain Management, Pr. Naoui Fouad est spécialiste des chaînes logistiques mondiales et du commerce international. Il a collaboré avec plusieurs entreprises marocaines de renom.",
    education: ["Doctorat en Logistique et Transport, Université Cadi Ayyad", "Master Supply Chain, Université Hassan II Casablanca", "Licence en Commerce International, FSJES Marrakech"],
    publications: 22,
    researchInterests: ["Chaîne Logistique Verte", "E-Logistique", "Commerce International Marocain"],
    studentRating: 4.8,
    totalStudents: 130,
    rattrapageRate: 8,
    materials: [{ title: "Introduction au Supply Chain Management", type: "pdf", url: "#" }, { title: "Logistique Internationale - Cas pratiques", type: "video", url: "#" }],
    passRate: 91,
    evaluations: { clarity: 4.8, engagement: 4.9, support: 4.7, materials: 4.8 },
    aiFeedback: {
      strengths: ["Passion communicative et cours très vivants", "Exemples tirés de l'actualité économique africaine"],
      improvements: ["Proposer plus de ressources numériques complémentaires"],
      summary: "Un des enseignants les mieux notés du département. Sa connaissance du contexte économique africain est un différentiateur majeur pour les étudiants en logistique."
    }
  },
  {
    id: "6",
    name: "Pr. Sahraoui Doha",
    specialty: "International Management",
    weeklyHours: 18,
    performanceScore: 89,
    riskLevel: "Low",
    email: "d.sahraoui@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["International Management", "Commerce International", "Négociation Internationale", "Management Interculturel"],
    yearsOfService: 7,
    avatar: "SD",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 214",
    bio: "Coordinatrice de la filière International Management, Pr. Sahraoui Doha est experte en management interculturel et négociation internationale. Elle a été visiting professor dans plusieurs universités européennes.",
    education: ["Doctorat en Management International, Université Cadi Ayyad", "Master Relations Économiques Internationales, UM5 Rabat", "Licence Économie-Gestion, FSJES Marrakech"],
    publications: 16,
    researchInterests: ["Management Interculturel", "IDE au Maroc", "Négociation Internationale"],
    studentRating: 4.7,
    totalStudents: 110,
    rattrapageRate: 9,
    materials: [{ title: "Cours Management Interculturel S6", type: "pdf", url: "#" }, { title: "Négociation Internationale - Simulations", type: "video", url: "#" }],
    passRate: 89,
    evaluations: { clarity: 4.8, engagement: 4.7, support: 4.8, materials: 4.6 },
    aiFeedback: {
      strengths: ["Ouverture internationale remarquable", "Simulations de négociation très engageantes"],
      improvements: ["Enrichir les supports avec des cas d'entreprises africaines"],
      summary: "Pr. Sahraoui apporte une dimension internationale précieuse à la filière. Ses simulations pédagogiques sont particulièrement efficaces pour préparer les futurs managers."
    }
  },
  {
    id: "7",
    name: "Pr. Rigar Sidi Mohamed",
    specialty: "Management et Stratégie des Organisations",
    weeklyHours: 26,
    performanceScore: 85,
    riskLevel: "Medium",
    email: "sm.rigar@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Stratégie des Organisations", "Analyse Stratégique", "Master Management et Stratégie"],
    yearsOfService: 14,
    avatar: "RS",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 310",
    bio: "Coordinateur du Master Management et Stratégie des Organisations, Pr. Rigar Sidi Mohamed est un expert reconnu en stratégie d'entreprise. Ses travaux sur la compétitivité des entreprises marocaines ont été publiés dans des revues internationales.",
    education: ["Doctorat en Stratégie d'Entreprise, Université Cadi Ayyad", "Master Management Stratégique, ISCAE Casablanca", "Licence Gestion, FSJES Marrakech"],
    publications: 28,
    researchInterests: ["Compétitivité des Entreprises", "Stratégie Collaborative", "Alliances Stratégiques"],
    studentRating: 4.4,
    totalStudents: 165,
    rattrapageRate: 15,
    materials: [{ title: "Analyse Stratégique - Manuel", type: "pdf", url: "#" }, { title: "Diagnostic d'Entreprise - Méthodes", type: "video", url: "#" }],
    passRate: 83,
    evaluations: { clarity: 4.4, engagement: 4.3, support: 4.5, materials: 4.4 },
    aiFeedback: {
      strengths: ["Rigueur analytique dans les travaux de recherche", "Capacité à vulgariser des concepts complexes"],
      improvements: ["Alléger légèrement la charge pour améliorer la disponibilité aux étudiants", "Intégrer plus d'études de cas interactifs"],
      summary: "Enseignant solide avec une expertise en stratégie bien reconnue. La réduction de sa charge d'enseignement permettrait un meilleur suivi des étudiants du Master."
    }
  },
  {
    id: "8",
    name: "Pr. Chaouki Farid",
    specialty: "Ressources Humaines",
    weeklyHours: 16,
    performanceScore: 94,
    riskLevel: "Low",
    email: "f.chaouki@fsjes.uca.ma",
    department: "Sciences de Gestion",
    courses: ["Gestion des Ressources Humaines", "Droit du Travail", "Master RH Stratégie"],
    yearsOfService: 9,
    avatar: "CF",
    phone: "+212 (0) 5 24 30 30 32",
    office: "Bâtiment Sciences de Gestion, Bureau 220",
    bio: "Coordinateur du Master Stratégie et Management des Ressources Humaines, Pr. Chaouki Farid est spécialiste en GRH stratégique et droit social. Il est consultant RH pour plusieurs entreprises de la région Marrakech-Safi.",
    education: ["Doctorat en GRH, Université Cadi Ayyad", "Master DRH, Université Mohammed V Rabat", "Licence en Droit des Affaires, FSJES Marrakech"],
    publications: 19,
    researchInterests: ["GRH Stratégique", "Droit du Travail Marocain", "Bien-être au Travail"],
    studentRating: 4.9,
    totalStudents: 90,
    rattrapageRate: 6,
    materials: [{ title: "GRH - Concepts et Pratiques", type: "pdf", url: "#" }, { title: "Recrutement et évaluation des compétences", type: "video", url: "#" }],
    passRate: 93,
    evaluations: { clarity: 4.9, engagement: 4.9, support: 4.9, materials: 4.8 },
    aiFeedback: {
      strengths: ["Empathie et écoute active exemplaires", "Articulation parfaite entre droit et gestion RH"],
      improvements: ["Aucun axe d'amélioration majeur identifié"],
      summary: "Performances exceptionnelles. L'IA ne détecte aucun point de friction significatif. Pr. Chaouki pourrait partager ses méthodes pédagogiques innovantes avec l'équipe enseignante."
    }
  },
];

export const workloadData = [
  { name: "Lun", hours: 38 },
  { name: "Mar", hours: 44 },
  { name: "Mer", hours: 36 },
  { name: "Jeu", hours: 48 },
  { name: "Ven", hours: 30 },
];

export const performanceData = [
  { month: "Sep", score: 80 },
  { month: "Oct", score: 84 },
  { month: "Nov", score: 81 },
  { month: "Déc", score: 86 },
  { month: "Jan", score: 90 },
  { month: "Fév", score: 88 },
];

export const departmentDistribution = [
  { name: "Marketing & Commerce", value: 1, fill: "hsl(215, 88%, 35%)" },
  { name: "Management Entreprises", value: 2, fill: "hsl(210, 20%, 65%)" },
  { name: "Comptabilité Finance", value: 1, fill: "hsl(142, 71%, 45%)" },
  { name: "Logistique & SCM", value: 1, fill: "hsl(38, 92%, 50%)" },
  { name: "International Mgmt", value: 1, fill: "hsl(280, 65%, 60%)" },
  { name: "Ressources Humaines", value: 2, fill: "hsl(0, 85%, 55%)" },
];

export const aiInsights = [
  { id: 1, type: "warning" as const, title: "Surcharge détectée - Comptabilité", description: "Pr. Grine Abdelhadi dépasse la charge réglementaire avec 28h/semaine. Une redistribution de certains TDs est recommandée.", confidence: 94, timestamp: "Il y a 2h" },
  { id: 2, type: "prediction" as const, title: "Baisse de réussite en Fiscalité", description: "Le taux de réussite en Fiscalité (filière CFF) risque de baisser de 12% si la progression n'est pas ajustée.", confidence: 86, timestamp: "Il y a 5h" },
  { id: 3, type: "optimization" as const, title: "Optimisation de l'emploi du temps S5", description: "L'IA a identifié un planning optimal pour le semestre 5, réduisant les conflits de salles de 28%.", confidence: 91, timestamp: "Il y a 1 jour" },
  { id: 4, type: "warning" as const, title: "Alerte charge élevée - Stratégie", description: "Pr. Rigar Sidi Mohamed présente des indicateurs de surcharge. Une réévaluation de son emploi du temps est conseillée.", confidence: 87, timestamp: "Il y a 1 jour" },
  { id: 5, type: "prediction" as const, title: "Hausse des inscriptions en Logistique", description: "La filière Logistique & Supply Chain devrait connaître une augmentation de 35% des inscriptions pour 2025-2026.", confidence: 83, timestamp: "Il y a 2 jours" },
  { id: 6, type: "optimization" as const, title: "Mutualisation des cours de tronc commun", description: "Regrouper les cours de S1-S2 (tronc commun) permettrait d'économiser 6 créneaux hebdomadaires.", confidence: 78, timestamp: "Il y a 3 jours" },
];

export const professorWorkloadChart = [
  { name: "Pr. Loulid", hours: 20, capacity: 24 },
  { name: "Pr. Abaaokide", hours: 24, capacity: 24 },
  { name: "Pr. Cherkaoui", hours: 22, capacity: 24 },
  { name: "Pr. Grine", hours: 28, capacity: 24 },
  { name: "Pr. Naoui", hours: 20, capacity: 24 },
  { name: "Pr. Sahraoui", hours: 18, capacity: 24 },
  { name: "Pr. Rigar", hours: 26, capacity: 24 },
  { name: "Pr. Chaouki", hours: 16, capacity: 24 },
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
  { id: "s1", day: "Lundi", timeSlot: "08:00-09:30", course: "Marketing Stratégique", professor: "Pr. Abaaokide", room: "A-101", type: "cm" },
  { id: "s2", day: "Lundi", timeSlot: "10:00-11:30", course: "Comptabilité Générale", professor: "Pr. Grine", room: "B-205", type: "cm" },
  { id: "s3", day: "Lundi", timeSlot: "13:00-14:30", course: "Management des Entreprises", professor: "Pr. Cherkaoui", room: "C-110", type: "cm" },
  { id: "s4", day: "Lundi", timeSlot: "15:00-16:30", course: "Gestion des Ressources Humaines", professor: "Pr. Chaouki", room: "A-215", type: "cm" },
  { id: "s5", day: "Mardi", timeSlot: "08:00-09:30", course: "Supply Chain Management", professor: "Pr. Naoui", room: "A-101", type: "tp" },
  { id: "s6", day: "Mardi", timeSlot: "10:00-11:30", course: "Analyse Financière", professor: "Pr. Grine", room: "B-205", type: "cm" },
  { id: "s7", day: "Mardi", timeSlot: "10:00-11:30", course: "Stratégie des Organisations", professor: "Pr. Rigar", room: "D-310", type: "tp", conflict: true },
  { id: "s8", day: "Mardi", timeSlot: "13:00-14:30", course: "Management Interculturel", professor: "Pr. Sahraoui", room: "D-200", type: "cm" },
  { id: "s9", day: "Mercredi", timeSlot: "08:00-09:30", course: "Comptabilité Analytique", professor: "Pr. Grine", room: "B-300", type: "cm" },
  { id: "s10", day: "Mercredi", timeSlot: "10:00-11:30", course: "Logistique Internationale", professor: "Pr. Naoui", room: "E-100", type: "tp" },
  { id: "s11", day: "Mercredi", timeSlot: "13:00-14:30", course: "Management Stratégique", professor: "Pr. Loulid", room: "A-101", type: "td" },
  { id: "s12", day: "Mercredi", timeSlot: "15:00-16:30", course: "Fiscalité des Entreprises", professor: "Pr. Grine", room: "B-205", type: "cm", conflict: true },
  { id: "s13", day: "Jeudi", timeSlot: "08:00-09:30", course: "Droit du Travail", professor: "Pr. Chaouki", room: "C-110", type: "cm" },
  { id: "s14", day: "Jeudi", timeSlot: "10:00-11:30", course: "Gestion de Projet", professor: "Pr. Cherkaoui", room: "A-215", type: "td" },
  { id: "s15", day: "Jeudi", timeSlot: "13:00-14:30", course: "Commerce International", professor: "Pr. Sahraoui", room: "D-310", type: "cm" },
  { id: "s16", day: "Jeudi", timeSlot: "15:00-16:30", course: "Analyse Stratégique", professor: "Pr. Rigar", room: "D-200", type: "td" },
  { id: "s17", day: "Vendredi", timeSlot: "08:00-09:30", course: "Techniques de Vente", professor: "Pr. Abaaokide", room: "B-300", type: "tp" },
  { id: "s18", day: "Vendredi", timeSlot: "10:00-11:30", course: "Gestion des Stocks", professor: "Pr. Naoui", room: "E-100", type: "cm" },
  { id: "s19", day: "Vendredi", timeSlot: "13:00-14:30", course: "Marketing Opérationnel", professor: "Pr. Abaaokide", room: "A-101", type: "tp" },
  { id: "s20", day: "Vendredi", timeSlot: "15:00-16:30", course: "GRH Stratégique", professor: "Pr. Chaouki", room: "D-310", type: "tp" },
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
        { name: "Management Stratégique I", type: "CM", hours: 30, color: "hsl(var(--primary))" },
        { name: "Gestion des Organisations", type: "TD", hours: 15, color: "hsl(var(--primary))" },
      ],
    },
    {
      professorId: "2",
      courses: [
        { name: "Marketing Opérationnel", type: "CM", hours: 25, color: "hsl(215, 88%, 45%)" },
        { name: "Techniques de Vente", type: "TP", hours: 20, color: "hsl(215, 88%, 45%)" },
      ],
    },
    {
      professorId: "3",
      courses: [
        { name: "Management des Entreprises S3", type: "CM", hours: 25, color: "hsl(142, 71%, 45%)" },
        { name: "Management des Entreprises S3", type: "TD", hours: 10, color: "hsl(142, 71%, 45%)" },
      ],
    },
    {
      professorId: "4",
      courses: [
        { name: "Comptabilité Générale I", type: "CM", hours: 30, color: "hsl(280, 65%, 60%)" },
        { name: "Comptabilité Analytique", type: "TD", hours: 20, color: "hsl(280, 65%, 60%)" },
      ],
    },
    {
      professorId: "8",
      courses: [
        { name: "GRH S3", type: "CM", hours: 20, color: "hsl(38, 92%, 50%)" },
        { name: "Droit du Travail", type: "TD", hours: 15, color: "hsl(38, 92%, 50%)" },
      ],
    },
  ],
  Printemps: [
    {
      professorId: "1",
      courses: [
        { name: "Management Stratégique II", type: "CM", hours: 35, color: "hsl(var(--primary))" },
        { name: "Gestion des Organisations S6", type: "TD", hours: 15, color: "hsl(var(--primary))" },
      ],
    },
    {
      professorId: "2",
      courses: [
        { name: "Marketing Stratégique S5", type: "CM", hours: 30, color: "hsl(215, 88%, 45%)" },
        { name: "CRM et Fidélisation", type: "TP", hours: 20, color: "hsl(215, 88%, 45%)" },
      ],
    },
    {
      professorId: "5",
      courses: [
        { name: "Supply Chain Management S6", type: "CM", hours: 30, color: "hsl(280, 65%, 60%)" },
        { name: "Logistique Internationale", type: "TD", hours: 15, color: "hsl(280, 65%, 60%)" },
      ],
    },
    {
      professorId: "6",
      courses: [
        { name: "Management Interculturel S6", type: "CM", hours: 25, color: "hsl(var(--primary))" },
        { name: "Négociation Internationale", type: "TP", hours: 20, color: "hsl(var(--primary))" },
      ],
    },
    {
      professorId: "7",
      courses: [
        { name: "Analyse Stratégique S5", type: "CM", hours: 25, color: "hsl(215, 88%, 45%)" },
        { name: "Stratégie d'Entreprise S6", type: "CM", hours: 20, color: "hsl(215, 88%, 45%)" },
        { name: "Management Stratégique S6", type: "TD", hours: 15, color: "hsl(215, 88%, 45%)" },
      ],
    },
  ],
};
