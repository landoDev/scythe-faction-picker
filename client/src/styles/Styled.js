import styled from 'styled-components';

export const ActionHomeDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10%;

    @media(max-width: 600px){
        flex-direction: column;
        a {
            margin: 5% 0;
        }
    }
`;

export const CampaignFormDiv = styled.div`

    display: flex;
    flex-direction: column;
    .title {
        color: whitesmoke;
        margin-top: 5%;
        text-shadow: 2px 2px 2px black;
        font-size: 4rem;
    }
  

    .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 5%;
    width: 50%;
    padding: 2% 0;
    border: 2px solid black;
    background-color: #4f666a;
    box-shadow: 1px 2.5px black;
    .form-text {
        color: whitesmoke;
        text-shadow: 2px 2px 2px black;
        font-size: 1rem;
    }
    form {
        display: flex;
        justify-content: space-evenly;
        width: 80%;
        input {
            width: 60%;
        }
    }

    @media(max-width: 600px){
        margin: 0 auto;
        width: 90%;
        padding: 5%;
        form {
            flex-direction: column;
            input {
                width: 100%;
                margin-bottom: 5%;
            }
        }
    }
    }
    @media(max-width: 600px){
        .title{
            font-size: 2.5rem;
            margin: 5% 0;
        }
    }

`;

export const FactionFormDiv = styled.div`

    display: flex;
    flex-direction: column;
    .title {
        color: whitesmoke;
        margin-top: 5%;
        text-shadow: 2px 2px 2px black;
        font-size: 4rem;
    }
  

    .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 5%;
    width: 50%;
    padding: 2% 0;
    border: 2px solid black;
    background-color: #4f666a;
    box-shadow: 1px 2.5px black;
    .form-text {
        color: whitesmoke;
        text-shadow: 2px 2px 2px black;
        font-size: 1rem;
    }
    form {
        display: flex;
        justify-content: space-evenly;
        width: 80%;
        input {
            width: 60%;
        }
    }

    @media(max-width: 600px){
        margin: 0 auto;
        width: 90%;
        padding: 5%;
        form {
            flex-direction: column;
            input {
                width: 100%;
                margin-bottom: 5%;
            }
        }
    }
    }
    @media(max-width: 600px){
        .title{
            font-size: 2.5rem;
            margin: 5% 0;
        }
    }

`;

export const NavbarStyle = styled.nav`
    display: flex;
    background-color: black;
    padding: 2%;
    justify-content: space-between;
    a {
        margin-right: 5%;
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: underline;
        color: red;
    }
    .github {
        margin-left: 1.5%;
    }
`;

export const FactionCtaDiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    .faction-cta{
        width: 50%;
        margin: 5% 0;
    }

    @media(max-width: 600px){
        flex-direction: column;
    }
`;

export const PlayerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 5%;
    width: 50%;
    padding: 2% 0;
    border: 2px solid black;
    background-color: #4f666a;
    box-shadow: 1px 2.5px black;
    h3{
        color: whitesmoke;
        text-shadow: 2px 2px 2px black;
        font-size: 1.5rem;
    }
    p {
        color: whitesmoke;
        text-shadow: 2px 2px 2px black;
        font-size: 1rem;
    }
    @media(max-width: 600px){
        width: 90%;
    }
`;


export const FindFormDiv = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 15%;
    .find-title {
        color: whitesmoke;
        margin-top: 5%;
        text-shadow: 2px 2px 2px black;
        font-size: 4rem;
    }
  

    .find-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 50%;
    padding: 2% 0;
    border: 2px solid black;
    background-color: #4f666a;
    box-shadow: 1px 2.5px black;
    .form-text {
        color: whitesmoke;
        text-shadow: 2px 2px 2px black;
        font-size: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        label {
            align-self: flex-start;
            margin-left: 2%;
        }
        .action-div {
            display: flex;
            justify-content: space-around;
            input {
                width: 60%;
            }
            button {
                width: 30%;
            }
        }
    }

    @media(max-width: 600px){
        margin: 0 auto;
        width: 90%;
        padding: 5%;
        form {
            flex-direction: column;
            input {
                width: 100%;
                margin-bottom: 5%;
            }
        }
    }
    }
    @media(max-width: 600px){
        .title{
            font-size: 2.5rem;
            margin: 5% 0;
        }
    }

`;