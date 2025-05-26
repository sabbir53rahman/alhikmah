import AuthWrapper from "@/features/auth/AuthWrapper";
import SignInForm from "@/features/auth/SignInForm";

const SignInPage = () => {
    return (
        <AuthWrapper>
            <SignInForm />
        </AuthWrapper>
    );
};

export default SignInPage;
