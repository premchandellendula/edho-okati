import React, { useState } from 'react'
import Heading from '../../components/login/Heading'
import InputBox from '../../components/login/InputBox'
import Button from '../../components/login/Button'
import BottomWarning from '../../components/login/BottomWarning'
import PasswordInput from '../../components/login/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className='h-screen bg-gray-100 flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='bg-white w-[30rem] h-max text-center rounded-lg shadow-xl px-[3rem] py-[2rem]'>
          <Heading label={"Sign in to your account"} />

          <InputBox 
            label={"Email"} 
            placeholder={"johndoe@gmail.com"} 
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <PasswordInput
           label={"Password"} 
           placeholder={"123abc"} 
           onChange={(e) => {
            setPassword(e.target.value)
           }}
          />

          <Button
           label={"Sign In"} 
           onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
              email,
              password
            })

            // console.log(response.data.token)
            localStorage.setItem(response.data.token);

            if(email && password){
              navigate('/homepage')
            }
           }}
          />
          <BottomWarning label={"Doesn't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Signin