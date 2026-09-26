"use client";

import { ChevronsLeft, MenuIcon, PlusCircle, Search, Settings } from "lucide-react";
import { useState } from 'react';
import Image from "next/image";

import { DocumentList, type SidebarDocument } from "./document-list";

const STORAGE_KEY = "jotion-sidebar-collapsed";
const CHANGE_EVENT = "jotion-sidebar-change";

const actionClassName = "flex h-9 w-full items-center gap-2.5 rounded-md px-2 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

type NavigationProps = {
    documents: SidebarDocument[];
    onClick: (parentId: string | null) => void;
    onDelete: (documentId: string) => void;
}


export const Navigation = ({
    documents,
    onClick,
    onDelete,
}: NavigationProps) => {

    const [isCollapsed, setIsCollapsed] = useState(false);


    if (isCollapsed){
        return (
            <>
            <div className="shrink-0 p-3">
                <button
                    onClick={() => setIsCollapsed(false)}
                    aria-label="Open sidebar"
                    type="button"
                    className="rounded-sm p-2 text-muted-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                <MenuIcon className="h-4 w-4" />
                </button>
            </div>
        </>
        )


    }

    return (
        <>
            <aside aria-label="Workspace sidebar" className="relative flex h-full w-64 max-w-[75vw] shrink-0 flex-col overflow-hidden border-r border-border/50 bg-secondary/70">
            <div className="flex h-16 shrink-0 items-center gap-2.5 px-4">
                <Image
                    src="/sidebar-avatar.png"
                    alt="Your avatar"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0 rounded-md object-cover"
                />
                <span className="min-w-0 flex-1 truncate text-sm font-semibold">
                    hey sexy
                </span>
                <button
                    onClick={() => setIsCollapsed(true)}
                    aria-label="Close sidebar"
                    type="button"
                    className="shrink-0 rounded-md p-1.5 text-muted-foreground/70 transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    <ChevronsLeft className="h-4 w-4" />
                </button>
            </div>

            
            <nav aria-label="Sidebar actions" className="flex shrink-0 flex-col gap-0.5 px-3">
                <button type="button" className={actionClassName}>
                    <Search aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>Search</span>
                </button>
                <button type="button" className={actionClassName}>
                    <Settings aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>Settings</span>
                </button>
                <button type="button" className={actionClassName}
                    onClick={() => onClick(null) }
                >
                    <PlusCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>New page</span>
                </button>
            </nav>

            <div className="mx-4 mt-5 border-t border-border/50 pt-4">
                <h2 className="text-xs font-medium text-muted-foreground">Documents</h2>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-4 pt-2">
                <DocumentList
                    documents={documents}
                    onCreate={onClick}
                    onDelete={onDelete}
                />
            </div>

            </aside>
        </>
    );
};
