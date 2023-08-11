const {DynamoDBClient} = require ('@aws-sdk/client-dynamodb')
const {DynamoDBDocumentClient} = require ('@aws-sdk/lib-dynamodb')

const dbClient = new DynamoDBClient({
    region : 'YOUR-AWS-REGION',
    credentials : {
        accessKeyId : "YOUR-ACCESS-KEY-ID",
        secretAccessKey : "YOUR-SECRET-ACCESS-KEY"
    }
})

//thye follwing code copy from @aws-sdk/lib-dynamodb npm package
const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false, // false, by default.
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: false, // false, by default.
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
  };
  
  const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
  };
  
  const translateConfig = { marshallOptions, unmarshallOptions };

  const documentClient = DynamoDBDocumentClient.from(dbClient,translateConfig)

  module.exports = documentClient
  