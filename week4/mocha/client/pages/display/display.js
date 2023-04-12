
import React, { useState } from "react";

export const getServerSideProps = async () => {
    const urlget = " http://127.0.0.1:8000/data";
    const res = await fetch(urlget);
    const data = await res.json();
    return {
        props: { data },
    }
}

export default function Display(props) {
    return (
        <>
            < div >
                <table id="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.data.map((i) => (<tr key={i.firstName}>
                            <td>{i.email}</td>
                            <td>{i.firstName}</td>
                            <td>{i.lastName}</td>
                        </tr>))}


                    </tbody>

                </table>

            </div >
        </>)


}