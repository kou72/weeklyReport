export default function send(title, text) {
  const nodemailer = require("nodemailer");

  const smtp = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: "suzuki.ko@isoroot.jp",
      pass: "Kousuke0702"
    },
    secureConnection: false,
    tls: { ciphers: "SSLv3" }
  });

  //メール情報の作成
  const message = {
    from: "suzuki.ko@isoroot.jp",
    to: "suzuki.ko@isoroot.jp",
    subject: "nodemailer test mail",
    text: "テストメールです。"
  };
}
