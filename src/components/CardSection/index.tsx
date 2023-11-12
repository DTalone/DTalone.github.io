import "./style.css";

interface CardSectionProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

function CardSection({ title, children }: CardSectionProps) {
  return (
    <div className="rounded-lg p-5 flex flex-col gap-2">
      <div>
        <h2 className="font-walton text-5xl text-white underline">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default CardSection;
