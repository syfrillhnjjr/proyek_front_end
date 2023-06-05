import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Cultural Library</h2>
      <div className="culture-card">
        <div className="culture">
          <img src="TraditionalHouse.jpg" alt="Traditional House" className="culture-image" />
          <div className="culture-details">
            <h3 className="culture-name">Traditional House</h3>
            <p className="culture-description">
              The traditional house of the Bugis, namely Saoraja. The Bugis traditional houses gained more Islamic influence. You can see it from the direction of the house that always faces the qibla. 
              There are three meanings contained in the Bugis traditional houses, namely Boting Langi, Ale Kawa, and Buri Liy.
            </p>
            <Link to="/TraditionalHouse.jpg" className="culture-link">
              Lihat Detail
            </Link>
          </div>
        </div>
        <div className="culture">
          <img src="Arts.jpg" alt="Arts" className="culture-image" />
          <div className="culture-details">
            <h3 className="culture-name">Arts</h3>
            <p className="culture-description">
              Tari Kipas is one of the oldest dance arts of the Gowa Kingdom. Formerly, the kingdom experienced a period of glory and successfully controlled the southern part of Sulawesi for many years. 
              Tari Kipas Expert dance is also used as a complementary form or a must-have when there are customary ceremonies, royal parties, etc. 
              The dance originated from a story of separation between a limo resident or an earth person, with a skyline or a land of imagination.
            </p>
            <Link to="/Arts.jpg" className="culture-link">
              Lihat Detail
            </Link>
          </div>
        </div>
        <div className="culture">
          <img src="TraditionalCustom.png" alt="Traditional Custom" className="culture-image" />
          <div className="culture-details">
            <h3 className="culture-name">Traditional Custom</h3>
            <p className="culture-description">
              Bodo clothes are traditional clothes of South Sulawesi originally from the Bugis people. Bodo shirts are the oldest clothes in the world, where people of South Sulawesi have worn this custom since the 9th century. 
              The unique feature of this traditional dress also lies in the color of the shirt, where the bodo traditional dress has a variety of colors useful as a symbol of age and also the status of each wearer.
            </p>
            <Link to="/TraditionalCustom.png" className="culture-link">
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
