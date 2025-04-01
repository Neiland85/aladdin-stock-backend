export default async function handler(req: Request): Promise<Response> {
  return new Response(
    JSON.stringify({ status: 'ok', message: 'Aladdin Stock API online ✨' }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }
  );
}

