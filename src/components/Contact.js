import { FiMail, FiPhone } from "react-icons/fi";


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

                <div className="flex flex-col lg:flex-row gap-x-4">
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                  <FiMail />
                  </div>
                    <div>
                    <h4 className="font-body text-xl mb-1">Deseja enviar um email?</h4>
                    <p className="mb-1 text-success">Me envie um e-mail kauan.smachado0@gmail.com</p>
                    </div>
                    
                </div>
                <div className="flex flex-col lg:flex-row gap-x-4">
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                  <FiPhone/>
                  </div>
                    <div>
                    <h4 className="font-body text-xl mb-1">Deseja enviar uma mensagem?</h4>
                    <a href="https://w.app/kauanmachado">
                    <p className="mb-1 text-success underline">Clique aqui para me chamar no WhatsApp</p>
                    </a>
                    </div>
                    
                </div>
            
          </div>
          


        </div>
      </div>
    </section>
  );
};

export default Contact;
