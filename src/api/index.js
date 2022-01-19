import axios from 'axios'


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (ne, sw) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    })

    return data
  } catch (e) {
    console.log(e)
  }
}

export const getPlacesDataSim = {
  "data": [{
    "location_id": "3343918",
    "name": "Beer Restaurant at Neman Hotel",
    "latitude": "53.6769",
    "longitude": "23.83003",
    "num_reviews": "175",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/08/30/3f/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/08/30/3f/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "640",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/08/30/3f/caption.jpg",
          "height": "393"
        },
        "large": {
          "width": "640",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/08/30/3f/caption.jpg",
          "height": "393"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/08/30/3f/caption.jpg",
          "height": "337"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2013-11-18T04:50:58-0500",
      "caption": "Пивной ресторан \"НЕМАН\"",
      "id": "84422719",
      "helpful_votes": "0",
      "published_date": "2013-11-21T08:28:16-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [{
      "award_type": "CERTIFICATE_OF_EXCELLENCE",
      "year": "2020",
      "images": {
        "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
        "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
      },
      "categories": [],
      "display_name": "Certificate of Excellence 2020"
    }, {
      "award_type": "CERTIFICATE_OF_EXCELLENCE",
      "year": "2018",
      "images": {
        "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
        "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
      },
      "categories": [],
      "display_name": "Certificate of Excellence 2018"
    }, {
      "award_type": "CERTIFICATE_OF_EXCELLENCE",
      "year": "2017",
      "images": {
        "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
        "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
      },
      "categories": [],
      "display_name": "Certificate of Excellence 2017"
    }, {
      "award_type": "CERTIFICATE_OF_EXCELLENCE",
      "year": "2016",
      "images": {
        "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
        "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
      },
      "categories": [],
      "display_name": "Certificate of Excellence 2016"
    }],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.553187847137451",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "10",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#8 of 113 Restaurants in Grodno",
    "distance": "0.3730911407192783",
    "distance_string": "0.4 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d3343918-Reviews-Beer_Restaurant_at_Neman_Hotel-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d3343918-Beer_Restaurant_at_Neman_Hotel-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "sit_down", "name": "Sit down" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 152 79-17-33",
    "website": "http://www.hotel-neman.by/pages/pivnoi-restoran.html",
    "address_obj": {
      "street1": "Batoriya Stefana 8",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Batoriya Stefana 8, Grodno 230025 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10640", "name": "Bar" }, { "key": "10654", "name": "European" }, {
      "key": "10742",
      "name": "Eastern European"
    }, { "key": "10746", "name": "Central European" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "10183349",
    "name": "Gastrobar Werden",
    "latitude": "53.676533",
    "longitude": "23.828552",
    "num_reviews": "302",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/d4/3c/f9/summer-terrace.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/d4/3c/f9/summer-terrace.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/d4/3c/f9/summer-terrace.jpg",
          "height": "947"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/17/d4/3c/f9/summer-terrace.jpg",
          "height": "758"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/17/d4/3c/f9/summer-terrace.jpg",
          "height": "185"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-06-07T04:13:52-0400",
      "caption": "Summer terrace",
      "id": "399785209",
      "helpful_votes": "3",
      "published_date": "2019-06-07T04:13:52-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.4621036052703857",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "14",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#11 of 113 Restaurants in Grodno",
    "distance": "0.27065224825898854",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$50,000 - $250,000",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d10183349-Reviews-Gastrobar_Werden-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d10183349-Gastrobar_Werden-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "sit_down", "name": "Sit down" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 254-04-54",
    "website": "http://werden.by/",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 480, "close_time": 1440 }], [{
        "open_time": 480,
        "close_time": 1440
      }], [{ "open_time": 480, "close_time": 1440 }], [{ "open_time": 480, "close_time": 1440 }], [{
        "open_time": 480,
        "close_time": 1560
      }], [{ "open_time": 480, "close_time": 1560 }], [{ "open_time": 480, "close_time": 1440 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "4617", "name": "Italian" }, { "key": "5086", "name": "French" }, {
      "key": "10654",
      "name": "European"
    }, { "key": "10659", "name": "Asian" }, { "key": "10640", "name": "Bar" }, {
      "key": "10665",
      "name": "Vegetarian Friendly"
    }, { "key": "10697", "name": "Vegan Options" }],
    "dietary_restrictions": [{ "key": "10665", "name": "Vegetarian Friendly" }, {
      "key": "10697",
      "name": "Vegan Options"
    }],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "17818969",
    "name": "Sprava",
    "latitude": "53.677223",
    "longitude": "23.828592",
    "num_reviews": "15",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/e4/73/d1/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/e4/73/d1/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/e4/73/d1/caption.jpg",
          "height": "960"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/e4/73/d1/caption.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/21/e4/73/d1/caption.jpg",
          "height": "188"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2022-01-17T14:52:26-0500",
      "caption": "тыквенный суп + драник",
      "id": "568619985",
      "helpful_votes": "0",
      "published_date": "2022-01-17T14:52:26-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.268174886703491",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "22",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#18 of 113 Restaurants in Grodno",
    "distance": "0.32654355114390143",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17818969-Reviews-Sprava-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17818969-Sprava-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 600, "close_time": 1380 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1500 }], [{ "open_time": 600, "close_time": 1500 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }, { "key": "5086", "name": "French" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "15037958",
    "name": "Bar Svaboda",
    "latitude": "53.677277",
    "longitude": "23.828676",
    "num_reviews": "31",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/0f/ed/6d/elettaria-ls.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/0f/ed/6d/elettaria-ls.jpg",
          "height": "50"
        },
        "original": {
          "width": "1080",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/15/0f/ed/6d/elettaria-ls.jpg",
          "height": "1123"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/15/0f/ed/6d/elettaria-ls.jpg",
          "height": "572"
        },
        "medium": {
          "width": "433",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/0f/ed/6d/elettaria-ls.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-10-16T06:54:49-0400",
      "caption": "фото - @elettaria_ls, Мороженое лён с васильковым мёдом на берёзовом соке",
      "id": "353365357",
      "helpful_votes": "0",
      "published_date": "2018-10-16T06:54:49-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.25752329826355",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "23",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#19 of 113 Restaurants in Grodno",
    "distance": "0.3346564515182597",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$3 - $15",
    "description": "Wine, food, friends. Belarusian bar at the historical centre of Grodno. The main concept of SVǍBODA is Belarusian romanticism.We try to break off stereotypes about Belarus and to show that Belarus is ready to be young and romantic, stylish and lively. We represent healthy regionalism. Our cocktlails appeal to iconic authors of Belarusian culture and, especially, of the Neman region.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15037958-Reviews-Bar_Svaboda-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15037958-Bar_Svaboda-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "cafe", "name": "Café" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 632-88-88",
    "website": "https://www.facebook.com/svabodabar/",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 720, "close_time": 1440 }], [{
        "open_time": 720,
        "close_time": 1440
      }], [{ "open_time": 720, "close_time": 1440 }], [{ "open_time": 720, "close_time": 1440 }], [{
        "open_time": 720,
        "close_time": 1440
      }], [{ "open_time": 720, "close_time": 1680 }], [{ "open_time": 720, "close_time": 1680 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10640", "name": "Bar" }, { "key": "10649", "name": "Mediterranean" }, {
      "key": "10654",
      "name": "European"
    }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "11776", "name": "Bars & Pubs" }, { "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "661665",
    "ad_position": "inline1",
    "ad_size": "8X8",
    "doubleclick_zone": "eu.belarus",
    "ancestors": [{
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "detail": "0",
    "page_type": "restaurants",
    "mob_ptype": "app_restaurants"
  }, {
    "location_id": "15850790",
    "name": "Barashka",
    "latitude": "53.679024",
    "longitude": "23.8306",
    "num_reviews": "58",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/42/75/6b/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/42/75/6b/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "850",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/42/75/6b/caption.jpg",
          "height": "1280"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/17/42/75/6b/caption.jpg",
          "height": "828"
        },
        "medium": {
          "width": "299",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/42/75/6b/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-04-23T03:47:47-0400",
      "caption": "Бургер",
      "id": "390231403",
      "helpful_votes": "0",
      "published_date": "2019-04-23T03:47:47-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.2531280517578125",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "24",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#20 of 113 Restaurants in Grodno",
    "distance": "0.5656816364402506",
    "distance_string": "0.6 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$2 - $95",
    "description": "\"Barashka\" - the first cafe in Grodno where are presented in all variety of a dish of the East. There are more than hundred national dishes: salads and snack (dolma, lobio), soups (kharcho, dyushbara), farinaceous dishes (khachapuri, khinkali, manti, cheburek, samosa), meat dishes (adzhapsandat, odzhakhur, pilaf), sweets, dishes from the tandoor.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15850790-Reviews-Barashka-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15850790-Barashka-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "cafe", "name": "Café" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 555-51-34",
    "website": "http://barashka.by",
    "email": "barashka.loungecafe@gmail.com",
    "address_obj": {
      "street1": "Kalyuchinskaya 23",
      "street2": "1 Floor",
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Kalyuchinskaya 23 1 Floor, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 720, "close_time": 1440 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 720, "close_time": 1560 }], [{ "open_time": 720, "close_time": 1560 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10742", "name": "Eastern European" }, {
      "key": "11741",
      "name": "Caucasian"
    }, { "key": "11742", "name": "Georgian" }, { "key": "11743", "name": "Azerbaijani" }, {
      "key": "10651",
      "name": "Barbecue"
    }, { "key": "10992", "name": "Gluten Free Options" }],
    "dietary_restrictions": [{ "key": "10992", "name": "Gluten Free Options" }],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "12595014",
    "name": "Bakst Restaurant",
    "latitude": "53.678417",
    "longitude": "23.823854",
    "num_reviews": "53",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/df/49/74/photo0jpg.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/df/49/74/photo0jpg.jpg",
          "height": "50"
        },
        "original": {
          "width": "1536",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/df/49/74/photo0jpg.jpg",
          "height": "2048"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/0f/df/49/74/photo0jpg.jpg",
          "height": "733"
        },
        "medium": {
          "width": "338",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/df/49/74/photo0jpg.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2017-07-13T07:16:50-0400",
      "caption": "",
      "id": "266291572",
      "helpful_votes": "0",
      "published_date": "2017-07-13T07:16:50-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.2277235984802246",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "27",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#23 of 113 Restaurants in Grodno",
    "distance": "0.39423544079275546",
    "distance_string": "0.4 km",
    "bearing": "north",
    "rating": "4.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d12595014-Reviews-Bakst_Restaurant-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d12595014-Bakst_Restaurant-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 888-43-50",
    "website": "http://bakst.rest",
    "email": "bakstgrodno@gmail.com",
    "address_obj": {
      "street1": "Zamkovaya St., 21",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": null
    },
    "address": "Zamkovaya St., 21, Grodno Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10665", "name": "Vegetarian Friendly" }],
    "dietary_restrictions": [{ "key": "10665", "name": "Vegetarian Friendly" }],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "15238218",
    "name": "Wake Cup Coffee",
    "latitude": "53.678265",
    "longitude": "23.829319",
    "num_reviews": "9",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/0e/67/87/getlstd-property-photo.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/0e/67/87/getlstd-property-photo.jpg",
          "height": "50"
        },
        "original": {
          "width": "640",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/15/0e/67/87/getlstd-property-photo.jpg",
          "height": "480"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/0e/67/87/getlstd-property-photo.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/0e/67/87/getlstd-property-photo.jpg",
          "height": "188"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-10-15T15:03:06-0400",
      "caption": "getlstd_property_photo",
      "id": "353265543",
      "helpful_votes": "0",
      "published_date": "2018-10-15T15:03:06-0400",
      "user": null
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.203552722930908",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "33",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#29 of 113 Restaurants in Grodno",
    "distance": "0.44748679240408595",
    "distance_string": "0.4 km",
    "bearing": "northeast",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$2 - $5",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15238218-Reviews-Wake_Cup_Coffee-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15238218-Wake_Cup_Coffee-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "cafe", "name": "Café" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 582-67-88",
    "address_obj": {
      "street1": null,
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": null
    },
    "address": "Grodno Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 480,
        "close_time": 1380
      }], [{ "open_time": 480, "close_time": 1380 }], [{ "open_time": 480, "close_time": 1380 }], [{
        "open_time": 480,
        "close_time": 1380
      }], [{ "open_time": 480, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "4617", "name": "Italian" }, { "key": "9908", "name": "American" }, {
      "key": "10693",
      "name": "Russian"
    }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "16717967",
    "name": "Prokhodnaya",
    "latitude": "53.67652",
    "longitude": "23.828428",
    "num_reviews": "21",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/65/c1/95/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/65/c1/95/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/65/c1/95/caption.jpg",
          "height": "1365"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/1a/65/c1/95/caption.jpg",
          "height": "733"
        },
        "medium": {
          "width": "338",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/65/c1/95/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-12-26T05:20:44-0500",
      "caption": "Идеальный авокадо тост",
      "id": "442876309",
      "helpful_votes": "0",
      "published_date": "2019-12-26T05:20:44-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.195010185241699",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "35",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#30 of 113 Restaurants in Grodno",
    "distance": "0.26355595088598727",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d16717967-Reviews-Prokhodnaya-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d16717967-Prokhodnaya-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 781-39-81",
    "email": "coffee.prohodnaya@gmail.com",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 0, "close_time": 180 }, {
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 0,
        "close_time": 180
      }, { "open_time": 540, "close_time": 1380 }]], "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "23621900",
    "name": "Hosty Restoran Pyvovarnya",
    "latitude": "53.677452",
    "longitude": "23.827732",
    "num_reviews": "4",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/7c/0b/56/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/7c/0b/56/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/7c/0b/56/caption.jpg",
          "height": "1280"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/21/7c/0b/56/caption.jpg",
          "height": "550"
        },
        "medium": {
          "width": "450",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/7c/0b/56/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2021-11-29T15:35:23-0500",
      "caption": "Логотип заведения. ",
      "id": "561777494",
      "helpful_votes": "0",
      "published_date": "2021-11-29T15:35:23-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.14723801612854",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "45",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#38 of 113 Restaurants in Grodno",
    "distance": "0.3148071851775479",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Closed Now",
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d23621900-Reviews-Hosty_Restoran_Pyvovarnya-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d23621900-Hosty_Restoran_Pyvovarnya-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 322-47-77",
    "website": "http://www.instagram.com/gosti.pub.brewery/",
    "address_obj": {
      "street1": "Zamkova 3",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Zamkova 3, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 840, "close_time": 1500 }], [{
        "open_time": 960,
        "close_time": 1500
      }], [{ "open_time": 960, "close_time": 1500 }], [{ "open_time": 960, "close_time": 1500 }], [{
        "open_time": 960,
        "close_time": 1500
      }], [{ "open_time": 960, "close_time": 1620 }], [{ "open_time": 840, "close_time": 1620 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10651", "name": "Barbecue" }, { "key": "10654", "name": "European" }, {
      "key": "10668",
      "name": "Grill"
    }, { "key": "10693", "name": "Russian" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "21312696",
    "name": "Red on White",
    "latitude": "53.67682",
    "longitude": "23.82793",
    "num_reviews": "9",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/da/31/3d/11-00.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/da/31/3d/11-00.jpg",
          "height": "50"
        },
        "original": {
          "width": "1170",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/21/da/31/3d/11-00.jpg",
          "height": "878"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/da/31/3d/11-00.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/21/da/31/3d/11-00.jpg",
          "height": "188"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2022-01-12T07:53:43-0500",
      "caption": "Завтраки с 11:00",
      "id": "567947581",
      "helpful_votes": "0",
      "published_date": "2022-01-12T07:53:43-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.124840497970581",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "52",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#45 of 113 Restaurants in Grodno",
    "distance": "0.26401721972709363",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$10 - $50",
    "description": "Wine bar in the heart of Grodno! More than 150 kinds of wine. Our handmade pasta, ice-cream and a bottle of wine will make your evening! We dance every Friday and Saturday after 00:00!",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d21312696-Reviews-Red_on_White-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d21312696-Red_on_White-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "sit_down", "name": "Sit down" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 650-14-44",
    "website": "http://www.instagram.com/kb.winery/",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 660, "close_time": 1440 }], [{
        "open_time": 660,
        "close_time": 1440
      }], [{ "open_time": 660, "close_time": 1440 }], [{ "open_time": 660, "close_time": 1440 }], [{
        "open_time": 660,
        "close_time": 1440
      }], [{ "open_time": 660, "close_time": 1440 }], [{ "open_time": 660, "close_time": 1440 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "4617", "name": "Italian" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "661665",
    "ad_position": "inline2",
    "ad_size": "8X8",
    "doubleclick_zone": "eu.belarus",
    "ancestors": [{
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "detail": "0",
    "page_type": "restaurants",
    "mob_ptype": "app_restaurants"
  }, {
    "location_id": "20069313",
    "name": "MC Doner",
    "latitude": "53.678745",
    "longitude": "23.830452",
    "num_reviews": "3",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/d9/9a/18/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/d9/9a/18/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/d9/9a/18/caption.jpg",
          "height": "854"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/d9/9a/18/caption.jpg",
          "height": "683"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/d9/9a/18/caption.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2020-02-10T01:27:27-0500",
      "caption": "Уютный зал",
      "id": "450468376",
      "helpful_votes": "0",
      "published_date": "2020-02-10T01:27:27-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.1011815071105957",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "62",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#55 of 113 Restaurants in Grodno",
    "distance": "0.5352394376318735",
    "distance_string": "0.5 km",
    "bearing": "northeast",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$2 - $6",
    "description": "The brand is based on the traditions of classical Turkish cuisine. All dishes are prepared right before your eyes! The cooking process uses classic Turkish spices and a traditional secret yogurt-based sauce. The format of Turkish cuisine is unique: Durum, lahmajun, pide, real Turkish churchkhela sweets, baklava, milkshakes, and much more you can try right now at MC Doner!",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d20069313-Reviews-MC_Doner-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d20069313-MC_Doner-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "fast_food", "name": "Fast food" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 152 44-22-66",
    "website": "http://www.mcdoner.by/",
    "email": "info@mcdoner.by",
    "address_obj": {
      "street1": "Kirova St. 15",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230003"
    },
    "address": "Kirova St. 15, Grodno 230003 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 600, "close_time": 1425 }], [{
        "open_time": 600,
        "close_time": 1425
      }], [{ "open_time": 600, "close_time": 1425 }], [{ "open_time": 600, "close_time": 1020 }], [{
        "open_time": 600,
        "close_time": 1425
      }], [{ "open_time": 600, "close_time": 1425 }], [{ "open_time": 600, "close_time": 1425 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10654", "name": "European" }, { "key": "10663", "name": "Turkish" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "17560286",
    "name": "Pub Mr.Hops",
    "latitude": "53.67474",
    "longitude": "23.82525",
    "num_reviews": "6",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/c2/b8/27/photo0jpg.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/c2/b8/27/photo0jpg.jpg",
          "height": "50"
        },
        "original": {
          "width": "1079",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/c2/b8/27/photo0jpg.jpg",
          "height": "1078"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/c2/b8/27/photo0jpg.jpg",
          "height": "1023"
        },
        "medium": {
          "width": "450",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/c2/b8/27/photo0jpg.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2020-01-31T08:44:42-0500",
      "caption": "",
      "id": "448968743",
      "helpful_votes": "0",
      "published_date": "2020-01-31T08:44:42-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.0860908031463623",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "64",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#57 of 113 Restaurants in Grodno",
    "distance": "0.029223977432185664",
    "distance_string": "29 m",
    "bearing": "south",
    "rating": "4.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17560286-Reviews-Pub_Mr_Hops-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17560286-Pub_Mr_Hops-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 152 62-39-30",
    "address_obj": {
      "street1": "Zavodskaya 14",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Zavodskaya 14, Grodno 230025 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10640", "name": "Bar" }, { "key": "10654", "name": "European" }, {
      "key": "10670",
      "name": "Pub"
    }, { "key": "10693", "name": "Russian" }, { "key": "21355", "name": "Beer restaurants" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "12695586",
    "name": "Magnoliya",
    "latitude": "53.676544",
    "longitude": "23.828365",
    "num_reviews": "11",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/ae/80/50/300-12-16.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/ae/80/50/300-12-16.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/ae/80/50/300-12-16.jpg",
          "height": "853"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/17/ae/80/50/300-12-16.jpg",
          "height": "683"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/ae/80/50/300-12-16.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-05-27T07:12:08-0400",
      "caption": "В радиусе 300 м от бара \"Магнолия\" — знаменитые достопримечательности: Фарный костел, в котором вы можете увидеть самые старые часы в Европе, Старый и Новый замки, Бернардинский костел, Каложская церковь12 век), монастырь Рождества Богородицы, синагога Хаем Адам16 в), Пожарная каланча, Облдрамтеатр, старый мост через Неман. ",
      "id": "397312080",
      "helpful_votes": "0",
      "published_date": "2019-05-27T07:12:08-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.0824849605560303",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "65",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#58 of 113 Restaurants in Grodno",
    "distance": "0.26207458585155996",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "3.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$3 - $20",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d12695586-Reviews-Magnoliya-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d12695586-Magnoliya-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "cafe", "name": "Café" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 152 71-50-10",
    "email": "magnolia_bar@tut.by",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 720, "close_time": 1440 }], [{
        "open_time": 720,
        "close_time": 1440
      }], [{ "open_time": 720, "close_time": 1440 }], [{ "open_time": 720, "close_time": 1440 }], [{
        "open_time": 720,
        "close_time": 1440
      }], [{ "open_time": 720, "close_time": 1440 }], [{ "open_time": 720, "close_time": 1440 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10637", "name": "Polish" }, { "key": "10654", "name": "European" }, {
      "key": "10742",
      "name": "Eastern European"
    }, { "key": "10693", "name": "Russian" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "17733692",
    "name": "Nashe Mesto",
    "latitude": "53.671352",
    "longitude": "23.823942",
    "num_reviews": "6",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/d9/ff/ea/img-20200209-134655-largejpg.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/d9/ff/ea/img-20200209-134655-largejpg.jpg",
          "height": "50"
        },
        "original": {
          "width": "1008",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/d9/ff/ea/img-20200209-134655-largejpg.jpg",
          "height": "754"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/d9/ff/ea/img-20200209-134655-largejpg.jpg",
          "height": "411"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/d9/ff/ea/img-20200209-134655-largejpg.jpg",
          "height": "187"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2020-02-10T05:38:58-0500",
      "caption": "",
      "id": "450494442",
      "helpful_votes": "1",
      "published_date": "2020-02-10T05:38:58-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.0799663066864014",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "66",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#59 of 113 Restaurants in Grodno",
    "distance": "0.4159203158269918",
    "distance_string": "0.4 km",
    "bearing": "south",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$1 - $5",
    "description": "Cozy coffee shop with a breathtaking view of the city’s attractions and delicious coffee",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17733692-Reviews-Nashe_Mesto-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17733692-Nashe_Mesto-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "cafe", "name": "Café" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 357-77-01",
    "website": "http://www.instagram.com/nashe_mesto_coffeeshop/?hl=ru",
    "email": "zbscompany2018@gmail.com",
    "address_obj": {
      "street1": "Darvina 24",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230011"
    },
    "address": "Darvina 24, Grodno 230011 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }], [{
        "open_time": 540,
        "close_time": 1380
      }], [{ "open_time": 540, "close_time": 1380 }], [{ "open_time": 540, "close_time": 1380 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "17818977",
    "name": "Granat",
    "latitude": "53.6768",
    "longitude": "23.82854",
    "num_reviews": "7",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/af/33/68/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/af/33/68/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1080",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/21/af/33/68/caption.jpg",
          "height": "1080"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/21/af/33/68/caption.jpg",
          "height": "550"
        },
        "medium": {
          "width": "450",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/af/33/68/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2021-12-23T11:18:41-0500",
      "caption": "Логотип заведения. ",
      "id": "565130088",
      "helpful_votes": "0",
      "published_date": "2021-12-23T11:18:41-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.0757176876068115",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "67",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#60 of 113 Restaurants in Grodno",
    "distance": "0.28985357576936177",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17818977-Reviews-Granat-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17818977-Granat-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 551-11-21",
    "website": "http://www.instagram.com/granat.grodno/",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 960, "close_time": 1500 }], [{
        "open_time": 720,
        "close_time": 1440
      }], [{ "open_time": 720, "close_time": 1500 }], [{ "open_time": 720, "close_time": 1500 }], [{
        "open_time": 720,
        "close_time": 1440
      }], [{ "open_time": 720, "close_time": 1740 }], [{ "open_time": 960, "close_time": 1440 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10654", "name": "European" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "19315526",
    "name": "AvaCava",
    "latitude": "53.67904",
    "longitude": "23.83326",
    "num_reviews": "2",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/08/55/3d/avacava.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/08/55/3d/avacava.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/08/55/3d/avacava.jpg",
          "height": "960"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/08/55/3d/avacava.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/08/55/3d/avacava.jpg",
          "height": "188"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2019-11-15T03:44:58-0500",
      "caption": "AvaCava",
      "id": "436753725",
      "helpful_votes": "0",
      "published_date": "2019-11-15T03:44:58-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.0640904903411865",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "73",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#66 of 113 Restaurants in Grodno",
    "distance": "0.6877365614330544",
    "distance_string": "0.7 km",
    "bearing": "northeast",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$1 - $5",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d19315526-Reviews-AvaCava-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d19315526-AvaCava-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "cafe", "name": "Café" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 884-78-78",
    "address_obj": {
      "street1": "Kirova 3",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Kirova 3, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 660, "close_time": 1380 }], [{
        "open_time": 600,
        "close_time": 1320
      }], [{ "open_time": 600, "close_time": 1320 }], [{ "open_time": 600, "close_time": 1320 }], [{
        "open_time": 660,
        "close_time": 1380
      }], [{ "open_time": 660, "close_time": 1380 }], [{ "open_time": 660, "close_time": 1380 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }, { "key": "10682", "name": "Wine Bar" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "661665",
    "ad_position": "inline3",
    "ad_size": "8X8",
    "doubleclick_zone": "eu.belarus",
    "ancestors": [{
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "detail": "0",
    "page_type": "restaurants",
    "mob_ptype": "app_restaurants"
  }, {
    "location_id": "18968374",
    "name": "Kava Banga",
    "latitude": "53.67616",
    "longitude": "23.82839",
    "num_reviews": "3",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/19/8e/63/d7/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/8e/63/d7/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/19/8e/63/d7/caption.jpg",
          "height": "1540"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/19/8e/63/d7/caption.jpg",
          "height": "827"
        },
        "medium": {
          "width": "299",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/8e/63/d7/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2019-10-10T14:22:26-0400",
      "caption": "Каппучино",
      "id": "428762071",
      "helpful_votes": "0",
      "published_date": "2019-10-10T14:22:26-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.050171375274658",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "76",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#69 of 113 Restaurants in Grodno",
    "distance": "0.2373817006095777",
    "distance_string": "0.2 km",
    "bearing": "northeast",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$1 - $4",
    "description": "Cosy coffee house in Grodno city center. We are located on the opposite side of the Drama Theater. We have: -15 seats -Free WiFi -Payment by card -Parking spots -Hoist for wheelchairs. You can have delicious sandwiches for breakfast and lunch. We serve coffee /cloud coffee / tea / mulled wine, and various desserts. Our key advavtages: -The Best view outside the window -Local Drama Theater -Good music -Positive vibes.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d18968374-Reviews-Kava_Banga-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d18968374-Kava_Banga-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "sit_down", "name": "Sit down" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 359-60-30",
    "address_obj": {
      "street1": "Mostovaya 33",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 33, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 600, "close_time": 1320 }], [{
        "open_time": 600,
        "close_time": 1320
      }], [{ "open_time": 600, "close_time": 1320 }], [{ "open_time": 600, "close_time": 1320 }], [{
        "open_time": 600,
        "close_time": 1320
      }], [{ "open_time": 600, "close_time": 1380 }], [{ "open_time": 600, "close_time": 1380 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "23627717",
    "name": "Gosti",
    "latitude": "53.677452",
    "longitude": "23.827732",
    "num_reviews": "1",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/7d/b0/d1/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/7d/b0/d1/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "756",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/21/7d/b0/d1/caption.jpg",
          "height": "1008"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/21/7d/b0/d1/caption.jpg",
          "height": "733"
        },
        "medium": {
          "width": "338",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/7d/b0/d1/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2021-11-30T14:21:09-0500",
      "caption": "Гости",
      "id": "561885393",
      "helpful_votes": "0",
      "published_date": "2021-11-30T14:21:09-0500",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.044745445251465",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "80",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#73 of 113 Restaurants in Grodno",
    "distance": "0.3148071851775479",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "rating": "5.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d23627717-Reviews-Gosti-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d23627717-Gosti-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 322-47-77",
    "website": "http://www.instagram.com/gosti.pub.brewery/",
    "address_obj": {
      "street1": "Zamkovaya 3",
      "street2": "Near pl. Soviet",
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Zamkovaya 3 Near pl. Soviet, Grodno 230025 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10640", "name": "Bar" }, { "key": "10654", "name": "European" }, {
      "key": "10668",
      "name": "Grill"
    }, { "key": "10670", "name": "Pub" }, { "key": "10693", "name": "Russian" }, {
      "key": "21353",
      "name": "Dining bars"
    }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "21129199",
    "name": "Doppio",
    "latitude": "53.67774",
    "longitude": "23.82657",
    "num_reviews": "4",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "2.892360210418701",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "98",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#90 of 113 Restaurants in Grodno",
    "distance": "0.3156530576569427",
    "distance_string": "0.3 km",
    "bearing": "north",
    "rating": "3.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d21129199-Reviews-Doppio-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d21129199-Doppio-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "website": "http://doppio.by/",
    "address_obj": {
      "street1": "Zamkovaya 12a",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Zamkovaya 12a, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 600, "close_time": 1380 }], [{
        "open_time": 600,
        "close_time": 1380
      }], [{ "open_time": 600, "close_time": 1380 }], [{ "open_time": 600, "close_time": 1380 }], [{
        "open_time": 600,
        "close_time": 1380
      }], [{ "open_time": 600, "close_time": 1380 }], [{ "open_time": 600, "close_time": 1380 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }, { "key": "10679", "name": "Healthy" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "7123189",
    "name": "Pizza & Coffee",
    "latitude": "53.67825",
    "longitude": "23.82629",
    "num_reviews": "22",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/14/3a/c0/60/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/14/3a/c0/60/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/14/3a/c0/60/caption.jpg",
          "height": "1280"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/14/3a/c0/60/caption.jpg",
          "height": "550"
        },
        "medium": {
          "width": "450",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/14/3a/c0/60/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-08-20T09:57:55-0400",
      "caption": "Наш логотип",
      "id": "339394656",
      "helpful_votes": "1",
      "published_date": "2018-08-20T09:57:55-0400",
      "user": { "user_id": null, "member_id": "0", "type": "user" }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "2.8846893310546875",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "100",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#92 of 113 Restaurants in Grodno",
    "distance": "0.36754025731580076",
    "distance_string": "0.4 km",
    "bearing": "north",
    "rating": "3.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$1 - $15",
    "description": "Fast & Cool Delivery from Restaurants in Grodno, Slutsk, Zhlobin, Bobruisk, Volkovysk. Call 7424! The most delicious pizza in the city",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d7123189-Reviews-Pizza_Coffee-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d7123189-Pizza_Coffee-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [{ "key": "fast_food", "name": "Fast food" }],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 44 545-41-60",
    "website": "http://pizzacoffee.by",
    "email": "marketolog@pizzacoffee.by",
    "address_obj": {
      "street1": "Zamkovaya 11",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Zamkovaya 11, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 660, "close_time": 1500 }], [{
        "open_time": 660,
        "close_time": 1500
      }], [{ "open_time": 660, "close_time": 1500 }], [{ "open_time": 660, "close_time": 1500 }], [{
        "open_time": 660,
        "close_time": 1500
      }], [{ "open_time": 660, "close_time": 1500 }], [{ "open_time": 660, "close_time": 1500 }]],
      "timezone": "Europe/Minsk"
    },
    "ta_message": {
      "is_red": false,
      "is_sensitive_issue": false,
      "text": "This business is temporarily closed until 06/08/2022",
      "owner_response": null
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "9908", "name": "American" }, { "key": "10641", "name": "Pizza" }, {
      "key": "10642",
      "name": "Cafe"
    }, { "key": "10665", "name": "Vegetarian Friendly" }],
    "dietary_restrictions": [{ "key": "10665", "name": "Vegetarian Friendly" }],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "23698860",
    "name": "Pyatnitsa BBQ-Bar",
    "latitude": "53.676567",
    "longitude": "23.828262",
    "num_reviews": "0",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "distance": "0.258727864680067",
    "distance_string": "0.3 km",
    "bearing": "northeast",
    "is_closed": false,
    "open_now_text": "Closed Now",
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d23698860-Reviews-Pyatnitsa_BBQ_Bar-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d23698860-Pyatnitsa_BBQ_Bar-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 842-22-21",
    "website": "https://www.facebook.com/bbq.bar.friday",
    "address_obj": {
      "street1": "Mostovaya 31",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Mostovaya 31, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [[{ "open_time": 840, "close_time": 1500 }], [{
        "open_time": 960,
        "close_time": 1500
      }], [{ "open_time": 960, "close_time": 1500 }], [{ "open_time": 960, "close_time": 1500 }], [{
        "open_time": 960,
        "close_time": 1500
      }], [{ "open_time": 960, "close_time": 1620 }], [{ "open_time": 840, "close_time": 1620 }]],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "9908", "name": "American" }, { "key": "10640", "name": "Bar" }, {
      "key": "10651",
      "name": "Barbecue"
    }, { "key": "10668", "name": "Grill" }, { "key": "10670", "name": "Pub" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "23142651",
    "name": "Old Tbilisi",
    "latitude": "53.676907",
    "longitude": "23.830898",
    "num_reviews": "0",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "distance": "0.4218284292165766",
    "distance_string": "0.4 km",
    "bearing": "northeast",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d23142651-Reviews-Old_Tbilisi-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d23142651-Old_Tbilisi-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "address_obj": {
      "street1": "Stefan Bathory 8b",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Stefan Bathory 8b, Grodno 230025 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "11742", "name": "Georgian" }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }, {
    "location_id": "15238221",
    "name": "Wake Cup Coffee",
    "latitude": "53.678856",
    "longitude": "23.829403",
    "num_reviews": "0",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "distance": "0.5053938782944486",
    "distance_string": "0.5 km",
    "bearing": "northeast",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15238221-Reviews-Wake_Cup_Coffee-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15238221-Wake_Cup_Coffee-Grodno_Grodno_Region.html",
    "ancestors": [{
      "subcategory": [{ "key": "city", "name": "City" }],
      "name": "Grodno",
      "abbrv": null,
      "location_id": "661665"
    }, {
      "subcategory": [{ "key": "region", "name": "Region" }],
      "name": "Grodno Region",
      "abbrv": null,
      "location_id": "1074265"
    }, {
      "subcategory": [{ "key": "country", "name": "Country" }],
      "name": "Belarus",
      "abbrv": null,
      "location_id": "294447"
    }],
    "category": { "key": "restaurant", "name": "Restaurant" },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "address_obj": {
      "street1": null,
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": null
    },
    "address": "Grodno Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [{ "key": "10642", "name": "Cafe" }, { "key": "10646", "name": "Fast Food" }, {
      "key": "10654",
      "name": "European"
    }],
    "dietary_restrictions": [],
    "establishment_types": [{ "key": "10591", "name": "Restaurants" }]
  }],
  "filters": {
    "rac_deals_only": {
      "false": { "count": "23", "label": "All", "selected": true },
      "true": { "count": "0", "label": "Special Offers", "selected": false }
    },
    "rating": {
      "all": { "count": "23", "label": "All", "selected": true },
      "1": { "count": "0", "label": "Terrible", "selected": false },
      "2": { "count": "0", "label": "Poor", "selected": false },
      "3": { "count": "3", "label": "Average", "selected": false },
      "4": { "count": "12", "label": "Very Good", "selected": false },
      "5": { "count": "5", "label": "Excellent", "selected": false }
    },
    "restaurant_mealtype": {
      "all": {
        "count": "23",
        "label": "All",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": true
      },
      "10606": {
        "count": "6",
        "label": "Brunch",
        "locale_independent_label": "Brunch",
        "priority": "2",
        "selected": false
      },
      "10598": {
        "count": "17",
        "label": "Lunch",
        "locale_independent_label": "Lunch",
        "priority": "3",
        "selected": false
      },
      "10597": {
        "count": "8",
        "label": "Breakfast",
        "locale_independent_label": "Breakfast",
        "priority": "1",
        "selected": false
      },
      "10599": {
        "count": "17",
        "label": "Dinner",
        "locale_independent_label": "Dinner",
        "priority": "4",
        "selected": false
      }
    },
    "exclude_locations": {
      "filtered": { "count": "23", "label": "Results filtered" },
      "all": { "count": "23", "label": "All" }
    },
    "dietary_restrictions": {
      "all": {
        "count": "23",
        "label": "None",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": true
      },
      "10992": {
        "count": "1",
        "label": "Gluten Free Options",
        "locale_independent_label": "Gluten Free Options",
        "priority": "5",
        "selected": false
      },
      "10697": {
        "count": "1",
        "label": "Vegan Options",
        "locale_independent_label": "Vegan Options",
        "priority": "2",
        "selected": false
      },
      "10665": {
        "count": "3",
        "label": "Vegetarian Friendly",
        "locale_independent_label": "Vegetarian Friendly",
        "priority": "1",
        "selected": false
      }
    },
    "rsrv": {
      "false": { "count": "23", "label": "All", "selected": true },
      "true": { "count": "0", "label": "Online Reservations", "selected": false }
    },
    "restaurant_tagcategory": {
      "all": {
        "count": "23",
        "label": "All",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": false
      },
      "10591": {
        "count": "23",
        "label": "Restaurants",
        "locale_independent_label": "Restaurants",
        "priority": "1",
        "selected": true
      },
      "9900": {
        "count": "3",
        "label": "Coffee & Tea",
        "locale_independent_label": "Coffee & Tea",
        "priority": "4",
        "selected": false
      },
      "11776": {
        "count": "1",
        "label": "Bars & Pubs",
        "locale_independent_label": "Bars & Pubs",
        "priority": "6",
        "selected": false
      }
    },
    "open_now": {
      "false": { "count": "23", "label": "All", "selected": true },
      "true": { "count": "15", "label": "Open Now", "selected": false }
    },
    "min_rating": {
      "3": { "count": "20", "label": "3", "selected": false },
      "4": { "count": "17", "label": "4", "selected": false },
      "5": { "count": "5", "label": "5", "selected": false }
    },
    "subcategory": {
      "all": { "count": "23", "label": "All", "selected": true },
      "sit_down": { "count": "4", "label": "Sit down", "selected": false },
      "cafe": { "count": "6", "label": "Café", "selected": false },
      "fast_food": { "count": "2", "label": "Fast food", "selected": false }
    },
    "prices_restaurants": {
      "all": {
        "count": "23",
        "label": "all",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": true
      },
      "10953": {
        "count": "10",
        "label": "$",
        "locale_independent_label": "Cheap Eats",
        "priority": "1",
        "selected": false
      },
      "10955": {
        "count": "7",
        "label": "$$ - $$$",
        "locale_independent_label": "Mid-range",
        "priority": "2",
        "selected": false
      }
    },
    "restaurant_dining_options": {
      "all": { "count": "23", "label": "All", "locale_independent_label": "All", "priority": "0", "selected": true },
      "21379": {
        "count": "1",
        "label": "Non-smoking restaurants",
        "locale_independent_label": "Non-smoking restaurants",
        "priority": "37",
        "selected": false
      },
      "11780": {
        "count": "8",
        "label": "Accepts Credit Cards",
        "locale_independent_label": "Accepts Credit Cards",
        "priority": "26",
        "selected": false
      },
      "20989": {
        "count": "1",
        "label": "Live Music",
        "locale_independent_label": "Live Music",
        "priority": "28",
        "selected": false
      },
      "10602": {
        "count": "5",
        "label": "Reservations",
        "locale_independent_label": "Reservations",
        "priority": "5",
        "selected": false
      },
      "10601": {
        "count": "5",
        "label": "Takeout",
        "locale_independent_label": "Takeout",
        "priority": "7",
        "selected": false
      },
      "10854": {
        "count": "4",
        "label": "Parking Available",
        "locale_independent_label": "Parking Available",
        "priority": "11",
        "selected": false
      },
      "10702": {
        "count": "1",
        "label": "Private Dining",
        "locale_independent_label": "Private Dining",
        "priority": "4",
        "selected": false
      },
      "10603": {
        "count": "4",
        "label": "Outdoor Seating",
        "locale_independent_label": "Outdoor Seating",
        "priority": "3",
        "selected": false
      },
      "10859": {
        "count": "3",
        "label": "Television",
        "locale_independent_label": "Television",
        "priority": "9",
        "selected": false
      },
      "21907": {
        "count": "1",
        "label": "Gift Cards Available",
        "locale_independent_label": "Gift Cards Available",
        "priority": "39",
        "selected": false
      },
      "16547": {
        "count": "8",
        "label": "Table Service",
        "locale_independent_label": "Table Service",
        "priority": "27",
        "selected": false
      },
      "21271": {
        "count": "2",
        "label": "Family style",
        "locale_independent_label": "Family style",
        "priority": "36",
        "selected": false
      },
      "10870": {
        "count": "8",
        "label": "Free Wifi",
        "locale_independent_label": "Free Wifi",
        "priority": "10",
        "selected": false
      },
      "10862": {
        "count": "9",
        "label": "Serves Alcohol",
        "locale_independent_label": "Serves Alcohol",
        "priority": "13",
        "selected": false
      },
      "10861": {
        "count": "2",
        "label": "Wheelchair Accessible",
        "locale_independent_label": "Wheelchair Accessible",
        "priority": "12",
        "selected": false
      },
      "10600": {
        "count": "2",
        "label": "Delivery",
        "locale_independent_label": "Delivery",
        "priority": "6",
        "selected": false
      }
    },
    "restaurant_tagcategory_standalone": {
      "all": {
        "count": "26",
        "label": "All",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": false
      },
      "10591": {
        "count": "23",
        "label": "Restaurants",
        "locale_independent_label": "Restaurants",
        "priority": "1",
        "selected": true
      },
      "9900": {
        "count": "3",
        "label": "Coffee & Tea",
        "locale_independent_label": "Coffee & Tea",
        "priority": "5",
        "selected": false
      },
      "11776": {
        "count": "1",
        "label": "Bars & Pubs",
        "locale_independent_label": "Bars & Pubs",
        "priority": "7",
        "selected": false
      }
    },
    "restaurant_styles": {
      "all": {
        "count": "23",
        "label": "All",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": true
      },
      "10613": {
        "count": "1",
        "label": "Local cuisine",
        "locale_independent_label": "Local cuisine",
        "priority": "7",
        "selected": false
      },
      "10604": {
        "count": "3",
        "label": "Families with children",
        "locale_independent_label": "Families with children",
        "priority": "1",
        "selected": false
      },
      "10614": {
        "count": "1",
        "label": "Romantic",
        "locale_independent_label": "Romantic",
        "priority": "8",
        "selected": false
      },
      "10605": {
        "count": "1",
        "label": "Business meetings",
        "locale_independent_label": "Business meetings",
        "priority": "2",
        "selected": false
      },
      "10607": {
        "count": "1",
        "label": "Special occasions",
        "locale_independent_label": "Special occasions",
        "priority": "3",
        "selected": false
      },
      "10609": {
        "count": "2",
        "label": "Large groups",
        "locale_independent_label": "Large groups",
        "priority": "5",
        "selected": false
      },
      "11777": { "count": "2", "label": "Kids", "locale_independent_label": "Kids", "priority": "9", "selected": false }
    },
    "combined_food": {
      "5086": {
        "count": "2",
        "label": "French",
        "locale_independent_label": "French",
        "priority": "312",
        "selected": false
      },
      "10679": {
        "count": "1",
        "label": "Healthy",
        "locale_independent_label": "Healthy",
        "priority": "385",
        "selected": false
      },
      "10637": {
        "count": "1",
        "label": "Polish",
        "locale_independent_label": "Polish",
        "priority": "590",
        "selected": false
      },
      "10659": {
        "count": "1",
        "label": "Asian",
        "locale_independent_label": "Asian",
        "priority": "36",
        "selected": false
      },
      "10693": {
        "count": "5",
        "label": "Russian",
        "locale_independent_label": "Russian",
        "priority": "645",
        "selected": false
      },
      "10670": {
        "count": "3",
        "label": "Pub",
        "locale_independent_label": "Pub",
        "priority": "611",
        "selected": false
      },
      "10651": {
        "count": "3",
        "label": "Barbecue",
        "locale_independent_label": "Barbecue",
        "priority": "63",
        "selected": false
      },
      "11742": {
        "count": "2",
        "label": "Georgian",
        "locale_independent_label": "Georgian",
        "priority": "343",
        "selected": false
      },
      "11741": {
        "count": "1",
        "label": "Caucasian",
        "locale_independent_label": "Caucasian",
        "priority": "142",
        "selected": false
      },
      "10654": {
        "count": "10",
        "label": "European",
        "locale_independent_label": "European",
        "priority": "287",
        "selected": false
      },
      "11743": {
        "count": "1",
        "label": "Azerbaijani",
        "locale_independent_label": "Azerbaijani",
        "priority": "41",
        "selected": false
      },
      "all": {
        "count": "23",
        "label": "All Cuisines",
        "locale_independent_label": "All",
        "priority": "0",
        "selected": true
      },
      "21355": {
        "count": "1",
        "label": "Beer restaurants",
        "locale_independent_label": "Beer restaurants",
        "priority": "72",
        "selected": false
      },
      "21353": {
        "count": "1",
        "label": "Dining bars",
        "locale_independent_label": "Dining bars",
        "priority": "259",
        "selected": false
      },
      "10646": {
        "count": "1",
        "label": "Fast Food",
        "locale_independent_label": "Fast Food",
        "priority": "292",
        "selected": false
      },
      "10668": {
        "count": "3",
        "label": "Grill",
        "locale_independent_label": "Grill",
        "priority": "358",
        "selected": false
      },
      "4617": {
        "count": "3",
        "label": "Italian",
        "locale_independent_label": "Italian",
        "priority": "413",
        "selected": false
      },
      "9908": {
        "count": "3",
        "label": "American",
        "locale_independent_label": "American",
        "priority": "14",
        "selected": false
      },
      "10746": {
        "count": "1",
        "label": "Central European",
        "locale_independent_label": "Central European",
        "priority": "149",
        "selected": false
      },
      "10649": {
        "count": "1",
        "label": "Mediterranean",
        "locale_independent_label": "Mediterranean",
        "priority": "491",
        "selected": false
      },
      "10682": {
        "count": "1",
        "label": "Wine Bar",
        "locale_independent_label": "Wine Bar",
        "priority": "819",
        "selected": false
      },
      "10640": { "count": "6", "label": "Bar", "locale_independent_label": "Bar", "priority": "61", "selected": false },
      "10642": {
        "count": "8",
        "label": "Cafe",
        "locale_independent_label": "Cafe",
        "priority": "109",
        "selected": false
      },
      "10663": {
        "count": "1",
        "label": "Turkish",
        "locale_independent_label": "Turkish",
        "priority": "793",
        "selected": false
      },
      "10641": {
        "count": "1",
        "label": "Pizza",
        "locale_independent_label": "Pizza",
        "priority": "584",
        "selected": false
      },
      "10742": {
        "count": "3",
        "label": "Eastern European",
        "locale_independent_label": "Eastern European",
        "priority": "270",
        "selected": false
      }
    }
  },
  "filters_v2": {
    "search_filters": [{ "key": "restaurant_tagcategory_standalone", "value": "10591" }, {
      "key": "restaurant_mealtype",
      "value": "all"
    }],
    "filter_sections": [{
      "label": "Most Popular",
      "section_id": "most_popular",
      "filter_groups": [{
        "type": "multi_select",
        "key": "prices_restaurants",
        "tracking_key": "price",
        "label": "Price",
        "options": [{
          "label": "$",
          "value": "10953",
          "selected": false,
          "count": "10",
          "default": false,
          "single_select": false
        }, {
          "label": "$$ - $$$",
          "value": "10955",
          "selected": false,
          "count": "7",
          "default": false,
          "single_select": false
        }]
      }, {
        "type": "single_select",
        "key": "open_now",
        "tracking_key": "open_now",
        "label": "Open Now",
        "options": [{ "label": "Open Now", "value": "true", "selected": false, "count": "15", "default": false }]
      }]
    }, {
      "label": "Cuisine Type", "section_id": "combined_food", "filter_groups": [{
        "type": "multi_select",
        "key": "combined_food",
        "tracking_key": "Cuisine",
        "label": "Cuisine Type",
        "options": [{
          "label": "All Cuisines",
          "value": "all",
          "selected": true,
          "count": "23",
          "default": true,
          "single_select": true
        }, {
          "label": "American",
          "value": "9908",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Asian",
          "value": "10659",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Azerbaijani",
          "value": "11743",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Bar",
          "value": "10640",
          "selected": false,
          "count": "6",
          "default": false,
          "single_select": false
        }, {
          "label": "Barbecue",
          "value": "10651",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Beer restaurants",
          "value": "21355",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Cafe",
          "value": "10642",
          "selected": false,
          "count": "8",
          "default": false,
          "single_select": false
        }, {
          "label": "Caucasian",
          "value": "11741",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Central European",
          "value": "10746",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Dining bars",
          "value": "21353",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Eastern European",
          "value": "10742",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "European",
          "value": "10654",
          "selected": false,
          "count": "10",
          "default": false,
          "single_select": false
        }, {
          "label": "Fast Food",
          "value": "10646",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "French",
          "value": "5086",
          "selected": false,
          "count": "2",
          "default": false,
          "single_select": false
        }, {
          "label": "Georgian",
          "value": "11742",
          "selected": false,
          "count": "2",
          "default": false,
          "single_select": false
        }, {
          "label": "Grill",
          "value": "10668",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Healthy",
          "value": "10679",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Italian",
          "value": "4617",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Mediterranean",
          "value": "10649",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Pizza",
          "value": "10641",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Polish",
          "value": "10637",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Pub",
          "value": "10670",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Russian",
          "value": "10693",
          "selected": false,
          "count": "5",
          "default": false,
          "single_select": false
        }, {
          "label": "Turkish",
          "value": "10663",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Wine Bar",
          "value": "10682",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }]
      }]
    }, {
      "label": "Dietary Restrictions",
      "section_id": "dietary_restrictions",
      "filter_groups": [{
        "type": "multi_select",
        "key": "dietary_restrictions",
        "tracking_key": "DietaryRestrictions",
        "label": "Dietary Restrictions",
        "options": [{
          "label": "None",
          "value": "all",
          "selected": true,
          "count": "23",
          "default": true,
          "single_select": true
        }, {
          "label": "Vegetarian Friendly",
          "value": "10665",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Vegan Options",
          "value": "10697",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }, {
          "label": "Gluten Free Options",
          "value": "10992",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }]
      }]
    }, {
      "label": "Meals",
      "section_id": "restaurant_mealtype",
      "filter_groups": [{
        "type": "multi_select",
        "key": "restaurant_mealtype",
        "tracking_key": "Meals",
        "label": "Meals",
        "options": [{
          "label": "Breakfast",
          "value": "10597",
          "selected": false,
          "count": "8",
          "default": false,
          "single_select": false
        }, {
          "label": "Brunch",
          "value": "10606",
          "selected": false,
          "count": "6",
          "default": false,
          "single_select": false
        }, {
          "label": "Lunch",
          "value": "10598",
          "selected": false,
          "count": "17",
          "default": false,
          "single_select": false
        }, {
          "label": "Dinner",
          "value": "10599",
          "selected": false,
          "count": "17",
          "default": false,
          "single_select": false
        }]
      }]
    }, {
      "label": "Establishment Type",
      "section_id": "restaurant_tagcategory",
      "filter_groups": [{
        "type": "multi_select",
        "key": "restaurant_tagcategory",
        "tracking_key": "mobile_establishment_type_filter",
        "label": "Establishment Type",
        "options": [{
          "label": "Restaurants",
          "value": "10591",
          "selected": true,
          "count": "23",
          "default": true,
          "single_select": false
        }, {
          "label": "Coffee & Tea",
          "value": "9900",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }, {
          "label": "Bars & Pubs",
          "value": "11776",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }]
      }]
    }, {
      "label": "Minimum Traveler Rating",
      "section_id": "min_rating",
      "filter_groups": [{
        "type": "single_select",
        "key": "min_rating",
        "tracking_key": "travelerrating",
        "label": "Minimum Traveler Rating",
        "options": [{ "label": "3", "value": "3", "selected": false, "count": "20", "default": false }, {
          "label": "4",
          "value": "4",
          "selected": false,
          "count": "17",
          "default": false
        }, { "label": "5", "value": "5", "selected": false, "count": "5", "default": false }]
      }]
    }, {
      "label": "Restaurant Features",
      "section_id": "restaurant_features",
      "filter_groups": [{
        "type": "multi_select",
        "key": "restaurant_styles",
        "tracking_key": "Good_for",
        "label": "Good for",
        "options": [{
          "label": "Families with children",
          "value": "10604",
          "selected": false,
          "count": "3",
          "default": false,
          "single_select": false
        }]
      }, {
        "type": "multi_select",
        "key": "restaurant_dining_options",
        "tracking_key": "DiningOptions",
        "label": "Restaurant Features",
        "options": [{
          "label": "Reservations",
          "value": "10602",
          "selected": false,
          "count": "5",
          "default": false,
          "single_select": false
        }]
      }, {
        "type": "multi_select",
        "key": "restaurant_dining_options",
        "tracking_key": "DiningOptions",
        "label": "Restaurant Features",
        "options": [{
          "label": "Delivery",
          "value": "10600",
          "selected": false,
          "count": "2",
          "default": false,
          "single_select": false
        }]
      }, {
        "type": "multi_select",
        "key": "restaurant_dining_options",
        "tracking_key": "DiningOptions",
        "label": "Restaurant Features",
        "options": [{
          "label": "Takeout",
          "value": "10601",
          "selected": false,
          "count": "5",
          "default": false,
          "single_select": false
        }]
      }, {
        "type": "multi_select",
        "key": "restaurant_dining_options",
        "tracking_key": "DiningOptions",
        "label": "Restaurant Features",
        "options": [{
          "label": "Free Wifi",
          "value": "10870",
          "selected": false,
          "count": "8",
          "default": false,
          "single_select": false
        }]
      }, {
        "type": "multi_select",
        "key": "restaurant_dining_options",
        "tracking_key": "DiningOptions",
        "label": "Restaurant Features",
        "options": [{
          "label": "Gift Cards Available",
          "value": "21907",
          "selected": false,
          "count": "1",
          "default": false,
          "single_select": false
        }]
      }]
    }],
    "metadata": { "sort": "Ranking" }
  },
  "restaurant_availability_options": {
    "day": "19",
    "month": "1",
    "year": "2022",
    "hour": "19",
    "minute": "0",
    "people": "2",
    "datestring": "01/19/2022",
    "is_default": true,
    "is_set": false,
    "racable": false,
    "time_options": {
      "selected_option": { "value": "19:00:00", "display": "7:00 PM", "selected": true },
      "options": [{ "value": "00:00:00", "display": "12:00 AM", "selected": null }, {
        "value": "00:30:00",
        "display": "12:30 AM",
        "selected": null
      }, { "value": "01:00:00", "display": "1:00 AM", "selected": null }, {
        "value": "01:30:00",
        "display": "1:30 AM",
        "selected": null
      }, { "value": "02:00:00", "display": "2:00 AM", "selected": null }, {
        "value": "02:30:00",
        "display": "2:30 AM",
        "selected": null
      }, { "value": "03:00:00", "display": "3:00 AM", "selected": null }, {
        "value": "03:30:00",
        "display": "3:30 AM",
        "selected": null
      }, { "value": "04:00:00", "display": "4:00 AM", "selected": null }, {
        "value": "04:30:00",
        "display": "4:30 AM",
        "selected": null
      }, { "value": "05:00:00", "display": "5:00 AM", "selected": null }, {
        "value": "05:30:00",
        "display": "5:30 AM",
        "selected": null
      }, { "value": "06:00:00", "display": "6:00 AM", "selected": null }, {
        "value": "06:30:00",
        "display": "6:30 AM",
        "selected": null
      }, { "value": "07:00:00", "display": "7:00 AM", "selected": null }, {
        "value": "07:30:00",
        "display": "7:30 AM",
        "selected": null
      }, { "value": "08:00:00", "display": "8:00 AM", "selected": null }, {
        "value": "08:30:00",
        "display": "8:30 AM",
        "selected": null
      }, { "value": "09:00:00", "display": "9:00 AM", "selected": null }, {
        "value": "09:30:00",
        "display": "9:30 AM",
        "selected": null
      }, { "value": "10:00:00", "display": "10:00 AM", "selected": null }, {
        "value": "10:30:00",
        "display": "10:30 AM",
        "selected": null
      }, { "value": "11:00:00", "display": "11:00 AM", "selected": null }, {
        "value": "11:30:00",
        "display": "11:30 AM",
        "selected": null
      }, { "value": "12:00:00", "display": "12:00 PM", "selected": null }, {
        "value": "12:30:00",
        "display": "12:30 PM",
        "selected": null
      }, { "value": "13:00:00", "display": "1:00 PM", "selected": null }, {
        "value": "13:30:00",
        "display": "1:30 PM",
        "selected": null
      }, { "value": "14:00:00", "display": "2:00 PM", "selected": null }, {
        "value": "14:30:00",
        "display": "2:30 PM",
        "selected": null
      }, { "value": "15:00:00", "display": "3:00 PM", "selected": null }, {
        "value": "15:30:00",
        "display": "3:30 PM",
        "selected": null
      }, { "value": "16:00:00", "display": "4:00 PM", "selected": null }, {
        "value": "16:30:00",
        "display": "4:30 PM",
        "selected": null
      }, { "value": "17:00:00", "display": "5:00 PM", "selected": null }, {
        "value": "17:30:00",
        "display": "5:30 PM",
        "selected": null
      }, { "value": "18:00:00", "display": "6:00 PM", "selected": null }, {
        "value": "18:30:00",
        "display": "6:30 PM",
        "selected": null
      }, { "value": "19:00:00", "display": "7:00 PM", "selected": true }, {
        "value": "19:30:00",
        "display": "7:30 PM",
        "selected": null
      }, { "value": "20:00:00", "display": "8:00 PM", "selected": null }, {
        "value": "20:30:00",
        "display": "8:30 PM",
        "selected": null
      }, { "value": "21:00:00", "display": "9:00 PM", "selected": null }, {
        "value": "21:30:00",
        "display": "9:30 PM",
        "selected": null
      }, { "value": "22:00:00", "display": "10:00 PM", "selected": null }, {
        "value": "22:30:00",
        "display": "10:30 PM",
        "selected": null
      }, { "value": "23:00:00", "display": "11:00 PM", "selected": null }, {
        "value": "23:30:00",
        "display": "11:30 PM",
        "selected": null
      }]
    },
    "people_options": {
      "selected_option": { "value": "2", "display": "2", "selected": true },
      "options": [{ "value": "1", "display": "1", "selected": null }, {
        "value": "2",
        "display": "2",
        "selected": true
      }, { "value": "3", "display": "3", "selected": null }, {
        "value": "4",
        "display": "4",
        "selected": null
      }, { "value": "5", "display": "5", "selected": null }, {
        "value": "6",
        "display": "6",
        "selected": null
      }, { "value": "7", "display": "7", "selected": null }, {
        "value": "8",
        "display": "8",
        "selected": null
      }, { "value": "9", "display": "9", "selected": null }, {
        "value": "10",
        "display": "10",
        "selected": null
      }, { "value": "11", "display": "11", "selected": null }, {
        "value": "12",
        "display": "12",
        "selected": null
      }, { "value": "13", "display": "13", "selected": null }, {
        "value": "14",
        "display": "14",
        "selected": null
      }, { "value": "15", "display": "15", "selected": null }, {
        "value": "16",
        "display": "16",
        "selected": null
      }, { "value": "17", "display": "17", "selected": null }, {
        "value": "18",
        "display": "18",
        "selected": null
      }, { "value": "19", "display": "19", "selected": null }, { "value": "20", "display": "20", "selected": null }]
    }
  },
  "open_hours_options": {
    "closed_count": "2",
    "is_set": false,
    "low_coverage_primary_message": "Open hours aren't available for all places.",
    "timezone": "Europe/Minsk",
    "unsure_count": "6",
    "open_count": "15",
    "low_coverage_secondary_message": "Show all restaurants",
    "current_value": "now"
  },
  "paging": { "results": "23", "total_results": "23" }
}


