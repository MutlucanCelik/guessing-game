"use strict";

let puan = 100;
let highScore = 0;

/*
Bilgisayar tarafından üretilen sayı ve bilgi vermek amacıyla kullanılan p etiketimiz çok kullanıldığından dolayı
bir değişkene atadık.
*/
let guessNumber = Math.floor(Math.random() * 20 + 1);
let gameInfo = document.querySelector(".content__info");
document.querySelector(".puan").textContent = puan;

document.querySelector(".guess-conteiner__card-back-content").textContent =
  guessNumber;

document.querySelector(".content__check").addEventListener("click", () => {
  let inp = Number(document.querySelector(".content__input").value);

  if (inp === guessNumber) {
    document.querySelector("body").style.background = "#49be25";
    document.querySelector(".guess-conteiner__cards").style.cssText =
      "transform:rotateY(180deg)";
    document.querySelector(".content__input").style.cssText =
      "background-color:#49be25;color:#fff";
    document.querySelector(".content__reset").style.cssText =
      "background-color:#49be25;color:#fff";
    document.querySelector(".header__game-name").textContent =
      " 🥳 Tebrikler !!! 🥳";
    gameInfo.textContent = "🎉 Tebrikler bildin";
    if (puan > highScore) {
      highScore = puan;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".content__check").style.display = "none";
  } else if (inp !== guessNumber) {
    puan -= 10;
    document.querySelector(".puan").textContent = puan;

    //Kullanıcıyı yönlendirmek amacıyla yapılan tahminin tutulan sayıya yakınlık derecesi hakkında bilgi verdik.
    inp > guessNumber
      ? (gameInfo.textContent = "📈 Tahmini azaltman gerek.")
      : (gameInfo.textContent = "📉 Tahmini arttırman gerek.");

    if (puan === 0) {
      //Kullanıcının puanı bittiğinde bilgisayar tarafından tutulan sayıyı gösterdik.
      document.querySelector(".guess-conteiner__cards").style.cssText =
        "transform:rotateY(180deg)";

      gameInfo.textContent = "😥 Malesef Kaybettin.";
      document.querySelector(".content__check").style.display = "none";
    }
  }
});

document.querySelector(".content__reset").addEventListener("click", () => {
  document.querySelector(".guess-conteiner__cards").style.cssText =
    "transform:rotateY(360deg)";
  gameInfo.textContent = "😎 1 ile 20 arasında sayı tuttum tahmin et bakalım.";
  document.querySelector(".content__input").style.cssText =
    "background-color:#201f20;color:#fff";
  document.querySelector(".content__reset").style.cssText =
    "background-color:#201f20;color:#fff";
  document.querySelector(".content__check").style.display = "inline-block";
  document.querySelector("body").style.background = "#201f20";
  document.querySelector(".header__game-name").textContent =
    "Numaramı Tahmin Et !";
  puan = 100;
  document.querySelector(".puan").textContent = puan;

  //Oyunu sıfırladığımızda kart dönene kadar bilgisayarın sayı üretmesini engelledik (1 saniye)
  setTimeout(() => {
    guessNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector(".guess-conteiner__card-back-content").textContent =
      guessNumber;
  }, 1000);
});
