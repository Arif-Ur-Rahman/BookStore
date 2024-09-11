import React from 'react'

function Card({ item }) {
    console.log(item)
  return (
    <div className='mt-6 my-3 p-3'>
        <div className="card w-80 bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}  className='h-80 w-80'    alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-0.5 rounded-full border-[2px] hover:text-white hover:bg-pink-500 p-1.5 duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card