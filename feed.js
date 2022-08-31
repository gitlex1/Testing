
//const rss_url = 'https://www.clarin.com/rss/lo-ultimo/';
const rss_url = 'lo-ultimo.xml';

fetch(rss_url)
	.then(respuesta => respuesta.text())
	.then(contenido => new window.DOMParser().parseFromString(contenido, "text/xml"))
	.then(datos => {
		const entradas = datos.querySelectorAll("item");
		let html='';
		entradas.forEach(elemento => {
		html +=`
			<article>
				<h2>
					${elemento.querySelector("title").innerHTML}
				</h2>
			</article>
			`;		
	});
	document.getElementById("contenedor-rss").insertAdjacentHTML("afterbegin",html);
});


// const atom_url = 'atom.xml';
// fetch(atom_url)
//     .then(respuesta => respuesta.text())
//     .then(contenido => new window.DOMParser().parseFromString(contenido, "text/xml"))
//     .then(datos => {
//         const entradas = datos.querySelectorAll("entry");
//         let html = '';
//         entradas.forEach(elemento => {
//             html += `
//                 <article>
//                     <h2>
//                         ${elemento.querySelector("title").innerHTML}
//                     </h2>
//                     <p>
//                         ${elemento.querySelector("content").innerHTML.split("<br>&#8212")[0]}
//                     </p>
//                 </article>
//                 `;
//         });
//         document.getElementById("contenedor-atom").insertAdjacentHTML("afterbegin", html);
//     });

    /***************************************************** */ 

// fetch(atom_url)
//     .then(respuesta => respuesta.text())
//     .then(contenido => new window.DOMParser().parseFromString(contenido, "text/xml"))
//     .then(datos => {
//         const entradas = datos.querySelectorAll("chanel");
//         let html = '';
//         entradas.forEach(elemento => {
//             html += `
//                 <item>
//                     <h2>
//                         ${elemento.querySelector("title").innerHTML}
//                     </h2>
//                     <p>
//                         ${elemento.querySelector("description").innerHTML}
//                     </p>
//                 </item>
//                 `;
//         });
//         document.getElementById("contenedor-atom").insertAdjacentHTML("afterbegin", html);
//     });
