import { collection, onSnapshot, setDoc,doc } from '@firebase/firestore';
import React,{useState} from 'react';
import { useEffect } from 'react';
import db from "./Firebase";
import GoogleLogin from 'react-google-login';

function Form()
{
    
    const [users,setUsers]=useState([]);
    const input=
    {
        "width":"200px",
        "height":"30px",
        "margin-bottom":"20px",
        "font-family": "'Epilogue', sans-serif",
"font-family": "'Sora', sans-serif"
    }
    const back={
        "background-color":"transparent",
        "border":"none",
        "color":"black",
        "width":"20px",
        "height":"20px",
        "cursor":"pointer",
        "font-weight":"900",
        "font-size":"40px" ,
        "visibility":"hidden"
      
    }
    const button=
    {
        "width":"80px",
        "margin-right":"20px",
        "padding":"10px",
        "background-color":"blue",
        "color":"white",
        "cursor":"pointer",
        "font-family": "'Epilogue', sans-serif",
        "font-family": "'Sora', sans-serif"
    }
    const google=
    {
        "font-family": "'Epilogue', sans-serif",
        "font-family": "'Sora', sans-serif"
    }
    const style={"display":"flex",
        "flex-direction":"row",
         "text-align":"center",
        "align-items":"center",
        "justify-content": "center"}
        function makeVisible()
        {
            document.getElementById("user_name").style.visibility="visible"
            document.getElementById("sign_up").style.visibility="visible"
            document.getElementById("sign_in").style.visibility="visible"
            document.getElementById("googly").style.visibility="visible"
            document.getElementById("para").style.visibility="hidden";
            document.getElementById("back_b").style.visibility="hidden";
        }
    function SignUp(event)
    {
        //event.preventDefault();
        const d = new Date();
        const data=document.getElementById("user_name").value;
        let flag=true;
        //const id=new Date().getMilliseconds();]
        for(var i=0;i<users.length;i++)
        {
            if(users[i].phoneNumber==data)
            {
                flag=false;break;
            }
           
        }
       if(flag&&data.length>0&&data.length<=10)
       {
        const docRef=doc(db,"users",data);
        const payLoad={phoneNumber:data};
        setDoc(docRef,payLoad);
        alert("Registered successfully")
       }
       else
       {
          // console.log("users already exists")
           alert("User Already exists")
       }
        
          console.log(users)
    }
    function SignIn(event)
    {

      //  console.log(event.target.value);
      const d = new Date();
        const data=document.getElementById("user_name").value;
        let flag=true;
        //const id=new Date().getMilliseconds();]
        for(var i=0;i<users.length;i++)
        {
            if(users[i].phoneNumber==data)
            {
                flag=false;break;
            }
           
        }
      if(flag)
      {
          alert("Not a Registered User")
      }
      else
      {
        
        document.getElementById("user_name").style.visibility="hidden"
        document.getElementById("sign_up").style.visibility="hidden"
        document.getElementById("sign_in").style.visibility="hidden"
        document.getElementById("googly").style.visibility="hidden"
        document.getElementById("back_b").style.visibility="visible";
        document.getElementById("para").style.visibility="visible";
        document.getElementById("para").innerText="Successfully Logged in using "+data
      }
        
          console.log(users)
    }
  const  responseGooglePass=(response)=>
    {
        console.log("pass")
        document.getElementById("user_name").style.visibility="hidden"
        document.getElementById("sign_up").style.visibility="hidden"
        document.getElementById("sign_in").style.visibility="hidden"
        document.getElementById("googly").style.visibility="hidden"
        document.getElementById("back_b").style.visibility="visible";
        document.getElementById("para").style.visibility="visible";
        console.log(response)
        document.getElementById("para").innerText="Successfully Logged in using "+response.profileObj.email
    }
    const  responseGoogleFail=(response)=>
    {
        console.log(response)
    }
    useEffect(()=>{
        onSnapshot(collection(db,"users"),(snapshot)=>{
            setUsers(snapshot.docs.map(doc=>doc.data()))
        });
    })
    return (
        <div className="back"> 
            <button id="back_b" onClick={makeVisible} style={back} className="b_back">
            &larr;

                
            </button>
        <div  className="LoginForm">
           
            <p id="para"></p>
                <input type="text"  style={input} placeholder="Enter Mobile Number" id="user_name"></input>
                <br></br>
                <div style={style}><button id="sign_up" style={button} onClick={SignIn}>Sign In</button><button id="sign_in"  style={button} onClick={SignUp}>Sign Up</button></div><br></br>
            <div id="googly">
            <GoogleLogin
            clientId="305889649306-rvjjqc95f9m7pgun96e06vobkik6oe4d.apps.googleusercontent.com"
            buttonText="Login"
            style={google}
            onSuccess={responseGooglePass}
            onFailure={responseGoogleFail}
            cookiePolicy={'single_host_origin'}
            />
            </div>
        </div>
        </div>
    )
}
export default Form;