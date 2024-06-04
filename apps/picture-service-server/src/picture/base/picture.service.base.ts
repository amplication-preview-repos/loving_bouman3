/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Picture as PrismaPicture } from "@prisma/client";

export class PictureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PictureCountArgs, "select">): Promise<number> {
    return this.prisma.picture.count(args);
  }

  async pictures<T extends Prisma.PictureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureFindManyArgs>
  ): Promise<PrismaPicture[]> {
    return this.prisma.picture.findMany<Prisma.PictureFindManyArgs>(args);
  }
  async picture<T extends Prisma.PictureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureFindUniqueArgs>
  ): Promise<PrismaPicture | null> {
    return this.prisma.picture.findUnique(args);
  }
  async createPicture<T extends Prisma.PictureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureCreateArgs>
  ): Promise<PrismaPicture> {
    return this.prisma.picture.create<T>(args);
  }
  async updatePicture<T extends Prisma.PictureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureUpdateArgs>
  ): Promise<PrismaPicture> {
    return this.prisma.picture.update<T>(args);
  }
  async deletePicture<T extends Prisma.PictureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureDeleteArgs>
  ): Promise<PrismaPicture> {
    return this.prisma.picture.delete(args);
  }
}