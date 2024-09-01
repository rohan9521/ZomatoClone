import React from "react";
import "./";
import { Restaurant } from "../../service/restaurant";
type Props = {};
// import main from '../../assets/main.png'
const DashBoard: React.FC = () => {
  const restaurants: Restaurant[] = [
    {
      name: "Rasoi",
      address: "412 - c , Krishna Nagar, Delhi-51",
      location: "Delhi",
      profileImgUrl:
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
      rating: 4,
    },
    {
      name: "Rasoi",
      address: "412 - c , Krishna Nagar, Delhi-51",
      location: "Delhi",
      profileImgUrl:
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
      rating: 4,
    },
    {
      name: "Rasoi",
      address: "412 - c , Krishna Nagar, Delhi-51",
      location: "Delhi",
      profileImgUrl:
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
      rating: 4,
    },
  ];
  return (
    <div className="container">
      <div className="header">
        {/* <img src={main} /> */}
        <input type="text" />
        <input type="text" />
        <button>Profile</button>
      </div>
      <div>
        {
          restaurants.map((restaurant)=>(
            <>
            <img src={restaurant.profileImgUrl}/>
            </>
          ))
        }
      </div>
    </div>
  );
};

export default DashBoard;
