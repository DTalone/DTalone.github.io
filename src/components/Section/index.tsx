import Typography from "../Typography";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Readonly<SectionProps>) {
  return (
    <div className="p-10 flex flex-col gap-5" id={title.toLowerCase()}>
      <div className="text-center md:text-left">
        <Typography type="h3" className="">
          {title}
        </Typography>
      </div>
      {children}
    </div>
  );
}
