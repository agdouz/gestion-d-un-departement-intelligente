"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, BarChart3, Calendar, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import landingDashboard from "@/assets/academic-dashboard.png";
import landingAi from "@/assets/academic-lab.png";
import landingSchedule from "@/assets/academic-schedule.png";
import customLogo from "@/assets/smart-knowledge-logo.png";
import fsjesLogo from "@/assets/fsjes-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import ScrollFrameCanvas from "@/components/ScrollFrameCanvas";

const howItWorks = [
  { step: "01", title: "Connectez vos Données", desc: "Importez les profils, les cours et les emplois du temps dans la plateforme." },
  { step: "02", title: "L'IA Analyse", desc: "Nos modèles détectent les déséquilibres, les conflits et les opportunités d'optimisation." },
  { step: "03", title: "Obtenez des Insights", desc: "Recevez des recommandations, des alertes de risque et des plannings optimisés." },
  { step: "04", title: "Implémentez", desc: "Appliquez les changements et suivez les améliorations avec nos tableaux de bord." },
];

const programs = [
  {
    id: "intl-management",
    title: "Licence Management International",
    description: "Une formation d'excellence pour préparer les leaders de demain aux défis du commerce mondial, avec une forte dimension interculturelle et stratégique.",
    videoId: "Chn1nBLKrug",
  },
  {
    id: "marketing",
    title: "Licence Marketing",
    description: "Maîtrisez les nouvelles tendances du marketing digital, l'analyse du comportement consommateur et la conception de stratégies de marque innovantes.",
    videoId: "USZKT3N1QQw",
  },
  {
    id: "logistique",
    title: "Licence Logistique",
    description: "Devenez un expert de la chaîne d'approvisionnement (Supply Chain), de l'optimisation des flux internationaux et de la gestion des opérations.",
    videoId: "2-m5Cyx4A-k",
  },
  {
    id: "management",
    title: "Licence Management",
    description: "Acquérez des compétences fondamentales et pratiques en gestion d'entreprise, ressources humaines et prise de décision stratégique.",
    videoId: "XbPx0gb7Znk",
  }
];

const testimonials = [
  { name: "Prof. Marie Laurent", role: "Doyenne, Sciences de Gestion", quote: "FSJES Analytics a réduit nos conflits horaires de 40% dès le premier semestre.", rating: 5 },
  { name: "Dr. Ahmed Benkhedda", role: "Chef de Département de Recherche IA", quote: "La prédiction du burn-out nous a permis de sauver deux de nos meilleurs chercheurs.", rating: 5 },
  { name: "Prof. Tanaka Hiroshi", role: "Vice-Président, Affaires Académiques", quote: "Enfin un outil qui comprend la complexité de la gestion universitaire.", rating: 5 },
];

