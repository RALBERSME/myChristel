let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 2005 brachte einen großen, wehmütigen Abschied aus dem Alltag, den Christel und Konrad über fast vier Jahrzehnte hinweg gemeinsam gelebt hatten. Mit weit über sechzig Jahren war für die beiden Mediziner der Moment gekommen, die schwere Eichentür ihrer Gemeinschaftspraxis im Erdgeschoss des Schieferhauses für immer hinter sich zu schließen. Die Gelenke schmerzten nach den langen Tagen, und die bürokratischen Auflagen der modernen Zeit drückten auf jene Freiräume, die Christel so dringend für ihre kleinen Patienten brauchte. Nach reiflicher Überlegung übergaben sie das Lebenswerk an ein junges, engagiertes Arztehepaar, das die Praxis im Sinne der Gründer mit viel Empathie fortführen wollte. Der letzte Sprechstundentag im Oktober wurde zu einem tief emotionalen Triumphzug der Dankbarkeit. Das Wartezimmer quoll über von Blumen, selbstgemalten Bildern der Dorfkinder und Tränen der alten Patienten, die Konrad teils seit ihrer Jugend betreut hatte. Als Christel ihr Stethoskop zum letzten Mal vom Hals nahm und in die Schublade legte, zitterten ihre Hände. Ein riesiger Lebensabschnitt ging zu Ende. Ein Gefühl der Leere drohte sie für einen kurzen Moment zu überkommen, die Angst vor der plötzlichen Stille in dem Haus, das sonst immer vom Weinen, Lachen und den Schritten suchender Menschen widergehallt hatte. Doch das Schicksal duldet keine Leere in einem Haus, das der Liebe geweiht ist. Nur wenige Wochen nach der Praxisübergabe, mitten im ersten Wintereinbruch des Novembers, kam die Nachricht aus der Geburtsklinik der Stadt. Tochter Paula hatte entbunden. Und das Wunder war perfekt: Es waren gesunde Zwillingsmädchen. Als Christel am nächsten Morgen das Krankenhauszimmer betrat, war der Raum vom milden Licht der Wintersonne durchflutet. Paula lag erschöpft, aber überglücklich in den Kissen. In zwei kleinen, fahrbaren Bettchen neben ihr schlummerten zwei winzige, rosige Wesen. Christel trat mit klopfendem Herzen heran. Sie wusch sich die Hände mit warmem Wasser, trat an die Wiegen und hob das erste der beiden Mädchen behutsam in ihre Arme. Das Baby war unendlich leicht, verströmte diesen unnachahmlichen, reinen Duft des Anfangs und öffnete für einen winzigen Moment die dunklen, noch blinden Augen. Christel presste die kleine Enkeltochter sanft an ihre Brust. In diesem Moment schlossen sich alle Kreise ihres Lebens auf eine so monumentale Weise, dass ihr die Tränen der reinen, ungläubigen Freude lautlos über die Wangen liefen. Sie dachte an das Jahr 1943 zurück, an ihre eigene, fast tödliche Geburt im eisigen Sturm, bei der ihre eigene Mutter Luise weggesehen hatte. Sie dachte an das Jahr 1968, als sie ihre eigene Tochter Paula das erste Mal gehalten und den Fluch der Kälte gebrochen hatte. Und nun sah sie Paula an, die ihre Zwillingsmädchen mit einem Blick voller unendlicher Wärme und Stolz betrachtete. Christel beugte sich über die kleine Enkelin und flüsterte ihr ein leises, feierliches Versprechen ins Ohr: Willkommen im Licht, kleine Maus. Du wirst in diesem Haus niemals Angst haben müssen. Du wirst gehört werden, du wirst gesehen werden, und du wirst mit all der Wärme aufwachsen, die diese Welt zu bieten hat. Das verspreche ich dir bei Tante Paula und Onkel Max. Als Konrad von hinten an sie herantrat, den Arm fest um ihre Taille legte und das zweite Baby aus der Wiege hob, wusste Christel, dass der Ruhestand kein Ende war. Es war der glorreiche Beginn ihrer schönsten Rolle: Großmutter zu sein in einer Familie, die die Kälte endgültig besiegt hatte.";
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
