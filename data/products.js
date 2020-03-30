const products = [
  {
    name: "Brown eggs",
    category: "dairy",
    description: "Raw organic brown eggs in a basket",
    image: "0.jpg",
    price: 28.1,
    rating: 4
  }, {
    name: "Sweet fresh stawberry",
    category: "fruit",
    description: "Sweet fresh stawberry on the wooden table",
    image: "1.jpg",
    price: 29.45,
    rating: 4
  }, {
    name: "Asparagus",
    category: "vegetable",
    description: "Asparagus with ham on the wooden table",
    image: "2.jpg",
    price: 18.95,
    rating: 3
  }, {
    name: "Green smoothie",
    category: "dairy",
    description: "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    image: "3.jpg",
    price: 17.68,
    rating: 4
  }, {
    name: "Raw legums",
    category: "vegetable",
    description: "Raw legums on the wooden table",
    image: "4.jpg",
    price: 17.11,
    rating: 2
  }, {
    name: "Baking cake",
    category: "dairy",
    description: "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    image: "5.jpg",
    price: 11.14,
    rating: 4
  }, {
    name: "Pesto with basil",
    category: "vegetable",
    description: "Italian traditional pesto with basil, chesse and oil",
    image: "6.jpg",
    price: 18.19,
    rating: 2
  }, {
    name: "Hazelnut in black ceramic bowl",
    category: "vegetable",
    description: "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    image: "7.jpg",

    price: 27.35,
    rating: 0
  }, {
    name: "Fresh stawberry",
    category: "fruit",
    description: "Sweet fresh stawberry on the wooden table",
    image: "8.jpg",
    price: 28.59,
    rating: 4
  }, {
    name: "Lemon and salt",
    category: "fruit",
    description: "Rosemary, lemon and salt on the table",
    image: "9.jpg",
    price: 15.79,
    rating: 5
  }, {
    name: "Homemade bread",
    category: "bakery",
    description: "Homemade bread",
    image: "10.jpg",
    price: 17.48,
    rating: 3
  }, {
    name: "Legums",
    category: "vegetable",
    description: "Cooked legums on the wooden table",
    image: "11.jpg",
    price: 14.77,
    rating: 0
  }, {
    name: "Fresh tomato",
    category: "vegetable",
    description: "Fresh tomato juice with basil",
    image: "12.jpg",
    price: 16.3,
    rating: 2
  }, {
    name: "Healthy breakfast",
    category: "fruit",
    description: "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    image: "13.jpg",
    price: 13.02,
    rating: 2
  }, {
    name: "Green beans",
    category: "vegetable",
    description: "Raw organic green beans ready to eat",
    image: "14.jpg",
    price: 28.79,
    rating: 1
  }, {
    name: "Baked stuffed portabello mushrooms",
    category: "bakery",
    description: "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    image: "15.jpg",
    price: 20.31,
    rating: 1
  }, {
    name: "Strawberry jelly",
    category: "fruit",
    description: "Homemade organic strawberry jelly in a jar",
    image: "16.jpg",
    price: 14.18,
    rating: 1
  }, {
    name: "Pears juice",
    category: "fruit",
    description: "Fresh pears juice on the wooden table",
    image: "17.jpg",
    price: 19.49,
    rating: 4
  }, {
    name: "Fresh pears",
    category: "fruit",
    description: "Sweet fresh pears on the wooden table",
    image: "18.jpg",
    price: 15.12,
    rating: 5
  }, {
    name: "Caprese salad",
    category: "vegetable",
    description: "Homemade healthy caprese salad with tomato mozzarella and basil",
    image: "19.jpg",
    price: 16.76,
    rating: 5
  }, {
    name: "Oranges",
    category: "fruit",
    description: "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
    image: "20.jpg",
  
    price: 21.48,
    rating: 4
  }, {
    name: "Vegan food",
    category: "vegetable",
    description: "Concept of vegan food",
    image: "21.jpg",
    price: 29.66,
    rating: 4
  }, {
    name: "Breakfast with muesli",
    category: "dairy",
    description: "Concept of healthy breakfast with muesli",
    image: "22.jpg",
    price: 22.7,
    rating: 2
  }, {
    name: "Honey",
    category: "bakery",
    description: "Honey and honeycell on the table",
    image: "23.jpg",
    price: 17.01,
    rating: 2
  }, {
    name: "Breakfast with cottage",
    category: "fruit",
    description: "Healthy breakfast with cottage cheese and strawberry",
    image: "24.jpg",
    price: 14.05,
    rating: 1
  }, {
    name: "Strawberry smoothie",
    category: "fruit",
    description: "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
    image: "25.jpg",
    price: 28.86,
    rating: 2
  }, {
    name: "Strawberry and mint",
    category: "fruit",
    description: "Homemade muesli with strawberry and mint",
    image: "26.jpg",
    price: 26.21,
    rating: 4
  }, {
    name: "Ricotta",
    category: "dairy",
    description: "Ricotta with berry and mint",
    image: "27.jpg",
    price: 27.81,
    rating: 5
  }, {
    name: "Cuban sandwiche",
    category: "bakery",
    description: "Homemade traditional cuban sandwiches with ham pork and cheese",
    image: "28.jpg",
    price: 18.5,
    rating: 4
  }, {
    name: "Granola",
    category: "dairy",
    description: "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
    image: "29.jpg",
    price: 29.97,
    rating: 3
  }, {
    name: "Smoothie with chia seeds",
    category: "fruit",
    description: "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
    image: "30.jpg",
    "height": 600,
    "width": 900,
    price: 25.26,
    rating: 5
  }, {
    name: "Yogurt",
    category: "dairy",
    description: "Homemade yogurt with raspberry and mint",
    image: "31.jpg",
    price: 27.61,
    rating: 4
  }, {
    name: "Sandwich with salad",
    category: "vegetable",
    description: "Vegan sandwich with salad, tomato and radish",
    image: "32.jpg",
    price: 22.48,
    rating: 5
  }, {
    name: "Cherry",
    category: "fruit",
    description: "Cherry with sugar on old table",
    image: "33.jpg",
    price: 14.35,
    rating: 5
  }, {
    name: "Raw asparagus",
    category: "vegetable",
    description: "Raw fresh asparagus salad with cheese and dressing",
    image: "34.jpg",
    "height": 600,
    "width": 400,
    price: 22.97,
    rating: 4
  }, {
    name: "Corn",
    category: "vegetable",
    description: "Grilled corn on the cob with salt and butter",
    image: "35.jpg",
    price: 13.55,
    rating: 2
  }, {
    name: "Vegan",
    category: "vegan",
    description: "Concept of healthy vegan eating",
    image: "36.jpg",
    price: 28.96,
    rating: 5
  }, {
    name: "Fresh blueberries",
    category: "fruit",
    description: "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    image: "37.jpg",
    price: 21.01,
    rating: 4
  }, {
    name: "Smashed avocado",
    category: "fruit",
    description: "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    image: "38.jpg",
    price: 25.88,
    rating: 0
  }, {
    name: "Italian ciabatta",
    category: "bakery",
    description: "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    image: "39.jpg",
    price: 15.18,
    rating: 1
  }, {
    name: "Rustic breakfast",
    category: "dairy",
    description: "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    image: "40.jpg",
    price: 21.32,
    rating: 0
  }, {
    name: "Sliced lemons",
    category: "fruit",
    description: "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    image: "41.jpg",
    price: 27.14,
    rating: 2
  }, {
    name: "Plums",
    category: "fruit",
    description: "Yellow and red sweet plums",
    image: "42.jpg",
    price: 19.18,
    rating: 1
  }, {
    name: "French fries",
    category: "bakery",
    description: "Homemade oven baked french fries with ketchup",
    image: "43.jpg",
    price: 18.32,
    rating: 3
  }, {
    name: "Strawberries",
    category: "fruit",
    description: "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
    image: "44.jpg",
    price: 15.13,
    rating: 3
  }, {
    name: "Ground beef meat burger",
    category: "meat",
    description: "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
    image: "45.jpg",
    price: 11.73,
    rating: 5
  }, {
    name: "Tomatoes",
    category: "fruit",
    description: "Organic tomatoes made with love",
    image: "46.jpg",
    price: 26.03,
    rating: 4
  }, {
    name: "Basil",
    category: "vegetable",
    description: "Concept of vegan food with basil",
    image: "47.jpg",
    price: 15.19,
    rating: 4
  }, {
    name: "Fruits bouquet",
    category: "fruit",
    description: "Abstract citrus fruits bouquet on blue background",
    image: "48.jpg",
    price: 18.18,
    rating: 1
  }, {
    name: "Peaches on branch",
    category: "fruit",
    description: "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    image: "49.jpg",
    price: 25.62,
    rating: 3
  }
]

module.exports = products;