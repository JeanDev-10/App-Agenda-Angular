<h1>API Laravel con Angular</h1>

<p>Este proyecto consiste en una API desarrollada en Laravel, diseñada para gestionar operaciones CRUD completas, incluyendo autenticación y manejo de tablas relacionadas. Esta API será consumida por un frontend desarrollado en Angular, ofreciendo una solución robusta y eficiente para la gestión de datos.</p>

<h2>Características</h2>
<ul>
    <li><strong>Autenticación Segura:</strong> Implementación de JWT (JSON Web Tokens) para la autenticación de usuarios, asegurando que solo usuarios autorizados puedan acceder a los recursos.</li>
    <li><strong>Operaciones CRUD:</strong> Soporte completo para Crear, Leer, Actualizar y Eliminar recursos en la base de datos.</li>
    <li><strong>Relaciones de Tablas:</strong> Manejo de relaciones entre tablas, permitiendo operaciones complejas y consultas eficientes.</li>
    <li><strong>Validación de Datos:</strong> Validaciones exhaustivas en las solicitudes, garantizando la integridad y consistencia de los datos.</li>
    <li><strong>API Documentada:</strong> Documentación completa de la API utilizando Swagger, facilitando la comprensión y uso de los endpoints.</li>
    <li><strong>Integración con Frontend en Angular:</strong> Diseñada para ser consumida por un frontend desarrollado en Angular, proporcionando una experiencia de usuario fluida y dinámica.</li>
</ul>

<h2>Tecnologías Utilizadas</h2>
<ul>
    <li><strong>Backend:</strong> Laravel</li>
    <li><strong>Frontend:</strong> Angular</li>
    <li><strong>Autenticación:</strong> JWT (JSON Web Tokens)</li>
    <li><strong>Base de Datos:</strong> MySQL</li>
    <li><strong>Documentación de API:</strong> Swagger</li>
    <li><strong>Framework de UI:</strong> PrimeNG</li>
    <li><strong>Lenguaje:</strong> TypeScript</li>
</ul>

<h2>Instalación y Configuración del Backend (Laravel)</h2>
<ol>
    <li><strong>Clonar el repositorio:</strong>
        <pre><code>git clone https://github.com/Jean10112002/api-laravel-agendaApp.git
cd api-laravel-agendaApp</code></pre>
    </li>
    <li><strong>Instalar dependencias:</strong>
        <pre><code>composer install
npm install</code></pre>
    </li>
    <li><strong>Configurar el entorno:</strong>
        <p>Copia el archivo <code>.env.example</code> a <code>.env</code> y configura las variables de entorno necesarias (base de datos, autenticación, etc.).</p>
    </li>
    <li><strong>Generar la clave de la aplicación:</strong>
        <pre><code>php artisan key:generate</code></pre>
    </li>
    <li><strong>Migrar y sembrar la base de datos:</strong>
        <pre><code>php artisan migrate --seed</code></pre>
    </li>
    <li><strong>Iniciar el servidor:</strong>
        <pre><code>php artisan serve</code></pre>
    </li>
</ol>

<h2>Instalación y Configuración del Frontend (Angular)</h2>
<ol>
    <li><strong>Clonar el repositorio Front end:</strong>
        <pre><code>git clone https://github.com/Jean10112002/App-Agenda-Angular.git</code></pre>
    </li>
    <li><strong>Entrar a la carpeta</strong>
        <pre><code>cd App-Agenda-Angular</code></pre>
    </li>
    <li><strong>Instalar dependencias:</strong>
        <pre><code>npm i</code></pre>
    </li>
    <li><strong>Iniciar el servidor de desarrollo:</strong>
        <pre><code>ng serve</code></pre>
    </li>
</ol>

<h2>Uso</h2>
<p>Una vez que el servidor esté en funcionamiento, la API estará disponible en <code>http://localhost:8000</code>. Puedes acceder a la documentación de la API en <code>http://localhost:8000/api/documentation</code>.</p>
<p>El frontend en Angular se iniciará en <code>http://localhost:4200</code>. Este frontend consumirá la API de Laravel para realizar las operaciones CRUD.</p>

<h2>Contribución</h2>
<p>¡Contribuciones son bienvenidas! Si deseas colaborar, por favor abre un issue o envía un pull request con tus cambios.</p>

<h2>Licencia</h2>
<p>Este proyecto está bajo la licencia MIT. Consulta el archivo <code>LICENSE</code> para más detalles.</p>


