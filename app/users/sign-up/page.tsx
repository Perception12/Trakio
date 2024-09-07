"use client";
import Button from "@/components/Button";
import Image from "next/image";
import LoginBanner from "@/assets/Trakio_banner.png";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import SignUpFormOne from "@/components/forms/SignUpFormOne";
import SignupFormTwo from "@/components/forms/SignUpFormTwo";
import SignupFormThree from "@/components/forms/SignUpFormThree";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectSignUpStep,
  nextStep,
  previousStep,
  setStep,
} from "@/lib/features/signUpSteps/signUpStepsSlice";

const SignUp = () => {
  const router = useRouter();
  const step = useAppSelector(selectSignUpStep);
  const dispatch = useAppDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-2 md:justify-center">
      <div className="card flex-row shadow-xl p-4 mt-4 md:mt-0 bg-white rounded-2xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        {/* Left section */}
        <div className="flex-1 max-w-[32rem] p-4 md:px-10">
          <Logo />

          <div className="text-gray-800 text-xl font-semibold mt-4">
            Get Started with Trakio
          </div>

          <p className="text-sm text-gray-500 mt-2 mb-4">
            Sign up to track bugs, manage projects, and boost team productivity
            effortlessly.
          </p>

          <ul className="steps text-sm w-full mb-6">
            <li
              className="step step-primary cursor-pointer"
              onClick={() => dispatch(setStep(1))}
            >
              Account Information
            </li>
            <li
              className={`step ${step >= 2 && "step-primary"} cursor-pointer`}
              onClick={() => dispatch(setStep(2))}
            >
              Profile Setup
            </li>
            <li
              className={`step ${step === 3 && "step-primary"} cursor-pointer`}
              onClick={() => dispatch(setStep(3))}
            >
              Organization Details
            </li>
          </ul>
          
          {/* Render different forms based on the step state */}
          {step === 1 && <SignUpFormOne />}
          {step === 2 && <SignupFormTwo />}
          {step === 3 && <SignupFormThree />}

          <Button
            handleClick={() => step < 3 && dispatch(nextStep())}
            className="w-full mt-4"
          >
            { step < 3 ? "Continue" : "Create Account"}
          </Button>

          <div className="label-text text-center w-full text-gray-600 py-2">
            Already have an account?{" "}
            <a
              className="outline-none text-primary cursor-pointer"
              onClick={() => router.push("/users/login")}
            >
              Login
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="hidden md:flex">
          <Image
            src={LoginBanner}
            height={600}
            className="rounded-lg"
            alt="Trakio banner banner"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
