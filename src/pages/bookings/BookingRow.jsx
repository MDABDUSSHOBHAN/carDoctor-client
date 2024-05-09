import React from 'react';

const BookingRow = ({ book ,handleDelete,handelupdate}) => {
    const {_id, name, email, date, service, amount, img ,status} = book;
    console.log(_id);

// this was delete method...

    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-square btn-outline btn-sm bg-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {email}
                    <br />

                </td>
                <td>{amount}</td>
              
                <th>
                   { status === 'Confirm'? <span className='font-bold text-primary'>Confirm</span> :
                      <button onClick={() => handelupdate(_id)} className="btn btn-ghost btn-xs text-red-600"> Please Confirm</button>
                   }
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;