import React, { useEffect, useState } from "react";

function Useeffect_fonk() {
  const [name, Setname] = useState("react");

  useEffect(() => {
    Setname("react güncellendi..");
  }, []);
  return <>{name}</>;
}

export default Useeffect_fonk;
