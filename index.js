const express = require('express');

const app = express();

require('./routes/userRoute')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`App is running on port ${PORT}`));