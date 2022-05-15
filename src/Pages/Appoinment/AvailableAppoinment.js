import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookAppoinment from './BookAppoinment';
import Service from './Service';

const AvailableAppoinment = ({date}) => {
    const [services, setServices] = useState()
    const [ tretment, setTretment]= useState(null)
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <h5 className='text-secondary text-center text-xl'> Available Appointments on {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                services?.map(service=> <Service
                key={service?._id}
                setTretment={setTretment}
                service={service}
                >

                </Service>)
               }
            </div>
            {tretment && <BookAppoinment date={date} setTretment={setTretment} tretment={tretment}></BookAppoinment>}
        </div>
    );
};

export default AvailableAppoinment;