import Banner from "@/components/templates/landingPage/topPage/Banner";

function TopPage() {
  return (
    <section className="w-full overflow-hidden absolute top-0 h-110 lg:h-212.5 bg-(--color-primary) rounded-b-[80px]">
      <div className="relative w-full h-full">
        <div className="absolute top-35 left-7 size-30 lg:size-100 rounded-full bg-[#ffffff60] blur-[180px]" />
        <div className="absolute top-32 right-10 size-30 lg:size-100 rounded-full bg-[#ffffff55] blur-[200px]" />
        <div className="absolute bottom-7 left-25 size-30 lg:size-100 rounded-full bg-[#ffffff60] blur-[180px]" />
        <Banner />
      </div>
    </section>
  );
}

export default TopPage;
