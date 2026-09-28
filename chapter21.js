let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das neue Jahr war erst wenige Wochen alt, als der winterliche Frost das Land erneut fest im Griff hatte. Christel saß an einem grauen Januarmorgen am Sterbebett ihrer Mutter Luise. Das rhythmische, rasselnde Atmen der alten Frau war das einzige Geräusch, das die drückende Stille der Krankenzimmer-Atmosphäre auf dem alten Hof durchschnitt. Die Geschwister Richard, Sophie und Gustav saßen stumm in der angrenzenden Wohnstube, unfähig, die lähmende Sprachlosigkeit zu überwinden, die Großvater Alfred ihnen ins Fundament ihres Lebens betoniert hatte. Doch Christel wich nicht von Luises Seite. Als Ärztin hatte Christel gelernt, Körper zu lesen; als Mutter hatte sie gelernt, Seelen zu verstehen. In diesen langen, stillen Stunden des Wartens blickte sie auf die tiefen Falten im Gesicht ihrer Mutter, auf die von jahrzehntelanger Schinderei deformierten Gelenke der Hände. Plötzlich fiel die letzte Schale ihres eigenen, schützenden Zorns ab. Sie sah nicht mehr die unnahbare, emotionale Eiswüste, die sie als dreijähriges Kind nach dem Malheur mit dem Wasserkrug schutzlos dem Tyrannen überlassen hatte. Sie sah eine kleine, vierzehnjährige Luise, der man nach dem frühen Tod der eigenen Mutter die Kindheit brutal geraubt hatte. Sie sah ein junges Mädchen, das davon träumte, Ärztin zu werden, und stattdessen sieben Menschen versorgen musste, nur um danach nahtlos in die nächste Sklaverei unter Alfred zu geraten. Luise war nicht bösartig gewesen. Sie war schlichtweg vollkommen leergeblutet. Sie hatte ihren eigenen Kindern keine Wärme geben können, weil sie selbst in einer unendlichen Kälte erfroren war. In der Stunde ihres Todes schlug Luise noch ein letztes Mal die Augen auf. Ihr Blick war frei von dem alten, starren Schleier. Sie sah Christel an, nicht als die entfremdete, gebildete Tochter aus der Stadt, sondern als die Retterin, die an ihrem Bett saß. Luise konnte nicht mehr sprechen, doch eine einzelne, klare Träne löste sich aus ihrem Augenwinkel und rann über die Schläfe ins weiße Kissen. Es waren die Tränen der Erschöpfung eines ganzen, jahrzehntelang unterdrückten Lebens, das sie nun endlich loslassen durfte. Christel beugte sich tief über ihre Mutter. Sie legte ihre warme Hand auf Luises Stirn und flüsterte mit einer Stimme, die so unendlich sanft war wie die Sommerabende in Plopsberg: Es ist gut, Mutter. Es ist alles gut. Du darfst jetzt gehen. Ich habe deinen Traum weitergelebt. Wir sind frei. Ein tiefer, erlösender Seufzer entwich Luises Brust, dann stand ihr Herz still. Christel schloss ihrer Mutter sanft die Augen. Als sie kurz darauf aus dem Haus trat und der eisige Wind ihr ins Gesicht blies, spürte sie keine Kälte mehr. Sie weinte bittere Tränen um das traurige, schwere Leben ihrer Mutter, doch unter den Tränen lag eine gigantische, erlösende Wärme. Sie hatte Luise vergeben. Sie stieg in ihr Auto, in dem Konrad bereits am Steuer auf sie wartete, und wusste, dass sie die zentnerschwere Last der generationenübergreifenden Schuld endgültig im Boden dieses Hofes zurückgelassen hatte.";
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
