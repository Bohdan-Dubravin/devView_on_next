import React from "react";
import { UserButton } from "@clerk/nextjs";
const Home = () => {
  return (
    <div>
      home
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
