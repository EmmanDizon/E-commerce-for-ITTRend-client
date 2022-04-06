import React from "react";

const Home = () => {
  console.log(JSON.parse(localStorage.getItem("persist:main-root")));
  return <div>Home</div>;
};

export default Home;
