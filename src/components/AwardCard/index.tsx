import { Award } from "../../types";
import Typography from "../Typography";

interface AwardCardProps {
  award: Award;
}

export default function AwardCard({ award }: AwardCardProps) {
  const { name, location, highglight, date, descriptions } = award;
  return (
    <div
      className={`border-2 border-neutral-900 rounded p-2 md:p-5 text-neutral-100 
        w-60 
        md:max-lg:w-72 
        lg:w-96 
        flex flex-col gap-5 relative my-2
        base:max-md:col-span-2
        `}
    >
      <div className="text-center">
        <Typography type="p" className="font-bold">
          {name}
        </Typography>
        <Typography
          type="p"
          className="font-semibold"
        >{`${location.city}, ${location.province}, ${location.country}`}</Typography>
      </div>
      <div>
        <Typography type="p">{highglight}</Typography>
        <Typography type="p">{date}</Typography>
        {descriptions.map((description) => (
          <Typography type="p">- {description}</Typography>
        ))}
      </div>
    </div>
  );
}
