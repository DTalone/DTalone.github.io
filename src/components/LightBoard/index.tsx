import "./style.css";

interface LightBoardProps {
  height?: string;
  width?: string;
}
function LightBoard({ height = "300px", width = "700px" }: LightBoardProps) {
  return (
    <div
      className="rounded-lg flex justify-center items-center"
      style={{ height: height, width: width }}
    >
      <div className="neon-border">
        <h1 className="neon-text font-kronaone text-7xl text-center">
          Welcome
        </h1>
      </div>
    </div>
  );
}

export default LightBoard;
