import * as AWS from 'aws-sdk';
AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: "AKIAY4YEONCD4Q5CK545",
    secretAccessKey: "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"
  });
const docClient = new AWS.DynamoDB.DocumentClient();
  export default docClient