let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Sommer des Jahres 1952 legte sich wie eine bleierne Decke über den Hof, der unter der Last der Schulden und der Erschöpfung schier zerbrach. Richard lag nun schon das zweite Jahr im fernen Krankenhaus, und die Rechnungen fraßen den Ertrag der Felder auf, noch bevor das Korn überhaupt gedroschen war. Luise glich nur noch einem wandelnden Schatten, der stumm zwischen der Klinik und dem Herd pendelte. Inmitten dieser lähmenden Trostlosigkeit knarrte an einem heißen Augustnachmittag das Hoftor, und eine Gestalt betrat den Hofplatz, die Christel seit Jahren nicht mehr gesehen hatte: Tante Paula. Paula, Willis ältere Schwester, hatte den Hof einst im Alter von zwanzig Jahren gemeinsam mit ihrem Bruder Max verlassen, um der Tyrannei des Vaters Alfred zu entfliehen. Während Max Pfarrer geworden war, hatte Paula als Pfarrfräulein den Haushalt geführt und im Dorf eine Zuflucht für unzählige Kinder aufgebaut. Nun stand sie im staubigen Hof, den Blick fest auf das düstere Fachwerkhaus gerichtet. Sie brauchte nicht lange, um das Ausmaß der Katastrophe zu erfassen. Sie sah die eingefallenen Wangen ihres Bruders Willi, die leeren Augen von Luise und vor allem die elfjährige Christel, deren zierliche Schultern unter der Last des gesamten Haushalts und der Pflege der jüngeren Geschwister einzubrechen drohten. Beim Abendbrot, das aus einer kargen Wassersuppe und trockenem Brot bestand, sprach Paula das aus, was sich niemand zu sagen getraut hatte. Es geht so nicht weiter, Luise, sagte sie mit einer Stimme, die fest, aber unendlich warm war. Ihr geht hier alle vor die Hunde. Der Hof frisst euch auf, und für die Kinder bleibt keine Luft zum Atmen. Luise starrte starr auf ihren Teller, unfähig zu antworten, während Willi schwer seufzte. Paula wandte den Blick zu Christel, die schweigend den kleinen Gustav fütterte. Willi, Luise, begann Paula erneut und legte ihre Hand auf den Tisch, ich habe es mit Max besprochen. Wir haben im Pfarrhaus in Plopsberg Platz, und ein Maul mehr zu stopfen, das schaffen wir auch noch. Lasst Christel mit mir gehen. Sie kann dort zur Schule gehen, sie wird ein normales Leben haben, und ihr habt den Kopf frei, um euch um Richard und den Hof zu kümmern. Luise blickte langsam auf. In ihren ausgebrannten Augen flackerte für einen kurzen Moment ein Funke von Erleichterung, gemischt mit der bitteren Erkenntnis des eigenen Versagens. Sie nickte stumm. Sie hatte keine Kraft mehr zu kämpfen, weder gegen die Armut noch für ihre Tochter. Willi schluckte die Tränen hinunter und willigte ebenfalls ein. Christel saß regungslos da. Ihr Herz klopfte bis zum Hals. Sie blickte auf ihre Mutter, die sie kampflos weggab, und spürte den alten, vertrauten Schmerz der Ablehnung. Doch als sie in Tante Paulas Augen sah, Augen, die sie nicht übersahen, sondern mit tiefem Mitgefühl und echter Wärme anblickten, begriff die Elfjährige, dass dies kein Verstoßen war. Es war eine Rettung. Als sie am nächsten Morgen ihren kleinen Koffer mit den wenigen Kleidern packte, blickte sie ein letztes Mal auf die düstere Kammer unter der Treppe zurück. Sie stieg in den Bus nach Plopsberg an der Seite von Tante Paula, und zum ersten Mal seit Jahren spürte sie, wie der zentnerschwere Druck auf ihrer Brust langsam nachließ.";
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
