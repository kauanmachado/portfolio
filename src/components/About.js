import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
            <img className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"src={Image} alt=""/>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-col">
                    <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">Kauan da Silva Machado</h2>
                    <p className="mb-4 text-accent">Software Developer Jr</p>
                    <hr className="mb-8 opacity-5" />
                    <p className="mb-8">
                        
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
