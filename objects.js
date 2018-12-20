
var playlist = {
  swizzBeatz: 'Poison',
  nas: 'Hate Me Now'
}

function updatPlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
