import bcrypt from "bcrypt";
import User from "../database/models/user.js";
import mailService from "../database/models/mailService.js";
import authService from "../service/authService.js";
import stringFormatter from "../formater/stringFormatter.js";

const getUser = async (prop) => {
  const user = await User.findOne({ _id: prop.id });
  return user;
};

async function register(req, res) {
  const { username, surname, email, password } = req.body;
  if (username && surname && email && password) {
    const user = await User.findOne({
      email: stringFormatter.capitalize(`${email}@promail.com`),
    });

    if (user != null) {
      res.status(409).send("e-postadressen är redan taget!");
      return;
    } else {
      const hashPass = await bcrypt.hash(req.body.password, 10);
      const introductionMail = mailService.welcomeMail(
        stringFormatter.capitalize(username),
        "Pro-Mail"
      );
      await User.create({
        username: stringFormatter.capitalize(username),
        surname: stringFormatter.capitalize(surname),
        email: stringFormatter.capitalize(`${email}@promail.com`),
        password: hashPass,
        mailbox: introductionMail,
      });
      res.status(200).send("account created!");
    }
  } else {
    res.status(400).send("Alla fält måste fyllas i!");
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  if (email && password) {
    const user = await User.findOne({
      email: stringFormatter.capitalize(`${email}@promail.com`),
    });

    if (user) {
      const token = await authService.authenticateLogin(user._id, password);
      if (token != undefined) {
        return res
          .status(200)
          .send({ id: user.id, token, message: "Inloggning lyckades!" });
      }
    } else {
      return res.status(400).send("Felaktig login, kontrollera dina uppgifter");
    }
  } else {
    return res.status(400).send("Skriv in epost-adressen och lösenord");
  }
}
async function inbox(req, res) {
  const fetchedProfile = await getUser(req.user);
  const userEmails = fetchedProfile.mailbox;
  console.log(userEmails);
}
export default { register, login, inbox };
