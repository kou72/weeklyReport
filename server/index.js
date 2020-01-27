const express = require("express");
const consola = require("consola");
require("dotenv").config();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.post("/send-email", function(req, res) {
    console.log(req.title);
    console.log(req.body);

    //SMTPサーバの設定
    const smtp = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "suzuki.ko@isoroot.jp",
        pass: process.env.PASS
      },
      secureConnection: false,
      tls: { ciphers: "SSLv3" }
    });

    //メール情報の作成
    const message = {
      from: "suzuki.ko@isoroot.jp",
      to: "suzuki.ko@isoroot.jp",
      subject: req.body.title,
      text: req.body.text
    };

    // メール送信
    try {
      smtp.sendMail(message, function(error, info) {
        // エラー発生時
        if (error) {
          console.log("send failed");
          console.log(error.message);
          return;
        }

        // 送信成功
        console.log("send successful");
        console.log(info.messageId);
      });
    } catch (e) {
      console.log("Error", e);
    }
  });

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
