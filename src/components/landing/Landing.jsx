"use client"

import React from "react"
import styles from "./landing.module.css"
import { useRouter } from "next/navigation"

const Landing = () => {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>LUNGE-PRO</h1>
      <img src="/horse.png" alt="imagen del inicio" />
      <button onClick={() => router.push("/dashboard")}>Comenzar</button>
    </main>
  )
}

export default Landing
