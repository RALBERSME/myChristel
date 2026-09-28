let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1971 brachte einen neuen Rhythmus in das schiefergedeckte Haus am Rande des Spessarts. Die Gemeinschaftspraxis lief glänzend, und die dreijährige Paula sprang bereits mit lebhaften, neugierigen Schritten durch den großen Garten. Im Spätsommer dieses Jahres kündigte sich das vierte Mitglied der kleinen Familie an. Am 4. September erblickte Thomas das Licht der Welt. Er war ein auffallend ruhiges, feinfühliges Baby, das stundenlang zufrieden in Christels Armen liegen konnte und mit seinen großen, dunklen Augen die Welt zu mustern schien. Christel betrachtete ihren Sohn mit einer tiefen, schmerzhaften Zärtlichkeit. Sie schwor sich am Wiegenbett, dass dieser Junge niemals, so wie einst ihr kleiner Bruder Gustav, das Gefühl haben sollte, das ungesehene, unsichtbare Kind zu sein. Sie teilte ihre Liebe gerecht und überfließend auf ihre beiden Kinder auf. Doch das Glück des Neubeginns wurde im selben Jahr von den langen Schatten der Vergänglichkeit eingeholt. Tante Paula, die mittlerweile die achtzig überschritten hatte, wurde spürbar schwächer. Ihre Schritte, die Christel einst den Weg aus der bäuerlichen Tyrannei gewiesen hatten, wurden zittrig, und ihr Blick verlor manchmal die gewohnte Klarheit. Sie war aus ihrer Frankfurter Wohnung zu Christel und Konrad ins Schieferhaus gezogen, wo sie die Mansarde im ersten Stock bewohnte. Der Alltag der jungen Ärztin war nun ein Balanceakt von gigantischen Ausmaßen. Vormittags behandelte Christel in der Praxis fiebernde Säuglinge und besorgte Mütter, nachmittags versorgte sie ihre eigenen Kinder Paula und Thomas, und in den Abendstunden stieg sie die Treppe hinauf, um an Tante Paulas Bett zu sitzen. Konrad hielt ihr in jeder Sekunde den Rücken frei, kochte, übernahm Nachtwachen und war der Fels, auf den sie sich blind verlassen konnte. Ihre Ehe war das absolute emotionale Gegenstück zur erstarrten Zweckgemeinschaft ihrer eigenen Eltern Luise und Willi: Sie war geprägt von tiefen Gesprächen, gemeinsamen Musizieren am Klavier und einem tiefen Respekt für die Seele des anderen. An einem stürmischen Novemberabend saß Christel am Bett ihrer sterbenden Mentorin. Paula atmete nur noch flach, ihre Hand lag klein und kühl in Christels Fingern. Das unruhige Echo der Vergangenheit schien durch die Fensterscheiben zu dringen. Christel, flüsterte die alte Dame plötzlich, und für einen letzten Moment kehrte die vertraute, warme Klarheit in ihre Augen zurück. Ich sehe dich an und ich sehe, dass mein Leben einen tiefen Sinn hatte. Als ich dich von jenem Hof holte, warst du eine verdorrte Knospe. Heute bist du eine Frau, die eine ganze Familie und ein ganzes Dorf wärmt. Versprich mir, versprich mir, dass du dieses Licht niemals verlöschen lässt. Ich verspreche es, Tante Paula, entgegnete Christel, während die Tränen ihr unaufhörlich über die Wangen liefen. Ich lasse es niemals los. In den frühen Morgenstunden schlief Paula friedlich ein. Als Christel aus dem Fenster blickte, sah sie ihren Mann Konrad im Garten stehen, der die kleine Paula an der Hand hielt und den schlafenden Thomas im Arm trug. Der Schmerz über den Verlust war unermesslich, doch über dem Schmerz thronte eine unerschütterliche Gewissheit. Tante Paula war gegangen, aber ihr Erbe, das Erbe der Herzlichkeit, des Sehens und Gesehenwerdens, lebte in Christel und ihren Kindern weiter. Das Echo der Vergangenheit hatte seinen Schrecken verloren; es war zu einer Hymne der Liebe geworden.";
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
