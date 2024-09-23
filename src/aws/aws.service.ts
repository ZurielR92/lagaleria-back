import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { CreateSignedUrlInput } from './dto/create-signed-url.input';


@Injectable()
export class AwsService {

    private s3: AWS.S3

    /* constructor() {
        this.s3 = new AWS.S3({
            apiVersion:'2006-03-01',
            accessKeyId: 'AKIAR3HUOAYIYTHITOSO',
            secretAccessKey: '',
            region: "us-east-2",
        });
    } */

    
    async getSignedUrl(createSignedUrl:CreateSignedUrlInput) {
        const { operation, ...params } = createSignedUrl;
        return this.s3.getSignedUrl(operation, params)
    }

}
