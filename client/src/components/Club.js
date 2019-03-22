import React from 'react';

const Club = ({club}) =>
    <div className="single-club" key={club.id}>
        <div className="club-logo">
            <img src={club.logo} alt={club.name} width="70" height="70"/>
        </div>
        <div className="club-info">
            <h4>{club.name}</h4>
            <p>{club.code}</p>
        </div>
    </div>;

export default Club;
