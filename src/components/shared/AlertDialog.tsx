"use client";

import React, { useState } from "react";

import { AlertType, FireProps } from "@/providers/AlertProvider";
import { CheckCheckIcon, DeleteIcon, InfoIcon, Loader, QuoteIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";

type AlertDialogProps = Omit<Required<FireProps>, "title" | "text"> & {
    title?: React.ReactNode;
    text?: React.ReactNode;
    closeDialog: () => void;
};

export const AlertDialogContent = (props: AlertDialogProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <DialogContent className="min-w-[380px] max-w-lg bg-white p-6">
            <div>
                {props.showIcon && (
                    <div className="mb-6 flex items-center justify-center">
                        {props.type === AlertType.ERROR ? (
                            <DeleteIcon className="text-destructive h-16 w-16" />
                        ) : props.type === AlertType.SUCCESS ? (
                            <CheckCheckIcon className="h-16 w-16 text-primary" />
                        ) : props.type === AlertType.WARNING ? (
                            <InfoIcon className="text-warning h-16 w-16" />
                        ) : (
                            <QuoteIcon className="h-16 w-16 text-primary" />
                        )}
                    </div>
                )}
                <DialogTitle
                    className={`my-0 mt-4 text-2xl font-medium ${props.type === AlertType.INFO && "text-primary"} ${props.type === AlertType.ERROR && "text-destructive"}`}
                >
                    {props.title}
                </DialogTitle>
                {props.text && (
                    <DialogDescription className="text-foreground mt-2 text-sm">{props.text}</DialogDescription>
                )}
                {error && <DialogDescription className="text-destructive-foreground mt-2">{error}</DialogDescription>}
            </div>
            <DialogFooter className="mt-0 gap-4">
                {props.showCancelButton && (
                    <Button
                        variant={props.cancelButtonOptions.variant}
                        onClick={async () => {
                            await props.onCancel();
                            props.closeDialog();
                        }}
                        disabled={loading}
                        className="w-1/2"
                    >
                        {props.cancelButtonOptions.text}
                    </Button>
                )}
                <Button
                    variant={props.confirmButtonOptions.variant}
                    onClick={async () => {
                        setLoading(true);
                        const response = await props.onConfirm();
                        setLoading(false);

                        if (response?.error) {
                            setError(response.error);
                            return;
                        }

                        props.closeDialog();
                    }}
                    disabled={loading}
                    className="w-1/2"
                >
                    {loading && <Loader className="animate-spin" size={20} />}
                    {props.confirmButtonOptions.text}
                </Button>
            </DialogFooter>
        </DialogContent>
    );
};
