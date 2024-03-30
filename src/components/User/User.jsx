import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // use useParams Hook to get a value from url
    const { userid } = useParams()

    return (
        <div className='bg-gray-400 text-black text-3xl p-4 text-center'>
            Your user Id: {userid}
        </div>
    )
}

export default User
