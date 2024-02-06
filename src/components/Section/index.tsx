interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Readonly<SectionProps>) {
  return (
    <div className="p-10 flex flex-col gap-5" id={title}>
      <div className="text-center sm:text-left">
        <h2 className="font-koulen text-neutral-100 text-3xl sm:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
