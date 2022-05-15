import React, { useState } from 'react';
import Footer from '../Shered/Footer/Footer';
import AppoinmentHeader from './AppoinmentHeader';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppoinment date={date}/>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;