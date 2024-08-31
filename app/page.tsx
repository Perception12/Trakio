"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24 bg-transparent">
      {/* Trackio: A blend of "Track" and "IO" (input/output), emphasizing its focus on both bug and project tracking. */}
      <span className="font-bold text-2xl text-primary flex">
        Trak<p className="text-secondary">io</p>
      </span>
      <h2 className=" text-xl md:text-4xl text-center font-bold text-gray-600 mt-4 ">
        Streamline your workflow today
      </h2>

      <div className="flex gap-4 p-4 mt-8">
        <Button handleClick={() => {}}>Get Started</Button>
        <Button handleClick={() => router.push('/users/login')} outline={true}>
          Sign In
        </Button>
      </div>
    </main>
  );
}
