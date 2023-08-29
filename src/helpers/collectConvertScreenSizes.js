function collectConvertScreenSizes(inchesToCm) {
    let stringSizesInchCm = '';
    const convertToCm = 2.54;

    for (let i = 0; i < inchesToCm.availableSizes.length; i++) {
        const currentSizeInches = inchesToCm.availableSizes[i];
        const currentSizeCm = Math.round(inchesToCm.availableSizes[i] * convertToCm);

        stringSizesInchCm = stringSizesInchCm + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        if (i < inchesToCm.availableSizes.length - 1) {
            stringSizesInchCm = `${stringSizesInchCm} | `;
        }
    }

    return stringSizesInchCm;
}

export default collectConvertScreenSizes