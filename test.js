app.use("/room", require("./routes/Room.Routes"));
app.use("/employee", require("./routes/Employee.Routes"));
app.use('/api', require('./routes/Comment.Routes'));
app.use('/book', require('./routes/Booking.Routes'));
app.use('/supplier', require('./routes/Supplier.route'));
app.use("/menu", require("./Routes/food.routes"));
app.use("/orders", require("./Routes/orders"));
