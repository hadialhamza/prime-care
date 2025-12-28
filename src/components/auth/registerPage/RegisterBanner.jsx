import { ShieldCheck, Users, BadgeCheck, Calendar } from "lucide-react";

const RegisterBanner = () => {
  return (
    <div className="hidden lg:flex relative overflow-hidden rounded-2xl">
      <div className="relative max-w-md ml-auto p-8 bg-linear-to-br from-white/15 to-white/5 dark:from-background/90 dark:to-background/80 rounded-3xl border border-white/10 shadow-2xl">
        {/* Floating icons */}
        <div className="absolute top-4 left-4">
          <BadgeCheck className="w-10 h-10 text-white/40 rotate-12" />
        </div>
        <div className="absolute bottom-6 right-6">
          <Calendar className="w-10 h-10 text-white/40 -rotate-12" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight my-8 text-white/90 leading-tight relative">
          Join Our
          <br />
          Trusted Community
        </h1>

        <div className="space-y-10 mb-10">
          <p className="text-white/90 text-lg leading-relaxed font-light">
            Create your account to access{" "}
            <span className="font-semibold text-white">
              verified caregivers
            </span>{" "}
            and manage your family&apos;s care needs with confidence.
          </p>

          {/* Features list */}
          <div className="space-y-3 pt-4">
            {[
              { icon: ShieldCheck, text: "Secure & encrypted data" },
              { icon: Users, text: "Verified caregiver network" },
              { icon: BadgeCheck, text: "Instant booking access" },
              { icon: Calendar, text: "Flexible scheduling" },
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

        {/* Trusted By Section */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-white/60 text-sm mb-4">
            Trusted by 2,000+ families
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white/10 bg-white/20 backdrop-blur-md flex items-center justify-center text-xs text-white font-medium"
                >
                  {i === 3 ? "2k+" : ""}
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-xs mt-1">Average 4.9/5 rating</p>
            </div>
          </div>
        </div>

        {/* Decorative linear bar */}
        <div className="h-1 w-full bg-linear-to-r from-transparent via-white/30 to-transparent rounded-full mt-6" />
      </div>
    </div>
  );
};

export default RegisterBanner;
