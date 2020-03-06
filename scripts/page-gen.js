document.addEventListener('DOMContentLoaded', (evt) => {
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