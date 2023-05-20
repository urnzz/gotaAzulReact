const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3001, function() {
  console.log('Server is running on port 3001');
});
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gotaAzul', 'gotaazul', 'gotaazul@Leo', {
  host: '152.70.156.5',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Unable to connect to the database:', err));
  const bcrypt = require('bcryptjs');
  const jwt = require('jsonwebtoken');
  const { DataTypes } = require('sequelize');
  
  const User = sequelize.define('User', {
    // Define fields according to your table structure
    // id is created automatically
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'login_info',
    timestamps: true,
  });
  
  // User registration
  app.post('/register', async (req, res) => {
    const { username,  email, password} = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword
        });
        res.json({ message: 'User registered successfully', user: newUser });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
  // User login
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, "gotaazul@Leo");
        res.json({ token, user });
      } else {
        res.status(401).json({ error: 'Invalid login credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
