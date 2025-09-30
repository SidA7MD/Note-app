import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RatelimitedUi";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import api from "../lib/axios";

const HomePage = () => {
  const [isRateLimited, setisRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getnotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setisRateLimited(false);
      } catch (error) {
        console.log(error);
        if (error.response?.status === 429) {
          setisRateLimited(true);
        } else {
          toast.error("فشل تحميل الملاحظات");
        }
      } finally {
        setloading(false);
      }
    };
    getnotes();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl" style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}>
      {/* Animated Background with Mauritanian Colors */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 opacity-95"></div>
      
      {/* Decorative Islamic Pattern Overlay */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Golden Star Accents */}
      <div className="fixed top-10 right-10 text-yellow-400 opacity-20 text-8xl animate-pulse">★</div>
      <div className="fixed bottom-20 left-10 text-yellow-400 opacity-15 text-6xl animate-pulse" style={{ animationDelay: '1s' }}>★</div>
      <div className="fixed top-1/2 right-1/4 text-yellow-400 opacity-10 text-5xl animate-pulse" style={{ animationDelay: '0.5s' }}>★</div>

      <div className="relative z-10">
        <Navbar />

        {isRateLimited && <RateLimitedUI />}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-12">
          {/* Elegant Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border-2 border-yellow-400/40">
              <span className="text-yellow-300 text-2xl">★</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
              ملاحظاتي
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4"></div>
            <p className="text-green-50 text-xl font-medium drop-shadow-lg">
              احفظ أفكارك ومهامك في مكان واحد آمن
            </p>
          </div>

          {/* Loading State - Enhanced */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                {/* Outer spinning ring */}
                <div className="w-24 h-24 border-4 border-yellow-300/30 border-t-yellow-400 rounded-full animate-spin"></div>
                {/* Inner star */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-yellow-400 text-4xl animate-pulse">★</div>
                </div>
              </div>
              <div className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white text-lg font-semibold">جارٍ تحميل الملاحظات...</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {notes.length === 0 && !loading && !isRateLimited && (
            <div className="animate-fade-in bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <NotesNotFound />
            </div>
          )}

          {/* Notes Grid - Enhanced Cards */}
          {notes.length > 0 && !loading && !isRateLimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {notes.map((note, index) => (
                <div
                  key={note._id}
                  className="group relative transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  
                  {/* Card wrapper with backdrop */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-yellow-400/20 overflow-hidden transition-all duration-300 group-hover:border-yellow-400/60 group-hover:shadow-yellow-400/20">
                    {/* Top accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-emerald-600 via-yellow-400 to-emerald-600"></div>
                    
                    <div className="p-1">
                      <NoteCard note={note} setNotes={setNotes} />
                    </div>

                    {/* Corner star decoration */}
                    <div className="absolute top-3 left-3 text-yellow-400 opacity-0 group-hover:opacity-40 transition-opacity text-xs">
                      ★
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Floating Stats or Info Badge */}
          {notes.length > 0 && !loading && !isRateLimited && (
            <div className="fixed bottom-8 left-8 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30 shadow-2xl animate-fade-in hidden lg:block">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-2xl">★</span>
                <div className="text-white">
                  <p className="text-sm font-semibold">إجمالي الملاحظات</p>
                  <p className="text-2xl font-black">{notes.length}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Cairo:wght@300;400;600;700;900&display=swap');
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        * {
          font-family: 'Tajawal', 'Cairo', sans-serif !important;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cairo', 'Tajawal', sans-serif !important;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar with Mauritanian colors */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #047857;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          border-radius: 6px;
          border: 2px solid #047857;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #d97706);
        }
      `}</style>
    </div>
  );
};

export default HomePage;