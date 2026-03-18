"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Save, AlertTriangle, CheckCircle2, GripVertical, ChevronLeft, User, Clock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const timeSlots = ["08:00-09:30", "10:00-11:30", "13:00-14:30", "15:00-16:30", "17:00-18:30"];

// Mock unassigned courses
const initialUnassigned = [
    { id: "c1", title: "Machine Learning CM", prof: "Dr. Sarah Chen", duration: "1.5h", type: "cm", color: "bg-primary/10 border-primary/30 text-primary" },
    { id: "c2", title: "Web Dev TP", prof: "Alan Turing", duration: "1.5h", type: "tp", color: "bg-accent/10 border-accent/30 text-accent" },
    { id: "c3", title: "Base de Données TD", prof: "Ada Lovelace", duration: "1.5h", type: "td", color: "bg-success/10 border-success/30 text-success" },
    { id: "c4", title: "Algorithmique CM", prof: "Dr. Sarah Chen", duration: "1.5h", type: "cm", color: "bg-primary/10 border-primary/30 text-primary" },
    { id: "c4", title: "Algorithmique CM", prof: "Dr. Sarah Chen", duration: "1.5h", type: "cm", color: "bg-primary/10 border-primary/30 text-primary" },
];

interface CourseItem {
    id: string;
    title: string;
    prof: string;
    type: string;
    color: string;
    duration?: string;
    source?: string;
}

