import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cpu, ArrowRight, CheckCircle, Users, Layers, Award } from 'lucide-react';

export default function Landing() {
  return (
    <div className="main-content animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <span className="badge badge-purple hero-badge animate-slide-up">
          Now in Public Beta
        </span>
        <h1 className="hero-title animate-slide-up">
          The Intelligent Interface for <br />
          <span className="text-gradient">Modern Web Applications</span>
        </h1>
        <p className="hero-description animate-slide-up">
          AuraPortal gives developers and product teams a stunning dashboard engine to orchestrate cloud resources, track client telemetry, and automate deployments without writing custom UI scaffolding.
        </p>
        <div className="hero-ctas animate-slide-up">
          <Link to="/submit-form" className="btn btn-primary">
            <span>Get Started Free</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            <span>Create Account</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section glass-panel">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">99.99%</span>
            <span className="stat-label">System Uptime</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15M+</span>
            <span className="stat-label">API Requests/day</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">&lt; 12ms</span>
            <span className="stat-label">Average Latency</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">180+</span>
            <span className="stat-label">Global Edges</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Engineered for High-Velocity Teams</h2>
          <p>Everything you need to launch, scale, and monitor your cloud apps is built right into our custom dashboard blocks.</p>
        </div>

        <div className="grid-cols-3">
          {/* Feature 1 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper purple-glow">
              <Zap size={24} />
            </div>
            <h3>Lightning Fast Metrics</h3>
            <p>Deploy globally distributed node monitors and experience millisecond refreshes. No slow polling or stalled threads.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper cyan-glow">
              <Shield size={24} />
            </div>
            <h3>Zero-Trust Security</h3>
            <p>Every packet is signed and authenticated. Built-in SSO and multi-role directory rules keep security airtight by design.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper rose-glow">
              <Cpu size={24} />
            </div>
            <h3>Autonomous Agents</h3>
            <p>Define alert conditions and let our background agents resolve network failures, database scaling, or DNS reroutes.</p>
          </div>
        </div>
      </section>

      {/* Benefits / List Section */}
      <section className="benefits-section glass-panel">
        <div className="grid-cols-2 align-items-center">
          <div className="benefits-text">
            <h2>Why developers prefer AuraPortal</h2>
            <p className="mb-8">We focus on layout perfection, intuitive micro-animations, and fast page weight so you can focus on building your business.</p>
            
            <div className="benefit-item">
              <CheckCircle className="benefit-icon" size={20} />
              <div>
                <h4>Immediate Code Generation</h4>
                <p>Export dashboard configurations as standard React JSX components at any time.</p>
              </div>
            </div>

            <div className="benefit-item">
              <CheckCircle className="benefit-icon" size={20} />
              <div>
                <h4>Universal Node Connectors</h4>
                <p>Ready-to-use hooks for PostgreSQL, Redis, Kubernetes, AWS, and Cloudflare.</p>
              </div>
            </div>

            <div className="benefit-item">
              <CheckCircle className="benefit-icon" size={20} />
              <div>
                <h4>Lightweight Bundle</h4>
                <p>Under 10KB total script footprint, optimized for lightning-fast page loading.</p>
              </div>
            </div>
          </div>

          <div className="benefits-visual">
            <div className="visual-dashboard-mockup">
              <div className="mockup-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="mockup-title">aura-config.json</span>
              </div>
              <pre className="mockup-code">
                <code>
{`{
  "project": "AuraPortal",
  "version": "2.4.0",
  "routing": {
    "mode": "edge",
    "regions": ["us-east", "eu-west"]
  },
  "modules": [
    "landing",
    "login",
    "signup",
    "submit-form"
  ],
  "theme": "dark-premium"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="cta-banner glass-panel">
        <h2>Start orchestrating your apps today</h2>
        <p>Create your account in minutes. No credit card required during beta testing.</p>
        <div className="cta-banner-buttons">
          <Link to="/signup" className="btn btn-primary">
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/login" className="btn btn-secondary">
            <span>Sign In</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
