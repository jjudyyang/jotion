"use client";
import { useState } from "react";

import { Navigation } from "../../_components/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import type { SidebarDocument } from "../../_components/document-list"; 


const DocumentsPage = () => {

    const [documents, setDocuments] = useState< SidebarDocument[]>([]);

    const handleCreate = (parentId: string | null = null) =>{
        const newDocument : SidebarDocument = {
            id: crypto.randomUUID(),
            title: "hey sezy",
            parentId
        }
        console.log("button press")
        setDocuments((previous) => [...previous, newDocument]);
    }

    const handleDelete = (documentId: string) => {
        setDocuments((previous) => {
            const idsToDelete = new Set([documentId]);

            // Collect the selected document's children at every nesting level.
            const collectChildren = (parentId: string) => {
                for (const document of previous) {
                    if (document.parentId === parentId && !idsToDelete.has(document.id)) {
                        idsToDelete.add(document.id);
                        collectChildren(document.id);
                    }
                }
            };

            collectChildren(documentId);

            // Keep all documents outside the deleted branch.
            return previous.filter((document) => !idsToDelete.has(document.id));
        });
    };


    return (
        <div className="flex h-dvh overflow-hidden">
            <Navigation documents={documents} onClick={handleCreate} onDelete={handleDelete}/>
            <main className="min-w-0 flex-1 overflow-y-auto p-6">
                <div className="flex min-h-full flex-col items-center justify-center gap-4 text-center">
                    <Image
                        src="/empty.png"
                        alt=""
                        width={1024}
                        height={768}
                        sizes="320px"
                        className="h-auto w-full max-w-xs shrink-0"
                    />
                    <h1 className="text-xl font-semibold">Welcome Judy to Jotion</h1>
                    <Button onClick={()=> handleCreate(null)} >new note</Button>
                </div>
            </main>
            
        </div>
    );
}
 
export default DocumentsPage;
