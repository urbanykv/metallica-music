import React, { useState } from "react";
import './main.css'
import albuns from "../../database";
import play from '../../assets/play.svg'

const Main = props => {

    const [albunsAbertos, setAlbunsAbertos] = useState({});

    console.log(props.verificar);

    function musicaEscolhida(musica, album){

        props.setMusicaEscolhida(() => ({
            musicaNome: musica.nome,
            play: playMusica(),
            pause: 
            pauseMusica(), 
            duracao: musica.musica.duration,
            volume: musica.musica.volume,
            albumNome: album.nome,
            ano: album.ano,
            imagem: album.imagem
        }))
    }

    function abrirAlbum(albumId) {
        setAlbunsAbertos(prevState => {

            const novoEstado = {};

            novoEstado[albumId] = !prevState[albumId];
    
            Object.keys(prevState).forEach(id => {
                if (id !== albumId) {
                    novoEstado[id] = false;
                }
            });
    
            return novoEstado;
        });
    }

    return(
        <main >
            <section className="tela-inicial">
                {/* Apenas Background */}
            </section>
            <section style={albunsAbertos['kill'] || albunsAbertos['ride'] || albunsAbertos['black'] ? {height: 1200 + 'px'}: {height: 650 + 'px'}}  className="selecionar-album">
                <ul className="albuns">
                    {albuns.map( album => (
                        <li className="album" key={album.id}>
                            <button className="select-btn" onClick={() => abrirAlbum(album.id_string)}>
                                <img src={album.imagem} alt={album.nome} className="img-album"/>
                            </button>
                        </li>
                    ))}
                </ul>
                <div  className="musicas">
                    {albuns.map( album => {
                        return(<div className={`music ${albunsAbertos[album.id_string] ? 'album-aberto' : ''}`} key={album.id}>
                            {album.songs.map( musica => (
                                <div className="nome-musica" onClick={() => {musicaEscolhida(musica, album)
                                    playMusica()}} key={musica.id}>
                                    <div className="nome-id">
                                        <span className="nmr-musica">{musica.id}</span>
                                        <button className="btn-playlist"><img src={play} alt="play"/></button>
                                        <span className="musica-nome">{musica.nome}</span>
                                    </div>
                                    <div className="duracao">
                                        {(() => {
                                            let data = new Date(null);
                                            data.setSeconds(musica.musica.duration)
                                            let duracaoMinutos = data.getUTCMinutes();
                                            let duracaoSegundos = data.getSeconds();
                                            let segundosFormatados = duracaoSegundos < 10 ? `0${duracaoSegundos}` : duracaoSegundos;

                                            parseInt(segundosFormatados)

                                            return (
                                                <span>{`${duracaoMinutos.toString()}:${segundosFormatados}`}</span>
                                            );
                                        })()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )})}
                </div>
            </section>
        </main>
    );
};

export default Main;