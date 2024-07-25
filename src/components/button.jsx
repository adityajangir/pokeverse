import React from 'react'

export default function OneButton({TextToPut, Name, Type, onClick}) {
  return (
    <>
        <button type={Type} name={Name} onClick={onClick}  className="mt-1 block bold w-full text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{TextToPut}</button>
    </>
  )
}
