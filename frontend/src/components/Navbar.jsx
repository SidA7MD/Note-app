import { Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <header className='relative bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 border-b-4 border-yellow-400 shadow-2xl' dir="rtl">
            {/* Decorative top line */}
            <div className='h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent'></div>
            
            {/* Golden stars decoration */}
            <div className='absolute top-1/2 -translate-y-1/2 right-4 text-yellow-400 opacity-20 text-4xl hidden md:block animate-pulse'>★</div>
            <div className='absolute top-1/2 -translate-y-1/2 left-4 text-yellow-400 opacity-20 text-4xl hidden md:block animate-pulse' style={{ animationDelay: '0.5s' }}>★</div>
            
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <Link to="/" className='group flex items-center gap-3 transition-transform duration-300 hover:scale-105'>
                        <div className='relative'>
                            {/* Star icon background */}
                            <div className='absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity'></div>
                            <div className='relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg border-2 border-white/30'>
                                <span className='text-emerald-800 text-2xl font-black'>★</span>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-3xl md:text-4xl font-black text-white drop-shadow-lg tracking-tight' style={{ fontFamily: "'Cairo', sans-serif" }}>
                                ملاحظاتي
                            </h1>
                            <div className='h-0.5 bg-gradient-to-r from-yellow-400 to-transparent group-hover:from-yellow-300 transition-all duration-300'></div>
                        </div>
                    </Link>

                    {/* Action Button */}
                    <div className='flex items-center gap-4'>
                        <Link 
                            to={"/create"} 
                            className='group relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-emerald-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border-2 border-yellow-300 overflow-hidden'
                        >
                            {/* Shimmer effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
                            
                            <div className='relative flex items-center gap-2'>
                                <Plus className='h-5 w-5 transition-transform group-hover:rotate-90 duration-300' />
                                <span className='font-bold text-base' style={{ fontFamily: "'Cairo', sans-serif" }}>ملاحظة جديدة</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom decorative accent */}
            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent'></div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Tajawal:wght@700&display=swap');
            `}</style>
        </header>
    )
}

export default Navbar