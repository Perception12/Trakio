"use client";
import Button from "@/components/Button";
import Image from "next/image";
import LoginBanner from '@/assets/Trakio_banner.png'
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center p-10">
      <div className="card flex-row shadow-xl p-4 mt-4 bg-base-100 rounded-2xl">
        {/* Left section */}
        <div className="flex-1 max-w-[32rem] p-4 md:p-10">
          <span className="font-bold text-base text-primary flex cursor-pointer" onClick={() => router.push('/')} >
            Trak<p className="text-secondary">io</p>
          </span>

          <div className="text-gray-800 text-xl font-semibold mt-12">Welcome back!</div>
          <p className="text-sm text-gray-500 mt-2 mb-8">
            Effortlessly manage bugs, track progress, and streamline your
            workflow—all in one powerful platform.
          </p>

          <label className="w-full text-sm">
            <p className="font-semibold py-2">Email / Username</p>
            <input
              type="text"
              className="input input-md input-bordered input-primary w-full mb-2"
              placeholder="example@gmail.com"
            />
          </label>

          <label className="w-full text-sm">
            <p className="font-semibold py-2">Password</p>
            <input
              type="password"
              className="input input-md input-bordered input-primary w-full mb-2"
              placeholder="at least 8 characters"
            />
          </label>

          <div className="flex items-center justify-between mb-4">
            {/* Checkbox */}
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary [--chkfg:white] rounded-md"
                />

                <span className="label-text text-gray-800">Remember me</span>
              </label>
            </div>

            {/* Forgot password */}
            <p className="label-text text-primary cursor-pointer">Forgot Password</p>
          </div>

          <Button handleClick={() => {}} className="w-full">Log In</Button>
        </div>
        {/* Right Section */}
        <div className="hidden md:flex">
          <Image 
            src={LoginBanner}
            height={600}
            className="rounded-lg"
            alt="login banner"
           />
        </div>
      </div>
    </div>
  );
};

export default Login;
