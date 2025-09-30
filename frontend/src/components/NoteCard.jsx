import { Edit3, Trash2, Calendar, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm('هل أنت متأكد من حذف هذه الملاحظة؟')) return;
    
    setIsDeleting(true);
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id));
      toast.success("تم حذف الملاحظة بنجاح ✨");
    } catch (error) {
      console.log('Error in handleDelete', error);
      toast.error("فشل حذف الملاحظة");
      setIsDeleting(false);
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className={`group block transition-all duration-700 ${isDeleting ? 'opacity-0 scale-75 blur-sm' : 'opacity-100'}`}
      dir="rtl"
    >
      {/* Card Container with Premium Effects */}
      <div className="note-card-wrapper">
        {/* Animated Gradient Border */}
        <div className="note-card-border"></div>
        
        {/* Outer Glow Effect */}
        <div className="note-card-glow"></div>
                  
        {/* Content */}
        <div className="note-card-content">
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Top Decorative Bar with Animation */}
          <div className="relative h-1.5 bg-gradient-to-r from-emerald-600 via-yellow-400 to-emerald-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
          </div>

          {/* Content Container */}
          <div className="relative p-7">
            {/* Floating Corner Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-2xl rotate-45 shadow-lg group-hover:rotate-[225deg] transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-700 -rotate-45 group-hover:rotate-[135deg] transition-all duration-700" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
              </div>
            </div>

            {/* Title Section */}
            <div className="mb-5 pr-16">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 line-clamp-2 group-hover:from-emerald-600 group-hover:via-yellow-600 group-hover:to-emerald-600 transition-all duration-500 leading-tight" 
                  style={{ fontFamily: "'Cairo', sans-serif" }}>
                {note.title}
              </h3>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-1 flex-1 max-w-[100px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent rounded-full relative overflow-hidden group-hover:max-w-[140px] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent shimmer-slow"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="relative mb-6">
              <p className="text-gray-700 leading-loose line-clamp-3 text-base group-hover:text-gray-900 transition-colors duration-300" 
                 style={{ fontFamily: "'Tajawal', sans-serif" }}>
                {note.content}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-gradient relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
              
              {/* Date Badge */}
              <div className="relative group/date">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 group-hover:from-emerald-100 group-hover:to-green-100 group-hover:border-emerald-300 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Calendar className="w-4 h-4 text-emerald-600 group-hover/date:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                  <span className="text-sm font-bold text-emerald-700" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    {formatDate(new Date(note.createdAt))}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Edit Button */}
                <div 
                  className="relative action-button edit-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="button-glow edit-glow"></div>
                  <div className="button-content">
                    <Edit3 className="w-5 h-5 relative z-10" strokeWidth={2.5} />
                  </div>
                  <div className="button-shine"></div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={(e) => handleDelete(e, note._id)}
                  disabled={isDeleting}
                  className="relative action-button delete-button disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="حذف الملاحظة"
                >
                  <div className="button-glow delete-glow"></div>
                  <div className="button-content">
                    {isDeleting ? (
                      <div className="w-5 h-5 border-2 border-red-300 border-t-white rounded-full animate-spin relative z-10"></div>
                    ) : (
                      <Trash2 className="w-5 h-5 relative z-10" strokeWidth={2.5} />
                    )}
                  </div>
                  <div className="button-shine"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent shimmer"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Tajawal:wght@400;500;600;700&display=swap');
        
        /* Card Wrapper */
        .note-card-wrapper {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .group:hover .note-card-wrapper {
          transform: translateY(-8px) scale(1.02);
        }
        
        /* Animated Border */
        .note-card-border {
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          background: conic-gradient(
            from 0deg,
            #10b981,
            #fbbf24,
            #10b981,
            #fbbf24,
            #10b981
          );
          animation: rotate-border 4s linear infinite;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .group:hover .note-card-border {
          opacity: 1;
        }
        
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Outer Glow */
        .note-card-glow {
          position: absolute;
          inset: -20px;
          border-radius: 32px;
          background: radial-gradient(
            circle at center,
            rgba(251, 191, 36, 0.15),
            rgba(16, 185, 129, 0.1),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.6s ease;
          filter: blur(20px);
        }
        
        .group:hover .note-card-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        /* Main Card Content */
        .note-card-content {
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 25px rgba(0, 0, 0, 0.08),
            inset 0 1px 2px rgba(255, 255, 255, 0.9);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .group:hover .note-card-content {
          box-shadow: 
            0 8px 12px rgba(0, 0, 0, 0.08),
            0 20px 40px rgba(16, 185, 129, 0.15),
            inset 0 1px 2px rgba(255, 255, 255, 1);
        }
        
        /* Floating Particles */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #fbbf24, transparent);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }
        
        .particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 60%; left: 80%; animation-delay: 0.8s; }
        .particle-3 { top: 40%; left: 30%; animation-delay: 1.6s; }
        .particle-4 { top: 80%; left: 60%; animation-delay: 2.4s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
        }
        
        /* Shimmer Effects */
        .shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .shimmer-slow {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        /* Action Buttons */
        .action-button {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .button-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          transition: all 0.4s ease;
        }
        
        /* Edit Button */
        .edit-button .button-content {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          color: #047857;
          border: 2px solid rgba(16, 185, 129, 0.3);
        }
        
        .edit-button:hover .button-content {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-color: #10b981;
          transform: scale(1.1) rotate(5deg);
        }
        
        .edit-glow {
          position: absolute;
          inset: -4px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent 70%);
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .edit-button:hover .edit-glow {
          opacity: 1;
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        
        /* Delete Button */
        .delete-button .button-content {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          color: #dc2626;
          border: 2px solid rgba(239, 68, 68, 0.3);
        }
        
        .delete-button:hover .button-content {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border-color: #ef4444;
          transform: scale(1.1) rotate(-5deg);
        }
        
        .delete-glow {
          position: absolute;
          inset: -4px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.4), transparent 70%);
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .delete-button:hover .delete-glow {
          opacity: 1;
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        
        /* Button Shine Effect */
        .button-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.6) 50%, transparent 60%);
          transform: translateX(-100%);
        }
        
        .action-button:hover .button-shine {
          animation: shine 0.8s ease;
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        /* Utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        
        @keyframes animate-pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: animate-pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </Link>
  );
};

export default NoteCard;