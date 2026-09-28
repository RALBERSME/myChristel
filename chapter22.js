let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1995 tönte im Schieferhaus am Rande des Spessarts von einer ganz neuen, lebendigen Melodie. Die Jahrzehnte des unermüdlichen Einsatzes in der Gemeinschaftspraxis hatten Spuren hinterlassen; in Christels und Konrads Haar schimmerten erste silberne Fäden, und die Schritte wurden nach den langen Sprechstunden am Abend etwas langsamer. Doch die Herzlichkeit, mit der sie jeden einzelnen Patienten empfingen, war ungebrochen. Ihre Praxis war längst kein reiner Ort der Medizin mehr, sondern eine Oase des Vertrauens für die gesamte Region geworden. Der größte Stolz in Christels Herzen galt jedoch ihren inzwischen erwachsenen Kindern, die das Fundament der Liebe, das sie und Konrad so mühsam errichtet hatten, nun in die Welt hinaustrugen. Die 27-jährige Paula hatte ihr Studium der Pädagogik und Psychologie mit Bravour abgeschlossen. Inspiriert von den Erzählungen über das harmonische Pfarrhaus von Großtante Paula und Großonkel Max arbeitete sie nun leidenschaftlich in der Kinder- und Jugendhilfe. Sie besaß genau dieselbe Gabe wie ihre Mutter: Menschen das Gefühl zu geben, bedingungslos gesehen und gehört zu werden. Thomas, inzwischen 24, hatte sich gegen die Medizin und für seine zweite große Liebe entschieden: Er feierte seine ersten Erfolge als feinfühliger, kreativer Architekt in einer nahen Stadt. Er entwarf Räume, die hell, offen und einladend waren, genau wie das Zuhause, in dem er aufgewachsen war. An einem milden Sonntagabend im September versammelte sich die Familie im großen Wohnzimmer. Konrad saß am alten Klavier und spielte leise eine vertraute, sanfte Weise. Es war eine jener Melodien, die Willis Herz einst erfreut hatten, nun jedoch befreit von jedem Schmerz und jeder Angst. Thomas saß mit Skizzenblättern auf dem Teppich, während Paula ihrer Mutter in der Küche beim Teekochen half. Als Christel mit dem Tablett ins Zimmer trat und auf ihre Familie blickte, spürte sie eine so tiefe, überströmende Wärme, dass ihr kurz der Atem stockte. Sie erinnerte sich an die düsteren, von eisigem Schweigen geprägten Sonntage ihrer eigenen Kindheit unter Opa Alfred, an denen jedes Lachen im Keim erstickt worden war. Sie sah ihre Kinder an, die frei von Angst, voller Selbstvertrauen und emotionaler Sicherheit miteinander scherzten und lachten. Paula trat an ihre Seite, nahm ihr das Tablett ab und drückte ihr einen sanften Kuss auf die Wange. Du schaust so glücklich aus, Mama, flüsterte sie lächelnd. Christel drückte die Hand ihrer Tochter fest und blickte zu Konrad hinüber, der ihr vom Klavier aus einen tiefen, liebenden Blick schenkte. Das Erbe der Herzlichkeit war kein ferner Traum mehr, den sie einst in Plopsberg gesucht hatte. Es war lebendige Realität geworden, fest verankert in den Seelen ihrer eigenen Kinder. Der transgenerationale Fluch der Kälte war endgültig besiegt, und das Licht, das Paula und Max einst entzündet hatten, strahlte heller denn je.";
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
