import { Shield, Users, Star } from "lucide-react";

const LoginBanner = () => {
  return (
    <div className="hidden lg:flex  relative overflow-hidden rounded-2xl">
      <div className="relative max-w-md ml-auto p-8 bg-linear-to-br from-white/15 to-white/5 dark:from-background/90 dark:to-background/80 rounded-3xl border border-white/10 shadow-2xl">
        {/* Floating icons */}
        <div className="absolute top-4 left-4">
          <Shield className="w-10 h-10 text-white/40 rotate-12" />
        </div>
        <div className="absolute bottom-6 right-6">
          <Users className="w-10 h-10 text-white/40 -rotate-12" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight my-8 text-white/90 leading-tight relative">
          Trusted Care
          <br />
          For Your Family
        </h1>

        <div className="space-y-10 mb-10">
          <p className="text-white/90 text-lg leading-relaxed font-light">
            Connect with{" "}
            <span className="font-semibold text-white">
              certified professionals
            </span>{" "}
            for childcare, elderly care, and special needs support.
          </p>

          {/* Features list */}
          <div className="space-y-3 pt-4">
            {[
              { icon: Shield, text: "Background-verified caregivers" },
              { icon: Star, text: "4.9/5 average rating" },
              { icon: Users, text: "10,000+ trusted families" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative linear bar */}
        <div className="h-1 w-full bg-linear-to-r from-transparent via-white/30 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default LoginBanner;
