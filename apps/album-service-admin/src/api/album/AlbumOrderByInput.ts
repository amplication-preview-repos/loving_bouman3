import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  event?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
