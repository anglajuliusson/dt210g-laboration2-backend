import { addTodo, deleteTodoById, getAllTodos, getTodoById, updateTodo } from './todos.js'; // Importerar controller-funktionerna från todos.js

export async function routes(fastify) {
    // Registrerar GET-route och kopplar till controller-funktionen
    fastify.get('/todos', getAllTodos); // Route för att hämta alla todos
    fastify.get('/todos/:id', getTodoById); // Route för att hämta en todo med specifikt id
    fastify.post('/todos', addTodo); // Route för att lägga till ny todo
    fastify.put('/todos/:id', updateTodo); // Route för att uppdatera en todo med specifikt id
    fastify.delete('/todos/:id', deleteTodoById); // Route för att radera en todo med specifikt id
};