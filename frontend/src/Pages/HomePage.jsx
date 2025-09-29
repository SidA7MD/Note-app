import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RatelimitedUi'
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';


const HomePage = () => {
    const [isRateLimited, setisRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const getnotes = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/notes")
                console.log(res.data);
                setNotes(res.data);
                setisRateLimited(false);
            } catch (error) {
                console.log(error);
                if (error.response?.status === 429) {
                    setisRateLimited(true);
                }
                else {
                    toast.error("Failed to load notes");
                }
            } finally {
                setloading(false);
            }
        }
        getnotes()
    },[]);
    return (
        <div className='min-h-screen'>
            <Navbar />
            {isRateLimited && <RateLimitedUI />}
            <div className='max-w-7xl mx-auto p-4 mt-6'>
                {loading && <div className='text-center text-primary py-10'>loading...</div>}

                {notes.length > 0 && !isRateLimited && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {notes.map(note => (
                            <NoteCard key = {note.id} note = {note} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage