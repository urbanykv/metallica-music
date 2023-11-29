import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import MusicPlayer from './components/musicPlayer/musicPlayer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MusicPlayer />
    </div>
  );
}

export default App;
