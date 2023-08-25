# Recipes APP

## API Endpoints

### /api/recipes/
* GET: List all recipes
* POST: Create a new recipe
* PUT: Update a recipe

### /api/recipes/[ID]
* GET: Get a recipe
* Parameters:
    * ID: Recipe ID

### /api/recipes/rating/[ORDER]
* GET: List all recipes ordered by rating
* Parameters:
    * ORDER: best, worst
