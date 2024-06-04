import { Album as TAlbum } from "../api/album/Album";

export const ALBUM_TITLE_FIELD = "name";

export const AlbumTitle = (record: TAlbum): string => {
  return record.name?.toString() || String(record.id);
};
