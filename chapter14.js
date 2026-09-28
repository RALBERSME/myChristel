let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Frühling des Jahres 1961 kam mit einer Explosion von Farben und Düften nach Plopsberg. Für Christel war dieser Mai jedoch nicht nur der Beginn einer neuen Jahreszeit, sondern der alles entscheidende Wendepunkt ihres Lebens. Die Wochen der schriftlichen und mündlichen Prüfungen lagen hinter ihr, Wochen, in denen sie bis tief in die Nacht beim Schein der Schreibtischlampe über den dicken Büchern gesessen hatte, während Tante Paula ihr leise eine Tasse heißen Lindenblütentee hineintrug. Nun hielt sie es in den Händen: das Reifezeugnis. Sie hatte das Abitur nicht nur bestanden, sondern als Jahrgangsbeste der gesamten Kreisstadt abgeschlossen. Am Abend nach der feierlichen Zeugnisübergabe war das Pfarrhaus in Plopsberg von einer feierlichen, fast andächtigen Stimmung erfüllt. Onkel Max, der inzwischen sehr hinfällig geworden war und das Haus kaum noch verlassen konnte, saß in seinem großen Ohrensessel in der Bibliothek. Seine Beine waren in eine schwere Wolldecke gehüllt, aber als Christel die Stube betrat und ihm das Dokument mit dem großen, runden Stempel auf den Schoß legte, leuchteten seine alten Augen auf wie zwei Sterne. Er fuhr mit seinen zitternden, von Altersflecken gezeichneten Fingern über die Notenreihen. Sehr gut. Sehr gut“, murmelte er, und seine Stimme brach vor Rührung. Er sah auf und blickte Christel tief in die Augen. Als du vor neun Jahren als kleines, verängstigtes Mädchen durch unsere Tür getreten bist, mein Kind, da war deine Seele wie ein zertretener Acker. Aber schau dich heute an. Du hast bewiesen, dass der Geist und die Liebe stärker sind als jede Kälte. Ich bin so unendlich stolz auf dich, Christel. Tante Paula brachte ein kleines Tablett mit drei Gläsern Holunderwein herein. Ihre Augen waren feucht, als sie Christel fest an sich drückte. Es war eine Umarmung, die all das nachholte, was Luise ihrer Tochter verwehrt hatte, voller Wärme, Stolz und bedingungsloser Anerkennung. Beim gemeinsamen Anstoßen wurde kaum gesprochen; die Dankbarkeit war zu groß, um sie in einfache Worte zu fassen. Christel wusste, dass jede gute Note auf diesem Zeugnis ein Geschenk dieser beiden Menschen war, die an sie geglaubt hatten, als sie selbst es noch nicht konnte. Später in der Nacht, als die alten Leute bereits schliefen, ging Christel noch einmal hinaus in den Pfarrgarten. Die Mainacht war lau, und der Duft von blühendem Flieder lag schwer in der Luft. Morgen früh würde der Bus sie abholen. Sie würde Plopsberg verlassen, um in Frankfurt am Main ihr Medizinstudium zu beginnen. Ihr kleiner Koffer stand bereits gepackt im Flur. Neben den wenigen Kleidern enthielt er vor allem die medizinischen Fachbücher, die Onkel Max ihr geschenkt hatte. Sie ging hinunter zum alten Zaun und blickte in die Richtung, in der viele Kilometer entfernt der Hof ihres Großvaters Alfred lag. Sie spürte keinen Zorn mehr, wenn sie an die dunkle Kammer unter der Treppe oder den zerbrochenen Wasserkrug dachte. Sie spürte nur noch eine tiefe, unerschütterliche Gewissheit. Morgen würde sie nicht nur für sich selbst in den Hörsaal treten. Sie würde dort für ihre Mutter Luise sitzen, deren Leben im Staub der Pflichterfüllung erstickt worden war. Sie würde für ihren Vater Willi studieren, dessen Lieder auf dem Hof verstummt waren. Als sie wieder ins Haus ging und die Treppe zu ihrem kleinen Dachzimmer hinaufstieg, strich sie sanft über das alte Holz des Geländers. Sie war bereit für die große Stadt, bereit für die Anatomiehörsäle und die langen Nächte des Lernens. Die Reifeprüfung des Lebens hatte sie längst bestanden, nun wartete die Welt auf sie.";
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
