import React from 'react';

type RadioProps = {
	id: string;
	name: string;
	value: string;
	label: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton: React.FC<RadioProps> = ({
	id,
	name,
	value,
	label,
	checked,
	onChange,
}) => {
	return (
		<div className='flex items-center'>
			<input
				id={id}
				name={name}
				type='radio'
				className='size-6'
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<label
				htmlFor={id}
				className='ml-2 block text-gunmetal text-body-m-bold'>
				{label}
			</label>
		</div>
	);
};
