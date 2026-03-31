"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Role = "Professeur" | "Admin Dept" | "Super Admin" | "Étudiant";

interface RoleContextType {
    currentRole: Role;
    setCurrentRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
    const [currentRole, setCurrentRole] = useState<Role>("Super Admin");

    return (
        <RoleContext.Provider value={{ currentRole, setCurrentRole }}>
            {children}
        </RoleContext.Provider>
    );
}

export function useRole() {
    const context = useContext(RoleContext);
    if (context === undefined) {
        throw new Error("useRole must be used within a RoleProvider");
    }
    return context;
}
