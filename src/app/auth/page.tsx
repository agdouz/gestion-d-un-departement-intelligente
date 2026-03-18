"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Building2, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import customLogo from "@/assets/smart-knowledge-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
    const roles = [
        {
            id: "prof",
            icon: GraduationCap,
            title: "Professeur",
            desc: "Accès à l'espace personnel, cours et planning",
            href: "/auth/professeur",
            color: "text-primary",
            bg: "bg-primary/5",
            hoverBorder: "hover:border-primary/50"
        },
        {
            id: "admin",
            icon: Building2,
            title: "Responsable Dept",
            desc: "Gestion du département et insights IA",
            href: "/auth/admin",
            color: "text-accent",
            bg: "bg-accent/5",
            hoverBorder: "hover:border-accent/50"
        },
        {
            id: "superadmin",
            icon: Shield,
            title: "Super Admin",
            desc: "Accès complet à la plateforme EMSI",
            href: "/auth/superadmin",
            color: "text-foreground",
            bg: "bg-secondary",
            hoverBorder: "hover:border-foreground/50"
        }
    ];

    return (
        <div className="min-h-screen relative flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/vitaly-gariev.jpg')" }}
            />
            {/* Dark overlay for text readability without being too white/blurry */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Back to Home Button */}
            <div className="absolute top-6 left-6 z-20">
                <Link href="/">
                    <Button variant="outline" className="bg-background/80 backdrop-blur-sm border-border hover:bg-background">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour à l'accueil
                    </Button>
                </Link>
            </div>            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
                <div className="h-14 w-14 rounded-xl flex items-center justify-center overflow-hidden bg-white mb-6 shadow-sm border border-border">
                    <img src={customLogo.src} alt="Smart Knowledge Logo" className="h-full w-full object-cover" />
                </div>
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground">
                    Bienvenue sur EMSI Analytics
                </h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Sélectionnez votre profil pour vous connecter
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl relative z-10"
            >
                <div className="bg-card py-10 px-4 shadow-xl shadow-black/5 sm:rounded-3xl border border-border sm:px-12">
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
                        {roles.map((role, i) => {
                            const Icon = role.icon;
                            return (
                                <Link href={role.href} key={role.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`relative flex flex-col items-center justify-center p-6 h-full border border-border rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md ${role.hoverBorder} hover:${role.bg}`}
                                    >
                                        <div className={`p-3 rounded-full ${role.bg} mb-4`}>
                                            <Icon className={`h-8 w-8 ${role.color}`} />
                                        </div>
                                        <span className="text-base font-bold text-foreground mb-2 text-center">
                                            {role.title}
                                        </span>
                                        <p className="text-xs text-muted-foreground text-center line-clamp-2">
                                            {role.desc}
                                        </p>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            <div className="absolute top-4 right-4 z-20">
                <ThemeToggle />
            </div>
        </div>
    );
}
