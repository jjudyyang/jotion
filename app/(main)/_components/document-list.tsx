"use client";

import { DocumentItem } from "./document-item";

export type SidebarDocument = {
    id: string;
    title: string;
    parentId: string | null;
};

type DocumentListProps = {
    documents: SidebarDocument[];
    onCreate: (parentId: string | null) => void;
    onDelete: (documentId: string) => void;
    parentId?: string | null;
    level?: number;
};

export const DocumentList = ({
    documents, 
    onCreate,
    onDelete,
    parentId = null,
    level = 0
}: DocumentListProps) =>{

    const childDocuments = documents.filter(
        (document) => document.parentId === parentId
    );
    
    if (childDocuments.length === 0){
        return (
            <p
                className="py-2 pr-2 text-xs leading-5 text-muted-foreground/70"
                style={{ paddingLeft: 16 + level * 12 }}
            >
                {parentId === null ? "Create a page to get started." : "No pages inside"}
            </p>
        );
    }

    return (
        <>
            {childDocuments.map((document) => (
                <DocumentItem
                    key={document.id}
                    title={document.title}
                    level={level}
                    onCreateChild={() => onCreate(document.id)}
                    onDelete={() => onDelete(document.id)}
                >
                    <DocumentList
                        documents={documents}
                        onCreate={onCreate}
                        onDelete={onDelete}
                        parentId={document.id}
                        level={level + 1}
                    />
                </DocumentItem>
            ))}
        </>
        

    );


};
