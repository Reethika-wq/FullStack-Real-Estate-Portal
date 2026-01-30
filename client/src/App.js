import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const API_BASE = "http://localhost:5000/api";

// --- THEME COLORS ---
const COLORS = {
  navy: '#1a2e5a',
  orange: '#F36F21',
  blue: '#417EF1',
  dark: '#1e1e24',
  text: '#666',
  bgLight: '#fcfdff'
};

const s = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 100px', background: 'white', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  link: { textDecoration: 'none', color: COLORS.navy, fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', textTransform: 'uppercase', margin: '0 15px' },
  hero: { height: '80vh', background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600") center/cover', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 100px' },
  form: { background: 'rgba(26, 46, 90, 0.9)', padding: '30px', borderRadius: '4px', width: '340px', color: 'white' },
  input: { width: '100%', padding: '12px', margin: '8px 0', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: '4px', outline: 'none' },
  orangeBtn: { width: '100%', background: COLORS.orange, color: 'white', padding: '14px', border: 'none', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px' },
  blueHr: { width: '50px', height: '3px', background: COLORS.blue, margin: '15px auto', border: 'none' },
  section: { padding: '80px 100px', textAlign: 'center' },
};

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contact, setContact] = useState({ name: '', email: '', phone: '', city: '' });
  const [subEmail, setSubEmail] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/projects`).then(res => res.json()).then(setProjects);
    fetch(`${API_BASE}/clients`).then(res => res.json()).then(setClients);
  }, []);

  const handleContact = () => {
    fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
    }).then(() => alert("Inquiry Sent!"));
  };

  const handleSubscribe = () => {
    fetch(`${API_BASE}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: subEmail })
    }).then(() => alert("Subscribed!"));
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', color: COLORS.text, overflowX: 'hidden' }}>
      
      {/* 1. NAVBAR */}
      <nav style={s.nav}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: COLORS.navy }}>Real Trust</div>
        <div>
          <span onClick={() => window.scrollTo(0,0)} style={s.link}>Home</span>
          <span onClick={() => scrollTo('about')} style={s.link}>Services</span>
          <span onClick={() => scrollTo('projects')} style={s.link}>Projects</span>
          <span onClick={() => scrollTo('testimonials')} style={s.link}>Testimonials</span>
          <Link to="/admin" style={{ ...s.link, color: COLORS.orange }}>Admin Panel</Link>
        </div>
        <button style={{ background: COLORS.navy, color: 'white', padding: '10px 25px', border: 'none', borderRadius: '3px', fontWeight: 'bold' }}>CONTACT</button>
      </nav>

      {/* 2. HERO & CONTACT FORM */}
      <div id="contact" style={s.hero}>
        <h1 style={{ color: 'white', fontSize: '56px', maxWidth: '550px', lineHeight: '1.1' }}>Consultation, Design, & Marketing</h1>
        <div style={s.form}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '20px' }}>Get a Free Consultation</h3>
          <input placeholder="Full Name" style={s.input} onChange={e => setContact({...contact, name: e.target.value})} />
          <input placeholder="Enter Email Address" style={s.input} onChange={e => setContact({...contact, email: e.target.value})} />
          <input placeholder="Mobile Number" style={s.input} onChange={e => setContact({...contact, phone: e.target.value})} />
          <input placeholder="Area, City" style={s.input} onChange={e => setContact({...contact, city: e.target.value})} />
          <button style={s.orangeBtn} onClick={handleContact}>Get Quick Quote</button>
        </div>
      </div>

      <div style={{ background: 'white', position: 'relative', overflow: 'hidden' }}>

        {/* 3. SECTION: NOT YOUR AVERAGE REALTOR */}
        <section style={{ padding: '80px 10%', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'absolute', top: '-100px', left: '-10%', width: '600px', height: '600px', border: '1px solid #E6EEFF', borderRadius: '50%', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '5%', width: '80px', height: '60px', backgroundImage: 'radial-gradient(#e0e0e0 2px, transparent 2px)', backgroundSize: '12px 12px', opacity: 0.8, zIndex: 1 }}></div>

          <div style={{ flex: 1, zIndex: 2 }}>
            <h2 style={{ color: COLORS.blue, fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>Not Your Average Realtor</h2>
            <p style={{ color: COLORS.text, lineHeight: '1.8', fontSize: '14px', maxWidth: '450px' }}>
              Real Trust has an eye for seeing a property's potential, coordinating design, and effective marketing.
            </p>
          </div>

          <div style={{ flex: 1, position: 'relative', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', width: '420px', height: '420px', border: '1px solid #E6EEFF', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', width: '550px', height: '550px', border: '1px solid #E6EEFF', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '20px', left: '10%', width: '22px', height: '22px', background: COLORS.blue, borderRadius: '50%', zIndex: 3 }}></div>
            <div style={{ position: 'absolute', top: '55%', left: '-15px', width: '15px', height: '15px', background: COLORS.orange, borderRadius: '50%', zIndex: 3 }}></div>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" style={{ width: '280px', height: '280px', borderRadius: '50%', border: '15px solid #F4F8FF', objectFit: 'cover', zIndex: 2 }} alt="Main" />
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200" style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', right: '-20px', top: '20px', border: '8px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 3 }} alt="T1" />
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200" style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', right: '40px', bottom: '40px', border: '8px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 3 }} alt="T2" />
          </div>
        </section>

        {/* 4. SECTION: WHY CHOOSE US */}
        <section style={{ padding: '60px 10%', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'absolute', bottom: '-20%', right: '-15%', width: '800px', height: '800px', border: '1px solid #E6EEFF', borderRadius: '50%', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '40%', right: '22%', width: '14px', height: '14px', background: COLORS.blue, borderRadius: '50%', zIndex: 3 }}></div>

          <h2 style={{ color: COLORS.blue, fontSize: '32px', fontWeight: 'bold' }}>Why Choose Us?</h2>
          <div style={{ width: '60px', height: '3px', background: COLORS.blue, margin: '15px auto', position: 'relative' }}>
            <div style={{ position: 'absolute', right: '-160px', top: '-4px', width: '10px', height: '10px', background: COLORS.blue, borderRadius: '50%' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '80px' }}>
            {[
              { n: 'Potential ROI', i: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.blue} strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { n: 'Design', i: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.blue} strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg> },
              { n: 'Marketing', i: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.blue} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg> }
            ].map((item, idx) => (
              <div key={idx} style={{ flex: 1, maxWidth: '280px', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', boxShadow: '0 8px 25px rgba(65, 126, 241, 0.08)' }}>{item.i}</div>
                <h4 style={{ color: COLORS.navy, fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>{item.n}</h4>
                <p style={{ fontSize: '13px', color: COLORS.text, lineHeight: '1.7' }}>Professional guidance through potential return.</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SECTION: ABOUT US */}
<section id="about" style={{ padding: '100px 10%', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
  <div style={{ position: 'absolute', top: '10%', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: '#F4F8FF', zIndex: 0 }}></div>
  <div style={{ position: 'absolute', top: '40px', right: '10%', width: '120px', height: '80px', backgroundImage: 'radial-gradient(#ddd 2px, transparent 2px)', backgroundSize: '12px 12px', opacity: 0.7, zIndex: 1 }}></div>
  <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '100px', height: '100px', backgroundImage: `radial-gradient(${COLORS.blue} 2px, transparent 2px)`, backgroundSize: '15px 15px', opacity: 0.4, zIndex: 1 }}></div>
  <div style={{ position: 'absolute', top: '15%', left: '35%', width: '200px', height: '200px', background: '#EBF3FF', zIndex: 1 }}></div>

  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginBottom: '60px', position: 'relative', zIndex: 2, height: '350px' }}>
    <div style={{ position: 'relative', top: '-40px' }}>
      <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '40px', height: '40px', borderBottom: '4px solid ' + COLORS.orange, borderLeft: '4px solid ' + COLORS.orange, zIndex: 3 }}></div>
      <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=500" style={{ width: '150px', height: '180px', objectFit: 'cover', borderRadius: '4px' }} alt="A1" />
    </div>
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '45px', height: '45px', background: COLORS.blue, zIndex: 4 }}></div>
      <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '50px', height: '50px', borderTop: '4px solid ' + COLORS.blue, borderRight: '4px solid ' + COLORS.blue, zIndex: 3 }}></div>
      <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600" style={{ width: '380px', height: '280px', objectFit: 'cover', borderRadius: '4px' }} alt="Main" />
    </div>
    <div style={{ position: 'relative', bottom: '-40px' }}>
      <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: '4px solid ' + COLORS.orange, borderRight: '4px solid ' + COLORS.orange, zIndex: 3 }}></div>
      <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300" style={{ width: '180px', height: '150px', objectFit: 'cover', borderRadius: '4px' }} alt="A3" />
    </div>
  </div>

  <div style={{ position: 'relative', zIndex: 5 }}>
    <h2 style={{ color: COLORS.blue, fontSize: '32px', fontWeight: 'bold' }}>About Us</h2>
    <p style={{ maxWidth: '850px', margin: '20px auto', fontSize: '15px', color: '#666' }}>
        Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through. We provide quality service to build relationships with clients and maintain those relationships by communicating effectively.
      </p>
    <button style={{ border: '1.5px solid ' + COLORS.blue, background: 'none', color: COLORS.blue, padding: '12px 45px', fontWeight: 'bold', cursor: 'pointer' }}>LEARN MORE</button>
  </div>
