import styled from "styled-components";


export const Container = styled.div`
    background-color: #494C49 ;
    color: #31C311;
    min-height: 100vh;
`;
export const Area = styled.div `
    margin:auto;
    max-width: 980px;
    padding:30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align:center;
    margin-bottom:30px
`
export const Background = styled.div`
    background-color: #666A64 ;
    color: #FFF;
    min-height: 100vh;
    min-width: 100vh;
    margin:0px;
    padding:0px;
`;
export const ScreenWarning = styled.div`
    text-align:center;
`;
export const Fotolist = styled.div`
    display:grid;
    grid-template-columns:repeat (2,1fr);
    gap:10px; 
`;
export const UploadForm =styled.form`
    margin-top:20px;
    background-color: #4F4C4F;
    align-itens:center;


`;
export const Area1 = styled.div `
    margin:auto;
    max-width: 400px;
    padding-top:30px;
    padding:30px 0;
    align-itens:center;
    background-color :#4F4C4F ;
    border-radius:20px;
    display: flex;
     align-items: center;
     justify-content: center;
    form{
        background-color:#4F4C4F ;
        align-itens:center;
    }
`;;