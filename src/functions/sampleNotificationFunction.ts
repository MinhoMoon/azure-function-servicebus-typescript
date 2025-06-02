import { app, InvocationContext } from "@azure/functions";
import { QUEUE_NAME } from "../constants/constants";
import * as admin from 'firebase-admin';
const serviceAccount = require('./placeholders/service-account.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
}

export async function sampleNotificationFunction(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    context.log('EnqueuedTimeUtc =', context.triggerMetadata.enqueuedTimeUtc);
    context.log('DeliveryCount =', context.triggerMetadata.deliveryCount);
    context.log('MessageId =', context.triggerMetadata.messageId);

    const _message = {
        token: 'deviceToken',
        notification: {
            title: "Notification Title",
            body: "Notification Body ",
        },  
    };
    
    admin.messaging().send(_message);
}

app.serviceBusQueue('sampleNotificationFunction', {
    connection: 'CONNECTIONSTRING_SERVICEBUS',
    queueName: QUEUE_NAME.SAMPLE,
    handler: sampleNotificationFunction
});