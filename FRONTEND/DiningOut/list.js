const fs = require("fs");
const path = require("path");

const restaurant = [];

// Extracted and synchronized real dataset references from your HTML context
const rest_Names = [
  "Babylon Brewery & Club",
  "Ajmeer Maharaj Hotel",
  "Hot N Fast",
  "Dragon Fruits",
  "SS Corn Paradise",
  "Hotel Karthikeya",
  "Hotel Maharaja",
  "Maharaj Hotel",
  "Ajmeer Hotel",
  "Rajveer Hotel",
  "Abraj Hotel",
  "La Pino'z Pizza",
  "Hotel Baaratheon",
  "Mirell Restaurant",
  "Grand Cafe",
  "Spice Route Kitchen",
  "Royal Biryani House",
  "Urban Tandoor",
  "The Hungry Fork",
  "Saffron Palace",
  "Mughal Darbar",
  "Ocean Pearl",
  "Flavors of India",
  "The Food Factory",
  "Cafe Aroma",
  "Golden Spoon",
  "Fire & Grill",
  "Street Feast",
  "Blue Lagoon Restaurant",
  "The Curry Bowl",
  "Taste Junction",
  "Red Chilli Kitchen",
  "Skyline Diner",
  "Fusion Bistro",
  "The Rustic Table",
  "Green Leaf Cafe",
  "Bamboo Garden",
  "Tandoori Nights",
  "Citrus Kitchen",
  "Peppercorn Restaurant",
  "Moonlight Dining",
  "Harvest Kitchen",
  "Velvet Plate"
];

const foodTypes = [
  "Continental, Turkish, Indian",
  "North Indian, Biryani",
  "Mughlai",
  "Chinese",
  "Andhra, Beverages",
  "North Indian, Mughlai",
  "North Indian, Biryani",
  "Pizza, Pasta",
  "Fast Food, Street Food",
   "Biryani",
  "Hyderabadi",
  "North Indian",
  "South Indian",
  "Chinese, Mughlai",
  "Fast Food",
  "Street Food,Pizza",
  "Burger",
  "Italian, Mexican",
  "Continental",
  "Arabian, Seafood",
  "BBQ, Kebabs",
  "Desserts, Bakery",
  "Cafe,Beverages",
  "Ice Cream, Healthy Food",
  "Andhra, Telangana",
  "Maharashtrian,Punjabi",
  "Thai, Japanese"

];

const locations = [
  "Nellore",
  "Mehdipatnam",
  "Darulshifa",
  "Banjara Hills",
  "Santoshnagar & Saidabad",
  "Nallakunta & Vidyanagar",
  "Himayath Nagar",
  "Malakpet",
  "Abids",
  "Charminar",
  "Ameerpet",
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Indore",
  "Bhopal",
  "Patna",
  "Varanasi",
  "Chandigarh",
  "Amritsar",
  "Surat",
  "Nagpur",
  "Visakhapatnam",
  "Vijayawada",
  "Kochi",
  "Thiruvananthapuram",
  "Coimbatore",
  "Madurai",
  "Mysuru",
  "Mangaluru",
  "Hubballi",
  "Tirupati",
  "Warangal"
];

