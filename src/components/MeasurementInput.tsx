import React from 'react';

type MeasurementInputProps = {
	id: string;
	name: string;
	unit: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MeasurementInput: React.FC<MeasurementInputProps> = ({
	id,
	name,
	unit,
	value,
	onChange,
}) => {
	return (
		<div className='relative rounded-md shadow-sm'>
			<label
				htmlFor={id}
				className='sr-only'>
				{name}
			</label>
			<input
				type='number'
				name={name}
				id={id}
				className=' appearance-none focus:ring-blue focus:border-blue block w-full px-6 py-5 border-borders rounded-[0.75rem] text-heading-m text-gunmetal placeholder:text-gunmetal/25'
				value={value}
				onChange={onChange}
				min='0'
				step='0.01'
				placeholder='0'
			/>
			<div className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
				<span className='inline-flex items-center text-heading-m font-semibold text-blue px-3 rounded-r-[0.75rem]'>
					{unit}
				</span>
			</div>
		</div>
	);
};
