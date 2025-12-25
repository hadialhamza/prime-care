const LoginBanner = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center">
      <div className="max-w-md ml-auto">
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-white/90 leading-tight">
          Reliable care for <br />
          <div className="text-primary dark:text-foreground bg-white dark:bg-primary px-4 inline-block py-1 mt-1">
            your loved ones.
          </div>
        </h1>
        <p className="text-white/80 dark:text-gray-400 text-lg leading-relaxed font-light">
          Connect with trusted professionals for babysitting, elderly care, and
          special needs support. Your family&apos;s safety is our priority.
        </p>
      </div>
    </div>
  );
};

export default LoginBanner;
