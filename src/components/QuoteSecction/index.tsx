import Typography from "../Typography";

export default function QuoteSection() {
  return (
    <div className="flex flex-col items-center text-center py-10" id="motto">
      <div className="pb-5">
        <Typography type="h3" className="text-center">
          <span> . . . </span> نُوْرٌ عَلٰى نُوْرٍۗ <span> . . . </span>
        </Typography>
      </div>
      <div className="base:max-md:px-10 md:w-1/2">
        <Typography type="p">"... Light upon light! ..."</Typography>
        <Typography type="p">(Q24:35)</Typography>
      </div>
    </div>
  );
}
