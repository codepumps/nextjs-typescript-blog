import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Nunito Sans",sans-serif;
        font-weight:400;
        line-height:1.618;
    }

    html,body,#root{
        max-height:100vh;
        max-width:100vw;
        width:100%;
        height:100%;
    }
    a{
        text-decoration:none;
    }

`;
