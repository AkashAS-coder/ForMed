const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Team data (edit as needed)
const team = [
  {
    id: 1,
    name: 'Akash Arun Kumar Soumya',
    role: 'Founder & Lead Developer',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Akash is passionate about healthcare and technology, building tools to help others find their path.'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'Medical Advisor',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Dr. Sharma brings 15+ years of clinical experience and a love for mentoring future healthcare professionals.'
  },
  {
    id: 3,
    name: 'Jordan Lee',
    role: 'UX/UI Designer',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    bio: 'Jordan ensures the platform is intuitive and accessible for all users.'
  },
  {
    id: 4,
    name: 'Sofia Martinez',
    role: 'Data Scientist',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Sofia analyzes user data to improve career matching accuracy.'
  },
  {
    id: 5,
    name: 'Marcus Chen',
    role: 'Full Stack Developer',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    bio: 'Marcus builds robust backend systems and keeps everything running smoothly.'
  },
  {
    id: 6,
    name: 'Emily Johnson',
    role: 'Content Strategist',
    photo: 'https://randomuser.me/api/portraits/women/85.jpg',
    bio: 'Emily crafts clear, helpful content for users exploring healthcare careers.'
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/team', (req, res) => {
  res.render('team', { team });
});

app.get('/careers', (req, res) => {
  res.render('careers');
});

app.get('/survey', (req, res) => {
  res.render('survey');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Team member profile (optional)
app.get('/team/:id', (req, res) => {
  const member = team.find(m => m.id === parseInt(req.params.id));
  if (!member) return res.status(404).send('Team member not found');
  res.render('team-profile', { member });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 