</section>
        
        {/* 6. OUR PROJECTS (DYNAMIC FETCH) */}
<section id="projects" style={{ ...s.section, background: '#fcfdff', position: 'relative', zIndex: 2 }}>
  <div style={{ position: 'absolute', bottom: '10%', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: '#F4F8FF', zIndex: 0 }}></div>
  <div style={{ position: 'absolute', top: '100px', left: '5%', width: '100px', height: '120px', backgroundImage: 'radial-gradient(#ddd 2.5px, transparent 2.5px)', backgroundSize: '15px 15px', opacity: 0.6, zIndex: 1 }}></div>
  <h2 style={{ color: COLORS.navy, fontSize: '32px' }}>Our Projects</h2>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '50px' }}>
    {projects.filter(p => p.title && p.title.trim() !== "").map((p, i) => (
      <div key={i} style={{ width: '210px', background: 'white', borderRadius: '8px', overflow: 'hidden', textAlign: 'center', paddingBottom: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
        <img src={p.img} style={{ width: '100%', height: '140px', objectFit: 'cover' }} alt="" />
        <div style={{ padding: '15px' }}>
          <h4 style={{ margin: '5px 0', color: COLORS.navy }}>{p.title}</h4>
          <p style={{ fontSize: '11px', color: '#bbb', marginBottom: '15px' }}>{p.description}</p>
          <button style={{ ...s.orangeBtn, width: 'auto', padding: '8px 22px', fontSize: '11px' }}>READ MORE</button>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* 7. HAPPY CLIENTS (DYNAMIC FETCH) */}
<section id="testimonials" style={{ ...s.section, background: COLORS.bgLight, position: 'relative', zIndex: 2 }}>
  <div style={{ position: 'absolute', bottom: '60px', right: '5%', width: '100px', height: '120px', backgroundImage: 'radial-gradient(#ddd 2.5px, transparent 2.5px)', backgroundSize: '15px 15px', opacity: 0.6, zIndex: 1 }}></div>
  <h2 style={{ color: COLORS.navy, fontSize: '32px', marginBottom: '80px' }}>Happy Clients</h2>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
    {clients.filter(c => c.name && c.name.trim() !== "").map((c, i) => (
    <div key={i} style={{ background: 'white', width: '280px', padding: '50px 25px 30px', position: 'relative', textAlign: 'center', borderRadius: '8px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}>
      <img 
        src={c.img || "https://via.placeholder.com/80"} 
        style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', objectFit: 'cover' }} 
        alt="" 
      />
      <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px', color: '#444', minHeight: '40px' }}>
        "{c.description || c.testimonial || "Great experience working with the team!"}"
      </p>
      <h4 style={{ color: COLORS.blue, margin: '5px 0', fontWeight: 'bold' }}>{c.name}</h4>
      <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#999', textTransform: 'uppercase' }}>{c.role || c.designation}</p>
    </div>
))}
  </div>
</section>
      </div>

      <div style={{ height: '350px', background: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600") center/cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Learn more about our listing process.</h2>
        <button style={{ background: 'white', color: COLORS.navy, border: 'none', padding: '15px 40px', fontWeight: 'bold' }}>LEARN MORE</button>
      </div>

      {/* FOOTER */}
<footer style={{ background: COLORS.blue, padding: '25px 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
  <div style={{ display: 'flex', gap: '30px', fontSize: '12px', fontWeight: 'bold' }}>
    <span onClick={() => window.scrollTo(0,0)} style={s.link}>Home</span>
          <span onClick={() => scrollTo('about')} style={s.link}>Services</span>
          <span onClick={() => scrollTo('projects')} style={s.link}>Projects</span>
          <span onClick={() => scrollTo('testimonials')} style={s.link}>Testimonials</span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>SUBSCRIBE US</span>
    <div style={{ display: 'flex' }}>
      <input placeholder="Email" style={{ padding: '10px 15px', border: 'none', width: '220px' }} onChange={e => setSubEmail(e.target.value)} />
      <button onClick={handleSubscribe} style={{ background: 'white', color: COLORS.blue, border: 'none', padding: '10px 25px' }}>Subscribe</button>
    </div>
  </div>
</footer>

<div style={{ background: COLORS.dark, padding: '25px 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#999', fontSize: '13px' }}>
  <div>All Rights Reserved 2026</div>
  <div style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Real Trust</div>
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <a href="https://twitter.com" style={{ color: 'inherit' }}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
    <a href="https://facebook.com" style={{ color: 'inherit' }}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
    <a href="https://linkedin.com" style={{ color: 'inherit' }}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
  </div>
</div>
</div>
  );
};

// --- ADMIN PANEL STYLES ---
// --- EXACT ADMIN CSS FROM YOUR SCREENSHOTS ---
const adS = {
  container: { padding: '40px 30px', background: '#F4F7F9', minHeight: '100vh', fontFamily: '"Segoe UI", sans-serif' },
  cardGrid: { display: 'flex', gap: '30px', marginBottom: '30px' },
  card: { flex: 1, background: 'white', padding: '30px', borderRadius: '4px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  label: { display: 'block', marginBottom: '10px', fontWeight: '700', fontSize: '11px', color: '#1A2E5A', textTransform: 'uppercase' },
  input: { width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #E2E8F0', borderRadius: '4px', boxSizing: 'border-box', color: '#666' },
  tableContainer: { background: 'white', borderRadius: '8px', overflow: 'hidden', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  tableHeader: { background: '#1A2E5A', color: 'white', padding: '15px 20px', textAlign: 'left', fontSize: '14px' },
  tableRow: { borderBottom: '1px solid #F1F5F9' },
  tableCell: { padding: '15px 20px', color: '#475569', fontSize: '13px' },
  editBtn: { color: '#417EF1', fontWeight: '700', cursor: 'pointer', border: 'none', background: 'none' }
};

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subs, setSubs] = useState([]);

  // Every Text Box State
  const [p, setP] = useState({ title: '', img: '', description: '' });
  const [c, setC] = useState({ name: '', role: '', img: '', description: '' });
  const [projectSearch, setProjectSearch] = useState("");
  const [clientSearch, setClientSearch] = useState("");

  const [editingProjectId, setEditingProjectId] = useState(null);
  const [editingClientId, setEditingClientId] = useState(null);

  const refreshData = () => {
    fetch(`${API_BASE}/projects`).then(res => res.json()).then(setProjects);
    fetch(`${API_BASE}/clients`).then(res => res.json()).then(setClients);
    fetch(`${API_BASE}/contact`).then(res => res.json()).then(setContacts);
    fetch(`${API_BASE}/subscribe`).then(res => res.json()).then(setSubs);
  };

  useEffect(() => { refreshData(); }, []);

  const saveProject = () => {
    if (!p.title.trim()) return alert("Enter Project Title");
    const method = editingProjectId ? 'PUT' : 'POST';
    const url = editingProjectId ? `${API_BASE}/projects/${editingProjectId}` : `${API_BASE}/projects`;
    fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) }).then(() => {
      alert("Project Saved!"); setEditingProjectId(null); setP({ title: '', img: '', description: '' }); refreshData();
    });
  };

  const saveClient = () => {
    if (!c.name.trim()) return alert("Enter Client Name");
    const method = editingClientId ? 'PUT' : 'POST';
    const url = editingClientId ? `${API_BASE}/clients/${editingClientId}` : `${API_BASE}/clients`;
    fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(c) }).then(() => {
      alert("Client Saved!"); setEditingClientId(null); setC({ name: '', role: '', img: '', description: '' }); refreshData();
    });
  };

  return (
    <div style={adS.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h2 style={{ color: '#1A2E5A' }}>Admin Dashboard</h2>
        <Link to="/" style={{ background: '#1A2E5A', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>VIEW SITE</Link>
      </div>

      <div style={adS.cardGrid}>
        {/* Project Form */}
        <div style={adS.card}>
          <h3 style={{ color: '#F36F21', marginBottom: '20px' }}>📂 {editingProjectId ? "Edit" : "Add New"} Project</h3>
          <label style={adS.label}>Project Title</label>
          <input value={p.title} placeholder="e.g. Modern Villa" style={adS.input} onChange={e => setP({...p, title: e.target.value})} />
          <label style={adS.label}>Image URL</label>
          <input value={p.img} placeholder="https://..." style={adS.input} onChange={e => setP({...p, img: e.target.value})} />
          <label style={adS.label}>Short Description</label>
          <textarea value={p.description} placeholder="Briefly describe..." style={{...adS.input, height: '100px'}} onChange={e => setP({...p, description: e.target.value})} />
          <button onClick={saveProject} style={{...s.orangeBtn, width:'100%'}}>PUBLISH PROJECT</button>
        </div>

        {/* Client Form */}
        <div style={adS.card}>
          <h3 style={{ color: '#417EF1', marginBottom: '20px' }}>👥 {editingClientId ? "Edit" : "Add"} Happy Client</h3>
          <label style={adS.label}>Client Name</label>
          <input value={c.name} placeholder="e.g. John Doe" style={adS.input} onChange={e => setC({...c, name: e.target.value})} />
          <label style={adS.label}>Designation</label>
          <input value={c.role} placeholder="CEO / Investor" style={adS.input} onChange={e => setC({...c, role: e.target.value})} />
          <label style={adS.label}>Client Image (URL)</label>
          <input value={c.img} placeholder="https://..." style={adS.input} onChange={e => setC({...c, img: e.target.value})} />
          <label style={adS.label}>Testimonial Text</label>
          <textarea value={c.description} placeholder="What did they say?" style={{...adS.input, height: '100px'}} onChange={e => setC({...c, description: e.target.value})} />
          <button onClick={saveClient} style={{...s.orangeBtn, background: '#417EF1', width:'100%'}}>ADD TESTIMONIAL</button>
        </div>
      </div>

      {/* SEARCHABLE MANAGE LISTS */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h4 style={{ color: '#1A2E5A' }}>Manage Projects</h4>
            <input placeholder="🔍 Search" style={{ padding: '5px', borderRadius:'4px', border:'1px solid #ddd' }} onChange={e => setProjectSearch(e.target.value)} />
          </div>
          <div style={adS.tableContainer}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={adS.tableHeader}>Project Name</th><th style={adS.tableHeader}>Action</th></tr></thead>
              <tbody>
                {projects.filter(pr => pr.title && pr.title.toLowerCase().includes(projectSearch.toLowerCase())).map((pr, i) => (
                  <tr key={i} style={adS.tableRow}><td style={adS.tableCell}>{pr.title}</td><td style={adS.tableCell}><button onClick={() => { setEditingProjectId(pr._id); setP({title:pr.title, img:pr.img, description:pr.description}); window.scrollTo(0,0); }} style={adS.editBtn}>EDIT</button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h4 style={{ color: '#1A2E5A' }}>Manage Clients</h4>
            <input placeholder="🔍 Search" style={{ padding: '5px', borderRadius:'4px', border:'1px solid #ddd' }} onChange={e => setClientSearch(e.target.value)} />
          </div>
          <div style={adS.tableContainer}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={adS.tableHeader}>Client Name</th><th style={adS.tableHeader}>Action</th></tr></thead>
              <tbody>
                {clients.filter(cl => cl.name && cl.name.toLowerCase().includes(clientSearch.toLowerCase())).map((cl, i) => (
                  <tr key={i} style={adS.tableRow}><td style={adS.tableCell}>{cl.name}</td><td style={adS.tableCell}><button onClick={() => { setEditingClientId(cl._id); setC({name:cl.name, role:cl.role, img:cl.img, description:cl.description}); window.scrollTo(0,0); }} style={adS.editBtn}>EDIT</button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h4 style={{ color: '#1A2E5A', marginBottom: '15px' }}>Recent Contact Inquiries</h4>
      <div style={adS.tableContainer}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr><th style={adS.tableHeader}>Client Name</th><th style={adS.tableHeader}>Email Address</th><th style={adS.tableHeader}>Mobile</th><th style={adS.tableHeader}>Location</th></tr></thead>
          <tbody>
            {contacts.map((con, i) => (<tr key={i} style={adS.tableRow}><td style={adS.tableCell}>{con.name}</td><td style={adS.tableCell}>{con.email}</td><td style={adS.tableCell}>{con.phone}</td><td style={adS.tableCell}>{con.city}</td></tr>))}
          </tbody>
        </table>
      </div>

      <h4 style={{ color: '#1A2E5A', marginBottom: '15px' }}>Newsletter Subscribers</h4>
      <div style={{ ...adS.card, minWidth: 'auto' }}>
        {subs.map((s, i) => <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid #F1F5F9', color: '#666' }}>{s.email}</div>)}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;