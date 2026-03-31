"use client";

import { motion } from "framer-motion";
import { GraduationCap, Search, Plus, Users, BookOpen, Calculator, Trash2, Edit2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useRole } from "@/components/RoleProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

// Mock Data for "Filières"
const filieresData = [
    { id: 1, name: "Licence Management International", code: "LMI", level: "Licence Fondamentale", students: 120, activeCourses: 14 },
    { id: 2, name: "Licence Marketing", code: "LMG", level: "Licence Fondamentale", students: 150, activeCourses: 16 },
    { id: 3, name: "Licence Logistique", code: "LLG", level: "Licence Professionnelle", students: 95, activeCourses: 12 },
    { id: 4, name: "Licence Management", code: "LMN", level: "Licence Fondamentale", students: 200, activeCourses: 15 },
];

const ucaCurriculums: Record<string, any[]> = {
    "LMI": [
        { id: 1, code: "LMI51", name: "Management Interculturel", credits: 5, hetd: 40 },
        { id: 2, code: "LMI52", name: "Géopolitique et Économie Mondiale", credits: 4, hetd: 30 },
        { id: 3, code: "LMI53", name: "Finance Internationale", credits: 5, hetd: 45 },
        { id: 4, code: "LMI54", name: "Marketing International", credits: 5, hetd: 40 },
        { id: 5, code: "LMI55", name: "Supply Chain Globale", credits: 5, hetd: 40 },
        { id: 6, code: "LMI56", name: "Anglais des Affaires", credits: 6, hetd: 45 },
    ],
    "LMG": [
        { id: 1, code: "LMG51", name: "Comportement du Consommateur", credits: 5, hetd: 45 },
        { id: 2, code: "LMG52", name: "Marketing Digital et E-commerce", credits: 5, hetd: 40 },
        { id: 3, code: "LMG53", name: "Études de Marché et Analyse de Données", credits: 5, hetd: 50 },
        { id: 4, code: "LMG54", name: "Communication Marketing Intégrée", credits: 5, hetd: 40 },
        { id: 5, code: "LMG55", name: "Stratégie de Marque", credits: 5, hetd: 40 },
        { id: 6, code: "LMG56", name: "Droit du Numérique", credits: 5, hetd: 35 },
    ],
    "LLG": [
        { id: 1, code: "LLG51", name: "Logistique d'Achat et Approvisionnement", credits: 5, hetd: 45 },
        { id: 2, code: "LLG52", name: "Gestion de Production et Qualité", credits: 6, hetd: 50 },
        { id: 3, code: "LLG53", name: "Transport et Logistique Internationale", credits: 5, hetd: 40 },
        { id: 4, code: "LLG54", name: "Gestion des Stocks et Entrepôts", credits: 5, hetd: 45 },
        { id: 5, code: "LLG55", name: "Systèmes d'Information (ERP)", credits: 5, hetd: 40 },
        { id: 6, code: "LLG56", name: "Droit des Transports", credits: 4, hetd: 30 },
    ],
    "LMN": [
        { id: 1, code: "LMN51", name: "Contrôle de Gestion", credits: 6, hetd: 50 },
        { id: 2, code: "LMN52", name: "Gestion des Ressources Humaines", credits: 5, hetd: 45 },
        { id: 3, code: "LMN53", name: "Finance d'Entreprise", credits: 5, hetd: 45 },
        { id: 4, code: "LMN54", name: "Fiscalité de l'Entreprise", credits: 5, hetd: 40 },
        { id: 5, code: "LMN55", name: "Management Stratégique", credits: 5, hetd: 45 },
        { id: 6, code: "LMN56", name: "Droit des Affaires", credits: 4, hetd: 35 },
    ]
};

