import calculateProductsSold from "./calculateProductsSold.js";
import calculateOriginalStock from "./calculateOriginalStock.js";

function calculateOnStock(inventoryList) {
    const totalSold = (calculateProductsSold(inventoryList));
    const totalStock = (calculateOriginalStock(inventoryList));
    return totalStock - totalSold
}
export default calculateOnStock;