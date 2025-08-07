export default async function handler(event: Request) {
    if (event.method === 'POST') {
        const formData = await event.formData();
        console.log('Form data received:', formData);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response('Method Not Allowed', { status: 405 });
}
