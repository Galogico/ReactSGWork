import './Collection.css'


const Collection = () =>{
    return(
        <div>
            <div className='upper'>
                <p className="title">Collection</p>
                <p className="compl">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit.</p>
            </div>
            <div className='mid' width="100%">
                <button className='button'>Art</button>
                <button className='button'>Sport</button>
                <button className='button'>Photography</button>
                <button className='button'>Pattern</button>
            </div>
        </div>
        
    )
}

export default Collection