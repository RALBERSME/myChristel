let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1945 neigte sich dem Ende zu, und während in den Städten die Trümmer des Krieges weggeräumt wurden und eine erschütterte Welt mühsam versuchte, neu zu atmen, blieb der Hof unter Alfreds Herrschaft eine unberührte Insel der alten Zeit. Kein Soldat hatte die Felder betreten, kein Bombenlärm die Nächte zerrissen. Und doch lag eine Zerstörung über diesem Haus, die man nicht in Schutt und Asche messen konnte, sondern in der lautlosen Demontage menschlicher Seelen. Mitten in diesem geschichtlichen Wendepunkt kam das dritte Kind zur Welt. Wieder ein Mädchen. Sie nannten sie Sophie. Doch die Geburt löste auf dem Hof kaum mehr aus als ein pflichtbewusstes Nicken. Luise ertrug die Niederkunft fast ohne einen Laut. Ihr Körper war zu einer Maschine geworden, die Schmerz und Erschöpfung einfach wegarbeitete, ohne dass ein Jammern ihre Lippen verließ. Als man ihr das Neugeborene reichte, blickte sie in das Gesicht der kleinen Sophie, doch in ihren Augen spiegelte sich nur eine unendliche, graue Müdigkeit. Sie legte das Kind in die hölzerne Wiege und stand am nächsten Tag wieder am Herd. Die mütterliche Quelle war versiegt, nicht aus Bosheit, sondern weil in Luises eigenem Herzen nichts mehr übrig war, das sie hätte verschenken können. Sie funktionierte, sie fütterte, sie wusch, aber sie liebte nicht. Es war ein reines Überleben im Takt der Pflicht. Willi flüchtete sich in diesen Monaten immer häufiger in seine eigene Welt. Seine Schulter entzündete sich in der feuchten Kälte des Spätherbstes so schwer, dass er wieder wochenlang im fernen Kreiskrankenhaus lag. Wenn er auf dem Hof war, glich er einem Geist. Er sang nicht mehr, und seine Schritte waren leise geworden, um den Zorn seines Vaters nicht heraufzubeschwören. Das Krankenhaus war für ihn zu einer seltsamen Zuflucht geworden, ein Ort, an dem niemand schrie, an dem er im sauberen Bett liegen durfte und an dem der unbarmherzige Blick Alfreds ihn nicht erreichen konnte. In dieser eisigen Atmosphäre wuchsen die Kinder heran. Der vierjährige Richard genoss nach wie vor den exklusiven Schutz des Großvaters. Er bekam das beste Stück Fleisch, durfte auf Alfreds Knien sitzen und lernte schon früh, mit kleiner Peitsche nach den Hühnern zu schlagen, ganz der zukünftige Herr. Die kleine Christel, nun zwei Jahre alt, beobachtete das Geschehen aus den dunklen Ecken der Wohnstube. Sie war ein stilles, aufmerksames Kind mit großen, forschenden Augen. Schon jetzt spürte sie die unsichtbare Grenze, die sie von ihrem Bruder trennte. Während Richard gefördert wurde, erntete Christel vom Großvater nur harte Worte oder wurde schlicht übersehen. Wenn sie hinfiel und weinte, hob Luise sie zwar auf, aber ohne ein tröstendes Wort, ohne sie an sich zu drücken. Christel lernte schnell, ihre Tränen hinunterzuschlucken. Sie flüchtete sich in ein trotziges Schweigen, zog sich unter den schweren Eichentisch zurück und baute sich dort aus Holzstücken eine eigene, kleine Welt, in der es keine strengen Schritte und keine kalten Blicke gab. Das neugeborene Baby Sophie hingegen schien schon in der Wiege zu spüren, dass man auf diesem Hof um Liebe betteln musste. Je älter sie in diesem Jahr wurde, desto mehr suchte sie mit ihren Augen nach dem mächtigen Großvater. Wenn Alfred die Stube betrat, begann das kleine Mädchen zu strampeln und zu glucksen. Es war ein instinktiver Überlebensdrang: Während Christel sich mit Trotz panzerte, wählte Sophie den Weg der absoluten Anpassung. Sie wollte die perfekte, folgsame Enkelin sein, die Alfred-Mama, die dem Patriarchen jeden Wunsch von den Augen ablas, nur um ein einziges Mal ein anerkennendes Nicken zu ernten. So lebte die Familie im Winter 1945 nebeneinander her. Das Haus war warm vom Kachelofen, doch zwischen den Menschen zog ein Frost durch die Räume, den keine Decke wärmen konnte. Das Schweigen in den Wiegen der Mädchen war das Fundament, auf dem ihre Kindheit gebaut wurde, eine Kindheit, in der man zwar satt wurde, aber innerlich erfror.";
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
