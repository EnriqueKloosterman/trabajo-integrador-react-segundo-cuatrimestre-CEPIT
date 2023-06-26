import { useState, useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const usersUrl = 'https://647bdcaec0bae2880ad048d1.mockapi.io/users';
    useEffect(() => {
        fetch(usersUrl)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [])

    return (
        <div className='container-lg w-3/4 grid gap-4 grid-cols-4 mx-auto'>
            {
                users.map((user, i) => {
                    return (
                        <div key={i} className='bg-slate-200 p-4 rounded-md'>
                            <img src={user.avatar} alt="" className='mx-auto rounded-full' />
                            <h3 className='text-center'>{user.name}</h3>
                            {/* <p className='text-sm'>{user.email}</p> */}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users