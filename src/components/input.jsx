import { ChangeEvent, FunctionComponent } from "react";



import React from 'react'

export default function FormInput({Type, TextToPut, value, onChange, name}) {
    return (
        <>
            <div className="w-full">
                <div className="relative h-10 w-full min-w-[200px] ">
                    <input type={Type} placeholder={TextToPut} value={value} onChange={onChange} name={name}
                        className="mt-1 block peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                </div>
            </div>
        </>
    )
}
