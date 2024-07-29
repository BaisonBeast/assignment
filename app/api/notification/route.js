// app/api/hello/route.js
export async function GET(request) {
    try {
        return new Response(JSON.stringify({ message: 'Successfully notification sent' }));
    } catch(err) {
        return new Response(JSON.stringify({message: err}));
    }
    
}
