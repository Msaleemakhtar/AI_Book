---
sidebar_position: 11
title: "Week 11: Whole-Body Humanoid Control"
---

# Week 11: Whole-Body Humanoid Control

## Learning Objectives

- Understand whole-body control frameworks (MPC, QP optimization)
- Implement balance controllers using centroidal dynamics
- Coordinate arms, legs, and torso for dynamic tasks
- Analyze stability margins and zero-moment point (ZMP)

## Introduction

Controlling a humanoid robot requires coordinating 20-40 degrees of freedom while maintaining balance, avoiding obstacles, and executing tasks. Whole-body control (WBC) formulates robot motion as an optimization problem with constraints on joint limits, contact forces, and center of mass.

This week covers WBC fundamentals: centroidal dynamics, ZMP stability criteria, and quadratic programming (QP) for real-time control. You'll implement a standing balance controller and extend it to walking.

## Key Concepts

### Centroidal Dynamics

The centroidal model abstracts a humanoid as a single rigid body (center of mass) with angular momentum. It captures essential balance dynamics while being computationally tractable for real-time control.

### Zero-Moment Point (ZMP)

The ZMP is the point on the ground where the sum of moments from gravity and inertia is zero. If ZMP stays inside the support polygon (footprint), the robot won't tip over. ZMP-based control ensures stable walking.

### Whole-Body QP

QP-based WBC computes joint accelerations that satisfy task objectives (e.g., "move hand to target") and constraints (e.g., "ZMP inside support polygon", "joint limits"). Solvers like OSQP or qpOASES run at kHz rates.

### Hierarchical Task Control

Tasks have priorities: balance (highest), foot placement, arm reaching (lower). Lower-priority tasks use null space of higher priorities. This enables multi-objective control without conflicts.

## Next Steps

Week 12 covers locomotion - generating and executing walking gaits for bipedal humanoids.
