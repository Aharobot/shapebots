

const Simulator = {
  initRobots() {
    let robots = []
    for (let id = 1; id < 10; id++) {
      let robot = {}
      robot.id = id
      let x = Math.random() * App.width
      let y = Math.random() * App.height
      robot.pos = { x: x, y: y}
      let angle = Math.random() * 360
      robot.angle = angle
      robot.ip = App.ips[robot.id]
      robots.push(robot)
    }
    App.setState({ robots: robots })
  },

  moveRobot(id, command) {
    let robots = App.state.robots
    let robot = robots[id-1]

    // console.log(command)

    let x = robot.pos.x
    let y = robot.pos.y
    let angle = robot.angle
    let rad = Math.PI * (angle-90) / 180

    let a1 = command.a1
    let a2 = command.a2
    let b1 = command.b1
    let b2 = command.b2

    let unit = 5
    let v = { x: 0, y: 0 }
    if (a2 === b1) {
      v.x = unit * Math.cos(rad)
      v.y = unit * Math.sin(rad)
    }

    if (a2 > b1) {
      angle += 5
    }

    if (a2 < b1) {
      angle -= 5
    }

    let next = {
      x: x + v.x,
      y: y + v.y
    }

    robot.pos = next
    robot.angle = angle
    robots[id-1] = robot
    App.setState({ robots: robots })
  }

}

export default Simulator