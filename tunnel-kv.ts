const kv = await Deno.openKv();

Deno.serve(async () => {
  let count = (await kv.get<number>(["counter"])).value ?? 0;
  count++;
  await kv.set(["counter"], count);
  return Response.json({ count });
});
