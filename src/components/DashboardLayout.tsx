"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Brain,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  Sparkles,
  BookMarked,
  GraduationCap,
  UserCircle,
  Shield,
  Building2,
  Layers
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useRole } from "./RoleProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import fsjesLogo from "@/assets/fsjes-logo.png";

const allNavItems = [
  { label: "Tableau de Bord", icon: LayoutDashboard, path: "/dashboard", roles: ["Super Admin", "Admin Dept"] },
  { label: "Professeurs", icon: Users, path: "/professors", roles: ["Super Admin", "Admin Dept", "Professeur"] },
  { label: "Matières", icon: BookMarked, path: "/matieres", roles: ["Super Admin", "Admin Dept"] },
  { label: "Filières", icon: GraduationCap, path: "/filieres", roles: ["Super Admin", "Admin Dept", "Professeur"] },
  { label: "Emploi du temps", icon: Calendar, path: "/schedule", roles: ["Super Admin", "Admin Dept", "Professeur"] },
  { label: "Semestres", icon: Layers, path: "/semesters", roles: ["Super Admin", "Admin Dept"] },
  { label: "Module IA", icon: Brain, path: "/insights", roles: ["Super Admin", "Admin Dept"] },
  { label: "Mon Espace", icon: UserCircle, path: "/espace-perso", roles: ["Professeur"] },
  { label: "Administration", icon: Settings, path: "/dashboard/users", roles: ["Super Admin"] },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currentRole, setCurrentRole } = useRole();
  const pathname = usePathname();

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <Link href="/" className="p-5 flex flex-col items-center gap-4 border-b border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="h-20 sm:h-24 w-auto rounded-xl flex items-center justify-center overflow-hidden bg-white/95 shadow-sm px-3 py-2 border border-border">
          <img src={fsjesLogo.src} alt="FSJES Logo" className="h-full w-auto object-contain" />
        </div>
        {sidebarOpen && (
          <div className="w-full text-center">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-sm tracking-wider uppercase">
              FSJES Analytics
            </span>
          </div>
        )}
      </Link>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {allNavItems
          .filter(item => item.roles.includes(currentRole))
          .map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 translate-x-1"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:translate-x-1"
                  }`}
              >
                <item.icon className={`h-5 w-5 flex-shrink-0 transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`} />
                {sidebarOpen && <span>{item.label}</span>}
                {isActive && sidebarOpen && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-primary-foreground/80 animate-pulse" />
                )}
              </Link>
            );
          })}
      </nav>

      <div className="p-5 border-t border-border/50 bg-background/30 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-secondary/50 border border-border">
          <Avatar className="h-9 w-9 border-2 border-background shadow-sm">
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs ring-1 ring-primary/20">
              {currentRole === "Professeur" ? "PR" : currentRole === "Admin Dept" ? "AD" : "SA"}
            </AvatarFallback>
          </Avatar>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground truncate">{currentRole}</p>
              <p className="text-xs text-muted-foreground truncate font-medium">
                {currentRole === "Professeur" ? "prof@fsjes.uca.ma" : "admin@fsjes.uca.ma"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-transparent">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col border-r border-border/60 bg-card/40 backdrop-blur-xl shadow-2xl transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${sidebarOpen ? "w-72" : "w-20"
          }`}
      >
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-60 bg-sidebar border-r border-border z-50 lg:hidden"
            >
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 border-b border-border flex items-center justify-between px-4 lg:px-6 bg-card/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher..."
                className="pl-9 w-64 bg-secondary border-border h-9 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-border ml-2">
                  <span className="text-xs font-semibold">{currentRole}</span>
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-primary/20 text-primary text-[10px]">
                      {currentRole === "Professeur" ? "PR" : currentRole === "Admin Dept" ? "AD" : "SA"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Simulation de Rôle</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setCurrentRole("Super Admin")}>
                  <Shield className="mr-2 h-4 w-4 text-primary" /> Super Admin
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentRole("Admin Dept")}>
                  <Building2 className="mr-2 h-4 w-4 text-accent" /> Admin Dept
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentRole("Professeur")}>
                  <GraduationCap className="mr-2 h-4 w-4 text-success" /> Professeur
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth">
                    <UserCircle className="mr-2 h-4 w-4 text-muted-foreground" /> Se déconnecter
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
