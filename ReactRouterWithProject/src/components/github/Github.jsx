import React, { useState, useEffect  } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/irfankhansajid')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, []);

    
  return (
   <> 
        <div className='flex justify-center items-centertext-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            
            <div className=''>
                <p>Name: {data.name}</p>
                <p>Github Followers: {data.followers}</p>
                <Link className='text-blue-500 underline' to='https://github.com/irfankhansajid'>
                    Github Profile
                </Link>
            </div>
            <img src={data.avatar_url} className='ml-3' alt="Git Picture" width={150}/>
            
        </div>
        

    </>
  ) 
}

export default Github