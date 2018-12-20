
var playlist = {
  swizzBeatz: 'Poison',
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  console.log(delete playlist.artistName)
}
