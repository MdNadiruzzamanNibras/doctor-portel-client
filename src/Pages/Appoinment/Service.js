import React from 'react';

const Service = ({ service, setTretment}) => {
    const {name, slots} = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
        <h2 className="text-center text-xl text-secondary">{name}</h2>
        <p>{
            slots.length>0 ? <span> {slots[0]}</span> :
            <span className='text-red-500 '> Try another day</span>

            }</p>
        <p>{slots.length} {service.length>1? 'SPACES': 'SPACE'} AVAILABLE</p>
        <div className="card-actions justify-center">
      <label htmlFor="my-modal-6" onClick={()=>setTretment(service)} className="btn modal-button btn btn-secondary">Book Appointment</label>

    </div>
  </div>
</div>
    );
};

export default Service;