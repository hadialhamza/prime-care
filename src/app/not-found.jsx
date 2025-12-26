import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-center px-4 py-8 border">
      {/* Icon Animation */}
      <div className="bg-blue-50 dark:bg-slate-900 p-6 rounded-full mb-6 animate-bounce">
        <FileQuestion className="w-16 h-16 text-primary" />
      </div>

      {/* Main Error Text */}
      <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-2">
        404
      </h1>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
        Page Not Found
      </h2>

      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-lg">
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Return Home Button */}
      <Link href="/">
        <Button
          size="lg"
          className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20"
        >
          <Home className="w-4 h-4 mr-2" /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
