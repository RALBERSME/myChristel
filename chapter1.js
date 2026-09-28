let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Staub der Landstraße schmeckte nach Abschied und verbrannter Erde, als die Kutsche knarrend vor dem mächtigen Hoftor zum Stehen kam. Luise presste die Hände im Schoß so fest zusammen, dass ihre Knöchel weiß hervortraten. Sie war vierunddreißig Jahre alt, doch wenn sie in den kleinen, gesprungenen Handspiegel blickte, den sie in ihrer Schürzentasche trug, sah sie eine Frau, deren Jugend spurlos im harten Boden der Pflicht versickert war. Seit ihrem neunten Lebensjahr, seit jenem eiskalten Novembertag, an dem man ihre Mutter zu Grabe getragen hatte, hatte Luise nicht mehr durchgeatmet. Da war der vierzig Jahre ältere Vater gewesen, ein stummer, fordernder Mann, und da waren die sechs jüngeren Geschwister, deren Hunger, Tränen und schmutzige Wäsche ihr Leben bestimmt hatten. Mit vierzehn hatte sie die Dorfschule verlassen müssen, gerade als der Lehrer gesagt hatte, sie habe den schärfsten Verstand der ganzen Klasse und das Zeug zur Ärztin. Stattdessen gab es Melkeimer, schreiende Säuglinge und ein tiefes, inneres Ausgebranntsein, das sich wie graue Asche über ihre Seele gelegt hatte. Und doch war da Willi gewesen. Als er vor zwei Jahren auf dem Kirchenbazar zum ersten Mal seine Hand nach ihr ausstreckte, um sie zum Tanz aufzufordern, hatte Luise geglaubt, ein Stück Himmel zu sehen. Willi sang, wenn er die Pferde anspannte, und er lachte über Dinge, die Luise längst vergessen hatte. Selbst als er sich kurz darauf bei einem schweren Sturz von der Heubühne die Schulter so fatal verletzte, dass der Knochen nie wieder richtig zusammenwuchs und er immer wieder wochenlang im fernen Kreiskrankenhaus lag, blieb seine Fröhlichkeit ihr Anker. Sie liebte seine Leichtigkeit, vielleicht, weil sie selbst so unendlich schwer war. Wir sind da, Luise, sagte Willi jetzt leise und legte seine gesunde, linke Hand auf ihre. Seine Stimme zitterte ein wenig. Er blickte hinauf zu dem mächtigen, dreistöckigen Fachwerkhaus, das wie eine Trutzburg inmitten der hügeligen Landschaft lag. Es war der Hof seines Vaters. Alfreds Hof. Der Empfang war nicht von Glockenläuten oder wehenden Bändern geprägt. Als Luise den Fuß auf das Kopfsteinpflaster des Innenhofs setzte, öffnete sich die schwere Eichentür des Hauphauses. Alfred schritt heraus. Geboren im Jahre 1880, trug der fast sechzigjährige Patriarch die Härte einer vergangenen Epoche im Gesicht. Seine Augen waren zwei kalte Kieselsteine, sein Rücken kerzengerade, ungebeugt von der Last der Jahre. Für Alfred gab es keine Menschen; es gab nur den Hof, das Vieh und den Ertrag. Alles andere war Ausschuss. Hinter ihm traten die Knechte und Mägde aus dem Stall, die Schaufeln und Mistgabeln noch in den Händen, angelockt von der Ankunft der neuen Bäuerin. Alfred blieb auf der obersten Stufe der Freitreppe stehen und sah an Luise herab, als wäre sie ein schlecht gewachsenes Kalb, das man ihm auf dem Markt andrehen wollte. Willi trat vor, die verletzte rechte Schulter unnatürlich nach unten gezogen. Vater, begann er mit brüchiger Stimme, das ist Luise. Meine Frau. Alfred würdigte seine Schwiegertochter keines Blickes. Er sah nur Willi an, fixierte den hängenden Arm seines Sohnes und spuckte verächtlich auf den Boden. Ein Krüppel bringt mir ein altes Weib ins Haus, sagte der alte Mann, und seine Stimme hallte durch den weiten Hof, so dass jeder der Knechte es hören konnte. Du kleiner, dummer Junge. Glaubst du, mit Singen und Tanzen kriegst du die Felder bestellt? Du hast dir eine geholt, die schon verbraucht ist, bevor sie den ersten Eimer getragen hat. Ein unterdrücktes Kichern war unter den Knechten zu hören. Willi lief rot an, senkte den Kopf und schwieg. Kein Wort der Verteidigung, kein schützender Schritt vor seine Frau. In diesem Moment brach in Luise das letzte Fünkchen der Hoffnung zusammen, das sie sich mühsam bewahrt hatte. Sie blickte auf ihren frisch vermählten Ehemann und sah nur einen verängstigten Jungen. Nun wandte Alfred den Blick langsam zu Luise. Seine Augen wanderten über ihr schlichtes, hochgeschlossenes Hochzeitskleid, über die vom harten Arbeiten gezeichneten, rauen Hände. „Die taugt nichts für den Hof“, stellte er kühl fest, laut genug, dass es wie ein Urteil über den gesamten Hofplatz wehte. Sieht aus, als stünde sie schon mit einer Hälfte im Grab. . Geh in die Küche, Weib. Der Herd ist kalt und die Männer haben Hunger. Ohne eine Antwort abzuwarten, drehte sich der Patriarch um und ließ die schwere Tür ins Schloss fallen. Luise stand regungslos im Hof. Die Septemberonne von 1939 brannte heiß auf ihrem Nacken, doch in ihrem Inneren war es eisig geworden. Sie sah auf die weiten, unbarmherzigen Felder des Hofes und wusste, dass sie ihre Ketten nicht abgeworfen hatte. Sie hatte lediglich den Herrn gewechselt.";
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
