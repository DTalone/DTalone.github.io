interface SocialMediaButtonProps {
  icon: React.ReactNode;
  url: string;
}
export default function SocialMediaButton({
  icon,
  url,
}: SocialMediaButtonProps) {
  return (
    <button
      className={`
                  rounded 
                  w-11 
                  base:max-sm:w-12
                  sm-max-md:w-14 
                  md:max-lg:w-16 
                  lg:w-20 
                  p-1 
                  text-neutral-800 
                  bg-neutral-200 
                  shadow-button
                  transition duration-150 ease-in-out 
                  hover:text-neutral-900 
                  hover:bg-neutral-300
                  hover:shadow-buttonHover
                  `}
      onClick={() => window.open(url, "_blank")}
    >
      {icon}
    </button>
  );
}
