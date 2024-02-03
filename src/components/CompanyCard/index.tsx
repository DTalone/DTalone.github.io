interface Location {
  city: string;
  province: string;
  country: string;
}

interface JobDesc {
  position: string;
  dateStart: string;
  dateEnd: string;
  descriptions: string[];
}

interface Company {
  name: string;
  location: Location;
  jobs: JobDesc[];
  logo: string;
}

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const { logo, name, location, jobs } = company;

  return (
    <div className="border-2 border-neutral-900 rounded p-5 font-krub text-neutral-100 w-96 flex flex-col gap-5 relative">
      <div className="bg-white rounded-full overflow-hidden w-12 h-12 absolute right-1 top-1 flex justify-center items-center">
        <img className="object-fill" src={`/${logo}`} alt={`logo_${name}`} />
      </div>
      <div className="text-center font-bold">
        <h3 className="text-lg ">{name}</h3>
        <p className="text-md ">{`${location.city}, ${location.province}, ${location.country}`}</p>
      </div>
      <div className="flex flex-col gap-2">
        {jobs.map((job) => {
          return (
            <div>
              <h5 className="font-semibold text-md">{job.position}</h5>
              <h6 className=" text-sm">
                {job.dateStart} - {job.dateEnd}
              </h6>
              <ul>
                {job.descriptions.map((description) => {
                  return (
                    <li>
                      <p className="font-regular text-sm">- {description}</p>
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
