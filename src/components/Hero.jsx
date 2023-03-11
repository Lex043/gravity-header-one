import Hollywood from "../assets/Placeholder.png";

const Hero = () => {
  return (
    <section className="px-3 lg:px-20 md:mt-20 grid md:grid-cols-2 md:justify-between md:gap-10">
      <figure className="w-full relative">
        <img
          src={Hollywood}
          alt="Placeholder"
          className="w-full h-auto
        "
        />
        <div className="bg-white h-16 w-16 absolute top-0">
          <div className="play_button w-0 h-0 mx-auto"></div>
        </div>
      </figure>

      <div className="flex flex-col md:-order-2">
        <div className="text-white my-5">
          <h1 className="py-3">SHOOTING STARS</h1>
          <h3 className="text-[4rem] leading-[4rem]">The Amazing Hubble</h3>
          <p className="py-4 text-lg">
            In efforts to expand our horizons, we welcome every
            investment-minded individuals to join us in Contodel Investment
            Company
          </p>
        </div>
        <section className="flex flex-col justify-center items-center mx-8 md:mx-0 md:items-start">
          <button className="bg-white py-4 text-[#4737ff] font-semibold outline-none w-56">
            GET STARTED
          </button>
          <button className="border-2 py-4 text-white font-semibold mt-5 outline-none w-56">
            LEARN MORE
          </button>
        </section>
      </div>
    </section>
  );
};

export default Hero;
