// Obtener la cadena de consulta de la URL
var queryString = window.location.search;

// Crear un objeto URLSearchParams a partir de la cadena de consulta
var params = new URLSearchParams(queryString);

// Obtener los valores de los parámetros por su nombre
var correo = params.get("correo");

// Hacer uso de los valores obtenidos
console.log("correo: " + correo);

const title = document.querySelector("#title");
const container = document.querySelector("#container");

title.textContent = "Bienvenido: " + correo;

const cursosDesarrollo = [
  {
    nombre: "Curso completo de desarrollo web",
    pagina: "Udemy",
    link: "https://www.udemy.com/curso-desarrollo-web",
    imagen: "https://www.mtp.es/wp-content/uploads/2020/01/python_MTP.jpg",
    descripcion:
      "Aprende las tecnologías fundamentales para el desarrollo web, incluyendo HTML, CSS y JavaScript. Este curso te enseñará cómo construir sitios web interactivos y responsivos desde cero.",
  },
  {
    nombre: "Introducción a la programación en Python",
    pagina: "Coursera",
    link: "https://www.coursera.org/programacion-python",
    imagen: "https://www.eadic.com/wp-content/uploads/2017/04/Foto25.jpg",
    descripcion:
      "Descubre los conceptos básicos de la programación utilizando Python. Aprenderás sobre variables, estructuras de control y funciones, y cómo aplicarlos para resolver problemas reales.",
  },
  {
    nombre: "Desarrollo de aplicaciones móviles con React Native",
    pagina: "Platzi",
    link: "https://www.platzi.com/cursos/react-native",
    imagen:
      "https://assets.bedu.org/images/top-lenguajes-programacion-2021.jpg?w=1200",
    descripcion:
      "Conviértete en un experto en el desarrollo de aplicaciones móviles utilizando React Native. Aprenderás a construir aplicaciones para iOS y Android utilizando JavaScript y componentes nativos.",
  },
  {
    nombre: "Machine Learning con Python",
    pagina: "DataCamp",
    link: "https://www.datacamp.com/courses/machine-learning-python",
    imagen:
      "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/03/Software-Developer-Programming-Computer.jpeg?resize=1200%2C801&quality=50&strip=all&ssl=1",
    descripcion:
      "Aprende las técnicas y algoritmos fundamentales de Machine Learning utilizando Python. Este curso te proporcionará los conocimientos necesarios para aplicar Machine Learning en proyectos reales.",
  },
  {
    nombre: "Desarrollo de aplicaciones web con Django",
    pagina: "edX",
    link: "https://www.edx.org/curso/desarrollo-aplicaciones-web-django",
    imagen:
      "https://www.nextibs.com/wp-content/uploads/2021/12/seguridad-informatica-1024x439.jpeg.webp",
    descripcion:
      "Aprende a construir aplicaciones web potentes y escalables utilizando Django, un framework de desarrollo web en Python. Este curso te guiará a través de la creación de aplicaciones desde cero.",
  },
  {
    nombre: "Aprende Git y GitHub",
    pagina: "Codecademy",
    link: "https://www.codecademy.com/cursos/aprende-git",
    imagen:
      "https://geoinnova.org/wp-content/uploads/2021/08/programacion-2.jpg",
    descripcion:
      "Domina Git y GitHub, herramientas indispensables para el control de versiones y colaboración en proyectos de desarrollo. Este curso te enseñará a trabajar de manera efectiva con repositorios y ramas.",
  },
  {
    nombre: "Desarrollo de aplicaciones móviles con Flutter",
    pagina: "Udacity",
    link: "https://www.udacity.com/course/curso-flutter",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuw2VbU8py3ivwoNYTpgZw0RKcahwbPd0zwrOQp8nzQ18S5RDhiqD08xelDApzXmu1IvQ&usqp=CAU",
    descripcion:
      "Aprende a crear aplicaciones móviles multiplataforma utilizando Flutter y Dart. Este curso te brindará los conocimientos necesarios para construir interfaces atractivas y funcionales.",
  },
  {
    nombre: "Programación orientada a objetos en Java",
    pagina: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/programacion-orientada-a-objetos-java",
    imagen:
      "https://287524.fs1.hubspotusercontent-na1.net/hubfs/287524/Imported_Blog_Media/para-que-sirve-la-programacion-1-compressor-1.jpg",
    descripcion:
      "Descubre los principios de la programación orientada a objetos utilizando Java. Aprenderás a crear clases, objetos, herencia y polimorfismo, entre otros conceptos fundamentales.",
  },
  {
    nombre: "Desarrollo de aplicaciones web con Angular",
    pagina: "Pluralsight",
    link: "https://www.pluralsight.com/cursos/desarrollo-aplicaciones-web-angular",
    imagen:
      "https://desarrollodesoftware.dev/wp-content/webp-express/webp-images/uploads/2022/03/Historia-de-los-lenguajes-de-programacion2.jpg.webp",
    descripcion:
      "Conviértete en un experto en el desarrollo de aplicaciones web utilizando Angular. Aprenderás a construir aplicaciones SPA (Single Page Application) con un rendimiento excepcional.",
  },
  {
    nombre: "Introducción a la seguridad informática",
    pagina: "Cybrary",
    link: "https://www.cybrary.com/course/introduccion-seguridad-informatica",
    imagen:
      "https://global-uploads.webflow.com/5f5a53e153805db840dae2db/643ec21a9c45304c1a3a07b7_Que%20es%20un%20lenguaje%20de%20programacion%20JavaScript.jpg",
    descripcion:
      "Explora los conceptos básicos de la seguridad informática, incluyendo criptografía, hacking ético y protección de datos. Este curso te ayudará a comprender las amenazas y salvaguardar la información.",
  },
];

cursosDesarrollo.forEach((curso) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imagen = document.createElement("img");
  imagen.src = curso.imagen;

  const titulo = document.createElement("h3");
  titulo.textContent = curso.nombre;

  const pagina = document.createElement("p");
  pagina.textContent = "Página: " + curso.pagina;

  const descripcion = document.createElement("p");
  descripcion.textContent = curso.descripcion;

  const enlace = document.createElement("a");
  enlace.href = curso.link;
  enlace.textContent = "Ir al curso";

  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(pagina);
  card.appendChild(descripcion);
  card.appendChild(enlace);

  container.appendChild(card);
});
