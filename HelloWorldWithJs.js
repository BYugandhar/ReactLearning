<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World Wellcome !!";
        const rootEleId = document.getElementById("root");
        rootEleId.appendChild(heading);
    </script>
</body>
</html> 
