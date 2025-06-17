
        // Sample ingredients for autocomplete
        const ingredients = [
            "Chicken", "Beef", "Pork", "Fish", "Shrimp", "Eggs", "Milk", "Cheese", 
            "Butter", "Yogurt", "Flour", "Sugar", "Rice", "Pasta", "Bread", "Potatoes", 
            "Tomatoes", "Onions", "Garlic", "Carrots", "Broccoli", "Spinach", "Mushrooms", 
            "Bell Peppers", "Avocado", "Lemon", "Apple", "Banana", "Strawberries", 
            "Olive Oil", "Soy Sauce", "Vinegar", "Salt", "Pepper", "Basil", "Oregano", "Cilantro",
            "Parsley", "Thyme", "Rosemary", "Chili Powder", "Cumin", "Paprika", "Ginger",
            "Turmeric", "Cinnamon", "Nutmeg", "Vanilla Extract", "Honey", "Maple Syrup", "Peanut Butter", 
            "Almonds", "Walnuts", "Cashews", "Pistachios", "Chickpeas", "Lentils", "Black Beans", "Kidney Beans", 
            "Quinoa", "Couscous", "Oats", "Granola", "Chocolate Chips", "Coconut", "Pineapple", "Mango", "Peaches",
             "Blueberries", "Raspberries", "Blackberries", "Kiwi", "Oranges", "Grapes", "Watermelon", "Cucumber", "Zucchini", "Eggplant", "Cauliflower",
            "Cabbage", "Lettuce", "Kale", "Arugula", "Radishes", "Beets", "Sweet Potatoes", "Butternut Squash",
            "Pumpkin", "Bell Pepper", "Green Beans", "Asparagus", "Brussels Sprouts", "Artichokes", "Leeks", "Celery", "Peas", "Corn",
            "Bacon", "Sausage", "Ham", "Salami", "Pepperoni", "Tuna", "Salmon", "Cod", "Tilapia", "Trout",
            "Clams", "Mussels", "Oysters", "Scallops", "Crab", "Lobster", "Octopus", "Squid", "Tofu",
            "Tempeh", "Seitan", "Jackfruit", "Nuts", "Seeds", "Chia Seeds", "Flaxseeds", "Sunflower Seeds", "Pumpkin Seeds",
            "Sesame Seeds", "Hemp Seeds", "Nut Butters", "Tahini", "Hummus", "Guacamole", "Salsa", "Pesto", "Marinara Sauce", "Alfredo Sauce", 
            "Soy Milk", "Almond Milk", "Coconut Milk", "Oat Milk", "Cashew Milk", "Rice Milk", "Coconut Cream", "Heavy Cream", "Sour Cream", "Cream Cheese",
            "Greek Yogurt", "Ice Cream", "Frozen Yogurt", "Gelato", "Sorbet", "Popsicles", "Fruit Juice", "Smoothies", "Herbal Tea", "Coffee", 
            "Green Tea", "Black Tea", "Matcha", "Chai Tea", "Lemonade", "Iced Tea", "Sparkling Water", "Coconut Water", "Almond Milk", "Cashew Milk", "Rice Milk", "Oat Milk", "Soy Milk", "Coconut Milk", "Nut Milk", "Fruit Juice",
            "Vegetable Juice", "Smoothies", "Protein Shakes", "Herbal Tea", "Green Tea", "Black Tea", "Chai Tea", "Coffee", "Espresso", "Latte", "Cappuccino", "Mocha", "Hot Chocolate", "Iced Coffee", "Iced Latte", "Iced Tea", "Lemonade", "Sparkling Water", "Flavored Water", "Kombucha", "Soda", "Energy Drinks", "Sports Drinks", "Milkshakes", "Fruit Smoothies", "Protein Smoothies",
            "Cocktails", "Mocktails", "Wine", "Beer", "Spirits", "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Brandy", "Champagne", "Sparkling Wine", "Cider", "Sangria", "Margarita", "Mojito", "Pina Colada", "Bloody Mary", "Cosmopolitan", "Martini", "Old Fashioned", "Daiquiri", "Mai Tai", "Gin and Tonic", "Whiskey Sour", "Manhattan", "Negroni", "Paloma", "Bellini", "Mimosa"

        ];
        
        // Sample recipes
        const recipes = [
            {
                id: 1,
                title: "Creamy Garlic Parmesan Chicken",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bbf814493?ixlib=rb-4.0.3",
                prepTime: 20,
                cookTime: 25,
                tags: ["Chicken", "Creamy", "Parmesan"],
                ingredients: ["Chicken Breast", "Heavy Cream", "Parmesan Cheese", "Garlic", "Butter", "Olive Oil", "Salt", "Pepper"],
                instructions: [
                    "Season chicken breasts with salt and pepper.",
                    "Heat olive oil and butter in a skillet over medium-high heat.",
                    "Cook chicken until golden and cooked through (about 6 minutes per side).",
                    "Remove chicken and set aside.",
                    "In the same skillet, add garlic and cook until fragrant.",
                    "Pour in heavy cream and bring to a simmer.",
                    "Stir in parmesan cheese until melted and sauce thickens.",
                    "Return chicken to the skillet and simmer for 2-3 minutes.",
                    "Garnish with parsley and serve."
                ]
            },
            {
                id: 2,
                title: "Vegetable Stir Fry with Rice",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3",
                prepTime: 15,
                cookTime: 15,
                tags: ["Vegetarian", "Quick", "Healthy"],
                ingredients: ["Rice", "Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Garlic", "Ginger", "Sesame Oil"],
                instructions: [
                    "Cook rice according to package instructions.",
                    "Heat sesame oil in a wok or large skillet over high heat.",
                    "Add minced garlic and ginger, stir for 30 seconds.",
                    "Add chopped vegetables and stir fry for 5-6 minutes until crisp-tender.",
                    "Pour in soy sauce and cook for another minute.",
                    "Serve over cooked rice."
                ]
            },
            {
                id: 3,
                title: "Classic Spaghetti Bolognese",
                image: "https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-4.0.3",
                prepTime: 15,
                cookTime: 45,
                tags: ["Beef", "Pasta", "Comfort Food"],
                ingredients: ["Ground Beef", "Spaghetti", "Tomato Sauce", "Onions", "Garlic", "Carrots", "Celery", "Olive Oil", "Parmesan Cheese"],
                instructions: [
                    "Heat olive oil in a large pot over medium heat.",
                    "Add chopped onions, garlic, carrots, and celery. Cook until softened.",
                    "Add ground beef and cook until browned.",
                    "Pour in tomato sauce and bring to a simmer.",
                    "Reduce heat and cook for 30 minutes, stirring occasionally.",
                    "Cook spaghetti according to package instructions.",
                    "Serve sauce over spaghetti with grated parmesan cheese."
                ]
            },
            {
                id: 4,
                title: "Caprese Salad with Balsamic Glaze",
                image: "https://images.unsplash.com/photo-1598511721530-2f8b1c5d3c6e?ixlib=rb-4.0.3",
                prepTime: 10,
                cookTime: 0,
                tags: ["Salad", "Vegetarian", "Fresh"],
                ingredients: ["Fresh Mozzarella", "Tomatoes", "Basil", "Balsamic Glaze", "Olive Oil", "Salt", "Pepper"],
                instructions: [
                    "Slice fresh mozzarella and tomatoes.",
                    "Layer mozzarella, tomatoes, and basil leaves on a plate.",
                    "Drizzle with olive oil and balsamic glaze.",
                    "Season with salt and pepper to taste."
                ]
            },
            {
                id: 5,
                title: "Spicy Shrimp Tacos with Avocado Salsa",
                image: "https://images.unsplash.com/photo-1598511721530-2f8b1c5d3c6e?ixlib=rb-4.0.3",
                prepTime: 20,
                cookTime: 15,
                tags: ["Seafood", "Tacos", "Spicy"],
                ingredients: ["Shrimp", "Taco Shells", "Avocado", "Tomatoes", "Red Onion", "Cilantro", "Lime Juice", "Chili Powder", "Garlic Powder"],
                instructions: [
                    "Season shrimp with chili powder, garlic powder, salt, and pepper.",
                    "Heat olive oil in a skillet over medium-high heat.",
                    "Cook shrimp until pink and cooked through (about 2-3 minutes per side).",
                    "In a bowl, mix diced avocado, tomatoes, red onion, cilantro, lime juice, salt, and pepper to make salsa.",
                    "Assemble tacos with shrimp and avocado salsa."
                ]
            },
            {
                id: 6,
                title: "Vegetable Stir Fry",
                image: "https://images.unsplash.com/photo-1589927986089-358123789b4c?ixlib=rb-4.0.3",
                prepTime: 15,
                cookTime: 10,
                tags: ["Vegetarian", "Stir Fry", "Quick"],
                ingredients: ["Broccoli", "Bell Peppers", "Carrots", "Snap Peas", "Soy Sauce", "Garlic", "Ginger", "Sesame Oil"],
                instructions: [
                    "Heat sesame oil in a large skillet over medium-high heat.",
                    "Add minced garlic and ginger, sauté for 30 seconds.",
                    "Add chopped vegetables and stir-fry for 5-7 minutes.",
                    "Pour in soy sauce and cook for an additional 2 minutes.",
                    "Serve hot over rice or noodles."
                ]
            },
            {
                id: 7,
                title: "Chocolate Chip Cookies",
                image: "https://images.unsplash.com/photo-1603052875736-8f1b2c0d3e4f?ixlib=rb-4.0.3",
                prepTime: 15,
                cookTime: 10,
                tags: ["Dessert", "Baking", "Cookies"],
                ingredients: ["Flour", "Sugar", "Brown Sugar", "Butter", "Eggs", "Vanilla Extract", "Baking Soda", "Salt", "Chocolate Chips"],
                instructions: [
                    "Preheat oven to 350°F (175°C).",
                    "In a bowl, cream together butter, sugar, and brown sugar.",
                    "Beat in eggs and vanilla extract.",
                    "In another bowl, mix flour, baking soda, and salt.",
                    "Gradually add dry ingredients to wet ingredients.",
                    "Fold in chocolate chips.",
                    "Drop spoonfuls of dough onto a baking sheet.",
                    "Bake for 10-12 minutes until golden brown."
                ]
            },
            {
                id: 8,
                title: "Classic Caesar Salad",
                image: "https://images.unsplash.com/photo-1589927986089-358123789b4c?ixlib=rb-4.0.3",
                prepTime: 10,
                cookTime: 0,
                tags: ["Salad", "Quick", "Healthy"],
                ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing", "Lemon Juice", "Garlic"],
                instructions: [
                    "Chop romaine lettuce and place in a large bowl.",
                    "Add croutons and grated parmesan cheese.",
                    "In a small bowl, mix Caesar dressing, lemon juice, and minced garlic.",
                    "Pour dressing over salad and toss to combine.",
                    "Serve immediately."
                ]
            },
            {
                id: 9,
                title: "Homemade Pizza",
                image: "https://images.unsplash.com/photo-1589927986089-358123789b4c?ixlib=rb-4.0.3",
                prepTime: 20,
                cookTime: 15,
                tags: ["Pizza", "Homemade", "Cheesy"],
                ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Bell Peppers", "Olives", "Oregano"],
                instructions: [
                    "Preheat oven to 475°F (245°C).",
                    "Roll out pizza dough on a floured surface.",
                    "Spread tomato sauce evenly over the dough.",
                    "Sprinkle mozzarella cheese and add toppings of choice.",
                    "Bake in the oven for 12-15 minutes until crust is golden and cheese is bubbly.",
                    "Slice and serve hot."
                ]
            },
            {
                id: 10,
                title: "Lemon Herb Grilled Salmon",
                image: "https://images.unsplash.com/photo-1589927986089-358123789b4c?ixlib=rb-4.0.3",
                prepTime: 10,
                cookTime: 15,
                tags: ["Seafood", "Grilled", "Healthy"],
                ingredients: ["Salmon Fillets", "Lemon Juice", "Olive Oil", "Garlic", "Dill", "Salt", "Pepper"],
                instructions: [
                    "Preheat grill to medium-high heat.",
                    "In a bowl, mix lemon juice, olive oil, minced garlic, dill, salt, and pepper.",
                    "Brush the mixture over salmon fillets.",
                    "Place salmon on the grill and cook for 5-7 minutes per side until cooked through.",
                    "Serve with lemon wedges."
                ]
            }
        ];
        
        // DOM Elements
        const ingredientInput = document.getElementById('ingredient-input');
        const addIngredientBtn = document.getElementById('add-ingredient');
        const ingredientsContainer = document.getElementById('ingredients-container');
        const suggestionsBox = document.getElementById('suggestions-box');
        const clearIngredientsBtn = document.getElementById('clear-ingredients');
        const findRecipesBtn = document.getElementById('find-recipes');
        const resultsSection = document.getElementById('results-section');
        const recipesContainer = document.getElementById('recipes-container');
        const mealDetail = document.getElementById('meal-detail');
        const detailImage = document.getElementById('detail-image');
        const detailTitle = document.getElementById('detail-title');
        const detailTags = document.getElementById('detail-tags');
        const detailIngredients = document.getElementById('detail-ingredients');
        const detailInstructions = document.getElementById('detail-instructions');
        const closeDetailBtn = document.querySelector('.close-detail');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const appSection = document.getElementById('app-section');
        
        // User's selected ingredients
        let selectedIngredients = [];
        // Show app section when user clicks "Get Started"
        document.getElementById('get-started').addEventListener('click', function() {
            showAppSection();
        });

        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Form submissions
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Login functionality would be implemented in a real application');
                $('#loginModal').modal('hide');
            });
            
            document.getElementById('signupForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Sign up functionality would be implemented in a real application');
                $('#signupModal').modal('hide');
            });
            
            // Add ingredient events
            addIngredientBtn.addEventListener('click', addIngredient);
            ingredientInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addIngredient();
                }
            });
            
            ingredientInput.addEventListener('input', showSuggestions);
            
            // Clear ingredients
            clearIngredientsBtn.addEventListener('click', clearIngredients);
            
            // Find recipes
            findRecipesBtn.addEventListener('click', findRecipes);
        });
        
        
        // Show app section
        function showAppSection() {
            document.getElementById('app-section').style.display = 'block';
            window.scrollTo({
                top: document.getElementById('app-section').offsetTop - 100,
                behavior: 'smooth'
            });
        }
        
        // Add ingredient to list
        function addIngredient() {
            const ingredient = ingredientInput.value.trim();
            
            if (ingredient && !selectedIngredients.includes(ingredient.toLowerCase())) {
                selectedIngredients.push(ingredient.toLowerCase());
                
                const tag = document.createElement('div');
                tag.className = 'ingredient-tag';
                tag.innerHTML = `
                    ${ingredient}
                    <i class="fas fa-times" onclick="removeIngredient('${ingredient}')"></i>
                `;
                
                ingredientsContainer.appendChild(tag);
                ingredientInput.value = '';
                suggestionsBox.style.display = 'none';
            }
        }
        
        // Remove ingredient
        function removeIngredient(ingredient) {
            selectedIngredients = selectedIngredients.filter(item => item !== ingredient.toLowerCase());
            renderIngredients();
        }
        
        // Render ingredients
        function renderIngredients() {
            ingredientsContainer.innerHTML = '';
            
            selectedIngredients.forEach(ingredient => {
                const tag = document.createElement('div');
                tag.className = 'ingredient-tag';
                tag.innerHTML = `
                    ${ingredient}
                    <i class="fas fa-times" onclick="removeIngredient('${ingredient}')"></i>
                `;
                
                ingredientsContainer.appendChild(tag);
            });
        }
        
        // Clear all ingredients
        function clearIngredients() {
            selectedIngredients = [];
            ingredientsContainer.innerHTML = '';
        }
        
        // Show ingredient suggestions
        function showSuggestions() {
            const input = ingredientInput.value.toLowerCase();
            suggestionsBox.innerHTML = '';
            
            if (input.length > 1) {
                const filtered = ingredients.filter(item => 
                    item.toLowerCase().includes(input) && 
                    !selectedIngredients.includes(item.toLowerCase())
                );
                
                if (filtered.length > 0) {
                    filtered.slice(0, 5).forEach(item => {
                        const suggestion = document.createElement('div');
                        suggestion.className = 'suggestion-item';
                        suggestion.textContent = item;
                        suggestion.addEventListener('click', function() {
                            ingredientInput.value = item;
                            suggestionsBox.style.display = 'none';
                        });
                        suggestionsBox.appendChild(suggestion);
                    });
                    suggestionsBox.style.display = 'block';
                } else {
                    suggestionsBox.style.display = 'none';
                }
            } else {
                suggestionsBox.style.display = 'none';
            }
        }
        
        // Find matching recipes
        function findRecipes() {
            if (selectedIngredients.length === 0) {
                alert('Please add some ingredients first!');
                return;
            }
            
            // Filter recipes that include at least 2 of the selected ingredients
            const matchingRecipes = recipes.filter(recipe => {
                const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
                const matches = selectedIngredients.filter(ing => recipeIngredients.includes(ing));
                return matches.length >= 2;
            });
            
            displayRecipes(matchingRecipes);
            resultsSection.style.display = 'block';
            
            window.scrollTo({
                top: resultsSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
        
        // Display recipes
        function displayRecipes(recipesToShow) {
            recipesContainer.innerHTML = '';
            
            if (recipesToShow.length === 0) {
                recipesContainer.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                        <h4 class="fw-bold">No recipes found</h4>
                        <p>Try adding more ingredients or different combinations.</p>
                    </div>
                `;
                return;
            }
            
            recipesToShow.forEach(recipe => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4 mb-4';
                col.innerHTML = `
                    <div class="meal-card ios-card h-100">
                        <div class="overflow-hidden">
                            <img src="${recipe.image}" class="meal-img" alt="${recipe.title}">
                        </div>
                        <div class="p-4">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="fw-bold mb-0">${recipe.title}</h5>
                                <span class="badge bg-primary badge-ios">${recipe.prepTime + recipe.cookTime} min</span>
                            </div>
                            <div class="d-flex flex-wrap mb-3">
                                ${recipe.tags.map(tag => `<span class="badge bg-light text-dark me-1 mb-1">${tag}</span>`).join('')}
                            </div>
                            <button class="btn btn-ios w-100" onclick="showMealDetail(${recipe.id})">View Recipe</button>
                        </div>
                    </div>
                `;
                recipesContainer.appendChild(col);
            });
        }
        
        // Show meal detail
        function showMealDetail(recipeId) {
            const recipe = recipes.find(r => r.id === recipeId);
            
            if (recipe) {
                document.getElementById('detail-title').textContent = recipe.title;
                document.getElementById('detail-image').src = recipe.image;
                document.getElementById('detail-image').alt = recipe.title;
                
                const tagsContainer = document.getElementById('detail-tags');
                tagsContainer.innerHTML = '';
                recipe.tags.forEach(tag => {
                    const badge = document.createElement('span');
                    badge.className = 'badge bg-light text-dark';
                    badge.textContent = tag;
                    tagsContainer.appendChild(badge);
                });
                
                const ingredientsList = document.getElementById('detail-ingredients');
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.className = 'mb-2';
                    li.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i> ${ingredient}`;
                    ingredientsList.appendChild(li);
                });
                
                const instructionsList = document.getElementById('detail-instructions');
                instructionsList.innerHTML = '';
                recipe.instructions.forEach((step, index) => {
                    const li = document.createElement('li');
                    li.className = 'mb-2';
                    li.textContent = step;
                    instructionsList.appendChild(li);
                });
                
                mealDetail.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
        
        // Close meal detail
        function closeMealDetail() {
            mealDetail.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.ingredient-input')) {
                suggestionsBox.style.display = 'none';
            }
        });
