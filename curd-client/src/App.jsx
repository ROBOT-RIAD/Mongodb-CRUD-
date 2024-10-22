
import './App.css'

function App() {

  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name =form.name.value;
    const email = form.email.value;
    const user ={name , email};

    fetch('http://localhost:5000/users',{
      method:"POST",
      headers :{

        "content-type" : "application/json"
      },
      body : JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId)
      {
        alert('user add seccessfully');
        form.reset();
      }
    })

  }

  return (
    <>
      <h1>Simple crud</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="add user" id="" />
      </form>
    </>
  )
}

export default App
