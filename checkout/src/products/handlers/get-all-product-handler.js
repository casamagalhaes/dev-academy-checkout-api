const tableName = process.env.SAMPLE_TABLE;
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

exports.getAllProductsHandler = async(event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllProducts only accept GET method, you tried: ${event.httpMethod}`);
    }

    console.info('received:', event);
    var params = {
        TableName: tableName
    };

    const data = await docClient.scan(params).promise();
    const products = data.Products;

    const response = {
        statusCode: 200,
        body: JSON.stringify(products),
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}