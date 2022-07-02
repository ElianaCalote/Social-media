import styled from "styled-components";

const Signup = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content:center;
align-Items: center;

& > form {
    background-color: ${({ theme }) => theme.elevation_1};
    border-radius: 5px;
   height:400px;
   width:90%;
   max-width: 350px;
   display: flex;
   flex-direction:column;
   justify-content: space-evenly;
   align-items: center;
   box-shadow: ${({theme}) => theme.shadow};
   text-align: center;
   h1 {
    font-family: "Pacifico", cursive;
}

& > button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.3rem;
   width: 90%;
   max-width:250px;
   height: 15%;
    border-radius: 3px;
    appearance:none;
    border: none;
    outline: none;
    color:white;
    background-color: ${({theme}) => theme.primary};
    &:focus,
    &:hover {
        appearance:none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.primaryHover};
    }
    //animation on the button when clicked
    &:active {
        transform: scale(0.90)
    }
    
}

}
`;

export const SignupButton = styled.button `

`;

export default Signup

