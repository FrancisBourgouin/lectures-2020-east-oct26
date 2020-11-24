## Building an ERD 
Food-favourite relationship 
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
One to many relationship where one is a food and many is the people. The relationship
describes the favorite food of a group of people.
(one food can be the favorite of many people, but people cant have multiple favortie foods)
### ERD describing the relationship
+------------+
| Food       |
+------------+
| (PK)id     |
|   name     |
|            |
|type(veg/nv)|      
|            |
|            |
+------------+

+------------+
| Person     |
+------------+
| (PK)  id   |
|  name      |
|(FK) food_id|
|    diet    |
|     age    |
|            |
+------------+

