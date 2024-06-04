/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PictureWhereUniqueInput } from "./PictureWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PictureUpdateInput } from "./PictureUpdateInput";

@ArgsType()
class UpdatePictureArgs {
  @ApiProperty({
    required: true,
    type: () => PictureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PictureWhereUniqueInput)
  @Field(() => PictureWhereUniqueInput, { nullable: false })
  where!: PictureWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PictureUpdateInput,
  })
  @ValidateNested()
  @Type(() => PictureUpdateInput)
  @Field(() => PictureUpdateInput, { nullable: false })
  data!: PictureUpdateInput;
}

export { UpdatePictureArgs as UpdatePictureArgs };
