import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";



@InputType()
export class CreateSignedUrlInput {


    @IsNotEmpty()
    @Field()
    Key: string

    @Field()
    Bucket: string

    @Field({defaultValue:'image/webp'})
    ContentType: 'image/webp' | 'application/zip'

    @Field({defaultValue:'getObject'})
    operation: 'getObject' | 'putObject' | 'deleteObject'

    @Field(()=>Int,{defaultValue:60*5})
    Expires: number

    @Field({nullable:true, defaultValue:'private'})
    ACL: 'private' | 'public-read' 


}