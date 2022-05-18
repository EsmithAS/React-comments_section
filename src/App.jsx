import ListComments from './components/ListComments'
import InputComment from './components/InputComment'
import { useState , useEffect } from "react";

function App() {

  const [ listComments , setListComments ] = useState([]);

  return (
    <div className="w-full px-5 sm:px-0 mx-auto sm:w-4/5 md:w-3/5 lg:w-1/2 space-y-5">
      <ListComments listComments = { listComments } />
      <InputComment listComments = { listComments } setListComments = { setListComments } />
    </div>
  )
}

export default App
