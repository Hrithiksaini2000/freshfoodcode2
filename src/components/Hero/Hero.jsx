import '../Hero/Hero.css'

import heroimg from "../../assets/img/hero-img-2.jpg"

function Hero() {
    return (
        <>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 text-background'>
                            <h1 className='heading1-title'>Fresh Food Great Taste With</h1>
                            <p className='paragraph-style'>We use only the freshest ingredients to create sushi that is both visually stunning and incredibly flavorful. Every bite is crafted with care, ensuring the perfect balance of taste and texture. Our commitment to quality guarantees a delightful dining experience. Enjoy sushi that looks as good as it
                                tastes!</p>
                            <div>
                                <button className='button-style'>Book Your Reservation</button>
                            </div>
                        </div>
                        <div className='col-md-6 p-0'>
                            <img src={heroimg} className='hero-img'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero