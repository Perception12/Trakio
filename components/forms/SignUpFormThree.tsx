const SignupFormThree = () => {
    return (
      <>
        <label className="w-full text-sm">
          <p className="font-semibold py-2">Company Name</p>
          <input
            type="text"
            className="input input-md input-bordered input-primary w-full mb-2"
            placeholder="Enter Company Name"
          />
        </label>
  
        <label className="w-full text-sm">
          <p className="font-semibold py-2">Department/Team</p>
          <input
            type="text"
            className="input input-md input-bordered input-primary w-full mb-2"
            placeholder="Enter Department or Team Name"
          />
        </label>
  
        <label className="w-full text-sm">
          <p className="font-semibold py-2">Invite Code</p>
          <input
            type="text"
            className="input input-md input-bordered input-primary w-full mb-2"
            placeholder="(Optional) Enter Invite Code"
          />
        </label>
      </>
    );
  };
  
  export default SignupFormThree;
  