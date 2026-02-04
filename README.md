# Todo-applikation – Backend

Detta är backend-delen av Todo-applikationen.  
Backend är byggd med **Node.js** och **Fastify** och använder **MySQL** för datalagring.

Backend tillhandahåller ett REST-API som frontend använder för att hantera todos.

---

## Funktionalitet

Backend ansvarar för att:

- Hämta alla todos
- Skapa nya todos
- Uppdatera befintliga todos
- Ta bort todos
- Validera inkommande data

---

## Tekniker

- Node.js
- Fastify
- MySQL

---

## Databas

### Tabellstruktur

```sql
CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  status ENUM('Ej påbörjad', 'Pågående', 'Avklarad')
    NOT NULL
    DEFAULT 'Ej påbörjad'
```

---

## API-endpoints
Metod /	Endpoint	Beskrivning
GET	/todos	Hämtar alla todos
POST	/todos	Skapar en ny todo
PUT	/todos/:id	Uppdaterar en todo
DELETE	/todos/:id	Tar bort en todo
);

---

## Installation och körning
npm install

npm run dev

Backend körs som standard på: http://localhost:3000

---

## Validering

Backend kontrollerar att:
- Titel är en icke-tom sträng
- Status är giltig
- Inkommande data är korrekt formaterad
