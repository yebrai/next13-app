'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Signup () {
  const [userData, setUserData] = useState()

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    setUserData(data)
    console.log(userData)
  }
  return (
    <>
      <h4>Here we will test React-hook-form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <br />
        <input {...register('name')} />
        <br />
        <label>Surname</label>
        <br />
        <input {...register('surname')} />
        <br />
        <label>Email</label>
        <br />
        <input {...register('email')} />
        <br />
        <label>Password</label>
        <br />
        <input {...register('password')} />
        <br />
        <input type='submit' />

      </form>
      <h5>This will be sended</h5>
      {userData &&
      (
        <>
          <p>Name: {userData.name}</p>
          <p>Surname: {userData.surname}</p>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
        </>
      )}
    </>
  )
}