export default function Filieres() {
    const { currentRole } = useRole();
    const isProfessor = currentRole === "Professeur";
    const [search, setSearch] = useState("");
    const [selectedFiliere, setSelectedFiliere] = useState<any>(null);
    const [curriculum, setCurriculum] = useState<any[]>([]);

    // Automatically load the right curriculum when a filiere is selected
    useState(() => {
        // Handled directly via onClick or effect (see below)
    });

    const filtered = filieresData.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.code.toLowerCase().includes(search.toLowerCase())
    );

    const totalCredits = curriculum.reduce((acc, curr) => acc + curr.credits, 0);
    const totalHetd = curriculum.reduce((acc, curr) => acc + curr.hetd, 0);

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary" /> Gestion des Filières
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">Supervisez les programmes académiques</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher une filière..."
                                className="pl-9 bg-secondary border-border h-9 text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        {!isProfessor && (
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                                <Plus className="h-4 w-4 sm:mr-2" />
                                <span className="hidden sm:inline">Nouvelle Filière</span>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((filiere, i) => (
                        <motion.div
                            key={filiere.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold text-lg">{filiere.code}</span>
                                </div>
                                <Badge variant="outline" className="bg-secondary text-xs border-border">
                                    {filiere.level}
                                </Badge>
                            </div>

                            <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
                                {filiere.name}
                            </h3>

                            <div className="mt-auto pt-6 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Users className="h-4 w-4" /> Étudiants Inscrits
                                    </div>
                                    <span className="font-medium text-foreground">{filiere.students}</span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <BookOpen className="h-4 w-4" /> Matières Actives
                                    </div>
                                    <span className="font-medium text-foreground">{filiere.activeCourses}</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full mt-6 border-border hover:bg-secondary"
                                onClick={() => {
                                    setSelectedFiliere(filiere);
                                    setCurriculum(ucaCurriculums[filiere.code] || []);
                                }}
                            >
                                {isProfessor ? "Voir le Programme" : "Gérer le Programme"}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Curriculum Builder Slide-out Panel */}
                <Sheet open={!!selectedFiliere} onOpenChange={(open) => !open && setSelectedFiliere(null)}>
                    <SheetContent className="w-full sm:max-w-2xl overflow-y-auto border-l border-border bg-card">
                        <SheetHeader className="mb-6">
                            <SheetTitle className="text-xl font-bold flex items-center gap-2">
                                <Calculator className="h-5 w-5 text-primary" /> Constructeur de Maquette Pédagogique
                            </SheetTitle>
                            <SheetDescription>
                                Définissez les matières, les volumes horaires et les crédits ECTS pour la filière {selectedFiliere?.name}.
                            </SheetDescription>
                        </SheetHeader>

                        <div className="space-y-6">
                            {/* Global Stats Calculation */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border border-border bg-secondary/20 flex flex-col items-center justify-center text-center">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total ECTS</p>
                                    <div className="text-3xl font-bold text-primary flex items-center gap-2">
                                        {totalCredits} <span className="text-sm font-normal text-muted-foreground">/ 30</span>
                                    </div>
                                    {totalCredits < 30 ? (
                                        <Badge variant="outline" className="mt-2 bg-destructive/10 text-destructive border-destructive/20 text-[10px]">Incomplet</Badge>
                                    ) : (
                                        <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/30 text-[10px]">Conforme</Badge>
                                    )}
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-secondary/20 flex flex-col items-center justify-center text-center">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total HETD</p>
                                    <div className="text-3xl font-bold text-accent">
                                        {totalHetd}h
                                    </div>
                                </div>
                            </div>

                            {/* Semester Selection */}
                            <div className="flex gap-2 p-1 bg-secondary rounded-lg">
                                <Button className="flex-1 bg-background text-foreground shadow-sm">Semestre 5</Button>
                                <Button variant="ghost" className="flex-1 text-muted-foreground">Semestre 6</Button>
                            </div>

                            {/* Curriculum Table */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-foreground">Matières du Semestre</h4>
                                    {!isProfessor && (
                                        <Button size="sm" className="gap-2 bg-primary text-primary-foreground h-8">
                                            <Plus className="h-4 w-4" /> Ajouter Matière
                                        </Button>
                                    )}
                                </div>

                                <div className="border border-border rounded-xl overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-secondary/50 text-xs text-muted-foreground border-b border-border">
                                            <tr>
                                                <th className="px-4 py-3 font-medium">Code</th>
                                                <th className="px-4 py-3 font-medium">Matière</th>
                                                <th className="px-4 py-3 font-medium text-center">ECTS</th>
                                                <th className="px-4 py-3 font-medium text-center">HETD</th>
                                                {!isProfessor && <th className="px-4 py-3 text-right">Actions</th>}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {curriculum.map((mat) => (
                                                <tr key={mat.id} className="hover:bg-secondary/30 transition-colors">
                                                    <td className="px-4 py-3 font-mono text-xs">{mat.code}</td>
                                                    <td className="px-4 py-3 font-medium">{mat.name}</td>
                                                    <td className="px-4 py-3 text-center">
                                                        <Badge variant="secondary" className="bg-background">{mat.credits}</Badge>
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-muted-foreground">{mat.hetd}h</td>
                                                    {!isProfessor && (
                                                        <td className="px-4 py-3 text-right">
                                                            <div className="flex justify-end gap-1">
                                                                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary">
                                                                    <Edit2 className="h-3.5 w-3.5" />
                                                                </Button>
                                                                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive"
                                                                    onClick={() => setCurriculum(curriculum.filter(c => c.id !== mat.id))}
                                                                >
                                                                    <Trash2 className="h-3.5 w-3.5" />
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    )}
                                                </tr>
                                            ))}
                                            {curriculum.length === 0 && (
                                                <tr>
                                                    <td colSpan={isProfessor ? 4 : 5} className="py-8 text-center text-muted-foreground">Aucune matière affectée.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border flex justify-end gap-3">
                                <Button variant="outline" onClick={() => setSelectedFiliere(null)}>Fermer</Button>
                                {!isProfessor && (
                                    <Button className="bg-primary text-primary-foreground gap-2">
                                        <CheckCircle2 className="h-4 w-4" /> Sauvegarder la Maquette
                                    </Button>
                                )}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </DashboardLayout>
    );
}
