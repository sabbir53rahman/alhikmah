import React from "react";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactInfo = () => {
    return (
        <div className="space-y-3">
            <h3 className="mb-4 text-[24px] font-semibold text-white">যোগাযোগ</h3>
            <div className="flex items-center pb-[20px] text-[20px] text-white transition-colors hover:text-gray-300">
                <PhoneIcon className="pr-[15px] size-[32px] text-gray-400" />
                <span>০১৩০-৫৫৯৭-১০১৫</span>
            </div>
            <div className="flex items-center pb-[20px]  text-white transition-colors hover:text-gray-300">
                <MailIcon className="pr-[15px] size-[32px] text-gray-400" />
                <span className="text-[20px]">support@alhikmha.com</span>
            </div>
            <div className="flex items-center pb-[20px] text-[20px] text-white transition-colors hover:text-gray-300">
                <MapPinIcon className="pr-[15px] size-[32px] text-gray-400" />
                <span> মহাখালী ডিওএইচএস, ঢাকা</span>
            </div>
        </div>
    );
};

export default ContactInfo;
