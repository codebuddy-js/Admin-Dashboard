import React from "react";
import "./home.css";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../Dummy_Data";
import WidgetLg from "../../components/WidgetLarge/ WidgetLg";
import WidgetSm from "../../components/WidgetSmall/WidgetSm";


const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        dataKey="Active-users"
        title="User Analytics"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
