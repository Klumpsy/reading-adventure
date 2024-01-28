"use client";

import React, { useEffect, useState } from "react";
import WorldSphere from "../components/World/WorldSelect";

const MyPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the isClient state to true once the component has mounted
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* Only render WorldSphere if on the client side */}
      {isClient && <WorldSphere />}
    </div>
  );
};

export default MyPage;
