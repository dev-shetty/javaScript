class WebSockets {
  users = []
  connection(client) {
    // When chat-room is disconnected
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== client.id)
    })

    // Identity of user mapped to socket id
    client.on("identity", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      })
    })

    // Subscribe person to chat and other user as well
    client.on("subscribe", (room, otherUserId = "") => {
      this.subscribeOtherUser(room, otherUserId)
      client.join(room)
    })

    // Mute a chat room
    client.on("unsubscribe", (room) => {
      client.leave(room)
    })
  }
  subscribeOtherUser(room, otherUserId) {
    const userSockets = this.users.filter((user) => user.userId === otherUserId)
    userSockets.map((userInfo) => {
      const socketConn = global.importScripts.sockets.connected(
        userInfo.socketId
      )
      if (socketConn) {
        socketConn.join(room)
      }
    })
  }
}

export default new WebSockets()
