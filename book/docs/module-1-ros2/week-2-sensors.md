---
sidebar_position: 2
title: "Week 2: Sensors and Actuators"
---

# Week 2: Sensors and Actuators

## Learning Objectives

- Identify common sensors used in humanoid robots (cameras, IMUs, force sensors)
- Understand actuator types and their trade-offs
- Analyze sensor fusion techniques for state estimation
- Explore how sensors and actuators interface with ROS 2

## Introduction

Humanoid robots rely on a sophisticated array of sensors to perceive their environment and actuators to execute movements. This week examines the hardware layer - from RGB-D cameras and LiDAR to electric motors and hydraulic actuators - that enables robots to sense and act in the physical world.

Understanding sensor characteristics (accuracy, latency, noise) and actuator capabilities (torque, speed, precision) is essential for designing effective robot control systems. We'll explore how ROS 2 abstracts hardware interfaces to enable portable, reusable robot software.

## Key Concepts

### Sensor Modalities

Humanoid robots typically integrate multiple sensor types: RGB-D cameras for vision, inertial measurement units (IMUs) for balance, force-torque sensors in feet and hands, joint encoders for proprioception, and LiDAR for spatial mapping.

### Actuator Technologies

Electric motors dominate current humanoid designs due to their precision and control simplicity, but hydraulic and pneumatic actuators offer higher power density. Emerging technologies like artificial muscles and soft actuators promise more human-like motion.

### Sensor Fusion

Combining multiple sensor streams through Kalman filters or particle filters improves state estimation accuracy and robustness. ROS 2's `robot_localization` package provides production-ready sensor fusion for mobile robots.

## Next Steps

Week 3 introduces ROS 2 basics - the software infrastructure that connects sensors, actuators, and control algorithms.
