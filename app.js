const express = require("express");
const parser = require("body-parser");
const RestaurantRouter = require("./pizza-dashboard/Controllers/Restaurants.Controller");
const bodyParser = require("body-parser");
const APP_SERVER = express();
const FoodRouter = require("./pizza-dashboard/Controllers/Food.Controller");
const CartRouter = require("./pizza-dashboard/Controllers/Cart.Controller");
require("./dbConfig")
APP_SERVER.use(bodyParser.urlencoded({extended:true}));
APP_SERVER.use(bodyParser.json())

APP_SERVER.use("/api/restaurants",RestaurantRouter);
APP_SERVER.use("/api/food",FoodRouter);
APP_SERVER.use("/api/cart",CartRouter);
module.exports = APP_SERVER