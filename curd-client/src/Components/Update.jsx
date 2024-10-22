import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loaduser = useLoaderData();
    const handleupdate= e=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const user = {name , email};

        fetch(`http://localhost:5000/users/${loaduser._id}`,{
            method: 'PUT',
            headers:{ 'content-type' : "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div>
            <h3>update infor mation {loaduser.name}</h3>
            <form onSubmit={handleupdate}>
                <input type="text" name="name" id="" defaultValue={loaduser?.name} /> <br/>
                <input type="email" name="email" id=""  defaultValue={loaduser?.email} /> <br />
                <input type="submit" value="update" id="" />
            </form>
        </div>
    );
};

export default Update;