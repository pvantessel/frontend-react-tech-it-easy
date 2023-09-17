function calculateProductsSold(inventoryList) {
    let totalSold = 0;
    for (let i = 0; i < inventoryList.length; i++) {
        totalSold = totalSold + inventoryList[i].sold;
    }
    return totalSold;
}

export default calculateProductsSold
