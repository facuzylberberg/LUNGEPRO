"use client"

import React from "react"
import styles from "./help.module.css"
import { useRouter } from "next/navigation"

const Help = () => {
  const router = useRouter()
  return (
    <section className={styles.section}>
      <h1>INFORMACION</h1>
      <div className={styles.container_information}>
        <small>{"(informacion flexion)"}</small>
        <small>{"(informacion flexion)"}</small>
        <small>{"(informacion flexion)"}</small>
        <small>{"(informacion flexion)"}</small>
        <small>{"(informacion flexion)"}</small>
      </div>
      <div
        onClick={() => router.push("/dashboard")}
        className={styles.arrow_back}
      >
        <span>
          <img src="/arrow.png" alt="" />
        </span>
      </div>
    </section>
  )
}

export default Help
