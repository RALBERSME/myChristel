let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1940 brachte einen harten, unbarmherzigen Winter, der den Boden des Hofes wie Eisen gefrieren ließ. Doch während draußen in der Welt der Krieg tobte, schien die Zeit auf Alfreds Hof in einer eigenen, finsteren Epoche stillzustehen. Die Familie war streng katholisch, das Kruzifix hing in jeder Stube, und der Pfarrer kam regelmäßig zum Essen. Politik wurde nicht geduldet. Für Alfred gab es keinen Führer und keine Nation, die wichtiger waren als sein eigener Grund und Boden. Weil der Hof immense Mengen an Lebensmitteln für die Versorgung der Region abwarf, schaffte es der alte Patriarch mit finsterer Entschlossenheit und Papieren, die Männer des Hofes, und auch seinen ungeliebten Sohn, vor dem Einzug an die Front zu bewahren. Doch diese Rettung war kein Akt der Liebe. Es war die Sicherung von billigen Arbeitskräften. Für Luise war der Hof zu einem Gefängnis geworden, in dem die Tage nicht in Stunden, sondern in Eimern voller Blut, Schweiß und Tränen gemessen wurden. Ihre Hoffnung, in der Ehe mit Willi ein Stück Leichtigkeit zu finden, war im eisigen Wind des Winters erfroren. Unter den argwöhnischen, stechenden Blicken Alfreds schuftete sie vom ersten Hahnenschrei bis tief in die Nacht. Sie backte das Brot, schrubbte die endlosen Holzdielen, versorgte das Vieh und half bei der schweren Holzarbeit im Wald. Ihr Körper, der ohnehin von der jahrelangen Aufzucht ihrer sechs Geschwister geschwächt war, funktionierte nur noch wie eine stumpfe Maschine. Willi versuchte zu helfen, wo er konnte. Wenn Alfred nicht hinsah, summte er manchmal noch eine leise Melodie oder versuchte, Luise im Vorbeigehen sanft am Arm zu berühren. Doch der Schatten des Vaters lag wie Mehltau auf ihm. Wann immer Willi eine schwere Last hob, schoss ein heftiger Schmerz durch seine rechte Schulter. Der Knochen, der nach dem Sturz von der Heubühne schief zusammengewachsen war, rieb bei jeder Bewegung unbarmherzig im Gelenk. Als im August die große Roggenernte anstand, kam es zur Katastrophe. Die Hitze stand wie eine Wand über den Feldern, und Alfred trieb die Knechte und seine Familie zur unbarmherzigen Eile an. Ein Gewitter drohte, und die Ernte durfte nicht nass werden. Schneller, du Taugenichts!, brüllte Alfred über das Feld und deutete mit seiner Peitsche auf Willi, der Mühe hatte, die schweren Korngarben auf den Wagen zu wuchten. Sogar die Mägde arbeiten schneller als ein Mann mit einem Gummiarm! Willi biss die Zähne zusammen. Sein Gesicht war blass, der Schweiß lief ihm in Strömen über die Stirn. Er packte eine besonders schwere Garbe, hob sie mit aller Kraft an, und plötzlich gellte ein markerschütternder Schrei über das Stoppelfeld. Ein dumpfes, reißendes Geräusch war zu hören gewesen. Willis Knie gaben nach, und er brach mitten im Staub zusammen. Die Garbe begrub ihn halb unter sich. Das schlecht verheilte Schultergelenk war unter der extremen Last endgültig aus der Pfanne gesprungen, Sehnen und Muskeln waren gerissen. Luise ließ ihre Mistsichel fallen und rannte zu ihrem Mann. Sie kniete sich in den heißen Staub und hob seinen Kopf. Willi wimmerte vor Schmerz, sein rechter Arm hing völlig leblos und in einem unnatürlichen Winkel von seinem Körper herab. Alfred schritt langsam herbei. Er blieb vor dem am Boden liegenden Sohn stehen, sah an ihm herab und schüttelte voller Abscheu den Kopf. Ein Jammerlappen, sagte er kühl, während die Knechte betreten schwiegen. Mitten in der Ernte macht er schlapp. Richtet ihn auf und ladet ihn auf den Wagen. Er muss ins Kreiskrankenhaus. Wieder nur Kosten für nichts. Kein Wort des Bedauerns, keine Sorge um das Wohl seines Kindes. Noch am selben Abend wurde Willi mit dem Pferdewagen in die anderthalb Stunden entfernte Stadt gebracht. Luise durfte nicht mitfahren; Alfred duldete es nicht, dass eine Arbeitskraft mitten in der Erntezeit den Hof verließ. Als die Nacht hereinbrach und die schwere Feldarbeit endlich getan war, saß Luise allein in der dunklen Küche. Das Haus war still, nur aus Alfreds Stube im ersten Stock hörte sie das dumpfe, regelmäßige Ticken der Standuhr. Willi würde Wochen, vielleicht Monate im Krankenhaus bleiben müssen. Sie spürte, wie die Einsamkeit sie wie eine kalte Hand umklammerte. Sie war allein mit dem Tyrannen. Als sie aufstand, um das Feuer im Herd für den nächsten Morgen vorzubereiten, zitterten ihre Hände vor emotionaler und körperlicher Erschöpfung. Der Hof fraß alles auf, und sie hatte das Gefühl, dass sie die Nächste war.";
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
