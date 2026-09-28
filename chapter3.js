let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1941 brachte eine Veränderung auf den Hof, die Luises ohnehin wundgescheuerte Seele vor eine ganz neue, schmerzhafte Zerreißprobe stellte. Mitten im Sommer, als die Hitze schwer auf den Schindeldächern lag, wurde ihr erstes Kind geboren. Ein Junge. Sie nannten ihn Richard. In Luises mattem Gesicht leuchtete für wenige Tage ein zarter Schimmer von mütterlichem Stolz auf, doch der Frieden währte nicht länger als der Bruchteil eines Atemzugs. Alfred, der Patriarch, betrat die Wohnstube nicht wie ein Großvater, der sein Enkelkind begrüßen will, sondern wie ein Feldherr, der eine neue Festung besichtigt. Als er den kräftig schreienden Säugling sah, hoben sich seine Mundwinkel zu einem triumphierenden Lächeln. Das ist er, verkündete er mit donnernder Stimme, während die Hebamme ehrfürchtig zurückwich. Der zukünftige Hofnachfolger. Ein echter Bauer. Der wird dieses Land einmal regieren. Von diesem Moment an wurde Richard von Alfred förmlich beschlagnahmt. Der alte Mann bestimmte, wann das Kind gefüttert, wie es gewickelt und wo es hingelegt wurde. Luise wurde zur bloßen Amme degradiert. Wenn sie ihren Sohn an sich drücken oder ein Wiegenlied singen wollte, stand Alfred oft im Türrahmen, die Hände hinter dem Rücken verschränkt. Verhätschmuckel mir den Jungen nicht mit deinem weinerlichen Getue, herrschte er sie an. Der braucht Härte, keine Sentimentalitäten. Willi, der gerade wieder aus dem Krankenhaus entlassen worden war und mit den Tränen kämpfte, als er seinen Erstgeborenen sah, wagte es nicht, seinem Vater zu widersprechen. Richard wurde im Hause wie ein kleiner Gott behandelt, von Alfred vergöttert und mit Privilegien überschüttet, während Luise das Herz blutete, weil sie ihrem eigenen Kind nicht die Nähe geben durfte, die sie so dringend geben wollte. Zwei Jahre später, im Spätherbst 1943, kündigte sich das zweite Kind an. Die Welt draußen stand im Flammen des Zweiten Weltkriegs, doch auf dem abgelegenen, tiefkatholischen Hof merkte man davon nur wenig, außer, dass die Arbeit durch den Mangel an jungen Knechten noch erdrückender wurde. Luises Schwangerschaft war von Anfang an ein einziges Martyrium. Sie war dünn geworden, ihre Haut blass und fahl, gezeichnet von der unaufhörlichen Feldarbeit und der seelischen Isolation. Als im November die Wehen einsetzten, zog ein schwerer, eisiger Sturm über das Land. Die Geburt wurde zu einem Albtraum, der Stunden andauerte. Luises Körper, vollkommen ausgebrannt von den Jahren der Entbehrung, hatte keine Kraft mehr. Das Blut floss unaufhörlich, das Laken färbte sich dunkelrot, und die Hebamme verlor im flackernden Schein der Petroleumlampe die Nerven. Wir verlieren sie, wenn das Kind nicht bald kommt!, rief sie verzweifelt durch den Raum. Willi kniete im Flur vor dem Kruzifix und betete weinend den Rosenkranz, unfähig, einen klaren Gedanken zu fassen. Als das Kind schließlich mit einer letzten, verzweifelten Presswehe auf die Welt kam, war es totenstill im Raum. Kein Schrei. Nichts. Luise, die am Rande der Bewusstlosigkeit schwebte, sah nur das blasse, reglose Bündel in den Händen der Hebamme. Es ist tot, dachte sie mit einer dumpfen, lähmenden Gewissheit. Es ist besser so. Dieses Haus frisst uns alle. Sie schloss die Augen und war bereit, einfach hinüberzugleiten, dorthin, wo ihre Mutter seit fünfundzwanzig Jahren auf sie wartete. Doch die Hebamme gab nicht auf. Sie rieb den winzigen Rücken des Mädchens mit kaltem Brunnenwasser ab, schlug ihm sanft auf das Gesäß, und plötzlich durchschnitt ein dünner, rasselnder Schrei die Stille. Ein Mädchen. Christel. Luise schlug mühsam die Augen auf. Ihr Herz machte einen winzigen, zaghaften Sprung, als man ihr das feuchte, zitternde Bündel auf die Brust legte. Es lebte. Doch die Tür zum Schlafzimmer flog auf und Alfred trat herein. Er sah nicht auf die entkräftete, fast sterbende Mutter. Sein Blick fiel nur auf das Neugeborene. Ein Mädchen?, fragte er, und seine Stimme triefte vor eiskalter Verachtung. Er spuckte fast vor das Bett. Ein zweites Maul, das nichts einbringt als Arbeit und Aussteuer. Die taugt nichts für die Zukunft. Ohne ein weiteres Wort drehte er sich um und ließ Luise mit dem Neugeborenen allein. Luise presste die kleine Christel an ihre Brust. Sie sah in das winzige, zerknautschte Gesicht ihrer Tochter und spürte eine tiefe, bittere Traurigkeit. Sie schwor sich in dieser Nacht, dieses Kind zu beschützen, doch als sie am nächsten Morgen versuchte aufzustehen und ihre Glieder wie Blei waren, spürte sie, dass die emotionale Kälte des Hofes bereits begonnen hatte, auch ihre letzte Kraft aufzuzehren.";
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
