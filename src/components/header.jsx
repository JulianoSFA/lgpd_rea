import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 intro-text">
                <h1>
                  <span className="title-text">
                    {props.data ? props.data.title : "Carregando"}
                  </span>
                </h1>
                <p>
                  <span>
                    {props.data ? props.data.paragraph : "Carregando"}
                  </span>
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Comece Agora
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
