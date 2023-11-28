/* Imagens */

const killImagem = "./src/img/metallica_killemall.jpg";
const blackImagem = "./src/img/metallica_blackalbumn.jpg";
const rideImagem = "./src/img/metallica_ridethelightning.jpg";

/* Músicas */

// Kill em All
const hitTheLights = "./src/audios/kill-em-all/hit-the-lights.mp3";
const theFourHorsemen = "./src/audios/kill-em-all/the-four-horsemen.mp3";
const motorbreath = "./src/audios/kill-em-all/motorbreath.mp3";
const jumpInTheFire = "./src/audios/kill-em-all/jump-in-the-fire.mp3";
const anesthesiaPullingTeeth = "./audios/kill-em-all/anesthesia-pulling-teeth.mp3";
const whiplash = "./src/audios/kill-em-all/whiplash.mp3";
const phantomLord = "./audios/kill-em-all/phantom-lord.mp3";
const noRemorse = "./src/audios/kill-em-all/no-remorse.mp3";
const seekDestroy = "./src/audios/kill-em-all/seek-n-destroy.mp3";
const metalMillitia = "./src/audios/kill-em-all/metal-militia.mp3";

// Black Album
const enterSandman = "./src/audios/black-album/enter-sandman.mp3";
const sadButTrue = "./src/audios/black-album/sad-but-true.mp3";
const holierThanThou = "./src/audios/black-album/holier-than-thou.mp3";
const theUnforgiven = "./src/audios/black-album/the-unforgiven.mp3";
const whereverIMayRoam = "./src/audios/black-album/wherever-i-may-roam.mp3";
const dontTreadOnMe = "./src/audios/black-album/dont-tread-on-me.mp3";
const throughTheNever = "./src/audios/black-album/through-the-never.mp3";
const nothingElseMatters = "./src/audios/black-album/nothing-else-matters.mp3";
const ofWolfAndMan = "./src/audios/black-album/of-wolf-and-man.mp3";
const myFriendOfMisery = "./src/audios/black-album/my-friend-of-misery.mp3";
const theStruggleWithin = "./src/audios/black-album/the-struggle-within.mp3";

// Ride the Lightning
const fightFireWithFire = "./src/audios/ride-the-lightning/fight-fire-with-fire.mp3";
const rideTheLightning = "./src/audios/ride-the-lightning/ride-the-lightning.mp3";
const forWhomTheBellTolls = "./src/audios/ride-the-lightning/for-whom-the-bell-tolls.mp3";
const fadeToBlack = "./src/audios/ride-the-lightning/fade-to-black.mp3";
const trappedUnderIce = "./src/audios/ride-the-lightning/trapped-under-ice.mp3";
const escapea = "./src/audios/ride-the-lightning/escape.mp3";
const creepingDeath = "./src/audios/ride-the-lightning/creeping-death.mp3";
const theCallOfKtulu = "./src/audios/ride-the-lightning/the-call-of-ktulu.mp3";

const btn = document.querySelector('#btn');

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
            {id: 6, nome: 'Escape', musica: new Audio(escapea)},
            {id: 7, nome: 'Creeping Death', musica: new Audio(creepingDeath)},
            {id: 8, nome: 'The Call of Ktulu', musica: new Audio(theCallOfKtulu)}
        ]
    }
];

const nav = document.querySelector('.nav-albuns')


renderizarAlbuns();