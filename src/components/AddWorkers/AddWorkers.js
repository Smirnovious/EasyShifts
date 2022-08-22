import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './AddWorkers.css'


export const AddWorkers = () => {
const [workers, setWorkers] = useState([]);
const [query, setQuery] = useState('');
const [ahmash, setAhmash] = useState([]);

 useEffect(() => {
    console.log(workers)
},[])


const handleAddWorker = (e) => {
    e.preventDefault();
    setWorkers([...workers, query]);
    setQuery('') 
}


  return (
    <>
    <div>:הוספת עובדים</div>
    <div>
    <form onSubmit={handleAddWorker}>
    <input type='text' value={query} placeholder='שם עובד' onChange={(e) => setQuery(e.target.value)} />
    <button type='submit'>הוסף עובד</button>
    </form>
    </div>
  
    <div className='addedWorkers'>
        עובדים שנוספו:
        <div className='worker-box'>
{workers.map(worker => <li key={uuidv4()}>{worker}</li>)}
</div>
    </div>
    </>
  )
}
