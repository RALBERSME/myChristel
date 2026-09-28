let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der späte Frühsommer des Jahres 2012 legte sich mit einer feierlichen, fast drückenden Wärme über den Garten des Schieferhauses. Doch für Christel verloren die blühenden Rosen im Juni schlagartig all ihre Farben, als Konrad von einer Routineuntersuchung aus der Stadt zurückkehrte. Er setzte sich an den großen Holztisch in der Küche, nahm ihre Hände in seine und sah sie aus Augen an, die unendlich müde, aber vollkommen ruhig waren. Bauchspeicheldrüsenkrebs. Spätstadium. Als Ärztin brauchte Christel keine langen Erklärungen; sie kannte das unerbittliche Urteil dieser Diagnose. Das Schicksal forderte seinen Tribut von dem Mann, der ihr ganzes Leben lang ihr Fels in der Brandung gewesen war. In den folgenden drei Monaten wurde das Schieferhaus zu einer Festung der Liebe und des Abschieds. Christel duldete kein Krankenhausbett in einer sterilen Klinik. Sie pflegte ihren Konrad selbst, in der vertrauten Stube, in der sie jahrzehntelang gemeinsam gelacht, gestritten und gelebt hatten. Jede Nacht saß sie an seiner Seite, hielt seine Hand, wenn der Schmerz kam, und reichte ihm das Wasser. Es war ein schwerer, zehrender Weg, doch es gab kein bitteres Schweigen wie damals auf dem elterlichen Bauernhof. Das Haus war stattdessen erfüllt von tiefen Gesprächen, von leisen Erinnerungen an das gemeinsame Studium in Frankfurt und von Willis alten Melodien, die Thomas auf dem Klavier für seinen Vater spielte. Im September, als die ersten Blätter der alten Eichen zu Boden fielen, schloss Konrad friedlich für immer die Augen. Er starb in Christels Armen, mit einem letzten, schwachen Lächeln auf den Lippen, das ihr sagen wollte, dass alles gut war. Nach der Beerdigung brach eine monumentale, fast unerträgliche Stille über Christel herein. Als sie allein in der großen, leeren Wohnstube saß, kroch die alte, giftige Einsamkeit ihrer Kindheit wie ein kalter Nebel aus den Ecken. Für einen kurzen, schrecklichen Moment fühlte sie sich wieder wie das verängstigte, ungeliebte Mädchen in der dunklen Kammer unter der Treppe. Die Versuchung war groß, sich innerlich zu versteinern, so wie ihre Mutter Luise es nach Willis Tod getan hatte, das Herz zuzumachen, um den unermesslichen Schmerz des Verlustes nicht mehr spüren zu müssen. Doch als sie am Abend auf der Veranda saß und in den dunklen Abendhimmel blickte, öffnete sich die Gartentür. Paula und Thomas traten herein. Paula hielt ihre inzwischen siebenjährigen Zwillingsmädchen an den Händen, und Thomas trug eine Decke über dem Arm. Sie sagten nicht viel. Thomas legte seiner Mutter die Decke um die Schultern, und Paula setzte sich schweigend neben sie und nahm ihre zittrige Hand. Die kleinen Enkelinnen kuschelten sich stumm an ihre Knie. In diesem Moment begriff Christel den fundamentalen Unterschied zu ihrer eigenen Herkunftsfamilie. Luise war damals nach Willis Tod allein in ihrer Eiswüste geblieben, weil niemand da war, der sie wärmen konnte, und weil sie selbst keine Nähe duldete. Christel aber war nicht allein. Das Nest aus Liebe, das sie und Konrad über Jahrzehnte gebaut hatten, hielt. Ihre Kinder und Enkelkinder fingen sie auf, nicht mit lauten Worten, sondern mit der bedingungslosen, gütigen Nähe, die sie ihnen selbst vorgelebt hatte. Als sie Paula ansah und in den Augen ihrer Tochter genau dieselbe tiefe Empathie entdeckte, die einst Tante Paula ausgezeichnet hatte, wusste Christel, dass Konrad nicht wirklich gegangen war. Seine Liebe lebte in diesem Kreis weiter. Sie weinte bittere Tränen um ihren Ehemann, doch der Abendhimmel war nicht schwarz, er war erfüllt vom bleibenden Licht eines gesegneten, gemeinsamen Lebens.";
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
