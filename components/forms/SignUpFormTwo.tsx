const SignupFormTwo = () => {
  return (
    <>
      <label className="w-full text-sm">
        <p className="font-semibold py-2">Username (Optional)</p>
        <input
          type="text"
          className="input input-md input-bordered input-primary w-full mb-2"
          placeholder="JohnSmith123"
        />
      </label>

      <label className="w-full text-sm">
        <p className="font-semibold py-2">Profile Picture</p>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full mb-2"
        />
      </label>

      <label className="w-full text-sm">
        <p className="font-semibold py-2">Role/Position</p>
        <input
          type="text"
          className="input input-md input-bordered input-primary w-full mb-2"
          placeholder="e.g developer, project manager, tester"
        />
      </label>
    </>
  );
};

export default SignupFormTwo;
