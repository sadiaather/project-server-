import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Server, Layers, Upload, CheckCircle2, Copy, Check, 
  ArrowRight, AlertCircle, FileText, Trash2, Globe 
} from 'lucide-react';

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    developerName: '',
    projectTiltle:'',
    description: '',
    hostedUrl:''
   
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };


 

  const handleValidate = () => {
    const tempErrors = {};
    const nameRegex = /^[a-z0-9-]+$/;

    if (!formData.projectName.trim()) {
      tempErrors.projectName = 'Project identifier is required';
    } else if (!nameRegex.test(formData.projectName)) {
      tempErrors.projectName = 'Identifier must be lowercase, numbers, or dashes only (e.g. aura-node-1)';
    } else if (formData.projectName.length < 3) {
      tempErrors.projectName = 'Identifier must be at least 3 characters';
    }

    if (formData.modules.length === 0) {
      tempErrors.modules = 'Please select at least one active module';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidate()) return;

    setSubmitStep(1);

  //   // Step 1: Gateway
  //   setTimeout(() => {
  //     setSubmitStep(2);
  //     // Step 2: CPU allocation
  //     setTimeout(() => {
  //       setSubmitStep(3);
  //       // Step 3: Modules compilation
  //       setTimeout(() => {
  //         setSubmitStep(4);
  //       }, 1200);
  //     }, 1200);
  //   }, 1000);
  // };

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(`aura-node-${formData.projectName}-cf87`);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  const resetForm = () => {
    setFormData({
      developerName: '',
    projectTiltle:'',
    description: '',
    hostedUrl:''
    });
    setFile(null);
    setSubmitStep(0);
  };

  // Deploying loaders
  if (submitStep > 0 && submitStep < 4) {
    return (
      <div className="main-content animate-fade-in">
        <div className="form-card glass-panel" style={{ padding: '60px 40px' }}>
          <div className="loader-container" style={{ margin: '0 auto 40px', position: 'relative', width: '120px', height: '120px' }}>
            {/* Spinning background track */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '4px solid rgba(139, 92, 246, 0.05)',
            }}></div>
            {/* Animated primary spinner ring */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '4px solid transparent',
              borderTopColor: 'var(--primary)',
              borderRightColor: 'var(--secondary)',
              animation: 'spin 1.2s linear infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'var(--primary-hover)'
            }}>
              <Server size={40} className="animate-pulse" style={{ animation: 'pulse-heart 1.5s infinite' }} />
            </div>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Provisioning Node</h3>
          <p style={{ color: 'var(--text-secondary)', minHeight: '24px', fontSize: '1rem' }} className="animate-fade-in">
            {stepMessages[submitStep]}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: submitStep >= 1 ? 'var(--primary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: submitStep >= 2 ? 'var(--primary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: submitStep >= 3 ? 'var(--primary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }}></span>
          </div>
        </div>
      </div>
    );
  }

  // Success state layout
  if (submitStep === 4) {
    return (
      <div className="main-content animate-fade-in">
        <div className="form-card glass-panel" style={{ maxWidth: '640px', padding: '40px' }}>
          <div className="success-icon-wrapper animate-pulse-glow" style={{
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            color: 'var(--secondary)',
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

          <h2 style={{ marginBottom: '8px', background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Node Deployed Successfully!
          </h2>
          <p className="mb-8" style={{ fontSize: '0.95rem' }}>
            Your application cluster has been configured and is compiling in edge registers.
          </p>

          {/* Node detail dashboard */}
          <div className="node-summary-board" style={{
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: '24px',
            marginBottom: '32px',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px', marginBottom: '12px' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Deployment ID</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <code style={{ fontSize: '0.85rem', color: 'var(--text-primary)', padding: '2px 6px' }}>aura-node-{formData.projectName}-cf87</code>
                <button onClick={copyToClipboard} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', hover: { color: '#ffffff' } }}>
                  {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '2px' }}>Edge Provider</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '500' }}>
                  <Globe size={14} style={{ color: 'var(--secondary)' }} />
                  {formData.provider === 'aws' ? 'Amazon Web Services' : 
                   formData.provider === 'gcp' ? 'Google Cloud' : 
                   formData.provider === 'azure' ? 'Microsoft Azure' : 'Cloudflare Pages Edge'}
                </div>
              </div>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '2px' }}>Resource Plan</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                  {formData.tier === 'sandbox' ? 'Sandbox Node (Free)' : 
                   formData.tier === 'pro' ? 'Professional Cluster ($15/mo)' : 'Enterprise Scale ($99/mo)'}
                </div>
              </div>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '2px' }}>Status</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#10b981', fontWeight: '600' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                  Compiling (Active)
                </div>
              </div>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '2px' }}>Active Modules</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                  {formData.modules.join(', ')}
                </div>
              </div>
            </div>

            {file && (
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} style={{ color: 'var(--primary-hover)' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Config Schema: <strong>{file.name}</strong> ({(file.size/1024).toFixed(1)} KB)</span>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button onClick={resetForm} className="btn btn-secondary">
              Deploy Another Node
            </button>
            <Link to="/" className="btn btn-primary">
              <span>View Overview</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content animate-fade-in" style={{ width: '100%', maxWidth: '720px' }}>
      <div className="glass-panel" style={{ padding: '40px', width: '100%' }}>
        <div className="form-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
          <span className="badge badge-purple" style={{ marginBottom: '12px' }}>Cluster Setup</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Configure Edge Node</h2>
          <p>Scaffold a virtual environment cluster, assign modules, and inject deployment schemas.</p>
        </div>

        <form onSubmit={handleSubmit}>

           {/* developer name */}
 <div className="form-group">
            <label className="form-label" htmlFor="projectName">Developer Name</label>
            <input
              type="text"
              id="developerName"
              name="developerName"
              value={formData.developerName}
              onChange={handleInputChange}
              className="form-control"
              placeholder="e.g. developerName"
            />
            
           
          </div>

          {/* Project Name */}
         <div className="form-group">
            <label className="form-label" htmlFor="projectTiltle">Project tiltle</label>
            <input
              type="text"
              id="projectTiltle"
              name="projectTiltle"
              value={formData.projectTiltle}
              onChange={handleInputChange}
              className="form-control"
              placeh older="e.g. projectTiltle"
            />
            
</div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label" htmlFor="description">Description (Optional)</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Provide context or architecture tags for this deployment cluster..."
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>
          {/* hosted url */}
           <div className="form-group">
            <label className="form-label" htmlFor="hostedUrl">hosted url</label>
            <textarea
              id="hostedUrl"
              name="hostedUrl"
              value={formData.hostedUrl}
              onChange={handleInputChange}
              className="form-control"
              placeholder="hostedUrl"
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>

 
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '32px', padding: '14px 24px', fontSize: '1rem' }}
          >
            <span>Deploy Node Cluster</span>
            <Cpu size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
}