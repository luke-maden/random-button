import fetchAllAlbums from "./fetchAllAlbums";

async function main() {
  while (!Spicetify?.showNotification || !Spicetify?.Platform.LibraryAPI) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  let albums = await fetchAllAlbums();

  console.log(albums.items[0].name);
  
  // Show message on keybind.
  Spicetify.Mousetrap.bind('R', function() {
    let index = Math.floor(Math.random() * albums.totalLength);
    Spicetify.showNotification(albums.items[index].name);
  });
}

export default main;
