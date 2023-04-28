import bcrypt from "bcrypt";
import User from "../database/models/user.js";
import mailService from "../database/models/mailService.js";
import authService from "../service/authService.js";
import stringFormatter from "../formater/stringFormatter.js";

async function register(req, res) {
  const { username, surname, email, password } = req.body;
  if (username && surname && email && password) {
    const user = await User.findOne({
      email: stringFormatter.turnFirstUppercase(`${email}@promail.com`),
    });

    if (user != null) {
      res.status(409).send("e-postadressen är redan taget!");
      return;
    }

    const hashPass = await bcrypt.hash(req.body.password, 10);
    const introductionMail = mailService.welcomeMail(
      stringFormatter.turnFirstUppercase(username),
      "Pro-Mail"
    );
    await User.create({
      username: stringFormatter.turnFirstUppercase(username),
      surname: stringFormatter.turnFirstUppercase(surname),
      email: stringFormatter.turnFirstUppercase(`${email}@promail.com`),
      password: hashPass,
      mailbox: introductionMail,
    });
    res.status(200).send("Account created!");
  } else {
    res.status(400).send("Alla fält måste fyllas i!");
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  if (email && password) {
    const user = await User.findOne({
      email: stringFormatter.turnFirstUppercase(`${email}@promail.com`),
    });

    if (user) {
      const isAutenticated = await authService.authenticate(
        email + "@promail.com",
        password
      );

      if (isAutenticated != undefined) {
        return res
          .status(200)
          .send({ isAutenticated, message: "Inloggning lyckades!" });
      } else {
        return res
          .status(400)
          .send("Felaktig login, kontrollera dina uppgifter");
      }
    }
  } else {
    return res.status(400).send("Skriv in epost-adressen och lösenord");
  }
}
async function home(req, res) {}

export default { register, login };
