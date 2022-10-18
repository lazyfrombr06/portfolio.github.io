//in this page i can delete the blog and create the blog at the same time with the help of api and this is proud moment for me today that i acchived this milestone at own practice and dedication 

import React, { useEffect, useState } from "react";
import './AdminPage.css'
import './Admin.css'

function Admin() {
    const [data, setData] = useState([])

    // saveuser

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState();
    const [author, setAuthor] = useState('-Brajesh');

    function saveUser() {
        console.warn(title, body, author,img);
        let data = { title, body, author, img }

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

        alert('Uploaded')
        
        
    }
    // saveuser

    useEffect(() => {
        getList()
    }, [])

    console.warn(data);

    function getList() {
        fetch('http://localhost:3500/blog').then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)
                setData(resp)
            })
        })
    }

    function deleteUser(id) {
        fetch(`http://localhost:3500/blog/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                getList()
            })
        })
    }

    return (
        <div className="blog-component" >
      <h1 className="my-blog-heading admin-heading">Welcome Back Mr. Lazy !</h1>

      {
        <div>

          <div className="blog-container ">

            {
              data.map((item, i) =>

                <div className="map-full-body" key={i} >

                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h1 className="card-heading">{item.title}</h1>
                      <h5 className="card=author">{item.author}</h5>
                      <div className="card-image">
                        <img src={item.img} alt="photo not shown" />
                      </div>
                      <div className="card-item-body">{item.body}</div>
                      <button className="read-more-button" onClick={() => alert("thanks for clicking")}>Read More</button> <br/>

                      <button className="deletebtn" type="button" onClick={()=>deleteUser(item.id)}>Delete</button>

                    </div>


                  </div>

                 

                </div>


              )
            }

          </div>

           {/* saveuser */}

           <h1 className="my-blog-heading" style={{margin:'auto', alignItems:'center', justifyContent:'center', textAlign:'center'}}> Save New blog from here </h1>

           <div className="input-box">

<input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name='title' className="input input-title" placeholder="Enter Title Here..." />
<br />

<input type="text" value={author} onChange={(e) => { setAuthor(e.target.value) }} name='author' className="input input-author" placeholder="Enter Author name Here..." />

<input type="file" accept="image/jpeg, image/jpg , image/png" value={img} onChange={(e) => {setImg(e.target.value)}} name='img' className="input input-img"/>

{/* <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name='body' className="input input-body" placeholder="Enter Contant Here..."/> */}

<textarea name="contant" id="contant" cols="30" rows="10" value={body} onChange={(e) => { setBody(e.target.value) }} className="input input-body" placeholder="Enter Contant Here..." />
<br />

<button className="submit-btn" style={{marginBottom:'44px'}} type="button" onClick={saveUser}>upload</button>


</div>


            {/* saveuser */}
                  
                
                  
               
        </div>

      }


    </div>
    );
}

export default Admin;