/**
 * Calculates the Body Mass Index (BMI) using metric units.
 *
 * @param weight - The weight in kilograms.
 * @param height - The height in centimeters.
 * @returns The calculated BMI as a string with two decimal places.
 */
export const calculateMetricBMI = (weight: number, height: number): string => {
    if (!weight || !height) return '';
    let heightInMeters = height / 100;
    return (weight / heightInMeters ** 2).toFixed(2);
};

/**
 * Calculates the Body Mass Index (BMI) using imperial units.
 *
 * @param weightSt - The weight in stones.
 * @param weightLbs - The weight in pounds.
 * @param heightFt - The height in feet.
 * @param heightIn - The height in inches.
 * @returns The calculated BMI as a string with two decimal places.
 */
export const calculateImperialBMI = (
    weightSt: number,
    weightLbs: number,
    heightFt: number,
    heightIn: number,
): string => {
    if ((!weightSt && !weightLbs) || (!heightFt && !heightIn)) return '';

    const totalHeightInInches = heightFt * 12 + heightIn;
    const totalWeightInPounds = weightSt * 14 + weightLbs;

    return ((703 * totalWeightInPounds) / totalHeightInInches ** 2).toFixed(2);
};

/**
 * Calculates the health status based on the BMI value.
 * @param bmi - The Body Mass Index value.
 * @returns The health status as a string.
 */
export const getHealthStatus = (bmi: number): string => {
    if (bmi < 18.5) return 'underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'a healthy weight';
    if (bmi >= 25.0 && bmi <= 29.9) return 'overweight';
    return 'obese';
};

/**
 * Calculates the ideal weight range based on the given height for metric units.
 *
 * @param height - The height in centimeters.
 * @returns The ideal weight range in kilograms.
 */
export const getIdealWeightRangeMetric = (height: number): string => {
    const minHeightM = height / 100;
    const minWeight = 18.5 * minHeightM ** 2;
    const maxWeight = 24.9 * minHeightM ** 2;
    return `${minWeight.toFixed(1)}kgs - ${maxWeight.toFixed(1)}kgs`;
};

/**
 * Calculates the ideal weight range based on the given height for imperial units.
 *
 * @param heightFt - The height in feet.
 * @param heightIn - The height in inches.
 * @returns The ideal weight range in pounds.
 */
export const getIdealWeightRangeImperial = (
    heightFt: number,
    heightIn: number,
): string => {
    const totalHeightInInches = heightFt * 12 + heightIn;
    const minWeight = (18.5 * totalHeightInInches ** 2) / 703;
    const maxWeight = (24.9 * totalHeightInInches ** 2) / 703;
    return `${minWeight.toFixed(1)}lbs - ${maxWeight.toFixed(1)}lbs`;
};
