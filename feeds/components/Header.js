import styled from "styled-components";

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
        <HeaderContainer>
            <Title>Community feed</Title>
        </HeaderContainer>

    )
}
export default Header;