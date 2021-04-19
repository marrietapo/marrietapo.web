import React from 'react';


const BodyParagraph = () => {
    return (
      <div className="body_paragraph">
        <p className="body_paragraph_p">
          <i class="fas fa-terminal fa-0.5x"></i>
          <span> </span>
          Es un gusto verte por aquí! Aprovecho la instancia para contarte que
          procuro pagar mis cuentas desarrollando software, solo o con amigos,
          en proyectos propios o ajenos, pero siempre con intensidad y la premisa de aprender
          y descubrir en el proceso. Si te interesa, dejo a disposición mi
          <a className="link" href="#">
            <span className="body_paragraph_span link"> currículum</span>
          </a>
          , aunque algunas veces pueda no estar actualizado procuro reunir
          allí la información de relevancia sobre mi formación y perfil
          profesional. Finalmente, si lo deseas, puedes husmear y contactarme en
          las redes sociales que se encuentran disponibles en este sitio.
        </p>
      </div>
    );
}

export default BodyParagraph;
