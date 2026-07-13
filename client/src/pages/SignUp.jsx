import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Password rules validation helper
  const getPasswordRules = (pass) => {
    return {
      length: pass.length >= 6,
      number: /\d/.test(pass),
      special: /[^A-Za-z0-9]/.test(pass),
    };
  };

  const rules = getPasswordRules(formData.password);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleValidate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else {
      if (!rules.length) tempErrors.password = 'Password must be at least 6 characters';
      else if (!rules.number) tempErrors.password = 'Password must contain at least one number';
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      tempErrors.agreeTerms = 'You must accept the terms & conditions';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidate()) return;

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="main-content animate-fade-in">
        <div className="form-card glass-panel text-center">
          <div className="success-icon-wrapper animate-pulse-glow" style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#10b981',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <CheckCircle2 size={36} />
          </div>
          <h2 className="mb-8" style={{ color: '#10b981' }}>Account Created!</h2>
          <p className="mb-8" style={{ fontSize: '1.05rem' }}>
            Welcome to AuraPortal, <strong>{formData.name}</strong>. Your developer profile has been provisioned.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/submit-form" className="btn btn-primary">
              <span>Complete Setup</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/" className="btn btn-secondary">
              <span>Go to Overview</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content animate-fade-in">
      <div className="form-card glass-panel">
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Get started with your free developer account today.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <div style={{ position: 'relative' }}>
              <User style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="John Doe"
                style={{ paddingLeft: '48px' }}
              />
            </div>
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="you@example.com"
                style={{ paddingLeft: '48px' }}
              />
            </div>
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="••••••••"
                style={{ paddingLeft: '48px', paddingRight: '48px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span className="form-error">{errors.password}</span>}

            {/* Password strength checklist */}
            {formData.password && (
              <div className="password-checklist" style={{ marginTop: '12px', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.8rem', textAlign: 'left' }}>
                <div style={{ fontWeight: '600', marginBottom: '6px', color: 'var(--text-secondary)' }}>Password Requirements:</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: rules.length ? '#10b981' : 'var(--text-muted)', transition: 'color 0.2s' }}>
                  <CheckCircle2 size={12} style={{ fill: rules.length ? 'rgba(16,185,129,0.1)' : 'none' }} />
                  <span>At least 6 characters long</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: rules.number ? '#10b981' : 'var(--text-muted)', transition: 'color 0.2s', marginTop: '4px' }}>
                  <CheckCircle2 size={12} style={{ fill: rules.number ? 'rgba(16,185,129,0.1)' : 'none' }} />
                  <span>Contains a number</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: rules.special ? '#10b981' : 'var(--text-muted)', transition: 'color 0.2s', marginTop: '4px' }}>
                  <CheckCircle2 size={12} style={{ fill: rules.special ? 'rgba(16,185,129,0.1)' : 'none' }} />
                  <span>Contains a special character</span>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="••••••••"
                style={{ paddingLeft: '48px', paddingRight: '48px' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
          </div>

          {/* Agree Terms */}
          <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '24px' }}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              style={{ marginTop: '4px', cursor: 'pointer' }}
            />
            <label htmlFor="agreeTerms" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer', userSelect: 'none' }}>
              I agree to the <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a> and <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
            </label>
          </div>
          {errors.agreeTerms && <div className="form-error" style={{ textAlign: 'left', marginBottom: '16px' }}>{errors.agreeTerms}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}
            style={{ width: '100%', marginTop: '16px' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="spinner" style={{
                  width: '18px',
                  height: '18px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#ffffff',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}></div>
                <span>Creating Account...</span>
              </div>
            ) : (
              <span>Create Account</span>
            )}
          </button>
        </form>

        <p style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login" style={{ fontWeight: '600' }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
