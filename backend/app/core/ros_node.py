import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState

class RobotNode(Node):
    def __init__(self):
        super().__init__("robot_node")
        self.publisher = self.create_publisher(JointState, "joint_states", 10)

    def send_joint_command(self, joint_positions):
        msg = JointState()
        msg.position = joint_positions
        self.publisher.publish(msg)
        return True

node = None

def send_joint_command(joint_positions):
    global node
    if node is None:
        rclpy.init()
        node = RobotNode()
    return node.send_joint_command(joint_positions)
