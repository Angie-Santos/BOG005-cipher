
# :unlock: KEEP SAFE :lock:

**KEEP SAFE** es una página web con la función de cifrar contraseñas. Usa el [cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar) cuya funcionaldad se basa en correr un número de posiciones (especficadas por el usuario) en el código ASCII para generar una nueva contraseña partiendo del texto ingresado. Esto garantiza que el usuario sólo deba saber el texto ingresado y la clave de posiciones Este proceso se puede revertir con la opción de descifrar.  

### ¿A quién va dirigido?

**KEEP SAFE** va dirigido a todo público que quiera cuidar de su seguridad digital. 

### ¿Cuáles son los objetivos del usuario con relación al producto?

La/el usuaria/o objetivo quiere poder proteger sus contraseñas de ataques, robos y fltraciones de información. 

### ¿Cómo el producto resuelve el problema del usuario?

Nuestro cifrado le permite el usuario/a usar contraseñas que sean familiares para luego cifrarla con una clave que sólo el posee, así tiene contraseñas memorables con un alto nivel de seguridad. 

## Identidad de marca

### Colores   
              
* `#F5F5F5`    
* `#D9D9D9`
* `#01FE88`
* `#171717`

### Fuentes 

La fuente utilizada fue La familia de [Dosis](https://fonts.google.com/specimen/Dosis?subset=cyrillic)

## Diseño del prototipo

### Prototipo de bajo nivel

![PrototipoLowLevel](/Prototipo-baja-fidelidad.jpeg) 

### Prototipo de alto nivel con interacciones

Para observar las interacciones del prototipo de click [aquí](https://www.figma.com/proto/SWWmMurapgrTLLWcg2jz0S/Project-Cipher?page-id=0%3A1&node-id=2%3A2&viewport=-423%2C6%2C0.5&scaling=scale-down&starting-point-node-id=2%3A2&show-proto-sidebar=1) 

![PrototipoHighLevel1](/Prototipo-alta-fidelidad-1.jpeg) ![PrototipoHighLevel2](/Prototipo-alta-fidelidad-2.jpeg) 

## Funcionalidad

### ¿Cómo está estructura la página web y cuál es su flujo óptimo? 

La página esta compuesta de dos pantallas, una que visualiza el mensaje de bienvenida y otra en la que se encuentra la funcionalidad de cifrar/descifrar. Estas pantallas estan conectadas mediante un botón de Continuar, que da paso del mensaje de bienvenida a la página de cifrado/descifrado. 

En la pantalla de cifrado/descifrado nos encontramos con una caja que recibe texto (donde se ingresa la contraseña) y otra que recibe números (donde se ingresa el offset), el usuario debe ingresar la contraseña que desea cifrar o descifrar y su clave/key, luego se encuentra con dos botones: cifrar y descifrar, luego de haber llenado los campos el usuario escogera la acción que desea ejecutar. Luego, en una caja de texto que se encuentra en la parte inferior, después de los botones, aparecera el resultado cifrado o descifrado, según sea el caso. El usuario puede repetir esta operación cuantas veces desee.  

### ¿Cómo está compuesto el código de la página web? 

#### HTML

A parte de sus etiquetas principales, dentro del body esta compuesto por un header, dos cajas (pantalla de bienvenida y pantalla de cifrado) y footer.
* En el *header* encontramos únicamente el logo. 
* La *pantalla de bienvenida* contiene un título, un párrafo y un botón que conecta la pantalla de bienvenida con la pantalla de cifrado.
* La *pantalla de cifrado* se encuentra en display:none (pantalla oculta) hasta que se preciona el botón de la pantalla ed bienvenida. Esta compuesta por un título, una caja para ingresar texto, una caja para ingresar números, los botones de cifrado y descifrado y por último la caja de tetxo donde se muestra el resultado. 
* En el *footer* únicamnete se encuentra un parrafó.

#### CSS

* Se implementa el uso del selector universal para darle la misma fuente de texto a la página.
* se usa el modelo de caja para organizar visualmente el contenido, apoyandonos mayormente en las propiedades de padding y margin.
* se modifican los color, tamaño, peso y espaciado de los textos con las propiedades color, font-weight, font-size, line-height y se alinean mediante la propiedad text-align.
* Se da color al fondo con background-color, se colocan imágenes y degradados mediante background-image.
* Se implemento la declaración position:sticky para que el header quede fijo y pueda seguirse visualizando mientras nos desplazamos verticalmente ne la página. 
* Se usa la declaración display:none para definir el estado inicial de la pantalla de cifrado.
* Se utilizan las propiedades border-radius, border-color, border-width y resize para dar estilo a los bordes de las cajas de texto.
* Y por último, se utiliza flexbox para centrar el contenido del Footer. 

#### JavaScript

##### Index

* Se importa el objeto cipher.

* Se encuentran 3 funciones: change display, Encode y Decode.
    * *Change display*: es la encargada de cambiar de la pantalla de bienvenida a la pantalla de cifrado medianto un listener en el boton, tiene una función que cambia la propiedad del display de la pantalla de bienvenida a none (lo oculta) y muestra el display de la pantalla de cifrado.

    * *Encode*: captura los valores que se encuentran en los campos de texto mediante un listener en el botón de cifrar y los almacenan en dos variables, offset para la clave y string para el texto, también cuenta con una comprobación de que no se pasen valores vacios enviando un mensaje mediante alert. Si los valores son válidos entonces los pasa al objeto cipher.encode para que luego el resultado sea asignado mediante document.GetElemetByID para poder modificar el DOM con ayuda de la propiedad Textcontent.

    * *Decode*: captura los valores que se encuentran en los campos de texto mediante un listener en el botón de descifrar y los almacenan en dos variables, offset para la clave y string para el texto, también cuenta con una comprobación de que no se pasen valores vacios enviando un mensaje mediante alert. Si los valores son válidos entonces los pasa al objeto cipher.decode para que luego el resultado sea asignado mediante document.GetElemetByID para poder modificar el DOM con ayuda de la propiedad Textcontent

##### Cipher
* Se encuentran 2 métodos:

    * *Encode*: recibe los valores que se enviaron desde index.js, se crea un TypeError en caso de que los valores no correspondan al tipo de dato esperado, luego se comprueba mediante un ciclo for cáracter por cáracter sí corresponde a mayúscula, minúscula, tilde u otro valor diferente y se cifra mediante una fórmula específica para cada caso. Se usan las propiedades charCodeAt y fromCharCode para obtener su valor en ascii y luego del proceso de cifrado volverlo a convertir a texto, por último retorna la cadena ya cifrada.

    * *Decode*: recibe los valores que se enviaron desde index.js, se crea un TypeError en caso de que los valores no correspondan al tipo de dato esperado, luego se comprueba mediante un ciclo for cáracter por cáracter sí corresponde a mayúscula, minúscula, tilde u otro valor diferente y se descifra mediante una fórmula específica para cada caso. Se usan las propiedades charCodeAt y fromCharCode para obtener su valor en ascii y luego del proceso de cifrado volverlo a convertir a texto, por último retorna la cadena ya descifrada.

* Se exporta el objeto


> 07/2022 :pleading_face: