// netlify/entrypoints/forms.ts
import { builder, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler = builder(
    async (event: HandlerEvent, context: HandlerContext) => {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form handler placeholder' }),
        };
    }
);
