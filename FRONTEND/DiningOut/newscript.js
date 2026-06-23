const restaurants=[
  
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/22295613/aade5a7026490f1cdc60f7f5dc094f78_featured_v2.jpg?output-format=webp",
    "names": "Babylon Brewery & Club",
    "rating": "3.8",
    "foodtypes": "North Indian",
    "location": "Varanasi",
    "price_for-two": 200,
    "distance": "24 min",
    "offers": "No Offer",
    "offer-status":false,
    "alcohol": false,
    "res-open_time": 17,
    "res-close_time": 5,
    "pet_friendly": false,
    "outdoor_seating": true
  },{
    
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "The Food Factory",
    "rating": "3.9",
    "foodtypes": "Fast Food, Street Food",
    "location": "Thiruvananthapuram",
    "price_for-two": 150,
    "distance": "39 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 15,
    "res-close_time": 3,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/20983729/7845f3ec74a7d30ed8e6c6463ba6c489_featured_v2.jpg",
    "names": "Hotel Karthikeya",
    "rating": "3.8",
    "foodtypes": "Fast Food",
    "location": "Bhopal",
    "price_for-two": 2500,
    "distance": "32 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": true,
    "res-open_time": 3,
    "res-close_time": 15,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/dish_photos/9fe/687b7d18ae02582d2a6c3746958f09fe.jpg",
    "names": "Domino's Pizza",
    "rating": "4.8",
    "foodtypes": "Pizza, Pasta",
    "location": "Indore",
    "price_for-two": 150,
    "distance": "44 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21835339/a04b7a7438b9d0844f711a0ac2c79c62_featured_v2.jpg?output-format=webp",
    "names": "Tandoori Nights",
    "rating": "4.9",
    "foodtypes": "South Indian",
    "location": "Ameerpet",
    "price_for-two": 200,
    "distance": "26 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 4,
    "res-close_time": 16,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/18740463/06984575c51d8b899af4c81c1d0f3bbf_o2_featured_v2.jpg",
    "names": "Golden Spoon",
    "rating": "3.7",
    "foodtypes": "Biryani",
    "location": "Patna",
    "price_for-two": 200,
    "distance": "18 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/5/18740985/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "4.7",
    "foodtypes": "Fast Food",
    "location": "Kochi",
    "price_for-two": 2500,
    "distance": "43 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 23,
    "res-close_time": 11,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/22044921/4c9622fe6ba60a5579ca2ef7e1c561c6_o2_featured_v2.jpg?output-format=webp",
    "names": "Moonlight Dining",
    "rating": "3.7",
    "foodtypes": "Hyderabadi",
    "location": "Banjara Hills",
    "price_for-two": 500,
    "distance": "32 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 3,
    "res-close_time": 15,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21977795/cdf091bb342fc06f2f5f17d25a00bd94_featured_v2.jpg",
    "names": "Cafe Aroma",
    "rating": "4.1",
    "foodtypes": "North Indian, Biryani",
    "location": "Nellore",
    "price_for-two": 150,
    "distance": "19 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": true,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/6/22179326/8cdbaf4aa2ae34e124b928bb14ccc35e_featured_v2.jpg",
    "names": "Ajmeer Hotel",
    "rating": "3.8",
    "foodtypes": "BBQ, Kebabs",
    "location": "Nagpur",
    "price_for-two": 500,
    "distance": "44 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/8/20540418/627a80797b35d84fb979966ab25e93a8_featured_v2.jpg",
    "names": "Ajmeer Hotel",
    "rating": "4.6",
    "foodtypes": "Italian, Mexican",
    "location": "Malakpet",
    "price_for-two": 2500,
    "distance": "25 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21962609/8fb3c84f6912d7fb7e8860c76d58abd5_featured_v2.jpg",
    "names": "The Rustic Table",
    "rating": "3.8",
    "foodtypes": "Ice Cream, Healthy Food",
    "location": "Indore",
    "price_for-two": 2500,
    "distance": "21 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": true,
    "res-open_time": 3,
    "res-close_time": 15,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21977795/cdf091bb342fc06f2f5f17d25a00bd94_featured_v2.jpg",
    "names": "Urban Tandoor",
    "rating": "4.0",
    "foodtypes": "Arabian, Seafood",
    "location": "Hyderabad",
    "price_for-two": 2500,
    "distance": "31 min",
    "offer-status":true,
    "offers": "Flat 20% OFF",
    "alcohol": true,
    "res-open_time": 2,
    "res-close_time": 14,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "http://127.0.0.1:5500/Cake/girl.avif",
    "names": "Dessert's House",
    "rating": "4.3",
    "foodtypes": "Desserts, Bakery",
    "location": "Hubballi",
    "price_for-two": 200,
    "distance": "24 min",
    "offer-status":true,
    "offers": "₹151 OFF",
    "alcohol": true,
    "res-open_time": 23,
    "res-close_time": 11,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/5/18740985/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
    "names": "The Rustic Table",
    "rating": "4.8",
    "foodtypes": "South Indian",
    "location": "Mehdipatnam",
    "price_for-two": 200,
    "distance": "33 min",
    "offers": "No Offer",
    "offer-status":false,
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/20809030/cdf11e58a3ef5489585c12378b9fe4ad_featured_v2.jpg",
    "names": "Skyline Diner",
    "rating": "4.4",
    "foodtypes": "Fast Food, Street Food",
    "location": "Malakpet",
    "price_for-two": 500,
    "distance": "30 min",
    "offers": "Flat 30% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 1,
    "res-close_time": 13,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/21984181/15c9c46229a356c77745053b065e5af4_featured_v2.jpg",
    "names": "Ajmeer Maharaj Hotel",
    "rating": "4.6",
    "foodtypes": "Chinese, Mughlai",
    "location": "Mehdipatnam",
    "price_for-two": 200,
    "distance": "31 min",
    "offers": "₹151 OFF",
    "alcohol": false,
    "offer-status":true,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21577575/7f35c43ff091a48d6c1acd159af3efb8_featured_v2.jpg",
    "names": "Harvest Kitchen",
    "rating": "5.0",
    "foodtypes": "Mughlai",
    "location": "Chennai",
    "price_for-two": 150,
    "distance": "16 min",
    "offers": "Flat 50% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/7/20647727/d7151701bcdcbd6e8550e2b7eb5d110a_featured_v2.jpg",
    "names": "Cafe Aroma",
    "rating": "4.3",
    "foodtypes": "North Indian, Biryani",
    "location": "Ameerpet",
    "price_for-two": 200,
    "distance": "42 min",
    "offers": "₹121 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 22,
    "res-close_time": 10,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/20892247/3734149d077a7cc8e141f34f6acbb30e_featured_v2.jpg",
    "names": "Blue Lagoon Restaurant",
    "rating": "4.7",
    "foodtypes": "Mughlai",
    "location": "Delhi",
    "price_for-two": 2500,
    "distance": "18 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": true,
    "res-open_time": 19,
    "res-close_time": 7,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21577575/7f35c43ff091a48d6c1acd159af3efb8_featured_v2.jpg",
    "names": "The Rustic Table",
    "rating": "4.0",
    "foodtypes": "Continental, Turkish, Indian",
    "location": "Bhopal",
    "price_for-two": 500,
    "distance": "32 min",
    "offers": "Flat 50% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/21503991/cb680d632e34fb3a153ec501c3c6c0ee_featured_v2.jpg",
    "names": "Tandoori Nights",
    "rating": "3.8",
    "foodtypes": "Chinese",
    "location": "Pune",
    "price_for-two": 500,
    "distance": "44 min",
    "offers": "No Offer",
    "offer-status":false,
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21003129/04112c8943533daa6d2465256856c7da_o2_featured_v2.jpg",
    "names": "Hotel Baaratheon",
    "rating": "3.9",
    "foodtypes": "Andhra, Telangana",
    "location": "Vijayawada",
    "price_for-two": 200,
    "distance": "30 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/20983729/7845f3ec74a7d30ed8e6c6463ba6c489_featured_v2.jpg",
    "names": "Street Feast",
    "rating": "3.5",
    "foodtypes": "Hyderabadi",
    "location": "Bengaluru",
    "price_for-two": 150,
    "distance": "44 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": true,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/20809030/cdf11e58a3ef5489585c12378b9fe4ad_featured_v2.jpg",
    "names": "Tandoori Nights",
    "rating": "3.9",
    "foodtypes": "Fast Food, Street Food",
    "location": "Mehdipatnam",
    "price_for-two": 200,
    "distance": "38 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/18382171/6d52ac47b9a51db0dc96f19c8f820a41_featured_v2.jpg",
    "names": "The Curry Bowl",
    "rating": "3.9",
    "foodtypes": "Continental, Turkish, Indian",
    "location": "Mehdipatnam",
    "price_for-two": 500,
    "distance": "15 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/20647719/d71443c786caaf06694b50a699a8a5d6_featured_v2.jpg",
    "names": "Ocean Pearl",
    "rating": "4.2",
    "foodtypes": "Ice Cream, Healthy Food",
    "location": "Hyderabad",
    "price_for-two": 2500,
    "distance": "41 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/21503991/cb680d632e34fb3a153ec501c3c6c0ee_featured_v2.jpg",
    "names": "Mughal Darbar",
    "rating": "4.3",
    "foodtypes": "Ice Cream, Healthy Food",
    "location": "Ahmedabad",
    "price_for-two": 150,
    "distance": "23 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": true,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/19461655/9079e1636a24751898dba9414c4440ca_featured_v2.jpg",
    "names": "Hotel Baaratheon",
    "rating": "4.9",
    "foodtypes": "North Indian, Mughlai",
    "location": "Thiruvananthapuram",
    "price_for-two": 150,
    "distance": "31 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": true,
    "res-open_time": 16,
    "res-close_time": 4,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/8/21819518/fb1aea765438bf1992bf367a05cf9fb8_featured_v2.jpg",
    "names": "Cafe Aroma",
    "rating": "4.7",
    "foodtypes": "Continental",
    "location": "Malakpet",
    "price_for-two": 500,
    "distance": "31 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 4,
    "res-close_time": 16,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/6/22032946/e91a99e72302d7e0813b78e4f0978d3a_featured_v2.jpg",
    "names": "Citrus Kitchen",
    "rating": "4.5",
    "foodtypes": "Fast Food, Street Food",
    "location": "Jaipur",
    "price_for-two": 200,
    "distance": "31 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": true,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/4/19630684/9d4bb7ce81fba63e5e2e02449fcc0934_featured_v2.jpg",
    "names": "Dragon Fruits",
    "rating": "4.3",
    "foodtypes": "Biryani",
    "location": "Vijayawada",
    "price_for-two": 2500,
    "distance": "23 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 9,
    "res-close_time": 21,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/6/22179326/8cdbaf4aa2ae34e124b928bb14ccc35e_featured_v2.jpg",
    "names": "Peppercorn Restaurant",
    "rating": "4.3",
    "foodtypes": "Street Food,Pizza",
    "location": "Ameerpet",
    "price_for-two": 500,
    "distance": "21 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": true,
    "res-open_time": 4,
    "res-close_time": 16,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Bamboo Garden",
    "rating": "3.7",
    "foodtypes": "BBQ, Kebabs",
    "location": "Pune",
    "price_for-two": 150,
    "distance": "44 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21003129/04112c8943533daa6d2465256856c7da_o2_featured_v2.jpg",
    "names": "The Rustic Table",
    "rating": "3.9",
    "foodtypes": "South Indian",
    "location": "Charminar",
    "price_for-two": 200,
    "distance": "27 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/18712173/b78e2f4181db1df2fdd5c5fccb80288f_featured_v2.jpg",
    "names": "Fusion Bistro",
    "rating": "3.8",
    "foodtypes": "Pizza, Pasta",
    "location": "Santoshnagar & Saidabad",
    "price_for-two": 2500,
    "distance": "25 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/20496432/2a6b302fcf1695f1e84c02a6ea361f70_featured_v2.jpg",
    "names": "Hotel Baaratheon",
    "rating": "3.9",
    "foodtypes": "Street Food,Pizza",
    "location": "Kochi",
    "price_for-two": 200,
    "distance": "34 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 0,
    "res-close_time": 12,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/20388020/0fc6b220297879e1f4080d765b7965f0_featured_v2.jpg",
    "names": "La Pino'z Pizza",
    "rating": "4.1",
    "foodtypes": "Italian, Mexican",
    "location": "Surat",
    "price_for-two": 150,
    "distance": "38 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/18741322/e25bd676805b4a01e37b7e13011a18b3_featured_v2.jpg",
    "names": "Flavors of India",
    "rating": "4.8",
    "foodtypes": "Chinese, Mughlai",
    "location": "Tirupati",
    "price_for-two": 200,
    "distance": "19 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": true,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/19178659/66b3ed1e88d64f9234d6bfd91176a22a_featured_v2.jpg",
    "names": "Grand Hotel",
    "rating": "4.6",
    "foodtypes": "Andhra, Telangana",
    "location": "Himayath Nagar",
    "price_for-two": 500,
    "distance": "34 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": true,
    "res-open_time": 5,
    "res-close_time": 17,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/21984181/15c9c46229a356c77745053b065e5af4_featured_v2.jpg",
    "names": "The Hungry Fork",
    "rating": "3.6",
    "foodtypes": "North Indian, Mughlai",
    "location": "Amritsar",
    "price_for-two": 2500,
    "distance": "31 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/20388020/0fc6b220297879e1f4080d765b7965f0_featured_v2.jpg",
    "names": "The Curry Bowl",
    "rating": "3.6",
    "foodtypes": "Biryani",
    "location": "Vijayawada",
    "price_for-two": 500,
    "distance": "36 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21977795/cdf091bb342fc06f2f5f17d25a00bd94_featured_v2.jpg",
    "names": "Flavors of India",
    "rating": "4.4",
    "foodtypes": "Maharashtrian,Punjabi",
    "location": "Banjara Hills",
    "price_for-two": 500,
    "distance": "40 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 9,
    "res-close_time": 21,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/8/21819518/fb1aea765438bf1992bf367a05cf9fb8_featured_v2.jpg",
    "names": "Ocean Pearl",
    "rating": "3.8",
    "foodtypes": "Arabian, Seafood",
    "location": "Chandigarh",
    "price_for-two": 500,
    "distance": "38 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/18880623/224fa5447ce4c8e408ae5665ca2120c6_featured_v2.jpg",
    "names": "The Rustic Table",
    "rating": "4.5",
    "foodtypes": "North Indian, Mughlai",
    "location": "Mumbai",
    "price_for-two": 200,
    "distance": "43 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": true,
    "res-open_time": 22,
    "res-close_time": 10,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/6/21760176/cf1fd421e2afba4e513b82ec4fd40aaf_o2_featured_v2.jpg",
    "names": "La Pino'z Pizza",
    "rating": "4.9",
    "foodtypes": "Continental, Turkish, Indian",
    "location": "Himayath Nagar",
    "price_for-two": 150,
    "distance": "24 min",
    "offers": "Flat 50% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/5/18740985/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
    "names": "Maharaj Hotel",
    "rating": "4.5",
    "foodtypes": "Continental",
    "location": "Kanpur",
    "price_for-two": 500,
    "distance": "28 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": true,
    "res-open_time": 5,
    "res-close_time": 17,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/18382171/6d52ac47b9a51db0dc96f19c8f820a41_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "3.8",
    "foodtypes": "BBQ, Kebabs",
    "location": "Lucknow",
    "price_for-two": 2500,
    "distance": "15 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/18741322/e25bd676805b4a01e37b7e13011a18b3_featured_v2.jpg",
    "names": "Bamboo Garden",
    "rating": "4.2",
    "foodtypes": "Burger",
    "location": "Vijayawada",
    "price_for-two": 150,
    "distance": "37 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": true,
    "res-open_time": 4,
    "res-close_time": 16,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/22044921/4c9622fe6ba60a5579ca2ef7e1c561c6_o2_featured_v2.jpg?output-format=webp",
    "names": "Hotel Baaratheon",
    "rating": "3.9",
    "foodtypes": "Fast Food, Street Food",
    "location": "Mysuru",
    "price_for-two": 200,
    "distance": "43 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/20521297/03ba87b3729f88d9fdfd77b50ce6452b_o2_featured_v2.jpg",
    "names": "Ajmeer Maharaj Hotel",
    "rating": "4.9",
    "foodtypes": "Arabian, Seafood",
    "location": "Kolkata",
    "price_for-two": 150,
    "distance": "15 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 5,
    "res-close_time": 17,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/8/21819518/fb1aea765438bf1992bf367a05cf9fb8_featured_v2.jpg",
    "names": "Street Feast",
    "rating": "3.6",
    "foodtypes": "North Indian, Biryani",
    "location": "Patna",
    "price_for-two": 200,
    "distance": "36 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 19,
    "res-close_time": 7,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/18741033/6f5be30b64957051d51709a44f3820cf_featured_v2.jpg",
    "names": "Velvet Plate",
    "rating": "4.5",
    "foodtypes": "Andhra, Telangana",
    "location": "Himayath Nagar",
    "price_for-two": 200,
    "distance": "23 min",
    "offers": "Flat 10% OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 5,
    "res-close_time": 17,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/4/21157364/a8774abd8db0886901eb25f207a7f504_o2_featured_v2.jpg",
    "names": "Ocean Pearl",
    "rating": "3.6",
    "foodtypes": "Arabian, Seafood",
    "location": "Amritsar",
    "price_for-two": 150,
    "distance": "39 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/20282542/5bce73f21a3f49cf45ae4ac5712c340a_featured_v2.jpg",
    "names": "The Rustic Table",
    "rating": "4.9",
    "foodtypes": "Chinese",
    "location": "Varanasi",
    "price_for-two": 500,
    "distance": "44 min",
    "offers": "No Offer",
    "offer-status":false,
    "alcohol": false,
    "res-open_time": 2,
    "res-close_time": 14,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21003129/04112c8943533daa6d2465256856c7da_o2_featured_v2.jpg",
    "names": "Mirell Restaurant",
    "rating": "4.3",
    "foodtypes": "Desserts, Bakery",
    "location": "Darulshifa",
    "price_for-two": 200,
    "distance": "25 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 2,
    "res-close_time": 14,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/20892247/3734149d077a7cc8e141f34f6acbb30e_featured_v2.jpg",
    "names": "Ajmeer Maharaj Hotel",
    "rating": "4.1",
    "foodtypes": "Thai, Japanese",
    "location": "Mangaluru",
    "price_for-two": 150,
    "distance": "37 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 13,
    "res-close_time": 1,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/20388020/0fc6b220297879e1f4080d765b7965f0_featured_v2.jpg",
    "names": "Peppercorn Restaurant",
    "rating": "4.5",
    "foodtypes": "Continental, Turkish, Indian",
    "location": "Amritsar",
    "price_for-two": 200,
    "distance": "42 min",
    "offer-status":true,

    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/18877520/5a571393766c277b916d70a453b85bac_featured_v2.jpg",
    "names": "Taste Junction",
    "rating": "4.4",
    "foodtypes": "BBQ, Kebabs",
    "location": "Chennai",
    "price_for-two": 150,
    "distance": "38 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21977795/cdf091bb342fc06f2f5f17d25a00bd94_featured_v2.jpg",
    "names": "Green Leaf Cafe",
    "rating": "3.9",
    "foodtypes": "North Indian",
    "location": "Nellore",
    "price_for-two": 2500,
    "distance": "40 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 18,
    "res-close_time": 6,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/18382171/6d52ac47b9a51db0dc96f19c8f820a41_featured_v2.jpg",
    "names": "Moonlight Dining",
    "rating": "4.9",
    "foodtypes": "Pizza, Pasta",
    "location": "Charminar",
    "price_for-two": 2500,
    "distance": "29 min",
    "offer-status":true,

    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Taste Junction",
    "rating": "4.4",
    "foodtypes": "Pizza, Pasta",
    "location": "Bhopal",
    "price_for-two": 2500,
    "distance": "15 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 17,
    "res-close_time": 5,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Royal Biryani House",
    "rating": "4.2",
    "foodtypes": "Thai, Japanese",
    "location": "Amritsar",
    "price_for-two": 200,
    "distance": "23 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21962609/8fb3c84f6912d7fb7e8860c76d58abd5_featured_v2.jpg",
    "names": "Fire & Grill",
    "rating": "4.7",
    "foodtypes": "Street Food,Pizza",
    "location": "Surat",
    "price_for-two": 500,
    "distance": "41 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": true,
    "res-open_time": 16,
    "res-close_time": 4,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/6/21760176/cf1fd421e2afba4e513b82ec4fd40aaf_o2_featured_v2.jpg",
    "names": "Abraj Hotel",
    "rating": "4.3",
    "foodtypes": "Desserts, Bakery",
    "location": "Mysuru",
    "price_for-two": 150,
    "distance": "17 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": true,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/22295613/aade5a7026490f1cdc60f7f5dc094f78_featured_v2.jpg?output-format=webp",
    "names": "Green Leaf Cafe",
    "rating": "3.9",
    "foodtypes": "South Indian",
    "location": "Mysuru",
    "price_for-two": 500,
    "distance": "20 min",
    "offer-status":false,

    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/5/18740985/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
    "names": "Blue Lagoon Restaurant",
    "rating": "4.2",
    "foodtypes": "Street Food,Pizza",
    "location": "Kanpur",
    "price_for-two": 2500,
    "distance": "23 min",
    "offer-status":false,

    "offers": "No Offer",
    "alcohol": true,
    "res-open_time": 22,
    "res-close_time": 10,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/18741322/e25bd676805b4a01e37b7e13011a18b3_featured_v2.jpg",
    "names": "Skyline Diner",
    "rating": "3.7",
    "foodtypes": "Pizza, Pasta",
    "location": "Tirupati",
    "price_for-two": 2500,
    "distance": "28 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 0,
    "res-close_time": 12,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/6/22032946/e91a99e72302d7e0813b78e4f0978d3a_featured_v2.jpg",
    "names": "Velvet Plate",
    "rating": "4.1",
    "foodtypes": "Biryani",
    "location": "Ahmedabad",
    "price_for-two": 200,
    "distance": "32 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 15,
    "res-close_time": 3,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/chains/6/22179326/8cdbaf4aa2ae34e124b928bb14ccc35e_featured_v2.jpg",
    "names": "Tandoori Nights",
    "rating": "4.7",
    "foodtypes": "Andhra, Telangana",
    "location": "Indore",
    "price_for-two": 200,
    "distance": "16 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Abraj Hotel",
    "rating": "3.7",
    "foodtypes": "Hyderabadi",
    "location": "Mangaluru",
    "price_for-two": 2500,
    "distance": "21 min",
    "offer-status":true,

    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/6/22032946/e91a99e72302d7e0813b78e4f0978d3a_featured_v2.jpg",
    "names": "Spice Route Kitchen",
    "rating": "3.6",
    "foodtypes": "South Indian",
    "location": "Kanpur",
    "price_for-two": 150,
    "distance": "42 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 3,
    "res-close_time": 15,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/19461655/9079e1636a24751898dba9414c4440ca_featured_v2.jpg",
    "names": "Abraj Hotel",
    "rating": "5.0",
    "foodtypes": "Continental, Turkish, Indian",
    "location": "Kolkata",
    "price_for-two": 2500,
    "distance": "16 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 18,
    "res-close_time": 6,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/18741322/e25bd676805b4a01e37b7e13011a18b3_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "4.4",
    "foodtypes": "Hyderabadi",
    "location": "Mehdipatnam",
    "price_for-two": 200,
    "distance": "35 min",
    "offers": "No Offer",
    "offer-status":false,
    "alcohol": false,
    "res-open_time": 11,
    "res-close_time": 23,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/21577575/7f35c43ff091a48d6c1acd159af3efb8_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "4.1",
    "foodtypes": "BBQ, Kebabs",
    "location": "Kolkata",
    "price_for-two": 500,
    "distance": "44 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 0,
    "res-close_time": 12,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/20521297/03ba87b3729f88d9fdfd77b50ce6452b_o2_featured_v2.jpg",
    "names": "The Hungry Fork",
    "rating": "3.6",
    "foodtypes": "Biryani",
    "location": "Ahmedabad",
    "price_for-two": 500,
    "distance": "40 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 15,
    "res-close_time": 3,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/18741322/e25bd676805b4a01e37b7e13011a18b3_featured_v2.jpg",
    "names": "Ocean Pearl",
    "rating": "3.7",
    "foodtypes": "Andhra, Beverages",
    "location": "Indore",
    "price_for-two": 2500,
    "distance": "34 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/20983729/7845f3ec74a7d30ed8e6c6463ba6c489_featured_v2.jpg",
    "names": "Babylon Brewery & Club",
    "rating": "4.9",
    "foodtypes": "Maharashtrian,Punjabi",
    "location": "Visakhapatnam",
    "price_for-two": 200,
    "distance": "39 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 17,
    "res-close_time": 5,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/20615641/c1e027ed4473dd688cb237aad8d5b225_featured_v2.jpg",
    "names": "Ajmeer Hotel",
    "rating": "4.8",
    "foodtypes": "North Indian, Biryani",
    "location": "Mumbai",
    "price_for-two": 150,
    "distance": "22 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": true,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/8/21819518/fb1aea765438bf1992bf367a05cf9fb8_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "4.0",
    "foodtypes": "Hyderabadi",
    "location": "Ahmedabad",
    "price_for-two": 150,
    "distance": "18 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 13,
    "res-close_time": 1,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/18795170/b6047e53bdb9ebce032c9505dc23eed0_featured_v2.jpg",
    "names": "SS Corn Paradise",
    "rating": "3.6",
    "foodtypes": "Andhra, Telangana",
    "location": "Malakpet",
    "price_for-two": 200,
    "distance": "43 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Hotel Baaratheon",
    "rating": "3.8",
    "foodtypes": "Italian, Mexican",
    "location": "Jaipur",
    "price_for-two": 2500,
    "distance": "20 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/20388020/0fc6b220297879e1f4080d765b7965f0_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "4.9",
    "foodtypes": "Fast Food",
    "location": "Nellore",
    "price_for-two": 200,
    "distance": "21 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0,
    "pet_friendly": true,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/4/20670174/874629dca183b0e79bcc7dde1c7bb25f_featured_v2.jpg",
    "names": "Maharaj Hotel",
    "rating": "4.3",
    "foodtypes": "Thai, Japanese",
    "location": "Kochi",
    "price_for-two": 200,
    "distance": "32 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 17,
    "res-close_time": 5,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/19150885/0060f85fc89f744b6543c27b6e6db4e2_featured_v2.jpg",
    "names": "Ajmeer Maharaj Hotel",
    "rating": "4.9",
    "foodtypes": "Pizza, Pasta",
    "location": "Himayath Nagar",
    "price_for-two": 150,
    "distance": "34 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/18712173/b78e2f4181db1df2fdd5c5fccb80288f_featured_v2.jpg",
    "names": "Hotel Karthikeya",
    "rating": "4.7",
    "foodtypes": "Burger",
    "location": "Thiruvananthapuram",
    "price_for-two": 200,
    "distance": "28 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 3,
    "res-close_time": 15,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/6/22032946/e91a99e72302d7e0813b78e4f0978d3a_featured_v2.jpg",
    "names": "Royal Biryani House",
    "rating": "4.2",
    "foodtypes": "Mughlai",
    "location": "Thiruvananthapuram",
    "price_for-two": 150,
    "distance": "31 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 18,
    "res-close_time": 6,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/21503991/cb680d632e34fb3a153ec501c3c6c0ee_featured_v2.jpg",
    "names": "Babylon Brewery & Club",
    "rating": "4.6",
    "foodtypes": "Pizza, Pasta",
    "location": "Thiruvananthapuram",
    "price_for-two": 500,
    "distance": "38 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 18,
    "res-close_time": 6,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/20615641/c1e027ed4473dd688cb237aad8d5b225_featured_v2.jpg",
    "names": "Red Chilli Kitchen",
    "rating": "4.4",
    "foodtypes": "Desserts, Bakery",
    "location": "Amritsar",
    "price_for-two": 2500,
    "distance": "40 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": false,
    "res-open_time": 19,
    "res-close_time": 7,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/5/19461655/9079e1636a24751898dba9414c4440ca_featured_v2.jpg",
    "names": "Peppercorn Restaurant",
    "rating": "3.5",
    "foodtypes": "Street Food,Pizza",
    "location": "Warangal",
    "price_for-two": 200,
    "distance": "44 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Green Leaf Cafe",
    "rating": "4.4",
    "foodtypes": "Pizza, Pasta",
    "location": "Surat",
    "price_for-two": 150,
    "distance": "32 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/2/20496432/2a6b302fcf1695f1e84c02a6ea361f70_featured_v2.jpg",
    "names": "Ocean Pearl",
    "rating": "3.7",
    "foodtypes": "Street Food,Pizza",
    "location": "Surat",
    "price_for-two": 500,
    "distance": "21 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": true,
    "res-open_time": 18,
    "res-close_time": 6,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/0/18795170/b6047e53bdb9ebce032c9505dc23eed0_featured_v2.jpg",
    "names": "Mirell Restaurant",
    "rating": "4.5",
    "foodtypes": "Ice Cream, Healthy Food",
    "location": "Nallakunta & Vidyanagar",
    "price_for-two": 150,
    "offer-status":true,
    "distance": "24 min",
    "offers": "Flat 50% OFF",
    "alcohol": true,
    "res-open_time": 0,
    "res-close_time": 12,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/21066027/cefeafeafbafba5a5fff543a4d6cd86c_featured_v2.jpg",
    "names": "Maharaj Hotel",
    "rating": "4.4",
    "foodtypes": "Maharashtrian,Punjabi",
    "location": "Kolkata",
    "price_for-two": 500,
    "distance": "34 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": true,
    "res-open_time": 23,
    "res-close_time": 11,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/20521297/03ba87b3729f88d9fdfd77b50ce6452b_o2_featured_v2.jpg",
    "names": "Harvest Kitchen",
    "rating": "4.1",
    "foodtypes": "North Indian",
    "location": "Madurai",
    "price_for-two": 150,
    "distance": "37 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": true,
    "res-open_time": 20,
    "res-close_time": 8,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/9/21962609/8fb3c84f6912d7fb7e8860c76d58abd5_featured_v2.jpg",
    "names": "Babylon Brewery & Club",
    "rating": "3.8",
    "foodtypes": "Burger",
    "location": "Thiruvananthapuram",
    "price_for-two": 500,
    "distance": "23 min",
    "offer-status":true,
    "offers": "₹101 OFF",
    "alcohol": false,
    "res-open_time": 11,
    "res-close_time": 23,
    "pet_friendly": true,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/21503991/cb680d632e34fb3a153ec501c3c6c0ee_featured_v2.jpg",
    "names": "Abraj Hotel",
    "rating": "4.7",
    "foodtypes": "Maharashtrian,Punjabi",
    "location": "Lucknow",
    "price_for-two": 200,
    "distance": "41 min",
    "offer-status":false,
    "offers": "No Offer",
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/1/22044921/4c9622fe6ba60a5579ca2ef7e1c561c6_o2_featured_v2.jpg?output-format=webp",
    "names": "The Food Factory",
    "rating": "4.7",
    "foodtypes": "Desserts, Bakery",
    "location": "Nallakunta & Vidyanagar",
    "price_for-two": 500,
    "distance": "38 min",
    "offer-status":true,
    "offers": "Flat 10% OFF",
    "alcohol": true,
    "res-open_time": 14,
    "res-close_time": 2,
    "pet_friendly": false,
    "outdoor_seating": true
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/7/20521297/03ba87b3729f88d9fdfd77b50ce6452b_o2_featured_v2.jpg",
    "names": "Mirell Restaurant",
    "rating": "4.7",
    "foodtypes": "Mughlai",
    "location": "Surat",
    "price_for-two": 150,
    "distance": "22 min",
    "offers": "₹101 OFF",
    "offer-status":true,
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20,
    "pet_friendly": false,
    "outdoor_seating": false
  },
  {
    "image": "https://b.zmtcdn.com/data/pictures/3/18712173/b78e2f4181db1df2fdd5c5fccb80288f_featured_v2.jpg",
    "names": "Velvet Plate",
    "rating": "4.2",
    "foodtypes": "Burger",
    "location": "Indore",
    "price_for-two": 2500,
    "distance": "34 min",
    "offer-status":true,
    "offers": "Flat 50% OFF",
    "alcohol": false,
    "res-open_time": 6,
    "res-close_time": 18,
    "pet_friendly": true,
    "outdoor_seating": true
  }
]
function getrestaurant(restaurants) {
  const root = document.getElementById("root");
  root.innerHTML = "";

  // 1. CRITICAL FIX: Create ONE grid container OUTSIDE the loop
  const gridContainer = document.createElement("div");
  // We give it 'project' for your site margins, and 'restaurant-grid' to activate flexbox rows
  gridContainer.classList.add("project", "restaurant-grid"); 

  restaurants.forEach(restaurant => {
    // Create a card
    const card = document.createElement("div");
    card.classList.add("card");
    
    // 1. Image (discount)
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const img = document.createElement("img");
    img.src = restaurant.image;
    img.classList.add("img");
    imageContainer.appendChild(img);

    // Only show the discount tag if there actually is an offer!
    if (restaurant.offers && restaurant.offers !== "No Offer") {
      const discount = document.createElement("div");
      discount.classList.add("off");
      discount.textContent = restaurant.offers;
      imageContainer.appendChild(discount);
    }

    // 2. Card Content
    // i. Card header (name and rating)
    const rest = document.createElement("div");
    rest.classList.add("rest");

    const restname = document.createElement("p");
    restname.textContent = restaurant.names;
    restname.classList.add("hotelname");

    const rate = document.createElement("span");
    rate.textContent = restaurant.rating + " ★";
    rate.classList.add("rate");
    
    rest.appendChild(restname);
    rest.appendChild(rate);

    // ii. Card body (food type and price)
    // Wrap this in a relative div so absolute children (.price) position correctly
    const dish = document.createElement("div");
    dish.classList.add("dish");
    dish.style.position = "relative"; 
    dish.style.height = "30px"; 

    const food = document.createElement("p");
    food.textContent = restaurant.foodtypes;
    food.classList.add("type");

    const price = document.createElement("span");
    // Standardized key name to match standard array data formatting
    price.textContent = "₹" + (restaurant["price_for-two"] || restaurant["price_for_two"]) + " for two";
    price.classList.add("price");
    
    dish.appendChild(food);
    dish.appendChild(price);

    // iii. Card location & distance
    const min = document.createElement("div");
    min.classList.add("min");

    // Uncommented and added location styling so it matches your target image
    const loc = document.createElement("span");
    loc.textContent = restaurant.location || "";
    loc.style.color = "grey";
    loc.style.fontSize = "14px";

    const distance = document.createElement("span");
    distance.textContent = restaurant.distance;
    distance.classList.add("distance");
    
    min.appendChild(loc);
    min.appendChild(distance);

    // Assembly: Add everything to the card
    card.appendChild(imageContainer);
    card.appendChild(rest);
    card.appendChild(dish);
    card.appendChild(min);
     
    // 2. CRITICAL FIX: Append the card directly to the shared gridContainer
    gridContainer.appendChild(card);
  });

  // 3. CRITICAL FIX: Push the fully loaded grid container into the root element
  root.appendChild(gridContainer);
}

