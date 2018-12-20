
var playlist = {
  swizzBeatz: 'Poison',
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  const playlist2 = delete playlist.artistName
  return playlist2
}
