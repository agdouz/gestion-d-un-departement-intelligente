"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Star, Send, Loader2, CheckCircle2, AlertCircle, TrendingUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function EvaluationEtudiant() {
    const [professor, setProfessor] = useState("Dr. Sarah Chen");
    const [course, setCourse] = useState("Machine Learning 101");
    const [comments, setComments] = useState("");
    
    // Ratings state - 10 pedagogical questions
    const [ratings, setRatings] = useState({
        clarity: 3,
        organization: 3,
        engagement: 3,
        materials: 3,
        availability: 3,
        participation: 3,
        alignment: 3,
        fairness: 3,
        punctuality: 3,
        mastery: 3
    });

    const [isGenerating, setIsGenerating] = useState(false);
    const [apiError, setApiError] = useState("");
    const [aiFeedback, setAiFeedback] = useState<{strengths: string[], improvements: string[], summary: string} | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Comments are optional now!

        setIsGenerating(true);
        setApiError("");
        setAiFeedback(null);
        
        try {
            const response = await fetch("http://localhost:8000/api/ai/feedback/generate/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: professor,
                    courses: [course],
                    evaluations: ratings,
                    comments: [comments]
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                setAiFeedback(data);
            } else {
                console.error("API Error:", data);
                setApiError(data.error || "Une erreur est survenue lors de l'analyse IA.");
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setApiError("Impossible de contacter le serveur d'IA (Django). Vérifiez qu'il est bien lancé.");
        } finally {
            setIsGenerating(false);
        }
    };

    const RatingSlider = ({ label, field }: { label: string, field: keyof typeof ratings }) => (
        <div className="space-y-3">
            <div className="flex justify-between">
                <Label className="text-sm font-medium">{label}</Label>
                <span className="text-sm font-bold text-primary">{ratings[field]}/5</span>
            </div>
            <Slider 
                value={[ratings[field]]} 
                min={1} max={5} step={1}
                onValueChange={(val) => setRatings({...ratings, [field]: val[0]})}
                className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground px-1">
                <span>Insatisfaisant</span>
                <span>Excellent</span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animation-delay-2000"></div>
            </div>

            {/* Header */}
            <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/20 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Portail Étudiants</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">Évaluation des Enseignements</span>
                    <ThemeToggle />
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 pt-8 lg:pt-12">
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-2xl mb-4">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Évaluez vos cours avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">l'IA</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Vos retours aident les professeurs à s'améliorer. Notre moteur d'Intelligence Artificielle analyse vos commentaires instantanément de manière anonyme.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Form Section */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                        <div className="bg-card border border-border shadow-lg rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Star className="h-5 w-5 text-warning fill-warning" /> Votre Avis
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="professor">Professeur</Label>
                                        <Select value={professor} onValueChange={setProfessor}>
                                            <SelectTrigger id="professor" className="bg-background rounded-xl">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Dr. Sarah Chen">Dr. Sarah Chen</SelectItem>
                                                <SelectItem value="Dr. James Wilson">Dr. James Wilson</SelectItem>
                                                <SelectItem value="Dr. Elena Petrova">Dr. Elena Petrova</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="course">Matière</Label>
                                        <Select value={course} onValueChange={setCourse}>
                                            <SelectTrigger id="course" className="bg-background rounded-xl">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Machine Learning 101">Machine Learning 101</SelectItem>
                                                <SelectItem value="Data Mining">Data Mining</SelectItem>
                                                <SelectItem value="NLP Fundamentals">NLP Fundamentals</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="p-5 bg-background border border-border rounded-2xl space-y-6">
                                    <h3 className="text-sm border-b pb-2 font-semibold text-foreground">Évaluation Quantitative</h3>
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                        <RatingSlider label="Clarté des explications" field="clarity" />
                                        <RatingSlider label="Organisation du cours" field="organization" />
                                        <RatingSlider label="Engagement & Dynamisme" field="engagement" />
                                        <RatingSlider label="Qualité des supports" field="materials" />
                                        <RatingSlider label="Disponibilité & Soutien" field="availability" />
                                        <RatingSlider label="Encouragement participation" field="participation" />
                                        <RatingSlider label="Adéquation TP/Cours" field="alignment" />
                                        <RatingSlider label="Clarté de l'évaluation" field="fairness" />
                                        <RatingSlider label="Respect du volume horaires" field="punctuality" />
                                        <RatingSlider label="Maîtrise du sujet" field="mastery" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="comments">Commentaire Détaillé (Optionnel)</Label>
                                    <Textarea 
                                        id="comments"
                                        placeholder="Qu'avez-vous particulièrement apprécié ? Comment pourrions-nous améliorer ce cours ?"
                                        className="min-h-[120px] bg-background rounded-xl resize-none"
                                        value={comments}
                                        onChange={e => setComments(e.target.value)}
                                    />
                                    <p className="text-xs text-muted-foreground text-right">L'IA de traitement du langage naturel analysera ce texte.</p>
                                </div>

                                <Button 
                                    type="submit" 
                                    disabled={isGenerating} 
                                    className="w-full h-12 rounded-xl text-base gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all"
                                >
                                    {isGenerating ? (
                                        <><Loader2 className="h-5 w-5 animate-spin" /> Analyse IA en cours...</>
                                    ) : (
                                        <><Send className="h-5 w-5" /> Soumettre & Analyser (Démo)</>
                                    )}
                                </Button>

                                {apiError && (
                                    <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl p-4 flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        <p>{apiError}</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Results / Demo Section */}
                    <div className="space-y-6">
                        {!aiFeedback && !isGenerating ? (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="h-full min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center p-8 text-center bg-card/30">
                                <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-6">
                                    <Sparkles className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Simulateur de Feedback IA</h3>
                                <p className="text-muted-foreground max-w-md">
                                    Remplissez le formulaire ci-contre. Dès sa soumission, notre modèle IA (Gemini) génèrera automatiquement un résumé des points forts et axes d'amélioration pour le professeur !
                                </p>
                            </motion.div>
                        ) : isGenerating ? (
                            <div className="h-full min-h-[400px] border border-border shadow-lg rounded-3xl flex flex-col items-center justify-center p-8 text-center bg-card/80 backdrop-blur">
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
                                    <BrainCircuit className="h-20 w-20 text-primary animate-pulse relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">L'IA analyse vos mots...</h3>
                                <p className="text-muted-foreground max-w-md">
                                    Le modèle convertit vos retours quantitatifs et qualitatifs en insights structurés pour le professeur.
                                </p>
                            </div>
                        ) : aiFeedback ? (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card border border-primary/30 shadow-2xl shadow-primary/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
                                
                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Sparkles className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Feedback Généré par l'IA</h3>
                                        <p className="text-xs text-muted-foreground">Généré instantanément pour {professor}</p>
                                    </div>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="bg-background rounded-2xl p-5 border border-border">
                                        <p className="text-sm font-medium leading-relaxed italic border-l-4 border-primary pl-4 text-foreground/90">
                                            "{aiFeedback.summary}"
                                        </p>
                                    </div>

                                    <div className="bg-success/5 border border-success/20 rounded-2xl p-5">
                                        <h4 className="text-sm font-bold text-success mb-3 flex items-center gap-2">
                                            <TrendingUp className="h-4 w-4" /> Points Forts Détectés
                                        </h4>
                                        <ul className="space-y-2">
                                            {aiFeedback.strengths.map((s, i) => (
                                                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                                                    <span>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
                                        <h4 className="text-sm font-bold text-accent mb-3 flex items-center gap-2">
                                            <AlertCircle className="h-4 w-4" /> Recommandations
                                        </h4>
                                        <ul className="space-y-2">
                                            {aiFeedback.improvements.map((s, i) => (
                                                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                                    <AlertCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                    <span>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ) : null}
                    </div>
                </div>
            </main>
        </div>
    );
}
