import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    axios.get("https://airbnbclone-heroku.herokuapp.com/hotel").then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  };


  return (
    <div className="home">
      <Banner />

      <div className="home__section">
     {data.map((el,i)=>
     <Card title={el.title} image={el.image} description={el.description} price={el.price} id={el._id} />
     )}
      </div>
    </div>
  );
}

export default Home;
