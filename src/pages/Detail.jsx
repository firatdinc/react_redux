import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import data from "./data";
const Detail = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setGetData(data.find((dt) => dt.id == id));
  }, [id]);
  console.log(getData, "getData");

  return <div>{getData?.name}</div>;
};

export default Detail;
