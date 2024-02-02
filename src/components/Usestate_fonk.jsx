import React, { useState } from "react";

function Usestate_fonk() {
  //   const [count, setCount] = useState(2);

  //   const decrement = () => {
  //     if (count <= 0) return;
  //     setCount(count - 1);
  //   };

  const [name, setName] = useState(null);
  const [data, setData] = useState([]);

  const clickFunc = () => {
    setData([...data, name]);
    setName("");
  };
  const clickFuncCkr = () => {
    setData(data.slice(0, data.length - 1));
  };

  const targetFunc = (e) => {
    setName(e.target.value);
  };
  console.log(data, "data");
  return (
    // <div>
    //   {/* <button onClick={() => setCount(count + 1)}>Arttır</button>
    //   <div>{count}</div>
    //   <button onClick={decrement}>Azalt</button> */}
    // </div>

    <>
      <input type="text" value={name} onChange={targetFunc} />
      <button onClick={clickFunc}>Ekle</button>
      <button onClick={clickFuncCkr}>Çıkart</button>
      <div>
        {data.map((dt, i) => (
          <div key={i}>{dt}</div>
        ))}
      </div>
    </>
  );
}

export default Usestate_fonk;
