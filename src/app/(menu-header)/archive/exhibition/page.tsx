"use client";

import MenuModal from "@/components/menu-modal";
import "./page.scss";
import Exhibiton from "@/components/archive-exhibiton";

const Archive = () => {
  return (
    <div>
      <div className="exhibition">
        <h1>EXHIBITON</h1>
        <Exhibiton />
        <MenuModal/>
      </div>
    </div>
  );
};

export default Archive;
