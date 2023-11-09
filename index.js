const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const port = process.env.PORT || 80;
const app = express();

// Rate Limiting
// 10 requests per minute and reset after 10 minutes
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // 10 requests
});
app.use(limiter);
app.set('trust proxy', 1);

// Using CORS
app.use(cors());

// routes
app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
