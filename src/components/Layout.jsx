import React from "react";
import styled from "styled-components";
import "normalize.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Typography from "../styles/Typography";
import GlobalStyles from "../styles/GlobalStyle";
import stripes from "../assets/images/stripes.svg";

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  background: white url(${stripes});
  background-size: 3000px;
  background-attachment: fixed;

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentTyles = styled.div`
  background: white;
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentTyles>
          <Nav />
          {children}
          <Footer />
        </ContentTyles>
      </SiteBorderStyles>
    </>
  );
};

export default Layout;
