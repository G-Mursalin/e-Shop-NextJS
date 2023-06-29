import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
  return (
    <button type="button" className="btn btn-primary mt-5 mx-auto">
      <FcGoogle className="text-3xl mr-3" /> Continue with google
    </button>
  );
};

export default GoogleLogin;
