'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage (message) {
    this.socket.broadcastToAll('message', message)
  }

  onClose () {
    this.socket.on('close')
  }

  onError () {
    this.socket.on('error')
  }

}

module.exports = ChatController
