import { useRouter, useSearchParams } from "next/navigation";

import { Edit, Eye, Trash2 } from "lucide-react";

import { Button } from "../ui/button";

interface Props {
    editUrl: string;
    viewUrl: string;
    onDelete: () => void;
    isDeleting?: boolean;
}

export const RowActions = ({ editUrl, viewUrl, onDelete, isDeleting }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const getUrl = (url: string) => {
        const params = searchParams.toString();
        if (!params) return url;

        const separator = url.includes("?") ? "&" : "?";
        return `${url}${separator}filters=${encodeURIComponent(params)}`;
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <Button
                onClick={() => router.push(getUrl(viewUrl))}
                className="text-muted-foreground hover:text-icon flex items-center justify-center !py-0 px-0.5"
                variant={"ghost"}
            >
                <Eye size={20} />
            </Button>

            <Button
                onClick={() => router.push(getUrl(editUrl))}
                className="text-muted-foreground hover:text-icon flex items-center justify-center !py-0 px-0.5"
                variant={"ghost"}
            >
                <Edit size={20} />
            </Button>

            <Button
                variant={"ghost"}
                onClick={onDelete}
                disabled={isDeleting}
                className="text-muted-foreground hover:text-destructive !py-0 px-0.5"
            >
                <Trash2 size={20} />
            </Button>
        </div>
    );
};
