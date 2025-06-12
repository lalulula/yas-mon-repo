interface JobCardProps {
  company: string;
  position: string;
  period: string;
  logo: string;
}

export function JobCard({ company, position, period, logo }: JobCardProps) {
  return (
    <div className="transparent-card  p-4 md:p-6  text-portfolio-gray">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div>sdasdsd</div>
          <div>
            <h3 className="font-semibold text-base md:text-lg">{company}</h3>
            <p className=" text-portfolio-gray text-sm md:text-base">
              {position}
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <p className=" text-portfolio-gray text-xs md:text-sm">
            {period}
          </p>
        </div>
      </div>
    </div>
  );
}
