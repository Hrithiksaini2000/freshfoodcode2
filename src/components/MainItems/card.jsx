export const Productcard = (props) => {

    const { img_url, name, category } = props.product
    return (
        <div className='img-div'>
            <img src={img_url} className='img-width' />
            <div className='itemainname'>
                <div>
                    <h3 className='main-item-font'>{name}</h3>
                </div>
                <div>
                    <h5>{category}</h5>
                </div>
            </div>
        </div>
    )
}