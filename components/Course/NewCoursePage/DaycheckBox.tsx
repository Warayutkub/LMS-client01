'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const options = [
    { label: 'วันจันทร์', value: '1' },
    { label: 'วันอังคาร', value: '2' },
    { label: 'วันพุธ', value: '3' },
    { label: 'วันพฤหัสบดี', value: '4' },
    { label: 'วันศุกร์', value: '5' },
    { label: 'วันเสาร์', value: '6' },
    { label: 'วันอาทิตย์', value: '7' },
];

type DayCheckBox = {
    onChange: (selected: string[]) => void;
};

const DayCheckBox: React.FC<DayCheckBox> = ({ onChange }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (value: string) => {
        let updatedSelected: string[];

        if (selectedValues.includes(value)) {
            updatedSelected = selectedValues.filter((v) => v !== value);
        } else {
            updatedSelected = [...selectedValues, value];
        }

        setSelectedValues(updatedSelected);
        onChange(updatedSelected);
    };

    return (
        <div className='w-full flex flex-col justify-center'>
            <h1 className='font-semibold pl-2 mb-2 text-2xl'>เลือกวันเรียน</h1>
            <div className="flex flex-row gap-2 w-full justify-around">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2">
                        <Checkbox
                            value={option.value}
                            checked={selectedValues.includes(option.value)}
                            onCheckedChange={() => handleCheckboxChange(option.value)}
                        />
                        <span>{option.label}</span>
                        {/* <input
          /> */}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default DayCheckBox;
