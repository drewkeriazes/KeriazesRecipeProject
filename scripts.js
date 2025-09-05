// Dataset of recipes for the breakfast section of the cookbook.
// Each recipe contains a name, image path relative to the images folder,
// a list of ingredients, and step‑by‑step instructions.

const recipes = [
  {
    name: "Breakfast Casserole I",
    image: "images/breakfast_casserole_1.jpg",
    ingredients: [
      "2 lbs bulk sausage, browned and drained",
      "1 can cream of mushroom soup",
      "1/4 cup water",
      "8 eggs",
      "3 teaspoons dry mustard",
      "2 1/2 cups milk",
      "6–7 slices bread, crusts removed and cubed",
      "1 lb cheddar cheese, grated",
      "1 lb sliced mushrooms, sautéed",
    ],
    instructions:
      "Combine soup and water. In another bowl beat eggs with mustard and milk. Grease a 9×13 pan. Alternate two layers of bread cubes, sausage, cheese, and mushrooms. Pour egg mixture over layers. Cover and refrigerate overnight. Bake uncovered at 350°F for 50–60 minutes until set.",
  },
  {
    name: "Breakfast Casserole II",
    image: "images/breakfast_casserole_2.jpg",
    ingredients: [
      "1 lb sausage, browned and drained",
      "1 package crescent rolls",
      "1 cup cheddar cheese, grated",
      "5 eggs",
      "1/4 cup milk",
      "Oregano, salt and pepper to taste",
    ],
    instructions:
      "Press crescent roll dough evenly into the bottom of a greased 9×13 pan. Sprinkle the browned sausage over the dough, then top with grated cheese. In a bowl beat eggs with milk and seasonings. Pour mixture evenly over the sausage and cheese. Bake at 400°F for about 20 minutes or until the crust is golden and the eggs are set. Let rest a few minutes before cutting and serving.",
  },
  {
    name: "Pumpkin Spice Waffles",
    image: "images/pumpkin_spice_waffles.jpg",
    ingredients: [
      "1 cup canned pumpkin",
      "4 eggs",
      "1/3 cup light brown sugar",
      "2 1/2 cups flour",
      "1/4 teaspoon ground cloves",
      "1/2 teaspoon ground ginger",
      "2 teaspoons ground cinnamon",
      "1 cup milk",
      "6 tablespoons butter, melted",
      "1 teaspoon baking soda",
      "2 1/4 teaspoons baking powder",
      "1 cup buttermilk (or milk with 1 teaspoon lemon juice)",
    ],
    instructions:
      "Whisk eggs, milk, buttermilk, pumpkin and melted butter together in a large bowl. In another bowl sift together flour, brown sugar, baking powder, baking soda, salt, cinnamon, ginger and cloves. Stir the dry ingredients into the pumpkin mixture until just combined. Preheat and lightly grease a waffle iron. Cook waffles according to the manufacturer’s instructions until golden and crisp. Serve warm with pecans and maple syrup.",
  },
  {
    name: "Potato, Bacon & Egg Breakfast Casserole",
    image: "images/potato_bacon_egg_casserole.jpg",
    ingredients: [
      "10 slices bacon, cooked and crumbled",
      "2 Yukon Gold potatoes, finely diced",
      "8 eggs",
      "Approximately 1/3 cup milk",
      "Salt and freshly ground pepper",
    ],
    instructions:
      "Preheat oven to 350°F. In a bowl whisk eggs with milk and season with salt and pepper. Stir in the finely diced potatoes and half of the crumbled bacon. Pour the mixture into a greased 9-inch pie pan. Sprinkle the remaining bacon over the top. Bake for 20–25 minutes or until the eggs are set and the potatoes are tender. Let cool slightly before serving.",
  },
  {
    name: "French Toast Bake",
    image: "images/french_toast_bake.jpg",
    ingredients: [
      "8 eggs",
      "1/2 cup brown sugar",
      "1 teaspoon cinnamon",
      "1/2 cup flour",
      "1/4 teaspoon salt",
      "3/4 cup granulated sugar",
      "2 tablespoons vanilla extract",
      "1 loaf sourdough bread, cubed",
      "1/2 cup butter",
      "1/2 cup heavy cream",
      "2 cups milk",
    ],
    instructions:
      "Grease a 9×13 pan and fill it with bread cubes. In a large bowl whisk together eggs, milk, heavy cream, granulated sugar and vanilla until smooth. Pour the mixture over the bread, pressing gently to ensure all pieces are soaked. Cover and refrigerate overnight. In a separate bowl combine flour, brown sugar, cinnamon and salt. Cut in butter until the mixture is crumbly; refrigerate until morning. When ready to bake, sprinkle the crumb topping evenly over the soaked bread. Bake at 350°F for 45 minutes or until the top is golden and the center is set. Let stand for 5 minutes before serving.",
  },
  {
    name: "Scones",
    image: "images/scones.jpg",
    ingredients: [
      "1 3/4 cups flour",
      "1/4 cup sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "4 tablespoons butter, cut into pieces",
      "1/3 cup craisins (or raisins)",
      "1/2 cup whole milk",
      "1 large egg",
      "2 tablespoons lemon zest",
    ],
    instructions:
      "Preheat oven to 425°F. In a medium bowl whisk together flour, sugar, baking powder and salt. Cut in the butter using a pastry blender or your fingers until the mixture resembles coarse crumbs. Stir in the craisins and lemon zest. In another bowl whisk together the milk and egg, reserving a tablespoon to brush on the tops. Add the wet ingredients to the dry and stir just until a soft dough forms. Turn out onto a lightly floured surface, knead gently 2–3 times, and pat into a 1-inch thick circle. Cut into wedges or rounds and place on a baking sheet. Brush with the reserved egg wash. Bake 12–14 minutes until golden. Cool briefly before serving.",
  },
  {
    name: "Sour Cream Coffee Cake",
    image: "images/sour_cream_coffee_cake.jpg",
    ingredients: [
      "Cinnamon Topping: 1/2 cup sugar, 1/2 cup flour, 1 teaspoon cinnamon, 6 tablespoons melted butter",
      "Brown Sugar Filling: 1 cup packed light brown sugar, 1 1/2 teaspoons cinnamon, 1/4 teaspoon nutmeg, 1 cup chocolate chips",
      "Cake: 1 1/2 sticks butter (softened)",
      "1 1/2 cups sugar",
      "1/3 cup packed light brown sugar",
      "2 teaspoons vanilla",
      "3 large eggs",
      "3 3/4 cups flour",
      "2 1/2 teaspoons baking powder",
      "3/4 teaspoon salt",
      "3/4 cup sour cream (or Greek yogurt)",
      "1/2 cup milk",
    ],
    instructions:
      "Preheat oven to 350°F. Grease and flour a tube or Bundt pan. For the cinnamon topping, mix sugar, flour and cinnamon; stir in melted butter until crumbly and set aside. For the brown sugar filling, combine brown sugar, cinnamon, nutmeg and chocolate chips in a bowl and set aside. In a large bowl cream the softened butter with the granulated and brown sugars until light and fluffy. Beat in vanilla and eggs one at a time. In another bowl whisk together flour, baking powder and salt. In a third bowl stir the sour cream with the milk. Add the dry ingredients to the butter mixture alternately with the sour cream mixture, beginning and ending with the dry ingredients, mixing just until combined. Spread half of the batter in the prepared pan. Sprinkle with half of the cinnamon topping and half of the brown sugar filling. Dollop the remaining batter over top and gently spread. Sprinkle with remaining toppings and gently swirl with a knife. Bake 50–55 minutes or until a toothpick inserted in the center comes out clean. Cool in the pan 10 minutes, then invert onto a rack and again onto a serving plate so the topping side is up.",
  },
];

