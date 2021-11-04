import React from "react";
import "../assets/styles/landingpage.css";
import Navbar from "../common/navbar";

const landingPage = () => {
    return (
        <div className="banner">
            <Navbar />
            <header>
                <div class="container">
                    <section id="popular" class="module">
                        <div class="container">

                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-3">
                                    <div class="module-header wow fadeInUp animated" >
                                        <h2 class="module-title">Menu Items</h2>
                                        <h3 class="module-subtitle">Our most popular dished</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-sm-6">

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Wild Mushroom Bucatini with Kale</h4>
                                                <div class="menu-detail">Mushroom / Veggie / White Sources</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$10.5</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Lemon and Garlic Green Beans</h4>
                                                <div class="menu-detail">Lemon / Garlic / Beans</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$14.5</h4>
                                                <div class="menu-label">New</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">LambBeef Kofka Skewers with Tzatziki</h4>
                                                <div class="menu-detail">Lamb / Wine / Butter</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$18.5</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Imported Oysters Grill (5 Pieces)</h4>
                                                <div class="menu-detail">Oysters / Veggie / Ginger</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$15.9</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Meatloaf with Black Pepper-Honey BBQ</h4>
                                                <div class="menu-detail">Pepper / Chicken / Honey</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$16.4</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-sm-6">

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Wild Mushroom Bucatini with Kale</h4>
                                                <div class="menu-detail">Mushroom / Veggie / White Sources</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$14.5</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Lemon and Garlic Green Beans</h4>
                                                <div class="menu-detail">Lemon / Garlic / Beans</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$14.5</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">LambBeef Kofka Skewers with Tzatziki</h4>
                                                <div class="menu-detail">Lamb / Wine / Butter</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$18.5</h4>
                                                <div class="menu-label">Recommended</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Imported Oysters Grill (5 Pieces)</h4>
                                                <div class="menu-detail">Oysters / Veggie / Ginger</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$15.9</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="menu">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h4 class="menu-title">Meatloaf with Black Pepper-Honey BBQ</h4>
                                                <div class="menu-detail">Pepper / Chicken / Honey</div>
                                            </div>
                                            <div class="col-sm-4 menu-price-detail">
                                                <h4 class="menu-price">$16.4</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-3">
                                    <div class="devider">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </header>
        </div>
    );
}


export default landingPage;
