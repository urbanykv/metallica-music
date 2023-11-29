/* Imagens */

import killImagem from "./img/metallica_killemall.jpg";
import blackImagem from "./img/metallica_blackalbumn.jpg";
import rideImagem from "./img/metallica_ridethelightning.jpg";

/* Músicas */

// Kill em All
import hitTheLights from "./audios/kill-em-all/hit-the-lights.mp3";
import theFourHorsemen from "./audios/kill-em-all/the-four-horsemen.mp3";
import motorbreath from "./audios/kill-em-all/motorbreath.mp3";
import jumpInTheFire from "./audios/kill-em-all/jump-in-the-fire.mp3";
import anesthesiaPullingTeeth from "./audios/kill-em-all/anesthesia-pulling-teeth.mp3";
import whiplash from "./audios/kill-em-all/whiplash.mp3";
import phantomLord from "./audios/kill-em-all/phantom-lord.mp3";
import noRemorse from "./audios/kill-em-all/no-remorse.mp3";
import seekDestroy from "./audios/kill-em-all/seek-n-destroy.mp3";
import metalMillitia from "./audios/kill-em-all/metal-militia.mp3";

// Black Album
import enterSandman from "./audios/black-album/enter-sandman.mp3";
import sadButTrue from "./audios/black-album/sad-but-true.mp3";
import holierThanThou from "./audios/black-album/holier-than-thou.mp3";
import theUnforgiven from "./audios/black-album/the-unforgiven.mp3";
import whereverIMayRoam from "./audios/black-album/wherever-i-may-roam.mp3";
import dontTreadOnMe from "./audios/black-album/dont-tread-on-me.mp3";
import throughTheNever from "./audios/black-album/through-the-never.mp3";
import nothingElseMatters from "./audios/black-album/nothing-else-matters.mp3";
import ofWolfAndMan from "./audios/black-album/of-wolf-and-man.mp3";
import myFriendOfMisery from "./audios/black-album/my-friend-of-misery.mp3";
import theStruggleWithin from "./audios/black-album/the-struggle-within.mp3";

// Ride the Lightning
import fightFireWithFire from "./audios/ride-the-lightning/fight-fire-with-fire.mp3";
import rideTheLightning from "./audios/ride-the-lightning/ride-the-lightning.mp3";
import forWhomTheBellTolls from "./audios/ride-the-lightning/for-whom-the-bell-tolls.mp3";
import fadeToBlack from "./audios/ride-the-lightning/fade-to-black.mp3";
import trappedUnderIce from "./audios/ride-the-lightning/trapped-under-ice.mp3";
import escape from "./audios/ride-the-lightning/escape.mp3";
import creepingDeath from "./audios/ride-the-lightning/creeping-death.mp3";
import theCallOfKtulu from "./audios/ride-the-lightning/the-call-of-ktulu.mp3";


const albuns = [
    {
        id: 1,
        nome: "Kill 'Em All",
        imagem: killImagem,
        ano: new Date("1983").getFullYear(),
        songs: [
            {id: 1, nome: 'Hit the Lights', musica: new Audio(hitTheLights)},
            {id: 2, nome: 'The Four Horsemen', musica: new Audio(theFourHorsemen)},
            {id: 3, nome: 'Motorbreath', musica: new Audio(motorbreath)},
            {id: 4, nome: 'Jump in the Fire', musica: new Audio(jumpInTheFire)},
            {id: 5, nome: 'Anesthesia Pulling Teeth', musica: new Audio(anesthesiaPullingTeeth)},
            {id: 6, nome: 'Whiplash', musica: new Audio(whiplash)},
            {id: 7, nome: 'Phantom Lord', musica: new Audio(phantomLord)},
            {id: 8, nome: 'No Remorse', musica: new Audio(noRemorse)},
            {id: 9, nome: 'Seek & Destroy', musica: new Audio(seekDestroy)},
            {id: 10, nome: 'MetalMillitia', musica: new Audio(metalMillitia)},
        ]
    },
    {
        id: 2,
        nome: 'Metallica (Black Album)',
        imagem: blackImagem,
        ano: new Date('1991').getFullYear(),
        songs: [
            {id: 1, nome: 'Enter Sandman', musica: new Audio(enterSandman)},
            {id: 2, nome: 'Sad but True', musica: new Audio(sadButTrue)},
            {id: 3, nome: 'Holier Than Thou', musica: new Audio(holierThanThou)},
            {id: 4, nome: 'The Unforgiven', musica: new Audio(theUnforgiven)},
            {id: 5, nome: 'Wherever I May Roam', musica: new Audio(whereverIMayRoam)},
            {id: 6, nome: "Don't Tread on Me", musica: new Audio(dontTreadOnMe)},
            {id: 7, nome: 'Through the Never', musica: new Audio(throughTheNever)},
            {id: 8, nome: 'Nothing Else Matters', musica: new Audio(nothingElseMatters)},
            {id: 9, nome: 'Of Wolf and Man', musica: new Audio(ofWolfAndMan)},
            {id: 10, nome: 'My Friend od Misery', musica: new Audio(myFriendOfMisery)},
            {id: 11, nome: 'The Struggle Within', musica: new Audio(theStruggleWithin)}
        ]
    },
    {
        id: 3,
        nome: 'Ride the Lightning',
        imagem: rideImagem,
        ano: new Date('1984').getFullYear(),
        songs: [
            {id: 1, nome: 'Fight Fire With Fire', musica: new Audio(fightFireWithFire)},
            {id: 2, nome: 'Ride the Lightning', musica: new Audio(rideTheLightning)},
            {id: 3, nome: 'For Whom the Bell Tolls', musica: new Audio(forWhomTheBellTolls)},
            {id: 4, nome: 'Fade to Black', musica: new Audio(fadeToBlack)},
            {id: 5, nome: 'Trapped Under Ice', musica: new Audio(trappedUnderIce)},
            {id: 6, nome: 'Escape', musica: new Audio(escape)},
            {id: 7, nome: 'Creeping Death', musica: new Audio(creepingDeath)},
            {id: 8, nome: 'The Call of Ktulu', musica: new Audio(theCallOfKtulu)}
        ]
    }
];

export default albuns;