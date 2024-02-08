import { Skill } from "../../types";
import Typography from "../Typography";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const { topic, items } = skill;
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
      <div>
        <Typography type="p">{topic}</Typography>
      </div>
      {items.map((item, i, row) => {
        if (i + 1 === row.length)
          return (
            <div>
              <Typography type="p">{item.rank}</Typography>
              {item.lists.map((point, j, col) => {
                if (j + 1 === col.length) return point.name;
                else return point.name + ", ";
              })}
            </div>
          );
        else
          return (
            <>
              <div>
                <Typography type="p">{item.rank}</Typography>
                {item.lists.map((point, j, col) => {
                  if (j + 1 === col.length) return point.name;
                  else return point.name + ", ";
                })}
              </div>
              <div className="divider border-t-2 border-neutral-100" />
            </>
          );
      })}
    </div>
  );
}
