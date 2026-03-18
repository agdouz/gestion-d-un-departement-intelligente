"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Zap, Sparkles, Activity, ShieldAlert, ArrowRight, BookX } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { aiInsights } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const typeConfig = {
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", border: "border-warning/20", label: "Avertissement" },
  prediction: { icon: TrendingUp, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20", label: "Prédiction" },
  optimization: { icon: Zap, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20", label: "Optimisation" },
};

// Mock data for new predictive sections
const burnoutRisk = [
  { name: "Dr. James Wilson", department: "Computer Science", load: 30, maxLoad: 24, students: 240, riskLevel: "Critique", action: "Réduire la charge de 6h/semaine", avatar: "JW" },
  { name: "Dr. Robert Kim", department: "AI Research", load: 28, maxLoad: 24, students: 200, riskLevel: "Élevé", action: "Réaffecter 1 cours magistral", avatar: "RK" },
];

const passRatePredictions = [
  { course: "Big Data & Data Mining", major: "Data Science", predictedFailure: 35, trend: "up", reason: "Complexité du projet final & charge condensée", action: "Ajouter 4h de séances de tutorat intégrées" },
  { course: "Traitement d&apos;Image", major: "IA & Computer Vision", predictedFailure: 28, trend: "stable", reason: "Transition abrupte entre théorie et pratique", action: "Intercaler un mini-projet de transition" },
  { course: "Cryptographie", major: "Sécurité Informationnelle", predictedFailure: 18, trend: "down", reason: "Excellente pédagogie (Dr. Hassan)", action: "Maintenir la méthodologie actuelle" },
];

export default function AIInsights() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Module IA</h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Analyses et prédictions intelligentes</p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-4">
          {(["warning", "prediction", "optimization"] as const).map((type) => {
            const cfg = typeConfig[type];
            const count = aiInsights.filter((i) => i.type === type).length;
            return (
              <motion.div key={type} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`${cfg.bg} border ${cfg.border} rounded-2xl p-4 text-center`}>
                <cfg.icon className={`h-5 w-5 ${cfg.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${cfg.color}`}>{count}</div>
                <div className="text-xs text-muted-foreground mt-1">{cfg.label}s</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Section 1: Détection de Surmenage */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Activity className="h-5 w-5 text-destructive" /> Détection de Surmenage
              </h2>
              <Badge variant="outline" className="text-destructive border-destructive/20 bg-destructive/10">Action Requise</Badge>
            </div>

            <div className="grid gap-4">
              {burnoutRisk.map((prof, i) => (
                <div key={i} className="bg-card border border-destructive/20 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-destructive/50" />
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold text-sm">
                        {prof.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{prof.name}</h3>
                        <p className="text-xs text-muted-foreground">{prof.department}</p>
                      </div>
                    </div>
                    <Badge variant="destructive" className="bg-destructive/10 text-destructive hover:bg-destructive/20 border-0">{prof.riskLevel}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Charge Hebdo (HETD)</p>
                      <p className="text-sm font-semibold flex items-baseline gap-1">
                        <span className="text-destructive text-base">{prof.load}h</span>
                        <span className="text-muted-foreground">/ {prof.maxLoad}h max</span>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Volume Étudiants</p>
                      <p className="text-sm font-semibold">{prof.students} étudiants</p>
                    </div>
                  </div>

                  <div className="bg-destructive/5 rounded-xl p-3 flex items-start gap-3 border border-destructive/10">
                    <ShieldAlert className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-destructive mb-1">Recommandation IA</p>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-sm text-foreground">{prof.action}</p>
                        <Button size="sm" variant="outline" className="h-7 text-xs border-destructive/30 hover:bg-destructive hover:text-white">Appliquer</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Prédictions sur le Taux de Réussite */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" /> Prédictions Taux de Réussite
              </h2>
            </div>

            <div className="grid gap-4">
              {passRatePredictions.map((pred, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-5 hover:border-accent/40 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <BookX className="h-4 w-4 text-muted-foreground" /> {pred.course}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{pred.major}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold font-mono ${pred.trend === 'up' ? 'text-destructive' : pred.trend === 'down' ? 'text-success' : 'text-warning'}`}>
                        {pred.predictedFailure}%
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Risque d&apos;échec</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Diagnostic IA</p>
                      <p className="text-sm text-foreground leading-relaxed bg-secondary/50 p-2.5 rounded-lg border border-border/50">
                        {pred.reason}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-border/50">
                      <div className="flex items-center gap-2 flex-1 relative group">
                        <Sparkles className="h-3.5 w-3.5 text-accent absolute left-0" />
                        <p className="text-xs font-medium text-foreground pl-5 pr-2 truncate" title={pred.action}>{pred.action}</p>
                      </div>
                      {pred.trend !== 'down' && (
                        <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full hover:bg-accent/10 hover:text-accent">
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* separator */}
        <div className="flex items-center gap-4 py-4">
          <div className="h-px bg-border flex-1" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Autres Notifications IA</span>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Existing Insights List */}
        <div className="space-y-3">
          {aiInsights.map((insight, i) => {
            const cfg = typeConfig[insight.type];
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded-xl ${cfg.bg} flex items-center justify-center flex-shrink-0`}>
                    <cfg.icon className={`h-5 w-5 ${cfg.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-foreground">{insight.title}</h3>
                      <Badge variant="outline" className={`text-xs ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                        {cfg.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-muted-foreground font-mono">Confiance : {insight.confidence}%</span>
                      <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
