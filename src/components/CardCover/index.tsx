import "./style.css";

interface CardCoverProps {
  children: string | JSX.Element | JSX.Element[];
}

function CardCover({ children }: CardCoverProps) {
  return <div className="text-white border border-indigo-600">{children}</div>;
}

export default CardCover;
