import { Layout } from "../components";
import styled from "styled-components";

import "../styling/callForPresentationsStyles.scss"; // This line must be included, or else main menu will break. 
import "../styling/logoStyles.scss";

const Logo = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Header = styled.h1`
    text-align: left;
  `;

  const Image = styled.img`
    width: 200px;
  `;

  return (
    <div className="logo page">
      <Layout title="Logo" background={true}>
        <div className="document content">
          <Container>
            <Header>Logo in .png format</Header>
            <Image src="../static/KDS_Logo_2021.png" />
            <Header>Logo in .svg format</Header>
            <Image src="../static/KDSsymbol.svg" />
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default Logo;
