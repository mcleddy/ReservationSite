import React from 'react';
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return(
      <>
    <Banner title="our rooms">
      <Link to="/" className="btn-primary">
        return home
      </Link>
    </Banner>
  <RoomsContainer />
  </>
  );
 };

export default Rooms;