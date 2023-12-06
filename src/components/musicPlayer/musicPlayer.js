import React, {useState, useEffect} from "react";
import './musicPlayer.css';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import on from '../../assets/sound_on.png';
import muted from '../../assets/sound_muted.png'

const MusicPlayer = (props) => {

    function propsTarget(target){
        let valorVolume = target / 100;
        props.setTargetRange(valorVolume)
    }

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [bloqueioControles, setBloqueioControles] = useState("bloqueio-controles")
    
    useEffect(() => {
        if(props.musicaEscolhida.musica) {
        const updateProgress = () => {
            setCurrentTime(props.musicaEscolhida.musica.currentTime);
            setDuration(props.musicaEscolhida.musica.duration);

            if('musica' in props.musicaEscolhida){
                setBloqueioControles('bloqueio-off');
            }

            if(props.musicaEscolhida.musica.currentTime >= props.musicaEscolhida.musica.duration){
                props.setMusicaEscolhida({});
                setCurrentTime(0)
                setBloqueioControles('bloqueio-controles')
            }
        };

        props.musicaEscolhida.musica.addEventListener('timeupdate', updateProgress);

        return () => {
        props.musicaEscolhida.musica.removeEventListener('timeupdate', updateProgress);
        };
      }
    }, [props.musicaEscolhida.musica]);

    const handleChange = (event) => {
        const newValue = event;
        const newTime = (newValue * duration) / 100;
        props.musicaEscolhida.musica.currentTime = newTime;
    };

    return(
        <section className="music-player">
            <div className={bloqueioControles}>
                {/*Apenas bloqueia os controles quando não á musicas tocando.*/}
            </div>
            <input
                className="music-range"
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={(e) => {handleChange(e.target.value)
                }}
            />
            <div className="on-off">
                <button onClick={props.play_pause} className={props.playBtn}><img src={play} alt="Play Icon"/></button>
                <button onClick={props.play_pause} className={props.pauseBtn}><img src={pause} alt="Pause Icon"/></button>
                {(() => {
                    let data = new Date(null);
                    data.setSeconds(props.musicaEscolhida.duracao)
                    let duracaoMinutos = data.getUTCMinutes();
                    let duracaoSegundos = data.getSeconds();
                    let segundosFormatados = duracaoSegundos < 10 ? `0${duracaoSegundos}` : duracaoSegundos;
                    
                    let dataCurrentTime = new Date(null);
                    dataCurrentTime.setSeconds(currentTime)
                    let duracaoMinutosCurrentTime = dataCurrentTime.getUTCMinutes();
                    let duracaoSegundosCurrentTime = dataCurrentTime.getSeconds();
                    let segundosFormatadosCurrentTime = duracaoSegundosCurrentTime < 10 ? `0${duracaoSegundosCurrentTime}` : duracaoSegundosCurrentTime;

                    return (
                        <span>{'musica' in props.musicaEscolhida ? `${duracaoMinutosCurrentTime}:${segundosFormatadosCurrentTime} / ${duracaoMinutos}:${segundosFormatados}`: ''}</span>
                    );
                })()}
            </div>
            <div className="musica-escolhida">
                <img src={props.musicaEscolhida.imagem} alt={props.musicaEscolhida.albumNome} className="imagem-musica-escolhida"/>
                <div className="info-musica-escolhida">
                    <h3>{props.musicaEscolhida.musicaNome}</h3>
                    <span>{ 'albumNome' in props.musicaEscolhida ? `${props.musicaEscolhida.albumNome} • ${props.musicaEscolhida.ano}` : 'Não há nada tocando'}</span>
                </div>
            </div>
            <div className="controles-audio">
                <button onClick={() => props.mutarVolume(props.targetRange)} className={`btn-player ${props.onBtn}`}><img src={on} alt="Sound Icon"/></button>
                <button onClick={() => props.desmutarVolume(props.targetRange)} className={`btn-player ${props.mutedBtn}`}><img src={muted} alt="Sound Icon"/></button>
                <input type="range" min="0" max="100" defaultValue={50} className="volume-range" onChange={(e) => {props.mudarVolume(e.target.value)
                propsTarget(e.target.value)}}/>
            </div>
        </section>
    );
    
};

export default MusicPlayer;