import { useState } from "react";

const InputComment = ({ listComments , setListComments }) => {
    const [ commnet , setComment ] = useState('');

    const getDate = () => {
        const date = new Date().toDateString();
        return date;
    }

    const generarId = () => {
        const math = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);
        return `${math}${date}`;
    }

    const objComment = {
        id: generarId(),
        photo: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        username: 'Esmith AS',
        comment: commnet,
        date: getDate(),
        score: 0,
        replys: []
    }

    const newListComments = [ ...listComments, objComment ]

    const addComment = ( ) => {
        console.log('nuevo ' , newListComments);
        setListComments(newListComments);
        setComment('');
      }
      
    
    return (
        <div className="w-full bg-white space-x-5 px-5 py-7 rounded-xl shadow-lg flex items-start">
            <img className="w-10 h-10 object-cover object-center rounded-full" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <textarea value={commnet} onChange={(e) => setComment(e.target.value)} className="flex-1 text-sm border-2 px-4 py-2 rounded-md h-20 resize-none text-gray-500 outline-none focus:border-indigo-500" placeholder="Add a comment..." />
            <button onClick={ () => { addComment() } } className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md text-sm text-indigo-100 font-bold uppercase">Send</button>
        </div>
    )
}

export default InputComment;