import { SortOrder } from "../../util/SortOrder";

export type PictureOrderByInput = {
  album?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  s3Url?: SortOrder;
  updatedAt?: SortOrder;
};
