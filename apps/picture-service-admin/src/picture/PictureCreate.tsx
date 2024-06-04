import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PictureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="album" source="album" />
        <TextInput label="name" source="name" />
        <TextInput label="s3Url" source="s3Url" />
      </SimpleForm>
    </Create>
  );
};
