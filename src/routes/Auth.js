import { authService } from "fbase";
import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] =useState(true);
    

    
    const onChange = event =>{


        const e = event;

       const {target:{name,value}}=e;

       if(name==="email"){
           setEmail(value);
       } else if (name==="password"){
        setPassword(value);

       }

    }

    const onSubmit = async(event) => {
        event.preventDefault();
        let data;
        const auth = getAuth()
     
        try{

          if(newAccount){
  
        data = await createUserWithEmailAndPassword(auth,email,password)
  
          }else{
  
        data = await signInWithEmailAndPassword(auth,email,password)
  
  
          }
          console.log(data);
          console.log(typeof(data));
          
          
        }catch(error){

          console.log(error);


        }


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
<input type="submit" value={newAccount? "Create Account" : "Login"}></input>        
</form>

<button>Continue with Google</button>
<button>Continue with Github</button>
</>

)
}


export default Auth;