import AuthWrapper from "@/features/auth/AuthWrapper";
import OTPVerifyForm from "@/features/auth/OTPVerifyForm";

const OTPVerifyPage = () => {
    return (
        <AuthWrapper>
            <OTPVerifyForm />
        </AuthWrapper>
    );
};

export default OTPVerifyPage;
