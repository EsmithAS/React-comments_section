import { useState } from "react";

const Comment = ( { commentUser } ) => {
    const { photo , username , comment , date , score } = commentUser;
    const [ scoreValue , setScoreValue ] = useState(score);


    return (
        <div className="w-full flex bg-white px-4 py-5 rounded-xl">
            <div className="w-16 flex items-center justify-center">
                <div className="flex flex-col items-center text-gray-500 bg-gray-100 rounded-lg overflow-hidden">
                    <button onClick={ () => setScoreValue( scoreValue + 1 ) } className="w-full py-1 px-4 hover:bg-gray-200">+</button>
                    <span className="my-2 text-xs text-indigo-600">{ scoreValue }</span>
                    <button onClick={ () => setScoreValue( scoreValue - 1 ) } className="w-full py-1 px-4 hover:bg-gray-200">-</button>
                </div>
            </div>
            <div className="flex-1  px-2">
                <header className="flex justify-between">
                    <div className="flex space-x-3 items-center">
                        <img className="w-10 h-10 object-cover rounded-full object-center" src = { photo } alt = { photo } />
                        <h2 className="font-semibold text-sm text-gray-700">{ username }</h2>
                        <span className="bg-indigo-600 text-white text-xs rounded-md px-2 py-1 inline-block">You</span>
                        <span className="text-sm text-gray-700">{ date }</span>
                    </div>
                    <div className="flex items-center space-x-5">
                        <button className="inline-flex items-center space-x-1 text-indigo-600 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Reply</span>
                        </button>
                        {
                            false && (
                                <>
                                    <button className="inline-flex items-center space-x-1 text-red-600 font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                        </svg>
                                        <span>Delete</span>
                                    </button>
                                    <button className="inline-flex items-center space-x-1 text-gray-600 font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                        </svg>
                                        <span>Edit</span>
                                    </button>
                                </>
                            )
                        }
                    </div>
                </header>
                <section className="mt-3">
                    <p className="text-gray-500 text-sm">
                        { comment }
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Comment;