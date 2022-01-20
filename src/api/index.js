import axios from 'axios'


export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
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

export const getPlacesDataSim = (type) => [
  {
    "location_id": "14008644",
    "name": "Hookah Place by Smokkin",
    "latitude": "53.681652",
    "longitude": "23.832006",
    "num_reviews": "74",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/69/c0/92/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/69/c0/92/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/69/c0/92/caption.jpg",
          "height": "884"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/69/c0/92/caption.jpg",
          "height": "707"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/69/c0/92/caption.jpg",
          "height": "380"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-11-17T09:56:23-0500",
      "caption": "Основной зал",
      "id": "359252114",
      "helpful_votes": "1",
      "published_date": "2018-11-17T09:56:23-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2020",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2020"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "4.050546646118164",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "2",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#1 of 113 Restaurants in Grodno",
    "distance": "0.6598408751040514",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$3 - $6",
    "description": "Hookah Place by Smokkin is a symbiosis of the lounge atmosphere of the hookah and gastronomic cocktail bar, where guest follow new experiences. • Comfortable, upholstered bar stools with backs. • Recreation area with spotlights, where guests can feel the stars on the set. • A game room with PS4 and the most interesting board games, which will return the attention of guests from the phones to each other.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d14008644-Reviews-Hookah_Place_by_Smokkin-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d14008644-Hookah_Place_by_Smokkin-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 285-58-55",
    "website": "http://smokkin.net",
    "email": "alex@smokkin.net",
    "address_obj": {
      "street1": "Sovetskaya 25",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Sovetskaya 25, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1740
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1740
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "establishment_types": [
      {
        "key": "11776",
        "name": "Bars & Pubs"
      },
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "13335285",
    "name": "Pizzeria Forno",
    "latitude": "53.680943",
    "longitude": "23.827505",
    "num_reviews": "95",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/8d/00/e5/valoriani.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/8d/00/e5/valoriani.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/8d/00/e5/valoriani.jpg",
          "height": "853"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/8d/00/e5/valoriani.jpg",
          "height": "683"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/8d/00/e5/valoriani.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-11-29T05:48:33-0500",
      "caption": "Печь Valoriani",
      "id": "361562341",
      "helpful_votes": "2",
      "published_date": "2018-11-29T05:48:33-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2020",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2020"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2019",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2019"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.8095953464508057",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "5",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#3 of 113 Restaurants in Grodno",
    "distance": "0.8455477260142069",
    "distance_string": "0.8 km",
    "bearing": "northwest",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$3 - $32",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d13335285-Reviews-Pizzeria_Forno-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d13335285-Pizzeria_Forno-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 744-49-99",
    "website": "http://www.forno.by/",
    "email": "ibgrupp@gmail.com",
    "address_obj": {
      "street1": "1st Trudovaya St., 10",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "1st Trudovaya St., 10, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10641",
        "name": "Pizza"
      },
      {
        "key": "4617",
        "name": "Italian"
      },
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "8549680",
    "name": "Gastrobar Houdini",
    "latitude": "53.681065",
    "longitude": "23.840832",
    "num_reviews": "125",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/b7/15/80/christmas-houdini.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/b7/15/80/christmas-houdini.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/b7/15/80/christmas-houdini.jpg",
          "height": "1280"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/21/b7/15/80/christmas-houdini.jpg",
          "height": "550"
        },
        "medium": {
          "width": "450",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/b7/15/80/christmas-houdini.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2021-12-27T12:04:18-0500",
      "caption": "Christmas Houdini",
      "id": "565646720",
      "helpful_votes": "0",
      "published_date": "2021-12-27T12:04:18-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2020",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2020"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2019",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2019"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2018",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2018"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2017",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2017"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.771416425704956",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "6",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#4 of 113 Restaurants in Grodno",
    "distance": "0.44642625642955036",
    "distance_string": "0.4 km",
    "bearing": "north",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$3 - $20",
    "description": "Probably the best bar in Grodno",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d8549680-Reviews-Gastrobar_Houdini-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d8549680-Gastrobar_Houdini-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 618-21-82",
    "website": "http://barhoudini.by/",
    "email": "speakeasyman@gmail.com",
    "address_obj": {
      "street1": "Lenina 13",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Lenina 13, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 900,
            "close_time": 1620
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1620
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1620
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1620
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1740
          }
        ],
        [
          {
            "open_time": 900,
            "close_time": 1440
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "5473",
        "name": "Japanese"
      },
      {
        "key": "10345",
        "name": "Steakhouse"
      },
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10683",
        "name": "Gastropub"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "11776",
        "name": "Bars & Pubs"
      },
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "12707216",
    "name": "Bar Faraday",
    "latitude": "53.679424",
    "longitude": "23.834991",
    "num_reviews": "58",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1d/0a/b5/5e/atmosphere.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1d/0a/b5/5e/atmosphere.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/0a/b5/5e/atmosphere.jpg",
          "height": "853"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/1d/0a/b5/5e/atmosphere.jpg",
          "height": "683"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1d/0a/b5/5e/atmosphere.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2021-05-27T15:21:33-0400",
      "caption": "atmosphere",
      "id": "487241054",
      "helpful_votes": "0",
      "published_date": "2021-05-27T15:21:33-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.7291641235351562",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "7",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#5 of 113 Restaurants in Grodno",
    "distance": "0.34455831118255636",
    "distance_string": "0.3 km",
    "bearing": "northwest",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$2 - $7",
    "description": "The design of the bar is a kind of symbiosis of different directions and styles filled with the spirit of scientific achievements of the second half of the XIX century. Great emphasis is placed on the cocktail culture. The kitchen of the Faraday bar is filled with world hits.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d12707216-Reviews-Bar_Faraday-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d12707216-Bar_Faraday-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 359-32-32",
    "website": "http://barfaraday.by/",
    "address_obj": {
      "street1": "Sotsialisticheskaya 32",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Sotsialisticheskaya 32, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 1080,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 1080,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 1080,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 1080,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 1080,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 1080,
            "close_time": 1740
          }
        ],
        [
          {
            "open_time": 1080,
            "close_time": 1740
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10746",
        "name": "Central European"
      },
      {
        "key": "9908",
        "name": "American"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "11776",
        "name": "Bars & Pubs"
      },
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "661665",
    "ad_position": "inline1",
    "ad_size": "8X8",
    "doubleclick_zone": "eu.belarus",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "detail": "0",
    "page_type": "restaurants",
    "mob_ptype": "app_restaurants"
  },
  {
    "location_id": "7955143",
    "name": "Restaurant Korolevskaya Ohota",
    "latitude": "53.68276",
    "longitude": "23.833315",
    "num_reviews": "95",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/07/b9/c1/6f/restaurant-korolevskaya.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/07/b9/c1/6f/restaurant-korolevskaya.jpg",
          "height": "50"
        },
        "original": {
          "width": "2000",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/07/b9/c1/6f/restaurant-korolevskaya.jpg",
          "height": "1500"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/07/b9/c1/6f/restaurant-korolevskaya.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/07/b9/c1/6f/restaurant-korolevskaya.jpg",
          "height": "188"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2015-04-19T13:26:06-0400",
      "caption": "table",
      "id": "129614191",
      "helpful_votes": "1",
      "published_date": "2015-04-19T13:26:06-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2019",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2019"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2018",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2018"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2017",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2017"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.58549427986145",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "9",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#7 of 113 Restaurants in Grodno",
    "distance": "0.7086597350875925",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "4.5",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d7955143-Reviews-Restaurant_Korolevskaya_Ohota-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d7955143-Restaurant_Korolevskaya_Ohota-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 44 722-64-66",
    "website": "http://korolevskaya-ohota.grodnomk.by/menu.php",
    "address_obj": {
      "street1": "Ozheshko 3",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Ozheshko 3, Grodno 230023 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10746",
        "name": "Central European"
      },
      {
        "key": "10654",
        "name": "European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2020",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2020"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2018",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2018"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2017",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2017"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2016",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2016"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.553187847137451",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "10",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#8 of 113 Restaurants in Grodno",
    "distance": "0.5741054001717115",
    "distance_string": "0.6 km",
    "bearing": "west",
    "rating": "4.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d3343918-Reviews-Beer_Restaurant_at_Neman_Hotel-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d3343918-Beer_Restaurant_at_Neman_Hotel-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
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
    "cuisine": [
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10742",
        "name": "Eastern European"
      },
      {
        "key": "10746",
        "name": "Central European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "9749513",
    "name": "Bolshoy Buffet",
    "latitude": "53.68225",
    "longitude": "23.831507",
    "num_reviews": "153",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/13/e9/a0/6d/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/13/e9/a0/6d/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/e9/a0/6d/caption.jpg",
          "height": "853"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/13/e9/a0/6d/caption.jpg",
          "height": "682"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/13/e9/a0/6d/caption.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-07-30T03:59:11-0400",
      "caption": "Светлый просторный зал с панорамным видом на крыши старого города.",
      "id": "334078061",
      "helpful_votes": "2",
      "published_date": "2018-07-30T03:59:11-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2020",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2020"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.5527243614196777",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "11",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#9 of 113 Restaurants in Grodno",
    "distance": "0.7316577970579607",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$40,000 - $120,000",
    "description": "Big Buffet a cozy place in the heart of Grodno. Great for informal meetings, gatherings of friends and business lunches. A wide choice of dishes of Belarusian, Russian, Italian and Asian food. There are many sockets for your devicese, highchairs, free Wi-Fi, bookcrossing and the most pleasant staff.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d9749513-Reviews-Bolshoy_Buffet-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d9749513-Bolshoy_Buffet-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 332-18-03",
    "website": "http://www.facebook.com/bigbufet",
    "email": "big.bufet@gmail.com",
    "address_obj": {
      "street1": "Sovetskaya 18",
      "street2": "Mall Neman, 4th floor",
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Sovetskaya 18 Mall Neman, 4th floor, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 600,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 600,
            "close_time": 1380
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "4617",
        "name": "Italian"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10659",
        "name": "Asian"
      },
      {
        "key": "10693",
        "name": "Russian"
      },
      {
        "key": "10646",
        "name": "Fast Food"
      },
      {
        "key": "10742",
        "name": "Eastern European"
      },
      {
        "key": "10746",
        "name": "Central European"
      },
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "4777037",
    "name": "Bar Cuba",
    "latitude": "53.68083",
    "longitude": "23.831945",
    "num_reviews": "45",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/d5/63/48/bar-cuba.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/d5/63/48/bar-cuba.jpg",
          "height": "50"
        },
        "original": {
          "width": "1536",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/d5/63/48/bar-cuba.jpg",
          "height": "2048"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/0e/d5/63/48/bar-cuba.jpg",
          "height": "733"
        },
        "medium": {
          "width": "338",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/d5/63/48/bar-cuba.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2017-03-31T05:42:20-0400",
      "caption": "Bar Cuba",
      "id": "248865608",
      "helpful_votes": "0",
      "published_date": "2017-03-31T05:42:20-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.4933602809906006",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "12",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#10 of 113 Restaurants in Grodno",
    "distance": "0.5979958555574039",
    "distance_string": "0.6 km",
    "bearing": "northwest",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d4777037-Reviews-Bar_Cuba-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d4777037-Bar_Cuba-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "address_obj": {
      "street1": "Kalyuchinskaya 12",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Kalyuchinskaya 12, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 900,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 900,
            "close_time": 1560
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10640",
        "name": "Bar"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "11776",
        "name": "Bars & Pubs"
      },
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
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
    "distance": "0.674983987033442",
    "distance_string": "0.7 km",
    "bearing": "west",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$50,000 - $250,000",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d10183349-Reviews-Gastrobar_Werden-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d10183349-Gastrobar_Werden-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
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
      "week_ranges": [
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "4617",
        "name": "Italian"
      },
      {
        "key": "5086",
        "name": "French"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10659",
        "name": "Asian"
      },
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "17416157",
    "name": "Belostok",
    "latitude": "53.682518",
    "longitude": "23.83207",
    "num_reviews": "59",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/74/d9/8d/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/74/d9/8d/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/74/d9/8d/caption.jpg",
          "height": "960"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/74/d9/8d/caption.jpg",
          "height": "412"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/17/74/d9/8d/caption.jpg",
          "height": "188"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-05-09T07:16:54-0400",
      "caption": "Деруны с куриным филе и сырным соусом",
      "id": "393533837",
      "helpful_votes": "0",
      "published_date": "2019-05-09T07:16:54-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.3892669677734375",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "16",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#13 of 113 Restaurants in Grodno",
    "distance": "0.7316917955906009",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$8 - $40",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17416157-Reviews-Belostok-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17416157-Belostok-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 238-93-89",
    "website": "http://www.instagram.com/belastok.grodno/?hl=ru",
    "email": "belastok.grodno@tut.by",
    "address_obj": {
      "street1": "Vilenskaya 2",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Vilenskaya 2, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1500
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1500
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10742",
        "name": "Eastern European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "661665",
    "ad_position": "inline2",
    "ad_size": "8X8",
    "doubleclick_zone": "eu.belarus",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "detail": "0",
    "page_type": "restaurants",
    "mob_ptype": "app_restaurants"
  },
  {
    "location_id": "8719341",
    "name": "Cafe Veranda",
    "latitude": "53.670475",
    "longitude": "23.836637",
    "num_reviews": "88",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/39/d0/e4/caption.jpg",
          "height": "141"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/39/d0/e4/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "2688",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/09/39/d0/e4/caption.jpg",
          "height": "1520"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/09/39/d0/e4/caption.jpg",
          "height": "579"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/39/d0/e4/caption.jpg",
          "height": "311"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2015-10-15T16:20:32-0400",
      "caption": "Стейк из говядины",
      "id": "154783972",
      "helpful_votes": "0",
      "published_date": "2015-10-15T16:20:32-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2019",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2019"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2018",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2018"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.38539719581604",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "17",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#14 of 113 Restaurants in Grodno",
    "distance": "0.766810302147956",
    "distance_string": "0.8 km",
    "bearing": "south",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$3 - $19",
    "description": "Cosy cafe with Neman river view. Young but ambitious Chef providing interesting modern cuisine. Careful and friendly service is our mission.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d8719341-Reviews-Cafe_Veranda-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d8719341-Cafe_Veranda-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 44 555-67-55",
    "website": "http://verandagrodno.by",
    "email": "verandagrodno@gmail.com",
    "address_obj": {
      "street1": "Podol'naya 37",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Podol'naya 37, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1500
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1500
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10648",
        "name": "International"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10671",
        "name": "Fusion"
      },
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      },
      {
        "key": "10697",
        "name": "Vegan Options"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "4777035",
    "name": "Karchma",
    "latitude": "53.68236",
    "longitude": "23.831812",
    "num_reviews": "239",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/06/21/52/e8/karchma.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/06/21/52/e8/karchma.jpg",
          "height": "50"
        },
        "original": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/06/21/52/e8/karchma.jpg",
          "height": "1215"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/06/21/52/e8/karchma.jpg",
          "height": "1215"
        },
        "medium": {
          "width": "379",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/21/52/e8/karchma.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2014-07-05T05:15:01-0400",
      "caption": "Запеченная треска",
      "id": "102847208",
      "helpful_votes": "1",
      "published_date": "2014-07-10T10:02:33-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2016",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2016"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2015",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2015"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.3552403450012207",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "18",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#15 of 113 Restaurants in Grodno",
    "distance": "0.7283179602115325",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "3.5",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d4777035-Reviews-Karchma-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d4777035-Karchma-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 152 74-35-63",
    "website": "http://m.grodno.in/cafe/karchma/",
    "address_obj": {
      "street1": "Sovetskaya 31",
      "street2": "Ozheshko, 1",
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Sovetskaya 31 Ozheshko, 1, Grodno 230023 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10693",
        "name": "Russian"
      },
      {
        "key": "10770",
        "name": "Ukrainian"
      },
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10654",
        "name": "European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "15191456",
    "name": "Greenwich Restaurant&Pub",
    "latitude": "53.68187",
    "longitude": "23.83223",
    "num_reviews": "51",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/b8/e9/92/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/b8/e9/92/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/b8/e9/92/caption.jpg",
          "height": "851"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/b8/e9/92/caption.jpg",
          "height": "681"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/b8/e9/92/caption.jpg",
          "height": "366"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2018-12-14T06:09:02-0500",
      "caption": "Утиная грудка с грушей, ягодным миксом и облепиховым соусом",
      "id": "364439954",
      "helpful_votes": "0",
      "published_date": "2018-12-14T06:09:02-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      }
    ],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.3177475929260254",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "19",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#16 of 113 Restaurants in Grodno",
    "distance": "0.6684800708268176",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$2 - $20",
    "description": "The main features of our institution is a huge selection of beer. Currently, there are 11 sorts of dispensers 30 and beverage options in the \"glass\". Great emphasis on affordable cuisine with unusual serving and hearty portions. Delicious steaks, pork ribs, as well as fish - we cook all this on charcoal.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15191456-Reviews-Greenwich_Restaurant_Pub-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15191456-Greenwich_Restaurant_Pub-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 540-20-30",
    "website": "http://greenwichpub.by/",
    "address_obj": {
      "street1": "Sovetskaya street, 29",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Sovetskaya street, 29, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 900,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 1020,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 900,
            "close_time": 1560
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "9908",
        "name": "American"
      },
      {
        "key": "10345",
        "name": "Steakhouse"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10668",
        "name": "Grill"
      },
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10670",
        "name": "Pub"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "19261374",
    "name": "Dzhezva",
    "latitude": "53.679657",
    "longitude": "23.829985",
    "num_reviews": "36",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/2c/b7/97/photo1jpg.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/2c/b7/97/photo1jpg.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/2c/b7/97/photo1jpg.jpg",
          "height": "1280"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/1a/2c/b7/97/photo1jpg.jpg",
          "height": "550"
        },
        "medium": {
          "width": "450",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/2c/b7/97/photo1jpg.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-11-30T15:51:26-0500",
      "caption": "",
      "id": "439138199",
      "helpful_votes": "1",
      "published_date": "2019-11-30T15:51:26-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.3089373111724854",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "21",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#17 of 113 Restaurants in Grodno",
    "distance": "0.6348408888041371",
    "distance_string": "0.6 km",
    "bearing": "northwest",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$5 - $50",
    "description": "Fresh Roasting, Cezva in the Sand, La Marzocco, Alternative, Wine, Buckwheat Pancakes and New York Bagels, Designer Desserts",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d19261374-Reviews-Dzhezva-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d19261374-Dzhezva-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 784-55-35",
    "website": "https://www.facebook.com/%D0%9A%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F-%D0%94%D0%B6%D0%B5%D0%B7%D0%B2%D0%B0-%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE-113259396713517/",
    "email": "djezvagrodno@tut.by",
    "address_obj": {
      "street1": "Sovetskaya 5",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Sovetskaya 5, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10682",
        "name": "Wine Bar"
      },
      {
        "key": "10642",
        "name": "Cafe"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
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
    "distance": "0.6675601721153032",
    "distance_string": "0.7 km",
    "bearing": "west",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17818969-Reviews-Sprava-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17818969-Sprava-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
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
      "week_ranges": [
        [
          {
            "open_time": 600,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1500
          }
        ],
        [
          {
            "open_time": 600,
            "close_time": 1500
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10642",
        "name": "Cafe"
      },
      {
        "key": "5086",
        "name": "French"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
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
    "distance": "0.662023470538527",
    "distance_string": "0.7 km",
    "bearing": "west",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$3 - $15",
    "description": "Wine, food, friends. Belarusian bar at the historical centre of Grodno. The main concept of SVǍBODA is Belarusian romanticism.We try to break off stereotypes about Belarus and to show that Belarus is ready to be young and romantic, stylish and lively. We represent healthy regionalism. Our cocktlails appeal to iconic authors of Belarusian culture and, especially, of the Neman region.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15037958-Reviews-Bar_Svaboda-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15037958-Bar_Svaboda-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
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
      "week_ranges": [
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1680
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10649",
        "name": "Mediterranean"
      },
      {
        "key": "10654",
        "name": "European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "11776",
        "name": "Bars & Pubs"
      },
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "661665",
    "ad_position": "inline3",
    "ad_size": "8X8",
    "doubleclick_zone": "eu.belarus",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "detail": "0",
    "page_type": "restaurants",
    "mob_ptype": "app_restaurants"
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
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
    "distance": "0.5702435031441153",
    "distance_string": "0.6 km",
    "bearing": "west",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$2 - $95",
    "description": "\"Barashka\" - the first cafe in Grodno where are presented in all variety of a dish of the East. There are more than hundred national dishes: salads and snack (dolma, lobio), soups (kharcho, dyushbara), farinaceous dishes (khachapuri, khinkali, manti, cheburek, samosa), meat dishes (adzhapsandat, odzhakhur, pilaf), sweets, dishes from the tandoor.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15850790-Reviews-Barashka-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15850790-Barashka-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
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
      "week_ranges": [
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1560
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1560
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10742",
        "name": "Eastern European"
      },
      {
        "key": "11741",
        "name": "Caucasian"
      },
      {
        "key": "11742",
        "name": "Georgian"
      },
      {
        "key": "11743",
        "name": "Azerbaijani"
      },
      {
        "key": "10651",
        "name": "Barbecue"
      },
      {
        "key": "10992",
        "name": "Gluten Free Options"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10992",
        "name": "Gluten Free Options"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "23668123",
    "name": "Restaurant Muraviev",
    "latitude": "53.681038",
    "longitude": "23.830132",
    "num_reviews": "7",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1f/cb/c0/1a/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1f/cb/c0/1a/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1f/cb/c0/1a/caption.jpg",
          "height": "958"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1f/cb/c0/1a/caption.jpg",
          "height": "412"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/1f/cb/c0/1a/caption.jpg",
          "height": "187"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2021-10-12T05:26:51-0400",
      "caption": "Атмосферное место с историей, уникальным интерьером, интересной и вкусной кухней!",
      "id": "533446682",
      "helpful_votes": "0",
      "published_date": "2021-10-12T05:26:51-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.23783540725708",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "25",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#21 of 113 Restaurants in Grodno",
    "distance": "0.705544692146458",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d23668123-Reviews-Restaurant_Muraviev-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d23668123-Restaurant_Muraviev-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 44 773-30-87",
    "website": "https://www.instagram.com/muraviev.grodno/?hl=pt",
    "address_obj": {
      "street1": "Sovetskaya Square 2",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Sovetskaya Square 2, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10693",
        "name": "Russian"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
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
    "distance": "0.9883938234264154",
    "distance_string": "1 km",
    "bearing": "west",
    "rating": "4.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d12595014-Reviews-Bakst_Restaurant-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d12595014-Bakst_Restaurant-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
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
    "cuisine": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "19731750",
    "name": "Gastrobar Artefact",
    "latitude": "53.684025",
    "longitude": "23.84536",
    "num_reviews": "17",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/55/41/a9/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/55/41/a9/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/21/55/41/a9/caption.jpg",
          "height": "767"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/21/55/41/a9/caption.jpg",
          "height": "683"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/55/41/a9/caption.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2021-11-04T04:32:35-0400",
      "caption": "Оформление зала создаёт неповторимую атмосферу",
      "id": "559235497",
      "helpful_votes": "0",
      "published_date": "2021-11-04T04:32:35-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.2244362831115723",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "28",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#24 of 113 Restaurants in Grodno",
    "distance": "0.8715249143179615",
    "distance_string": "0.9 km",
    "bearing": "northeast",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$7 - $30",
    "description": "Family restaurant of specialty cuisine, original drinks, enchanting atmosphere, lounge music. Welcome :)",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d19731750-Reviews-Gastrobar_Artefact-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d19731750-Gastrobar_Artefact-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 177-75-28",
    "website": "http://artefact.by/",
    "address_obj": {
      "street1": "Budionnogo, 48",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Budionnogo, 48, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 600,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 600,
            "close_time": 1440
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10679",
        "name": "Healthy"
      },
      {
        "key": "21353",
        "name": "Dining bars"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "18901362",
    "name": "Restobar \"Rozmarin\"",
    "latitude": "53.68056",
    "longitude": "23.830406",
    "num_reviews": "35",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1b/6c/c4/bc/restobara-rozmarin.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1b/6c/c4/bc/restobara-rozmarin.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/6c/c4/bc/restobara-rozmarin.jpg",
          "height": "960"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1b/6c/c4/bc/restobara-rozmarin.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/1b/6c/c4/bc/restobara-rozmarin.jpg",
          "height": "188"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2020-06-18T02:46:52-0400",
      "caption": "Сочные и невероятно вкусные салаты от restobara \"Rozmarin\"",
      "id": "460113084",
      "helpful_votes": "0",
      "published_date": "2020-06-18T02:46:52-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.223667860031128",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "29",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#25 of 113 Restaurants in Grodno",
    "distance": "0.6601073005516056",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$10 - $60",
    "description": "Together with the fragrant mood of our name you will find European cuisine with local cordiality and hospitality. We will be glad to offer you snacks, soups, hot dishes, desserts. As well as author cocktails and specialty teas from our bar Manager.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d18901362-Reviews-Restobar_Rozmarin-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d18901362-Restobar_Rozmarin-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 325-09-16",
    "website": "http://rozmarinbar.ru/",
    "email": "market.nvcompany@mail.ru",
    "address_obj": {
      "street1": "Sovetskaya 10",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": null
    },
    "address": "Sovetskaya 10, Grodno Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 720,
            "close_time": 1440
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "17835494",
    "name": "The Shtab Hookah Bar",
    "latitude": "53.668762",
    "longitude": "23.822268",
    "num_reviews": "8",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/dd/3b/bf/the-shtab.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/dd/3b/bf/the-shtab.jpg",
          "height": "50"
        },
        "original": {
          "width": "1280",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/dd/3b/bf/the-shtab.jpg",
          "height": "960"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/dd/3b/bf/the-shtab.jpg",
          "height": "413"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/dd/3b/bf/the-shtab.jpg",
          "height": "188"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2020-02-11T14:14:18-0500",
      "caption": "The Shtab",
      "id": "450706367",
      "helpful_votes": "0",
      "published_date": "2020-02-11T14:14:18-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.2192282676696777",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "30",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#26 of 113 Restaurants in Grodno",
    "distance": "1.4385863396574796",
    "distance_string": "1.4 km",
    "bearing": "southwest",
    "rating": "5.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$5 - $15",
    "description": "\"THE Shtab Hookah Bar • hookah / bar • classic lounge bar • a large selection of cocktails in the author's presentation • a wide map of Ceylon teas • Italian pizza and snacks • background, atmospheric music",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d17835494-Reviews-The_Shtab_Hookah_Bar-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d17835494-The_Shtab_Hookah_Bar-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 942-49-08",
    "website": "https://vk.com/shtab.grodno",
    "email": "blackhazebar@gmail.com",
    "address_obj": {
      "street1": "1st Trudovaya St., 10",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "1st Trudovaya St., 10, Grodno 230023 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "4316740",
    "name": "Staryy Lyamus",
    "latitude": "53.6863",
    "longitude": "23.835764",
    "num_reviews": "82",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/d3/8c/e0/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/d3/8c/e0/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1536",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/d3/8c/e0/caption.jpg",
          "height": "2048"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/05/d3/8c/e0/caption.jpg",
          "height": "1365"
        },
        "medium": {
          "width": "337",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/d3/8c/e0/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2014-05-07T04:19:48-0400",
      "caption": "Старый Лямус",
      "id": "97750240",
      "helpful_votes": "0",
      "published_date": "2014-05-08T15:36:01-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.2138373851776123",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "31",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#27 of 113 Restaurants in Grodno",
    "distance": "1.0252903022718296",
    "distance_string": "1 km",
    "bearing": "north",
    "rating": "3.5",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d4316740-Reviews-Staryy_Lyamus-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d4316740-Staryy_Lyamus-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 33 377-09-65",
    "website": "http://markiza.by/",
    "email": "markiza_todo@mail.ru",
    "address_obj": {
      "street1": "Dzerzhinskogo St., 1a",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": null
    },
    "address": "Dzerzhinskogo St., 1a, Grodno Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      }
    ],
    "dietary_restrictions": [
      {
        "key": "10665",
        "name": "Vegetarian Friendly"
      }
    ],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "11488962",
    "name": "Cafe-Club Champion",
    "latitude": "53.672638",
    "longitude": "23.840977",
    "num_reviews": "19",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/43/ce/29/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/43/ce/29/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "1000",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/43/ce/29/caption.jpg",
          "height": "667"
        },
        "large": {
          "width": "1000",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/43/ce/29/caption.jpg",
          "height": "667"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/43/ce/29/caption.jpg",
          "height": "367"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2016-10-11T10:29:01-0400",
      "caption": "Салат с говядиной",
      "id": "222547497",
      "helpful_votes": "0",
      "published_date": "2016-10-11T10:29:01-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.2080187797546387",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "32",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#28 of 113 Restaurants in Grodno",
    "distance": "0.5348535507441377",
    "distance_string": "0.5 km",
    "bearing": "south",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$7 - $25",
    "description": "Multi-format with the possibility to eat at affordable prices cafe-club, play games, sing karaoke and relax.",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d11488962-Reviews-Cafe_Club_Champion-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d11488962-Cafe_Club_Champion-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 838-50-99",
    "website": "http://champi.by/",
    "email": "olga_champi@mail.ru",
    "address_obj": {
      "street1": "Antonova 29",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Antonova 29, Grodno 230025 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 960,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 960,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 960,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 960,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 960,
            "close_time": 1680
          }
        ],
        [
          {
            "open_time": 960,
            "close_time": 1800
          }
        ],
        [
          {
            "open_time": 960,
            "close_time": 1800
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "4617",
        "name": "Italian"
      },
      {
        "key": "10654",
        "name": "European"
      },
      {
        "key": "10693",
        "name": "Russian"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
    "distance": "0.6297682967545902",
    "distance_string": "0.6 km",
    "bearing": "west",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$2 - $5",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15238218-Reviews-Wake_Cup_Coffee-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15238218-Wake_Cup_Coffee-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
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
      "week_ranges": [
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 480,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "4617",
        "name": "Italian"
      },
      {
        "key": "9908",
        "name": "American"
      },
      {
        "key": "10693",
        "name": "Russian"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
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
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
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
    "distance": "0.6832507672540035",
    "distance_string": "0.7 km",
    "bearing": "west",
    "rating": "4.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d16717967-Reviews-Prokhodnaya-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d16717967-Prokhodnaya-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
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
      "week_ranges": [
        [
          {
            "open_time": 0,
            "close_time": 180
          },
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 0,
            "close_time": 180
          },
          {
            "open_time": 540,
            "close_time": 1380
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10642",
        "name": "Cafe"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "12691100",
    "name": "Kofeinya v Dome Khona Pika",
    "latitude": "53.680805",
    "longitude": "23.830935",
    "num_reviews": "28",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/10/00/6a/08/getlstd-property-photo.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/10/00/6a/08/getlstd-property-photo.jpg",
          "height": "50"
        },
        "original": {
          "width": "650",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/10/00/6a/08/getlstd-property-photo.jpg",
          "height": "420"
        },
        "large": {
          "width": "650",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/10/00/6a/08/getlstd-property-photo.jpg",
          "height": "420"
        },
        "medium": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/00/6a/08/getlstd-property-photo.jpg",
          "height": "355"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2017-07-24T06:35:00-0400",
      "caption": "getlstd_property_photo",
      "id": "268462600",
      "helpful_votes": "1",
      "published_date": "2017-07-24T06:35:00-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.181255340576172",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "36",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#31 of 113 Restaurants in Grodno",
    "distance": "0.6477083218744544",
    "distance_string": "0.6 km",
    "bearing": "northwest",
    "rating": "4.0",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$$ - $$$",
    "price": "$3 - $10",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d12691100-Reviews-Kofeinya_v_Dome_Khona_Pika-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d12691100-Kofeinya_v_Dome_Khona_Pika-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "address_obj": {
      "street1": "Sovetskaya 17",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Sovetskaya 17, Grodno 230025 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "5086",
        "name": "French"
      },
      {
        "key": "10642",
        "name": "Cafe"
      },
      {
        "key": "10742",
        "name": "Eastern European"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "21142329",
    "name": "Polyana City",
    "latitude": "53.68149",
    "longitude": "23.831701",
    "num_reviews": "6",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/20/9f/b1/city.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/20/9f/b1/city.jpg",
          "height": "50"
        },
        "original": {
          "width": "1008",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/1c/20/9f/b1/city.jpg",
          "height": "754"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/20/9f/b1/city.jpg",
          "height": "411"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/20/9f/b1/city.jpg",
          "height": "187"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2020-10-05T06:17:16-0400",
      "caption": "Поляна City",
      "id": "471900081",
      "helpful_votes": "0",
      "published_date": "2020-10-05T06:17:16-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.180260181427002",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "37",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#32 of 113 Restaurants in Grodno",
    "distance": "0.660649636112677",
    "distance_string": "0.7 km",
    "bearing": "northwest",
    "rating": "5.0",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$3 - $15",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d21142329-Reviews-Polyana_City-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d21142329-Polyana_City-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "sit_down",
        "name": "Sit down"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 152 44-66-70",
    "address_obj": {
      "street1": "Sovetskaya 25",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Sovetskaya 25, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 540,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1440
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1590
          }
        ],
        [
          {
            "open_time": 540,
            "close_time": 1710
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [
      {
        "key": "10646",
        "name": "Fast Food"
      },
      {
        "key": "10640",
        "name": "Bar"
      },
      {
        "key": "10642",
        "name": "Cafe"
      },
      {
        "key": "10670",
        "name": "Pub"
      }
    ],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "9744285",
    "name": "Cafe Shekspir",
    "latitude": "53.685577",
    "longitude": "23.836067",
    "num_reviews": "11",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/15/83/86/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/15/83/86/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "3456",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/15/83/86/caption.jpg",
          "height": "4608"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-p/0f/15/83/86/caption.jpg",
          "height": "733"
        },
        "medium": {
          "width": "338",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/15/83/86/caption.jpg",
          "height": "450"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2017-04-25T10:04:01-0400",
      "caption": "Шекспир",
      "id": "253068166",
      "helpful_votes": "1",
      "published_date": "2017-04-25T10:04:01-0400",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.163191795349121",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "41",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#34 of 113 Restaurants in Grodno",
    "distance": "0.942723247545722",
    "distance_string": "0.9 km",
    "bearing": "north",
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Open Now",
    "is_long_closed": false,
    "price_level": "$",
    "price": "$8,000 - $100,000",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d9744285-Reviews-Cafe_Shekspir-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d9744285-Cafe_Shekspir-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [
      {
        "key": "cafe",
        "name": "Café"
      }
    ],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+375 29 537-55-19",
    "website": "https://vk.com/cafe_shakespeare",
    "email": "luwakass@gmail.com",
    "address_obj": {
      "street1": "Dzerzhinskoho 1",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230023"
    },
    "address": "Dzerzhinskoho 1, Grodno 230023 Belarus",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ],
        [
          {
            "open_time": 660,
            "close_time": 1380
          }
        ]
      ],
      "timezone": "Europe/Minsk"
    },
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  },
  {
    "location_id": "15758817",
    "name": "Provintsiya",
    "latitude": "53.68036",
    "longitude": "23.83175",
    "num_reviews": "8",
    "timezone": "Europe/Minsk",
    "location_string": "Grodno, Grodno Region",
    "photo": {
      "images": {
        "small": {
          "width": "150",
          "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/1b/9d/49/caption.jpg",
          "height": "150"
        },
        "thumbnail": {
          "width": "50",
          "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/1b/9d/49/caption.jpg",
          "height": "50"
        },
        "original": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/1b/9d/49/caption.jpg",
          "height": "411"
        },
        "large": {
          "width": "550",
          "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/1b/9d/49/caption.jpg",
          "height": "411"
        },
        "medium": {
          "width": "250",
          "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/1b/9d/49/caption.jpg",
          "height": "187"
        }
      },
      "is_blessed": true,
      "uploaded_date": "2019-01-15T15:30:29-0500",
      "caption": "Кафе \"Провинция\"",
      "id": "370908489",
      "helpful_votes": "3",
      "published_date": "2019-01-15T15:30:29-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "awards": [],
    "doubleclick_zone": "eu.belarus",
    "preferred_map_engine": "default",
    "raw_ranking": "3.1606242656707764",
    "ranking_geo": "Grodno",
    "ranking_geo_id": "661665",
    "ranking_position": "42",
    "ranking_denominator": "103",
    "ranking_category": "restaurant",
    "ranking": "#35 of 113 Restaurants in Grodno",
    "distance": "0.5748020072454749",
    "distance_string": "0.6 km",
    "bearing": "northwest",
    "rating": "4.5",
    "is_closed": false,
    "is_long_closed": false,
    "price_level": "$",
    "description": "",
    "web_url": "https://www.tripadvisor.com/Restaurant_Review-g661665-d15758817-Reviews-Provintsiya-Grodno_Grodno_Region.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g661665-d15758817-Provintsiya-Grodno_Grodno_Region.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Grodno",
        "abbrv": null,
        "location_id": "661665"
      },
      {
        "subcategory": [
          {
            "key": "region",
            "name": "Region"
          }
        ],
        "name": "Grodno Region",
        "abbrv": null,
        "location_id": "1074265"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "Belarus",
        "abbrv": null,
        "location_id": "294447"
      }
    ],
    "category": {
      "key": "restaurant",
      "name": "Restaurant"
    },
    "subcategory": [],
    "parent_display_name": "Grodno",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "251093",
    "address_obj": {
      "street1": "Kalyuchinskaya 16",
      "street2": null,
      "city": "Grodno",
      "state": null,
      "country": "Belarus",
      "postalcode": "230025"
    },
    "address": "Kalyuchinskaya 16, Grodno 230025 Belarus",
    "is_candidate_for_contact_info_suppression": false,
    "cuisine": [],
    "dietary_restrictions": [],
    "establishment_types": [
      {
        "key": "10591",
        "name": "Restaurants"
      }
    ]
  }
]

export const getWeatherData = async (lan, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: {
        lon: lng,
        lat: lan
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    })

    return data
  } catch (e) {
    console.log(e)
  }
}

export const getWeatherDataSim = (lan, lng) => {
  return {
    "message": "accurate",
    "cod": "200",
    "count": 5,
    "list": [
      {
        "id": 623109,
        "name": "Prigorod Kolozha",
        "coord": {
          "lat": 53.6833,
          "lon": 23.8167
        },
        "main": {
          "temp": 273.69,
          "feels_like": 267.53,
          "temp_min": 273.69,
          "temp_max": 274.12,
          "pressure": 998,
          "humidity": 93
        },
        "dt": 1642666145,
        "wind": {
          "speed": 8,
          "deg": 250
        },
        "sys": {
          "country": "BY"
        },
        "rain": null,
        "snow": null,
        "clouds": {
          "all": 90
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "id": 627904,
        "name": "Hrodna",
        "coord": {
          "lat": 53.6884,
          "lon": 23.8258
        },
        "main": {
          "temp": 273.65,
          "feels_like": 267.47,
          "temp_min": 273.65,
          "temp_max": 274.07,
          "pressure": 998,
          "humidity": 93
        },
        "dt": 1642666144,
        "wind": {
          "speed": 8,
          "deg": 250
        },
        "sys": {
          "country": "BY"
        },
        "rain": null,
        "snow": null,
        "clouds": {
          "all": 90
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "id": 8075472,
        "name": "Koshovniki",
        "coord": {
          "lat": 53.6506,
          "lon": 23.8973
        },
        "main": {
          "temp": 273.73,
          "feels_like": 267.58,
          "temp_min": 273.73,
          "temp_max": 274.16,
          "pressure": 998,
          "humidity": 93
        },
        "dt": 1642666433,
        "wind": {
          "speed": 8,
          "deg": 250
        },
        "sys": {
          "country": "BY"
        },
        "rain": null,
        "snow": null,
        "clouds": {
          "all": 90
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "id": 624265,
        "name": "Obukhovo",
        "coord": {
          "lat": 53.6051,
          "lon": 24.0814
        },
        "main": {
          "temp": 274.13,
          "feels_like": 268.1,
          "temp_min": 273.7,
          "temp_max": 274.13,
          "pressure": 998,
          "humidity": 93
        },
        "dt": 1642665911,
        "wind": {
          "speed": 8,
          "deg": 250
        },
        "sys": {
          "country": "BY"
        },
        "rain": {
          "1h": 0.15
        },
        "snow": null,
        "clouds": {
          "all": 90
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ]
      },
      {
        "id": 766927,
        "name": "Kuźnica",
        "coord": {
          "lat": 53.5109,
          "lon": 23.6495
        },
        "main": {
          "temp": 273.77,
          "feels_like": 267.09,
          "temp_min": 272.54,
          "temp_max": 273.99,
          "pressure": 999,
          "humidity": 71,
          "sea_level": 999,
          "grnd_level": 980
        },
        "dt": 1642666159,
        "wind": {
          "speed": 9.52,
          "deg": 258
        },
        "sys": {
          "country": "PL"
        },
        "rain": null,
        "snow": null,
        "clouds": {
          "all": 100
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ]
      }
    ]
  }
}


