import Layout from "./components/Layout";
import "../styling/styling.scss"
import styled from 'styled-components'

export default function Logo() {
    return (
        <div className="logo page">
            <Layout title="Logo" background={true}>
                <div className="document content">
                    <Container>
                        <Header>Logo in .png format</Header>
                        <Image src="../static/KDS_Logo.png"/>
                        <Header>Logo in .svg format</Header>
                        <Image src="../static/KDSsymbol.svg"/>
                    </Container>
                </div>
            </Layout>
        </div>
    );
}

const Container = styled.div`
    display:flex;
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