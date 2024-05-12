const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();
const path = require("path");


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


let products = [
  [
    {
      "id": 1,
      "category": "science",
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "/fairy-tales.jpg",
      "language": "Danish",
      "rating": 3.5,
      "pages": 784,
      "title": "Fairy tales",
      "price": 45,
      "year": 1836
    },
    {
      "id": 2,
      "category": "science",
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "/the-divine-comedy.jpg",
      "language": "Italian",
      "rating": 4.5,
      "pages": 928,
      "title": "The Divine Comedy",
      "price": 14,
      "year": 1315
    },
    {
      "id": 3,
      "category": "science",
      "author": "Sumer",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "rating": 4.6,
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "price": 42,
      "year": -1700
    },
    {
      "id": 4,
      "category": "science",
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "/the-book-of-job.jpg",
      "language": "Hebrew",
      "rating": 4.1,
      "pages": 176,
      "title": "The Book Of Job",
      "price": 144,
      "year": -600
    },
    {
      "id": 5,
      "category": "science",
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "rating": 4.3,
      "pages": 288,
      "title": "One Thousand and One Nights",
      "price": 24,
      "year": 1200
    },
    {
      "id": 6,
      "category": "science",
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "/njals-saga.jpg",
      "language": "Old Norse",
      "rating": 4.4,
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "price": 64,
      "year": 1350
    },
    {
      "id": 7,
      "category": "science",
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "/pride-and-prejudice.jpg",
      "language": "English",
      "rating": 3.2,
      "pages": 226,
      "title": "Pride and Prejudice",
      "price": 32,
      "year": 1813
    },
    {
      "id": 8,
      "category": "science",
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "/le-pere-goriot.jpg",
      "language": "French",
      "rating": 3.5,
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "price": 12,
      "year": 1835
    },
    {
      "id": 9,
      "category": "science",
      "author": "Lu Xun",
      "country": "China",
      "imageLink": "/diary-of-a-madman.jpg",
      "language": "Chinese",
      "rating": 4.3,
      "pages": 389,
      "title": "Diary of a Madman",
      "price": 13.5,
      "year": 1918
    },
    {
      "id": 10,
      "category": "science",
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "imageLink": "/children-of-gebelawi.jpg",
      "language": "Arabic",
      "rating": 4.9,
      "pages": 355,
      "title": "Children of Gebelawi",
      "price": 44,
      "year": 1959
    },



    {
      "id": 11,
      "category": "fantasy",
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "/buddenbrooks.jpg",
      "language": "German",
      "rating": 3.8,
      "pages": 736,
      "title": "Buddenbrooks",
      "price": 23.3,
      "year": 1901
    },
    {
      "id": 12,
      "category": "fantasy",
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "/the-magic-mountain.jpg",
      "language": "German",
      "rating": 3.9,
      "pages": 720,
      "title": "The Magic Mountain",
      "price": 22.5,
      "year": 1924
    },
    {
      "id": 13,
      "category": "fantasy",
      "author": "Herman Melville",
      "country": "United States",
      "imageLink": "/moby-dick.jpg",
      "language": "English",
      "rating": 3.7,
      "pages": 378,
      "title": "Moby Dick",
      "price": 53.8,
      "year": 1851
    },
    {
      "id": 14,
      "category": "fantasy",
      "author": "Michel de Montaigne",
      "country": "France",
      "imageLink": "/essais.jpg",
      "language": "French",
      "rating": 3.3,
      "pages": 404,
      "title": "Essays",
      "price": 65.1,
      "year": 1595
    },
    {
      "id": 15,
      "category": "fantasy",
      "author": "Elsa Morante",
      "country": "Italy",
      "imageLink": "/history.jpg",
      "language": "Italian",
      "rating": 2.4,
      "pages": 600,
      "title": "History",
      "price": 62.1,
      "year": 1974
    },
    {
      "id": 16,
      "category": "fantasy",
      "author": "Toni Morrison",
      "country": "United States",
      "imageLink": "/beloved.jpg",
      "language": "English",
      "rating": 4.5,
      "pages": 321,
      "title": "Beloved",
      "price": 34.12,
      "year": 1987
    },
    {
      "id": 17,
      "category": "fantasy",
      "author": "Murasaki Shikibu",
      "country": "Japan",
      "imageLink": "/the-tale-of-genji.jpg",
      "language": "Japanese",
      "rating": 3.4,
      "pages": 1360,
      "title": "The Tale of Genji",
      "price": 45.12,
      "year": 1006
    },
    {
      "id": 18,
      "category": "fantasy",
      "author": "Robert Musil",
      "country": "Austria",
      "imageLink": "/the-man-without-qualities.jpg",
      "language": "German",
      "rating": 4.4,
      "pages": 365,
      "title": "The Man Without Qualities",
      "price": 23.22,
      "year": 1931
    },
    {
      "id": 19,
      "category": "fantasy",
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "imageLink": "/lolita.jpg",
      "language": "English",
      "rating": 4.5,
      "pages": 317,
      "title": "Lolita",
      "price": 42.42,
      "year": 1955
    },
    {
      "id": 20,
      "category": "fantasy",
      "author": "George Orwell",
      "country": "United Kingdom",
      "imageLink": "/nineteen-eighty-four.jpg",
      "language": "English",
      "rating": 4.6,
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "price": 44,
      "year": 1949
    },



    {
      "id": 21,
      "category": "mystery",
      "author": "Ovid",
      "country": "Roman Empire",
      "imageLink": "/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "rating": 5.0,
      "pages": 576,
      "title": "Metamorphoses",
      "price": 45.10,
      "year": 100
    },
    {
      "id": 22,
      "category": "mystery",
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "imageLink": "/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "rating": 4.0,
      "pages": 272,
      "title": "The Book of Disquiet",
      "price": 10.40,
      "year": 1928
    },
    {
      "id": 23,
      "category": "mystery",
      "author": "Edgar Allan Poe",
      "country": "United States",
      "imageLink": "/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "rating": 4.1,
      "pages": 842,
      "title": "Tales",
      "price": 20.30,
      "year": 1950
    },
    {
      "id": 24,
      "category": "mystery",
      "author": "Marcel Proust",
      "country": "France",
      "imageLink": "/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "rating": 3.9,
      "pages": 2408,
      "title": "In Search of Lost Time",
      "price": 30.40,
      "year": 1920
    },
    {
      "id": 25,
      "category": "mystery",
      "author": "Fran\u00e7ois Rabelais",
      "country": "France",
      "imageLink": "/gargantua-and-pantagruel.jpg",
      "language": "French",
      "rating": 3.8,
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "price": 40.50,
      "year": 1533
    },
    {
      "id": 26,
      "category": "mystery",
      "author": "Juan Rulfo",
      "country": "Mexico",
      "imageLink": "/pedro-paramo.jpg",
      "language": "Spanish",
      "rating": 3.9,
      "pages": 124,
      "title": "Pedro P\u00e1ramo",
      "price": 50.60,
      "year": 1955
    },
    {
      "id": 27,
      "category": "mystery",
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "imageLink": "/the-masnavi.jpg",
      "language": "Persian",
      "rating": 3.6,
      "pages": 438,
      "title": "The Masnavi",
      "price": 60.70,
      "year": 1236
    },
    {
      "id": 28,
      "category": "mystery",
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "imageLink": "/midnights-children.jpg",
      "language": "English",
      "rating": 3.5,
      "pages": 536,
      "title": "Midnight's Children",
      "price": 70.80,
      "year": 1981
    },
    {
      "id": 29,
      "category": "mystery",
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "imageLink": "/bostan.jpg",
      "language": "Persian",
      "rating": 3.5,
      "pages": 298,
      "title": "Bostan",
      "price": 80.90,
      "year": 1257
    },
    {
      "id": 30,
      "category": "mystery",
      "author": "Tayeb Salih",
      "country": "Sudan",
      "imageLink": "/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "rating": 3.4,
      "pages": 139,
      "title": "Season of Migration to the North",
      "price": 90.10,
      "year": 1966
    },


    {
      "id": 31,
      "category": "thriller",
      "author": "Jos\u00e9 Saramago",
      "country": "Portugal",
      "imageLink": "/blindness.jpg",
      "language": "Portuguese",
      "rating": 4.2,
      "pages": 352,
      "title": "Blindness",
      "price": 10.90,
      "year": 1995
    },
    {
      "id": 32,
      "category": "thriller",
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "/hamlet.jpg",
      "language": "English",
      "rating": 4.3,
      "pages": 432,
      "title": "Hamlet",
      "price": 20.80,
      "year": 1603
    },
    {
      "id": 33,
      "category": "thriller",
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "/king-lear.jpg",
      "language": "English",
      "rating": 4.5,
      "pages": 384,
      "title": "King Lear",
      "price": 30.70,
      "year": 1608
    },
    {
      "id": 34,
      "category": "thriller",
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "/othello.jpg",
      "language": "English",
      "rating": 4.6,
      "pages": 314,
      "title": "Othello",
      "price": 40.60,
      "year": 1609
    },
    {
      "id": 35,
      "category": "thriller",
      "author": "Sophocles",
      "country": "Greece",
      "imageLink": "/oedipus-the-king.jpg",
      "language": "Greek",
      "rating": 4.7,
      "pages": 88,
      "title": "Oedipus the King",
      "price": 50.50,
      "year": -430
    },
    {
      "id": 36,
      "category": "thriller",
      "author": "Stendhal",
      "country": "France",
      "imageLink": "/le-rouge-et-le-noir.jpg",
      "language": "French",
      "rating": 4.8,
      "pages": 576,
      "title": "The Red and the Black",
      "price": 60.40,
      "year": 1830
    },
    {
      "id": 37,
      "category": "thriller",
      "author": "Laurence Sterne",
      "country": "England",
      "imageLink": "/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "rating": 4.9,
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "price": 70.30,
      "year": 1760
    },
    {
      "id": 38,
      "category": "thriller",
      "author": "Italo Svevo",
      "country": "Italy",
      "imageLink": "/confessions-of-zeno.jpg",
      "language": "Italian",
      "rating": 4.0,
      "pages": 412,
      "title": "Confessions of Zeno",
      "price": 80.20,
      "year": 1923
    },
    {
      "id": 39,
      "category": "thriller",
      "author": "Jonathan Swift",
      "country": "Ireland",
      "imageLink": "/gullivers-travels.jpg",
      "language": "English",
      "rating": 3.5,
      "pages": 178,
      "title": "Gulliver's Travels",
      "price": 90.20,
      "year": 1726
    },
    {
      "id": 40,
      "category": "thriller",
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "/war-and-peace.jpg",
      "language": "Russian",
      "rating": 4.1,
      "pages": 1296,
      "title": "War and Peace",
      "price": 100.42,
      "year": 1867
    },



    {
      "id": 41,
      "category": "romance",
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "/anna-karenina.jpg",
      "language": "Russian",
      "rating": 3.6,
      "pages": 864,
      "title": "Anna Karenina",
      "price": 22.11,
      "year": 1877
    },
    {
      "id": 42,
      "category": "romance",
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "rating": 3.7,
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "price": 44.22,
      "year": 1886
    },
    {
      "id": 43,
      "category": "romance",
      "author": "Mark Twain",
      "country": "United States",
      "imageLink": "/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "rating": 3.9,
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "price": 12.42,
      "year": 1884
    },
    {
      "id": 44,
      "category": "romance",
      "author": "Valmiki",
      "country": "India",
      "imageLink": "/ramayana.jpg",
      "language": "Sanskrit",
      "rating": 5.0,
      "pages": 152,
      "title": "Ramayana",
      "price": 82.12,
      "year": -450
    },
    {
      "id": 45,
      "category": "romance",
      "author": "Virgil",
      "country": "Roman Empire",
      "imageLink": "/the-aeneid.jpg",
      "language": "Classical Latin",
      "rating": 5.0,
      "pages": 442,
      "title": "The Aeneid",
      "price": 42.82,
      "year": -23
    },
    {
      "id": 46,
      "category": "romance",
      "author": "Vyasa",
      "country": "India",
      "imageLink": "/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "rating": 4.7,
      "pages": 276,
      "title": "Mahabharata",
      "price": 44.66,
      "year": -700
    },
    {
      "id": 47,
      "category": "romance",
      "author": "Walt Whitman",
      "country": "United States",
      "imageLink": "/leaves-of-grass.jpg",
      "language": "English",
      "rating": 4.9,
      "pages": 152,
      "title": "Leaves of Grass",
      "price": 55.20,
      "year": 1855
    },
    {
      "id": 48,
      "category": "romance",
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "/mrs-dalloway.jpg",
      "language": "English",
      "rating": 3.1,
      "pages": 216,
      "title": "Mrs Dalloway",
      "price": 10.40,
      "year": 1925
    },
    {
      "id": 49,
      "category": "romance",
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "/to-the-lighthouse.jpg",
      "language": "English",
      "rating": 3.4,
      "pages": 209,
      "title": "To the Lighthouse",
      "price": 20.30,
      "year": 1927
    },
    {
      "id": 50,
      "category": "romance",
      "author": "Marguerite Yourcenar",
      "country": "France/Belgium",
      "imageLink": "/memoirs-of-hadrian.jpg",
      "language": "French",
      "rating": 4.5,
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "price": 90.40,
      "year": 1951
    }
  ]
];

