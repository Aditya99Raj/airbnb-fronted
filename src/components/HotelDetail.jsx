import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  Card  from "./Card";


 const HotelDetail = () => {
    const [productdetail, setProductdetail] = useState([])
    const { id } = useParams()
    // console.log("id",id)

    useEffect(() => {
        getData(id);

    }, [])

    const getData = async (id) => {
        const res = await axios.get("https://airbnbclone-heroku.herokuapp.com/hotel");

        const new_data = res.data
        // console
        let filterdata = new_data.filter(el => el._id == id);
        // console.log(filterdata)
        setProductdetail(filterdata)
    }
    // console.log(productdetail)
    return (

        <div>
            {productdetail.map((el) =>
               <Card title={el.title} image={el.image} description={el.description} price={el.price} id={el._id} />
            )}
        </div>
    )
}

export default HotelDetail