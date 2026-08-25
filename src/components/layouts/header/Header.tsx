import Menu from "@/components/layouts/header/Menu";
import Banner from "@/components/layouts/header/Banner";

function Header() {
  return (
    <header className="w-full">
      <div className="w-full overflow-hidden relative h-dvh bg-(--color-primary) rounded-b-[80px]">
        <div className="absolute top-35 left-7 size-30 lg:size-100 rounded-full bg-[#ffffff60] blur-[180px]" />
        <div className="absolute top-32 right-10 size-30 lg:size-100 rounded-full bg-[#ffffff55] blur-[200px]" />
        <div className="absolute bottom-7 left-25 size-30 lg:size-100 rounded-full bg-[#ffffff60] blur-[180px]" />
        <Menu />
        <Banner />
      </div>
    </header>
  );
}

export default Header;
