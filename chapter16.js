let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1964 wirbelte die Republik auf. Der Geist des Aufbruchs lag in der Luft, doch im Städtischen Krankenhaus Frankfurt, wo Christel inzwischen ihre ersten klinischen Semester absolvierte, herrschte nach wie vor der unbarmherzige, hierarchische Ton der alten Garde. Der Alltag als angehende Medizinerin war ein zermürbender Marathon aus Visiten, Nachtwachen und dem ständigen Druck, keine Schwäche zeigen zu dürfen. Die Professoren führten das Regiment mit eiserner Hand, und für die Sorgen oder Ängste der Patienten blieb im kühlen, weiß gefliesten Klinikgetriebe kaum Platz. Christel funktionierte, doch tief in ihrem Inneren spürte sie, wie die Kälte des Systems an ihrer mühsam aufgebauten Empathie zu nagen begann. Alles änderte sich an einem verregneten Novemberabend auf der inneren Station. Die Betten waren bis auf den letzten Platz belegt, das Personal unterbesetzt, und Christel stand kurz vor dem Zusammenbruch, als sie die Blutproben der Neuzugänge sortierte. Inmitten dieses Chaos fiel ihr Blick auf einen jungen Mann im weißen Kittel, der am Bett einer älteren, sichtlich verängstigten Patientin saß. Er hielt ihre zitternde Hand, sprach mit einer tiefen, unaufgeregten Stimme auf sie ein und hörte ihr einfach zu, so, als gäbe es in diesem Moment keinen Zeitdruck und keine lauten Stationsflure. Sein Name war Konrad. Er war ein paar Semester weiter als sie, stammte aus einer bodenständigen Handwerkerfamilie aus dem Spessart und wollte Allgemeinmediziner werden. Als er aufblickte und Christels erschöpften Blick bemerkte, schenkte er ihr ein warmes, ehrliches Lächeln, das die sterile Stationsatmosphäre augenblicklich durchbrach. Komm, sagte er leise, als die Patientin eingeschlafen war, du siehst aus, als könntest du einen Kaffee vertragen. In der kargen Stationsküche, beim fahlen Licht einer Neonröhre und dem bitteren Geschmack von billigem Filterkaffee, sprachen sie zum ersten Mal miteinander. Konrad faszinierte Christel vom ersten Augenblick an. Er besaß keine der arroganten Attitüden der Professorensöhne aus den Hörsälen. Er war ruhig, geerdet und strahlte eine tiefe, unverrückbare Empathie für die Menschen aus. In den folgenden Wochen wurden die gemeinsamen Kaffeepausen und nächtlichen Spaziergänge nach den Schichten zu Christels wichtigstem Anker im stürmischen Großstadtleben. An einem eiskalten Dezemberabend, als sie gemeinsam am Mainufer entlanggingen und der Wind die Schneeflocken vor sich hertrieb, brach Christel ihr jahrelanges Schweigen. Angespornt von Konrads ehrlicher, wertfreier Zuwendung erzählte sie ihm zum ersten Mal alles. Sie sprach von der Tyrannei des Großvaters Alfred, von dem traumatischen Sturz ihres Vaters Willi, von der schrecklichen Kammer unter der Treppe und von der tiefen, unbarmherzigen Eiswüste, in die ihre Mutter Luise sich zurückgezogen hatte. Sie weinte, und die Tränen gefroren fast auf ihren Wangen. Konrad blieb stehen. Er zog sie nicht grob an sich, sondern legte seine Arme wie ein schützender Wall um ihre zierlichen Schultern. Er hielt sie fest, gab ihr den Raum, all den aufgestauten Schmerz der vergangenen Jahre herauszulassen, und flüsterte in ihr Haar: Du bist nicht mehr allein in dieser Kälte, Christel. Ich bin hier. Und ich gehe nicht weg. In dieser Winternacht spürte Christel zum ersten Mal, dass ein Mann nicht dominant, fordernd oder schwach sein musste. Konrad war stark, weil er gütig war. Er wurde zu ihrem Fels in der Brandung, zu dem Menschen, der ihr zeigte, dass Liebe kein Tauschgeschäft auf Leistungsbasis war, sondern ein bedingungsloses Fundament, auf dem man gemeinsam eine ganz neue, warme Welt aufbauen konnte.";
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
