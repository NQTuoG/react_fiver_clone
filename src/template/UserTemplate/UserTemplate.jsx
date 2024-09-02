import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
// import UserFooter from "../../components/UserFooter/UserFooter";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Mybanner from "../../components/myBanner/Mybanner";
import { cards } from "../../pages/data";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
const UserTemplate = () => {
  return (
    <>
      {/* header */}
      <UserHeader />
      {/* main */}

      <main>
        <Mybanner />
        <Slide title="Popular services" slidesToShow={5} arrowsScroll={4}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slide>
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};
export default UserTemplate;
