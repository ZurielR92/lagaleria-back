import { Field, Int, ObjectType } from "@nestjs/graphql";




@ObjectType()
export class SignedUrl {


    @Field()
    key: string

    @Field({nullable:true})
    signedUrl?: string

    @Field()
    contentType: 'image/webp' | 'application/zip'

    @Field()
    operation: 'getObject' | 'putObject' | 'deleteObject'

    @Field(()=>Int)
    expires: number

    @Field()
    bucketName: string

    @Field()
    acl: 'private' | 'public-read'

}