---
sidebar_position: 10
title: "Week 10: Manipulation and Grasping"
---

# Week 10: Manipulation and Grasping

## Learning Objectives

- Set up manipulation scenes with objects and dexterous hands
- Implement inverse kinematics (IK) solvers for arm control
- Simulate force closure grasps with PhysX contact solver
- Use domain randomization for robust grasp learning

## Introduction

Manipulation is a core capability for humanoid robots. Tasks like picking objects, opening doors, and using tools require precise end-effector control, grasp planning, and force regulation. Isaac Sim's PhysX engine accurately simulates contacts, friction, and multi-body dynamics.

This week covers manipulation basics: reaching target poses with IK, grasping primitive shapes, and evaluating grasp stability. We'll use Isaac Sim's built-in grasp planning tools and explore data generation for learning-based grasping.

## Key Concepts

### Inverse Kinematics

IK computes joint angles to achieve a desired end-effector pose. Isaac Sim provides a fast GPU-accelerated IK solver via the Lula library. For humanoids, IK must respect joint limits, avoid self-collisions, and maintain balance.

### Dexterous Hands

Humanoid hands (e.g., Shadow Hand, Allegro Hand) have 15-20 degrees of freedom. Controlling them requires coordinated finger motion. Isaac Sim simulates tendon-driven and underactuated hands.

### Grasp Planning

Grasp planning identifies contact points that immobilize an object (force closure). Analytical methods use friction cones and wrench spaces. Learning-based methods train neural networks on synthetic grasp datasets.

### Domain Randomization

To transfer grasps from simulation to reality, randomize object poses, sizes, masses, friction, and lighting. Isaac Sim's Replicator API automates domain randomization for dataset generation.

## Next Steps

Module 4 introduces Vision-Language-Action models - the cutting edge of humanoid AI. Week 11 begins with whole-body humanoid control.
