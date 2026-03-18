"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    UserCircle, Mail, MapPin, Phone, GraduationCap, Briefcase, Award,
    Clock, Upload, FileText, Video, Plus, FileDown, ChevronDown, CheckCircle2,
    Calendar as CalendarIcon, AlertCircle
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Sparkles, TrendingUp } from "lucide-react";

// Using the same Dr. Chen data as in mockData for the personal portal demo
const personalData = {
    name: "Dr. Sarah Chen",
    role: "Professeur Titulaire",
    department: "Informatique",
    specialty: "Machine Learning & AI",
    email: "s.chen@uni.edu",
    phone: "+1 (555) 234-5678",
    office: "Bâtiment A, Salle 305",
    avatar: "SC",
    bio: "Chercheuse principale en apprentissage automatique (Machine Learning) avec plus de 50 articles publiés. Spécialisée dans la recherche d'architecture neuronale (NAS) et l'apprentissage fédéré.",
    education: [
        { degree: "Doctorat en Informatique", institution: "Stanford University", year: "2015" },
        { degree: "Master en IA", institution: "MIT", year: "2011" },
    ],
    status: "Permanent", // 'Permanent' ou 'Vacataire'
    hetd: 42,
    maxHetd: 48,
    evaluations: { clarity: 4.9, engagement: 4.8, support: 4.6, materials: 4.9 },
    aiFeedback: {
        strengths: ["Excellente clarté d'exposition", "Supports de cours de très haute qualité"],
        improvements: ["Pourrait inclure plus de travaux pratiques dirigés"],
        summary: "Les étudiants louent votre expertise et la pédagogie de vos supports. Intégrer des mini-projets réguliers augmenterait davantage l'engagement."
    }
};

const DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const TIME_SLOTS = ["08:00-10:00", "10:00-12:00", "14:00-16:00", "16:00-18:00"];

