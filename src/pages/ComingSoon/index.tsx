import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ComingSoon() {
  const [click, setClick] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (click > 10) navigate("/hehe");
    console.log(click);
  }, [click]);

  return (
    <div className="coming-soon flex justify-center items-center">
      <div className="h-80 flex items-center">
        <h1
          className="font-kronaone font-bold text-center text-5xl md:text-9xl text-neutral-100"
          onClick={() => setClick(click + 1)}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default ComingSoon;
