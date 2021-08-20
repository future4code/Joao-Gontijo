### Exercício 1:

A) Uma chave estrangeira é uma chave que faz referência à uma linha de outra tabela, ou seja, quando preenchemos o valor da chave estrangeira o valor preenchido tem que **necessariamente** existir na tabela referenciada.

B) 
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating VALUES 
('001', 'filme top', 9.8, '002'),
('002', 'filme bom?', 9.5, '003'),
('003', 'filmão bom demais', 10, '004');


SELECT * FROM Rating
```
C)
Erro 1452, não se pode adicionar ou dar update em uma linha filha, porque a foreign key não existe.

D) 
```
ALTER TABLE Movies
DROP COLUMN avaliacao;
```

E) Não se pode apagar um filme que possui avaliações, recebemos o erro 1451 porque ele está referenciado em outra tabela. Para apagá-lo devemos antes apagar sua referência!

### Exercício 2:

A) Essa é uma tabela intermediária que serve para que relacionemos duas tabelas que não se relacionam entre si. Com isso podemos fazer a relação N:M. Uma coluna recebe um dado de referência de uma das tabelas e a outra coluna a referência da outra tabela, possibilitando que se relacionem. Assim é possível relacionar mais de um filme a um ator e mais de um ator a um filme.

B) 
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES 
('002','001'),
('002','002'),
('003','001'),
('004','007'),
('004','006'),
('003','005');

SELECT * FROM MovieCast;
```

C) Erro 1452, o dado inserido não existe na tabela referenciada, então é impossível criar essa relação

D) Erro 1451, impossível apagar o ator porque ele é referenciado em outra tabela. É necessário antes apagar sua referência para depois poder apagá-lo.

### Exercício 3:

A) O operador ON garante que a tabela retornada apenas retorne os dados onde o Movie.id seja igual ao Rating.movie_id. Ou seja, ele restringe a busca para que retorne apenas os dados que queremos ordenados corretamente, garantindo que só tenhamos linhas onde a avaliação coincida com o filme.

B) 
```
SELECT name, Movies.id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

## **Desafios**

### Exercício 4:

A) 
```
SELECT name, Movies.id, rate AS rating, comment 
FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id;
```

b)
```
SELECT Movies.id, Movies.name, MovieCast.actor_id
FROM Movies
RIGHT JOIN MovieCast
ON MovieCast.movie_id = Movies.id;
```

C)
```
SELECT AVG(rate), Movies.id, Movies.name FROM Movies
LEFT JOIN Rating ON Movies.id = movie_id
GROUP BY Movies.id;
```
### Exercício 5:

A) Há a necessidade de dois JOIN porque são relacionadas mais de duas tabelas. Primeiro são relacionadas as tabelas Movies e MovieCast e depois a tabela Actor se junta nessa relação. 

B) 
```
SELECT m.id id_filme, 
m.name Titulo, 
a.id id_ator, 
a.name Nome 
FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

C) Error Code: 1054. Existe um parâmetro errado no select: está escrito **m,title** quando deveria ser **m.title**

D) 
```
SELECT m.id id_filme,
m.name titulo, 
rate, 
comment, 
a.id id_ator, 
a.name nome 
FROM MovieCast mc
JOIN Movies m ON m.id = mc.movie_id
JOIN Rating r ON m.id = r.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 6:

A) Relação N:M

LETRAS B, C e D:
```
CREATE TABLE oscar (
id  VARCHAR(255) PRIMARY KEY,
type VARCHAR(255)  NOT NULL,
data VARCHAR(255) NOT NULL
);
INSERT INTO oscar VALUES
('001','Melhor Filme', '10/10/10'),
('002','Melhor Direcao','10/10/10'),
('003','Melhor Filme', '11/11/11'),
('004','Melhor Direcao','11/11/11');
SELECT * from oscar;
SELECT * FROM Movies;

CREATE TABLE premiacao_oscar (
	movie_id VARCHAR(255),
  oscar_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movies(id) ,
	FOREIGN KEY (oscar_id) REFERENCES oscar(id)
);
INSERT INTO premiacao_oscar 
VALUES 
('002','001'),
('004', '003'),
('004', '004'),
('003', '002');


SELECT m.id, 
m.name Titulo, 
o.id, 
o.type, 
o.data 
FROM premiacao_oscar p
JOIN oscar o on o.id = p.oscar_id
JOIN Movies m on m.id = p.movie_id ;
```