from fastapi import APIRouter
from app.core.ros_node import send_joint_command

router = APIRouter()

@router.post("/joints")
async def control_joints(joints: list[float]):
    success = send_joint_command(joints)
    return {"success": success}
