"use client"

import React, { useEffect } from "react"
import styles from "./dashboard.module.css"
import Footer from "../../components/footer/Footer"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Dashboard = () => {
  const router = useRouter()
  const [flexionLeft, setFlexionLeft] = useState(50)
  const [flexionRight, setFlexionRight] = useState(50)
  const [impulsionLeft, setImpulsionLeft] = useState(50)
  const [impulsionRight, setImpulsionRight] = useState(50)
  const [impulsionDouble, setImpulsionDouble] = useState(50)

  useEffect(() => {
    try {
      axios
        .post("http://192.168.56.1:3000/api/lungepro/dashboard", {
          data: [
            {
              flexionLeft: flexionLeft,
              flexionRight: flexionRight,
              impulsionLeft: impulsionLeft,
              impulsionRight: impulsionRight,
              impulsionDouble: impulsionDouble,
            },
          ],
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }, [
    flexionLeft,
    flexionRight,
    impulsionLeft,
    impulsionRight,
    impulsionDouble,
  ])

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div onClick={() => router.push("/settings")}>
            <img src="/settings.png" alt="" />
          </div>
          <div onClick={() => router.push("/help")}>
            <img src="/question-mark.png" alt="" />
          </div>
        </nav>
      </header>
      <section className={styles.section}>
        <h2 className={styles.flexion}>FLEXION</h2>
        <div className={styles.container_flexion}>
          <div className={styles.div_flexion}>
            <span
              onClick={() => setFlexionLeft(flexionLeft + 25)}
              className={styles.span_up}
            >
              <img src="/arrow-up-line.png" alt="" />
            </span>
            <small>IZQUIERDA</small>
            <span
              onClick={() => setFlexionLeft(flexionLeft - 25)}
              className={styles.span_down}
            >
              <img src="/arrow-down-line.png" alt="" />
            </span>
          </div>
          <div className={styles.div_flexion}>
            <span
              onClick={() => setFlexionRight(flexionRight + 25)}
              className={styles.span_up}
            >
              <img src="/arrow-up-line.png" alt="" />
            </span>
            <small>DERECHA</small>
            <span
              onClick={() => setFlexionRight(flexionRight - 25)}
              className={styles.span_down}
            >
              <img src="/arrow-down-line.png" alt="" />
            </span>
          </div>
        </div>
      </section>
      <section className={styles.section_impulsion}>
        <h2>IMPULSION</h2>
        <div className={styles.container_impulsion}>
          <div className={styles.btn_container}>
            <h4>IZQUIERDA</h4>
            <span
              onClick={() => setImpulsionLeft(impulsionLeft + 25)}
              className={styles.btn_big}
            >
              <picture>
                <img src="/Logo_Caballo_Blanco.png" alt="" />
              </picture>
            </span>
          </div>
          <div
            onClick={() => setImpulsionRight(impulsionRight + 25)}
            className={styles.btn_container}
          >
            <h4>DERECHA</h4>
            <span
              onClick={() => setImpulsionDouble(impulsionDouble + 25)}
              className={styles.btn_big}
            >
              <picture>
                <img src="/Logo_Caballo_Blanco.png" alt="" />
              </picture>
            </span>
          </div>
        </div>
        <button className={styles.btn_doble}>
          <picture>
            <img src="/Logo_Caballo_Blanco.png" alt="" />
          </picture>
        </button>
        <small className={styles.doble}>DOBLE</small>
      </section>
      <Footer />
    </main>
  )
}

export default Dashboard
