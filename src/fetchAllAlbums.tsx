import { AlbumItem, GetContentsResponse } from "./types/platform";

async function fetchAllAlbums(){
  const result = Spicetify.Platform.LibraryAPI.getContents({
    filters: ["0"], // albums filter id
    offset: 0,
    limit: 1000000, // arbitrarily large number
    flattenTree: true,
  }) as GetContentsResponse<AlbumItem>

  // if(!result.items?.length){
  //   throw new Error("No albums found");
  // }

  return result;
}

export default fetchAllAlbums;