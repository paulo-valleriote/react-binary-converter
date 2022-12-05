import styled from 'styled-components'

export const StyledForm = styled.form`
    // estilização geral do form
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    // estilização do input de texto
    input[type='text'] {
        width: 50%;
        height: 56px;

        padding: 12px;
        margin-top: 32px;

        color: #329FC7;
        font-weight: bold;

        background-color: #464964;

        border: none;
        border-radius: 4px;

        outline: none;

        text-align: center;

        transition: 0.4s;

        z-index: 2;

        &::placeholder {
            color:#A8AAB8;
        }
    }
    
    // estilização do button
    button {
        margin-bottom: 24px;

        width: 45%;
        padding: 8px;

        background-color: #329FC7;
        border: none;

        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        font-weight: bold;
        letter-spacing: 0.5px;

        cursor: pointer;

        color: #FFFFFF;

        opacity: 0.8;

        transition: all 0.3s;

        &:hover {
            color: white;

            background-color: #329FC7;

            box-shadow: 0 0 32px #329FC7;

            opacity: 1;
        }

        &:disabled {
          color: #A8AAB8;
          
          background-color:  #404363;
          box-shadow: none;

          opacity: 0.5;

          cursor: not-allowed;
        }
    }

    // estilização do campo de status
    p {
        margin-top: 24px;

        color: #00C8F9;
        font-size: 18px;
        text-shadow: 0 0 18px #00D9F8;
    }
`