import React, { useState } from 'react'
import NavBar from './NavBar'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const AddReview = () => {
    const [data,getData]= useState(
        {
            "name":"",
            "year":"",
            "duration":"",
            "rating":""
        }
    )
const inputHandler=(event)=>{
    getData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    // console.log(data)
    axios.post("http://localhost:8080/add",data).then((response)=>{
        if (response.data.status==="success") {
            alert("review added")
            
        } else {
            alert("review not added")
            
        }
    }).catch((error)=>{
        alert(error.message)
    })
}


  return (
    <div>
        <NavBar/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Year of Release</label>
                    <input type="text" className="form-control" name='year' value={data.year} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Duration</label>
                    <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Rating</label>
                    <input type="text" className="form-control" name='rating' value={data.rating} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={readValue} className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    </div>
  )
}

export default AddReview