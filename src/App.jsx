import './App.css';
import {inventory} from "./constants/inventory.js";
import {bestSellingTv} from "./constants/inventory.js";
import calculateProductsSold from "./helpers/calculateProductsSold.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateOnStock from "./helpers/calculateOnStock.js";
import collectProductName from "./helpers/collectProductName.js";
import collectProductPrice from "./helpers/collectProductPrice.js";
import collectConvertScreenSizes from "./helpers/collectConvertScreenSizes.js";
import minus from "./assets/minus.png";
import check from "./assets/check.png";

function App() {

    function sortedByBestSeller() {

        // DEEL 2 - OPD 3A
        const sortedByAmountSold = inventory.sort((a,b) => b.sold - a.sold);
        console.log(sortedByAmountSold)

        // DEEL 1 - OPD 2F
        // console.log("Meest verkocht eerst");
    }

    function sortedByCheapestTv() {

        // DEEL 2 - OPD 3B
        const sortedByPrice = inventory.sort((a,b) => a.price - b.price);
        console.log(sortedByPrice)

        // DEEL 1 - OPD 2F
        // console.log("Goedkoopste eerst");
    }

    function sortedByBestSportsTv() {

        // DEEL 2 - OPD 3C
        const sortedByRefreshRate = inventory.sort((a,b) => b.refreshRate - a.refreshRate);
        console.log(sortedByRefreshRate)

        // DEEL 1 - OPD 2F
        // console.log("Meest geschikt voor sport eerst");
    }

    function sortedByScreenSize() {

        // DEEL 2 - BONUS 1
        const sortedByInches = inventory.sort((a,b) => {
            const maxSizeA = Math.max(...a.availableSizes);
            const maxSizeB = Math.max(...b.availableSizes);
            return maxSizeB - maxSizeA;
        })
        console.log(sortedByInches)
    }

    return (
        <main className="outer-container">

            <h1>Tech it easy dashboard</h1>

            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="article-container-1">
                    <article className="article-box-1 products-sold">
                        <h3>Aantal verkochte producten</h3>
                        <h2>{calculateProductsSold(inventory)}</h2>
                    </article>

                    <article className="article-box-1 products-on-stock">
                        <h3>Aantal ingekochte producten</h3>
                        <h2>{calculateOriginalStock(inventory)}</h2>
                    </article>

                    <article className="article-box-1 products-to-be-sold">
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{calculateOnStock(inventory)}</h2>
                    </article>
                </div>
            </section>

            <section>
                <h2>Best verkochte TV</h2>
                <div className="article-container-2">
                    <span className="image-product">
                        <img src={bestSellingTv.sourceImg} alt="Image product"/>
                    </span>
                    <article className="article-box-2">
                        <h3>{collectProductName(bestSellingTv)}</h3>
                        <h2>{collectProductPrice(bestSellingTv)}</h2>
                        <h4>{collectConvertScreenSizes(bestSellingTv)}</h4>
                        <ul className="productOptions">
                            <li><img className="iconSize" src={check} alt="Wifi als optie aanwezig" />wifi</li>
                            <li><img className="iconSize" src={minus} alt="Speech niet als optie aanwezig" />speech</li>
                            <li><img className="iconSize" src={check} alt="HDR als optie aanwezig" />hdr</li>
                            <li><img className="iconSize" src={check} alt="Bluetooth als optie aanwezig" />bluetooth</li>
                            <li><img className="iconSize" src={minus} alt="ambilight niet als optie aanwezig" />ambilight</li>
                        </ul>

                    </article>
                </div>
            </section>

            <section>
                <h2>Alle TV's</h2>
                <div className="sortButtons">
                    <button type="button" onClick={sortedByBestSeller}>Meest verkocht eerst</button>
                    <button type="button" onClick={sortedByCheapestTv}>Goedkoopste eerst</button>
                    <button type="button" onClick={sortedByBestSportsTv}>Meest geschikt voor sport eerst</button>
                    {/*DEEL 2 - BONUS 1 */}
                    <button type="button" onClick={sortedByScreenSize}>Grootste schermgroottes eerst</button>
                </div>
            </section>

            <section className="brandOverview">
                <h3 className="allignLeft">Overzicht van onze beschikbare merken</h3>
                <ul>
                    {inventory.map((item) => <li key={`key-${item.type}`}>{item.brand}</li>)}
                </ul>
            </section>

            <section>
                {inventory.map((item) => {
                    return (
                        <div className="article-container-3" key={`key-${item.type}`}>
                            <span className="image-product">
                                <img src={item.sourceImg} alt="image-tv"/>
                            </span>
                            <article className="article-box-3">
                                <h3>{collectProductName(item)}</h3>
                                <h2>{collectProductPrice(item)}</h2>
                                <h4>{collectConvertScreenSizes(item)}</h4>
                                <ul className="productOptions">
                                    {item.options.map((feature) => {
                                        if (feature.applicable) {
                                            return <li key={`key-${feature.name}`}><img className="iconSize" src={check} alt="Feature aanwezig"/>{feature.name}</li>
                                        } else {
                                            return <li key={`key-${feature.name}`}><img className="iconSize" src={minus} alt="Feature niet aanwezig"/>{feature.name}</li>
                                        }
                                    })}
                                </ul>
                            </article>
                        </div>
                )})}
            </section>

        </main>
    )
}

export default App
