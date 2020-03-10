document.addEventListener('DOMContentLoaded', (evt) => {
    document.getElementsByTagName('head')[0].innerHTML +=
       `<link href="style.css" rel="stylesheet" type="text/css" />
        <link href="logo/logo.png" rel="icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width" />`;
    document.getElementById('header').innerHTML =
        `<nav id="nav">
            <ul class="plain">
                <li><a class="plain" href="index.html">Home</a></li>
                <li><a class="plain" href="about-us.html">About Us</a></li>
                <li><a class="plain" href="product-specs.html">Product Specs</a></li>
                <li><a class="plain" href="contact-us.html">Contact Us</a></li>
            </ul>
        </nav>`;
    document.getElementById('footer').innerHTML = `<span id="copyright">&copy;2020 Rosie, LLC. All rights reserved.</span>`
});