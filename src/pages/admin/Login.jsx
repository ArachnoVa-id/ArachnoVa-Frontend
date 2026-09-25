import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "@/components/ui/GoogleSignIn";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignedIn = (user) => {
    if (user.isAdmin) navigate("/admin");
    else setError(`${user.email} is not an admin account`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">CMS Admin</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in with an authorized Google account</p>
        <GoogleSignIn onSignedIn={handleSignedIn} />
        {error && <p className="text-sm text-red-600 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}
