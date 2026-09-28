let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Herbst des Jahres 2025 tauchte die Hügel rund um das Schieferhaus in ein unendliches, warmes Gold. Christel war inzwischen vierundachtzig Jahre alt. Wenn sie am Morgen in den Spiegel blickte, sah sie ein Gesicht, das tief gezeichnet war von den Linien eines langen, intensiv gelebten Lebens, von Lachfalten, Sorgenfalten und den Spuren unzähliger emotionaler Stürme. Doch ihre Augen besaßen noch immer jenen klaren, wachen Funken, den Onkel Max einst in der Bibliothek von Plopsberg entzündet hatte. Ihr Körper war müde geworden, das Gehen fiel ihr schwer, und das Herz schlug in einem langsameren, bedächtigen Takt. Sie spürte mit einer tiefen, unaufgeregten Gewissheit, dass ihre eigene Uhr langsam ablief. Das Schieferhaus war an diesem Oktoberwochenende erfüllt vom Leben. Ihre Tochter Paula, inzwischen selbst eine gestandene Frau im besten Alter, war zu Besuch, ebenso wie Sohn Thomas, der aus der Stadt angereist war. Auch die Enkelinnen, Paulas Zwillingsmädchen, die mittlerweile junge Frauen waren und studierten, saßen am großen Küchentisch. Das Haus roch nach frischem Kaffee, reifen Äpfeln und dem Holz des alten Kamins. Überall herrschte ein lebendiges Stimmengewirr, ein unbeschwertes Lachen und ein tiefes Gefühl des Zusammenhalts. Christel saß in ihrem großen Sessel am Fenster und beobachtete ihre Familie. Sie blickte auf ihre Enkelinnen, die voller Selbstvertrauen und Lebensfreude über ihre Zukunftspläne debattierten. In diesem Moment reiste Christels Geist noch einmal zurück in die tiefste Dunkelheit ihrer eigenen Vergangenheit. Sie sah sich als dreijähriges Mädchen in der kalten, staubigen Kammer unter der Treppe sitzen, weinend vor Hunger und Angst vor dem Zorn des Großvaters Alfred. Sie sah ihre Mutter Luise vor sich, die mit dem Schrubbertuch auf den Knien rutschte, starr und unfähig, ihr eigenes Kind zu trösten, weil sie selbst innerlich erfroren war. Was für ein unendlicher Kontrast lag zwischen jener Eiswüste von 1943 und diesem lichtdurchfluteten Zimmer von 2025. Paula bemerkte den fernen Blick ihrer Mutter. Sie löste sich aus dem Gespräch, trat an den Sessel heran und kniete sich sanft neben Christel. Sie nahm die schmale, von Altersflecken gezeichnete Hand ihrer Mutter und drückte sie zärtlich. Woran denkst du, Mama?, fragte sie mit einer Stimme, die so voller Wärme und Mitgefühl war, dass Christel das Herz aufging. Christel sah ihre Tochter an, strich ihr mit der freien Hand über die Wange und lächelte unter Tränen. Ich denke daran, wie reich ich bin, Paula, flüsterte sie mit brüchiger Stimme. Ich denke an Tante Paula und Onkel Max. Und ich denke an deinen Vater Konrad. Der Fluch ist gebrochen, mein Kind. Ihr müsst niemals in der Kälte frieren. Als der Abend hereinbrach und die Familie sich leise zurückzog, blieb Christel allein in der Stube sitzen. Die herbstliche Abendsonne warf lange, goldene Strahlen durch die Fensterscheiben und tauchte den Raum in ein himmlisches Licht. Christel schloss die Augen. Sie spürte keinen Schmerz, keine Angst vor dem, was kommen würde. Sie fühlte nur eine unermessliche, alles ausfüllende Dankbarkeit. Sie hatte ihre Ketten abgeworfen, sie hatte Medizin studiert, sie hatte Leben gerettet und vor allem: Sie hatte ein Nest aus bedingungsloser Liebe gebaut. Ihr Lebensziel war erreicht. Ihr Vermächtnis war gesichert. Als sie den Kopf tiefer in die Kissen sinken ließ und ihr Atem immer flacher wurde, sah sie am Horizont ein helles, warmes Licht, und in diesem Licht wartete Konrad auf sie, mit ausgestreckten Händen und jenem gütigen Lächeln, das sie einst gerettet hatte.";
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
