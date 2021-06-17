<p align="center">
  <a>
    <img src="https://static.vecteezy.com/system/resources/previews/000/423/990/original/vector-document-in-folder-icon.jpg"" alt="Logo" width="150" height="150">
  </a>

  <h2 align="center">prueba-programacion-procesos-eficientes</h2>
                
  <h4 align = "center">instrucciones para levantar el ambiente local de desarrollo y la base de datos</h4>
</p>


<details open="open">
  <summary><h2 style="display: inline-block">Contenido</h2></summary>
  <ol>
    <li><a href="#acerca-de">Acerca de</a></li>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#pre-requisitos">pre-requisitos</a></li>
    <li><a href="#Instalacion">Instalacion</a></li>
    <li><a href="#Levantar-base-de-datos">Levantar base de datos</a></li>
    <li>
        <a href="#Ejecutar">Ejecutar</a>
        <ul>
            <li><a href ="#Guia-de-las-pruebas">Guia de las pruebas</a></li>
        </ul>
    </li>
  </ol>
</details>

## Acerca de

 <img src="frontend/Imagen Acerca de.png " align ="center" alt="acerca de" width="700" height="350"> 
                                                                              
EL proyecto consiste en el sistema de control y registro de vehiculos, en el cual se podra tambien modificar 
los datos asi como eliminar un vehiculo en especifico.
 
El objetivo de este documento es ayudar a cualquier desarrollador para que pueda ejecturalo sin problemas dentro
de su propio dispositivo, por lo cual se desglosara a continuación lo que necesita para poder utilizar la aplicacion
sin ningun problema. (El backend ya esta terminado, la vista aun no tiene logica de programación).

## Tecnologias utilizadas

* [NodeJS](https://nodejs.org/)
* [Express](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* Javascript
* HTML
* CSS               

## pre-requisitos

Para que el proyecto pueda correr de forma correcta, necesita lo siguiente:
* npm
  ```sh
  npm install npm@latest -g
  ```
* MySQL
     :para poder hacer la conexion con la base de datos, debe importar el archivo carrosdb.sql a cualquier herramienta de administracion
     de base de datos, por ejemplo: MySQL workbench, MariaDB, phpMyAdmin. Esto para poder realizar la conexion de la base de datos a la aplicacion,
     más adelante se explicara como levantar la base de datos utilizando phpMyAdmin, ya que lo realice de esta manera en mi equipo y considere que 
     sería mas practico realizarlo de esta manera.
* Postman
      : El programa servira para realizar las pruebas de lado backend (express, nodejs), para descargarla, hacer click aqui: [postman.com](https://www.postman.com/)
* NodeJs
      : A traves de este entorno de desarrollo, se ejecutara la aplicacion, para descargar, hacer click [aqui](https://nodejs.org/es/download/), ejecutar el siguiente
        comando en el cmd.   Lo marcado en rojo, es la version de nodejs, lo cual indica que si esta instalada.
                                                                                                   
     <img src="frontend/verificacion instalacion nodejs.png " align ="center" alt="acerca de" width="700" height="350"> 
                                                                                                       
  ## Levantar base de datos
     * Primero debemos descargar e instalar [xampp](https://www.apachefriends.org/download.html), al momento de instalar, seleccionamos que instale unicamente Mysql, apache
       y phpmyAdmin, que son las herramientas que utilizaremos, como en la siguiente imagen.
        <img src="frontend/programas que debemos activar para xampp.jpg " align ="center" alt="acerca de" width="700" height="350"> 
                                                                                                                                  
     * Una vez instalado, debemos activar el servicio, para ello abrimos el panel de control de xampp y activamos los servicios apache y mysql
                                                                                                                                  
         <img src="frontend/servicios de xampp.png " align ="center" alt="acerca de" width="700" height="350"> 
                                                                                                                            
     * Cuando esten los dos servicios activos, nos dirigimos al navegador y nos dirijimos a [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/)
        y nos debera mostrar lo siguiente:
                  
        <img src="frontend/phpmyadminInicio.png " align ="center" alt="acerca de" width="700" height="350">                                                                                                                             
     * para finalizar, importe la base de datos ubicada en el archivo carros.sql, y verifique los datos del usuario administrador de phpmyadmin (usuario y contraseña)
         esto para evitar problemas con la conexion durante la ejecucion del programa, si sucede, cambiar el user y password por los que usted posea en phpmyadmin, y 
          verifique que el nombre de la base de datos sea el correcto.
           
       <img src="frontend/verificar datos mysql.png" align ="center" alt="acerca de" width="700" height="350"> 
                                     
## Instalacion

para tener una copia local del proyecto, siga los siguientes pasos.

1. Clonar el repositorio
   ```sh
   git clone https://github.com/jelg14/prueba-programacion
   ```
2. instalar todos los paquetes de Packet.json
   ```sh
   npm install .
   ```

## Ejecutar
Para ejecutar el proyecto, realice los siguientes pasos:
 
  1. Ejecutar el comando de Inicio:
    ```sh                         
    npm start
    ```
  3. Una vez se ejecute el proyecto, se podra comenzar a realizar las pruebas de funcion con Postman.


### Guia de las pruebas   
                                               
     *para realizar las pruebas, debemos abrir postman y realizar lo siguiente
                                               
      --Para verificar la opcion de busqueda grupal, verifique los siguientes datos:
         1. Que este la opcion GET
         2. Que la url sea: http://localhost:3000/autosRegistrados  
      Una ves que se verifique, hacer click en send y le mostrara el resultado de la imagen.
      <img src="frontend/verificar datos mysql.png" align ="center" alt="acerca de" width="700" height="350">
                                                                                                            
       --Para verificar la opcion de busqueda individual, verifique los siguientes datos:
         1. Que este la opcion GET
         2. Que la url sea: http://localhost:3000/datosDelAuto/:<id_del_auto>
       Una ves que se verifique, hacer click en send y le mostrara el resultado de la imagen.
       <img src="frontend/verificar datos mysql.png" align ="center" alt="acerca de" width="700" height="350"> 
                                                                                                             
    --Para verificar la opcion de editar, verifique los siguientes datos:
         1. Que este la opcion PUT
         2. Que la url sea: http://localhost:3000/editarAuto/:<id_del_auto>
    Una ves que se verifique, utilice de ejmplo este formato json para modificar, lo valores
    puede cambiarlos por los que usted quiera
                                                                                                             
    <img src="frontend/verificar datos mysql.png" align ="center" alt="acerca de" width="700" height="350"> 
                                                                                                          
    Una ves que haga click en send, le mostrara el resultado de la imagen. 
                                                                                                          
    <img src="frontend/verificar datos mysql.png" align ="center" alt="acerca de" width="700" height="350"> 
                                                                                                          
    Puede verificar la actualizacion del dato utilizando la opcion de busqueda por id.
                                               
                                                                                                          
     --Para verificar la opcion de eliminar, verifique los siguientes datos:
         1. Que este la opcion DELETE
         2. Que la url sea: http://localhost:3000/datosDelAuto/:<id_del_auto>
     Una ves que haga click en send, le mostrara el resultado de la imagen.
                                                                                                          
       <img src="frontend/verificar datos mysql.png" align ="center" alt="acerca de" width="700" height="350">   
                                                                                                             
     puede verificar que el dato se elimino utilizando la busqueda por id, la cual no mostrara resultado
                                             
                                                                                                             
## Contact

José López - email [jeduardo14lopez@gmail.com](jeduardo14lopez@gmail.com)

Project Link: [https://github.com/jelg14/prueba-programacion](https://github.com/jelg14/prueba-programacion)
