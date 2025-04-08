import React from "react";
import { LanguageContext } from "./../context/LanguageProvider";

const BodyParagraph = () => {
  const { language } = React.useContext(LanguageContext);

  const engPart1 =
    " It’s a pleasure to have you here! My name is Mauro, and I’m a software developer based in Montevideo, Uruguay. I’m passionate about building functional software solutions and truly enjoy using technology to tackle complex problems. Being a developer allows me to work in a field I love and pay the bills — a true win-win!";
  const engCV = "resume";
  const engPart2 = "If you’d like to learn more about my background and experience, feel free to check out my";
  const engPart3 =
    " it’s available right here for you to explore. Thanks for taking the time to get to know me a little better! Lastly, if you’re curious, feel free to snoop around and connect with me through the social links on the left side of this site.";

  const espPart1 =
    " Es un gusto verte por aquí! Aprovecho la instancia para contarte que me gusta la música y procuro pagar mis cuentas " +
    "desarrollando software, solo o con amigos, en proyectos propios o ajenos, pero siempre con intensidad y la premisa de aprender y descubrir en el proceso.";
  const espPart2 = "Si te interesa, dejo a disposición mi";
    const espPart3 =
    ". Algunas veces puede no estar actualizado pero procuro reunir allí la información de relevancia sobre mi formación y perfil profesional. Finalmente, si lo deseas, puedes husmear y contactarme en las redes sociales que se encuentran disponibles en este sitio.";
  const espCV = "currículum";

  return (
    <div className="body_paragraph">
      <p className="body_paragraph_p">
        <i className="fas fa-terminal fa-0.5x"></i>
        {language === "español" ? engPart1 : espPart1}
      </p>
      <p>{language === "español" ? engPart2 : espPart2}
        <a className="link" href="#">
          <span className="body_paragraph_span">
            {" "}
            {language === "español" ? engCV : espCV}
          </span>
        </a>
        {language === "español" ? engPart3 : espPart3}
      </p>
    </div>
  );
};

export default BodyParagraph;
