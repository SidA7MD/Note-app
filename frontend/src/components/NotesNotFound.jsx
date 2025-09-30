import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center relative">
      {/* Decorative stars */}
      <div className="absolute -top-4 -right-4 text-yellow-400 opacity-30 text-4xl animate-pulse">★</div>
      <div className="absolute -bottom-4 -left-4 text-yellow-400 opacity-20 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>★</div>
      
      {/* Icon container with glow effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-8 shadow-2xl border-4 border-yellow-400/40 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
          <NotebookIcon className="size-16 text-white drop-shadow-lg" strokeWidth={2.5} />
        </div>
      </div>

      {/* Title with gradient */}
      <div className="space-y-2">
        <div className="inline-block px-4 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/40 mb-2">
          <span className="text-yellow-400 text-sm font-semibold">لا توجد ملاحظات</span>
        </div>
        <h3 className="text-3xl font-black text-emerald-900 drop-shadow-sm">
          لا توجد ملاحظات بعد
        </h3>
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </div>

      {/* Description */}
      <p className="text-emerald-800 text-lg font-medium leading-relaxed px-4">
        هل أنت مستعد لتنظيم أفكارك؟ أنشئ أول ملاحظة لك لتبدأ رحلتك
      </p>

      {/* CTA Button with enhanced styling */}
      <Link 
        to="/create" 
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-yellow-400/30 hover:border-yellow-400/60 overflow-hidden"
      >
        {/* Button glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <span className="relative text-lg">أنشئ ملاحظتك الأولى</span>
        <span className="relative text-yellow-400 group-hover:scale-125 transition-transform duration-300">★</span>
      </Link>

      {/* Decorative bottom accent */}
      <div className="flex items-center gap-2 pt-4 opacity-60">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400"></div>
        <span className="text-yellow-500 text-xl">★</span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400"></div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default NotesNotFound;