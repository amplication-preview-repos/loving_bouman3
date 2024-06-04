import { Picture as TPicture } from "../api/picture/Picture";

export const PICTURE_TITLE_FIELD = "name";

export const PictureTitle = (record: TPicture): string => {
  return record.name?.toString() || String(record.id);
};
