import { useState, useEffect } from 'react'
import './App.css'
import api from "./plugins/axios.ts";
import { ToastContainer, toast } from 'react-toastify';
import {Item, Item2} from './components'

function App() {
  const [jobs, setJobs] = useState([])
    const [count, setCount] = useState([])

    const notify = () => toast("Wow so easy!");

    const getJobs = async () => {
        try {
            const {data} = await api.get("/todos")
            console.log(data)
            setJobs(data)
            toast.success("Wow so easy!")
        }
        catch (e) {
            toast.error("Error getting data")
        }

    }

    useEffect(
        () => {
            getJobs()
        }
        ,[]
    )

    useEffect(
        () => {
            console.log(count)
        }
        ,[jobs, count]
    )

  return (
    <>

        <button onClick={notify}>Notify!</button>
        <ToastContainer />
        {Item('xxx')}
        <Item2 />
        {/*{*/}
        {/*    jobs.map(({id, title}) => <p key={id}>{id} {title}</p>)*/}
        {/*}*/}
        {
            <button onClick={() => {
                setCount(count => {
                    return count + 1;
                });
            }}>Click</button>
        }

    </>
  )
}

export default App
