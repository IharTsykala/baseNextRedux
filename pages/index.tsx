import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from "react";

const Home: NextPage = () => {
  const { push } = useRouter()
  useEffect(()=> {
    (async () => await push('/logIn'))()
  }, [push])
  return (
    <div className={styles.container}>
      {"redirect"}
    </div>
  )
}

export default Home
