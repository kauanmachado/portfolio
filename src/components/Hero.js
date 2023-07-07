import WomanImg from "../assets/img/banner-woman2.webp";
import Socials from "./Socials";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[80vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg mb-[22px]">
              Olá, Meu nome é Kauan da Silva Machado 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] mb-4">
              Software Developer
            </h1>
            {/* <div className="flex flex-1">
                {skills.map((skill, index)=> {
                    return <div><img src={skill.image} alt=""/></div>

                })}
            </div> */}
            <Socials />
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
