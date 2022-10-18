import React, { useEffect, useState } from "react";
import './Blog.css'



function Blog() {


  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3500/blog').then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        setData(resp)
      })
    })
  }, [])
  // upper line blank arrey means run only one time
  console.warn(data)
  return (
    <div className="blog-component" >
      <h1 className="my-blog-heading">My blog page</h1>

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
                      <button className="read-more-button" onClick={() => alert("thanks for clicking")}>Read More</button>

                    </div>


                  </div>

                </div>


              )
            }

          </div>
        </div>

      }


    </div>
  );
}

export default Blog;