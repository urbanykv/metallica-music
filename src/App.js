import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import MusicPlayer from './components/musicPlayer/musicPlayer';


function App() {

  const [musicaEscolhida, setMusicaEscolhida] = useState({});

  const [playBtn, setPlayBTn] = useState('btn-player');
  const [pauseBtn, setPauseBtn] = useState('pause-btn');
  let verificar = false;
  function play_pause(){
    if(!verificar){
      setPlayBTn('btn-player-off');
      setPauseBtn('pause-btn-on');
      console.log(verificar);
      verificar = true;
    }else if(verificar){
      setPlayBTn('btn-player');
      setPauseBtn('pause-btn');
      console.log(verificar);
      verificar = false;
    }
  };

  return (
    <div className="App">
      <Header />
      
      <Main 
      verificar={verificar}
      play_pause={play_pause}
      setMusicaEscolhida={setMusicaEscolhida} 
      setPauseBtn={setPauseBtn} 
      setPlayBTn={setPlayBTn}/>

      <MusicPlayer 
      play_pause={play_pause}
      musicaEscolhida={musicaEscolhida} 
      playBtn={playBtn} 
      pauseBtn={pauseBtn}
      setPauseBtn={setPauseBtn} 
      setPlayBTn={setPlayBTn}/>
    </div>
  );
}

export default App;
