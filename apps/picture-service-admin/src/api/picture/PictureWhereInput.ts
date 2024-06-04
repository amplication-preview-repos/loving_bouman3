import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PictureWhereInput = {
  album?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  s3Url?: StringNullableFilter;
};
