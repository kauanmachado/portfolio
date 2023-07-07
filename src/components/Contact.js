import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contate-me
          </h2>
          <p className="subtitle"></p>
        </div>
        <div className="flex flex-col lg:gap-x-8 items-center">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                    <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 ">{subtitle}</p>
                    
                    </div>
                    
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px] mt-12">
                        <div className="flex flex-col gap-8">
                            <input className="input" type="text" placeholder="Seu nome"/>
                            <input className="input" type="email" placeholder="Seu email"/>
                            <input type="text" className="input" placeholder="Assunto" />
                            <textarea className="textarea" placeholder="Sua mensagem">

                            </textarea>
                            <button className="btn btn-lg bg-accent hover:bg-accent-hover">Enviar mensagem</button>
                        </div>
                    </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
