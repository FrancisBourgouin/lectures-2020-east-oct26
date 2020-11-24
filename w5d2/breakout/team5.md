## Building an ERD 
CREATE TABLE clients(
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR (225),
   phone VARCHAR (225),
   email VARCHAR (225),
   address VARCHAR (225)
);

CREATE TABLE menu(
  id SERIAL PRIMARY KEY NOT NULL,
  item TEXT,
  price INTEGER
);

CREATE TABLE order(
  id SERIAL PRIMARY KEY NOT NULL,
  menu_id  REFERENCE menu(id) 

  time TIMESTAMP

)

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

### ERD describing the relationship



+------------+                    
| client |
+------------+
| PK  id       |
|   name     |
|   phone    |
|   email    |
|   ADDRESS         |
|            |
+------------+

| order |
+------------+
| PK  id         |
| FK  menu_id         |
| FK  client_id         |
|   time         |
|            |
|            |
+------------+

| menu |
+------------+
| PK id        |
   items     |
|            |
|            |
|            |
|            |
+------------+
