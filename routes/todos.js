import { excuteQuery } from '../config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

// Funktion som hämtar alla todos från databasen
export const getAllTodos = async(req, reply) => {
    try {
        // Anropar excuteQuery för att skicka SQL till databasen
        // Resultatet returneras som ett Promise och hanteras med await
        let todosData = await excuteQuery("select * from todos", []);
        reply.status(200).send(todosData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som hämtar en specifik todo baserat på ID
export const getTodoById = async(req, reply) => {
    let id = req.params.id;
    try {
        let todosData = await excuteQuery("select * from todos where id=?", [id]);
        reply.status(200).send(todosData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som lägger till ny todo
export const addTodo = async(req, reply) => {
    try {
        const { title, description, status } = req.body;

            // Validering: kolla att name är en icke-tom sträng
            if (!title || typeof title !== 'string' || title.trim() === '') {
                return reply.status(400).send({ error: "title måste fyllas i korrekt." });
            }
            
            // Validering: kolla att description är en icke-tom sträng
            if (!description|| typeof description !== 'string' || description.trim() === '') {
                return reply.status(400).send({ error: "description måste fyllas i korrekt." });
            }

            // Validering: kolla att status är en icke-tom sträng
            if (!status || typeof status !== 'string' || status.trim() === '') {
                return reply.status(400).send({ error: "status måste fyllas i korrekt." });
            }          

        // SQL-fråga för att lägga till todo
        let todosData = await excuteQuery("insert into todos(title, description, status) values(?, ?, ?)",
            [
                title, 
                description, 
                status
            ]
        );
        reply.status(201).send({ message: "Todo tillagd!", todosData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som uppdaterar specifik todo baserad på ID
export const updateTodo = async(req, reply) => {
    let id = req.params.id;
    try {
        const { title, description, status } = req.body;

            // Validering: kolla att name är en icke-tom sträng
            if (!title || typeof title !== 'string' || title.trim() === '') {
                return reply.status(400).send({ error: "title måste fyllas i korrekt." });
            }
            
            // Validering: kolla att description är en icke-tom sträng
            if (!description|| typeof description !== 'string' || description.trim() === '') {
                return reply.status(400).send({ error: "description måste fyllas i korrekt." });
            }

            // Validering: kolla att status är en icke-tom sträng
            if (!status || typeof status !== 'string' || status.trim() === '') {
                return reply.status(400).send({ error: "status måste fyllas i korrekt." });
            }   

        // SQL-fråga för att uppdatera todo
        let todosData = await excuteQuery(`update todos set title=?, description=?, status=? where id=${id}`,
            [ 
                title, 
                description, 
                status
            ]
        );
        reply.status(201).send({ message: "Todo uppdaterad!", todosData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som raderar en specifik todo baserat på ID
export const deleteTodoById = async(req, reply) => {
    let id = req.params.id;
    try {
        let todosData = await excuteQuery("delete from todos where id=?", [id]);
        reply.status(200).send({ message: "Todo raderad!", todosData});
    } catch (err) {
        reply.status(500).send(err);
    }
};