import { School } from "../../types";

interface SchoolCardProps {
  school: School;
  itemOrder: "FIRST" | "LAST" | "SINGLE" | "";
}
export default function SchoolCard({
  school,
  itemOrder,
}: Readonly<SchoolCardProps>) {
  const { name, major, logo, location, descriptions, dateStart, dateEnd } =
    school;
  return (
    <div
      className={`border-2 border-neutral-900 rounded p-2 sm:p-5 font-krub text-neutral-100 w-72 sm:w-96 flex flex-col gap-5 relative my-2 sm:mt-10 base:max-sm:ml-[20px]`}
    >
      <>
        <div
          className={`base:max-sm:border-l-2 sm:border-t-4 border-primary-100 absolute sm:-top-[40px] base:max-sm:h-full base:max-sm:-left-[30px]
          ${
            itemOrder === "SINGLE" ? "sm:w-1/2 sm:translate-x-1/2" : "sm:w-full"
          }  
          ${
            itemOrder !== "LAST" &&
            itemOrder !== "SINGLE" &&
            "base:max-sm:top-1/4 sm:left-1/4"
          } 
          ${itemOrder === "LAST" && "sm:right-1/4 base:max-sm:bottom-1/4"}
          ${itemOrder === "SINGLE" && "sm:right-1/2"}`}
        />
        {itemOrder !== "LAST" && itemOrder !== "SINGLE" && (
          <div className="sm:border-t-4 border-primary-100 absolute w-10  sm:-top-[40px] sm:right-0 sm:-right-1/3" />
        )}
        <div className="rounded-full border-2 sm:border-4 border-primary bg-primary absolute w-7 sm:w-10 h-7 sm:h-10 base:max-sm:-left-[43px] base:max-sm:inset-y-1/2 base:max-sm:-translate-y-1/2  sm:-top-[58px] sm:inset-x-1/2 sm:-translate-x-1/2" />
      </>

      <div className="bg-white rounded-full overflow-hidden w-6 h-6 sm:w-12 sm:h-12 absolute right-1 top-1 flex justify-center items-center">
        <img className="object-fill" src={`${logo}`} alt={`logo_${logo}`} />
      </div>
      <div className="text-center font-bold">
        <h3 className="sm:text-lg ">{name}</h3>
        <h4 className="text-xs sm:text-base">
          {`${location.city}, ${location.province}, ${location.country}`}
        </h4>
        {dateStart && dateEnd && (
          <h5 className=" text-xs sm:text-sm">{`${dateStart}-${dateEnd}`}</h5>
        )}
        {!dateStart && dateEnd && (
          <h5 className=" text-xs sm:text-sm">{`${dateEnd}`}</h5>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h6 className="font-semibold text-xs sm:text-base">{major}</h6>
          <ul>
            {descriptions.map((description) => {
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
      </div>
    </div>
  );
}
