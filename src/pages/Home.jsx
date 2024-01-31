import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react"

export const Home = () => {
    const [hideBuy, setShowHideBuy] = useState(false);

    function PressImg() {
        if (!hideBuy) {
            setShowHideBuy(true)
            console.log("geeez")
        } else {
            setShowHideBuy(false)
        }
    }

    return (
        <div className="home">
            <div className="display-images">
                <section>
                    1
                    <img src="" alt="" />
                    <div className="item-desc">
                        Phone Accessories
                    </div>
                </section>

                <section>
                    2
                    <img src="" alt="" />
                    <div className="item-desc">

                    </div>
                </section>
                <section>
                    3
                    <img src="" alt="" />
                    <div className="item-desc">

                    </div>
                </section>
                <section>
                    4
                    <img src="" alt="" />
                    <div className="item-desc">

                    </div>
                </section>

                <section>
                    4
                    <img src="" alt="" />
                    <div className="item-desc">

                    </div>
                </section>
            </div>

            <div className="home-center">
                <div className="item">
                    <div className="product-img">
                        <img src="./images/hair.jpg" alt="product" />
                        <div className="percentage">

                        </div>
                    </div>

                    <p className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit accusantium consectetur assumenda inventore
                    </p>

                    <p className="price">
                        $10,0000
                    </p>

                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <button>ADD TO CART</button>
                </div>



            </div>


            <div className="more-colletions">
                <h1 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "1.6rem" }}>Wigs Colletions</h1>
                <div className="more-collection-center">
                    <section onClick={PressImg}>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                        <button className={hideBuy ? "show-wig-btn " : "wig-btn"}>Buy</button>
                    </section>
                    <section>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                    </section>

                    <section>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                    </section>

                    <section>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                    </section>

                    <section>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                    </section>

                    <section>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                    </section>


                    <section>
                        <img src="./images/hair.jpg" alt="wigs" />
                        <p>Name</p>
                    </section>
                </div>
            </div>

            <div className="more-accessories">
                <h1 style={{ textAlign: "center", fontSize: "1.6rem" }}>Accessories</h1>
                <div className="more-accessories-center">
                    <section>
                        <img src="./images/fd5.jpg" alt="accessories" />
                        <p>Name</p>
                        <div>
                            <button><FaArrowLeft /></button>
                            <button><FaArrowRight /></button>
                        </div>
                    </section>

                    <section>
                        <img src="./images/fd5.jpg" alt="accessories" />
                        <p>Name</p>
                        <div className="btn-container">
                            <button className="prev"><FaArrowLeft /></button>
                            <button className="next"><FaArrowRight /></button>
                        </div>
                    </section>

                </div>
            </div>


            <div className="people-review">
                <section className="review-center">
                    <h1>Customers's Review</h1>
                    <section className="review">
                        <div className="review-name-img">
                            <img src="./images/hair.jpg" alt="review" />
                            <p>John Dow</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dicta dolorem sint ad similique placeat odit deserunt, nulla perferendis magni?
                        </p>
                    </section>
                </section>
            </div>
        </div>
    )
}