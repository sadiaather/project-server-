import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ShieldCheck, CheckCircle2, ArrowRight, LogIn } from 'lucide-react';
import axios from 'axios'
import { toast } from 'react-toastify';
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''

  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


 
  const handleChange = (e) => {
  
   setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
 console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();                                   
     console.log(formData);
     try{
      let res =  axios.post("http://localhost:5000/api/auth/signUp",JSON.stringify(formData),
     {
        headers: {
         
          "Content-Type": "application/json"
        }
      }).then(res=>console.log(res.formData) )
      toast.success("acount created successfuly")
      
     }
     catch (err){
console.log(err);

     }
  
  };

  
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
                placeholder="name"
                style={{ paddingLeft: '48px' }}
              />
            </div>
          
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

          </div>

           

        
          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}
            style={{ width: '100%', marginTop: '16px' }}
            disabled={isSubmitting} onClick={handleSubmit}
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
          Already have an account? <Link to="/login" style={{ fontWeight: '600' }}>Log In</Link>
        </p>
      </div>
    </div>
  );
}
