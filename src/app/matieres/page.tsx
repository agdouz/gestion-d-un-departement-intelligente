"use client";

import { motion } from "framer-motion";
import { BookMarked, Search, Plus, Edit2, Trash2, UserPlus, Sparkles, CheckCircle2, AlertTriangle, User } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Mock Data for "Matières"
const matieresData = [
    { id: 1, name: "Algorithmique Avancée", code: "CS201", credits: 6, hetd: 45, cm: 15, td: 15, tp: 15, assigned: ["Dr. Sarah Chen"] },
    { id: 2, name: "Intelligence Artificielle", code: "CS305", credits: 5, hetd: 40, cm: 20, td: 10, tp: 10, assigned: [] },
    { id: 3, name: "Base de Données Relationnelles", code: "CS210", credits: 4, hetd: 35, cm: 10, td: 10, tp: 15, assigned: ["John Doe"] },
    { id: 4, name: "Réseaux Informatiques", code: "IT202", credits: 5, hetd: 42, cm: 18, td: 12, tp: 12, assigned: [] },
    { id: 5, name: "Développement Web", code: "CS105", credits: 4, hetd: 30, cm: 10, td: 5, tp: 15, assigned: ["Ada Lovelace"] },
];

const mockProfessors = [
    "Dr. Sarah Chen",
    "John Doe",
    "Ada Lovelace",
    "Alan Turing"
];

