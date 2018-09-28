const Html = ({ body, title }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="icon" type="image/png" href="images/favicon.ico" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/dist/styles.css">
  </head>
  <body>
    <div id="app">${body}</div>
    <script src="/dist/bundle.js" /></script>
  </body>
</html>
`;

export default Html;