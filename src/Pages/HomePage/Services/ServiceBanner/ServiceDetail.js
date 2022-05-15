import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
const ServiceDetail = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img style={{height:'300px'}} src={treatment} alt="Movie"/></figure>
  <div className="card-body flex justify-center">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    );
};

export default ServiceDetail;