import "./about.css"

const About = () =>{
    return(
        
            <div className="general">
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap" rel="stylesheet"></link>
            <div className="Home">
                <div className="left">
                    <p>
                        <span className="principalTxt">Create, Sell &<br/> Collect Your Own<br/> Creative NFT <br/></span>
                        <span className="desc">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nunc vulputate libero et velit.</span>
                    </p>
                    <div className="buttonDiv">
                        <button className="button1">Explore Now</button>
                        <button className="button2">Sell NFT</button>
                    </div>
                    <div className="stats">
                        <p>
                            <span className="infoNumbers">37K+<br/></span>
                            <span className="infoText">artworks</span>
                        </p>
                        <p>
                            <span className="infoNumbers" >20K+<br/></span>
                            <span className="infoText">artists</span>
                        </p>
                        <p>
                            <span className="infoNumbers">99K+<br/></span>
                            <span className="infoText">aucations</span>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="box1">
                        <div className="imgsCont">
                            <img className="img" height="140px" width="187px" href="src\images\1.jpg"></img>
                            <img className="img" width="187px" height='220'  src="https://s3-alpha-sig.figma.com/img/cfd1/9538/29b3cf1bb0186e6d04299f1093b74f68?Expires=1700438400&Signature=cOnGpMpVmpzeRTq-6s7Mld-BHTaY-arM3CrT9nj0oQkMpSDTqO3W-gFRtAT1nrovu09eItarCWZqeyWWrsSvQgHmKaLTNP5GLlWeEXaTko0zzLguEgyPRcLdYy5e60EJB1HfDx04kXxGaP813PdEMb-lqzW1RghmdSFaHe87vYByImcco2fWvmh4qYI72GVExRNeNA~NHslvECNNl-mnBAI3YbnyCZQF1PhPYGdzLFlJ0SEgz9DAb90EFMZvYkuzX0rlsT9370eYCFJCH7O8Lkjum7gPeGYZ7Jmh1tC9aVEaax~9b3Z2PdhHWZcGYIqko8fDLtRXX2UTqt~zYVF~Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                            <img className="img" width="187px" height="127px" src="https://s3-alpha-sig.figma.com/img/5ecc/7fc2/9f14ec01b7e3162118cb2b4a53281a9c?Expires=1700438400&Signature=ZMDaFtCw~YJzLoyhcbPO660sa5uhMFl6l80aAKBV1DRuaP9YKHBGNakEbuR08KGOp4TRGmOY3yVR7OBpkkfIZtyWNeXNg-EAAgcYg99O5mYHsFBRM7izoWAbeAepA8serPVrq7a9BlZR1RI-DztdBGhML1XMWg0pfWwGKU3ipzQ-xKPoDrq-7DVYwccomLQeqSpi1bvlSqJ~YdHlPY~Kfya7qZ6ISE-kCEmmUE2pld2YTucnEKlDb2ZSWhVG579zaxa3xwEVvLZVhomLxuo15dAD0VYhEWF0BfCHW7LALaQejaubuW56SENi3elud18T~ZDYHItuVbVXUKq9nKqhXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                        </div>
                        <div className="imgsCont2">
                            <img className="img" width="187px" height='108' src="https://s3-alpha-sig.figma.com/img/b895/8ee8/cc921c48add353ac8f286848691039a1?Expires=1700438400&Signature=BN6Q5c6F0ccrCyX59469-5NEQOZSxrz42oZF~0kmtw3UH6ZP21lYQzSQw7vlxqWAn-WYMikQL7a9TkEiNvcJaODvq6bktXO9xvSWwrpnAWf5xO~aArtX~-iba~FBbeqdkOCyZXud-cnMAPrhFHzAUcHcRdLhEK4xn93gQijNkeVQK~a~6sQt6anP6yLKGTXAgR2MAz6VmXTNkKKhq4I8HEPm3WIs6t7Z4py3i7cItVZKI1vuKYqiL38QsHLsj~9FHtFVo6IAYkvqGy6p5JABTfXusZ6CPBkkB1mGVhQtM73rdFIJa4boj6iGwqUn8eChcRrj5JqOAiphGMmQ-dbM7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                            <img className="img" width="187px" height='220' src="https://s3-alpha-sig.figma.com/img/6cb0/e452/27718b82a62448b9096671e3f7154cce?Expires=1700438400&Signature=VuM6YOd3nYxPQJfpaBmUEQSwwWlLlHkFy4xPVorGIBV0TZp73LBfnusD0zlCQuNZ1qttKpkeVDT5gxspI~ooJJ7Iw27~TleVzzkBdvqTqZ7oqwp2i3QD~DdeWGR5FGWGX73mHt0JY5NoX2bPKU3Mx0l4Do8lyPlrmGRMzesvpVbFD34FfmGNa8cguWkcbXH8wbOECUA6ynqoAplJcsdTJ7kw0RHBndMORQ9gZLhN7YIEH69Z7frj3ATeQjum9qXhGgze3hlD2skFGnp-wzYzE1~FkUq4Fhe0a5Ow0p3sNTAaW1BVmQsQbjWTyvyAIrSdeXYe~cx8geG~XAJ0ksHy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                            <img className="img" width="179px" height='159px' src="https://s3-alpha-sig.figma.com/img/5596/f359/80ce76debb935391584c39d5b3aa6d5b?Expires=1700438400&Signature=QLMmHZpnTd8yGDqR6XvBtbA3ipniMXgNNSfoGk1eh6~uTD6EyGIxbo4f-uxoA8M8JB1vocUVZuBjrCxxik9HYyftRk80PwlPf0q7ZmeJDXJnwfDEbNymm1g91T9YhNVxuM4JyuyPkxNn2p6o37KuUNJL5ntpBz127f8E~iOuEa0-kNpW2boLKXdjcyXRvFMz7m9oOAVOFhY6CxbyJBWBx~pvm2uU2crSZfCe1n7vxl4F6KEPlXdgQXdsjXr8c8Ow~F10~0-PKao7-9e7E0kfbfenB9C9ju9VpzpjItWKPCGU1VYpnXKI63BifnV8nuoOHyNio888FzKIWrfr-Brdrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                        </div>
                    </div>
                    <div className="box2">
                        <img className="img" width="187px" height='412' src="https://s3-alpha-sig.figma.com/img/4e05/8311/dece994edcd6aff724f24a10bc75d7d9?Expires=1700438400&Signature=A-APEELtnN9mU3UPZLEQdbNft~stC9TxuhxUv0GW7iT4ueprBBvmDUL5zgDBpL0E0owE8g-5G7ct1WSiInQMPjoAEb0ZqzvbOjxInqITrF~Kt9BhjEW8dthawJNALajwzfPc~z0WEm-TG0JChkThCvbEdBzD4wGsbHqnfeIqHnph~VTo~PrMtnB4KWF~7ph0~OsjA3Z-XSjTU21yXb4KqHURf~ueRwT2V51k8Ga~z~sl11Vha7uBFEE~EMTMbqT5WCFQCCSbBuLtvNrtxBFzIGei0YA7lNzK5rEID6M02NbFeONMS-JD4pmugvloaV4VBWNqOeMJHn65UEETJsnSNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;