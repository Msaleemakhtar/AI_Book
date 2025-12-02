---
sidebar_position: 12
title: "Week 12: Locomotion and Vision-Language-Action Models"
---

# Week 12: Locomotion and Vision-Language-Action Models

## Learning Objectives

- Generate walking trajectories using trajectory optimization
- Understand vision-language models (VLMs) for robot perception
- Explore Vision-Language-Action (VLA) architectures
- Integrate language commands with low-level control

## Introduction

Modern humanoid robots combine classical control (for stable walking) with learned policies (for high-level reasoning). Vision-Language-Action (VLA) models like RT-2, PaLM-E, and OpenVLA use transformer architectures to map camera images and natural language instructions directly to robot actions.

This week bridges low-level locomotion with high-level VLA intelligence. You'll learn to generate walking gaits, then explore how VLAs enable robots to follow instructions like "walk to the red box and pick it up."

## Key Concepts

### Trajectory Optimization for Walking

Walking controllers compute footstep plans and CoM trajectories. Methods include: template models (LIPM, SLIP), trajectory optimization (direct collocation, CHOMP), and learning (RL, imitation learning).

### Vision-Language Models (VLMs)

VLMs like CLIP, LLaVA, and GPT-4V encode images and text into shared embeddings. They enable zero-shot object recognition, scene understanding, and visual question answering.

### VLA Architectures

VLA models extend VLMs with action prediction heads. RT-2 (Robotics Transformer 2) fine-tunes a VLM (PaLI-X) on robot demonstration data, achieving generalization to novel objects and tasks.

### Language-Conditioned Policies

VLAs take as input: image observations, proprioceptive state, and language command. They output low-level actions (joint positions/velocities) or high-level waypoints. The control hierarchy ensures safe, stable execution.

## Next Steps

Week 13 is the capstone - you'll build an end-to-end system combining ROS 2, Isaac Sim, and a VLA model.
