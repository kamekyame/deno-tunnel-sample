Deno.serve(async () => {
  const data =
    await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  console.log("タイトル", data.title);
  return Response.json(data);
});
