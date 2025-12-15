Deno.serve(() => {
  const apiKey = Deno.env.get("API_KEY");
  return Response.json({ env: apiKey });
});
