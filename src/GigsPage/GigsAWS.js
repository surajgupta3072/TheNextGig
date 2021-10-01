import * as AWS from 'aws-sdk';

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: "AKIAY4YEONCDSO4WVB4M",
  secretAccessKey: "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"
});
const docClient = new AWS.DynamoDB.DocumentClient();
export default docClient