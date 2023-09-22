import "./navbar.css"

const Header = () =>{
    return(
        <>
        <div className="navDiv">
            <div>
                <p>
                    <span className="psycho">Psycho</span>
                    <span className="art">Art</span>
                </p>
            </div>
            <form class="nosubmit">
                <input className="navSearchBar" placeholder="Search items and collections"></input>
            </form>
            <div className="btnDiv">
                <button className="averageNavBtn">Collections</button>
                <button className="averageNavBtn">Feature</button>
                <button className="averageNavBtn">FAQ</button>
                <button className="difNavBtn">Select Wallet</button>
            </div>
        </div>
        </>
    )
}

export default Header;