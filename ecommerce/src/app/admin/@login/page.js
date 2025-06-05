import { LoginForm } from "../components/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login to your account",
  keywords: ["login", "authentication", "admin"],
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-gray-600 w-96 rounded-lg">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
