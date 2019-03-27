import React from 'react';

const Club = ({club}) =>
    <div className="Club-tile col-md-3" key={club.id}>
        <div className="Club-data" key={club.id}>
            <div className="Club-logo">
                <img src={club.logo} alt={club.name} width="70" height="70"/>
            </div>
            <div className="Club-info">
                <h4>{club.name}</h4>
                {/*<p>{club.code}</p>*/}
            </div>
        </div>
    </div>;

export default Club;
