const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Add quotes around the URL and put your real password
mongoose.connect("mongodb+srv://reethikakolakaluri22_db_user:Y13acs77@cluster0.f91bzed.mongodb.net/realtrust?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.log("❌ Connection Error:", err));
// --- SCHEMAS ---
const ProjectSchema = new mongoose.Schema({ title: String, img: String, description: String });
const ClientSchema = new mongoose.Schema({ name: String, role: String, img: String, desc: String });
const ContactSchema = new mongoose.Schema({ name: String, email: String, phone: String, city: String });
const SubscriberSchema = new mongoose.Schema({ email: String });

const Project = mongoose.model('Project', ProjectSchema);
const Client = mongoose.model('Client', ClientSchema);
const Contact = mongoose.model('Contact', ContactSchema);
const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// --- ROUTES ---

// Projects
app.get('/api/projects', async (req, res) => res.json(await Project.find()));
app.post('/api/projects', async (req, res) => res.json(await new Project(req.body).save()));

// Clients
app.get('/api/clients', async (req, res) => res.json(await Client.find()));
app.post('/api/clients', async (req, res) => res.json(await new Client(req.body).save()));

// Contact Form
app.post('/api/contact', async (req, res) => res.json(await new Contact(req.body).save()));
app.get('/api/contacts', async (req, res) => res.json(await Contact.find()));

// Newsletter
app.post('/api/subscribe', async (req, res) => res.json(await new Subscriber(req.body).save()));
app.get('/api/subscribers', async (req, res) => res.json(await Subscriber.find()));

app.listen(5000, () => console.log("Server running on port 5000"));