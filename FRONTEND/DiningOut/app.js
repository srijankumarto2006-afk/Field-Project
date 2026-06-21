const restaurants=[
  {
    "image": "./ZAZA.avif",
    "names": "Grand Cafe",
    "rating": "4.5",
    "foodtypes": "Biryani, Chinese",
    "location": "Darulshifa",
    "price_for-two": 1155,
    "distance": "4.2",
    "offers": 28,
    "alcohol": false,
    "res-open_time": 1,
    "res-close_time": 13
  },
  {
    "image": "./blue.jpg_compressed",
    "names": "Sri Varahi Bhavan",
    "rating": "3.1",
    "foodtypes": "Tandoor, Biryani",
    "location": "Banjara Hills",
    "price_for-two": 279,
    "distance": "3.5",
    "offers": 5,
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19
  },
  {
    "image": "./deccan.avif",
    "names": "Swayampakam",
    "rating": "2.5",
    "foodtypes": "Biryani, Beverages",
    "location": "Mehdipatnam",
    "price_for-two": 383,
    "distance": "6.2",
    "offers": 23,
    "alcohol": true,
    "res-open_time": 4,
    "res-close_time": 16
  },
  {
    "image": "./ubq.avif",
    "names": "Hotel Grand",
    "rating": "3.4",
    "foodtypes": "Biryani, Beverages",
    "location": "Himayath Nagar",
    "price_for-two": 1584,
    "distance": "7.6",
    "offers": 12,
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0
  },
  {
    "image": "./dum.avif",
    "names": "Sultan Serai",
    "rating": "2.8",
    "foodtypes": "North Indian, Biryani",
    "location": "Abids",
    "price_for-two": 373,
    "distance": "3.3",
    "offers": 11,
    "alcohol": false,
    "res-open_time": 3,
    "res-close_time": 15
  },

  {
    "image": "./bala.avif",
    "names": "Iqbal Cafe",
    "rating": "3.5",
    "foodtypes": "Biryani",
    "location": "Charminar",
    "price_for-two": 1539,
    "distance": "2.8",
    "offers": 7,
    "alcohol": true,
    "res-open_time": 14,
    "res-close_time": 2
  },
 
  {
    "image": "./sri.avif",
    "names": "Balaji Family Dhaba",
    "rating": "4.5",
    "foodtypes": "North Indian, Biryani",
    "location": "Malakpet",
    "price_for-two": 2210,
    "distance": "3.4",
    "offers": 27,
    "alcohol": false,
    "res-open_time": 19,
    "res-close_time": 7
  },

  {
    "image": "./grandh.avif",
    "names": "Sultan Serai",
    "rating": "1.6",
    "foodtypes": "Biryani",
    "location": "Mehdipatnam",
    "price_for-two": 1615,
    "distance": "3.7",
    "offers": 24,
    "alcohol": false,
    "res-open_time": 9,
    "res-close_time": 21
  },
  {
    "image": "./iqbal.jpg_compressed",
    "names": "Swayampakam",
    "rating": "1.1",
    "foodtypes": "Biryani, Hyderabadi",
    "location": "Nallakunta & Vidyanagar",
    "price_for-two": 2073,
    "distance": "2.4",
    "offers": 23,
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20
  },

  {
    "image": "./sri.avif",
    "names": "Blue Fox",
    "rating": "3.5",
    "foodtypes": "Biryani, Hyderabadi Kababs",
    "location": "Nellore",
    "price_for-two": 173,
    "distance": "2.9",
    "offers": 25,
    "alcohol": false,
    "res-open_time": 22,
    "res-close_time": 10
  },
  
  {
    "image": "./BAJI.avif",
    "names": "ZAZA Mughal Biryani",
    "rating": "4.4",
    "foodtypes": "South Indian, North Indian",
    "location": "ABIDS",
    "price_for-two": 1591,
    "distance": "7.8",
    "offers": 5,
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22
  },
  {
    "image": "./deccan.avif",
    "names": "Annapurna Kitchen",
    "rating": "2.5",
    "foodtypes": "Biryani",
    "location": "Banjara Hills",
    "price_for-two": 1914,
    "distance": "5.4",
    "offers": 20,
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22
  },

  {
    "image": "./b8.avif",
    "names": "Deccan Elite Cuisines",
    "rating": "4.8",
    "foodtypes": "Biryani, Chinese, Tandoor",
    "location": "Malakpet",
    "price_for-two": 1869,
    "distance": "8.6",
    "offers": 1,
    "alcohol": false,
    "res-open_time": 23,
    "res-close_time": 11
  },
  {
    "image": "./darb.avif",
    "names": "ZAZA Mughal Biryani",
    "rating": "1.7",
    "foodtypes": "South Indian, Beverage",
    "location": "Himayath Nagar",
    "price_for-two": 812,
    "distance": "10.7",
    "offers": 3,
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19
  },

  {
    "image": "./ubq.avif",
    "names": "Sultan Serai",
    "rating": "4.0",
    "foodtypes": "Biryani, Hyderabadi Kababs",
    "location": "Mehdipatnam",
    "price_for-two": 925,
    "distance": "3.5",
    "offers": 13,
    "alcohol": false,
    "res-open_time": 22,
    "res-close_time": 10
  },
  
  {
    "image": "./b8.avif",
    "names": "Blue Fox",
    "rating": "1.2",
    "foodtypes": "Biryani",
    "location": "Santoshnagar & Saidabad",
    "price_for-two": 1783,
    "distance": "4.7",
    "offers": 7,
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0
  },
  {
    "image": "./blue.jpg_compressed",
    "names": "Balaji Family Dhaba",
    "rating": "2.1",
    "foodtypes": "South Indian",
    "location": "Nellore",
    "price_for-two": 793,
    "distance": "2.8",
    "offers": 27,
    "alcohol": false,
    "res-open_time": 4,
    "res-close_time": 16
  },
  {
    "image": "./megh.avif",
    "names": "Blue Fox",
    "rating": "1.3",
    "foodtypes": "Biryani, Chinese, Tandoor",
    "location": "Malakpet",
    "price_for-two": 2394,
    "distance": "6.8",
    "offers": 10,
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19
  },
  {
    "image": "./darb.avif",
    "names": "Iqbal Cafe",
    "rating": "1.4",
    "foodtypes": "Biryani",
    "location": "ABIDS",
    "price_for-two": 2226,
    "distance": "4.0",
    "offers": 24,
    "alcohol": false,
    "res-open_time": 15,
    "res-close_time": 3
  },
  {
    "image": "./dum.avif",
    "names": "Sri Varahi Bhavan",
    "rating": "2.2",
    "foodtypes": "Kebabs, Biryani, Mughlai",
    "location": "Darulshifa",
    "price_for-two": 87,
    "distance": "4.7",
    "offers": 19,
    "alcohol": false,
    "res-open_time": 23,
    "res-close_time": 11
  },
  {
    "image": "./darb.avif",
    "names": "Blue Fox",
    "rating": "3.5",
    "foodtypes": "Biryani, Tandoor",
    "location": "Ameerpet",
    "price_for-two": 25,
    "distance": "5.7",
    "offers": 17,
    "alcohol": true,
    "res-open_time": 13,
    "res-close_time": 1
  },
  {
    "image": "./BAJI.avif",
    "names": "Balaji Family Dhaba",
    "rating": "4.7",
    "foodtypes": "Biryani, Tandoor",
    "location": "ABIDS",
    "price_for-two": 1199,
    "distance": "9.1",
    "offers": 10,
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0
  },
  {
    "image": "./megh.avif",
    "names": "Balaji Family Dhaba",
    "rating": "4.8",
    "foodtypes": "Biryani",
    "location": "ABIDS",
    "price_for-two": 2176,
    "distance": "10.1",
    "offers": 14,
    "alcohol": false,
    "res-open_time": 6,
    "res-close_time": 18
  },
  {
    "image": "./darb.avif",
    "names": "Grand Cafe",
    "rating": "3.2",
    "foodtypes": "Biryani, Awadhi",
    "location": "Nellore",
    "price_for-two": 2026,
    "distance": "3.9",
    "offers": 6,
    "alcohol": false,
    "res-open_time": 13,
    "res-close_time": 1
  },
  {
    "image": "./dum.avif",
    "names": "Iqbal Cafe",
    "rating": "1.1",
    "foodtypes": "Biryani",
    "location": "Nellore",
    "price_for-two": 874,
    "distance": "6.1",
    "offers": 14,
    "alcohol": true,
    "res-open_time": 9,
    "res-close_time": 21
  },

  {
    "image": "./b8.avif",
    "names": "Blue Fox",
    "rating": "3.0",
    "foodtypes": "Kebabs, Biryani, Mughlai",
    "location": "Nellore",
    "price_for-two": 1238,
    "distance": "5.9",
    "offers": 15,
    "alcohol": false,
    "res-open_time": 5,
    "res-close_time": 17
  },
  {
    "image": "./ubq.avif",
    "names": "Balaji Family Dhaba",
    "rating": "3.2",
    "foodtypes": "Biryani, Beverages",
    "location": "Abids",
    "price_for-two": 1733,
    "distance": "8.6",
    "offers": 0,
    "alcohol": false,
    "res-open_time": 1,
    "res-close_time": 13
  },
  {
    "image": "./iqbal.jpg_compressed",
    "names": "Annapurna Kitchen",
    "rating": "3.8",
    "foodtypes": "Biryani, Beverages",
    "location": "Himayath Nagar",
    "price_for-two": 1332,
    "distance": "4.7",
    "offers": 8,
    "alcohol": true,
    "res-open_time": 7,
    "res-close_time": 19
  },
  {
    "image": "./ZAZA.avif",
    "names": "Iqbal Cafe",
    "rating": "4.6",
    "foodtypes": "North Indian, Biryani",
    "location": "Mehdipatnam",
    "price_for-two": 982,
    "distance": "1.0",
    "offers": 11,
    "alcohol": false,
    "res-open_time": 13,
    "res-close_time": 1
  },
  {
    "image": "./b8.avif",
    "names": "Sultan Serai",
    "rating": "4.5",
    "foodtypes": "North Indian, Biryani",
    "location": "Mehdipatnam",
    "price_for-two": 1988,
    "distance": "1.4",
    "offers": 26,
    "alcohol": true,
    "res-open_time": 5,
    "res-close_time": 17
  },
  {
    "image": "./blue.jpg_compressed",
    "names": "Balaji Family Dhaba",
    "rating": "2.2",
    "foodtypes": "Biryani, Beverages",
    "location": "Ameerpet",
    "price_for-two": 2267,
    "distance": "5.0",
    "offers": 12,
    "alcohol": false,
    "res-open_time": 2,
    "res-close_time": 14
  },
  {
    "image": "./ubq.avif",
    "names": "Sultan Serai",
    "rating": "3.2",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Ameerpet",
    "price_for-two": 2174,
    "distance": "10.6",
    "offers": 2,
    "alcohol": false,
    "res-open_time": 5,
    "res-close_time": 17
  },

  {
    "image": "./bala.avif",
    "names": "UBQ-Meals,Thalis & Bowls",
    "rating": "2.6",
    "foodtypes": "Biryani, Andhra, Hyderabadi",
    "location": "Nellore",
    "price_for-two": 2046,
    "distance": "1.1",
    "offers": 6,
    "alcohol": true,
    "res-open_time": 16,
    "res-close_time": 4
  },
  {
    "image": "./bala.avif",
    "names": "Grand Cafe",
    "rating": "4.0",
    "foodtypes": "North Indian, Biryani",
    "location": "Nallakunta & Vidyanagar",
    "price_for-two": 1101,
    "distance": "4.6",
    "offers": 1,
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9
  },
 
  {
    "image": "./deccan.avif",
    "names": "Grand Cafe",
    "rating": "3.1",
    "foodtypes": "North Indian, Biryani",
    "location": "Abids",
    "price_for-two": 392,
    "distance": "4.6",
    "offers": 11,
    "alcohol": false,
    "res-open_time": 3,
    "res-close_time": 15
  },
  
  {
    "image": "./ubq.avif",
    "names": "Hotel Grand",
    "rating": "2.0",
    "foodtypes": "Kebabs, Biryani, Mughlai",
    "location": "Malakpet",
    "price_for-two": 1881,
    "distance": "3.0",
    "offers": 29,
    "alcohol": false,
    "res-open_time": 4,
    "res-close_time": 16
  },

  {
    "image": "./grandh.avif",
    "names": "Balaji Family Dhaba",
    "rating": "2.9",
    "foodtypes": "North Indian, Biryani",
    "location": "Charminar",
    "price_for-two": 1496,
    "distance": "2.3",
    "offers": 12,
    "alcohol": true,
    "res-open_time": 21,
    "res-close_time": 9
  },
  {
    "image": "./ubq.avif",
    "names": "Balaji Family Dhaba",
    "rating": "2.1",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Nellore",
    "price_for-two": 685,
    "distance": "7.7",
    "offers": 4,
    "alcohol": true,
    "res-open_time": 4,
    "res-close_time": 16
  },
  {
    "image": "./ubq.avif",
    "names": "ZAZA Mughal Biryani",
    "rating": "3.8",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Malakpet",
    "price_for-two": 2114,
    "distance": "7.7",
    "offers": 2,
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0
  },
  {
    "image": "./megh.avif",
    "names": "Deccan Elite Cuisines",
    "rating": "1.1",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Nellore",
    "price_for-two": 837,
    "distance": "4.2",
    "offers": 5,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4
  },
  {
    "image": "./BAJI.avif",
    "names": "Hotel Grand",
    "rating": "3.5",
    "foodtypes": "Biryani",
    "location": "Nellore",
    "price_for-two": 297,
    "distance": "4.7",
    "offers": 20,
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9
  },
  {
    "image": "./ZAZA.avif",
    "names": "Swayampakam",
    "rating": "4.9",
    "foodtypes": "Biryani, Tandoor",
    "location": "Himayath Nagar",
    "price_for-two": 257,
    "distance": "1.9",
    "offers": 8,
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0
  },

  {
    "image": "./swayam.avif",
    "names": "Blue Fox",
    "rating": "4.4",
    "foodtypes": "Biryani, Tandoor",
    "location": "Nallakunta & Vidyanagar",
    "price_for-two": 2224,
    "distance": "6.9",
    "offers": 3,
    "alcohol": true,
    "res-open_time": 20,
    "res-close_time": 8
  },

  {
    "image": "./swayam.avif",
    "names": "Swayampakam",
    "rating": "2.7",
    "foodtypes": "North Indian, Biryani",
    "location": "Ameerpet",
    "price_for-two": 73,
    "distance": "2.9",
    "offers": 0,
    "alcohol": true,
    "res-open_time": 20,
    "res-close_time": 8
  },
  {
    "image": "./swayam.avif",
    "names": "Sri Varahi Bhavan",
    "rating": "4.8",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "ABIDS",
    "price_for-two": 533,
    "distance": "7.8",
    "offers": 19,
    "alcohol": true,
    "res-open_time": 22,
    "res-close_time": 10
  },
  {
    "image": "./bala.avif",
    "names": "Iqbal Cafe",
    "rating": "2.1",
    "foodtypes": "Biryani, Awadhi",
    "location": "Mehdipatnam",
    "price_for-two": 481,
    "distance": "2.8",
    "offers": 13,
    "alcohol": true,
    "res-open_time": 13,
    "res-close_time": 1
  },
  {
    "image": "./ZAZA.avif",
    "names": "Balaji Family Dhaba",
    "rating": "4.8",
    "foodtypes": "Biryani, Beverages",
    "location": "ABIDS",
    "price_for-two": 761,
    "distance": "7.2",
    "offers": 24,
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19
  },
  {
    "image": "./sultan.avif",
    "names": "Blue Fox",
    "rating": "2.3",
    "foodtypes": "Biryani",
    "location": "Charminar",
    "price_for-two": 1333,
    "distance": "8.9",
    "offers": 28,
    "alcohol": true,
    "res-open_time": 3,
    "res-close_time": 15
  },

 
  {
    "image": "./BAJI.avif",
    "names": "Hotel Grand",
    "rating": "4.0",
    "foodtypes": "North Indian, Biryani",
    "location": "Ameerpet",
    "price_for-two": 2158,
    "distance": "10.3",
    "offers": 11,
    "alcohol": false,
    "res-open_time": 23,
    "res-close_time": 11
  },

  {
    "image": "./sultan.avif",
    "names": "Behrouz Biryani",
    "rating": "1.3",
    "foodtypes": "Biryani, Awadhi",
    "location": "ABIDS",
    "price_for-two": 12,
    "distance": "8.9",
    "offers": 4,
    "alcohol": false,
    "res-open_time": 5,
    "res-close_time": 17
  },
  {
    "image": "./cafe.avif",
    "names": "Hotel Grand",
    "rating": "4.0",
    "foodtypes": "Biryani, Andhra, Hyderabadi",
    "location": "Darulshifa",
    "price_for-two": 240,
    "distance": "6.1",
    "offers": 16,
    "alcohol": false,
    "res-open_time": 19,
    "res-close_time": 7
  },
  {
    "image": "./deccan.avif",
    "names": "Iqbal Cafe",
    "rating": "3.4",
    "foodtypes": "Biryani, Andhra, Hyderabadi",
    "location": "Ameerpet",
    "price_for-two": 216,
    "distance": "6.9",
    "offers": 25,
    "alcohol": false,
    "res-open_time": 19,
    "res-close_time": 7
  },
  {
    "image": "./megh.avif",
    "names": "Swayampakam",
    "rating": "1.5",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Himayath Nagar",
    "price_for-two": 98,
    "distance": "2.2",
    "offers": 0,
    "alcohol": false,
    "res-open_time": 2,
    "res-close_time": 14
  },
  {
    "image": "./ubq.avif",
    "names": "Grand Cafe",
    "rating": "2.9",
    "foodtypes": "Biryani, Beverages",
    "location": "Banjara Hills",
    "price_for-two": 2078,
    "distance": "5.3",
    "offers": 2,
    "alcohol": false,
    "res-open_time": 12,
    "res-close_time": 0
  },

  {
    "image": "./dum.avif",
    "names": "Biryani Darbar",
    "rating": "5.0",
    "foodtypes": "Biryani, Chinese, Tandoor",
    "location": "Ameerpet",
    "price_for-two": 555,
    "distance": "4.9",
    "offers": 17,
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9
  },

  {
    "image": "./ubq.avif",
    "names": "Annapurna Kitchen",
    "rating": "1.9",
    "foodtypes": "Biryani",
    "location": "ABIDS",
    "price_for-two": 443,
    "distance": "8.4",
    "offers": 27,
    "alcohol": false,
    "res-open_time": 20,
    "res-close_time": 8
  },
  {
    "image": "./dum.avif",
    "names": "Behrouz Biryani",
    "rating": "1.4",
    "foodtypes": "Biryani, Andhra, Hyderabadi",
    "location": "Malakpet",
    "price_for-two": 189,
    "distance": "9.0",
    "offers": 6,
    "alcohol": false,
    "res-open_time": 5,
    "res-close_time": 17
  },
  {
    "image": "./swayam.avif",
    "names": "Sri Varahi Bhavan",
    "rating": "4.4",
    "foodtypes": "South Indian",
    "location": "ABIDS",
    "price_for-two": 149,
    "distance": "1.8",
    "offers": 4,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4
  },
  {
    "image": "./swayam.avif",
    "names": "Deccan Elite Cuisines",
    "rating": "2.9",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Himayath Nagar",
    "price_for-two": 1862,
    "distance": "9.9",
    "offers": 8,
    "alcohol": false,
    "res-open_time": 21,
    "res-close_time": 9
  },
  {
    "image": "./swayam.avif",
    "names": "ZAZA Mughal Biryani",
    "rating": "2.1",
    "foodtypes": "Biryani",
    "location": "ABIDS",
    "price_for-two": 1144,
    "distance": "1.7",
    "offers": 7,
    "alcohol": false,
    "res-open_time": 7,
    "res-close_time": 19
  },
  {
    "image": "./sultan.avif",
    "names": "Balaji Family Dhaba",
    "rating": "1.6",
    "foodtypes": "Biryani, Andhra, Hyderabadi",
    "location": "Mehdipatnam",
    "price_for-two": 1921,
    "distance": "8.7",
    "offers": 14,
    "alcohol": true,
    "res-open_time": 15,
    "res-close_time": 3
  },
  {
    "image": "./b8.avif",
    "names": "Swayampakam",
    "rating": "2.9",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Darulshifa",
    "price_for-two": 1553,
    "distance": "6.6",
    "offers": 24,
    "alcohol": true,
    "res-open_time": 17,
    "res-close_time": 5
  },
  {
    "image": "./megh.avif",
    "names": "Swayampakam",
    "rating": "3.0",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Charminar",
    "price_for-two": 1916,
    "distance": "7.4",
    "offers": 12,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4
  },
  {
    "image": "./grandh.avif",
    "names": "Balaji Family Dhaba",
    "rating": "2.6",
    "foodtypes": "Biryani, Chinese, Tandoor",
    "location": "ABIDS",
    "price_for-two": 2171,
    "distance": "10.3",
    "offers": 0,
    "alcohol": false,
    "res-open_time": 19,
    "res-close_time": 7
  },
  {
    "image": "./iqbal.jpg_compressed",
    "names": "Sri Varahi Bhavan",
    "rating": "3.5",
    "foodtypes": "Biryani, Tandoor",
    "location": "ABIDS",
    "price_for-two": 519,
    "distance": "3.2",
    "offers": 14,
    "alcohol": false,
    "res-open_time": 16,
    "res-close_time": 4
  },
  {
    "image": "./iqbal.jpg_compressed",
    "names": "Hotel Grand",
    "rating": "3.5",
    "foodtypes": "Biryani, Hyderabadi Kababs, Chinese",
    "location": "Himayath Nagar",
    "price_for-two": 1460,
    "distance": "4.4",
    "offers": 3,
    "alcohol": true,
    "res-open_time": 5,
    "res-close_time": 17
  },
  {
    "image": "./deccan.avif",
    "names": "Hotel Grand",
    "rating": "2.1",
    "foodtypes": "Biryani, Hyderabadi Kababs, Chinese",
    "location": "Abids",
    "price_for-two": 1140,
    "distance": "9.6",
    "offers": 4,
    "alcohol": true,
    "res-open_time": 12,
    "res-close_time": 0
  },
  {
    "image": "./ZAZA.avif",
    "names": "ZAZA Mughal Biryani",
    "rating": "1.8",
    "foodtypes": "Biryani, Chinese, Tandoor",
    "location": "Himayath Nagar",
    "price_for-two": 2364,
    "distance": "3.1",
    "offers": 20,
    "alcohol": false,
    "res-open_time": 10,
    "res-close_time": 22
  },
  {
    "image": "./ubq.avif",
    "names": "Hotel Grand",
    "rating": "4.4",
    "foodtypes": "Biryani, Hyderabadi Kababs, Chinese",
    "location": "ABIDS",
    "price_for-two": 2249,
    "distance": "10.3",
    "offers": 6,
    "alcohol": true,
    "res-open_time": 14,
    "res-close_time": 2
  },
  {
    "image": "./ZAZA.avif",
    "names": "Deccan Elite Cuisines",
    "rating": "2.1",
    "foodtypes": "Biryani, Chinese, Tandoor",
    "location": "Santoshnagar & Saidabad",
    "price_for-two": 1100,
    "distance": "3.2",
    "offers": 17,
    "alcohol": false,
    "res-open_time": 8,
    "res-close_time": 20
  },
  {
    "image": "./b8.avif",
    "names": "Balaji Family Dhaba",
    "rating": "2.0",
    "foodtypes": "South Indian, North Indian",
    "location": "Malakpet",
    "price_for-two": 419,
    "distance": "2.0",
    "offers": 0,
    "alcohol": true,
    "res-open_time": 6,
    "res-close_time": 18
  },
  {
    "image": "./sri.avif",
    "names": "Annapurna Kitchen",
    "rating": "2.1",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Banjara Hills",
    "price_for-two": 2014,
    "distance": "4.1",
    "offers": 4,
    "alcohol": false,
    "res-open_time": 0,
    "res-close_time": 12
  },
  {
    "image": "./iqbal.jpg_compressed",
    "names": "Swayampakam",
    "rating": "3.9",
    "foodtypes": "South Indian, North Indian",
    "location": "Banjara Hills",
    "price_for-two": 291,
    "distance": "5.1",
    "offers": 9,
    "alcohol": false,
    "res-open_time": 14,
    "res-close_time": 2
  },
  {
    "image": "./sultan.avif",
    "names": "Hotel Grand",
    "rating": "1.4",
    "foodtypes": "Biryani",
    "location": "Banjara Hills",
    "price_for-two": 2092,
    "distance": "7.4",
    "offers": 2,
    "alcohol": false,
    "res-open_time": 22,
    "res-close_time": 10
  },
  {
    "image": "./blue.jpg_compressed",
    "names": "Balaji Family Dhaba",
    "rating": "1.4",
    "foodtypes": "Biryani",
    "location": "Malakpet",
    "price_for-two": 1810,
    "distance": "7.5",
    "offers": 7,
    "alcohol": false,
    "res-open_time": 17,
    "res-close_time": 5
  },
  {
    "image": "./darb.avif",
    "names": "Behrouz Biryani",
    "rating": "4.0",
    "foodtypes": "South Indian",
    "location": "Santoshnagar & Saidabad",
    "price_for-two": 137,
    "distance": "9.1",
    "offers": 28,
    "alcohol": false,
    "res-open_time": 23,
    "res-close_time": 11
  },
  {
    "image": "./ZAZA.avif",
    "names": "Behrouz Biryani",
    "rating": "4.4",
    "foodtypes": "Tandoor, Biryani, Chinese",
    "location": "Himayath Nagar",
    "price_for-two": 774,
    "distance": "9.9",
    "offers": 1,
    "alcohol": false,
    "res-open_time": 9,
    "res-close_time": 21
  }
]


