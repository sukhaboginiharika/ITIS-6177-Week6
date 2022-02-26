import json

def lambda_handler(event, context):
    # TODO implement
    message = event["keyword"]
    #message = event["queryStringParameters"]['keyword']
    msg = 'Niharika Sukhabogi says '+message
    return {
        'statusCode': 200,
        'body': json.dumps(msg)
    }