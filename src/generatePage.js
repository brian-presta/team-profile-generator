const generatePage = (manager,engineers,interns) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <header class="container-fluid">
        <nav class="navbar navbar-dark justify-content-center" style="background-color: #ff4444;">
            <h1 class=" text-light p-4">My Team</h1>
        </nav>
    </header>
    <main class="container">
        <!-- Manager row -->
        <section class="row justify-content-center mt-md-5">
            <div class="col-12 d-block d-sm-none text-center my-2"><h3>Manager</h3></div>
                ${manager}
        </section>
        <!-- Engineer row -->
        <section class="row justify-content-center mt-md-4">
            <div class="col-12 d-block d-sm-none text-center my-2"><h3>${(engineers) ? 'Engineers' : ''}</h3></div>
            ${engineers}
        </section>
        <!-- Intern Row -->
        <section class="row justify-content-center mt-md-4">
            <div class="col-12 d-block d-sm-none text-center my-2"><h3>${(interns) ? 'Interns' : ''}</h3></div>
            ${interns}
        </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
</body>
</html>
    `
    // the ternary operators fill the headers with an emptystring if the proceeding section would be empty
}

module.exports = generatePage;