let myBag = [];

let orders = [];

// let i = 1;
// products  = products .map((item) => {
//   let obj = { ...item, id: i++ };
//   return obj;
// });

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/my-bag", (req, res) => {
  res.json(myBag);
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/add-mybag", (req, res) => {
  let obj = req.body;
  myBag.push(obj);
  res.send(`Element with ${obj.name} was added to bag`);
});

// app.post("/add-orders", (req, res) => {
//   let obj = req.body;
//   orders.push(obj);
//   res.send(`Orders of ${obj.email} was added orders`);
// });

app.post("/add-orders", (req, res) => {
  let obj = req.body;
  orders.push(obj);
  res.json(orders);
});

app.delete("/delete-mybag/:id", (req, res) => {
  let id = parseInt(req.params.id);
  myBag = myBag.filter((item) => id !== item.id);
  res.send(
    `Element with ${myBag.find((item) => id === item.id).name
    } was deleted from bag`
  );
});

app.delete("/delete-admin/:id", (req, res) => {
  console.log('DELETE request received:', req.url);
  try {
    let id = parseInt(req.params.id);
    products = products.filter((item) => id !== item.id);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/add-admin", (req, res) => {
  let obj = req.body;
  obj.image = products[4].image;
  products.push(obj);
  res.send(`Element with ${obj.name} was added to products `);
});

app.put("/change-admin/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = products.findIndex((item) => id === item.id);
  products[index] = { ...req.body, image: products[index].image };
  res.send(`Element ${req.body.name} was changed`);
});

app.get("/search-products /:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  let filteredArray = products.filter((item) =>
    item.name.startsWith(searchValue)
  );
  res.json(filteredArray);
});

app.get("/search-admin/:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  let filteredArray = products.filter((item) =>
    item.name.startsWith(searchValue)
  );
  res.json(filteredArray);
});

app.listen(HOST, () => {
  console.log(HOST + " OK");
});