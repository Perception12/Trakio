'use client'
import {useRouter} from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  
  return (
    <span className="font-bold text-base text-primary flex cursor-pointer" onClick={() => router.push('/')} >
            Trak<p className="text-secondary">io</p>
          </span>
  );
};

export default Logo