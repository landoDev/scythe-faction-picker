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