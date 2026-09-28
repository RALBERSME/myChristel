let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1968 war ein Jahr des Aufbegehrens und des radikalen Wandels in den großen Städten, doch für Christel und Konrad wurde es zum Jahr des stillen, tiefen Fundamentbaus. Sie heirateten an einem strahlenden Maitag in einer kleinen, jahrhundertealten Kapelle am Rande Frankfurts. Es gab keine rauschende Hochzeitsgesellschaft, keine hochmütigen Reden. An Christels Seite stand Tante Paula, die ein Tränen der Rührung aus den Augen wischte, und Konrads Familie, die das junge Paar mit offenen, herzlichen Armen aufnahm. Luise und die Geschwister waren der Feier ferngeblieben, der Brief mit der Einladung war unbeantwortet geblieben, verschlungen von dem eisigen Schweigen, das noch immer auf dem elterlichen Hof lastete. Doch Christel spürte an diesem Tag keine Bitterkeit mehr. Sie schaute Konrad in die Augen und wusste, dass sie ihre eigene Geschichte schrieb. Kurz nach der Hochzeit verließen die beiden frischgebackenen Ärzte die Großstadt. Sie hatten im ländlichen Hügelland, nicht weit von Konrads alter Heimat entfernt, ein großes, schiefergedecktes Haus erworben. Es war ein Gebäude mit Geschichte: Im Erdgeschoss richteten sie mit bescheidenen Mitteln, aber unendlich viel Liebe zum Detail eine Gemeinschaftspraxis ein. Konrad übernahm die Betreuung der Erwachsenen als Allgemeinmediziner, während Christel sich ihren größten Traum erfüllte: Sie wurde die erste niedergelassene Kinderärztin der gesamten Region. Ihre Praxis glich in nichts den sterilen, angstbefeuernden Arztzimmern ihrer eigenen Kindheit. Christel strich die Wände in warmen, hellen Farben, stellte kleine Holzspielzeuge auf und hängte Bilder auf, die den kleinen Patienten die Angst vor dem weißen Kittel nehmen sollten. Sie nahm sich Zeit. Wenn ein verängstigtes Kind die Praxis betrat, kniete sie sich, genau wie Onkel Max es einst bei ihr getan hatte, auf den Boden, um dem Kind auf Augenhöhe zu begegnen. Sie heilte nicht nur Fieber und Husten; sie verschenkte jene Zuwendung, Geborgenheit und Wärme, die sie selbst als kleines Mädchen so schmerzhaft vermisst hatte. Die Menschen im Umkreis spürten das, und schon nach wenigen Monaten war Christels Sprechzimmer das Herzstück des Dorfes. Der größte Wendepunkt dieses ereignisreichen Jahres kündigte sich jedoch im Spätherbst an. Am 12. November 1968, fast auf den Tag genau fünfundzwanzig Jahre nach ihrer eigenen, traumatischen Geburt im eisigen Sturm, setzten bei Christel die Wehen ein. Draußen vor den Fenstern des Schieferhauses tanzten die ersten leisen Schneeflocken, doch drinnen brannte ein wärmendes Feuer im Kamin. Die Geburt verlief ohne Komplikationen. Konrad wich keine Sekunde von ihrer Seite, hielt ihre Hand und sprach ihr mit seiner tiefen, ruhigen Stimme Mut zu. Als am späten Abend der erste, kräftige Schrei das Zimmer erfüllte, brach eine Welle der puren Erlösung über Christel herein. Es war ein gesundes, kräftiges Mädchen. Konrad legte das neugeborene, noch feuchte Bündel behutsam auf Christels nackte Brust. Christel hielt den Atem an. Sie blickte in das winzige, vollkommen friedliche Gesicht ihrer Tochter und spürte, wie eine tief sitzende, uralte Wunde in ihrer Seele augenblicklich zu heilen begann. Sie erinnerte sich an die Geschichten über ihre eigene Mutter Luise, die nach der Geburt starr und erschöpft weggesehen hatte, unfähig, ihr Kind zu berühren. Sie erinnerte sich an die Kälte des Großvaters Alfred, der sie als wertloses Mädchen abgestempelt hatte. Christel schlang ihre Arme um ihr Baby, presste es ganz fest an ihr schlagendes Herz und ließ den Tränen der reinen, bedingungslosen Liebe freien Lauf. Paula, flüsterte sie, und ihre Stimme brach vor Rührung. Du heißt Paula. Nach der Frau, die mir das Leben geschenkt hat, als ich fast erfror. Tante Paula, die im Nebenzimmer gewartet hatte, trat leise herein. Als sie ihren Namen hörte und sah, wie Christel ihr Kind mit einer unendlichen, instinktiven Wärme wiegte, sank die alte Dame an Christels Bett auf die Knie und weinte still vor Glück. In dieser Nacht wurde im Schieferhaus nicht nur ein neues Leben geboren. In dieser Nacht wurde der generationenübergreifende Fluch der emotionalen Kälte endgültig und für immer zerschlagen. Christel hatte ihr Nest aus Liebe gebaut, und es war bereit, all ihre Kinder für immer zu beschützen.";
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
