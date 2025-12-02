---
sidebar_position: 5
title: "Week 5: URDF and TF2 Transforms"
---

# Week 5: URDF and TF2 Transforms

## Learning Objectives

- Define robot kinematics using URDF (Unified Robot Description Format)
- Visualize robots in RViz with joint state publishers
- Understand coordinate frame transforms with TF2
- Query and transform data between robot frames

## Introduction

The URDF format describes robot geometry, kinematics, and dynamics in XML. Every link and joint is explicitly modeled, enabling motion planning, collision checking, and physics simulation. RViz visualizes URDF models and TF2 frame trees.

TF2 (Transform Library 2) maintains the relationship between coordinate frames over time. When a sensor reports "object at (1, 0, 0) in camera frame", TF2 transforms this to any other frame (e.g., robot base, world). This spatial reasoning capability is foundational for navigation and manipulation.

## Key Concepts

### URDF Syntax

URDF defines links (rigid bodies with visual and collision geometry) and joints (connections with motion constraints). Fixed, revolute, prismatic, and continuous joints model different kinematic pairs.

### Joint State Publishers

The `joint_state_publisher` node broadcasts joint angles. The `robot_state_publisher` uses forward kinematics to compute all link transforms and publishes them to TF2.

### TF2 Transform Tree

TF2 organizes frames in a tree structure. Each frame has exactly one parent. The `tf2_ros` library provides APIs to query transforms like "what's the pose of end_effector in base_link frame at time T?"

### RViz Visualization

RViz displays TF frames as colored axes, URDF links as 3D meshes, and sensor data (point clouds, camera images) registered to the robot model. It's the primary tool for debugging robot perception and control.

## Next Steps

Module 2 transitions from ROS 2 fundamentals to simulation environments, starting with Gazebo in Week 6.
