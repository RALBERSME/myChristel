let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Herbst des Jahres 1957 färbte die mächtigen Eichen rund um das Pfarrhaus von Plopsberg in ein tiefes, trauriges Gold. Christel war inzwischen sechzehn Jahre alt. Ihr Geist war unter der liebevollen Anleitung von Onkel Max scharf geworden, ihr Herz unter Tante Paulas Fürsorge weich und mitfühlend. Sie besuchte das Gymnasium in der nahen Kreisstadt, sprach fließend Hochdeutsch und trug Kleider, die nicht mehr nach Stall und schwerer Erde rochen. Doch mitten in diese unbeschwerte Jugendzeit brach ein Telegramm vom Heimathof ein, das die mühsam aufgebaute Idylle mit einem Schlag zerriss: Willi war tot. Sein Herz hatte der jahrelangen körperlichen Schinderei, den Schmerzen der Schulter und der unaufhörlichen Sorge um die drückenden Polio-Schulden nicht mehr standgehalten. Zusammen mit Tante Paula reiste Christel am Tag vor der Beerdigung zurück in das Dorf ihrer Kindheit. Als sie den Fuß auf den alten Hofplatz setzte, schnürte die vertraute, bleierne Enge ihr augenblicklich die Kehle zu. Das Fachwerkhaus wirkte in der Novembersonne noch düsterer als in ihrer Erinnerung. Im Flur hing noch immer derselbe bittere Geruch von kaltem Rauch, ungewaschener Wäsche und ungeweinten Tränen. In der schwarzen Stube saß Luise am Fenster. Als sie ihre sechzehnjährige Tochter erblickte, stand sie nicht auf. Sie blickte Christel aus matten, eingefallenen Augen an, und für einen Moment schien es, als erkenne sie das gebildete, gut gekleidete Mädchen vor ihr kaum wieder. Ihre Begrüßung war kein Händedruck und keine Umarmung. Da bist du ja, sagte Luise bloß mit einer Stimme, die so trocken war wie welkes Herbstlaub. Neben ihr stand Richard, inzwischen sechzehn, der sich schwer auf einen hölzernen Stock stützte, sein linkes Bein war dünn und leblos geblieben, ein ewiges Mahnmal des unsichtbaren Feindes. Die jüngeren Geschwister Sophie und Gustav drückten sich scheu in die Ecken, starrten Christel an wie eine Fremde aus einer fernen, unerreichbaren Welt. Die Entfremdung war mit Händen zu greifen. Am nächsten Morgen zog der Trauerzug zum Friedhof. Der Wind blies eisig über die Gräber, als Willis Sarg in die feuchte Erde hinabgelassen wurde. Als die Erde dumpf auf das Holz schlug, brachen bei Christel alle Dämme. Die Tränen liefen ihr unaufhörlich über die Wangen. Sie trauerte um den Vater, der eigentlich so gerne gesungen und getanzt hatte, dessen Fröhlichkeit aber im unerbittlichen Mühlrad dieses Hofes zermahlen worden war. Sie trauerte um den Mann, der zu schwach gewesen war, sie vor Großvater Alfred zu beschützen, der sie aber auf seine eigene, unbeholfene Art geliebt hatte. Christel blickte während des Gebets zu ihrer Mutter hinüber. Luise stand kerzengerade da, die Hände starr um den Rosenkranz geklammert. Keine einzige Träne rann über ihr Gesicht. Sie war vollkommen versteinert, unfähig zu weinen, unfähig zu fühlen. In diesem Moment begriff Christel mit schmerzhafter Klarheit, dass die emotionale Kälte ihrer Mutter kein Schutzwall gegen die Welt war, sondern das traurige Endergebnis einer totalen inneren Zerstörung. Nach dem Leichenschmaus, bei dem kaum gesprochen wurde, hielt Christel es nicht mehr aus. Sie ging hinaus zum Hoftor, wo Tante Paula bereits auf sie wartete. Sie drehte sich noch einmal um und blickte auf das Haus zurück, in dem sie das Licht der Welt erblickt hatte. Richard stand an der Stalltür, Sophie spähte aus dem Küchenfenster . Niemand rief ihr nach. Niemand bat sie zu bleiben. Als sie an der Seite von Tante Paula in den Bus stieg, der sie zurück nach Plopsberg bringen sollte, spürte Christel eine tiefe, bittersüße Gewissheit. Der Tod des Vaters hatte das letzte dünne Band zu ihrer Herkunftsfamilie zerschnitten. Sie gehörte nicht hierher. Ihr Leben würde sich nicht in dieser Kälte abspielen. Sie weinte auf Paulas Schulter um den verlorenen Vater, doch als der Bus die Hügel des Hofes hinter sich ließ, spürte sie unter dem Schmerz eine unbändige Kraft. Sie würde ihren Weg gehen, für sich, für ihren Vater Willi und für all die Träume, die man ihrer Mutter einst geraubt hatte.";
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
