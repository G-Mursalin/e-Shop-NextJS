import useAuth from "@/hooks/useAuth";
import generateJWT from "@/utils/generateJWT";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
  const { googleLogin } = useAuth();
  const { replace } = useRouter();

  const handleGoogleLogin = async () => {
    const toastIdLogin = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      // Create JWT
      await generateJWT({ email: user.email });
      toast.dismiss(toastIdLogin);
      toast.success("User Login Successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastIdLogin);
      toast.error(error.message || "User Fail to Login");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn btn-primary mt-5 mx-auto"
    >
      <FcGoogle className="text-3xl mr-3" /> Continue with google
    </button>
  );
};

export default GoogleLogin;
