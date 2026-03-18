"use client";

import { motion } from "framer-motion";
import { GraduationCap, Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import customLogo from "@/assets/smart-knowledge-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ProfesseurAuthPage() {
    return (
        <div className="min-h-screen bg-transparent relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <Link href="/auth" className="absolute top-6 left-6 z-20 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" /> Retour aux profils
            </Link>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
                <div className="h-14 w-14 rounded-xl flex items-center justify-center overflow-hidden bg-white mb-6 shadow-sm border border-border">
                    <img src={customLogo.src} alt="Smart Knowledge Logo" className="h-full w-full object-cover" />
                </div>
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" /> Espace Professeur
                </h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Connectez-vous pour accéder à vos cours et votre planning
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="bg-card py-8 px-4 shadow-xl shadow-black/5 sm:rounded-2xl border border-border sm:px-10">
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Email EMSI</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm"
                                    placeholder="prenom.nom@emsi.ma"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Mot de passe</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <input
                                    type="password"
                                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary bg-background"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-primary/80">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Link href="/espace-perso">
                                <Button className="w-full flex justify-center items-center gap-2 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium shadow-sm shadow-primary/20">
                                    Connexion Professeur <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="absolute top-4 right-4 z-20">
                <ThemeToggle />
            </div>
        </div>
    );
}
