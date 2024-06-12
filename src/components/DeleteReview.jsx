import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const DeleteReview = () => {
    const [data,getData] = useState(
        {
            "name":""
        }
    )
    const [result,changeResult] = useState([])

    // Value Fetching
    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }

    // Search event handling
    const readValue = ()=>{
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                changeResult(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
    // Delete event handling
    const deleteCourse = (id)=>{
        let input = {"_id": id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Successfully Deleted")
                } else {
                    alert("Error")
                }
            }
        ).catch()
    }
  return (
    <div>
<NavBar/>
<div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={readValue}>Delete</button>
                        </div>
                    </div>
                    <div className="row g-3">
                        {result.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.imgurl} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.year}</p>
                                                <p class="card-text">{value.duration}</p>
                                                <p class="card-text">{value.rating}</p>
                                                <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteReview