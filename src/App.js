import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import MusicPlayer from './components/musicPlayer/musicPlayer';


function App() {

  const [musicaEscolhida, setMusicaEscolhida] = useState({});
  const [playBtn, setPlayBTn] = useState('btn-player');
  const [pauseBtn, setPauseBtn] = useState('pause-btn');
  const [onBtn, setOnBtn] = useState('sound-on');
  const [mutedBtn, setMutedBtn] = useState('sound-off');
  const [verificar, setVerificar] = useState(false);
  const [verificarSoundMuted, setVerificarSoundMuted] = useState(false);
  const [targetRange, setTargetRange] = useState(50/100);

  function play_pause(){
    setVerificarSoundMuted(false);
    setOnBtn('sound-on');
    setMutedBtn('sound-off');
    if(!verificar){
      setVerificar(true)
      setPlayBTn('btn-player-off');
      setPauseBtn('pause-btn-on');
      musicaEscolhida.musica.play()
    }else if(verificar){
      setVerificar(false)
      setPlayBTn('btn-player');
      setPauseBtn('pause-btn');
      musicaEscolhida.musica.pause()
    }
  };

  function mudarVolume(target){
    let valorVolume = target / 100
    musicaEscolhida.musica.volume = valorVolume;
    if(musicaEscolhida.musica.volume !== 0){
      setOnBtn('sound-on');
      setMutedBtn('sound-off');
    }else if(musicaEscolhida.musica.volume === 0){
      setOnBtn('sound-off');
      setMutedBtn('sound-on');
    }
    return target
  };

  function mutarVolume(valorVolume){
    if(!verificarSoundMuted){
      setVerificarSoundMuted(true);
      musicaEscolhida.musica.volume = 0
      valorVolume = 0;
      console.log(targetRange);
      console.log(verificarSoundMuted);
      setOnBtn('sound-off');
      setMutedBtn('sound-on');
    }
  };

  function desmutarVolume(valorVolume){
    if(verificarSoundMuted){
      setVerificarSoundMuted(false);
      musicaEscolhida.musica.volume = valorVolume;
      console.log(valorVolume);
      console.log(verificarSoundMuted);
      setOnBtn('sound-on');
      setMutedBtn('sound-off');
    }
  };

  return (
    <div className="App">
      <Header />
      
      <Main 
      targetRange={targetRange}
      setVerificar={setVerificar}
      play_pause={play_pause}
      setMusicaEscolhida={setMusicaEscolhida}
      setPauseBtn={setPauseBtn} 
      setPlayBTn={setPlayBTn}/>

      <MusicPlayer 
      onBtn={onBtn}
      mutedBtn={mutedBtn}
      targetRange={targetRange}
      setTargetRange={setTargetRange}
      mutarVolume={mutarVolume}
      desmutarVolume={desmutarVolume}
      mudarVolume={mudarVolume}
      play_pause={play_pause}
      musicaEscolhida={musicaEscolhida} 
      setMusicaEscolhida={setMusicaEscolhida}
      playBtn={playBtn} 
      pauseBtn={pauseBtn}
      setPauseBtn={setPauseBtn} 
      setPlayBTn={setPlayBTn}/>
    </div>
  );
}

export default App;
