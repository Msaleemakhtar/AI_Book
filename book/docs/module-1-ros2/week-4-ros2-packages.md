---
sidebar_position: 4
title: "Week 4: ROS 2 Packages and Build Systems"
---

# Week 4: ROS 2 Packages and Build Systems

## Learning Objectives

- Create ROS 2 packages using `colcon` build system
- Understand package.xml dependencies and CMakeLists.txt configuration
- Organize code into launch files for multi-node applications
- Use ROS 2 parameters for runtime configuration

## Introduction

ROS 2 packages are the unit of software organization and distribution. A well-structured package includes source code, launch files, configuration, and documentation. The `colcon` build tool compiles packages and manages dependencies across workspaces.

This week teaches professional ROS 2 development practices: how to structure packages for maintainability, write launch files to orchestrate complex systems, and use parameters to configure behavior without recompilation.

## Key Concepts

### Package Structure

A typical ROS 2 package contains: `package.xml` (metadata and dependencies), `CMakeLists.txt` or `setup.py` (build configuration), `src/` (source code), `launch/` (launch files), `config/` (parameters), and `msg/srv/action/` (interface definitions).

### Colcon Build System

Colcon is a meta-build system that invokes CMake (for C++ packages) or setuptools (for Python packages). It builds packages in dependency order and sets up environment overlays.

### Launch Files

Launch files (Python or XML) start multiple nodes, set parameters, and configure remappings. They enable "one-command" startup of complex robot applications.

### ROS 2 Parameters

Parameters provide runtime configuration without code changes. Use parameters for tuning controller gains, sensor topics, or algorithm settings. The `ros2 param` CLI and YAML files make parameter management straightforward.

## Next Steps

Week 5 covers URDF robot models and TF2 coordinate frame transforms - essential for spatial reasoning and motion planning.
