"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Loader2,
  Brain,
  BarChart3,
  Shield,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TOTAL_FRAMES = 80;
const SCROLL_HEIGHT = "600vh"; // taller to give room for content sections

function framePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/frames/frame_${padded}.jpg`;
}

/* ───────────────────── Content sections data ──────────────────── */
const scrollSections = [
  {
    id: "hero",
    range: [0, 0.15] as [number, number],
    position: "center" as const,
    content: (
      <>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-black/30 text-xs text-white mb-6 font-medium backdrop-blur-sm">
          <Sparkles className="h-3 w-3 text-primary" />
          Empowering Modern Universities with AI
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
          <span>L'Excellence Académique</span>
          <br />
          <span className="text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            & Gestion Intelligente
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium bg-black/20 px-6 py-2 rounded-xl backdrop-blur-sm">
          L'optimisation académique intelligente propulsée par l'IA.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 gap-2 shadow-[0_4px_14px_rgba(255,100,50,0.4)]"
            >
              Commencer <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="#features">
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm rounded-xl px-8"
            >
              En savoir plus
            </Button>
          </a>
        </div>
      </>
    ),
  },
  {
    id: "stats",
    range: [0.18, 0.32] as [number, number],
    position: "center" as const,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { value: "98%", label: "Optimisation de l'Emploi du temps" },
          { value: "40%", label: "Réduction des Conflits" },
          { value: "8+", label: "Modèles IA Actifs" },
          { value: "24/7", label: "Surveillance en Temps Réel" },
        ].map((s) => (
          <div
            key={s.label}
            className="text-center bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5"
          >
            <div className="text-3xl font-bold text-primary">{s.value}</div>
            <div className="text-xs text-gray-300 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "features-1",
    range: [0.35, 0.48] as [number, number],
    position: "left" as const,
    content: (
      <div className="max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-xs text-gray-300 mb-4">
          <Brain className="h-3 w-3 text-primary" />
          Intelligence Artificielle
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Analyses & Prédictions par l'IA
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Des modèles d'apprentissage profond analysent la charge de travail,
          les performances et les facteurs de risque pour votre département.
        </p>
        <div className="space-y-2">
          {["Détection de burn-out", "Optimisation des ressources", "Alertes prédictives"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-sm text-gray-200"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: "features-2",
    range: [0.5, 0.63] as [number, number],
    position: "right" as const,
    content: (
      <div className="max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-xs text-gray-300 mb-4">
          <Calendar className="h-3 w-3 text-primary" />
          Planification Intelligente
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Emploi du temps IA
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Génération automatique d'emploi du temps éliminant les conflits
          et optimisant l'allocation des salles et des professeurs.
        </p>
        <div className="space-y-2">
          {["Résolution de conflits", "Correspondance des compétences", "Équilibrage de charge"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-sm text-gray-200"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: "features-3",
    range: [0.65, 0.78] as [number, number],
    position: "left" as const,
    content: (
      <div className="max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-xs text-gray-300 mb-4">
          <BarChart3 className="h-3 w-3 text-primary" />
          Tableau de Bord
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Visualisation des Données
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Surveillez la charge de travail, les tendances de performance et
          l'état du département en temps réel avec nos dashboards intelligents.
        </p>
        <div className="space-y-2">
          {["KPIs Départementaux", "Analyse de performance", "Rapports automatisés"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-sm text-gray-200"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: "cta",
    range: [0.82, 0.98] as [number, number],
    position: "center" as const,
    content: (
      <>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-white mb-6 font-medium backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-primary" />
          Bienvenue dans le futur
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-[1.1]">
          Le Système est désormais<br/>
          <span className="text-primary mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Intelligent</span>
        </h2>
        <p className="text-gray-200 text-lg max-w-lg mx-auto mb-8 font-medium bg-black/20 px-4 py-2 rounded-xl backdrop-blur-sm">
          L'université de demain commence ici.
        </p>
        <Link href="/auth">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 gap-2 shadow-[0_4px_20px_rgba(255,100,50,0.5)]"
          >
            Explorer la Plateforme
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </>
    ),
  },
];

/* ───────────────────── Section overlay component ──────────────── */
function ScrollSection({
  section,
  scrollYProgress,
}: {
  section: (typeof scrollSections)[0];
  scrollYProgress: import("framer-motion").MotionValue<number>;
}) {
  const { range, position, content } = section;
  const fadeIn = range[0];
  const peakStart = range[0] + (range[1] - range[0]) * 0.2;
  const peakEnd = range[1] - (range[1] - range[0]) * 0.2;
  const fadeOut = range[1];

  const opacity = useTransform(
    scrollYProgress,
    [fadeIn, peakStart, peakEnd, fadeOut],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [fadeIn, peakStart, peakEnd, fadeOut],
    [60, 0, 0, -40]
  );

  const positionClasses = {
    center:
      "flex flex-col items-center justify-center text-center inset-0",
    left: "flex flex-col justify-center items-start pl-8 lg:pl-20 inset-0 pr-[50%]",
    right:
      "flex flex-col justify-center items-start pr-8 lg:pr-20 inset-0 pl-[50%]",
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute z-10 px-6 pointer-events-none ${positionClasses[position]}`}
    >
      <div className="pointer-events-auto">{content}</div>
    </motion.div>
  );
}