/**
 * Render the list of recipes to the page. Each recipe card includes
 * a picture, the name, ingredients and instructions. Cards are
 * displayed in a responsive grid.
 */
function renderRecipes() {
  const container = document.getElementById("recipes");
  if (!container) return;
  recipes.forEach((recipe) => {
    // Create card element
    const card = document.createElement("div");
    card.className =
      "recipe-card bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200";

    // Recipe name
    const title = document.createElement("h2");
    title.className = "text-xl font-bold mb-2 text-gray-800";
    title.textContent = recipe.name;
    card.appendChild(title);

    // Image
    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = `${recipe.name} image`;
    card.appendChild(img);

    // Ingredients heading
    const ingHeading = document.createElement("h3");
    ingHeading.className = "font-semibold mt-3 text-gray-700";
    ingHeading.textContent = "Ingredients";
    card.appendChild(ingHeading);

    // Ingredient list
    const ul = document.createElement("ul");
    ul.className = "list-disc list-inside ml-4 text-gray-700";
    recipe.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    card.appendChild(ul);

    // Instructions heading
    const insHeading = document.createElement("h3");
    insHeading.className = "font-semibold mt-3 text-gray-700";
    insHeading.textContent = "Instructions";
    card.appendChild(insHeading);

    // Instructions paragraph
    const insPara = document.createElement("p");
    insPara.className = "mt-1 text-gray-700 whitespace-pre-line";
    insPara.textContent = recipe.instructions;
    card.appendChild(insPara);

    // Append card to container
    container.appendChild(card);
  });
}

// Render recipes when DOM is ready
document.addEventListener("DOMContentLoaded", renderRecipes);