const dynamodb = require('aws-sdk/clients/dynamodb');
const uuid = require('uuid/v4');
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.SAMPLE_TABLE2;
exports.createProductHandler = async(event) => {
    try {
        if (event.httpMethod !== 'POST') {
            throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
        }

        console.info('received:', event);

        const body = JSON.parse(event.body);
        body.id = uuid();
        const Item = Object.assign({}, body);

        var params = {
            TableName: tableName,
            Item
        };

        const { requestContext } = event;
        const Location = !!requestContext ? `https://${requestContext.domainName}${requestContext.path}/${body.id}` : body.id;
        const result = await docClient.put(params).promise();
        const response = {
            statusCode: 201,
            headers: {
                Location,
                "Access-Control-Allow-Origin": "*"
            }
        };

        return response;
    } catch (error) {
        console.log('error %j', error);
        const response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(error)
        }
        return response;
    }
}