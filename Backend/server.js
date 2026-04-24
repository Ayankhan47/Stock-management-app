const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Models
const Product = require('./models/Product');
const User = require('./models/User');

// Mock Data
const mockProducts = require('./data/mockProducts');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/products');
const showcaseRoutes = require('./routes/showcase');
const authRoutes = require('./routes/auth');

app.use('/api/products', productRoutes);
app.use('/api/showcase', showcaseRoutes);
app.use('/api/auth', authRoutes);

const path = require('path');

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../Frontend/dist')));

    app.use((req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'Frontend', 'dist', 'index.html'));
    });
}

// Seeding Logic (Improved: Only seeds if empty)
const importData = async () => {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            console.log('Database empty. Seeding actual records...');
            await Product.insertMany(mockProducts);
            console.log('Seeding successful.');
        } else {
            console.log('Database already populated. Skipping seeding.');
        }
    } catch (err) {
        console.error('Seeding error:', err);
    }
};

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    importData();
});
