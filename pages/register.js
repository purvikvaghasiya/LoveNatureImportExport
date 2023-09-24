import React, { useEffect,useState } from 'react'
import Register1 from '@/component/Register';
import { useRouter } from 'next/router';

const Register = () => {
    const [registeropen,setregisteropen] = useState(false);
    const router = useRouter();
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('loginuser'))){
            router.push('/');
        }
    },[])
  return (
    <div>
    <title>Register - Love Nature</title>
      <section id="about-wrapper" className="about-wrapper">
        <div className="elementor-background-overlay1"></div>
      </section>
      <section className='register-container container-sm my-5'>
        <div className='register-wrapper'>
        <Register1 Registeropen={setregisteropen}/>
        </div>
     
      </section>
    </div>
  )
}

export default Register;