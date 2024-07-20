const HomeComponent = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-between px-4 md:px-8 lg:px-32 space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2">
        <img
          src="/homeImage.webp"
          alt="Homeimage"
          className="w-full h-auto lg:pt-16"
        />
      </div>
      <div className="flex flex-col space-y-6 md:w-1/2">
        <h6 className="text-lg md:text-xl lg:text-2xl font-medium text-custom_pink md:pt-12 lg:pt-32">
          WELCOME TO AETHON
        </h6>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold text-white">
          Robust, Stable And Secure Web3 Development
          <br className="block md:hidden" /> Solutions
        </h1>
        <p className="text-white lg:text-lg">
          Our Web3 development company helps a diverse clientele build
          result-driven solutions for different industries.
        </p>
        <a
          href="#"
          className="w-48 flex justify-center bg-custom_blue text-white font-bold px-6 py-4 rounded-md"
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
