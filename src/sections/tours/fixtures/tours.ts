import type { Tour } from "../types";

export const TOURS: Tour[] = [
  {
    slug: "city-tour",
    name: "City Tour",
    images: {
      hero: "/images/tours/city-tour/hero.jpg",
      gallery: [
        "/images/tours/city-tour/1.jpg",
        "/images/tours/city-tour/2.jpg",
        "/images/tours/city-tour/3.jpg",
        "/images/tours/city-tour/4.jpg",
      ],
    },
    texts: {
      shortDescription:
        "Put your helmet on and learn more about Saigon, the city that never sleeps",
      hero: {
        title: "City Tour",
        paragraphs: [
          "“Saigon, the city that never sleeps.”",
          "Ready to explore the most lovely and chaotic city like a true local?",
          "We will take you for an hectic adventure you will never forget.",
          "Are you ready to discover the hidden gems of Ho Chi Minh City?",
          "Are you ready to visit temples, try new food, drink unique coffee and roam around beautiful architecture?",
          "Then put your helmet on and hop on our scouter!",
        ],
      },
      itinerary: [
        "We will pick you up at 7AM or 1PM at your hotel or your desired meeting point",
        "Let's start the day with Bun Bo Hue (Beef noodles soup) which is the specialty dish of central Vietnam",
        "Time to explore the heart of the city : Note Dame Cathedrale, the superb post office, Opera House and the famous Nguyen Hue Walking Street",
        "We then continue our ride and explore the Old Building that was built by Americans",
        "Feeling romantic? Let's discover the biggest flower market in Vietnam as well as the Cambodian market",
        "Are you thirsty? No worries, we will drink some refreshing sugarcane juice!",
        "Now we should head to Chinatown and walk inside the oldest Chinese temple that was built 300 years ago",
        "We will show you how to make the typical cotton milk coffee that the local students love",
        "The final part of the trip : The War Museum",
      ],
    },
    prices: {
      adults: 50,
      kids: 50,
    },
    revenues: {
      student: 40,
      company: 25,
      food: 25,
      transport: 10,
    },
  },
  {
    slug: "cu-chi-tunnels",
    name: "Cu Chi Tunnels",
    images: {
      hero: "/images/tours/cu-chi-tunnels/hero.jpg",
      gallery: [
        "/images/tours/cu-chi-tunnels/1.jpg",
        "/images/tours/cu-chi-tunnels/2.jpg",
        "/images/tours/cu-chi-tunnels/3.jpg",
        "/images/tours/cu-chi-tunnels/4.jpg",
        "/images/tours/cu-chi-tunnels/5.jpg",
        "/images/tours/cu-chi-tunnels/6.jpg",
        "/images/tours/cu-chi-tunnels/7.jpg",
        "/images/tours/cu-chi-tunnels/8.jpg",
      ],
    },
    texts: {
      shortDescription:
        "Discover how Vietnamese soldiers lived and fought undergrood during the war",
      hero: {
        title: "Cu Chi Tunnels",
        paragraphs: [
          "“From the tunnels we were able to fight Americans from every angle.”",
          "As unbelievable as it sounds, Vietnam war lasted for more than twenty years.",
          "Americans soldiers went back home.",
          "France was defeated.",
          "All of this because The Viet Cong army decided to use a radically new approach.",
          "They lived. They cooked. They fought.",
          "With a small twist.",
          "Everything happened underground.",
        ],
      },
      itinerary: [
        "We will pick you up at your hotel around 8am",
        "We then drive to Cu Chi Ben Duoc Tunnels for 90 minutes",
        "The guide will be happy to tell you everything about the war, lives of the locals and how tunnels were built",
        "You will be able to admire the scenary as well as the rubber forests which are located near Cambodian’s border",
        "Upon arrival, you will learn the tools and traps that were used by soldiers",
        "Let's explore the weapons factories, field hospitals and command centers that helped whoever lived inside the tunnels to meet their basic needs",
        "Afterwards, you will have a chance to eat a special local dish of cassava and hot tea which were the main food during the war",
        "It's time to test your shooting skills with the AK47 or M16 guns or machine guns at the nearby Shooting Range (not included)",
        "On the way head back to Ho Chi Minh City, you will enjoy a popular drink in Vietnam to help you refresh after rolling around in the tunnels",
      ],
    },
    prices: {
      adults: 29.99,
      kids: 21.99,
    },
    revenues: {
      student: 30,
      company: 20,
      food: 20,
      transport: 30,
    },
  },
  {
    slug: "mekong-delta",
    name: "Mekong delta",
    images: {
      hero: "/images/tours/mekong-delta/hero.jpg",
      gallery: [
        "/images/tours/mekong-delta/1.jpg",
        "/images/tours/mekong-delta/2.jpg",
        "/images/tours/mekong-delta/3.jpg",
        "/images/tours/mekong-delta/4.jpg",
        "/images/tours/mekong-delta/5.jpg",
        "/images/tours/mekong-delta/6.jpg",
        "/images/tours/mekong-delta/7.jpg",
        "/images/tours/mekong-delta/8.jpg",
      ],
    },
    texts: {
      shortDescription:
        "Hop on a boat to explore a vast maze of islands, villages and floatings markets",
      hero: {
        title: "Mekong Delta",
        paragraphs: [
          "“We travel not to escape life we travel to see how spectacular the earth is.”",
          "You are about to get a glimpse of an ummatched 5000 kilometers of raw nature.",
          "One of the longest river on Earth. Spanning across China, Myanmar, Thailand, Lao, Cambodia as well as Vietnam",
          "Discover a memorable place surrounded by rice fields, floating markets",
          "Immerse yourself into what has been the center of Asian agriculture for the past 1500 years.",
        ],
      },
      itinerary: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur at tempor mauris nulla blandit feugiat.",
        "Lorem ipsum dolor sit amet consectetur at tempor mauris nulla.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
    prices: {
      adults: 35.99,
      kids: 26.99,
    },
    revenues: {
      student: 30,
      company: 20,
      food: 20,
      transport: 30,
    },
  },
  {
    slug: "food-tour",
    name: "Food tour",
    images: {
      hero: "/images/tours/food-tour/hero.jpg",
      gallery: [
        "/images/tours/food-tour/1.jpg",
        "/images/tours/food-tour/2.jpg",
        "/images/tours/food-tour/3.jpg",
        "/images/tours/food-tour/4.jpg",
      ],
    },
    texts: {
      shortDescription:
        "Wander with us in the small streets and experience the Vietnamese cuisine : a surprising mix between Asian and European style",
      hero: {
        title: "Food Tour",
        paragraphs: [
          "“Vietnam. It grabs you and doesn't let you go. Once you love it, you love it forever.”",
          "These are the words of Anthony Bourdin, a famous chef who fall in love with Vietnam and its rich cuisine.",
          "Because of colonization, Vietnam adopted a unique mix between Asian and French cuisine that you can't find elsewhere.",
          "Join us to walk around the small alley, sit down for some street food, experience Phô and try Bánh mì",
          "By the way, you REALLY need to try egg coffee.",
        ],
      },
      itinerary: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur at tempor mauris nulla blandit feugiat.",
        "Lorem ipsum dolor sit amet consectetur at tempor mauris nulla.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
    prices: {
      adults: 55,
      kids: 55,
    },
    revenues: {
      student: 40,
      company: 25,
      food: 30,
      transport: 5,
    },
  },
  {
    slug: "mekong-cu-chi",
    name: "Mekong Delta + Cu Chi Tunnels",
    images: {
      hero: "/images/tours/two-tours/hero.jpg",
      gallery: [
        "/images/tours/cu-chi-tunnels/1.jpg",
        "/images/tours/mekong-delta/3.jpg",
        "/images/tours/cu-chi-tunnels/2.jpg",
        "/images/tours/mekong-delta/1.jpg",
        "/images/tours/cu-chi-tunnels/3.jpg",
        "/images/tours/mekong-delta/6.jpg",
        "/images/tours/mekong-delta/8.jpg",
      ],
    },
    texts: {
      shortDescription: "For the most adventurous",
      hero: {
        title: "Mekong delta and Cu Chi tunnels",
        paragraphs: [
          "“It’s bad manners to keep an adventure waiting.”",
          "The most adventurous tour we have.",
          "You will explore the brutality of war and the delicacy of nature.",
          "Definitely not for the faint of heart.",
        ],
      },
      itinerary: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur at tempor mauris nulla blandit feugiat.",
        "Lorem ipsum dolor sit amet consectetur at tempor mauris nulla.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
    prices: {
      adults: 29.99,
      kids: 29.99,
    },
    revenues: {
      student: 40,
      company: 20,
      food: 10,
      transport: 30,
    },
  },
];
