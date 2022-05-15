import React from 'react';

const InfoCard = ({img, title, bgColor}) => {
    return (
        <div className={`card lg:card-side bg-base-100 mb-4 mx-3 text-white shadow-xl ${bgColor}`}>
  <figure><img className='pl-3' src={img} alt="Album"/></figure>
  <div className="card-body text-center">
    <h2 className="card-title">{title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default InfoCard;