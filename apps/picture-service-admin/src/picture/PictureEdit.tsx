import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PictureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="album" source="album" />
        <TextInput label="name" source="name" />
        <TextInput label="s3Url" source="s3Url" />
      </SimpleForm>
    </Edit>
  );
};
