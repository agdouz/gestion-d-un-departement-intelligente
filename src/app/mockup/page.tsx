"use client";

import Landing from "@/app/page";
import Dashboard from "@/app/dashboard/page";
import Professors from "@/app/professors/page";
import Schedule from "@/app/schedule/page";
import Simulation from "@/app/simulation/page";
import Insights from "@/app/insights/page";
import Matieres from "@/app/matieres/page";
import Filieres from "@/app/filieres/page";
import EspacePerso from "@/app/espace-perso/page";
import AuthPage from "@/app/auth/page";

function Artboard({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold font-mono text-neutral-400">{title}</h2>
            <div
                className="relative bg-background rounded-xl overflow-hidden shadow-2xl ring-1 ring-border/50"
                style={{ width: 1440, height: 900 }}
            >
                <div className="w-full h-full overflow-y-auto bg-background">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function MockupBoard() {
    return (
        <div className="min-h-screen bg-neutral-950 p-10 lg:p-20 overflow-auto">
            <div className="mb-16 text-white max-w-4xl">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Smart Knowledge UI Sandbox</h1>
                <p className="text-lg text-neutral-400">
                    This board renders all pages of the application side-by-side at a fixed 1440x900 desktop viewport.
                    Use a browser plugin like <strong>html.to.design</strong> to extract these high-fidelity mockups directly into Figma.
                </p>
            </div>

            <div className="flex flex-wrap gap-16 w-max pb-20">
                <Artboard title="01. Landing Page">
                    <Landing />
                </Artboard>

                <Artboard title="02. Overview Dashboard">
                    <Dashboard />
                </Artboard>

                <Artboard title="03. Professors Directory">
                    <Professors />
                </Artboard>

                <Artboard title="04. Intelligent Schedule">
                    <Schedule />
                </Artboard>

                <Artboard title="05. Simulation Lab">
                    <Simulation />
                </Artboard>

                <Artboard title="06. AI Insights">
                    <Insights />
                </Artboard>

                <Artboard title="07. Matières (Courses)">
                    <Matieres />
                </Artboard>

                <Artboard title="08. Filières (Programs)">
                    <Filieres />
                </Artboard>

                <Artboard title="09. Espace Personnel (CV)">
                    <EspacePerso />
                </Artboard>

                <Artboard title="10. Authentification (Roles)">
                    <AuthPage />
                </Artboard>
            </div>
        </div>
    );
}
