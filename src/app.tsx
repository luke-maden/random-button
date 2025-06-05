import fetchAllAlbums from "./fetchAllAlbums";
import getRandomAlbum from "./getRandomAlbum"

async function main() {
  while (!Spicetify?.showNotification || !Spicetify?.Platform.LibraryAPI) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  let albums = fetchAllAlbums();

  console.log((await albums).items[0].name);
  
  // Show message on keybind.
  Spicetify.Mousetrap.bind('R', async function(randAlbum = getRandomAlbum()) {
    Spicetify.showNotification((await albums).items[0].name);
  });
}

export default main;
