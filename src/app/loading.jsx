import React from "react";
import Logo from "@/components/shared/Logo";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6">
      <div className="animate-pulse scale-150">
        <Logo />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
