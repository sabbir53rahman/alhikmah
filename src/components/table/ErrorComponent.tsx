import { InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    title?: string;
    message?: string | null;
    onRetry?: () => void;
};

export const ErrorComponent = ({ title, message, onRetry }: Props) => {
    return (
        <div className="center h-[70vh]">
            <div className="flex flex-col items-center gap-6">
                <InfoIcon className="size-[120px] max-md:size-[100px]" />
                <div>
                    <h3 className="text-2xl font-medium">{title || "An error occurred while loading data"}</h3>
                    <p className="max-md:text-sm">{message || "Check your internet connection and try again later."}</p>
                </div>
                <Button
                    className="w-[160px]"
                    onClick={() => {
                        if (onRetry) onRetry();
                    }}
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
};
