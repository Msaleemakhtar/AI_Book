---
sidebar_position: 9
title: "Week 9: Isaac ROS Integration"
---

# Week 9: Isaac ROS Integration

## Learning Objectives

- Configure Isaac Sim ROS 2 bridge for topic/service/action communication
- Publish joint commands from ROS 2 to simulated humanoid
- Subscribe to simulated sensor data (cameras, IMU, joint states)
- Synchronize simulation time with ROS 2 clock

## Introduction

Isaac ROS bridges Isaac Sim and ROS 2, enabling you to develop robot controllers in ROS while testing in GPU-accelerated simulation. The bridge supports standard ROS 2 message types, custom interfaces, and time synchronization.

This week you'll build a complete control loop: a ROS 2 node sends joint trajectories to a humanoid in Isaac Sim, receives sensor feedback, and closes the loop with a simple balance controller.

## Key Concepts

### ROS 2 Bridge Configuration

Isaac Sim's ROS 2 bridge publishes clock, joint states, TF transforms, and sensor data. It subscribes to joint commands (position, velocity, or effort control). Configuration is via Python API or OmniGraph.

### OmniGraph for Robotics

OmniGraph is a visual scripting system for real-time logic. Pre-built nodes handle ROS 2 pub/sub, sensor simulation, and articulation control. You can chain nodes to create complex behaviors without coding.

### Simulated Sensors

Isaac Sim provides GPU-accelerated sensors: RGB/depth cameras, LiDAR (ray-cast or GPU-based), IMU (with noise models), force-torque sensors. Sensor data publishes directly to ROS 2 topics.

### Time Synchronization

Isaac Sim runs in "simulation time" (not wall-clock time). The ROS 2 bridge publishes `/clock` to synchronize ROS nodes with simulation. This ensures recorded bags have consistent timestamps.

## Next Steps

Week 10 focuses on manipulation tasks - grasping objects with humanoid hands in Isaac Sim.
