"use client";

import { useState } from "react";
import Image from "next/image";

export default function DownloadButtonWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main Button */}
      <button
        onClick={openModal}
        className="mt-6 w-full max-w-md rounded-md sign_up_button_bg py-[25px] text-white transition-colors hover:bg-primary-400"
      >
        ডাউনলোড করুন
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-[8px] shadow-lg p-6 w-full max-w-sm">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-10 text-white text-[30px] font-semibold"
            >
              ×
            </button>

            {/* QR Code Image */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/qr-code.png" // Replace with your actual QR code image path
                alt="QR Code"
                width={150}
                height={150}
                className="mb-4"
              />
              <p className="mb-6 text-center text-lg font-medium">
                স্ক্যান করুন অথবা ডাউনলোড করুন
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 w-full">
                <a
                  href="/path-to-your-pdf.pdf" // Replace with your actual PDF file path
                  download
                  className="w-full rounded-md bg-blue-600 py-3 text-center text-white hover:bg-blue-700"
                >
                  পিডিএফ ডাউনলোড
                </a>
                <a
                  href="/path-to-your-doc.docx" // Replace with your actual DOC file path
                  download
                  className="w-full rounded-md bg-green-600 py-3 text-center text-white hover:bg-green-700"
                >
                  ডকস ডাউনলোড
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
