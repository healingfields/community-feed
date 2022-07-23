import styled from "styled-components";
import Head from "next/head";

const HeaderContainer = styled.div`
    background-color:orange;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size:2rem;
    color:white;
    `;

const Title = styled.h1`
    height:64px;
    `;


function Header() {
    return (
        <>
            <Head>
                <title>Community feed</title>
                <meta name="description" content="A community feed build with nextJs" />
            </Head>
            <HeaderContainer>
                <Title>Community feed</Title>
            </HeaderContainer>
        </>

    )
}
export default Header;