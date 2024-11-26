import React from "react";

const Slider = ({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) => {
    return (
        <div className="flex items-center space-x-4">
            <label className="w-24">{label}</label>
            <input
                type="range"
                min="0"
                max="360"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="flex-grow"
            />
            <span>{value}°</span>
        </div>
    );
};

export default Slider;
