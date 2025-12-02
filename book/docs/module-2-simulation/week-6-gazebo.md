---
sidebar_position: 6
title: "Week 6: Gazebo Simulation"
---

# Week 6: Gazebo Simulation

## Learning Objectives

- Set up Gazebo Classic and Gazebo Sim (Ignition) environments
- Spawn URDF robots in Gazebo worlds
- Integrate Gazebo with ROS 2 via `ros_gz_bridge`
- Simulate sensors (cameras, LiDAR, IMU) and actuators

## Introduction

Gazebo is an open-source 3D robotics simulator that provides realistic physics, sensor simulation, and rendering. It enables testing robot controllers in safe virtual environments before deploying to hardware. Gazebo integrates tightly with ROS 2 through the `ros_gz` packages.

This week covers Gazebo basics: creating worlds, spawning robots, configuring physics engines (ODE, Bullet, Dart), and bridging Gazebo topics to ROS 2. You'll learn to simulate a simple wheeled robot and progress toward humanoid simulation in Isaac Sim.

## Key Concepts

### Gazebo Classic vs. Gazebo Sim

Gazebo Classic (versions up to 11) is widely used but deprecated. Gazebo Sim (formerly Ignition, now Gazebo Harmonic) is the modern rewrite with improved performance, modularity, and graphics. ROS 2 Humble works with both.

### World and Model SDFs

Gazebo uses SDF (Simulation Description Format) to define worlds (environments) and models (robots, obstacles). SDF extends URDF with physics parameters, sensors, and plugins.

### ROS 2 Gazebo Bridge

The `ros_gz_bridge` package translates messages between ROS 2 topics/services and Gazebo's internal transport. This allows ROS 2 nodes to control simulated robots and receive simulated sensor data.

### Sensor Plugins

Gazebo provides plugins for cameras, depth sensors, LiDAR, IMUs, and contact sensors. These plugins publish to Gazebo topics, which the bridge forwards to ROS 2.

## Next Steps

Week 7 explores Unity simulation with the Unity Robotics Hub, an alternative to Gazebo with superior graphics and ML integration.
