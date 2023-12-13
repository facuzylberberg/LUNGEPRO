"use client"

import React, { useEffect, useState } from "react"
import styles from "./settings.module.css"
import { useRouter } from "next/navigation"
import axios from "axios"

const Settings = () => {
  const router = useRouter()
  const [value, setValue] = useState([
    {
      1: "50",
      2: "50",
      3: "50",
      4: "50",
      5: "50",
    },
  ])

  const arrTitles = [
    {
      id: 1,
      title: "FLEXION DERECHA",
    },
    {
      id: 2,
      title: "FLEXION IZQUIERDA",
    },
    {
      id: 3,
      title: "IMPULSION DERECHA",
    },
    {
      id: 4,
      title: "IMPULSION IZQUIERDA",
    },
    {
      id: 5,
      title: "IMPULSION DOBLE",
    },
  ]

  useEffect(() => {
    try {
      axios
        .post("http://localhost:3000/api/hardware", {
          data: value,
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
  }, [value])

  return (
    <main className={styles.section}>
      <h1>CONFIGURACION</h1>
      <div className={styles.container_inputs}>
        {arrTitles.map((item, index) => {
          return (
            <div key={index} className={styles.container_information}>
              <small>{item.title}</small>
              <input
                id={item.id}
                type="range"
                max={100}
                min={0}
                step={25}
                onChange={(e) =>
                  setValue(
                    value.map((item2, index2) => {
                      if (item2[item.id]) {
                        return {
                          ...item2,
                          [item.id]: e.target.value,
                        }
                      } else {
                        return item2
                      }
                    })
                  )
                }
              />
              <div>
                <small>0</small>
                <small>25</small>
                <small>50</small>
                <small>75</small>
                <small>100</small>
              </div>
            </div>
          )
        })}
      </div>
      <div
        onClick={() => router.push("/dashboard")}
        className={styles.arrow_back}
      >
        <span>
          <img src="/arrow.png" alt="" />
        </span>
      </div>
    </main>
  )
}

export default Settings
