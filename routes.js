import { CreateUserHandler, GetAllUsersHandler, GetUserHandler } from "./handlers/userHandler.js"

const routes = app => {
    app.post('/create-user', CreateUserHandler);
    app.get('/user/:email', GetUserHandler);
    app.get('/users', GetAllUsersHandler);
}

export default routes;