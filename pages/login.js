import React,{useState,useEffect} from 'react'
import Login1 from '@/component/Login';

 const Login = () => {
    const [loginOpen, setloginOpen] = useState(false);
    
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('loginuser')))
        {
          router.push("/");
        }
      },[])
  return (
    <div>
     <title>Login - Love Nature</title>
      <section id="about-wrapper" className="about-wrapper">
        <div className="elementor-background-overlay1"></div>
      </section>
      <section className='login-container container-sm my-5'>
        <div className='login-wrapper'>
        <Login1 LoginOpen={setloginOpen}/>
        </div>
      </section>
     
    </div>
  )
}

export default Login;