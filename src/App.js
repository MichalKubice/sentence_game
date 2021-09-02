import './App.css';
import Content from './components/Content/Content';
import Questions from './components/Questions/Questions';
import Sentences from './components/Sentences/Sentences';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Sentence game</p>
      </header>
      <Questions />
      <Content />
      <Sentences />
      <footer className='footer'>
        <p>Michal Kubiče</p>
      </footer>
    </div>
  );
}

export default App;
