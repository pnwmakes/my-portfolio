// .netlify/functions/forms.ts
export const handler = async (event: any) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form handler active' }),
    };
};