/* ─────────────────── Main component ───────────────────────────── */
export default function ScrollFrameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── Preload all frames ──────────────────────────────────────────
  useEffect(() => {
    let mounted = true;
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const onLoad = () => {
      loaded++;
      if (mounted) {
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
          drawFrame(0);
        }
      }
    };

    const onError = () => {
      loaded++;
      if (mounted) {
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded <= 1) setLoadError(true);
        if (loaded === TOTAL_FRAMES) setIsLoaded(true);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = onLoad;
      img.onerror = onError;
      images.push(img);
    }
    imagesRef.current = images;
    return () => {
      mounted = false;
    };
  }, []);

  // ─── Draw a frame ────────────────────────────────────────────────
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0)
      return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawH = rect.height;
      drawW = rect.height * imgRatio;
      drawX = (rect.width - drawW) / 2;
      drawY = 0;
    } else {
      drawW = rect.width;
      drawH = rect.width / imgRatio;
      drawX = 0;
      drawY = (rect.height - drawH) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // ─── Update frame on scroll ─────────────────────────────────────
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!isLoaded || loadError) return;
    const frameIndex = Math.min(
      Math.floor(progress * TOTAL_FRAMES),
      TOTAL_FRAMES - 1
    );
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  // ─── Handle resize ──────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (isLoaded && !loadError) drawFrame(currentFrameRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, loadError, drawFrame]);

  // ─── Fallback ───────────────────────────────────────────────────
  if (loadError) {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/vitaly-gariev.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          {scrollSections[0].content}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: SCROLL_HEIGHT }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: isLoaded ? "block" : "none" }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-20">
            <div className="flex flex-col items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-foreground mb-2">
                  Chargement de l'expérience...
                </p>
                <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${loadProgress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {loadProgress}%
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content sections: Show hero at start, and intelligent title at the end */}
        {isLoaded && (
          <>
            <ScrollSection
              key={scrollSections[0].id}
              section={scrollSections[0]}
              scrollYProgress={scrollYProgress}
            />
            <ScrollSection
              key={scrollSections[5].id}
              section={scrollSections[5]}
              scrollYProgress={scrollYProgress}
            />
          </>
        )}

        {/* Scroll indicator — visible only at the very start */}
        {isLoaded && (
          <ScrollIndicator scrollYProgress={scrollYProgress} />
        )}
      </div>
    </div>
  );
}

function ScrollIndicator({
  scrollYProgress,
}: {
  scrollYProgress: import("framer-motion").MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/80"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
