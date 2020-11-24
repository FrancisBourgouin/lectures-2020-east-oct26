## Building an ERD 

### Example of ERD box

+------------+
| student   |
+------------+
| id serial primary key NOT NULL       |
| first_name  VARCHAR(255) NOT NULL   |
| last_name   VARCHAR(255) NOT NULL |
| start_date  DATE|
| end_date    DATE|
| student_enrolled_id INTEGER  REFERENCE students_enrolled(id) ON DELETE CASCADE|
+------------+

+------------+
|students_enrolled |
+------------+
|id Serial PK NOT NULL
|student_id Integer REFERENCE student(id) ON DELETE CASCADE     |
|class_id Integer  REFERENCE Class(id) ON DELETE CASCADE     |
|            |
|            |
|            |
|            |
+------------+

+------------+
| Class   |
+------------+
| id serial PK  NOT NULL         |
| class_name VARCHAR(255) NOT NULL          |
| student_enrolled_id   INTEGER  REFERENCE students_enrolled(id) ON DELETE CASCADE       |
|            |
|            |
|            |
+------------+



### Description of your relationship
students TABLE
class TABLE
students_enrolled TABLE
many to many
### ERD describing the relationship
