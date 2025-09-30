import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8" dir="rtl">
      <div className="relative animate-fade-in">
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
        
        {/* Main card */}
        <div className="relative bg-white/95 backdrop-blur-sm border-2 border-yellow-400/40 rounded-2xl shadow-2xl overflow-hidden">
          {/* Top warning accent bar */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"></div>
          
          <div className="flex flex-col md:flex-row items-center p-6 gap-6">
            {/* Icon with animated glow */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-yellow-400/40 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-amber-500 p-6 rounded-full shadow-xl border-4 border-white/50 transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                <ZapIcon className="size-12 text-white drop-shadow-lg" strokeWidth={2.5} />
              </div>
              {/* Lightning sparks */}
              <div className="absolute -top-2 -right-2 text-yellow-400 text-2xl animate-pulse">⚡</div>
              <div className="absolute -bottom-2 -left-2 text-yellow-400 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>⚡</div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-right">
              <div className="mb-3">
                <div className="inline-block px-4 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/40 mb-2">
                  <span className="text-amber-600 text-sm font-bold">⚠️ تحذير</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-emerald-900 drop-shadow-sm">
                  تم الوصول إلى حد الطلبات
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto md:mr-0 mt-2"></div>
              </div>

              <p className="text-emerald-800 text-lg font-semibold mb-2 leading-relaxed">
                لقد قمت بإرسال عدد كبير من الطلبات في فترة قصيرة. يرجى الانتظار قليلاً.
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700/80">
                <span className="text-yellow-500">★</span>
                <p className="text-base">
                  حاول مرة أخرى خلال بضع ثوانٍ للحصول على أفضل تجربة
                </p>
              </div>
            </div>

            {/* Animated countdown indicator (visual only) */}
            <div className="flex-shrink-0 hidden lg:flex flex-col items-center gap-2">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#d1fae5"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#fbbf24"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="175.93"
                    strokeDashoffset="0"
                    className="animate-countdown"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-yellow-500 font-black animate-pulse">⏱</span>
                </div>
              </div>
              <span className="text-xs text-emerald-700 font-semibold">انتظر قليلاً</span>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="flex items-center justify-center gap-2 pb-4 opacity-50">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-yellow-500 text-sm">⚡</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes countdown {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 175.93;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-countdown {
          animation: countdown 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RateLimitedUI;