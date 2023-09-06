import React from 'react'
import { useState } from 'react'

import { UilCheck, UilTrashAlt } from '@iconscout/react-unicons'

const Input = () => {

    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAdd = () => {
        if (title == '' && description == '') {
            alert('fill the data')
        } else {
            setData([{
                title: title,
                description: description
            }, ...data])
            setTitle('')
            setDescription('')
        }
    }

    const handleChecked = (id) => {
        const para = document.getElementById(id)
        if (para.classList.contains('line-through')) {
            para.classList.remove('line-through')
        } else {
            para.classList.add('line-through')
        }
    }

    const handleDelete = (index) => {
        const newData = data.filter((elem, id) => {
            return index !== id
        })
        setData(newData)
    }


    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center mt-16 gap-3'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                    <input type="text" className='px-5 rounded focus:outline-none py-3 w-full' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder='Description' className='px-5 rounded focus:outline-none py-3 w-full' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <button className='bg-green-400 hover:bg-green-500 transition-all ease-out w-32 text-black px-5 py-3 rounded' onClick={handleAdd}>Add</button>
            </div>


            <div className='mt-24 mb-11 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='flex bg-[#ffaebd] rounded w-full break-all justify-between px-7 py-4 gap-5' id={index} key={index}>

                                <div className='flex gap-5 flex-col'>
                                    <h3 className='text-2xl text-black font-bold'>{item.title}</h3>
                                    <p className='text-lg text-black font-normal'>{item.description}</p>
                                </div>

                                <div className='flex flex-col gap-3'>

                                    <button className='text-white text-center bg-green-500 transition-all ease-out hover:bg-green-400 px-4 py-1' onClick={() => handleChecked(index)}><UilCheck size={25} /></button>

                                    <button className='text-white bg-red-500 transition-all ease-out hover:bg-red-600 px-4 py-1' onClick={() => handleDelete(index)}><UilTrashAlt size={25} /></button>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Input
