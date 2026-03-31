"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import fsjesLogo from "@/assets/fsjes-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function SuperAdminAuthPage() {
    return (
        <div className="min-h-screen bg-transparent relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <Link href="/auth" className="absolute top-6 left-6 z-20 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" /> Retour aux profils
            </Link>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
                <div className="h-24 sm:h-28 w-auto rounded-xl flex items-center justify-center overflow-hidden bg-white/95 mb-6 shadow-md px-4 py-2 border border-border">
                    <img src={fsjesLogo.src} alt="FSJES Marrakech Logo" className="h-full w-auto object-contain" />
                </div>
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                    <Shield className="h-8 w-8 text-foreground" /> Super Administrateur
                </h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Accès global au système FSJES
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
                            <label className="block text-sm font-medium text-foreground mb-1.5">Identifiant Super Admin</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-shadow sm:text-sm"
                                    placeholder="root@fsjes.uca.ma"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Clé de sécurité globale (Mot de passe)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <input
                                    type="password"
                                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-shadow sm:text-sm"
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
                                    Maintenir la session
                                </label>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Link href="/dashboard/users">
                                <Button className="w-full flex justify-center items-center gap-2 py-2.5 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-medium shadow-sm">
                                    Accès Système <ArrowRight className="h-4 w-4" />
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
