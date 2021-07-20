### Exercício 1 
a) O comando irá retirar da tabela Actor a coluna salary

b) O comando irá trocar o nome da coluna gender para sex

c) O comando irá mudar o máximo de caracteres que a coluna gender pode receber 

d) A query é :
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)   A query é :
```
UPDATE Actor SET name= "Josualdo", birth_date= "1915-01-01" WHERE id = "003"
```
b) A query é:
```
UPDATE Actor SET name= "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name= "Juliana Paes" WHERE name = "JULIANA PAES";
```
c)  A query é:
```
UPDATE Actor SET Name = "oi", birth_date = "1900-12-30", salary = 100, gender = "non-binary" WHERE ID = 005;
```

d) A query inválida foi: 
```
UPDATE Actor SET name = "aaaa", WHERE ID =  202302203
```
O resultado foi  0 row(s) affected, Rows matched: 0 Changed: 0 Warnings: 0. Não precisa mt explicar né, só ler.

### Exercício 3

a) A query é: 

```

DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) A query é:
```
DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;
```

### Exercício 4
a) A query é:
```
SELECT MAX(salary) FROM Actor;
```

b) A query é: 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) A query é :

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) A query é :

```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a) A query contou o número de pessoas na tabela a partir do gênero e as agrupou de acordo com seu gênero (gender)

b)A query é :

```
SELECT id, name FROM Actor ORDER BY name DESC;
```

c) A query é :

```
SELECT * FROM Actor ORDER BY salary ASC;
```

d) A query é :

```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e) A query é :

```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exercício 6
a) A query é :

```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

B) A query é :

```
ALTER TABLE Movies CHANGE rating rating FLOAT;

```

C) As queries são :

```
UPDATE Movies SET playing_limit_date = '2010-10-20' WHERE id = "001";

UPDATE Movies SET playing_limit_date = '2021-12-31' WHERE id = "002";

```

D) A query é :

```
DELETE FROM Movies WHERE ID = "001";
UPDATE Movies set sinopse = "uiaefjfeiojefio" WHERE id = "001";
```
0 rows affected. Rows matched: 0. Changed: 0 Warnings : 0. Nada foi alterado porque não existe mais um filme com essa ID.


### Exercício 7

A) A query é :

```
SELECT * FROM Movies WHERE avaliacao > 7.5;
```

b) A query é :

```
SELECT AVG(avaliacao) FROM Movies;
```

C) A query é :

```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();

```

d) A query é :

```

SELECT COUNT(*) FROM Movies WHERE data_de_lancamento > CURDATE();
```

e) A query é :

```
SELECT MAX(avaliacao) FROM Movies;
```

f) A query é :

```
SELECT MIN(avaliacao) FROM Movies;

```
### Exercício 8


A) A query é :

```
SELECT * FROM Movies ORDER BY name;

```

B) A query é :

```

SELECT * FROM Movies ORDER BY name DESC LIMIT 5;
```

C) A query é :

```
SELECT * FROM Movies ORDER BY data_de_lancamento LIMIT 3;
```

D) A query é :

```
SELECT * FROM Movies ORDER BY avaliacao DESC LIMIT 3;
```



