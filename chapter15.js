let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das unaufhörliche Fauchen der Dampfloks und das tosende Stimmengewirr in der monumentalen Bahnhofshalle von Frankfurt am Main empfingen Christel wie ein physischer Schlag. Als sie im Spätherbst 1961 aus dem Zug stieg, umklammerte sie den Griff ihres alten Koffers so fest, dass ihre Finger schmerzten. Die Großstadt war laut, dreckig und atemlos, ein absoluter Gegenentwurf zur ländlichen Idylle in Plopsberg. Überall eilten Menschen in eleganten Mänteln an ihr vorbei, Autos hupten auf den breiten Straßen, und der graue Asphalt schien den Staub der Nachkriegsmoderne einzuatmen. Christel fühlte sich augenblicklich winzig, verloren und von einer tiefen, kalten Einsamkeit ergriffen. Ihr neues Zuhause war ein karges, winziges Mansardenzimmer in der Nähe der Universität. Es roch nach Bohnerwachs und dem kalten Rauch des Vormieters. Außer einem schmalen Bett, einem wackeligen Holztisch und einem kleinen Waschbecken gab es nichts. In den ersten Wochen des Semesters fraß die Anonymität der Großstadt Christels Zuversicht auf. Wenn sie im riesigen, vollbesetzten Anatomiehörsaal saß, umgeben von Hunderten von Studenten, meist jungen Männern aus gutem Hause, die mit Fachbegriffen um sich warfen, schnürte die alte Angst ihr wieder die Kehle zu. Was suche ich hier?, flüsterte eine dunkle Stimme in ihrem Inneren. Ich bin doch nur das ungewollte Bauernmädchen vom Hof. Die Anforderungen waren gigantisch, der Stoff erdrückend, und die Professoren behandelten die wenigen Frauen im Studium mit offener Herablassung. Abends, wenn der Hunger sie plagte und das Geld für ein warmes Essen in der Mensa nicht reichte, saß sie frierend an ihrem kleinen Tisch und lernte beim Schein einer nackten Glühbirne lateinische Vokabeln, bis ihr die Augen brannten. Ihre einzige Rettung in dieser schweren Anfangszeit waren die Briefe aus Plopsberg. Zweimal in der Woche schrieb Tante Paula. Die Zeilen rochen nach Heimat, nach dem vertrauten Linoleum der Pfarrküche und nach bedingungsloser Liebe. Paula schickte ihr getrocknete Apfelringe, ein paar mühsam ersparte Markstücke und immer wieder Worte des Trostes: Lass dich nicht unterkriegen, mein kluges Mädchen. Du bist für Größeres bestimmt als die Enge, aus der du stammst. Wir beten jeden Tag für dich. Eines Nachts, als der Regen unbarmherzig gegen das kleine Dachfenster peitschte und die Anatomiezeichnungen vor ihren Augen verschwammen, packte Christel das Heimweh so heftig, dass sie den Koffer bereits wieder unter dem Bett hervorholen wollte. Sie sehnte sich nach der warmen Stube von Onkel Max, nach dem Gefühl, einfach beschützt zu sein. Doch als sie ein Bild ihrer Mutter Luise zur Hand nahm, das sie heimlich aus einem alten Familienalbum eingepackt hatte, hielt sie inne. Sie blickte in die leeren, ausgebrannten Augen der Frau, die niemals eine Chance gehabt hatte. In diesem Moment kehrte der alte, eiserne Trotz in Christels Brust zurück, jene Kraft, die sie als dreijähriges Kind in der dunklen Kammer unter der Treppe gerettet hatte. Sie legte das Foto behutsam auf den Tisch, schlug das schwere Lehrbuch wieder auf und las entschlossen weiter. Sie würde nicht aufgeben. Nicht hier, nicht jetzt. Frankfurt mochte kalt und fremd sein, aber Christel hatte gelernt, im Frost zu überleben. Sie würde diese Prüfungen bestehen, für sich selbst und für all die Frauen ihrer Familie, die niemals eine eigene Stimme haben durften.";
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
