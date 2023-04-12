
import React, { useState } from "react";
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [myValue, setMyValue] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (email === "" || !regex.test(email)) {
      setError("Please enter a valid email!");
      return;
    }

    if (firstName === "") {
      setError("Please enter your first name!");
      return;
    }
    if (lastName === "") {
      setError("Please enter your last name!");
      return;
    }
    if (myValue == "") {
      setError("Please choose your business!");
      return;
    }
    return true;

  }

  const handleSubmit = async () => {
    validate()
    if (validate() == true) {
      router.push('/display/display')
      const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
      }

      const JSONdata = JSON.stringify(data)

      const endpoint = 'http://127.0.0.1:8000/'

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }

      const response = await fetch(endpoint, options)

      const result = await response.json()

    }



  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Simple form</h2>
      <h3 className={styles.header}>A simple html form</h3>

      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className={styles.form} value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError("")
          }}
          placeholder="Your email" autoComplete="off" required />
        {(error === "Please enter a valid email!") && <div id="error-email" className={styles.error}>{error}</div>}
        <div className={styles.name}>
          <div className={styles.left}> <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" className={styles.form} value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                setError("")
              }}
              placeholder="Your first name" autoComplete="off" required />
            {(error === "Please enter your first name!") && <div id="error-firstName" className={styles.error}>{error}</div>}
          </div>

          <div className={styles.right}><label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" className={styles.form} value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
                setError("")
              }}
              placeholder="Your last name" autoComplete="off" required />
            {(error === "Please enter your last name!") && <div id="error-lastName" className={styles.error}>{error}</div>}</div>
        </div>



        <label htmlFor="business">Business</label>
        <select name="business" className={styles.form} id="business"
          onChange={(e) => {
            setMyValue(e.target.value)
            setError("")
          }}
          defaultValue={myValue} >
          <option>[choose yours]</option>
          <option>Food & Beverage</option>
          <option>Restaurant</option>
          <option>Pet Shops</option>
          <option>Fashion Boutique</option>
        </select>
        {(error === "Please choose your business!") && <div id="error-business" className={styles.error}>{error}</div>}

        <label htmlFor="desciption">Desciption</label>
        <textarea name="desciption" className={styles.form} id="desciption" rows="10" cols="30"
        >
        </textarea>



        <button type="button" className={styles.btn} onClick={() => handleSubmit()}>Save</button>
        <button type="button" className={[styles.btn, styles.cancel].join(" ")} onClick={() => router.push('display/display')}>Cancel</button>
      </form>

    </div>

  );
}