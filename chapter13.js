let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1959 brachte den Duft von Freiheit und weiten Horizonten nach Plopsberg. Christel war inzwischen achtzehn Jahre alt und stand kurz vor dem Abschluss ihrer Gymnasialzeit. Sie war zu einer klugen, willensstarken jungen Frau herangewachsen, deren Geist so scharf war wie die Winterluft. In der Schule redeten die Lehrer voller Hochachtung über sie; sie besaß ein außergewöhnliches Gespür für Naturwissenschaften und ein tiefes, fast instinktives Einfühlungsvermögen für ihre Mitmenschen. Lange Zeit hatte Christel geglaubt, sie wolle Lehrerin werden. Es schien der naheliegende Weg zu sein, um die Wärme und das Wissen, das sie von Tante Paula und Onkel Max empfangen hatte, an die nächste Generation weiterzugeben. Doch in diesem Spätsommer geschah etwas, das die Weichen ihres Lebens völlig neu stellte. Onkel Max, dessen Herz im Alter immer schwächer geworden war, erlitt an einem heißen Augustnachmittag einen schweren Schwächeanfall direkt an seinem Schreibtisch. Christel fand ihn, bleich und nach Luft ringend, die Hand krampfhaft auf die Brust gepresst. Während Tante Paula mit zitternden Fingern nach dem Arzt rief, verfiel Christel nicht in Panik. In ihrem Kopf wurde es plötzlich vollkommen still und klar. Sie öffnete Max das Hemd, reichte ihm frisches Wasser, fühlte seinen rasenden Puls und sprach mit einer so ruhigen, festen Stimme auf ihn ein, dass der alte Pfarrer sich spürbar entspannte. Als der Landarzt schließlich eintraf und Max versorgte, sah er Christel lange an. Du hast ein unglaubliches Gespür, Mädchen, sagte er und klopfte ihr auf die Schulter. Du hast die Nerven einer echten Medizinerin. Aus dir müsste man eine Ärztin machen. Das Wort hallte in Christels Seele nach wie der Schlag einer mächtigen Kirchenglocke. Ärztin. Plötzlich fügten sich die Puzzleteile ihrer Familiengeschichte in ihrem Kopf zusammen. Sie erinnerte sich an die bitteren Geschichten über ihre Mutter Luise. Luise, die mit vierzehn von der Schule hatte abgehen müssen, um die sechs Geschwister großzuziehen, obwohl sie eigentlich genau diesen Traum gehabt hatte: Ärztin zu werden. Der Hof und die Kälte des Großvaters Alfred hatten diesen Traum damals im Keim erstickt und Luise zu einer gebrochenen, ausgebrannten Frau gemacht. Am selben Abend saß Christel mit Tante Paula am Bett des schlafenden Onkel Max. Das flackernde Licht einer Kerze warf lange Schatten an die Wand. Tante Paula, begann Christel leise, und ihre Stimme zitterte vor innerer Erwähnung. Ich will nicht mehr Lehrerin werden. Ich weiß jetzt, was meine eigentliche Berufung ist. Ich möchte Medizin studieren. Ich möchte Menschen heilen. Und ich möchte den Traum zu Ende leben, den meine Mutter niemals leben durfte. Paula blickte sie lange an. In den Augen der alten Frau spiegelten sich tiefe Rührung und eine unendliche Erleichterung. Sie wusste, welche immensen finanziellen Hürden ein Medizinstudium in dieser Zeit bedeutete, die Studiengebühren, die teuren Bücher, die Unterkunft in einer fernen Universitätsstadt. Auf dem alten Heimathof hätte man für so ein Vorhaben nur ein spöttisches Lachen übrig gehabt; Luise und Willi hätten das niemals bezahlen können. Paula nahm Christels Hände und drückte sie fest. Max und ich haben unser ganzes Leben lang gespart, Christel, flüsterte sie, und eine Träne der Rührung glänzte in ihren Augen. Wir haben keine eigenen Kinder, und alles, was wir besitzen, gehört dir. Onkel Max hat es mir schon vor Monaten gesagt: Wenn diese kluge Pflanze aus unserem Garten an die Universität will, dann werden wir ihr die Erde dafür bereiten. Mach dir keine Sorgen um das Geld, mein Kind. Geh nach Frankfurt. Studiere. Werde die Ärztin, die diese Welt so dringend braucht. Christel trat ans Fenster und blickte hinaus in die Dunkelheit des Pfarrgartens. Der Wind rauschte in den alten Apfelbäumen, und am Horizont funkelten die Lichter der fernen Stadt. Sie spürte eine tiefe, fast ehrfürchtige Dankbarkeit. Sie wusste, dass sie die Ketten der Vergangenheit endgültig gesprengt hatte. Sie würde nicht wie Luise im Frost eines tyrannischen Hauses erfrieren. Getragen von der bedingungslosen Liebe ihrer Zieheltern war ihr Traum vom Horizont Wirklichkeit geworden, und sie war bereit, ihn mit geöffnete Armen zu empfangen.";
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
