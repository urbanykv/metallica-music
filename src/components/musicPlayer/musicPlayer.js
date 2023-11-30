import React, { useState } from "react";
import './musicPlayer.css';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import on from '../../assets/sound_on.png';
import muted from '../../assets/sound_muted.png';

const MusicPlayer = (props) => {
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
                <button className="btn-player sound-on"><img src={on} alt="Sound Icon"/></button>
                <button className="btn-player sound-off"><img src={muted} alt="Muted Icon"/></button>
                <input type="range" min="0" max="100" defaultValue="50" className="volume-range"/>
            </div>
        </section>
    );
};

export default MusicPlayer;