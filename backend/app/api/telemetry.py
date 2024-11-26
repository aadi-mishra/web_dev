from fastapi import APIRouter, WebSocket
import asyncio

router = APIRouter()

# REST API for static telemetry
@router.get("/")
async def get_telemetry():
    return {"battery": "87%", "velocity": "0.3 m/s"}

# WebSocket for real-time telemetry
@router.websocket("/ws")
async def telemetry_ws(websocket: WebSocket):
    await websocket.accept()
    while True:
        # Simulating real-time telemetry
        telemetry = {"battery": "86%", "velocity": "0.4 m/s"}
        await websocket.send_json(telemetry)
        await asyncio.sleep(1)  # Simulate 1-second intervals
