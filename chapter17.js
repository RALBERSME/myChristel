let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1967 brachte das Ende einer Ära und schnitt die tiefen Fäden, die Christel noch mit der alten Welt verbanden. Im feuchten Vorfrühling schloss Onkel Max im Pfarrhaus von Plopsberg für immer die Augen. Er starb friedlich in seinem großen Ohrensessel, umgeben von seinen geliebten Büchern und mit Tante Paulas Hand in der seinen. Als Christel an der Seite von Konrad zur Beerdigung reiste, war der Schmerz tief, doch es war ein reiner, von Dankbarkeit getragener Schmerz. Max hatte sie gerettet, ihren Geist geformt und ihr ein Fundament geschenkt, auf dem sie nun stand. Vom elterlichen Bauernhof kam zu diesem Begräbnis niemand; die Fronten waren verhärtet, und Luise schickte lediglich eine karge, schwarze Beileidskarte. Richard hatte inzwischen die Führung des hochverschuldeten Hofes übernommen und duldete keine Ablenkung. Nach dem Tod von Max hielt Paula es in dem großen, leeren Pfarrhaus nicht mehr aus. Ein neuer, junger Pfarrer sollte einziehen. Mit Christels und Konrads Hilfe packte die alte Dame ihre wenigen Habseligkeiten und zog in eine kleine, sonnendurchflutete Wohnung in Frankfurt, nur wenige Straßen von Christels Mansarde entfernt. So blieb der Anker von Christels Jugend in ihrer Nähe. Der Sommer 1967 stand ganz im Zeichen des unerbittlichen Prüfungsmarathons. Das Staatsexamen forderte Christel alles ab. Tag und Nacht saß sie über den Befunden, lernte pathologische Muster und sezierte im Geist die menschliche Anatomie. Doch anders als in den einsamen Anfangsjahren war sie nicht mehr allein. Konrad saß am anderen Ende des Tisches. Wenn ihr die Augen zufielen, kochte er frischen Tee; wenn sie an einer Diagnose verzweifelte, ging er mit ihr die Krankheitsbilder systematisch durch. Seine unerschütterliche Ruhe übertrug sich auf sie. Er war nicht nur ihr Geliebter, er war ihr Kollege, ihr engster Vertrauter und ihr seelischer Schutzwall. Im Spätsommer kam der Tag der Verkündung. Christel trat aus dem Prüfungszimmer der Universität, und ihre Hände zitterten, als sie das Dokument entgegennahm. Sie hatte das medizinische Staatsexamen nicht nur bestanden, sie hatte es mit Auszeichnung absolviert. Sie war nun offiziell Ärztin. Als sie am Abend mit Konrad und Tante Paula in einer kleinen, verrauchten Frankfurter Weinstube saß, um den Erfolg zu feiern, stießen sie mit billigem Sekt an. Paula hielt Christels Hand und weinte leise vor Stolz. „Wenn Max das noch erlebt hätte“, flüsterte sie. Du hast es geschafft, Christel. Du hast den Fluch gebrochen. Später, als Paula nach Hause gebracht worden war, gingen Christel und Konrad zu Fuß durch die laue Nacht zum Mainufer. Die Lichter der Stadt spiegelten sich im dunklen Wasser, und ein milder Wind trieb die Blätter vor sich her. Konrad blieb plötzlich unter einer alten Gaslaterne stehen. Er nahm Christels Hände, sah ihr tief in die Augen und griff in die Tasche seines Mantels. Er holte ein kleines, schlichtes Samtetui hervor. Christel, sagte er, und seine sonst so feste Stimme zitterte ein wenig. Wir haben die harten Jahre des Studiums gemeinsam durchgestanden. Wir haben gelernt, was es bedeutet, für andere da zu sein. Aber ich möchte mein ganzes Leben mit dir teilen. Ich möchte mit dir eine Praxis aufbauen, ein Haus voller Wärme und eine Familie, in der niemand Angst haben muss. Willst du meine Frau werden? Christel blickte auf den schlichten Silberring in dem Etui. Tränen der reinen, ungläubigen Freude schossen ihr in die Augen. Sie dachte für den Bruchteil einer Sekunde an ihre Eltern, an die lieblose Zweckgemeinschaft von Luise und Willi, an die stumme Eiswüste ihrer Kindheit. Und dann sah sie Konrad an, seine gütigen Augen, seine warmen Hände. Sie begriff, dass ihre eigene Ehe nichts mit der Vergangenheit zu tun haben würde. Ja, Konrad, flüsterte sie und warf sich in seine Arme. Ja, von ganzem Herzen. Als er sie durch die Luft wirbelte und ihr Lachen über das dunkle Wasser des Mains hallte, wusste Christel, dass dies nicht nur das Ende eines langen Weges war. Es war der glorreiche Beginn ihres ganz eigenen, selbstbestimmten Lebens.";
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
