import React from "react";
import './main.css'
import albuns from "../../database";

const Main = () => {
    return(
        <main >
            <section className="tela-inicial">
                {/* Apenas Background */}
            </section>
            <section className="selecionar-album">
                <ul className="albuns">
                    {albuns.map( album => (
                        <li className="album">
                            <button className="select-btn">
                                <img src={album.imagem} alt={album.nome} className="img-album"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Main;