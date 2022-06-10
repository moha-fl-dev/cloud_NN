import { Stack, StackProps, aws_s3 as s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    console.log(this);

    new s3.Bucket(this, 'NewCdkBucket',{
      bucketName: 'give-me-a-bucket-name'
    });
  }
}
