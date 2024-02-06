import { Company } from "../../types";

interface CompanyCardProps {
  company: Company;
  position: string;
  itemOrder: "FIRST" | "LAST" | "SINGLE" | "";
}

export default function CompanyCard({
  company,
  position,
  itemOrder,
}: Readonly<CompanyCardProps>) {
  const { logo, name, location, jobs } = company;

  return (
    <div
      className={`border-2 border-neutral-900 rounded p-2 md:p-5 font-krub text-neutral-100 
                    w-60 
                    md:max-lg:w-72 
                    lg:w-96 
                    flex flex-col gap-5 relative my-2 ${
                      position === "left"
                        ? "ml-[20px] md:max-lg:mr-[390.5px] lg:mr-[484.5px]"
                        : "ml-[20px] md:max-lg:ml-[390.5px] lg:ml-[487.5px]"
                    }`}
    >
      {position === "left" && (
        <>
          <div
            className={`border-l-2 md:border-l-4 border-primary-100 absolute h-full  base:max-md:-left-[30px]  md:-right-[50px]
          ${itemOrder === "SINGLE" ? "sm:h-1/2 sm:translate-y-1/2" : "h-full"}  
          ${itemOrder !== "LAST" && itemOrder !== "SINGLE" && "top-1/4"} 
          ${itemOrder === "LAST" && "bottom-1/4"}
          ${itemOrder === "SINGLE" && "sm:top-1/2"}`}
          />
          {itemOrder !== "LAST" && itemOrder !== "SINGLE" && (
            <div className="border-l-2 md:border-l-4 border-primary-100 absolute h-[100px]  base:max-md:-left-[30px]  md:-right-[50px] -bottom-[150px]" />
          )}
          <div className="rounded-full border-2 md:border-4 border-primary bg-primary absolute w-7 md:w-10 h-7 md:h-10 base:max-md:-left-[43px] md:-right-[68px] inset-y-1/2 -translate-y-1/2" />
        </>
      )}
      {position === "right" && (
        <>
          <div
            className={`border-l-2 md:border-l-4 border-primary-100 absolute h-full -left-[30px] md:-left-[50px]
          ${itemOrder === "SINGLE" ? "sm:h-1/2 sm:translate-y-1/2" : "h-full"}  
          ${itemOrder !== "LAST" && itemOrder !== "SINGLE" && "top-1/4"} 
          ${itemOrder === "LAST" && "bottom-1/4"}
          ${itemOrder === "SINGLE" && "sm:top-1/2"}
          `}
          />
          {itemOrder !== "LAST" && itemOrder !== "SINGLE" && (
            <div className="border-l-2 md:border-l-4 border-primary-100 absolute h-[30%] -left-[30px] md:-left-[50px] -bottom-[150px]" />
          )}
          <div className="rounded-full border-2 md:border-4 border-primary bg-primary absolute w-7 h-7 md:w-10 md:h-10 -left-[43px] md:-left-[68px] inset-y-1/2 -translate-y-1/2" />
        </>
      )}

      <div className="bg-white rounded-full overflow-hidden w-6 h-6 md:w-12 md:h-12 absolute right-1 top-1 flex justify-center items-center">
        <img className="object-fill" src={`/${logo}`} alt={`logo_${name}`} />
      </div>
      <div className="text-center font-bold">
        <h3 className="md:text-lg ">{name}</h3>
        <p className="text-xs md:text-base">{`${location.city}, ${location.province}, ${location.country}`}</p>
      </div>
      <div className="flex flex-col gap-2">
        {jobs.map((job) => {
          return (
            <div key={`${job.dateStart}-${job.dateEnd}`}>
              <h5 className="font-semibold text-xs md:text-base">
                {job.position}
              </h5>
              <h6 className=" text-xs md:text-sm">
                {job.dateStart} - {job.dateEnd}
              </h6>
              <ul>
                {job.descriptions.map((description) => {
                  return (
                    <li key={description}>
                      <p className="font-regular text-xs md:text-sm">
                        - {description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
