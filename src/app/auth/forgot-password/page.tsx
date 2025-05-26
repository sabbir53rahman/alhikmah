import AuthWrapper from "@/features/auth/AuthWrapper";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";

const ForgotPasswordPage = () => {
    return (
        <AuthWrapper>
            <ForgotPasswordForm />
        </AuthWrapper>
    );
};

export default ForgotPasswordPage;
