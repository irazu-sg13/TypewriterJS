// comentario

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Bienvenidas y bienvenidos a esta página web.")
  .pauseFor(300)
  .deleteChars(32)
  .typeString('<strong><span style="color: purple;"> Tecnolochicas </span></strong>')
  .typeString(
    '<strong><span style="color: brown;"> ¡Saludos Cordiales! </span></strong>'
  )
  .pauseFor(1000)
  .start();
