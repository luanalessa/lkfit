import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background:rgb(0, 0, 0);
        font-family: 'Poppins', sans-serif;
        
    
    }

    a{
        all:unset;
    }
`;