export default function Matieres() {
    const [search, setSearch] = useState("");
    const [selectedMatiere, setSelectedMatiere] = useState<any>(null);
    const [selectedProf, setSelectedProf] = useState<string>("");
    const [aiChecking, setAiChecking] = useState(false);
    const [aiResult, setAiResult] = useState<"ok" | "conflict" | null>(null);

    const filtered = matieresData.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.code.toLowerCase().includes(search.toLowerCase())
    );

    const handleAssignClick = (matiere: any) => {
        setSelectedMatiere(matiere);
        setSelectedProf("");
        setAiResult(null);
    };

    const handleProfSelect = (val: string) => {
        setSelectedProf(val);
        setAiChecking(true);
        setAiResult(null);

        // Simulate AI checking
        setTimeout(() => {
            setAiChecking(false);
            if (val === "Dr. Sarah Chen") {
                setAiResult("conflict");
            } else {
                setAiResult("ok");
            }
        }, 1500);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                            <BookMarked className="h-6 w-6 text-primary" /> Catalogue des Matières
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">Gérez le dictionnaire des modules (CM, TD, TP, ECTS)</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher une matière..."
                                className="pl-9 bg-secondary border-border h-9 text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                            <Plus className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Ajouter</span>
                        </Button>
                    </div>
                </div>

                {/* Catalog Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-secondary/30 text-xs uppercase font-medium text-muted-foreground border-b border-border">
                                <tr>
                                    <th className="px-5 py-3">Code</th>
                                    <th className="px-5 py-3">Intitulé de la matière</th>
                                    <th className="px-5 py-3 hidden lg:table-cell">Enseignants</th>
                                    <th className="px-5 py-3 text-center">Crédits (ECTS)</th>
                                    <th className="px-5 py-3 text-center">HETD</th>
                                    <th className="px-5 py-3 hidden md:table-cell text-center">CM</th>
                                    <th className="px-5 py-3 hidden md:table-cell text-center">TD</th>
                                    <th className="px-5 py-3 hidden md:table-cell text-center">TP</th>
                                    <th className="px-5 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((matiere, i) => (
                                    <motion.tr
                                        key={matiere.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                                    >
                                        <td className="px-5 py-4 font-mono text-muted-foreground flex items-center gap-2">
                                            {matiere.code}
                                            {matiere.assigned.length === 0 && (
                                                <Badge variant="outline" className="text-[10px] bg-warning/10 text-warning border-warning/20">Non assigné</Badge>
                                            )}
                                        </td>
                                        <td className="px-5 py-4 font-medium text-foreground">
                                            {matiere.name}
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell">
                                            {matiere.assigned.length > 0 ? (
                                                <div className="flex -space-x-2">
                                                    {matiere.assigned.map(p => (
                                                        <div key={p} className="h-7 w-7 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-[10px] font-bold text-primary" title={p}>
                                                            {p.split(' ').map(n => n[0]).join('')}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className="text-xs text-muted-foreground">—</span>
                                            )}
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                                                {matiere.credits} ECTS
                                            </Badge>
                                        </td>
                                        <td className="px-5 py-4 text-center font-mono">
                                            {matiere.hetd}h
                                        </td>
                                        <td className="px-5 py-4 text-center text-muted-foreground hidden md:table-cell">{matiere.cm}h</td>
                                        <td className="px-5 py-4 text-center text-muted-foreground hidden md:table-cell">{matiere.td}h</td>
                                        <td className="px-5 py-4 text-center text-muted-foreground hidden md:table-cell">{matiere.tp}h</td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-accent" title="Affecter Enseignant"
                                                    onClick={() => handleAssignClick(matiere)}
                                                >
                                                    <UserPlus className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" title="Éditer">
                                                    <Edit2 className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" title="Supprimer">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={9} className="px-5 py-8 text-center text-muted-foreground">
                                            Aucune matière trouvée.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Assignment Modal */}
                <Dialog open={!!selectedMatiere} onOpenChange={(open) => !open && setSelectedMatiere(null)}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <UserPlus className="h-5 w-5 text-primary" />
                                Affecter un Enseignant
                            </DialogTitle>
                            <DialogDescription>
                                Affectation pour <span className="font-bold text-foreground">{selectedMatiere?.name}</span> ({selectedMatiere?.hetd}h HETD).
                            </DialogDescription>
                        </DialogHeader>

                        <div className="py-4 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Professeur</label>
                                <Select onValueChange={handleProfSelect} value={selectedProf}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Sélectionner un professeur..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {mockProfessors.map(prof => (
                                            <SelectItem key={prof} value={prof}>
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-muted-foreground" />
                                                    {prof}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* AI Validation Area */}
                            {selectedProf && (
                                <div className="mt-4 p-4 rounded-xl border border-border bg-secondary/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="h-4 w-4 text-primary" />
                                        <span className="text-sm font-semibold text-foreground">Validation IA Cognitive</span>
                                    </div>

                                    {aiChecking ? (
                                        <div className="flex items-center gap-3 text-muted-foreground text-sm animate-pulse">
                                            <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                                            Analyse des données et calcul de charge...
                                        </div>
                                    ) : aiResult === "ok" ? (
                                        <div className="flex items-start gap-3 text-success">
                                            <CheckCircle2 className="h-5 w-5 mt-0.5" />
                                            <div className="text-sm">
                                                <p className="font-medium">Affectation Valide</p>
                                                <p className="text-xs opacity-80 mt-1">La charge de {selectedProf} passera à 35h HETD (sous le plafond de 48h). Les compétences correspondent au domaine.</p>
                                            </div>
                                        </div>
                                    ) : aiResult === "conflict" ? (
                                        <div className="flex items-start gap-3 text-destructive">
                                            <AlertTriangle className="h-5 w-5 mt-0.5" />
                                            <div className="text-sm">
                                                <p className="font-medium">Risque de Surcharge Détecté</p>
                                                <p className="text-xs opacity-80 mt-1">L'ajout de {selectedMatiere?.hetd}h portera la charge de {selectedProf} à 51h HETD (Dépassement du service réglementaire).</p>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-border">
                            <Button variant="outline" onClick={() => setSelectedMatiere(null)}>
                                Annuler
                            </Button>
                            <Button
                                className="bg-primary text-primary-foreground"
                                disabled={!selectedProf || aiChecking}
                            >
                                {aiResult === "conflict" ? "Forcer l'Affectation" : "Confirmer l'Affectation"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    );
}
