import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.BucketV2("rocketseat-migotto-pulumi-teste", {
    bucket: "rocketseat-migotto-pulumi-teste",
    tags: {
        IAC: "true"
    },
});

const secondBucket = new aws.s3.BucketV2("rocketseat-migotto-pulumi-teste", {
    bucket: "second-rocketseat-migotto-pulumi-teste",
    tags: {
        IAC: "true"
    },
});

const ecr = new aws.ecr.Repository("rocketseat-migotto-pulumi-teste", {
    name: "rocketseat-migotto-pulumi-teste",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true"
    },
});

// Export the name of the bucket
export const bucketName = firstBucket.id;
export const bucketInfo = firstBucket.bucket;
export const bucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
export const ecrArn = ecr.arn;

