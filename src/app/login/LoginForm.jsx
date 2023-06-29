"use client";

import GoogleLogin from "@/components/GoogleLogin";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="card-body">
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
        />
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
        />
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

export default LoginForm;
