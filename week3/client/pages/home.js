import Link from 'next/link'
import React, { useState } from "react";


export default function CreateAccountFrom(accounts) {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");

    const createAccount = () => {
        if (email.trim() === "") {
            setError("Please enter your invalid email");
            return;
        }
        if (firstName.trim() === "") {
            setError("Please enter your firstname");
            return;
        }
        if (lastName.trim() === "") {
            setError("Please enter your lastname");
            return;
        }

    }



    //   fetch(urlpost, {
    //     method: 'post',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(appendAccount)
    //   });
    //   alert("Account is successfully created");
    //   router.push('/login')
    // }

    return (
        <div >
            <div >
                <h2 id="header">Simple form</h2>
                <h3 id="sub-header">A simple html form</h3>
                <form>
                    <input type="text" name="email"
                        placeholder="Enter your mail" autoComplete="off" required
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("")
                        }}
                    />
                    {(error === "Please enter your invalid email") && <div className="alert">{error}</div>}
                    <input type="text" name="firstname"
                        placeholder="Enter your firstname" autoComplete="off" required
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            setError("")
                        }}
                    />
                    {(error === "Please enter your firstname") && <div className="alert">{error}</div>}
                    <input type="text" name="lastname"
                        placeholder="Enter your lastname" autoComplete="off" required
                        onChange={(e) => {
                            setLastName(e.target.value);
                            setError("")
                        }}
                    />
                    {(error === "Please enter your lastname") && <div className="alert">{error}</div>}
                    <input type="text" name="email"
                        placeholder="Enter your mail" autoComplete="off" required
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("")
                        }}
                    />
                    {(error === "Please enter your invalid email") && <div className="alert">{error}</div>}
                    <button type="button" onClick={createAccount}>CREATE ACCOUNT</button>


                </form>
            </div>
        </div>
    );
}