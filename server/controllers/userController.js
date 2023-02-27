class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async check(req, res) {
    const { id } = req.query;
    res.json(id);
    // // http://localhost:3000/api/user/auth?id=5&message=fghfdg

"5"
  }
}

module.exports = new UserController();
