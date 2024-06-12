import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewReview = () => {
    const [data,getData]= useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view").then((response)=>{
            getData(response.data)
        }).catch((error)=>{
            alert(error.message)
        })
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                {data.map((value,index)=>{
                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
            <img src="https://imgs.search.brave.com/y2-fulDZ_bDajuniMH32jYctvLHccHn3UQL2IVwfYUU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qQTVOREk1/T1Rnek5WNUJNbDVC/YW5CblhrRnRaVGd3/TmpnMk56TXlNVEVA/LmpwZw" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Movie Name</h5>
              <p class="card-text">Rating</p>
            </div>
          </div>
                        </div>
                })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReview;
