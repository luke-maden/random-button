import { AlbumItem, GetContentsResponse } from "./types/platform";

const getRandomAlbum = async (albums: GetContentsResponse<AlbumItem>) =>  {
  let index = Math.floor(Math.random() * albums.totalLength);
  return albums.items[index];
}

export default getRandomAlbum;