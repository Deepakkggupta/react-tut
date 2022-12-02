import React from 'react'
function Home()
{
    return(
        <div>
            <div className='add-to-cart'>
                <img src='https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg'/>
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://m.media-amazon.com/images/I/618hqM-yxtL._SX679_.jpg'/>
                </div>
                <div className='text-wrapper item'>
                    <span>One plus </span>
                    <span>Price : $2000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;