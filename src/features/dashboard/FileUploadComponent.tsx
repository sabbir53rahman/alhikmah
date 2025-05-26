import React, { useRef, useState } from "react";

import { MediaType } from "@/features/types";
import { CloudUpload, FolderOpen, Loader } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type Props = {
    type: MediaType;
    uploadMedia: (file: File, type: MediaType) => void;
    isLoading: boolean;
    isError: boolean;
};

export const FileUploadComponent = ({ type, uploadMedia, isLoading, isError }: Props) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadMedia = (file: File) => uploadMedia(file, type);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];

            if (type === MediaType.IMAGE) {
                if (droppedFile.type.startsWith("image/") && type === MediaType.IMAGE) {
                    handleUploadMedia(droppedFile);
                } else {
                    toast.error("Please upload an image file (JPEG, JPG, or PNG)");
                }
            } else if (type === MediaType.AUDIO) {
                if (droppedFile.type.startsWith("audio/") && type === MediaType.AUDIO) {
                    handleUploadMedia(droppedFile);
                } else {
                    toast.error("Please upload an audio file (MP3, WAV, or OGG)");
                }
            } else if (type === MediaType.VIDEO) {
                if (droppedFile.type.startsWith("video/") && type === MediaType.VIDEO) {
                    handleUploadMedia(droppedFile);
                } else {
                    toast.error("Please upload a video file (MP4, WEBM, or OGG)");
                }
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleUploadMedia(e.target.files[0]);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div
            className={`rounded-sm border-2 border-dashed p-8 text-center transition-colors duration-300 ${
                isDragging ? "border-primary" : ""
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInput}
                accept={
                    type === MediaType.IMAGE
                        ? "image/jpeg, image/jpg, image/png"
                        : type === MediaType.AUDIO
                          ? "audio/mp3, audio/wav, audio/ogg"
                          : type === MediaType.VIDEO
                            ? "video/mp4, video/webm"
                            : "application/pdf, application/docx, application/pptx"
                }
                className="hidden"
            />
            <CloudUpload className="text-icon mx-auto mb-4" size={48} />
            <p className="text-muted-foreground mb-4 px-[10%] text-center text-sm">
                Choose a file or Drag & drop it here. File must be in{" "}
                {type === MediaType.IMAGE
                    ? "JPEG, JPG or PNG"
                    : type === MediaType.AUDIO
                      ? "MP3, WAV or OGG"
                      : "MP4, WEBM"}{" "}
                format
            </p>

            {isError && (
                <p className="text-destructive mb-4 px-[10%] text-center text-sm">
                    Something went wrong. Please try again.
                </p>
            )}

            {isLoading ? (
                <Button size={"sm"} disabled>
                    <Loader className="animate-spin" size={20} />
                    Uploading...
                </Button>
            ) : (
                <Button size={"sm"} onClick={triggerFileInput}>
                    <FolderOpen className="size-5" /> Browse
                </Button>
            )}
        </div>
    );
};
