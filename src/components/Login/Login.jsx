
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider



    const handleToGoogleLogin=()=>{
        signInWithPopup(auth, provider)
        .then((result ) =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error)=>{
            console.log('ERROR', error)
            setUser(null)
        })
    }

    const handleLogOut = () =>{
        signOut(auth, )
        .then((result)=>{
            setUser(result.user)
        })
        .catch((error)=>{
            setUser(null)
        })
    }

    return (
        <div>
            
            
            {user ? <button onClick={handleLogOut} className="btn ">Log Out </button>:<button onClick={handleToGoogleLogin} className="btn ">Login From Google </button>}
            {
                user && <div>
                    <img src={user.photoURL} alt="" />
                    <h3>{user.displayName}</h3>
                    <h3>{user.email}</h3>
                    
                </div>
            }
        </div>
    );
};

export default Login;