export default function ScheduleBuilder() {
    const [unassigned, setUnassigned] = useState<CourseItem[]>(initialUnassigned);
    const [grid, setGrid] = useState<Record<string, CourseItem>>({
        "Lundi-08:00-09:30": { id: "c5", title: "Réseaux TP", prof: "John Doe", type: "tp", color: "bg-accent/10 border-accent/30 text-accent" }
    });
    const [draggedItem, setDraggedItem] = useState<CourseItem | null>(null);
    const [conflictMsg, setConflictMsg] = useState<string | null>(null);

    const handleDragStart = (e: React.DragEvent, item: CourseItem, source: string) => {
        setDraggedItem({ ...item, source });
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e: React.DragEvent, targetId: string) => {
        e.preventDefault();
        if (!draggedItem) return;

        setConflictMsg(null);

        // Simulate conflict detection
        if (targetId !== "unassigned" && grid[targetId]) {
            setConflictMsg("Erreur de conflit: Le créneau est déjà occupé.");
            return;
        }

        // Simulate professor unavailability
        if (targetId !== "unassigned" && targetId.startsWith("Vendredi") && draggedItem.prof === "Dr. Sarah Chen") {
            setConflictMsg("Alerte: Dr. Sarah Chen n'est pas disponible le Vendredi.");
            // We still place it to show the visual warning state
        }

        // Remove from source
        if (draggedItem.source === "unassigned") {
            setUnassigned(prev => prev.filter(i => i.id !== draggedItem.id));
        } else {
            const newGrid = { ...grid };
            delete newGrid[draggedItem.source];
            setGrid(newGrid);
        }

        // Add to target
        if (targetId === "unassigned") {
            setUnassigned(prev => [...prev, draggedItem]);
        } else {
            setGrid(prev => ({
                ...prev,
                [targetId]: draggedItem
            }));
        }

        setDraggedItem(null);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link href="/schedule">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-primary" /> Éditeur Visuel (Drag & Drop)
                            </h1>
                            <p className="text-sm text-muted-foreground mt-1">Générez et modifiez manuellement le planning.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="gap-2 border-border text-foreground hover:bg-secondary">
                            Annuler les modifs
                        </Button>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                            <Save className="h-4 w-4" /> Publier l&apos;EDT
                        </Button>
                    </div>
                </div>

                {/* Dynamic Alerts */}
                {conflictMsg && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl border flex items-start gap-3 ${conflictMsg.includes("Erreur") ? "bg-destructive/10 border-destructive/20" : "bg-warning/10 border-warning/20"}`}>
                        <AlertTriangle className={`h-5 w-5 mt-0.5 ${conflictMsg.includes("Erreur") ? "text-destructive" : "text-warning"}`} />
                        <div>
                            <p className={`text-sm font-medium ${conflictMsg.includes("Erreur") ? "text-destructive" : "text-warning"}`}>{conflictMsg}</p>
                        </div>
                    </motion.div>
                )}

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Sidebar: Unassigned Courses */}
                    <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-5 flex flex-col h-[calc(100vh-14rem)]">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center justify-between">
                            Créneaux à affecter
                            <Badge variant="secondary" className="bg-secondary/50">{unassigned.length}</Badge>
                        </h3>

                        <div
                            className="flex-1 overflow-auto space-y-3 p-1"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, "unassigned")}
                        >
                            {unassigned.map(course => (
                                <div
                                    key={course.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, course, "unassigned")}
                                    className={`p-3 rounded-xl border ${course.color} cursor-grab active:cursor-grabbing hover:shadow-md transition-all flex items-start gap-2 bg-background`}
                                >
                                    <GripVertical className="h-4 w-4 mt-1 opacity-50 shrink-0" />
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold truncate">{course.title}</p>
                                        <div className="flex items-center gap-1 mt-1 opacity-80 text-xs">
                                            <User className="h-3 w-3" />
                                            <span className="truncate">{course.prof}</span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 opacity-80 text-xs">
                                            <Clock className="h-3 w-3" />
                                            <span>{course.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {unassigned.length === 0 && (
                                <div className="h-32 flex flex-col items-center justify-center text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
                                    <CheckCircle2 className="h-6 w-6 mb-2 opacity-50 text-success" />
                                    <p className="text-sm">Tous les cours sont placés</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="lg:col-span-3 bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-[calc(100vh-14rem)]">
                        <div className="overflow-auto flex-1">
                            <table className="w-full min-w-[800px] h-full">
                                <thead>
                                    <tr className="border-b border-border sticky top-0 bg-card z-10">
                                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3 w-28 bg-secondary/30">
                                            Heures
                                        </th>
                                        {days.map((day) => (
                                            <th key={day} className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 bg-secondary/30">
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {timeSlots.map((time) => (
                                        <tr key={time} className="border-b border-border last:border-0 h-28">
                                            <td className="px-4 py-3 text-xs font-mono text-muted-foreground align-top bg-secondary/10">
                                                {time}
                                            </td>
                                            {days.map((day) => {
                                                const cellId = `${day}-${time}`;
                                                const cellItem = grid[cellId];

                                                // Fake visual conflict if placed on Friday and from Dr. Sarah Chen
                                                const hasConflict = cellItem && cellItem.prof === "Dr. Sarah Chen" && day === "Vendredi";

                                                return (
                                                    <td
                                                        key={cellId}
                                                        className={`px-1 py-1 align-top border-l border-border/50 relative ${hasConflict ? 'bg-warning/5' : ''}`}
                                                        onDragOver={handleDragOver}
                                                        onDrop={(e) => handleDrop(e, cellId)}
                                                    >
                                                        <div className="w-full h-full min-h-[5rem] rounded-xl border-2 border-dashed border-transparent hover:border-primary/30 transition-colors p-1">
                                                            {cellItem ? (
                                                                <div
                                                                    draggable
                                                                    onDragStart={(e) => handleDragStart(e, cellItem, cellId)}
                                                                    className={`w-full h-full p-2.5 rounded-lg border ${cellItem.color} cursor-grab active:cursor-grabbing ${hasConflict ? 'ring-2 ring-warning animate-pulse' : ''} bg-background`}
                                                                >
                                                                    <p className="text-xs font-bold leading-tight line-clamp-2">{cellItem.title}</p>
                                                                    <div className="flex items-center gap-1 mt-1 opacity-80 text-[10px]">
                                                                        <User className="h-3 w-3 shrink-0" />
                                                                        <span className="truncate">{cellItem.prof}</span>
                                                                    </div>
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