export default function EspacePersonnel() {
    // Availability State
    const [availability, setAvailability] = useState<Record<string, "available" | "unavailable" | "preferred">>({});

    const toggleAvailability = (day: string, time: string) => {
        const key = `${day}-${time}`;
        setAvailability(prev => {
            const current = prev[key] || "available";
            if (current === "available") return { ...prev, [key]: "preferred" };
            if (current === "preferred") return { ...prev, [key]: "unavailable" };
            return { ...prev, [key]: "available" };
        });
    };

    const getSlotClass = (day: string, time: string) => {
        const status = availability[`${day}-${time}`] || "available";
        if (status === "preferred") return "bg-success/20 border-success/30 text-success hover:bg-success/30";
        if (status === "unavailable") return "bg-destructive/10 border-destructive/20 text-destructive/70 hover:bg-destructive/20";
        return "bg-secondary/20 border-border text-muted-foreground hover:bg-secondary/40";
    };

    const getSlotIcon = (day: string, time: string) => {
        const status = availability[`${day}-${time}`] || "available";
        if (status === "preferred") return <CheckCircle2 className="h-4 w-4 mx-auto mb-1" />;
        if (status === "unavailable") return <AlertCircle className="h-4 w-4 mx-auto mb-1 opacity-50" />;
        return <div className="h-4 w-4 mx-auto mb-1 opacity-20"><Plus className="h-4 w-4" /></div>;
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <UserCircle className="h-6 w-6 text-primary" /> Mon Espace
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">Gérez votre profil académique et vos disponibilités</p>
                </div>

                <Tabs defaultValue="profil" className="space-y-6">
                    <TabsList className="bg-secondary/50 p-1 rounded-xl flex-wrap h-auto">
                        <TabsTrigger value="profil" className="rounded-lg text-xs sm:text-sm">Profil & Documents</TabsTrigger>
                        <TabsTrigger value="cv" className="rounded-lg text-xs sm:text-sm">CV Numérique</TabsTrigger>
                        <TabsTrigger value="disponibilites" className="rounded-lg text-xs sm:text-sm">Disponibilités</TabsTrigger>
                        <TabsTrigger value="evaluations" className="rounded-lg text-xs sm:text-sm">Évaluations & Feedback IA</TabsTrigger>
                    </TabsList>

                    {/* TAB: PROFIL & DOCUMENTS */}
                    <TabsContent value="profil" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Identity Card */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-1 space-y-6">
                                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-secondary">
                                        <AvatarFallback className="bg-primary/10 text-primary text-2xl">{personalData.avatar}</AvatarFallback>
                                    </Avatar>
                                    <h2 className="text-xl font-bold text-foreground">{personalData.name}</h2>
                                    <p className="text-sm text-muted-foreground mb-4">{personalData.role}</p>

                                    <div className="flex justify-center gap-2 mb-6">
                                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                            {personalData.status}
                                        </Badge>
                                        <Badge variant="outline" className="bg-secondary text-muted-foreground">
                                            {personalData.department}
                                        </Badge>
                                    </div>

                                    <div className="space-y-3 text-left">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <Mail className="h-4 w-4 shrink-0" />
                                            <span className="truncate">{personalData.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <Phone className="h-4 w-4 shrink-0" />
                                            <span>{personalData.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 shrink-0" />
                                            <span>{personalData.office}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Workload Snapshot */}
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-primary" /> État de la charge (HETD)
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Volume Actuel</span>
                                            <span className="font-semibold">{personalData.hetd}h</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Plafond</span>
                                            <span className="text-muted-foreground">{personalData.maxHetd}h</span>
                                        </div>
                                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mt-2">
                                            <div
                                                className={`h-full rounded-full ${personalData.hetd > personalData.maxHetd ? 'bg-destructive' : 'bg-primary'}`}
                                                style={{ width: `${Math.min((personalData.hetd / personalData.maxHetd) * 100, 100)}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-foreground mb-4">Biographie</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {personalData.bio}
                                    </p>
                                </div>

                                {/* Course Materials Upload */}
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                                                <Upload className="h-5 w-5 text-primary" /> Mes Supports de Cours
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">Gérez les fichiers PDF et vidéos partagés avec vos étudiants.</p>
                                        </div>
                                        <Button size="sm" className="gap-2">
                                            <Plus className="h-4 w-4" /> Ajouter
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-background">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <FileText className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground">Support de cours ML 101</h4>
                                                    <p className="text-xs text-muted-foreground">PDF • 2.4 MB • Ajouté le 12 Oct 2023</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive/90 hover:bg-destructive/10">Supprimer</Button>
                                        </div>

                                        <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-background">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <Video className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground">Enregistrement Chapitre 1</h4>
                                                    <p className="text-xs text-muted-foreground">MP4 • 145 MB • Ajouté hier</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive/90 hover:bg-destructive/10">Supprimer</Button>
                                        </div>

                                        <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                                            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                                            <p className="text-sm font-medium text-foreground">Glissez-déposez vos fichiers ici</p>
                                            <p className="text-xs text-muted-foreground mt-1">Supporte PDF, MP4, et PPTX (Max 500MB)</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </TabsContent>

                    {/* TAB: CV NUMÉRIQUE */}
                    <TabsContent value="cv" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-border rounded-2xl p-6">
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Curriculum Vitae Numérique</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Gérez vos informations de carrière. Elles seront visibles par l&apos;administration.</p>
                                </div>
                                <Button className="gap-2 bg-primary text-primary-foreground">
                                    <FileDown className="h-4 w-4" /> Générer PDF
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-6">
                                {/* Formation */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                                            <GraduationCap className="h-5 w-5 text-primary" /> Formation Académique
                                        </h3>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button>
                                    </div>
                                    <div className="space-y-4">
                                        {personalData.education.map((edu, i) => (
                                            <div key={i} className="p-4 border border-border rounded-xl">
                                                <div className="grid gap-3">
                                                    <div>
                                                        <Label className="text-xs text-muted-foreground">Diplôme</Label>
                                                        <Input defaultValue={edu.degree} className="h-8 mt-1" />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div>
                                                            <Label className="text-xs text-muted-foreground">Établissement</Label>
                                                            <Input defaultValue={edu.institution} className="h-8 mt-1" />
                                                        </div>
                                                        <div>
                                                            <Label className="text-xs text-muted-foreground">Année</Label>
                                                            <Input defaultValue={edu.year} className="h-8 mt-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Expériences */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                                            <Briefcase className="h-5 w-5 text-primary" /> Expériences Pédagogiques
                                        </h3>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-4 border border-border rounded-xl">
                                            <div className="grid gap-3">
                                                <div>
                                                    <Label className="text-xs text-muted-foreground">Titre du Poste</Label>
                                                    <Input defaultValue="Professeur Associé" className="h-8 mt-1" />
                                                </div>
                                                <div>
                                                    <Label className="text-xs text-muted-foreground">Institution & Période</Label>
                                                    <Input defaultValue="Université Paris-Saclay | 2016 - 2020" className="h-8 mt-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Publications */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-2xl p-6 lg:col-span-2">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                                            <FileText className="h-5 w-5 text-primary" /> Publications Scientifiques
                                        </h3>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-4 border border-border rounded-xl">
                                            <div className="grid gap-3">
                                                <div>
                                                    <Label className="text-xs text-muted-foreground">Titre de la publication</Label>
                                                    <Input defaultValue="Federated Learning in Edge Networks: A Comprehensive Survey" className="h-8 mt-1" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <Label className="text-xs text-muted-foreground">Revue / Conférence</Label>
                                                        <Input defaultValue="IEEE Communications Surveys & Tutorials" className="h-8 mt-1" />
                                                    </div>
                                                    <div>
                                                        <Label className="text-xs text-muted-foreground">Date de publication</Label>
                                                        <Input defaultValue="Octobre 2022" className="h-8 mt-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* TAB: DISPONIBILITÉS */}
                    <TabsContent value="disponibilites" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="space-y-6">
                            <div className="bg-card border border-border rounded-2xl p-6">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                                            <CalendarIcon className="h-5 w-5 text-primary" /> Grille Hebdomadaire Type
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                                            Cliquez sur les créneaux pour indiquer vos préférences. L&apos;algorithme d&apos;IA utilisera ces données pour générer un emploi du temps optimisé.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 bg-secondary/30 p-4 rounded-xl text-sm border border-border min-w-48">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-sm bg-secondary border border-border" />
                                            <span className="text-muted-foreground">Disponible</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-sm bg-success/20 border border-success/30" />
                                            <span className="text-success">Privilégié</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-sm bg-destructive/20 border border-destructive/20" />
                                            <span className="text-destructive">Indisponible</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-x-auto pb-4">
                                    <div className="min-w-[700px]">
                                        <div className="grid grid-cols-6 gap-2 mb-2">
                                            <div className="p-2"></div>
                                            {DAYS.map(day => (
                                                <div key={day} className="text-center font-medium text-sm text-muted-foreground bg-secondary/30 py-2 rounded-lg border border-border">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>
                                        {TIME_SLOTS.map(time => (
                                            <div key={time} className="grid grid-cols-6 gap-2 mb-2">
                                                <div className="flex items-center justify-end pr-4 text-xs font-mono text-muted-foreground">
                                                    {time}
                                                </div>
                                                {DAYS.map(day => (
                                                    <button
                                                        key={`${day}-${time}`}
                                                        onClick={() => toggleAvailability(day, time)}
                                                        className={`h-16 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${getSlotClass(day, time)}`}
                                                    >
                                                        {getSlotIcon(day, time)}
                                                        <span className="text-[10px] font-medium uppercase tracking-wider">
                                                            {availability[`${day}-${time}`] || "Disponible"}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <Button className="bg-primary text-primary-foreground">Enregistrer les disponibilités</Button>
                                </div>
                            </div>

                            {/* Congés / Périodes d'indisponibilité */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-semibold text-foreground">Périodes d&apos;Indisponibilité (Congés / Missions)</h3>
                                        <p className="text-xs text-muted-foreground mt-1">Déclarez vos absences prolongées.</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="gap-2"><Plus className="h-4 w-4" /> Ajouter période</Button>
                                </div>
                                <div className="p-4 border border-border rounded-xl bg-background flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-semibold">Conférence NeurIPS 2024</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Du 10 Déc 2024 au 16 Déc 2024</p>
                                    </div>
                                    <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent">Mission</Badge>
                                </div>
                            </motion.div>
                        </div>
                    </TabsContent>

                    {/* TAB: ÉVALUATIONS & FEEDBACK IA */}
                    <TabsContent value="evaluations" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Student Ratings Summary */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-1 space-y-6">
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
                                        <Star className="h-5 w-5 text-warning fill-warning" /> Notes des Étudiants
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            { label: "Clarté des explications", value: personalData.evaluations.clarity },
                                            { label: "Engagement & Dynamisme", value: personalData.evaluations.engagement },
                                            { label: "Disponibilité & Soutien", value: personalData.evaluations.support },
                                            { label: "Qualité des supports", value: personalData.evaluations.materials },
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">{item.label}</span>
                                                    <span className="font-semibold text-foreground">{item.value}/5.0</span>
                                                </div>
                                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full bg-warning"
                                                        style={{ width: `${(item.value / 5) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-border text-center">
                                        <p className="text-3xl font-bold font-mono text-foreground">
                                            {((personalData.evaluations.clarity + personalData.evaluations.engagement + personalData.evaluations.support + personalData.evaluations.materials) / 4).toFixed(1)}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">Moyenne Globale</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* AI Feedback Analysis */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                        <Sparkles className="h-32 w-32 text-primary" />
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2 relative z-10">
                                        <Sparkles className="h-5 w-5 text-primary" /> Analyse & Conseils IA
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6 relative z-10 max-w-xl">
                                        Cette analyse est générée automatiquement à partir des commentaires anonymes laissés par vos étudiants ce semestre.
                                    </p>

                                    <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-5 mb-6 relative z-10">
                                        <p className="text-sm text-foreground leading-relaxed">
                                            {personalData.aiFeedback.summary}
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                                        <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                                            <h4 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
                                                <TrendingUp className="h-4 w-4" /> Points Forts
                                            </h4>
                                            <ul className="space-y-2">
                                                {personalData.aiFeedback.strengths.map((s, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-success mt-1">•</span> {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
                                            <h4 className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
                                                <AlertCircle className="h-4 w-4" /> Axes d&apos;Amélioration
                                            </h4>
                                            <ul className="space-y-2">
                                                {personalData.aiFeedback.improvements.map((s, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-accent mt-1">•</span> {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
}
