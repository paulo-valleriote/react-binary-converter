import styled from 'styled-components'

export const StyledConversor = styled.section`
    // estilização geral da section
    display: flex;
    flex-direction: column;

    place-content: center;

    min-height: 94vh;
    
    // estilização do título
    h1 {
        font-size: 32px;

        color: #329FC7;
    }

    // estilização do sub-titulo
    h3 {
        color: #2B6588;
    }
    
    // estilização da div
    div {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }
`