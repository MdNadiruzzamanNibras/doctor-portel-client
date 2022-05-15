import { format } from 'date-fns';
import React from 'react';

const BookAppoinment = ({date, tretment, setTretment}) => {
    const {name, slots, _id}= tretment
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        
        // to close the modal
        setTretment(null);
    }

    return (
        <div>
           


<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <h3 class="font-bold text-lg">Booking:{name}</h3>
   
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
   
  </div>
</div>
        </div>
    );
};

export default BookAppoinment;