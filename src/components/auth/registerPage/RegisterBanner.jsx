const RegisterBanner = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center">
      <div className="max-w-md ml-auto">
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-white/90 leading-tight">
          Join the most <br />
          <div className="text-primary dark:text-foreground bg-white dark:bg-primary px-4 inline-block py-1 mt-1">
            trusted platform.
          </div>
        </h1>
        <p className="text-white/80 dark:text-gray-400 text-lg leading-relaxed font-light">
          Create an account to access verified caregivers for your loved ones.
          Experience seamless booking and secure payments today.
        </p>
      </div>
    </div>
  );
};

export default RegisterBanner;
