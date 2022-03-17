import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  const theseListings = listings.map(listing => {
   return (
    <ListingCard 
    listing={listing} 
    id={listing.id}
    key={listing.id} 
    description={listing.description}
    image={listing.image}
    location={listing.location}
    handleDelete={handleDelete}
      />
   )
      
  })
  return (
    <main>
      <ul className="cards">
        {theseListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
