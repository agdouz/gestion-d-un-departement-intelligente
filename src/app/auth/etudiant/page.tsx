"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import fsjesLogo from "@/assets/fsjes-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useRole } from "@/components/RoleProvider";
import { useRouter } from "next/navigation";

export default function EtudiantAuthPage() {
    const { setCurrentRole } = useRole();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentRole("Étudiant");
        router.push("/evaluation-etudiant");
    };

    return (
        <div className="min-h-screen bg-transparent relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--success)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--success)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

            <Link href="/auth" className="absolute top-6 left-6 z-20 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" /> Retour aux profils
            </Link>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
                <div className="h-24 sm:h-28 w-auto rounded-xl flex items-center justify-center overflow-hidden bg-white/95 mb-6 shadow-md px-4 py-2 border border-border">
                    <img src={fsjesLogo.src} alt="FSJES Marrakech Logo" className="h-full w-auto object-contain" />
                </div>
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                    <User className="h-8 w-8 text-success" /> Portail Étudiant
                </h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Connectez-vous avec votre email FSJES pour évaluer vos cours
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="bg-card py-8 px-4 shadow-xl shadow-black/5 sm:rounded-2xl border border-border sm:px-10">
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Email Étudiant (FSJES)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-success focus:border-success transition-shadow sm:text-sm"
                                    placeholder="prenom.nom@etu.uca.ma"
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
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-success focus:border-success transition-shadow sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-border text-success focus:ring-success bg-background"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-success hover:text-success/80">
                                    Code massar oublié ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full flex justify-center items-center gap-2 py-2.5 bg-success text-success-foreground hover:bg-success/90 rounded-lg font-medium shadow-sm shadow-success/20 transition-all">
                                Connexion Étudiant <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </div>
            </motion.div>

            <div className="absolute top-4 right-4 z-20">
                <ThemeToggle />
            </div>
        </div>
    );
}
