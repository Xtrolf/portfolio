# Role API — Node.js REST API

A dependency-free REST API built with Node.js native HTTP server APIs. It demonstrates routing, JSON request parsing, validation, CRUD operations, HTTP status codes and error responses.

## Run locally
```bash
npm start
```
The API starts at `http://localhost:3000`.

## Endpoints
- `GET /health` — service health
- `GET /api/roles` — list roles
- `POST /api/roles` — create a role; JSON body: `{"company":"Example Co","role":"Web Intern"}`
- `GET /api/roles/:id` — get one role
- `PATCH /api/roles/:id` — update status; JSON body: `{"status":"Applied"}`
- `DELETE /api/roles/:id` — delete a role

Valid statuses: Saved, Applied, Interview, Rejected, Offer.

## Scope and limitations
Data is held in memory and resets when the server restarts. This is a learning/demo API, not a production persistence layer. Add a database and authentication before using it for real users.
