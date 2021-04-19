import React from "react";
import { LanguageContext } from "./../context/LanguageProvider";

const BodyParagraph = () => {
  const { language } = React.useContext(LanguageContext);

  const engPart1 =
    " It's nice to see you here! I take this opportunity to tell you that I try to pay my bills developing software, alone or with friends, on my own or someone else's projects, but always with intensity and the premise of learning and discovering in the process.";
  const engCV = "resume";
  const engPart2 = "If you are interested, I leave my";
  const engPart3 =
    " available, although sometimes it may not be up to date, I try to gather relevant information about my training and professional profile there. Finally, if you wish, you can snoop and contact me on the social networks that are available on this site.";


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
