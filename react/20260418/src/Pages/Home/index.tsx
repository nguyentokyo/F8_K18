import api from '../../plugins/axios.ts'
import { toast } from 'react-toastify';
import {useEffect, useState} from "react";


const Home = () => {
    const [customer, setCustomer] = useState({});

    const getCustomer = async () => {
        try {

            const { data } = await api.get('/customers');

            setCustomer(data);
        }
        catch (e) {
            console.error(e.response?.data?.message);
            toast.error('get data failed');

        }
    }

    useEffect(() => {
        getCustomer();
    },[])

    return (
        <>
            <h1>day la trang home</h1>
        </>
        )
}

export default Home
