import React, {useState} from "react";

function ListingCard({
  listing,
  id,
  image,
  location,
  description,
  handleDelete}) {
  
  const [fav, setFav] = useState(false)

  function handleFav(){
    setFav(!fav)
  }

  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" id ={id} onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
