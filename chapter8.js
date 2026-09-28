let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1951 begann mit einem trügerischen Frieden, doch der Sommer brachte eine unsichtbare, schleichende Angst über das Land. In den Zeitungen häuften sich die Berichte über eine tückische Krankheit, die wie ein Dieb in der Nacht vor allem Kinder und Jugendliche überfiel. Poliomyelitis. Kinderlähmung. Auf dem abgelegenen Hof sprach man anfangs nur mit gedämpfter Stimme darüber, als könne das bloße Aussprechen des Namens das Unheil herbeirufen. Man betete nach dem Abendbrot ein zusätzliches Vaterunser, suchte Schutz im Glauben, doch das Virus scherte sich nicht um Kruzifixe. Es traf Richard zuerst. Der inzwischen zehnjährige Junge, den der verstorbene Großvater Alfred bis zu seinem letzten Atemzug vergöttert und als unantastbaren Hofnachfolger herangezogen hatte, klagte an einem heißen Julinachmittag plötzlich über heftige Kopf- und Gliederschmerzen. Seine Beine, die sonst so flink über die Stoppelfelder gerannt waren, fühlten sich an wie Blei. Binnen weniger Stunden stieg das Fieber unaufhörlich, und als Luise am nächsten Morgen an sein Bett trat, schrie Richard vor Schmerz auf, sobald sie seine Beine nur berührte. Er konnte seine Zehen nicht mehr bewegen. Die Lähmung war da. Der herbeigerufene Landarzt brauchte nur einen Blick auf den Jungen zu werfen, bevor sein Gesicht aschgrau wurde. Polio, flüsterte er und trat einen Schritt zurück. Er muss sofort in die Isolierstation des Kreiskrankenhauses. Packen Sie seine Sachen. Jede Minute zählt. Für Luise brach in diesem Moment eine Welt zusammen. Richard, ihr Erstgeborener, das einzige Kind, das auf diesem Hof je Anerkennung erfahren hatte, wurde auf eine Trage geladen und von Männern in weißen Schutzanzügen fortgebracht. Doch die medizinische Katastrophe war nur der Anfang. Als Willi Tage später die ersten Formulare aus der Klinik in den Händen hielt, wich alle Farbe aus seinem Gesicht. Großvater Alfred hatte Krankenversicherungen zeitlebens für überflüssigen, neumodischen Teufelskram gehalten, ein echter Bauer stehe für sich selbst ein. Es gab keine Versicherung. Keine Absicherung. Nichts. Die Rechnungen für die Isolierstation, die Medikamente und die aufwendigen Behandlungen trafen den Hof wie Granateinschläge. Um die ersten Raten zu bezahlen, musste Willi schweren Herzens zwei der besten Milchkühe und ein Zuchtpferd unter Wert an einen Händler verkaufen. Der gerade erst mühsam erwirtschaftete kleine Wohlstand nach Alfreds Tod war mit einem Schlag vernichtet. Jede Mark, die der Hof durch den Verkauf von Korn und Milch einbrachte, floß augenblicklich auf das Konto der Klinik. Die finanzielle Not schnürte der Familie die Kehle zu. Luise veränderte sich in dieser Zeit vollkommen. Ihre alte, maschinelle Pflichterfüllung wich einer verzweifelten, fast wahnhaften Fixierung auf Richard. Sie verbrachte jede freie Minute im Bus oder zu Fuß auf dem Weg ins weit entfernte Krankenhaus, um an seinem Bett zu sitzen. Für die anderen Kinder hatte sie keine Augen mehr. Die zehnjährige Christel musste von heute auf morgen die Rolle der Mutter auf dem Hof übernehmen. Während Willi von früh bis spät auf den Feldern schuftete, um das Geld für Richards Rettung aufzubringen, stand Christel am riesigen Herd. Mit ihren kleinen Händen wusch sie die schweren Arbeitskleider der Knechte, kochte die Suppe für die Familie und kümmerte sich um die jüngeren Geschwister Sophie und den kleinen Gustav. Ihre eigenen Schulaufgaben blieben meist bis tief in die Nacht liegen, wenn die Öllampe schon fast erloschen war. Wenn Christel abends erschöpft in ihr Bett fiel, hörte sie das leise Weinen ihres Vaters aus der Wohnstube. Der unsichtbare Feind hatte den Hof nicht nur finanziell in den Ruin getrieben, er hatte das ohnehin brüchige Fundament der Familie endgültig zerschlagen.";
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
