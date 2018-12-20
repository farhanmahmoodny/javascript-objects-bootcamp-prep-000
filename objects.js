
var playlist = {
  swizzBeatz: 'Poison',
  nas: 'Hate Me Now'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName[1]
  return playlist
}
removeFromPlaylist(playlist, nas)
