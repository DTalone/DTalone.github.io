import { Volunteer } from "../../types";

interface VolunteerCardProps {
  volunteer: Volunteer;
}

export default function VolunteerCard({ volunteer }: VolunteerCardProps) {
  const { organization, logo, location, jobs } = volunteer;
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
        <div className="bg-white rounded-full overflow-hidden w-6 h-6 md:w-12 md:h-12 absolute right-1 top-1 flex justify-center items-center">
          <img
            className="object-fill"
            src={`/${logo}`}
            alt={`logo_${organization}`}
          />
        </div>
        <div className="text-center font-bold">
          <h3 className="md:text-lg ">{organization}</h3>
          <p className="text-xs md:text-base">{`${location.city}, ${location.province}, ${location.country}`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {jobs.map((job) => {
          return (
            <div key={`${job.dateStart}-${job.dateEnd}`}>
              <h5 className="font-semibold text-xs md:text-base">
                {job.position}
              </h5>
              {job.dateStart && job.dateEnd && (
                <h6 className=" text-xs md:text-sm">
                  {job.dateStart} - {job.dateEnd}
                </h6>
              )}
              {!job.dateStart && job.dateEnd && (
                <h6 className=" text-xs md:text-sm">{job.dateEnd}</h6>
              )}
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
