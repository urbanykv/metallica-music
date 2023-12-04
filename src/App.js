import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import MusicPlayer from './components/musicPlayer/musicPlayer';
import on from './assets/sound_on.png';
import muted from './assets/sound_muted.png'

function App() {

  const [musicaEscolhida, setMusicaEscolhida] = useState({});
  const [playBtn, setPlayBTn] = useState('btn-player');
  const [pauseBtn, setPauseBtn] = useState('pause-btn');
  const [soundMuted, setSoundMuted] =useState(on);
  const [verificar, setVerificar] = useState(false);
  const [verificarSoundMuted, setVerificarSoundMuted] = useState(false);
  console.log(musicaEscolhida);

  function play_pause(){
    if(!verificar){
      setVerificar(true)
      setPlayBTn('btn-player-off');
      setPauseBtn('pause-btn-on');
      console.log(verificar);
      musicaEscolhida.musica.play()
    }else if(verificar){
      setVerificar(false)
      setPlayBTn('btn-player');
      setPauseBtn('pause-btn');
      console.log(verificar);
      musicaEscolhida.musica.pause()
    }
  };

  function mudarVolume(target){
    let valorVolume = target / 100
    musicaEscolhida.musica.volume = valorVolume;
    console.log(valorVolume);
    return target
  }

  function mutarVolume(valorVolume){
    if(!verificarSoundMuted){
      setVerificarSoundMuted(true);
      musicaEscolhida.musica.volume = valorVolume
      setSoundMuted(on);
      console.log(verificarSoundMuted);
      console.log(musicaEscolhida.musica.volume);
    }else if(verificarSoundMuted){
      musicaEscolhida.musica.volume = 0;
      setSoundMuted(muted);
      setVerificarSoundMuted(false);
      console.log(verificarSoundMuted);
      console.log(musicaEscolhida.musica.volume);
    }
  }

  return (
    <div className="App">
      <Header />
      
      <Main 
      setVerificar={setVerificar}
      play_pause={play_pause}
      setMusicaEscolhida={setMusicaEscolhida}
      setPauseBtn={setPauseBtn} 
      setPlayBTn={setPlayBTn}/>

      <MusicPlayer 
      soundMuted={soundMuted}
      mutarVolume={mutarVolume}
      mudarVolume={mudarVolume}
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
