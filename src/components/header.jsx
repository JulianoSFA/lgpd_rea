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
                  <span>
                    {props.data ? props.data.title : "Loading"}
                  </span>
                </h1>
                <p>
                  <span>
                    {props.data ? props.data.paragraph : "Loading"}
                  </span>
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Começe Agora
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
