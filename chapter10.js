let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Busfahrt nach Plopsberg dauerte kaum zwei Stunden, doch für Christel fühlte es sich an wie die Reise in ein anderes Universum. Sie saß starr auf dem harten Kunstledersitz, ihren kleinen, abgewetzten Koffer fest zwischen den Knien eingeklemmt. Neben ihr verströmte Tante Paula eine ruhige, unaufgeregte Sicherheit, die Christel so nicht kannte. Als der Bus schließlich zischend an der Dorfkirche von Plopsberg hielt, schien selbst die Sonne hier heller zu sein als auf dem düsteren Hof des Großvaters Alfred. Das Pfarrhaus lag direkt neben dem Kirchplatz. Es war ein großes, hell verputztes Gebäude mit weit geöffneten Fenstern, aus denen der Duft von frisch gebackenem Hefekuchen und weichen Äpfeln drang. An der Tür wartete bereits Onkel Max. Er trug seine schwarze Soutane, doch sein Gesicht war weich, von Lachfalten durchzogen, und seine Augen strahlten eine tiefe Güte aus. Da bist du ja, Christel, sagte er mit einer tiefen, warmen Stimme und reichte ihr nicht etwa die Hand wie einem fremden Gast, sondern legte sie ihr sanft auf die Schulter. Herzlich willkommen in deinem neuen Zuhause. Hab keine Angst, mein Kind. Hier bist du sicher. Christel zuckte unwillkürlich zusammen. Sie war es gewohnt, dass Hände, die nach ihr griffen, entweder Arbeit forderten oder sie grob wegstießen. Sie senkte den Kopf und blickte schüchtern auf ihre staubigen Schuhe. Sie wartete auf die Befehle. Wo sind die Melkeimer? Wo ist der Besen? Was muss ich tun, um mein Brot zu verdienen? Doch nichts von alldem geschah. Paula nahm ihr sanft den Koffer ab und führte sie eine knarrende Holztreppe hinauf in ein kleines Zimmer unter dem Dach. Es gab ein sauberes Bett mit weißer Bettwäsche, einen kleinen Schreibtisch und ein Fenster, das den Blick auf den blühenden Pfarrgarten freigab. Das gehört ganz allein dir, sagte Paula leise. Als am Abend die Glocken der Kirche den Feierabend einläuteten, versammelten sich die drei in der gemütlichen Wohnstube zum Abendbrot. Der Tisch war reich gedeckt: frisches Brot, Butter, Schinken und eine große Schale mit Pflaumen. Christel saß kerzengerade auf ihrem Stuhl, die Hände im Schoß gefaltet, und wagte kaum zu atmen. Auf Alfreds Hof bedeutete das Abendbrot eine ständige Zuteilung von Härte und Bevorzugung, ein stummes Zittern vor dem Urteil des Patriarchen. Sie wartete darauf, dass Onkel Max das Messer hob, um das Brot nach Verdienst aufzuteilen. Doch der Pfarrer sprach nur ein kurzes, herzliches Tischgebet, blickte sie dann lächelnd an und schob ihr die große Platte entgegen. Greif zu, Christel. Iss, bis du satt bist. Und erzähl uns: Was liest du eigentlich am liebsten? Christel stockte. Sie sah von Max zu Paula. Niemand hatte sie je gefragt, was sie dachte, was sie fühlte oder was sie mochte. Auf dem Hof war sie das wertlose Mädchen gewesen, das nur funktionieren musste. Ihre Stimme war anfangs kaum mehr als ein heiseres Flüstern, als sie zugab, dass sie die wenigen Bücher in der Dorfschule regelrecht verschlungen hatte. Max nickte begeistert, und binnen weniger Minuten entspann sich ein Gespräch, bei dem Christel zum ersten Mal in ihrem Leben ausreden durfte. Niemand fiel ihr ins Wort. Niemand tadelte sie für ihre Meinung. Paula reichte ihr lächelnd ein weiteres Stück Brot, und Onkel Max hörte ihr zu, als wäre das, was das elfjährige Mädchen zu sagen hatte, von allergrößter Bedeutung. Als Christel später in dem weichen, sauberen Bett unter dem Dach lag, starrte sie an die Decke. Das Fenster stand einen Spalt breit offen, und die milde Nachtluft trug das Zirpen der Grillen herein. Kein Weinen von Gustav, keine schweren Schritte von Alfred, keine eisige Stille einer ausgebrannten Mutter. Zum ersten Mal seit so vielen Jahren spürte Christel, wie sich die steinerne Faust in ihrer Brust ein wenig öffnete. Eine Träne der Erleichterung rann ihr über die Wange und sickerte in das weiße Kissen. Sie war angekommen. Sie musste nicht mehr kämpfen, um zu existieren. Sie durfte einfach ein Kind sein.";
  utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  const maleVoiceNames = [
    "Microsoft Stefan",
    "Microsoft Christoph",
    "Google deutsch",
    "Yannick",
    "Markus",
  ];

  let selectedVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("de") &&
      maleVoiceNames.some((name) => voice.name.includes(name)),
  );

  if (!selectedVoice) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("de"));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.pitch = 0.75;
  utterance.rate = 0.88;

  window.speechSynthesis.speak(utterance);
}

function stoppeVorlesen() {
  window.speechSynthesis.cancel();
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () =>
    window.speechSynthesis.getVoices();
}
