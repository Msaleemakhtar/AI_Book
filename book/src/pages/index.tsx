import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Learn Physical AI and Humanoid Robotics with ROS 2, NVIDIA Isaac, and VLA Models">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--12">
              <h2>What You'll Learn</h2>
              <p>
                This comprehensive 13-week textbook teaches you to control humanoid robots using industry-standard tools and cutting-edge AI models.
              </p>
            </div>
          </div>
          <div className="row margin-top--lg">
            <div className="col col--6 margin-bottom--lg">
              <h3>🤖 Module 1: ROS 2 Fundamentals</h3>
              <p>Master the robotic nervous system - learn sensors, actuators, nodes, topics, and URDF modeling.</p>
            </div>
            <div className="col col--6 margin-bottom--lg">
              <h3>🎮 Module 2: Simulation</h3>
              <p>Explore Gazebo and Unity for robot simulation before transitioning to NVIDIA Isaac Sim.</p>
            </div>
            <div className="col col--6">
              <h3>🚀 Module 3: NVIDIA Isaac</h3>
              <p>Leverage GPU-accelerated Isaac Sim and Isaac ROS for advanced manipulation tasks.</p>
            </div>
            <div className="col col--6">
              <h3>🧠 Module 4: Vision-Language-Action</h3>
              <p>Discover how humanoids learn from vision and language using cutting-edge VLA models.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
