import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AlbumWhereInput = {
  description?: StringNullableFilter;
  event?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
