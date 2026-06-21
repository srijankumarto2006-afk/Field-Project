const fs = require("fs");

const restaurant = [];

const rest_Names = [
  "Hotel Grand",
  "Deccan Elite Cuisines",
  "Grand Cafe",
  "Sultan Serai",
  "Swayampakam",
  "Sri Varahi Bhavan",
  "Annapurna Kitchen",
  "Blue Fox",
  "Balaji Family Dhaba",
  "Behrouz Biryani",
  "Iqbal Cafe",
  "UBQ-Meals,Thalis & Bowls",
  "Balaji Family Dhaba",
  "ZAZA Mughal Biryani",
  "Balaji Family Dhaba",
  "Biryani Darbar"
];

const foodTypes = [
  "Biryani, Hyderabadi Kababs, Chinese",
  "Biryani, Tandoor",
  "Biryani, Beverages",
  "Biryani, Hyderabadi Kababs, Chinese",
  "Biryani, Andhra, Hyderabadi",
  "South Indian, North Indian, Beverage",
  "South Indian",
  "Biryani, Chinese, Tandoor",
  "Tandoor, Biryani, Chinese",
  "Kebabs, Biryani, Mughlai",
  "Biryani",
  "North Indian, Biryani",
  "Tandoor, Biryani, Chinese",
  "Biryani, Awadhi",
  "Tandoor, Biryani, Chinese",
  "Biryani"
];

const locations = [
  "Nellore",
  "Mehdipatnam",
  "Darulshifa",
  "Banjara Hills",
  "Banjara Hills",
  "Santoshnagar & Saidabad",
  "Nallakunta & Vidyanagar",
  "Himayath Nagar",
  "Malakpet",
  "Abids",
  "Charminar",
  "ABIDS",
  "Malakpet",
  "Mehdipatnam",
  "ABIDS",
  "Ameerpet"
];

const images = [
  "./grandh.avif",
  "./deccan.avif",
  "./cafe.avif",
  "./sultan.avif",
  "./swayam.avif",
  "./sri.avif",
  "./b8.avif",
  "./blue.jpg_compressed",
  "./bala.avif",
  "./megh.avif",
  "./iqbal.jpg_compressed",
  "./ubq.avif",
  "./BAJI.avif",
  "./ZAZA.avif",
  "./dum.avif",
  "./darb.avif"
];

for (let i = 0; i < 100; i++) {
  let obj = {};

  obj.image = images[Math.floor(Math.random() * images.length)];
  obj.names = rest_Names[Math.floor(Math.random() * rest_Names.length)];
  obj.rating = (Math.random() * 4 + 1).toFixed(1);
  obj.foodtypes = foodTypes[Math.floor(Math.random() * foodTypes.length)];
  obj.location = locations[Math.floor(Math.random() * locations.length)];
  obj["price_for-two"] = Math.floor(Math.random() * 2401);
  obj.distance = (Math.random() * 10 + 1).toFixed(1);
  obj.offers = Math.floor(Math.random() * 30);
  obj.alcohol = Math.random() > 0.7;
  obj["res-open_time"] = Math.floor(Math.random() * 24);
  obj["res-close_time"] = (obj["res-open_time"] + 12) % 24;
  obj.pet_friendly = Math.random() > 0.8;
 obj.outdoor_seating = Math.random() > 0.7;
  restaurant.push(obj);
}

// Convert array to JSON
const restaurantJSON = JSON.stringify(restaurant, null, 2);

// Save JSON to file
const path = require("path");

const filePath = path.join(__dirname, "restaurant.json");

fs.writeFileSync(filePath, restaurantJSON, "utf8");

console.log("Created:", filePath);

console.log("restaurant.json created successfully!");