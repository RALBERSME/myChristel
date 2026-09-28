let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1954 fühlte sich für Christel an wie der erste echte Frühling ihres Lebens. Zwei Jahre waren vergangen, seit sie den finsteren Hof ihres Großvaters Alfred verlassen hatte, und in dieser Zeit hatte sich das schüchterne, in sich gekehrte Mädchen mit den traurigen Augen tiefgreifend verändert. Sie war dreizehn Jahre alt geworden, schmächtig noch immer, aber ihr Gang war aufrecht und in ihren Augen lag nicht mehr das ständige, lauernde Zittern vor dem nächsten Schlag oder Tadel. In Plopsberg hatte sie gelernt, dass ihre Stimme ein Gewicht besaß. Sie blühte in der kleinen Dorfschule regelrecht auf, war die Beste in Aufsätzen und im Rechnen, und am Nachmittag hallte ihr Lachen oft gemeinsam mit den anderen Dorfkindern durch den dichten, wilden Pfarrgarten. Onkel Max war für sie zu einem geduldigen Gärtner ihres Verstandes geworden. Fast jeden Abend saß er mit ihr in seiner weiten, nach Pfeifentabak und altem Papier riechenden Bibliothek. Er reichte ihr Bücher, die sie auf dem Bauernhof nicht einmal hätte ansehen dürfen: Geschichten aus fernen Ländern, Gedichte von Goethe und dicke Bände über die Naturwissenschaften. Max korrigierte sie nie mit Härte, sondern stellte Fragen, die ihren Geist anfeuerten. Tante Paula wiederum schenkte ihr jene alltägliche, unaufgeregte mütterliche Geborgenheit, die Luise ihr nie hatte geben können. Wenn Christel von der Schule nach Hause kam, strich Paula ihr im Vorbeigehen sanft über das Haar, flickte ihre Kleider ohne ein mürrisches Seufzen und saß an ihrem Bett, wenn Christel doch einmal von der dunklen Kammer unter der Treppe träumte. An einem verregneten Dienstagnachmittag im November saßen Paula und Christel beim Flicken am Küchentisch, als Onkel Max mit schwerem Schritt die Stube betrat. In seiner Hand hielt er einen Umschlag aus grobem, grauem Papier. Auf der Vorderseite stand in der ungelenken, zittrigen Schrift von Christels Vater Willi die Adresse des Pfarrhauses. Ein Brief von deinem Heimathof, Christel, sagte Max leise und legte das Schreiben auf das Holz des Tisches. Ein plötzlicher, eisiger Schauer lief Christel über den Rücken. Das alte Gefühl der Bedrohung, die Angst, dass man sie nun zurückholte in das Gefängnis aus Pflicht und Kälte, schnürte ihr augenblicklich die Kehle zu. Ihre Finger verkrampften sich im Stoff der Schürze, die sie gerade ausbesserte. Paula legte das Nähzeug beiseite und öffnete den Brief mit einem kleinen Messer. Sie las die Zeilen schweigend, während Max Christel fest im Blick behielt, nicht mit Strenge, sondern mit tiefem Mitgefühl. Richards Polio-Erkrankung hatte den Hof finanziell an den Abgrund gebracht, doch er war nach zwei qualvollen Jahren endlich aus der Klinik entlassen worden, gezeichnet von einer bleibenden Lähmung des linken Beins. Willi ging es dank neuer Medikamente für seine Schulter besser, er schuftete Tag und Nacht. Doch Luise, so schrieb Willi, sei eine gebrochene Frau. Sie funktioniere nur noch für Richard. Paula reichte den Brief an Max weiter, sah Christel an und nahm ihre kalten Hände in ihre eigenen. Christel, deine Eltern haben eine Entscheidung getroffen. Sie sehen, wie gut es dir hier geht. Sie wissen, dass sie dir auf dem Hof weder die Zeit noch die Ausbildung geben können, die du verdienst. Sie haben zugestimmt, dass du dauerhaft hier in Plopsberg bleiben sollst. Für immer. Christel starrte auf das graue Papier. In ihrem Inneren explodierte ein schmerzhaftes Chaos aus zwei völlig gegensätzlichen Gefühlen. Da war eine gigantische, erlösende Welle der Erleichterung, sie musste nie wieder zurück in die Kälte. Doch direkt darunter riss die alte, giftige Wunde der Ablehnung wieder auf. Sie wollen mich nicht, dachte sie bitter. Meine eigene Mutter gibt mich einfach ab. Ich bin ihr so egal, dass sie mich bereitwillig vergisst. Eine schwere, heiße Träne löste sich aus ihren Augen und tropfte auf den Tisch. Onkel Max trat an ihre Seite, kniete sich mit seinen alten Gelenken mühsam neben ihren Schemel und sah ihr tief in die Augen. Weine ruhig, mein Kind, sagte er mit einer Stimme, die so fest wie eine Kirchenmauer und doch unendlich sanft war. Es tut weh, wenn die eigenen Eltern einen freigeben. Aber höre mir genau zu: Das ist kein Verstoßen, Christel. Deine Mutter Luise ist eine Blume, die im Frost dieses Hofes erfroren ist. Sie kann keine Wärme mehr geben, weil sie selbst keine hat. Indem sie dich hierlässt, tut sie das Einzige, was ihr an mütterlicher Liebe noch geblieben ist: Sie rettet dich vor sich selbst und vor der Kälte jenes Hauses. Es ist kein Verstoßen. Es ist deine Erlaubnis, endlich bedingungslos glücklich zu sein. Christel sah von Max zu Paula, die sie unter Tränen anlächelte. In diesem Moment begriff die Dreizehnjährige, dass ihre echten Wurzeln nicht in dem Blut und dem Boden des elterlichen Hofes lagen, sondern in der Liebe und der Wärme dieses Pfarrhauses. Sie wischte sich die Träne von der Wange, atmete tief ein und spürte, wie der Boden unter ihren Füßen endgültig fest wurde. Sie war kein ungeliebtes Bauernmädchen mehr. Sie war Christel, und ihre Zukunft hatte gerade erst begonnen.";
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
