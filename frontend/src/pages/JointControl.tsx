import React, { useState } from "react";
import Slider from "../components/Slider";

const JointControl = () => {
    const [joints, setJoints] = useState([0, 0, 0, 0, 0, 0]);

    const handleSliderChange = (index: number, value: number) => {
        const updatedJoints = [...joints];
        updatedJoints[index] = value;
        setJoints(updatedJoints);
    };

    const handleSubmit = async () => {
        const response = await fetch("http://localhost:8000/api/control/joints", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(joints),
        });
        const result = await response.json();
        console.log("Joint control result:", result);
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Joint Control</h1>
            {joints.map((joint, index) => (
                <Slider
                    key={index}
                    label={`Joint ${index + 1}`}
                    value={joint}
                    onChange={(value) => handleSliderChange(index, value)}
                />
            ))}
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
            >
                Send Joint Command
            </button>
        </div>
    );
};

export default JointControl;
