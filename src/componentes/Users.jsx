import { useState, useEffect } from 'react'
import Header from './Header';

function Users() {
    const [users, setUsers] = useState([]);
    const usersUrl = 'https://647bdcaec0bae2880ad048d1.mockapi.io/users'
    useEffect(() => {
        fetch(usersUrl)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, []);

    return (
        <>
            <Header />
            <div className='container-lg w-3/4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto'>
                {
                    users.map((user, i) => {
                        return (
                            <div key={i} className='bg-slate-200/90 p-4 rounded-md'>
                                <img src={user.avatar} alt={user.name} className='mx-auto rounded-full h-[80px] w-[80px] ' />
                                <h3 className='text-center font-bold italic text-sm md:text-base lg:text-xl'>{user.name}</h3>
                                <p className='invisible lg:visible text-xs text-center '>{user.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users