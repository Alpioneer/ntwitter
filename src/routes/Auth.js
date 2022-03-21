import React, {useState} from "react";

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onChange = event =>{


        const e = event;

       const {target:{name,value}}=e;

       if(name==="email"){
           setEmail(value);
       } else if (name==="password"){
        setPassword(value);

       }

    }

    const onSubmit = (event) => {
        event.preventDefault();
      };

return(
<>
<form onSubmit={onSubmit}>
<input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
<input type="submit" value="Log In"></input>        
</form>

<button>Continue with Google</button>
<button>Continue with Github</button>
</>

)
}


export default Auth;