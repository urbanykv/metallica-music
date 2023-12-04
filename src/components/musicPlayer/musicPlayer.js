import React, { useState } from "react";
import './musicPlayer.css';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';


const MusicPlayer = (props) => {
    
    const [targetRange, setTargetRange] = useState(50/100);

    function propsTarget(target){
        setTargetRange(target)
    }

    return(
        <section className="music-player">
            <div className="on-off">
                <button onClick={props.play_pause} className={props.playBtn}><img src={play} alt="Play Icon"/></button>
                <button onClick={props.play_pause} className={props.pauseBtn}><img src={pause} alt="Pause Icon"/></button>
            </div>
            <div className="musica-escolhida">
                <img src={props.musicaEscolhida.imagem} alt={props.musicaEscolhida.albumNome} className="imagem-musica-escolhida"/>
                <div className="info-musica-escolhida">
                    <h3>{props.musicaEscolhida.musicaNome}</h3>
                    <span>{`${props.musicaEscolhida.albumNome} • ${props.musicaEscolhida.ano}`}</span>
                </div>
            </div>
            <div className="controles-audio">
                <button onClick={() => props.mutarVolume(targetRange)} className="btn-player sound-on"><img src={props.soundMuted} alt="Sound Icon"/></button>
                <input type="range" min="0" max="100" defaultValue="50" className="volume-range" onChange={(e) => {props.mudarVolume(e.target.value)
                propsTarget(e.target.value)}}/>
            </div>
        </section>
    );
    
};

export default MusicPlayer;