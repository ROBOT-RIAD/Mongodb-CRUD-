import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadusers =useLoaderData();
    const [users,setusers] = useState(loadusers);
    const handledelete =(id) =>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,
            {
                method: 'DELETE'
            }
        )
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const remaining = users.filter(user => user._id !== id);
            setusers(remaining);
        })


    }
    return (
        <div>
           <h2>{users.length}</h2>
           <div>
            {
                users.map(user => <p key={user._id}>{user.name} <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={()=>handledelete(user._id)}>delete</button></p>)
            }
           </div>
        </div>
    );
};

export default Users;