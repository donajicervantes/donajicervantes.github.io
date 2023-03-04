let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#f1bdef;">Soy Bióloga y programadora en sitios web.</span>')
  .deleteChars(10)
  .start();

