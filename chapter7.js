let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Im Spätsommer des Jahres 1950 lag eine seltsame, bleierne Schwüle über den Feldern des Hofes. Das Getreide stand hoch und reif, bereit für den Schnitt, doch in der großen Wohnstube schien die Luft zum Zerreißen gespannt. Alfred, der Patriarch, war im Frühjahr siebzig Jahre alt geworden, doch an seiner unerbittlichen Härte hatte das Alter nichts geändert. Seine Schritte hallten noch immer wie Peitschenhiebe durch die Flure, und seine Stimme duldete nach wie vor keinen Widerspruch. Es geschah an einem Donnerstagmorgen, kurz nach dem Morgengebet. Die Familie saß schweigend am Tisch, als Alfred plötzlich innehielt. Das Messer, mit dem er gerade das Brot schneiden wollte, entglitt seinen Fingern und schlug stumpf auf das Holz. Sein Gesicht verfärbte sich augenblicklich aschgrau, und ein tiefer, rasselnder Seufzer entfuhr seiner Brust. Er griff sich mit der linken Hand an das Herz, während seine Augen sich weit öffneten, starr, erschrocken und zum ersten Mal in seinem Leben hilflos. Vater?, wagte Willi mit brüchiger Stimme zu fragen, doch Alfred antwortete nicht mehr. Mit einem dumpfen Aufprall kippte der mächtige Körper des Patriarchen nach vorne und blieb regungslos auf dem hölzernen Abendbrottisch liegen. Luise sprang nicht auf. Sie blieb auf ihrem Stuhl sitzen, die Hände fest in den Schoß gepresst, und starrte auf den Rücken ihres Schwiegervaters. Die Knechte eilten herbei, der Arzt wurde geholt, doch als dieser Stunden später den Tod feststellte, breitete sich eine unheimliche, fast heilige Stille auf dem Hof aus. Der Tyrann war tot. Herzschlag. Bis zu seinem letzten Atemzug hatte er die Zügel dieses Hauses in der Hand gehalten, und nun war er einfach fort. Am Tag der Beerdigung stand die Familie in ihren schweren, schwarzen Kleidern am offenen Grab auf dem katholischen Friedhof. Der Weihrauch stieg in den grauen Himmel, und der Pfarrer sprach von einem gottesfürchtigen, pflichtbewussten Mann, doch unter den Trauernden weinte niemand. Die neunjährige Christel stand neben ihrer Schwester Sophie und spürte keine Trauer, sondern nur eine unendliche Erleichterung. Der Schatten, der ihr ganzes Leben verdunkelt hatte, war plötzlich gewichen. Sie blickte zu ihrer Mutter Luise hinüber, in der Hoffnung, nun ein Aufatmen oder gar ein Lächeln in ihrem Gesicht zu sehen. Doch Luises Gesicht war eine Maske aus Stein. Die Freiheit war gekommen, doch Luise war innerlich bereits so tief versteinert, dass sie sie nicht mehr spüren konnte. Die Jahre der Tyrannei hatten ihr Herz ausgehöhlt. Die einzige Veränderung brachte Willi. Bessere Arzneimittel aus der Stadt hatten im Laufe des Jahres endlich dafür gesorgt, dass die chronische Entzündung in seiner verletzten Schulter zurückging. Er war stabiler, schmerzfrei und packte nun, befreit vom psychischen Druck des Vaters, mit neuer Kraft auf den Feldern an. Für wenige Wochen schien es, als kehrte ein Hauch jener Fröhlichkeit zurück, die Luise einst an ihm geliebt hatte. Wenn er abends von den Feldern kam, summte er manchmal wieder eine leise Melodie. Doch das Erbe des Patriarchen wog schwerer als sein Tod. Alfred hatte Krankenversicherungen zeitlebens für modernen, überflüssigen Teufelskram gehalten, ein echter Bauer sorge selbst für sich und sein Land. Es gab keine Rücklagen für Notfälle, nur den nackten Ertrag des Bodens. Als das Jahr 1950 zu Ende ging, ahnte noch niemand, dass der unsichtbare Feind bereits vor der Tür stand und das kurze Aufatmen der Familie in eine neue, noch tiefere Katastrophe stürzen würde.";
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
