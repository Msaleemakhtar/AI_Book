---
sidebar_position: 3
title: "Week 3: ROS 2 Basics"
---

# Week 3: ROS 2 Basics

## Learning Objectives

- Install and configure ROS 2 Humble on Ubuntu 22.04
- Understand nodes, topics, services, and actions
- Create your first ROS 2 node in Python and C++
- Use command-line tools (ros2 topic, ros2 node, ros2 run)

## Introduction

The Robot Operating System 2 (ROS 2) provides a modular software framework for building robot applications. Unlike its predecessor ROS 1, ROS 2 supports real-time systems, multi-robot coordination, and production deployments through its DDS (Data Distribution Service) middleware.

This week covers ROS 2 fundamentals: how to structure robot software as a graph of nodes, communicate via publish-subscribe topics, invoke remote procedures through services, and handle long-running tasks with actions.

## Key Concepts

### Nodes and the Computation Graph

A ROS 2 node is an independent process that performs computation. Nodes communicate over a peer-to-peer network without a central master (unlike ROS 1), improving fault tolerance and scalability.

### Topics for Streaming Data

Topics enable asynchronous, many-to-many communication. Sensors publish data to topics; controllers subscribe to process it. The pub-sub pattern decouples producers and consumers.

### Services for Request-Response

Services provide synchronous RPC (remote procedure call) semantics. Use services for operations that require a response, like inverse kinematics calculations or parameter updates.

### Actions for Long-Running Tasks

Actions combine goals, feedback, and results for operations like "move arm to target pose" or "navigate to waypoint". Action servers provide cancelable, preemptible task execution.

## Next Steps

Week 4 dives into ROS 2 packages - how to organize, build, and distribute robot software as reusable components.
