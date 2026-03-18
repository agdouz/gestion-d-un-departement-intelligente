"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, AlertTriangle, Sparkles, Filter, Clock, MapPin, User, Lock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useRole } from "@/components/RoleProvider";
import { scheduleData, professors } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const timeSlots = ["08:00-09:30", "10:00-11:30", "13:00-14:30", "15:00-16:30"];

const typeColors: Record<string, string> = {
  cm: "bg-primary/15 border-primary/30 text-primary",
  tp: "bg-accent/15 border-accent/30 text-accent",
  td: "bg-success/15 border-success/30 text-success",
};

export default function Schedule() {
  const { currentRole } = useRole();
  const isProfessor = currentRole === "Professeur";
  const [filterProf, setFilterProf] = useState("all");
  const [optimizing, setOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const filtered = filterProf === "all"
    ? scheduleData
    : scheduleData.filter((s) => s.professor === filterProf);

  const conflicts = scheduleData.filter((s) => s.conflict);

  const handleOptimize = () => {
    setOptimizing(true);
    setTimeout(() => {
      setOptimizing(false);
      setOptimized(true);
    }, 2000);
  };

  const getSlot = (day: string, time: string) =>
    filtered.filter((s) => s.day === day && s.timeSlot === time);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" /> Emploi du Temps {isProfessor ? "" : "Intelligent"}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {isProfessor ? "Consultez le planning global ou filtrez par collègue" : "Gestion optimisée par l'IA"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={filterProf} onValueChange={setFilterProf}>
              <SelectTrigger className="w-48 bg-secondary border-border h-9 text-sm">
                <Filter className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Filtrer par professeur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les Professeurs</SelectItem>
                {professors.map((p) => (
                  <SelectItem key={p.id} value={p.name.split(" ").slice(0, 2).join(" ") === "Dr." ? p.name.split(" ").slice(0, 2).join(" ") + " " + p.name.split(" ")[2] : p.name}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {!isProfessor && (
              <>
                <Button
                  onClick={handleOptimize}
                  disabled={optimizing}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-9 text-sm"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {optimizing ? "Optimisation..." : "Optimiser via l'IA"}
                </Button>
                <Link href="/schedule/builder">
                  <Button variant="outline" className="h-9 text-sm border-border bg-secondary hover:bg-secondary/80 gap-2">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    Éditeur Visuel
                  </Button>
                </Link>
              </>
            )}
            {isProfessor && (
              <Button disabled variant="outline" className="h-9 text-sm border-border/50 bg-secondary/50 gap-2">
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                Lecture Seule
              </Button>
            )}
          </div>
        </div>

        {/* Conflict alerts */}
        {conflicts.length > 0 && !optimized && !isProfessor && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-destructive/10 border border-destructive/20 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">{conflicts.length} Conflits Détectés</p>
              <p className="text-xs text-muted-foreground mt-1">
                {conflicts.map((c) => `${c.course} (${c.day} ${c.timeSlot})`).join(" · ")}
              </p>
            </div>
          </motion.div>
        )}

        {optimized && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-success/10 border border-success/20 rounded-2xl p-4 flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Planning Optimisé avec Succès</p>
              <p className="text-xs text-muted-foreground mt-1">Tous les conflits sont résolus. Utilisation des salles améliorée de 34%. Satisfaction : 92/100.</p>
            </div>
          </motion.div>
        )}

        {/* Timetable Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3 w-28 bg-secondary/30">
                    <Clock className="h-3.5 w-3.5 inline mr-1" /> Heure
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
                  <tr key={time} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-xs font-mono text-muted-foreground align-top whitespace-nowrap">
                      {time}
                    </td>
                    {days.map((day) => {
                      const slots = getSlot(day, time);
                      return (
                        <td key={day} className="px-2 py-2 align-top">
                          {slots.length > 0 ? (
                            <div className="space-y-1">
                              {slots.map((slot) => (
                                <div
                                  key={slot.id}
                                  className={`rounded-xl border p-2.5 text-xs transition-all hover:scale-[1.02] ${typeColors[slot.type]} ${slot.conflict && !optimized ? "ring-1 ring-destructive/50 animate-pulse" : ""
                                    }`}
                                >
                                  <p className="font-semibold truncate">{slot.course}</p>
                                  <div className="flex items-center gap-1 mt-1 opacity-70">
                                    <User className="h-3 w-3" />
                                    <span className="truncate">{slot.professor}</span>
                                  </div>
                                  <div className="flex items-center gap-1 mt-0.5 opacity-70">
                                    <MapPin className="h-3 w-3" />
                                    <span>{slot.room}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="h-16 rounded-xl border border-dashed border-border/50 flex items-center justify-center">
                              <span className="text-xs text-muted-foreground/30">—</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend & Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-2xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Légende</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><div className="h-3 w-3 rounded bg-primary/30" /><span className="text-xs text-foreground">Cours Magistral (CM)</span></div>
              <div className="flex items-center gap-2"><div className="h-3 w-3 rounded bg-accent/30" /><span className="text-xs text-foreground">Travaux Pratiques (TP)</span></div>
              <div className="flex items-center gap-2"><div className="h-3 w-3 rounded bg-success/30" /><span className="text-xs text-foreground">Travaux Dirigés (TD)</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border border-border rounded-2xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Total des Sessions</p>
            <p className="text-2xl font-bold text-foreground font-mono">{scheduleData.length}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-2xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Salles Utilisées</p>
            <p className="text-2xl font-bold text-foreground font-mono">{new Set(scheduleData.map((s) => s.room)).size}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card border border-border rounded-2xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Taux d&apos;Utilisation</p>
            <p className="text-2xl font-bold gradient-text font-mono">{optimized ? "94%" : "78%"}</p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
