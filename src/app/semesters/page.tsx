"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, GraduationCap, Clock, BookOpen, Brain, BookMarked } from "lucide-react";
import { professors, semesterData } from "@/data/mockData";
import DashboardLayout from "@/components/DashboardLayout";

export default function SemestersPage() {
    const [activeSemester, setActiveSemester] = useState<"Automne" | "Printemps">("Automne");

    const currentData = semesterData[activeSemester];

    // Quick stats
    const totalProfessors = currentData.length;
    const totalCourses = currentData.reduce((acc, curr) => acc + curr.courses.length, 0);
    const totalHours = currentData.reduce(
        (acc, curr) => acc + curr.courses.reduce((sum, course) => sum + course.hours, 0),
        0
    );

    return (
        <DashboardLayout>
            <div className="space-y-8 pb-8">
                {/* Header section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                        <Layers className="h-8 w-8 text-primary" />
                        Gestion des Semestres
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Vue d'ensemble des affectations pédagogiques par semestre.
                    </p>
                </div>

                {/* Semester Tabs */}
                <div className="flex p-1 bg-secondary/50 backdrop-blur-md rounded-xl border border-border">
                    {(["Automne", "Printemps"] as const).map((sem) => (
                        <button
                            key={sem}
                            onClick={() => setActiveSemester(sem)}
                            className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeSemester === sem
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {activeSemester === sem && (
                                <motion.div
                                    layoutId="active-semester-tab"
                                    className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Semestre d'{sem}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Professeurs Actifs</p>
                            <h3 className="text-3xl font-bold text-foreground">{totalProfessors}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                            <BookMarked className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Matières Enseignées</p>
                            <h3 className="text-3xl font-bold text-foreground">{totalCourses}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
                            <Clock className="h-6 w-6 text-success" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Heures Programmées</p>
                            <h3 className="text-3xl font-bold text-foreground">{totalHours}h</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid of Professors and their courses */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Répartition de la charge
                </h2>

                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeSemester}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        {currentData.map((assignment, index) => {
                            const prof = professors.find((p) => p.id === assignment.professorId);
                            if (!prof) return null;

                            const profTotalHours = assignment.courses.reduce((sum, c) => sum + c.hours, 0);

                            return (
                                <motion.div
                                    key={prof.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-background border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-4 border-b border-border pb-4 w-full">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold text-primary ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all flex-shrink-0">
                                                {prof.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0 text-left">
                                                <h3 className="font-semibold text-foreground text-lg truncate whitespace-normal leading-tight">{prof.name}</h3>
                                                <p className="text-sm text-muted-foreground truncate">{prof.specialty}</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex-shrink-0 ml-4">
                                            <div className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold bg-secondary/50">
                                                {profTotalHours}h total
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 flex-1 flex flex-col">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 text-left">
                                            Modules Enseignés
                                        </p>
                                        <div className="grid grid-cols-1 gap-2 flex-1">
                                            {assignment.courses.map((course, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors w-full"
                                                >
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        <div
                                                            className="w-1.5 h-8 rounded-full flex-shrink-0"
                                                            style={{ backgroundColor: course.color }}
                                                        />
                                                        <div className="text-left flex-1 min-w-0">
                                                            <p className="font-medium text-sm text-foreground truncate">{course.name}</p>
                                                            <div className="flex items-center gap-2 mt-0.5">
                                                                <span
                                                                    className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm flex-shrink-0"
                                                                    style={{
                                                                        backgroundColor: `${course.color}20`,
                                                                        color: course.color,
                                                                    }}
                                                                >
                                                                    {course.type}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border flex-shrink-0 ml-2">
                                                        <Clock className="h-3 w-3" />
                                                        {course.hours}h
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
        </DashboardLayout>
    );
}