function getrestaurant(restaurants){

  const root=document.getElementById("root");
     root.innerHTML = "";
    restaurants.forEach(restaurant => {

        // create a card
        // 1.Image
        // 2.Card Content
        //  i.card header (name and rating)
        // ii.card footer (food type and price)
        // iii.card location (restaurant location and distance)

        // create a card

        const project=document.createElement("div");
        project.classList.add("project");

        
        const card=document.createElement("div");
        card.classList.add("card");
        
        const pivc=document.createElement("div")
        pivc.classList.add("pivc")
       const img=document.createElement("img");
        img.src = "./Images/" + restaurant.image;
        img.classList.add("img")

        const trend=document.createElement("div")
        trend.classList.add("trend")
        const discount=document.createElement("div")
        discount.classList.add("discount")

        trend.appendChild(discount)
        pivc.appendChild(trend)
        pivc.appendChild(img)
        

        //  Card content
      const cardcontent=document.createElement("div");
        cardcontent.classList.add("card-content");




        //  Card header
      const cardheader=document.createElement("div");
        cardheader.classList.add("card-header");

        const h3= document.createElement("h3")
          h3.textContent=restaurant.names;

        const rate=document.createElement("span")
        rate.textContent=   restaurant.rating+" ★"
        rate.classList.add("rating")

        cardheader.appendChild(h3)
        cardheader.appendChild(rate)


             //  Card footer
      const cardfooter=document.createElement("div");
        cardfooter.classList.add("card-footer");
        const food= document.createElement("span")
          food.textContent=restaurant.foodtypes;

        const price=document.createElement("span")
       price.textContent = "₹" + restaurant["price_for-two"];
        

        cardfooter.appendChild(food)
        cardfooter.appendChild(price)



        //  Card location
      const cardlocation=document.createElement("div");
        cardlocation.classList.add("card-location");

       const location= document.createElement("span")
          location.textContent=restaurant.location;

        const distance=document.createElement("span")
        distance.textContent=restaurant.distance+"km"
        

        cardlocation.appendChild(location)
        cardlocation.appendChild(distance)



         cardcontent.appendChild(cardheader)
       cardcontent.appendChild(cardfooter)
        cardcontent.appendChild(cardlocation)

        card.appendChild(pivc)
         card.appendChild(cardcontent)
         project.appendChild(card)
        
           
     root.appendChild(card)



        
    });
}
getrestaurant(restaurants);

document.getElementById("Alcohol").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj.alcohol)
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})



document.getElementById("Rating").addEventListener("click",()=>{
  const result=restaurants.filter((obj)=>obj.rating>=4.5)
  document.getElementById("root").innerHTML="";
  getrestaurant(result);
})




document.getElementById("filters").addEventListener("click",()=>{
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