const images = [
  "https://b.zmtcdn.com/data/pictures/3/22295613/aade5a7026490f1cdc60f7f5dc094f78_featured_v2.jpg?output-format=webp",
  "https://b.zmtcdn.com/data/pictures/6/22032946/e91a99e72302d7e0813b78e4f0978d3a_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/3/18712173/b78e2f4181db1df2fdd5c5fccb80288f_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/1/21984181/15c9c46229a356c77745053b065e5af4_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/4/19630684/9d4bb7ce81fba63e5e2e02449fcc0934_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/1/20615641/c1e027ed4473dd688cb237aad8d5b225_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/2/20496432/2a6b302fcf1695f1e84c02a6ea361f70_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/5/19150885/0060f85fc89f744b6543c27b6e6db4e2_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/5/21977795/cdf091bb342fc06f2f5f17d25a00bd94_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/8/21819518/fb1aea765438bf1992bf367a05cf9fb8_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/1/21503991/cb680d632e34fb3a153ec501c3c6c0ee_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/5/21240405/616804f90eb785e79d10e2de977f80c2_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/9/21962609/8fb3c84f6912d7fb7e8860c76d58abd5_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/6/22179326/8cdbaf4aa2ae34e124b928bb14ccc35e_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/3/18880623/224fa5447ce4c8e408ae5665ca2120c6_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/1/20259091/a5f7c6a9fe89aebb5a330461ece401c3_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/4/20670174/874629dca183b0e79bcc7dde1c7bb25f_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/1/18382171/6d52ac47b9a51db0dc96f19c8f820a41_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/6/21760176/cf1fd421e2afba4e513b82ec4fd40aaf_o2_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/0/20388020/0fc6b220297879e1f4080d765b7965f0_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/0/20809030/cdf11e58a3ef5489585c12378b9fe4ad_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/8/20540418/627a80797b35d84fb979966ab25e93a8_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/9/20983729/7845f3ec74a7d30ed8e6c6463ba6c489_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/0/18795170/b6047e53bdb9ebce032c9505dc23eed0_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/5/21577575/7f35c43ff091a48d6c1acd159af3efb8_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/9/21003129/04112c8943533daa6d2465256856c7da_o2_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/7/20892247/3734149d077a7cc8e141f34f6acbb30e_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/1/22044921/4c9622fe6ba60a5579ca2ef7e1c561c6_o2_featured_v2.jpg?output-format=webp",
  "https://b.zmtcdn.com/data/pictures/2/20654322/567ee9f0e75e0578225aca46fac2ef53_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/4/21157364/a8774abd8db0886901eb25f207a7f504_o2_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/5/18740985/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/5/19461655/9079e1636a24751898dba9414c4440ca_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/7/20521297/03ba87b3729f88d9fdfd77b50ce6452b_o2_featured_v2.jpg",
  "https://b.zmtcdn.com/data/pictures/2/18741322/e25bd676805b4a01e37b7e13011a18b3_featured_v2.jpg",

];

const offerTypes = ["Flat 10% OFF", "Flat 50% OFF", "₹101 OFF", "No Offer"];

// Generator Loop to assemble 100 random structural entries
for (let i = 0; i < 100; i++) {
  let obj = {};

  obj.image = images[Math.floor(Math.random() * images.length)];
  obj.names = rest_Names[Math.floor(Math.random() * rest_Names.length)];
  obj.rating = (Math.random() * 1.5 + 3.5).toFixed(1); // Generates context-bounded ratings between 3.5★ and 5.0★
  obj.foodtypes = foodTypes[Math.floor(Math.random() * foodTypes.length)];
  obj.location = locations[Math.floor(Math.random() * locations.length)];
  
  // Set prices realistically aligned with your UI requirements (e.g., 150, 200, 500, 2500)
  const structuralPrices = [150, 200, 500, 2500];
  obj["price_for-two"] = structuralPrices[Math.floor(Math.random() * structuralPrices.length)];
  
  // Generates arrival times matching the "24 min", "26 min" etc. properties found inside the HTML cards
  obj.distance = `${Math.floor(Math.random() * 30 + 15)} min`; 
  
  obj.offers = offerTypes[Math.floor(Math.random() * offerTypes.length)];
  obj.alcohol = Math.random() > 0.7;
  obj["res-open_time"] = Math.floor(Math.random() * 24);
  obj["res-close_time"] = (obj["res-open_time"] + 12) % 24;
  obj.pet_friendly = Math.random() > 0.8;
  obj.outdoor_seating = Math.random() > 0.7;
  
  restaurant.push(obj);
}

// Convert data structure to formatted string value
const restaurantJSON = JSON.stringify(restaurant, null, 2);

// Save generated data objects natively to systemic paths
const filePath = path.join(__dirname, "restaurant.json");
fs.writeFileSync(filePath, restaurantJSON, "utf8");

console.log("Created file structure at target location:", filePath);
console.log("restaurant.json has been created successfully!");