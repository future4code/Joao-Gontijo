### Exercício 1 
A) CREATE TABLE <table name>: Cria uma tabela recebendo os nomes e tipos de cada coluna
VARCHAR(n): Delimita o número máximo de caracteres de uma string
DATE: Representa uma data no formata (YYYY-MM-DD)
PRIMARY KEY: Identifica cada registro de uma tabela de maneira única
NOT NULL: Faz com que a coluna não aceite valores null

B) O comando SHOW DATABASES me mostrou o meu database, já o SHOW TABLES me mostrou as tabelas que criei.

C)  O comando me mostrou a estrutura da minha tabela, suas colunas e tipos.

### Exercício 2 
A) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

B) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'.
O erro 1062 acusa a primary key '002' de ser duplicada. Primary keys devem ser únicas.

C)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

D)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Pedro Cardoso",
  400000,
  "1962-12-31", 
  "male"
);

E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

F)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Ator não global",
  200,
  "1989-10-26", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Atriz não global",
  190,
  "1990-05-23", 
  "female"
);

### EXERCÍCIO 3
A) SELECT * FROM Actor WHERE gender = "female";

B) SELECT salary FROM Actor WHERE name = "Tony Ramos";

C) SELECT * FROM Actor WHERE gender = "invalid";
O resultado é um grid com valores null, pois não há um gender "invalid" na tabela.
 
D) SELECT salary FROM Actor WHERE salary <= 500000;

E) Erro 1054, pois não existe a coluna "nome" e sim a coluna "name"

SELECT id, name FROM Actor WHERE id = "002"

### EXERCÍCIO 4

A) A query acima busca atores ou atrizes com nomes que começam com A ou J e com um salário acima de 300000.

B) SELECT * FROM  Actor WHERE name NOT LIKE "A%" AND salary > 350000

C) SELECT * FROM  Actor WHERE name  LIKE "%G%" O mySQL não diferencia letra minuscula de maiuscula, pode usar só o G ou o g.

D) 
SELECT * FROM  Actor WHERE name  LIKE "%G%" OR name LIKE "A" AND salary between 350000 AND 900000


### EXERCÍCIO 5

A)
 CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT  NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

B) 
INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao) 
VALUES(
	"001",
    "Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",    
	"2019-11-07",
    7
)

C)
INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao) 
VALUES(
	"002",
    "Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",    
	"2012/12/27",
    10
);

D)
INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",    
	"2017/11/02",
    8
);

E) INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao) 
VALUES(
	"004",
    "Cidade de Deus",
	"Cidade de Deus é uma estória e tanto. Desculpe, histórias. Histórias e tanto. Histórias de pessoas que moram numa favela e sonham, intrigam, invejam, disputam, amam e odeiam, às claras ou às escondidas, como bem fazemos todos nós"
	"2002/08/30"
    10
);

### EXERCÍCIO 6
A)SELECT id, name FROM Movies WHERE id = "001";

B) SELECT * FROM Movies WHERE name = "Cidade de Deus";

C) SELECT id, name, sinopse FROM Movies WHERE avaliacao >= 7;


### EXERCÍCIO 7
7A) SELECT * FROM Movies WHERE name LIKE "%VIDA%";

B)SELECT * FROM Movies WHERE name LIKE  "%cidade de deus%" OR sinopse LIKE "%cidade de deus%";

C)SELECT * FROM Movies WHERE data_de_lancamento < "2021-07-19"

D) SELECT * FROM MOVIE WHERE data_de_lancamento < "2021-07-19" AND (name LIKE "%cidade de deus%" OR sinopse LIKE "%cidade de deus%") AND avaliacao > 7;