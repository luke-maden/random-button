import fetchAllAlbums from "./fetchAllAlbums";

async function main() {
  while (!Spicetify?.showNotification || !Spicetify?.Platform.LibraryAPI) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  let albums = await fetchAllAlbums();

  console.log(albums.items[0].name);
  
  // Sets current page to a random uri from albums
  Spicetify.Mousetrap.bind('R', function() {
    let index = Math.floor(Math.random() * albums.totalLength);
    Spicetify.Platform.History.push("/album/" + albums.items[index].uri.split(':')[2]); // parses string for relevant part of uri
  });
}

export default main;
