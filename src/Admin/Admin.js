import React from "react";
import "./Admin.css"
import { useState } from "react";
import Blog from "../component/Blog/Blog";

function Admin() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Brajesh Kumar Thakur');

    function saveUser() {
        console.warn(title, body, author);
        let data = { title, body, author }

        fetch(' http://localhost:3500/blog', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        }).then((resp) => {
            console.warn("response", resp)

            resp.json().then((result) => {
                console.warn('result', result)
            })
        })
    }
    return (
        <div className="admin-component">
            <h1>Hello This is Admin page... </h1>

            <Blog />

            <div className="input-box">

                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name='title' className="input input-title" placeholder="Enter Title Here..." />
                <br />

                <input type="text" value={author} onChange={(e) => { setAuthor(e.target.value) }} name='author' className="input input-author" placeholder="Enter Author name Here..." />

                <input type="file" />

                {/* <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name='body' className="input input-body" placeholder="Enter Contant Here..."/> */}

                <textarea name="contant" id="contant" cols="30" rows="10" value={body} onChange={(e) => { setBody(e.target.value) }} className="input input-body" placeholder="Enter Contant Here..." />
                <br />

                <button className="read-more-button" type="button" onClick={saveUser}>upload</button>

            </div>

            <br />


        </div>
    );

}

// export default Admin

// This is not exported because there is all action is now one component