// Execute the renderer
getrestaurant(restaurants);

document.getElementById("Alcohol").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj.alcohol)
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})

document.getElementById("out").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj.outdoor_seating)
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})
document.getElementById("Pet").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj.pet_friendly)
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})

document.getElementById("offers").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj["offer-status"])
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})


document.getElementById("Rating").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj.rating>=4.5)
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})




document.getElementById("filter").addEventListener("click",()=>{
   document.getElementById("filterModal").classList.remove("hidden")
})





document.getElementById("close").addEventListener("click",()=>{
   document.getElementById("filterModal").classList.add("hidden")
})




document.getElementById("applyBtn").addEventListener("click",()=>{
  const element=document.querySelector('input[name="sort-option"]:checked')
  const answer=element.value;

  if(answer=="Rating: High to Low"){
    restaurants.sort((a,b)=>b.rating-a.rating);
  }
  else if(answer=="Cost: Low to High"){
    restaurants.sort((a,b)=>a["price_for-two"]-b["price_for-two"]);
  }
   else if(answer=="Cost: High to Low"){
    restaurants.sort((a,b)=>b["price_for-two"]-a["price_for-two"]);
  }
  else if(answer=="Distance"){
    restaurants.sort(
  (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
);
  }
   document.getElementById("root").innerHTML="";
    document.getElementById("filterModal").classList.add("hidden")
  getrestaurant(restaurants);
})

// document.getElementById("clearBtn").addEventListener("click",()=>{
//  document.getElementById("root").innerHTML="";
//  document.getElementById("filterModal").classList.add("hidden")
//  getrestaurant(restaurants);

// })
// Close Login Modal
document.getElementById("loginclose").addEventListener("click", () => {
   document.getElementById("lay").classList.add("hidden");
});

// Close Signup Modal
document.getElementById("signclose").addEventListener("click", () => {
   document.getElementById("overfull").classList.add("hidden");
});

// Open Login Modal
document.getElementById("login").addEventListener("click", () => {
   document.getElementById("lay").classList.remove("hidden");
});

// Open Signup Modal
document.getElementById("sign").addEventListener("click", () => {
   document.getElementById("overfull").classList.remove("hidden");
});

// Switch from Login Modal to Signup Modal
// Replace "create" with the actual ID of your "Create account" button text link
document.getElementById("create").addEventListener("click", () => {
   document.getElementById("lay").classList.add("hidden");      // Hides login safely
   document.getElementById("overfull").classList.remove("hidden"); // Shows signup
});

document.getElementById("newlogin").addEventListener("click", () => {
   document.getElementById("overfull").classList.add("hidden");      // Hides login safely
   document.getElementById("lay").classList.remove("hidden"); // Shows signup
});

const cards = document.querySelectorAll(".card");

// Select first restaurant card
const firstCard = cards[0];

firstCard.addEventListener("click", () => {
    window.location.href = "./photo.html";
});