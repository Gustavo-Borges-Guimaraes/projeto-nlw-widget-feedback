import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3c4bb25a6a582a",
    pass: "408678a9f3d49c",
  },
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gustavo Borges <gustavo.borges.guimaraes100@gmail.com>",
      subject,
      html: body,
    });
  }
}
