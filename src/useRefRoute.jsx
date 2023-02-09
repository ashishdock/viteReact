import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const [inputValue1, setInputValue1] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue1;
  }, [inputValue1]);

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      <input
        type="text"
        value={inputValue1}
        onChange={(event) => setInputValue1(event.target.value)}
      />
      <h2>Current Value: {inputValue1}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default App;

/*
By clicking the button,
the input field will get focus.
*/
