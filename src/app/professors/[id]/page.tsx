"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Clock, Award, AlertTriangle, BookOpen, Lightbulb, Phone, MapPin, Download, GraduationCap, FileText, Users, Star, RotateCcw, Video, File, ExternalLink, Activity, Percent, Sparkles } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";
import { professors } from "@/data/mockData";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRole } from "@/components/RoleProvider";
import jsPDF from "jspdf";

const weeklyBreakdown = [
  { day: "Mon", hours: 6 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 3 },
  { day: "Fri", hours: 4 },
];

const recommendations = [
  "Consider reducing weekly teaching hours by 4h to improve performance trajectory.",
  "Assign a teaching assistant for the most intensive course.",
  "Schedule office hours on lighter workload days for better balance.",
];

function generatePDF(prof: typeof professors[0]) {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(prof.name, margin, y);
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`${prof.specialty} — ${prof.department}`, margin, y);
  y += 12;

  doc.setDrawColor(200);
  doc.line(margin, y, 190, y);
  y += 10;

  // Contact
  doc.setTextColor(0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Contact Information", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Email: ${prof.email}`, margin, y); y += 6;
  doc.text(`Phone: ${prof.phone}`, margin, y); y += 6;
  doc.text(`Office: ${prof.office}`, margin, y); y += 10;

  // Bio
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Biography", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const bioLines = doc.splitTextToSize(prof.bio, 170);
  doc.text(bioLines, margin, y);
  y += bioLines.length * 5 + 8;

  // Education
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Education", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  prof.education.forEach((e) => {
    doc.text(`• ${e}`, margin + 2, y);
    y += 6;
  });
  y += 6;

  // Courses
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Current Courses", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  prof.courses.forEach((c) => {
    doc.text(`• ${c}`, margin + 2, y);
    y += 6;
  });
  y += 6;

  // Research
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Research Interests", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  prof.researchInterests.forEach((r) => {
    doc.text(`• ${r}`, margin + 2, y);
    y += 6;
  });
  y += 6;

  // Stats
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Academic Statistics", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Publications: ${prof.publications}`, margin, y); y += 6;
  doc.text(`Years of Service: ${prof.yearsOfService}`, margin, y); y += 6;
  doc.text(`Weekly Teaching Hours: ${prof.weeklyHours}h`, margin, y); y += 6;
  doc.text(`Performance Score: ${prof.performanceScore}/100`, margin, y); y += 6;
  doc.text(`Student Rating: ${prof.studentRating}/5.0`, margin, y); y += 6;
  doc.text(`Total Students: ${prof.totalStudents}`, margin, y); y += 6;
  doc.text(`Risk Level: ${prof.riskLevel}`, margin, y);

  doc.save(`${prof.name.replace(/\s/g, "_")}_CV.pdf`);
}

