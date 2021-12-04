import {FormEvent, FormEventHandler} from "react";
// import { request } from 'graphql-request'
// const fetcher = query => request('/api/graphql', query)


function LoginPage() {
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(123)
  }
  return <div>
    <p>Login</p>
    <form onSubmit={(e: FormEvent<HTMLFormElement>)=>handlerSubmit(e)}>
      <input name='email' type='email' autoComplete='email' required />
      <input name='password' type='password' autoComplete='password' required />
      <button type='submit'>Login</button>
      </form >
  </div>
}

export default LoginPage