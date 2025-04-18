class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top" aria-label="Eleventh navbar example">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html"><span class="logo-1">Style</span> <span class="logo-2">Hub</span></a>
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse ms-5" id="navbarsExample09">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item me-2">
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="nav-link" href="product.html">Products</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="nav-link" href="categories.html">Categories</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                            <form role="search" class="d-flex">
                                <input class="me-2 form-control" type="search" placeholder="Search products..." aria-label="Search">
                                <button class="me-2 btn btn-outline-dark" type="button" onclick="window.location.href='user/login.html'"><i class="fa-solid fa-user"></i></button>
                                <button class="me-2 btn btn-outline-dark" type="button" onclick="window.location.href='cart.html'"><i class="fa-solid fa-cart-shopping"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-light">
                <footer class="container pt-5 pb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="logo">
                                <div class="main-text pb-3">
                                    <span class="main-color logo-1">Style</span> <span class="logo-2">Hub</span>
                                </div>
                                <p class="text-start mt-1">Discover the latest trends in fashion and lifestyle. Quality products for your everyday needs.</p>
                                <div class="social-media">
                                    <a href="https://facebook.com/anass._.zh" class="me-4"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="https://twitter.com/anass._.zh" class="me-4"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="https://instagram.com/anass._.zh" class="me-4"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="https://linkedin.com/company/anass._.zh"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h4 class="text-start pt-1 section-title"> Quick Links </h4>
                            <ul class="list-unstyled">
                                <li class="my-4"><a href="product.html" class="text-decoration-none text-black">All products</a></li>
                                <li class="mb-4"><a href="categories.html" class="text-decoration-none text-black">Categories</a></li>
                                <li class="mb-4"><a href="about.html" class="text-decoration-none text-black">About Us</a></li>
                                <li class="mb-4"><a href="contact.html" class="text-decoration-none text-black">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4 class="text-start pt-1 section-title"> Customer Service </h4>
                            <ul class="list-unstyled">
                                <li class="my-4"><a href="faq.html" class="text-decoration-none text-black">FAQ</a></li>
                                <li class="mb-4"><a href="shipping-policy.html" class="text-decoration-none text-black">Shipping Policy</a></li>
                                <li class="mb-4"><a href="returns-policy.html" class="text-decoration-none text-black">Returns & Exchanges</a></li>
                                <li class="mb-4"><a href="terms-conditions.html" class="text-decoration-none text-black">Terms & Conditions</a></li>
                                <li class="mb-4"><a href="privacy-policy.html" class="text-decoration-none text-black">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4 class="text-start pt-1 section-title"> Contact Us </h4>
                            <ul class="list-unstyled">
                                <li class="my-4">
                                    <i class="fa-solid fa-location-dot me-2"></i> 123 Main Street, Anytown, USA
                                </li>
                                <li class="mb-4">
                                    <i class="fa-solid fa-phone me-2"></i> +1 (555) 123-4567
                                </li>
                                <li class="mb-4">
                                    <i class="fa-solid fa-envelope me-2"></i> example@email.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-bottom"></div>
                    <div class="row my-4">
                        <div class="col-md-6">
                            <p class="section-title">Subcribe to our newsletter</p>
                            <p class="text-start">Get the latest updates on new products and offers</p>
                        </div>
                        <div class="col-md-6">
                            <form class="d-flex mt-4">
                                <input class="form-control me-3" type="email" placeholder="Your email address" aria-label="Email">
                                <button class="btn main-btn" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div class="border-bottom"></div>
                        <div class="row mt-4">
                            <div class="text-center">
                                <p class="text-center">© 2025 Style Hub. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        `
    }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);