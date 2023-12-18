import './Cards.css'

const Cards = ({image}) =>{
    return(
        <div className='cardContainer'>
            <img width="337px" height="380px" src={image}/>
            <div className='info'>
                <div>
                    <p className='arroba'>@jhonny</p>
                    <p className='bigCardTxt'>Yellow Painting</p>
                </div>
                <div>
                    <p className='cBid'>Current Bid</p>
                    <p className='bigCardTxt'>0.005 ETC</p>
                </div>
            </div>
            <button className='pBidButton'>Place a Bid</button>
        </div>
    )
}

export default Cards