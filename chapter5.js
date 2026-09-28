let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Hungerwinter des Jahres 1946 kroch durch jede Ritze des alten Fachwerkhauses. Draußen fraß der Frost die Knospen der Hoffnung auf, und drinnen, in der stickigen Wärme der Geburtsstube, lag das jüngste Elend der Familie in den Kissen. Gustav war geboren worden. Das vierte Kind von Luise und Willi kam nicht mit einem Schrei des Triumphs auf die Welt, sondern mit einem leisen, fast entschuldigenden Wimmern. Es schien, als hätte der Junge schon im Mutterleib begriffen, dass für ihn kein Platz mehr vorgesehen war. Alfred, der Patriarch, betrat den Raum an diesem Tag nicht einmal mehr. Er stand unten im Flur, blickte auf die Ertragsbücher des Hofes und murmelte nur ein verächtliches Wort über ein weiteres Maul, das nichts einbringt. Willi lag zu diesem Zeitpunkt wieder einmal im fernen Kreiskrankenhaus. Die nasskalte Witterung hatte die Entzündung in seiner verletzten Schulter so schwer aufflammen lassen, dass die Ärzte um den Erhalt seines Armes bangten. Luise war mit der unerbittlichen Last des Hofes, den Knechten und den vier Kindern vollkommen allein. Ihr Gesicht hatte im letzten Jahr jede Farbe verloren; die Wangen waren eingefallen, die Lippen ein schmaler, bitterer Strich. Sie funktionierte nur noch wie ein Uhrwerk, das man morgens um vier Uhr aufzog und das abends um elf Uhr erschöpft stoppte. Für den neugeborenen Gustav blieb ihr keine Zeit. Sie legte ihn an die Brust, während sie mit der freien Hand Kartoffeln schälte, und legte ihn wieder ab, sobald er trank. Der Junge wuchs in einer Welt der absoluten emotionalen Windstille auf, ungesehen, ungehört, ein Schatten unter den Lebenden. Die kleine Christel, inzwischen drei Jahre alt, spürte die erdrückende Enge dieses Winters am intensivsten. Während ihr älterer Bruder Richard vom Großvater Alfred stolz auf dem Pferdeschlitten mitgenommen und mit Äpfeln gefüttert wurde, war Christel für den alten Mann ein ständiges Ärgernis. Sie steht im Weg, sie schaut so trotzig, sie hat die Augen ihrer nutzlosen Mutter, das waren die Sätze, die wie Peitschenhiebe durch die Stube flogen. Christel suchte keine Nähe mehr. Sie hatte gelernt, sich unsichtbar zu machen. Sie verbrachte die Tage oft unter der schweren Eichentreppe, wo die alten Arbeitsstiefel standen. Dort war es dunkel, aber dort fand sie eine seltsame Sicherheit. An einem späten Januarnachmittag geschah das Unglück, das Christels Kindheit für immer spalten sollte. Die Küche war erfüllt vom Dunst des kochenden Viehfutters. Luise stand am großen Bottich, den Rücken zur Tür gedreht. Christel, getrieben von einem plötzlichen Durst, versuchte, sich an der schweren Holzbank hochzuziehen, um an den irdenen Wasserkrug auf dem Tisch zu gelangen. Ihre kleinen, kalten Finger rutschten ab. Mit einem dumpfen Knall stürzte der Krug zu Boden, zerschellte in ein Dutzend Scherben, und das kalte Brunnenwasser ergoss sich über die frisch gescheuerten Dielen. Die Küchentür flog auf, noch bevor der letzte Wassertropfen versickert war. Alfred stand im Rahmen. Sein Gesicht war vor Zorn gerötet, die Adern an seinen Schläfen traten dick hervor. Schlampiges Pack!, donnerte seine Stimme durch den Raum. Er schritt vor, packte die dreijährige Christel unsanft am Oberarm und riss sie in die Höhe. Nichts als Schaden bringt dieses Balg! Zerstört das Eigentum des Hofes! Luise, siehst du nicht, was für eine Missgeburt du da herangezogen hast? Christel schrie vor Schmerz und Angst auf. Sie blickte verzweifelt zu ihrer Mutter. Sie wartete auf den Moment, in dem Luise das Messer fallen lassen, herbeieilen und sie aus den Klauen des Tyrannen reißen würde. Sie sehnte sich nach dem schützenden Arm der Mutter. Doch Luise rührte sich nicht. Sie blieb mit dem Rücken zu ihnen stehen. Ihre Schultern zuckten kurz, doch sie drehte sich nicht um. Sie griff nach dem Schrubbertuch, kniete sich schweigend auf den nassen Boden und begann, das Wasser aufzuwischen. Sie sagte kein Wort. Kein Lass das Kind los, Vater, kein einziges tröstendes Geräusch. Aus Angst vor dem Patriarchen, aus reiner, nackter Erschöpfung wählte Luise den Gehorsam und opferte die Seele ihrer Tochter, um den Frieden auf dem Hof nicht zu gefährden. Alfred zerrte die weinende Christel den Flur entlang und stieß sie in die dunkle, ungeheizte Kammer unter der Treppe. Da bleibst du, bis du gelernt hast, dich nützlich zu machen!, schrie er und warf die Tür ins Schloss. Der Riegel feuerte mit einem metallischen Klicken vor. In der absoluten Finsternis der Kammer, umgeben vom Geruch von Leder und kaltem Staub, hörte Christel auf zu weinen. Das Zittern ließ nach, und eine unnatürliche, steinerne Kälte breitete sich in ihrer kleinen Brust aus. In dieser Nacht verlor Christel ihre letzte kindliche Hoffnung auf mütterliche Liebe. Sie begriff, dass sie auf dieser Welt vollkommen allein war. Doch in der Dunkelheit zerbrach sie nicht. Ein unerbittlicher, stummer Trotz keimte in ihr auf. Sie presste die kleinen Fäuste zusammen, starrte gegen die Holztür und fasste einen Entschluss, den ein dreijähriges Kind kaum in Worte fassen konnte, den sie aber mit jeder Faser ihres Wesens fühlte: Ich werde stark werden. Ich werde nicht weinen. Und ich werde diesen Hof eines Tages für immer verlassen.";
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
