"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <AlertTriangle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Something went wrong!
            </h1>

            <p className="text-slate-600 dark:text-slate-400">
              We apologize for the inconvenience. An unexpected error has
              occurred.
            </p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20 text-xs text-red-600 dark:text-red-400 font-mono text-left overflow-auto max-h-32">
              {error.message || "Unknown error"}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => reset()}
              variant="outline"
              className="border-slate-300 dark:border-slate-700 min-w-30"
            >
              Try again
            </Button>

            <Link href="/">
              <Button className="min-w-30">Back to Home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
