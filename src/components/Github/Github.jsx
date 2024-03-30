import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        // use github API here
        fetch('https://api.github.com/users/Denisshingala')
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="" />   
        </div>
    )
}

export default Github
