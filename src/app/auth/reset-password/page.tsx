import AuthWrapper from "@/features/auth/AuthWrapper";
import ResetPasswordForm from "@/features/auth/ResetPasswordForm";

const ResetPasswordPage = () => {
    return (
        <AuthWrapper>
            <ResetPasswordForm />
        </AuthWrapper>
    );
};

export default ResetPasswordPage;
