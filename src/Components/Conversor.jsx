import { useEffect, useState } from 'react';
;
import { StyledForm } from './styles/ConversorForm';

export function Conversor() {
  const [binaryText, setBinaryText] = useState('0'); // Atualiza o estado do binário digitado
  const [decimalText, setDecimalText] = useState(''); // Atualiza o estado do número convertido

  const binaryTextToDecimal = (e) => { // se tudo estiver correto faz a chamada da operação, se não avisa ao usuário
    e.preventDefault();
    e.stopPropagation();

    if (isBinary()) {
      const result = convertNumber(binaryText)

      return setDecimalText(result)
    }

    return statusDisplay.textContent = 'Please, insert a binary number!'
  };

  const reverseText = (text) => { // Converte para number e deixa ao contrário para realizar a operação
    return text
      .split('')
      .map(Number)
      .reverse();
  }

  const convertNumber = (binaryText) => { // Converte o número para binário
    const reversedText = reverseText(binaryText)

    return reversedText.reduce((acc, current, i) => acc + current * Math.pow(2, i));
  }

  const isBinary = () => { // Define o que aparece para o usuário no campo de status
    const binText = binaryText
    convertButton.disabled = true;
    if (!binaryInput.value) {
      statusDisplay.textContent = 'Waiting...'

      return false
    }

    if (binText.match(/^[0-1]+$/g) === null) {
      statusDisplay.textContent = 'Invalid Value!'
      return false
    }

    convertButton.disabled = false;
    statusDisplay.textContent = 'Typing...'
    return true
  };

  useEffect(() => { // Faz o state ser o mais recente, carrega junto com a página
    isBinary(binaryText)
  }, [binaryText])

  return (
    <StyledForm onSubmit={e => binaryTextToDecimal(e)}>
      <input
        type="text"
        id='binaryInput'
        placeholder='Waiting for a binary number...'
        autoComplete='off'
        onChange={e => {
          setBinaryText(e.target.value)
          isBinary()
        }}
      />

      <button id='convertButton' type='submit'>CONVERT</button>
      <p id='statusDisplay'>{decimalText}</p>
    </StyledForm>
  )
}
