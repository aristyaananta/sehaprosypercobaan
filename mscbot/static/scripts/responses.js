function getBotResponse(input) {
  //rock paper scissors
  if (input == "batu") {
    return "kertas";
  } else if (input == "kertas") {
    return "gunting";
  } else if (input == "gunting") {
    return "batu";
  }

  // Simple responses
  if (input == "Mulai") {
    return "Halooo… 🤗🙌<br/>Kenalin nama aku GiBot,<br/>pemandu kalian hihi<br/><br/>SEHAPROSY (Sexual Harassment Protection) adalah sebuah website yang akan memberikan edukasi mengenai cara untuk melindungi diri dari pelecehan seksual serta memberikan penanganan pelecehan seksual di kalangan remaja secara daring (online) sehingga korban lebih berani mengungkapkan perasaan serta permasalahan yang dialaminya. Oiyaaa, selain informasi di sini juga ada fitur menarik yang harus dicoba! <br/><br/>Terima kasih! ✌🏻😁";
  } else if (input.indexOf("buat") >= 0) {
    return "Pembuat aku adalah Aristya dan Ananta";
  } else if (input.indexOf("cipta") >= 0) {
    return "Pencipta aku adalah Aristya dan Ananta";
  } else if (input.indexOf("Aku cinta Sehaprosy") >= 0) {
    return "Aku juga!";
  } else {
    return "Maaf aku gak ngerti, coba kata kunci lain ya";
  }
}
