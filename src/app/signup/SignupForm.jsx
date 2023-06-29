"use client";

import GoogleLogin from "@/components/GoogleLogin";
import Link from "next/link";

const SignupForm = () => {
  return (
    <form className="card-body">
      <div className="form-control">
        <label htmlFor="name" className="label label-text">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          className="input input-bordered"
        />
      </div>
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
      </div>
      <div className="form-control">
        <label htmlFor="confirmPassword" className="label label-text">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          className="input input-bordered"
          autoComplete="new-password"
        />
      </div>
      <div className="form-control">
        <label htmlFor="photo" className="label label-text">
          Photo
        </label>
        <input
          type="file"
          id="photo"
          className="file-input file-input-bordered file-input-primary w-full"
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Sign Up
        </button>
      </div>
      <p className="mt-3">
        Already have an account?{" "}
        <Link className="text-blue-500 underline ml-1" href="/login">
          Login
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      <GoogleLogin />
    </form>
  );
};

export default SignupForm;
