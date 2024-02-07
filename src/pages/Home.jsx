import { useNavigate } from "react-router-dom";
import data from "./data";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {data.map((dt, i) => (
        <div
          onClick={() => navigate(`detail/${dt.id}`)}
          style={{ cursor: "pointer", marginBottom: "30px" }}
          key={i}
        >
          <div>{dt.name}</div>
          <div>{dt.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
