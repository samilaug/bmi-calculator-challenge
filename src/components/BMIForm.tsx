// src/components/BMIForm.tsx
import React, { useState, useEffect } from 'react';
import { RadioButton } from './RadioButton';
import { MeasurementInput } from './MeasurementInput';
import {
	calculateMetricBMI,
	calculateImperialBMI,
	getHealthStatus,
	getIdealWeightRangeMetric,
	getIdealWeightRangeImperial,
} from '../utils/bmiCalculator';

const BMIForm = () => {
	const [selectedUnit, setSelectedUnit] = useState<string>('metric');
	// Metric
	const [height, setHeight] = useState<string>('');
	const [weight, setWeight] = useState<string>('');
	// Imperial
	const [heightFt, setHeightFt] = useState<string>('');
	const [heightIn, setHeightIn] = useState<string>('');
	const [weightSt, setWeightSt] = useState<string>('');
	const [weightLbs, setWeightLbs] = useState<string>('');

	const [bmi, setBmi] = useState<string>('');

	useEffect(() => {
		if (
			(selectedUnit === 'metric' && height && weight) ||
			(selectedUnit === 'imperial' &&
				(heightFt || heightIn) &&
				(weightSt || weightLbs))
		) {
			calculateBMI();
		} else {
			setBmi('');
		}
	}, [height, weight, heightFt, heightIn, weightSt, weightLbs, selectedUnit]);

	const calculateBMI = () => {
		if (selectedUnit === 'metric') {
			const heightValue = parseFloat(height);
			const weightValue = parseFloat(weight);
			setBmi(calculateMetricBMI(weightValue, heightValue));
		} else {
			const heightFtValue = parseFloat(heightFt);
			const heightInValue = parseFloat(heightIn);
			const weightStValue = parseFloat(weightSt);
			const weightLbsValue = parseFloat(weightLbs);
			setBmi(
				calculateImperialBMI(
					weightStValue,
					weightLbsValue,
					heightFtValue,
					heightInValue,
				),
			);
		}
	};

	const displayIdealWeight = () => {
		if (selectedUnit === 'metric') {
			return getIdealWeightRangeMetric(parseFloat(height));
		} else {
			return getIdealWeightRangeImperial(
				parseFloat(heightFt),
				parseFloat(heightIn),
			);
		}
	};

	return (
		<div className='flex flex-col gap-6 bg-pure-white p-6 rounded-2xl shadow-xl-blue lg:w-[35.25rem]'>
			<h2 className=' text-heading-m font-semibold text-gunmetal'>
				Enter your details below
			</h2>
			<div className='grid grid-flow-col gap-6'>
				<RadioButton
					id='metric'
					name='units'
					value='metric'
					label='Metric'
					checked={selectedUnit === 'metric'}
					onChange={(e) => setSelectedUnit(e.target.value)}
				/>
				<RadioButton
					id='imperial'
					name='units'
					value='imperial'
					label='Imperial'
					checked={selectedUnit === 'imperial'}
					onChange={(e) => setSelectedUnit(e.target.value)}
				/>
			</div>
			<div className='grid grid-flow-col md:grid-row-2 gap-4 '>
				{selectedUnit === 'metric' ? (
					<>
						<div className=' flex flex-col gap-2'>
							<label className='text-dark-electric-blue text-body-s'>
								Height
							</label>
							<MeasurementInput
								id='height'
								name='height'
								unit='cm'
								value={height}
								onChange={(e) => setHeight(e.target.value)}
							/>
						</div>
						<div className=' flex flex-col gap-2'>
							<label className='text-dark-electric-blue text-body-s'>
								Weight
							</label>
							<MeasurementInput
								id='weight'
								name='weight'
								unit='kg'
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
							/>
						</div>
					</>
				) : (
					<>
						<div className=' flex flex-col gap-2'>
							<label className='text-dark-electric-blue text-body-s'>
								Height
							</label>
							<div className='flex gap-6'>
								<MeasurementInput
									id='heightFt'
									name='height (ft)'
									unit='ft'
									value={heightFt}
									onChange={(e) =>
										setHeightFt(e.target.value)
									}
								/>
								<MeasurementInput
									id='heightIn'
									name='height (in)'
									unit='in'
									value={heightIn}
									onChange={(e) =>
										setHeightIn(e.target.value)
									}
								/>
							</div>

							<label className='text-dark-electric-blue text-body-s'>
								Weight
							</label>
							<div className='flex gap-6'>
								<MeasurementInput
									id='weightSt'
									name='weight (st)'
									unit='st'
									value={weightSt}
									onChange={(e) =>
										setWeightSt(e.target.value)
									}
								/>
								<MeasurementInput
									id='weightLbs'
									name='weight (lbs)'
									unit='lbs'
									value={weightLbs}
									onChange={(e) =>
										setWeightLbs(e.target.value)
									}
								/>
							</div>
						</div>
					</>
				)}
			</div>
			<div className=' bg-blue  rounded-2xl md:rounded-right-full '>
				{!bmi && (
					<>
						<div className=' p-8 flex flex-col gap-5 text-pure-white'>
							<h2 className=' text-heading-m'>Welcome!</h2>
							<p className=' text-body-s'>
								Enter your height and weight and you’ll see your
								BMI result here
							</p>
						</div>
					</>
				)}
				{bmi && (
					<>
						<div className='p-8 flex flex-col gap-2 text-pure-white'>
							<span className='text-body-m-bold -p-2'>
								Your BMI is...
							</span>
							<span className='text-heading-l pb-4'>{bmi}</span>
							<p className='text-body-s'>
								Your BMI suggests you’re{' '}
								{getHealthStatus(parseFloat(bmi))}. Your ideal
								weight is between{' '}
								<span className='text-body-m-bold inline'>
									{displayIdealWeight()}
								</span>
								.
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default BMIForm;
