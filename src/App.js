import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Practica componentes</h1>
        <h2>Alumno: Ehiran Evenezer Rodriguez Cuellar</h2>
        <div>
          <Button  as='a' href= "https://utd.edu.mx">UTD</Button>
          <Button primary  as='a' href="https://github.com/Eknow">MI GIT</Button>
          <Button primary as='a' href="https://www.facebook.com/ehiran.rodrigue">Red social</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
