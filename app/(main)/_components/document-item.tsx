"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight, FileText, Plus, Trash2 } from "lucide-react";

type DocumentItemProps = {
    title: string;
    level: number;
    onCreateChild: () => void;
    onDelete: () => void;
    children: ReactNode;
};

export const DocumentItem = ({
        title,
        level, 
        onCreateChild,
        onDelete,
        children,
    }: DocumentItemProps)=>{

        const [expanded, setExpanded] = useState(false);

        const handleAddChild = () => {
            onCreateChild();
            setExpanded(true);
        };

        return (
            <div className="min-w-0">
            <div
                className="group/row flex h-9 min-w-0 items-center gap-1 rounded-md pr-1 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-within:bg-primary/5"
                style={{ paddingLeft: 8 + level * 12 }}
            >
                <button
                    type="button"
                    onClick={() => setExpanded((previous) => !previous)}
                    aria-label={expanded ? `Collapse ${title}` : `Expand ${title}`}
                    aria-expanded={expanded}
                    className="flex h-7 w-6 shrink-0 items-center justify-center rounded text-muted-foreground/60 transition-colors hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    {expanded
                        ? <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
                        : <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                    }
                </button>

                <FileText
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted-foreground/70"
                />

                <span title={title} className="min-w-0 flex-1 truncate pl-1">
                    {title}
                </span>

                <button
                    type="button"
                    onClick={handleAddChild}
                    aria-label={`Add a page inside ${title}`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:opacity-0 sm:group-hover/row:opacity-100 sm:group-focus-within/row:opacity-100"
                >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    onClick={onDelete}
                    aria-label={`Delete ${title} and its nested pages`}
                    title="Delete page and nested pages"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:opacity-0 sm:group-hover/row:opacity-100 sm:group-focus-within/row:opacity-100"
                >
                    <Trash2 aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
            </div>

            {expanded && children}
        </div>
        )


        

    }
