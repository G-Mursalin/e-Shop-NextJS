"use client";

import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import generateJWT from "@/utils/generateJWT";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LogInForm = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //  Handle Login
  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastIdLogin = toast.loading("Loading...");

    try {
      const user = await signIn(email, password);
      // Create JWT
      generateJWT({ email });
      toast.dismiss(toastIdLogin);
      toast.success("User Login Successfully");
    } catch (error) {
      toast.dismiss(toastIdLogin);
      toast.error(error.message || "User Fail to Login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label htmlFor="email" className="label label-text">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="input input-bordered"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please Enter a Valid Email Address
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="password" className="label label-text">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="input input-bordered"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please Enter minimum 6 Length Password
          </span>
        )}
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
      <p className="mt-3">
        Don&apos;t have an account?
        <Link className="text-blue-500 underline ml-1" href="/signup">
          Signup
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      <GoogleLogin />
    </form>
  );
};

export default LogInForm;
