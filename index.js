// document.getElementById("one").addEventListener('click',function(){
//     let audio = document.getElementById("baby")
//     audioPlay(audio);
// })

// document.getElementById("two").addEventListener('click',function(){
//     let audio = document.getElementById("water")
//     audioPlay(audio);
// })

// document.getElementById("three").addEventListener('click',function(){
//     let audio = document.getElementById("got")
//     audioPlay(audio);
// })

// document.getElementById("four").addEventListener('click',function(){
//     let audio = document.getElementById("clapping")
//     audioPlay(audio);
// })

// document.getElementById("five").addEventListener('click',function(){
//     let audio = document.getElementById("thunder")
//     audioPlay(audio);
// })

// document.getElementById("six").addEventListener('click',function(){
//     let audio = document.getElementById("cheering")
//     audioPlay(audio);
// })
// function audioPlay(audio){
//     if(audio.paused)
//     audio.play()
//     else{
//         audio.pause();
//         audio.currentTime = 0;
//     }
// }

const sounds = ['baby','water','got','clapping','thunder','cheering']
const btn = document.querySelectorAll("button")
console.log(btn[0])
for(let i=0;i<sounds.length;i++){
    btn[i].addEventListener('click',function(){
        var x = document.getElementById(sounds[i]);
        stopAudio()
        x.play()
    })
}

function stopAudio(){
    sounds.forEach(e=>{
        const song = document.getElementById(e)
        song.pause()
        song.currentTime = 0;
    })
}