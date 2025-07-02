import '../Favorite/Favourite.css'

// import favoriteimage from "@/assets/img/new-image.png";
import favoriteimage from '../../assets/img/new-image.png';
import food1 from "../../assets/img/newfood.png"
import food2 from "../../assets/img/food2.png"
import food3 from "../../assets/img/food3.png"

function Favourite() {
    return (
        <>
            <section className='favorite-margin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='favoutite-heading'>Customer Favorites The Most Loved Menu</h3>
                            <p className='favorite-paragraph'>
                                Our Sushi is crafted from the freshest incgredients, delivering a perfect blend of flavor, quality and visual appeal.
                            </p>
                        </div>
                        <div className='col-md-4 imagebackground'>
                            <img src={favoriteimage} className='favorite-img-width' />
                        </div>
                        <div className='col-md-8 fav-card-padding'>
                            <div className='row new-card-gap'>
                                <div className='col-md-12 card-1'>
                                    <div className='row card-item'>
                                        <div className='col-md-2'>
                                            <img src={food1} />
                                        </div>
                                        <div className='col-md-6'>
                                            <h3 className='food-name'>Salmon Platter</h3>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='order-div'>
                                                <h5 className='order-color'>Order Now</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 card-1'>
                                    <div className='row card-item'>
                                        <div className='col-md-2'>
                                            <img src={food2} />
                                        </div>
                                        <div className='col-md-6'>
                                            <h3 className='food-name'>Mixed Platter Roll</h3>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='order-div'>
                                                <h5 className='order-color'>Order Now</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 card-1'>
                                    <div className='row card-item'>
                                        <div className='col-md-2'>
                                            <img src={food3} />
                                        </div>
                                        <div className='col-md-6'>
                                            <h3 className='food-name'>Ala Carte Menu</h3>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='order-div'>
                                                <h5 className='order-color'>Order Now</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favourite