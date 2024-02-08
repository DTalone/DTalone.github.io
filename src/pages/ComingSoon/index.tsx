import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";

function ComingSoon() {
  const [click, setClick] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (click > 5) navigate("/hehe");
  }, [click]);

  return (
    <div className="coming-soon flex justify-center items-center">
      <div className="h-80 flex items-center">
        <Typography
          type="h1"
          className="text-center"
          onClick={() => setClick(click + 1)}
        >
          Coming Soon
        </Typography>
      </div>
    </div>
  );
}

export default ComingSoon;
