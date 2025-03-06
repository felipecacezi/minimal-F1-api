// Import the framework and instantiate it
import Fastify from 'fastify';
import cors from "@fastify/cors";
import { drivers } from './data/drivers.ts';
import { teams } from './data/teams.ts';

const fastify = Fastify({ logger: true });
fastify.register(cors, { origin: "*" });

fastify.get('/teams', async function handler (request, response) {
    response.type("application/json").code(200);
    return teams;
});

fastify.get('/drivers', async function handler (request, response) {
    response.type("application/json").code(200);
    return drivers;
});

interface Driver {
    id: string;
}
fastify.get<{ Params:Driver }>('/driver/:id', async function handler (request, response) {
    const driverId = parseInt(request.params.id);
    const driver = drivers.find(driver => driver.id === driverId);

    if (!driver) {
        response.type("application/json").code(404);
        return { error: "Driver not found" };
    } else {
        response.type("application/json").code(200);
        return driver;
    }    
});

try {
  fastify.listen({ port: process.env.PORT, host: process.env.HOST });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
