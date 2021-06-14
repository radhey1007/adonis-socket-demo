# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```


Refrence Link : https://legacy.adonisjs.com/docs/4.1/websocket#_basic_example


Setup instructions for @adonisjs/websocket

Register provider
The provider must be registered inside start/app.js file.

const providers = [
  '@adonisjs/websocket/providers/WsProvider'
]
Channels
The next step is to open start/socket.js and register websocket channels.

const Ws = use('Ws')

Ws.channel('chat', ({ socket }) => {
  console.log('new socket joined %s', socket.id)
})
Middleware
The middleware for websocket are kept in the start/wsKernel.js file.

const Ws = use('Ws')

const globalMiddleware = []
const namedMiddleware = {}

Ws
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)