## Building an ERD 
Groceries
Kitchen Fridge / Pantry Storage
### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship
Appliances, Ingredients, Recipies, Utensils, Shopping List,

### ERD describing the relationship
  +------------------+
  | ingredient       |
  +------------------+
PK| id               |
  | name             |
  | quantity         |
  | purchase date    |
  | best before date | 
  |                  |
  |                  |
  +------------------+

  +------------+
  | appliance  |
  +------------+
PK|  id        |
  |  name      |
  |  make      |
  |  model     |
  |  lifecycle |
  |            |
  +------------+

  +--------------------+
  |   recipe           |
  +--------------------+
PK|  id                |
  |  name              |
  |                    |
FK|  ing_id            | many to many
FK|  appliance_id      | many to many
  +--------------------+
      
  +------------+
  |    meal    |
  +------------+
PK|  id        |
  |  name      |
FK|  recipe_id |
  +------------+

  +---------------+
  |shopping list
  +---------------+
PK|  id           |
  |  date         |
  |  ing id       | many to many?
  |  ing quantity |
  |               |
  |               |
  +---------------+