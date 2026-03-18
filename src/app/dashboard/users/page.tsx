"use client";

import { motion } from "framer-motion";
import { Search, Plus, Edit2, Shield, UserX, UserCheck, MoreVertical, Settings } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockUsers = [
    { id: 1, name: "Dr. Sarah Chen", email: "s.chen@uni.edu", role: "Enseignant", dept: "Informatique", status: "Active", avatar: "SC" },
    { id: 2, name: "Admin Dept Info", email: "admin.info@uni.edu", role: "Responsable Pédagogique", dept: "Informatique", status: "Active", avatar: "AI" },
    { id: 3, name: "John Doe", email: "j.doe@uni.edu", role: "Enseignant", dept: "Informatique", status: "Inactive", avatar: "JD" },
    { id: 4, name: "Super Administrateur", email: "superadmin@uni.edu", role: "Super Admin", dept: "Direction", status: "Active", avatar: "SA" },
    { id: 5, name: "Ada Lovelace", email: "a.lovelace@uni.edu", role: "Enseignant", dept: "Mathématiques", status: "Active", avatar: "AL" },
];

export default function UserManagement() {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(mockUsers);

    const filtered = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase())
    );

    const toggleStatus = (id: number) => {
        setUsers(users.map(u =>
            u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u
        ));
    };

    const getRoleBadge = (role: string) => {
        switch (role) {
            case "Super Admin": return "bg-primary/20 text-primary border-primary/30";
            case "Responsable Pédagogique": return "bg-accent/20 text-accent border-accent/30";
            default: return "bg-secondary text-muted-foreground border-border";
        }
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                            <Settings className="h-6 w-6 text-primary" /> Administration des Utilisateurs
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">Gérez les comptes, les rôles et les accès au système</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher un utilisateur..."
                                className="pl-9 bg-secondary border-border h-9 text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                            <Plus className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Nouvel Utilisateur</span>
                        </Button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-secondary/30 text-xs uppercase font-medium text-muted-foreground border-b border-border">
                                <tr>
                                    <th className="px-5 py-3">Utilisateur</th>
                                    <th className="px-5 py-3">Rôle</th>
                                    <th className="px-5 py-3 hidden md:table-cell">Département</th>
                                    <th className="px-5 py-3 text-center">Statut</th>
                                    <th className="px-5 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((user, i) => (
                                    <motion.tr
                                        key={user.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                                    >
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarFallback className="bg-primary/10 text-primary text-xs">{user.avatar}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium text-foreground text-sm">{user.name}</p>
                                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <Badge variant="outline" className={`text-xs ${getRoleBadge(user.role)}`}>
                                                {user.role}
                                            </Badge>
                                        </td>
                                        <td className="px-5 py-4 text-muted-foreground hidden md:table-cell">
                                            {user.dept}
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <Badge
                                                variant="outline"
                                                className={`text-xs ${user.status === 'Active' ? 'bg-success/10 text-success border-success/20' : 'bg-destructive/10 text-destructive border-destructive/20'}`}
                                            >
                                                {user.status === 'Active' ? 'Actif' : 'Inactif'}
                                            </Badge>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <Edit2 className="mr-2 h-4 w-4" /> Éditer le profil
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Shield className="mr-2 h-4 w-4" /> Modifier le rôle
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        onClick={() => toggleStatus(user.id)}
                                                        className={user.status === 'Active' ? 'text-destructive focus:bg-destructive/10 focus:text-destructive' : 'text-success focus:bg-success/10 focus:text-success'}
                                                    >
                                                        {user.status === 'Active' ? (
                                                            <><UserX className="mr-2 h-4 w-4" /> Désactiver le compte</>
                                                        ) : (
                                                            <><UserCheck className="mr-2 h-4 w-4" /> Réactiver le compte</>
                                                        )}
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </motion.tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-5 py-8 text-center text-muted-foreground">
                                            Aucun utilisateur trouvé.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
