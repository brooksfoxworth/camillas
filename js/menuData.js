/**
 * Menu Data Configuration for Camilla's Café
 * Featuring authentic Brazilian breakfast, pastries, and more
 */
const MenuData = {
  'Cafe da Manha / Breakfast': [
    { id: 'omelete-simples', name: 'Omelete Simples', description: 'A classic omelette garnished with fresh chives, accompanied by a side of arugula and cherry tomato salad.', price: 7.49, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'omelete-completo', name: 'Omelete Completo', description: '3 eggs.', price: 11.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'pao-com-manteiga', name: 'Pao com Manteiga / Bread Roll with Butter', description: 'Golden-brown bread roll spread with a layer of melted butter.', price: 2.50, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pao-na-chapa', name: 'Pao na Chapa / Bread Roll with Butter Toasted', description: 'Toasted bread roll with a golden-brown crust, spread with butter.', price: 2.50, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'misto-quente', name: 'Misto Quente / Ham and Cheese Roll', description: 'A toasted roll filled with melted cheese and ham, with a golden-brown crust.', price: 4.50, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'misto-com-ovo', name: 'Misto com Ovo / Ham, Egg and Cheese Roll', description: 'A toasted roll filled with sliced ham, a fried egg, and melted cheese.', price: 5.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'misto-completo', name: 'Misto Completo / Bacon, Egg, Ham and Cheese Roll', description: 'A toasted roll filled with bacon, egg, ham, and melted cheese.', price: 6.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'toddy-quente', name: 'Toddy Quente', description: 'A rich, dark coffee blend with a smooth finish, served in a tall glass.', price: 3.00, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true }
  ],
  
  'Salgados e Pasteis / Savory Snacks and Fried Pastries': [
    { id: 'pastel-presunto-queijo', name: 'Pastel de Presunto e Queijo / Ham and Cheese', description: 'Crispy fried pastry filled with a savory blend of ham and cheese.', price: 6.50, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pastel-pizza', name: 'Pastel de Pizza', description: 'Ham, cheese, oregano, tomato, and onion.', price: 6.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pastel-frango', name: 'Pastel de Frango / Chicken', description: 'Golden fried pastry filled with savory chicken, a classic choice for a quick snack.', price: 5.20, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pastel-frango-catupiry', name: 'Pastel de Frango com Catupiry / Chicken and Cream Cheese Filling', description: 'Golden fried pastry filled with a savory blend of chicken and cream cheese.', price: 6.49, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pastel-palmito', name: 'Pastel de Palmito / Heart of Palms, Corn, and Cheese', description: 'Crispy fried pastry filled with a mix of heart of palms, corn, and melted cheese.', price: 7.49, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pastel-big', name: 'Pastel Big', description: 'Fried pastry with all main fillings: Cheese, Chicken, Ground Beef, Heart of Palm, Bacon, Ham, Corn, Tomato, and Onion.', price: 13.49, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pastel-doce', name: 'Pastel Doce / Sweet Fried Pastry', description: 'Your choice of sweet fillings.', price: 7.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: false }
  ],
  
  'Pizza': [
    { id: 'pizza-4-queijos', name: 'Pizza 4 Queijos', description: 'Pizza made with Mozzarella, Cheddar, Catupiry, and Fresh Mozzarella.', price: 19.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pizza-frango-catupiry', name: 'Pizza Frango e Catupiry', description: 'Chicken, Catupiry, Mozzarella, and Oregano.', price: 19.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pizza-brasileira', name: 'Pizza Brasileira', description: 'Chicken, Bacon, Smoked Sausage, Hearts of Palm, Ham, Corn, Olives, and Mozzarella.', price: 19.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pizza-pepperoni', name: 'Pizza Pepperoni', description: 'Pepperoni, Mozzarella, Oregano.', price: 19.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pizza-calabresa', name: 'Pizza Calabresa', description: 'Smoked Sausage, Onion, Olive, Oregano, Mozzarella.', price: 19.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'pizza-doce', name: 'Pizza Doce', description: 'Small sweet pizza with options like Nutella, doce de leite (caramelized milk spread), fruits, coconut, cheese, cinnamon, and condensed milk.', price: 19.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false }
  ],
  
  'Porção': [
    { id: 'porcao', name: 'Porção', description: '', price: 0.00, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false }
  ],
  
  'Bebidas / Drinks': [
    { id: 'red-bull', name: 'Red Bull', description: 'A caffeinated beverage with a unique combination of ingredients to provide a revitalizing boost.', price: 4.50, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'gatorade', name: 'Gatorade', description: 'Fruit Punch, Lemon Lime, Orange, Cool Blue, Glacier Cherry, Midnight Ice, Grape.', price: 4.00, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'prime', name: 'Prime', description: 'Energy drinks in red, green, and blue flavors.', price: 4.00, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'starbucks-frappuccino', name: 'Starbucks Mocha Frappuccino', description: 'Made with the signature espresso coffee.', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'yoohoo', name: 'Yoo-Hoo', description: 'A chocolate drink with a rich and smooth texture.', price: 3.50, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'nesquik', name: 'Nesquik', description: 'Creamy chocolate-flavored milk beverage.', price: 3.50, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true }
  ],
  
  'Sobremesas / Dessert': [
    { id: 'mousse-maracuja', name: 'Mousse de Maracuja', description: 'A smooth passion fruit mousse topped with a layer of fresh passion fruit pulp and seeds.', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'curau-milho', name: 'Curau de Milho', description: 'Sweet corn pudding topped with cinnamon, served with a cinnamon stick.', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'pao-de-mel', name: 'Pao de Mel / Honey Bread', description: 'Filled with doce de leite (caramelized milk spread).', price: 4.49, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'trufa-recheada', name: 'Trufa Recheada (CACAU SHOW)', description: 'Rich chocolate truffle filled with a creamy coffee-flavored center, accompanied by whole coffee beans. Options include Petit Gateau, Pistachio, Belgian, Paçoca, and Panettone.', price: 3.00, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false }
  ],
  
  'Acai': [
    { id: 'acai-pequeno', name: 'Acai Pequeno', description: '300ml of Acai.', price: 12.50, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'acai-medio', name: 'Acai Medio', description: 'Acai bowl featuring a medley of blended acai berries, topped with a selection of fresh fruits and a sprinkle of granola.', price: 18.75, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: false },
    { id: 'acai-grande', name: 'Acai Grande', description: 'Acai grande bowl layered with fresh strawberries and a creamy topping, presented in a convenient grab-and-go format.', price: 25.00, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false }
  ]
};
