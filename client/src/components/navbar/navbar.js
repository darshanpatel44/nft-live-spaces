import React from 'react';
import './navbar.css';
import "@fontsource/space-grotesk";

function Navbar() {
  return (
    <div className="px-2">
      <h2 className="fw-bolder px-1">Live Spaces</h2>
      <h6 className="fw-light text-secondary description">
        <img
          className="me-2"
          src="https://img.icons8.com/fluency-systems-filled/32/000000/verified-badge.png"
          alt="check badge"
        />
        All NFTs on Cyber either belong to or were minted by their space creator.
      </h6>
    </div>
  )
}

export default Navbar;