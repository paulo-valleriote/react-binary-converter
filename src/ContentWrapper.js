import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    place-content: center;

    min-height: 94vh;

    scale: 1.3;

    animation: appear 1s 0.2s backwards;

    
    @keyframes appear {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }

        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
`