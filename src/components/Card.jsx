import React from "react";
import "./Card.css";
//import  {useNavigate}  from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
function Card({ title,image, description, price,id }) {
  //let history = useHistory();

  const cartRoute=()=>{
   // navigate(`/productdetails/${id}`)
  //  history.push(`/hotel/${id}`);
}
  return (
    <Link to={`/${id}`}>
    <div   className="card">
      <img src={image} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
    </Link>
  );
}

export default Card;
