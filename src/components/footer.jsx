import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

export const Footer = (props) => {
  return (
    <div>          
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Recurso Educacional Aberto (REA) desenvolvido pelos alunos da 
            <a href="https://univesp.br/" target="_blank">Univesp</a>,
            disponível sob licença <a href={process.env.PUBLIC_URL + '/LICENSE.md'} target="_blank">MIT</a>
          </p>
        </div>
      </div>
    </div>
  );
};
