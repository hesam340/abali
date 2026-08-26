import { landingSatisfaction } from "@/core/constants/landing";

function Satisfaction() {
  return (
    <section className="container mx-auto px-4 py-7 w-[90%] flex flex-col items-center lg:flex-row lg:justify-around rounded-[34px] bg-(--color-primary) max-lg:gap-y-14 lg:shadow-[-15px_15px_0px_0px_#4383C43D] mb-20">
      {landingSatisfaction.map((i) => (
        <div key={i.id} className="flex flex-col items-center text-white">
          <p className="text-[40px] xl:text-[64px] font-bold xl:font-extrabold">
            {i.number}
          </p>
          <p className="text-[20px] xl:text-[32px] font-medium">{i.content}</p>
        </div>
      ))}
    </section>
  );
}

export default Satisfaction;
