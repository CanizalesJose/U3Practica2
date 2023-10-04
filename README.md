# **Analisis**

#### 1. **Explique el funcionamiento de la etiqueta input en HTML, indicando los diferentes argumentos que puede tener.**
- Es una etiqueta que permite la interacción de usuarios con el contenido de la página. Indica que se puede introducir información por parte del usuario.
- La información que puede contener varía dependiendo del argumento *`type`*, sin embargo, los distintos argumentos que puede tener se muestran a continuación:
  - *`accept`*, *`alt`*, *`autocomplete`*, *`autofocus`*, *`checked`*, *`dirname`*, *`disabled`*, *`form`*, *`formaction`*, *`formmethod`*, *`formnovalidate`*, *`formtarget`*, *`height`*, *`list`*, *`max`*, *`maxlength`*, *`min`*, *`minlength`*, *`multiple`*, *`name`*, *`pattern`*, *`placeholder`*, *`readonly`*, *`required`*, *`size`*, *`src`*, *`step`*, *`type`*, *`value`*, *`width`*.

#### 2. Explique como puede configurarse la etiqueta button
- Esta etiqueta puede modificarse como normalmente se modificaría un contenedor, dandole formato con atributos globales. Sin embargo posee sus propios atributos. Entre los mas relevantes se encuentran:
  - `formaction`: Recibe una URL y determina la dirección donde se recibe la información del `form`.
  - `formentype`: Determina la forma de codificar la información.
  - `formtype`: Determina el mensaje HTTP (`put` o `post`).
  - `type`: Determina el tipo de botón, ya sea de borrado, envío o un botón general.

#### 3. Explique el método addEventlistener y como se utiliza en este proyecto
- Este metodo le dice a la página que este atenta a un evento o interacción con el documento. En este proyecto se usa para indicar al `form` que este atento cuando se envie a través del botón.

#### 4. Explique la forma en que son validadas cada una de las entradas.
- `ID`: es validada usando una expresión regular y contrastandola con el campo correspondiente.
- `Nombre y Apellido`: Se cortan los extremos de los valores del contenedor y se valida que el resultado no esté vacío.
- `Telefono`: al igual que el ID, se usa una expresión regular que valida el formato elegido, forzando que incluya los parentesis y tres numeros entre ellos, tres numeros inmediatamente después de ellos, seguido de un guion, seguido de cuatro numeros mas.
- `Correo`: de igual forma, se hace uso de expresiones regulares y se contrasta con el valor del campo.
- `Edad`: Se intenta convertir el valor del campo con el metodo Parse. Si es posible, entonces se sabe que se trata de un número. Despues de eso, se usa una condicional para verificar que sea mayor a 0.
- `Fecha`: se hace uso de expresiones regulares, aunque en este caso, es menos necesario, dado que el campo tiene un atributo que le hace adquirir el formato adecuado de forma automatica.

#### 5. Modifique el código de tal forma que envíe un mensaje de error que incluya todas las observaciones
- Vease la branch `punto5`.

#### 6. Modifique el código de tal forma que debajo de cada entrada errónea envíe un error en color rojo
- Vease la branch `punto6`.