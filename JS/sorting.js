let musics = [{
    id: 1,
    title: "Sarseporde",
    singer: "Andy",
    url: "https://www.irantunez.com/music/andy-sar-sepordeh"
},
{
    id: 2,
    title: "majara",
    singer: "SHahab Tiam",
    url: "https://www.teh-music.co/shahab-tiam-maajara/"
},
{
    id: 3,
    title: "bigharar",
    singer: "Googoosh",
    url: "https://soundcloud.com/amirkofficial/googoosh-bigharar"
}

];


console.log(musics.sort((music1, music2) => music1.singer.localeCompare(music2.title)));

console.log(musics.sort((music1, music2) => music2.id - music1.id));