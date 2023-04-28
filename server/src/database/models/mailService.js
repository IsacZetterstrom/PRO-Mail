function welcomeMail(registeredUser, sender) {
  const template = [
    {
      sender: `${sender}`,
      subject: `Välkommen till Pro-mail ${registeredUser}!`,
      content: `Vid frågor, tveka inte att kontakta oss.`,
    },
  ];
  return template;
}

export default { welcomeMail };
