import food3 from "../assets/img/food3.png"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full md:w-[80%] mx-auto px-4">
      
      <img
        src={food3}
        alt="Lunch Box"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-6 md:mb-0" />

      <div className="font-serif text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl pt-4">
          Elevate Your Lunch
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          Break with Our
        </h1>
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-green-700">
          Lunch Box
        </div>
      </div>

    </div>
  );
};

export default About;



