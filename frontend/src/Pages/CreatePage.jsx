import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("جميع الحقول مطلوبة");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("تم إنشاء الملاحظة بنجاح");
      navigation("/");
    } catch (error) {
      console.log("Error Creating Note", error);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      if (error.response?.status === 429) {
        toast.error("عذراً، طلبات كثيرة جداً", {
          duration: 4000,
          icon: "😔",
        });
      } else {
        toast.error("فشل إنشاء الملاحظة");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl" style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}>
      {/* Animated Background with Mauritanian Colors */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 opacity-95"></div>
      
      {/* Decorative Islamic Pattern Overlay */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Golden Star Accents */}
      <div className="fixed top-10 left-10 text-yellow-400 opacity-20 text-8xl animate-pulse">★</div>
      <div className="fixed bottom-20 right-10 text-yellow-400 opacity-15 text-6xl animate-pulse" style={{ animationDelay: '1s' }}>★</div>
      <div className="fixed top-1/2 left-1/4 text-yellow-400 opacity-10 text-5xl animate-pulse" style={{ animationDelay: '0.5s' }}>★</div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button with Enhanced Style */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/20 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 shadow-lg group"
          >
            <ArrowLeftIcon className="size-5 group-hover:translate-x-1 transition-transform" />
            <span>رجوع</span>
          </Link>

          {/* Main Card with Glow Effect */}
          <div className="relative animate-fade-in">
            {/* Glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl opacity-30 blur-xl"></div>
            
            {/* Card */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-yellow-400/40 overflow-hidden">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-emerald-600 via-yellow-400 to-emerald-600"></div>
              
              <div className="p-8">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-4 shadow-lg">
                    <span className="text-3xl text-yellow-400">★</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-emerald-900">إنشاء ملاحظة جديدة</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-transparent mt-2"></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-emerald-900 font-bold text-lg flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        العنوان
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="أدخل عنوان الملاحظة"
                      className="input input-bordered w-full bg-white border-2 border-emerald-200 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 text-emerald-900 placeholder:text-emerald-400 rounded-xl text-lg transition-all duration-300"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  {/* Content Textarea */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-emerald-900 font-bold text-lg flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        المحتوى
                      </span>
                    </label>
                    <textarea
                      placeholder="اكتب ملاحظتك هنا..."
                      className="textarea textarea-bordered w-full h-40 bg-white border-2 border-emerald-200 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 text-emerald-900 placeholder:text-emerald-400 rounded-xl text-lg resize-none transition-all duration-300"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="card-actions justify-start pt-4">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:from-emerald-400 disabled:to-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-yellow-400/30 hover:border-yellow-400/60 disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:cursor-not-allowed overflow-hidden min-w-[200px] justify-center"
                      disabled={loading}
                    >
                      {/* Button glow effect */}
                      {!loading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      )}
                      
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="relative text-lg">جارٍ الإنشاء...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative text-lg">إنشاء الملاحظة</span>
                          <span className="relative text-yellow-400 group-hover:scale-125 transition-transform duration-300">★</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Bottom decorative elements */}
              <div className="flex items-center justify-center gap-2 pb-4 opacity-40">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400"></div>
                <span className="text-yellow-500 text-sm">★</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Cairo:wght@300;400;600;700;900&display=swap');
        
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

export default CreatePage;