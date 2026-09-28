let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1985 atmete den Geist einer neuen Zeit. Im schiefergedeckten Haus am Rande des Spessarts war Leben eingekehrt: Die siebzehnjährige Paula entwickelte sich zu einer klugen, tiefgründigen jungen Frau, die sich leidenschaftlich für Psychologie interessierte, während der vierzehnjährige Thomas als feinfühliger Geist stundenlang über seinen Bauklötzen und Zeichnungen brütete. Christel und Konrad führten ihre Praxis noch immer mit derselben unerschöpflichen Wärme. Doch mitten in diese ländliche Harmonie brach ein schlichter, weißer Umschlag ein, der die Vergangenheit mit einem Schlag zurückholte. Es war ein Brief ihres Bruders Gustav, dem ungesehenen Kind von einst. Mutter liegt im Sterben. Wenn du sie noch einmal sehen willst, musst du kommen. Die Reise zurück zum elterlichen Bauernhof wurde für Christel zu einer Fahrt durch die Geister ihrer eigenen Kindheit. Als sie nach über zwei Jahrzehnten den Fuß auf den Hofplatz setzte, schien die Zeit dort auf eine grausame Weise stehengeblieben zu sein. Das mächtige Fachwerkhaus wirkte grau und abgewohnt, der Verputz blätterte ab, und über allem lag noch immer jene bleierne, drückende Schwere, die Großvater Alfred einst gesät hatte. Ihr älterer Bruder Richard, der den Hof nach Willis Tod übernommen hatte, lehnte an der Stalltür. Sein vom Polio gezeichnetes linkes Bein war dünn und steif; er blickte Christel aus verbitterten, misstrauischen Augen an. Auch Sophie und Gustav waren da, gezeichnet von den unsichtbaren Wunden eines Hauses, das niemals Liebe gelernt hatte. Als Christel die dunkle, nach Linoleum und Krankheit riechende Stube betrat, saß sie am Bett ihrer Mutter. Luise war achtzig Jahre alt, ihr Körper bis auf die Knochen abgemagert, die Haut papieren und fahl. Die einst so gefürchtete, unnahbare Frau wirkte auf den Kissen winzig und zerbrechlich. Als Luise die Augen aufschlug und ihre Tochter erkannte, passierte etwas, das Christel in ihrem ganzen Leben nie für möglich gehalten hätte: Eine einsame, schwere Träne löste sich aus Luises matten Augen und rann über die tiefe Furche ihrer Wange. Es gab keine lauten Vorwürfe, kein spätes, melodramatisches Geständnis. Das Schweigen, das diese Familie über Jahrzehnte wie eine Festung geschützt hatte, zerbrach nicht mit einem Knall, sondern mit einem leisen, zitternden Händedruck. Luise streckte ihre knöcherne Hand aus und umklammerte Christels Finger mit einer überraschenden, fast verzweifelten Kraft. In diesem stummen Flehen las die erfahrene Kinderärztin und Mutter Christel alles, was Luise niemals hatte aussprechen können: den Schmerz eines geraubten Lebens, das Ausgebranntsein nach der Aufzucht der eigenen Geschwister und die lähmende Angst vor dem Tyrannen Alfred, die sie einst dazu gebracht hatte, ihre eigene Tochter wegzustoßen. Christel zog ihre Hand nicht zurück. Sie setzte sich auf die Bettkante, drückte Luises Hand fest an ihr Herz und begann, mit ihrer ruhigen, heilenden Stimme von ihren eigenen Kindern, von Paula und Thomas, zu erzählen. Sie schenkte ihrer sterbenden Mutter in diesen letzten Stunden genau das, was sie selbst auf diesem Hof nie erhalten hatte: bedingungslose Nähe und das Gefühl, im tiefsten Schmerz gesehen zu werden. Als Christel am Abend aus dem Fenster der Stube blickte und sah, wie die Herbstsonne die alten Felder in ein spätes, versöhnliches Gold tauchte, spürte sie, wie die steinerne Last des Grolls endgültig von ihrer Seele abfiel. Sie war nicht mehr das verängstigte Mädchen aus der Kammer unter der Treppe. Sie war eine Frau, die stark genug war zu verzeihen. Das Schweigen war zerbrochen, nicht in Zorn, sondern in einer tiefen, traurigen Erlösung, die den Weg frei machte für den Frieden der späten Jahre.";
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
