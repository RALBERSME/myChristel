let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1948 stand im Zeichen des Umbruchs, doch auf dem Hof des Patriarchen Alfred blieb die Zeit eine zähe, dunkle Masse. Während in den Städten die Währungsreform die Schaufenster füllte und die Menschen wieder zu hoffen wagten, herrschte in der großen Wohnstube des Hofes dieselbe mürrische Entbehrung wie eh und je. Alfred hielt jeden Cent, jedes Ei und jedes Korn unbarmherzig unter Verschluss. Geld war für ihn ein städtisches Teufelszeug; wahrer Reichtum bemass sich nur in vollen Scheunen und fruchtbarem Boden. Dass seine Familie dafür hungerte und im Winter frohr, war ihm gleichgültig. Beim täglichen Abendbrot wurde die Grausamkeit dieses Systems am deutlichsten. Alfred saß am Kopfende des schweren Eichentisches, das Kruzifix direkt hinter seinem Rücken. Mit einem scharfen Messer schnitt er das schwere, selbstgebackene Roggenbrot in hauchdünne Scheiben. Zuerst bekam der inzwischen siebenjährige Richard sein Teil, ein dickes, weiches Stück mit einer großzügigen Schicht Schmalz. Richard war Alfreds ganzer Stolz, der Thronfolger, der schon jetzt lernte, auf die jüngeren Geschwister herabzusehen. Danach bekamen die Knechte ihr Brot, dann Willi und Luise. Für die Mädchen Christel und Sophie sowie für den kleinen, zweijährigen Gustav blieben oft nur die harten Knusten oder die Reste, die Alfred ihnen wie Almosen zuteilte. Sophie, die kleine Alfred-Mama, versuchte stets, dem Großvater die Pantoffeln zu bringen oder ihm das Gebetbuch zu reichen, um ein größeres Stück zu ergattern. Doch Christel, nun fünf Jahre alt, saß kerzengerade auf ihrem Schemel. Sie bettelte nicht. Sie starrte auf ihren leeren Teller, den stummen Trotz wie einen Panzer um ihre kleine Brust gelegt. An einem bitterkalten Novemberabend war der Hunger im Haus fast körperlich greifbar. Der zweijährige Gustav saß in seiner hölzernen Ecke und weinte leise vor Entkräftung. Er war so dünn, dass seine Augen riesig in dem kleinen Gesicht wirkten. Luise stand am Herd und rührte die dünne Suppe um, ihr Gesicht eine Maske aus Stein. Sie hörte das Weinen ihres Jüngsten, doch sie bewegte sich nicht. Sie hatte gelernt, ihre Gefühle wegzusperren, um nicht unter der Last zu zerbrechen. Als Alfred nach dem Essen die Stube verließ, um im Stall nach dem Rechten zu sehen, nutzte Christel den Moment. Ihr eigener Magen krampfte sich zusammen, doch als sie Gustavs hohle Wangen sah, siegte etwas anderes in ihr. Sie schlich zum Brotschrank, dessen schwere Tür leise knarrte. Mit zitternden Fingern griff sie nach einer übrig gebliebenen Rinde, die Alfred für den nächsten Morgen zurückgelegt hatte. Sie wollte das Brot gerade unter ihrer Schürze verstecken, als eine Hand ihren Arm umklammerte. Christel erstarrte. Sie sah auf und blickte in das Gesicht ihrer Mutter. Luises Augen waren leer, gezeichnet von den Jahren der Tyrannei und der emotionalen Eiswüste, in die ihre Ehe mit Willi verwandelt worden war. Willi saß stumm am Tisch und wagte es nicht, aufzusehen. Luise sah das Brot in Christels Hand, dann sah sie zu dem weinenden Gustav hinüber. Für den Bruchteil einer Sekunde flackerte etwas wie Schmerz in Luises Gesicht auf, ein Überrest der Frau, die einst Ärztin werden und Menschen helfen wollte. Sie nahm Christel das Brot nicht weg. Aber sie nahm sie auch nicht in den Arm. Sie drückte Christels Hand nur ganz fest zusammen, bis es wehtat, und flüsterte mit brüchiger, fast tonloser Stimme: Leg es zurück. Wenn er es merkt, schlägt er uns alle tot. In diesem Moment begriff die fünfjährige Christel die ganze Tragweite der Tragödie ihrer Mutter. Luise schützte sie nicht, weil sie sie nicht liebte, sondern weil sie selbst eine Gefangene dieses Hauses war, deren Wille längst gebrochen war. Christel zog ihre Hand zurück, ließ das Brot auf die Anrichte fallen und ging wortlos zu Gustav. Sie setzte sich zu ihm in den Staub, nahm seine kleinen, kalten Hände in ihre und begann, ihm eine Geschichte von einem fernen, warmen Ort zu erzählen, den sie selbst noch nie gesehen hatte. Als Alfred kurz darauf polternd in die Stube zurückkehrte und die Familie zum Abendgebet zwang, betete Christel die Worte mechanisch mit. Doch in ihrem Herzen gab es keinen Segen für dieses Brot und kein Amen für diesen Großvater. Der steinerne Trotz, der zwei Jahre zuvor in der dunklen Kammer geboren worden war, verhärtete sich in dieser Nacht endgültig zu einem unerschütterlichen Entschluss: Sie würde diesen Hof überleben,koste es, was es wolle.";
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
