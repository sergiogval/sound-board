const sounds = ['barking', 'burp', 'engineRev', 'insideSpaceShip', 'machineGun', 'stadium', 'taDa', 'tRex', 'typing']
const loop = document.querySelector('#loop')



sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })
  document.getElementById('buttons').
  appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0;
  })
}

// function looping {
//   const nonStop = document.getElementById(loop)
//   if (checked) {
//     song.loop()
//     checked = false
//   } else {
//     return
//   }
// })