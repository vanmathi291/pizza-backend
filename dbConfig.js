const mongoose = require("mongoose");

mongoose.connect(
  // `mongodb+srv://test1:t1CR7FJxrWG6kZBU@cluster0.ez75xfb.mongodb.net/pizza?retryWrites=true&w=majority`,
  `mongodb+srv://vanmathibala:vanmathi23@cluster0.iwf8des.mongodb.net/pizza?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);