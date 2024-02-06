import { Company } from "../../types";

interface CompanyCardProps {
  company: Company;
  position: string;
}

export default function CompanyCard({
  company,
  position,
}: Readonly<CompanyCardProps>) {
  const { logo, name, location, jobs } = company;

  return (
    <div
      className={`border-2 border-neutral-900 rounded p-2 sm:p-5 font-krub text-neutral-100 w-72 sm:w-96 flex flex-col gap-5 relative my-2 ${
        position === "left"
          ? "ml-[20px] sm:mr-[493.5px]"
          : "ml-[20px] sm:ml-[480.5px]"
      }`}
    >
      {position === "left" && (
        <>
          <div className="border-l-2 sm:border-l-4 border-primary-100 absolute h-full  base:max-sm:-left-[30px]  sm:-right-[50px]" />
          <div className="border-l-2 sm:border-l-4 border-primary-100 absolute h-6  base:max-sm:-left-[30px]  sm:-right-[50px] -bottom-7 sm:-bottom-10" />
          <div className="rounded-full border-2 sm:border-4 border-primary bg-primary absolute w-7 sm:w-10 h-7 sm:h-10 base:max-sm:-left-[43px] sm:-right-[68px] inset-y-1/2" />
        </>
      )}
      {position === "right" && (
        <>
          <div className="border-l-2 sm:border-l-4 border-primary-100 absolute h-full -left-[30px] sm:-left-[50px]" />
          <div className="border-l-2 sm:border-l-4 border-primary-100 absolute h-6 -left-[30px] sm:-left-[50px] -bottom-7 sm:-bottom-10" />
          <div className="rounded-full border-2 sm:border-4 border-primary bg-primary absolute w-7 h-7 sm:w-10 sm:h-10 -left-[43px] sm:-left-[68px] inset-y-1/2" />
        </>
      )}

      <div className="bg-white rounded-full overflow-hidden w-6 h-6 sm:w-12 sm:h-12 absolute right-1 top-1 flex justify-center items-center">
        <img className="object-fill" src={`/${logo}`} alt={`logo_${name}`} />
      </div>
      <div className="text-center font-bold">
        <h3 className="sm:text-lg ">{name}</h3>
        <p className="text-xs sm:text-base">{`${location.city}, ${location.province}, ${location.country}`}</p>
      </div>
      <div className="flex flex-col gap-2">
        {jobs.map((job) => {
          return (
            <div key={`${job.dateStart}-${job.dateEnd}`}>
              <h5 className="font-semibold text-xs sm:text-base">
                {job.position}
              </h5>
              <h6 className=" text-xs sm:text-sm">
                {job.dateStart} - {job.dateEnd}
              </h6>
              <ul>
                {job.descriptions.map((description) => {
                  return (
                    <li key={description}>
                      <p className="font-regular text-xs sm:text-sm">
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