export default function ProfessorProfile() {
  const { id } = useParams();
  const { currentRole } = useRole();
  const isAdminOrSuperAdmin = currentRole === "Super Admin" || currentRole === "Admin Dept";
  const prof = professors.find((p) => p.id === id);

  if (!prof) {
    return (
      <DashboardLayout>
        <div className="text-center py-20 text-muted-foreground">Professor not found.</div>
      </DashboardLayout>
    );
  }

  const riskColor = prof.riskLevel === "Low" ? "text-success" : prof.riskLevel === "Medium" ? "text-warning" : "text-destructive";
  const riskBg = prof.riskLevel === "Low" ? "bg-success/10" : prof.riskLevel === "Medium" ? "bg-warning/10" : "bg-destructive/10";

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/professors">
            <Button variant="ghost" size="sm" className="text-muted-foreground gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Professors
            </Button>
          </Link>
          <Button onClick={() => generatePDF(prof)} className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-9 text-sm">
            <Download className="h-4 w-4" /> Download CV (PDF)
          </Button>
        </div>

        {/* Profile Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">{prof.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <h1 className="text-xl font-bold text-foreground">{prof.name}</h1>
              <p className="text-sm text-muted-foreground">{prof.specialty} · {prof.department}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" />{prof.email}</span>
                <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" />{prof.phone}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{prof.office}</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{prof.weeklyHours}h/semaine</span>
                <span className="flex items-center gap-1"><Award className="h-3.5 w-3.5" />{prof.yearsOfService} ans d&apos;ancienneté</span>
                <span className="flex items-center gap-1"><FileText className="h-3.5 w-3.5" />{prof.publications} publications</span>
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{prof.totalStudents} étudiants</span>
                <span className="flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5 text-destructive" />{prof.rattrapageRate}% en rattrapage</span>
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-warning" />{prof.studentRating}/5.0</span>
              </div>
            </div>
            <div className={`self-start px-4 py-2 rounded-xl ${riskBg} flex items-center gap-2`}>
              <AlertTriangle className={`h-4 w-4 ${riskColor}`} />
              <span className={`text-sm font-medium ${riskColor}`}>{prof.riskLevel} Risk</span>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">Biography</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{prof.bio}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" /> Education</h3>
            <div className="space-y-2">
              {prof.education.map((e) => (
                <div key={e} className="flex items-start gap-3 px-3 py-2.5 bg-secondary/50 rounded-xl text-sm text-foreground">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {e}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research Interests */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="bg-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary" /> Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {prof.researchInterests.map((r) => (
                <Badge key={r} variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">
                  {r}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Workload Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Weekly Workload</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyBreakdown}>
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="hours" fill="hsl(192, 95%, 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Courses */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="bg-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> Current Courses</h3>
            <div className="space-y-2">
              {prof.courses.map((c) => (
                <div key={c} className="flex items-center gap-3 px-3 py-2.5 bg-secondary/50 rounded-xl text-sm text-foreground">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Recommendations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" /> AI Recommendations
          </h3>
          <div className="space-y-3">
            {recommendations.map((r, i) => (
              <div key={i} className="flex gap-3 p-3 bg-primary/5 border border-primary/10 rounded-xl">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-primary font-mono">{i + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">Performance Score</h3>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-foreground font-mono">{prof.performanceScore}</div>
            <div className="flex-1">
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${prof.performanceScore}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pedagogical Performance (Admin Only) */}
        {isAdminOrSuperAdmin && prof.evaluations && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" /> Performances Pédagogiques
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Vue administrateur des évaluations étudiantes et de l&apos;analyse IA.</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold font-mono text-success flex items-center justify-end gap-1">
                  {prof.passRate} <Percent className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Taux de réussite global</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Star className="h-4 w-4 text-warning fill-warning" /> Notes des Étudiants
                </h4>
                {[
                  { label: "Clarté des explications", value: prof.evaluations.clarity },
                  { label: "Engagement & Dynamisme", value: prof.evaluations.engagement },
                  { label: "Disponibilité & Soutien", value: prof.evaluations.support },
                  { label: "Qualité des supports", value: prof.evaluations.materials },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold">{item.value}/5.0</span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-warning" style={{ width: `${(item.value / 5) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" /> Synthèse IA
                </h4>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {prof.aiFeedback.summary}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-success uppercase tracking-wider">Points Forts</span>
                    <ul className="mt-1 space-y-1">
                      {prof.aiFeedback.strengths.slice(0, 2).map((s, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5 truncate">
                          <span className="text-success mt-0.5">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">À surveiller</span>
                    <ul className="mt-1 space-y-1">
                      {prof.aiFeedback.improvements.slice(0, 2).map((s, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5 truncate">
                          <span className="text-accent mt-0.5">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Supports de cours (PDFs & Videos) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card border border-border rounded-2xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" /> Supports de Cours (Ressources Numériques)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {prof.materials && prof.materials.map((mat, i) => (
              <div key={i} className="flex gap-3 p-3 bg-secondary/50 rounded-xl">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {mat.type === "video" ? <Video className="h-5 w-5 text-primary" /> : <File className="h-5 w-5 text-primary" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground truncate">{mat.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{mat.type === "video" ? "Enregistrement vidéo" : "Document PDF"}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {(!prof.materials || prof.materials.length === 0) && (
              <p className="text-sm text-muted-foreground col-span-full">Aucun support de cours externe pour le moment.</p>
            )}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
