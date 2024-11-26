import React, { useEffect, useState } from "react";

const Home = () => {
    const [telemetry, setTelemetry] = useState({ battery: "", velocity: "" });

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8000/api/telemetry/ws");
        socket.onmessage = (event) => setTelemetry(JSON.parse(event.data));
        return () => socket.close();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Home Dashboard</h1>
            <p>Battery: {telemetry.battery}</p>
            <p>Velocity: {telemetry.velocity}</p>
        </div>
    );
};

export default Home;
