from fastapi import FastAPI
from app.api import telemetry, control

app = FastAPI()

# Include API routers
app.include_router(telemetry.router, prefix="/api/telemetry", tags=["Telemetry"])
app.include_router(control.router, prefix="/api/control", tags=["Control"])

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
