interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="container mx-auto max-w-screen-2xl bg-neutral-700">
      {children}
    </div>
  );
}

export default Container;
