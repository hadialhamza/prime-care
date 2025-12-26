import { Shield, Users, Star } from "lucide-react";

const LoginBanner = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center relative overflow-hidden rounded-2xl">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
      
      <div className="relative max-w-md ml-auto p-8 backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
        {/* Floating icons */}
        <div className="absolute -top-4 -left-4">
          <Shield className="w-10 h-10 text-white/40 rotate-12" />
        </div>
        <div className="absolute -bottom-4 -right-4">
          <Users className="w-10 h-10 text-white/40 -rotate-12" />
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-white leading-tight relative">
          <span className="relative">
            Trusted Care
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-white to-transparent" />
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            For Your Family
          </span>
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-white/90 text-lg leading-relaxed font-light">
            Connect with <span className="font-semibold text-white">certified professionals</span> for 
            childcare, elderly care, and special needs support.
          </p>
          
          {/* Features list */}
          <div className="space-y-3 pt-4">
            {[
              { icon: Shield, text: "Background-verified caregivers" },
              { icon: Star, text: "4.9/5 average rating" },
              { icon: Users, text: "10,000+ trusted families" }
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
        
        {/* Decorative gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default LoginBanner;