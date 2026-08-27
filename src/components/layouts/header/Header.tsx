import Menu from "@/components/layouts/header/Menu";
import Banner from "@/components/layouts/header/Banner";

function Header() {
  return (
    <header className="w-full relative">
      <div className="absolute top-0 left-0 w-full">
        <Menu />
      </div>
      <div className="w-full overflow-hidden relative h-110 lg:h-212.5 bg-(--color-primary) rounded-b-[80px]">
        <div className="absolute top-35 left-7 size-30 lg:size-100 rounded-full bg-[#ffffff60] blur-[180px]" />
        <div className="absolute top-32 right-10 size-30 lg:size-100 rounded-full bg-[#ffffff55] blur-[200px]" />
        <div className="absolute bottom-7 left-25 size-30 lg:size-100 rounded-full bg-[#ffffff60] blur-[180px]" />
        <Banner />
      </div>
    </header>
  );
}

export default Header;
