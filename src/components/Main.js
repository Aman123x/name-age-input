import React, { useState } from "react";

const Main = () => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [btn, setBtn] = useState("");
  const [error,setError]=useState("");

  function AddUser() {
    if(user.trim()==="" || age.trim()===""){
        setError("Please Enter valid name and age (non-empty values).");
        setUser("");
        setAge("");
    }
    else if(age<0){
        setError("Please Enter a valid age (>0)");
        setUser("");
        setAge("");
    }
    else{
        setBtn({ user, age });
        setUser("");
        setAge("");
        setError("");
    }
  }

  

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />

      <label>Age(Years)</label>
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />

      <button onClick={AddUser}>Add User</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      

      {btn ? (
        <p>
          <span>{btn.user}</span>
          <span>{" (" + btn.age + " years old)"}</span>
        </p>
      ) : ( ""
        //console.warn("Please Enter valid name and age (non-empty values).")
      )}
    </div>
  );
};

export default Main;
