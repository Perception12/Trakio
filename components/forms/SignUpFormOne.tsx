import React from 'react'


const SignUpFormOne = () => {
    return (
        <>
          <label className="w-full text-sm">
            <p className="font-semibold py-2">Full Name</p>
            <input
              type="text"
              className="input input-md input-bordered input-primary w-full mb-2"
              placeholder="John Smith"
            />
          </label>
    
          <label className="w-full text-sm">
            <p className="font-semibold py-2">Email</p>
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
        </>
      );
}

export default SignUpFormOne