const fadeUp = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-50px" },
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Floating Premium Glass Navbar */}
      <header className="absolute top-6 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 pointer-events-none">
        <motion.div 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between w-full max-w-6xl px-2 sm:px-3 py-2 sm:py-3 bg-black/20 hover:bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 pointer-events-auto group"
        >
          {/* LEFT: Logo & Brand (flex-1 ensures perfect symmetry) */}
          <div className="flex items-center gap-3 flex-1">
            <div className="h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded-full overflow-hidden bg-white shadow-inner border border-white/20 flex-shrink-0">
              <img src={fsjesLogo.src} alt="FSJES Marrakech" className="h-[70%] w-auto object-contain" />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-bold text-white leading-tight tracking-tight text-sm drop-shadow-md">
                FSJES Analytics
              </span>
              <span className="text-[10px] text-gray-300 font-medium uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                Université Cadi Ayyad
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-10 px-6 text-sm font-semibold tracking-wide text-gray-300">
            <a href="#how-it-works" className="relative group/link hover:text-white transition-colors py-1">
              Plateforme
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a href="#showcase" className="relative group/link hover:text-white transition-colors py-1">
              Intelligence
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a href="#testimonials" className="relative group/link hover:text-white transition-colors py-1">
              Impact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </nav>

          {/* RIGHT: Actions (flex-1 justify-end ensures symmetry) */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="hidden sm:block opacity-70 hover:opacity-100 transition-opacity">
              <ThemeToggle />
            </div>
            <Link href="/auth">
              <Button size="sm" className="rounded-full px-5 sm:px-7 py-5 bg-white text-black hover:bg-gray-100 font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105 border border-white/50">
                Se connecter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Scroll-driven frame animation with content overlays */}
      <ScrollFrameCanvas />

      {/* How it Works */}
      <section id="how-it-works" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Comment ça marche</h2>
          <p className="text-muted-foreground mt-2">Quatre étapes simples pour transformer la gestion de votre département.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((s, i) => (
            <motion.div key={s.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 relative card-hover">
              <span className="text-4xl font-bold gradient-text opacity-30 absolute top-4 right-4 font-mono">{s.step}</span>
              <h4 className="font-semibold text-foreground mb-2 mt-4">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase sections with images */}
      <section id="showcase" className="relative z-10 max-w-6xl mx-auto px-6 pb-24 space-y-24">
        {/* Dashboard */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-4">
              <BarChart3 className="h-3 w-3 text-primary" /> Tableau de Bord Temps Réel
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Visualisation Intelligente des Données</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Surveillez la charge de travail, les tendances de performance et l'état du département en un coup d'œil.
              Nos tableaux de bord se mettent à jour en temps réel.
            </p>
            <ul className="space-y-2">
              {["Suivi de la charge de travail", "Analyse des performances", "KPIs Départementaux"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border glow-sm">
            <img src={landingDashboard.src} alt="Smart dashboard analytics" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-border glow-sm">
            <img src={landingAi.src} alt="AI brain neural network" className="w-full h-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-4">
              <Brain className="h-3 w-3 text-primary" /> Moteur IA
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Intelligence Prédictive</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nos modèles d'IA analysent les schémas pour prédire les risques de burn-out
              et suggérer des optimisations de ressources avant que les problèmes ne surviennent.
            </p>
            <ul className="space-y-2">
              {["Détection des risques d'épuisement", "Optimisation des ressources", "Alerte de conflits horaires"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-4">
              <Calendar className="h-3 w-3 text-primary" /> Planification Intelligente
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Emploi du temps Intelligent</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Génération d'horaires par l'IA qui résout automatiquement les conflits et
              équilibre la charge de travail entre le département.
            </p>
            <ul className="space-y-2">
              {["Résolution de conflits", "Optimisation des salles", "Correspondance des compétences"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border glow-sm">
            <img src={landingSchedule.src} alt="Smart schedule management" className="w-full h-auto" />
          </div>
        </motion.div>
      </section>

      {/* Formations / Videos */}
      <section id="formations" className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Nos Formations d'Excellence</h2>
          <p className="text-muted-foreground mt-2">Découvrez nos programmes de Licence en sciences de gestion et management.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <motion.div key={prog.id} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm card-hover flex flex-col">
              <div className="aspect-video w-full bg-black/5 relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${prog.videoId}`} 
                  title={prog.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{prog.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{prog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Ce que disent les Enseignants</h2>
          <p className="text-muted-foreground mt-2">Approuvé par notre équipe pédagogique.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-32 text-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="bg-card border border-border rounded-2xl p-10 glow-md">
          <h2 className="text-2xl font-bold text-foreground mb-3">Prêt à transformer votre département ?</h2>
          <p className="text-muted-foreground mb-6">Commencez dès aujourd'hui avec nos outils de gestion IA.</p>
          <Link href="/auth">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 gap-2 glow-sm">
              Commencer <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Département Sciences de Gestion - FSJES Marrakech</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 FSJES Analytics — Université Cadi Ayyad. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
