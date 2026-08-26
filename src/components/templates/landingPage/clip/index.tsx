import Image from "next/image";

function Clip() {
  return (
    <section className="relative container px-4 mt-15 xl:mt-30 xl:w-325 mx-auto">
      <Image
        src="/img/landing-clip.webp"
        width={1500}
        height={1000}
        className=""
        alt="clip"
      />
      <p className="text-[16px] font-bold xl:text-[40px] xl:font-extrabold text-white absolute bottom-4 left-1/2 -translate-x-1/2">چهار نسل خاطره با آبعلی</p>
    </section>
  );
}

export default Clip;
