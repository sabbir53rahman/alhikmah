import AuthWrapper from "@/features/auth/AuthWrapper";
import SignUpForm from "@/features/auth/SignUpForm";

const SignUpPage = () => {
    return (
        <AuthWrapper>
            <SignUpForm />
        </AuthWrapper>
    );
};

export default SignUpPage;
