function calculateOriginalStock(inventoryList) {
    let totalStock = 0;
    for (let i = 0; i < inventoryList.length; i++) {
        totalStock += inventoryList[i].originalStock;
    }
    return totalStock;
}
export default calculateOriginalStock