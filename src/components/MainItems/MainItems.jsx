import '../MainItems/MainItems.css'

import { Productcard } from './card'

import productlist from "../../api/products.json"

function Mainitems() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='main-item-heading'>Enjoy our expertly crafted sushi combinations, made just for you.</h1>
                            <div>
                                <p className='paragraph-main-item'>Our sushi is crafted from the freshest ingredients, delivering a perfect blend of flavor, quality and visual appeal.</p>
                            </div>
                        </div>
                        <div className='items-grid'>
                        {
                            productlist.map((product)=>{
                                return(
                                    <Productcard key={product.id} product={product} />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainitems