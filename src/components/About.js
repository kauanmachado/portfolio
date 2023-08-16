import Image from "../assets/img/about.jpeg";

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
                        Olá! Meu nome é Kauan da Silva Machado, tenho 19 anos e sou um entusiasta do desenvolvimento
                         de software, focado especialmente nas tecnologias .NET Core, React, Next e Node.
                          Atualmente, encontro-me no último semestre do Curso Técnico em Informática para Internet no Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul (IFSUL).
                          Desde o início da minha jornada na área da tecnologia, tenho dedicado minha paixão e esforços ao desenvolvimento de soluções inovadoras e eficientes.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
