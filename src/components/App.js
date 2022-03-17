import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
 const [listings, setListings] = useState([])

 useEffect(()=>{
   fetch("http://localhost:6001/listings")
   .then (r=>r.json())
   .then (data => setListings(data))
 },[])

 function handleDelete(e){
    fetch(`http://localhost:6001/listings/${e.target.id}`,{   
      method: "DELETE",
      headers : {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then (() => {
      const newListings = listings.filter((listing)=>listing.id !== parseInt(e.target.id))
      setListings(newListings)
    })
   
  }
 
  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer listings ={listings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
