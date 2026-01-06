# 📧 Configuración del Newsletter - SERVIN INGENIERÍA

## Estado Actual: Netlify Forms ✅

El newsletter está configurado para funcionar con **Netlify Forms** (gratis, sin backend).

### Ver suscriptores:
1. Ir a [app.netlify.com](https://app.netlify.com)
2. Seleccionar el sitio
3. **Forms** → **newsletter**
4. Ahí verás todos los emails suscritos
5. Podés exportar a CSV

### Configurar notificaciones por email:
1. Netlify Dashboard → **Site configuration** → **Forms**
2. **Form notifications** → **Add notification** → **Email**
3. Poner el email donde querés recibir las suscripciones

---

## 🔄 Migración a Otro Hosting

Cuando migres a un hosting tradicional (HostGator, GoDaddy, etc.), seguí estos pasos:

### Archivo a modificar:
`src/components/ui/NewsletterForm.jsx`

### Líneas a cambiar (21-24):

```javascript
// ACTUAL (Netlify):
const NEWSLETTER_CONFIG = {
  mode: 'netlify',
  endpoint: '/'
};

// CAMBIAR A (Backend propio):
const NEWSLETTER_CONFIG = {
  mode: 'api',
  endpoint: 'https://serviningenieria.com/api/newsletter.php'
};
```

---

## 📁 Backend PHP (para hosting tradicional)

Crear este archivo en tu hosting: `api/newsletter.php`

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}

// Opción 1: Guardar en archivo CSV
$file = __DIR__ . '/subscribers.csv';
$exists = file_exists($file);
$fp = fopen($file, 'a');

if (!$exists) {
    fputcsv($fp, ['email', 'fecha', 'ip']);
}

fputcsv($fp, [
    $email,
    date('Y-m-d H:i:s'),
    $_SERVER['REMOTE_ADDR']
]);

fclose($fp);

// Opción 2: Enviar email de notificación (descomentar si querés)
/*
$to = 'info@serviningenieria.com';
$subject = 'Nueva suscripción al Newsletter';
$message = "Nuevo suscriptor: $email\nFecha: " . date('Y-m-d H:i:s');
$headers = 'From: noreply@serviningenieria.com';
mail($to, $subject, $message, $headers);
*/

// Opción 3: Guardar en base de datos MySQL (descomentar si tenés BD)
/*
$pdo = new PDO('mysql:host=localhost;dbname=servin', 'usuario', 'contraseña');
$stmt = $pdo->prepare('INSERT INTO newsletter (email, fecha) VALUES (?, NOW())');
$stmt->execute([$email]);
*/

echo json_encode(['success' => true, 'message' => 'Suscripción exitosa']);
?>
```

### Crear tabla MySQL (opcional):
```sql
CREATE TABLE newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    activo TINYINT(1) DEFAULT 1
);
```

---

## 📬 Integración con Mailchimp (opcional)

Si querés usar Mailchimp para enviar campañas:

### 1. Obtener URL de Mailchimp:
- Mailchimp → **Audience** → **Signup forms** → **Embedded forms**
- Copiar la URL del `action` del formulario

### 2. Configurar:
```javascript
const NEWSLETTER_CONFIG = {
  mode: 'mailchimp',
  endpoint: 'https://tuempresa.us1.list-manage.com/subscribe/post?u=XXXXX&id=YYYYY'
};
```

---

## 🗑️ Eliminar formulario de Netlify (después de migrar)

En `index.html`, eliminar estas líneas:
```html
<!-- Netlify Forms - Newsletter -->
<form name="newsletter" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="bot-field" />
  <input type="email" name="email" />
</form>
```

---

## ✅ Checklist de Migración

- [ ] Subir `api/newsletter.php` al hosting
- [ ] Crear carpeta `api/` con permisos de escritura
- [ ] Cambiar `NEWSLETTER_CONFIG` en `NewsletterForm.jsx`
- [ ] Probar suscripción
- [ ] Verificar que se guarda en `subscribers.csv`
- [ ] (Opcional) Configurar base de datos MySQL
- [ ] (Opcional) Eliminar formulario Netlify de `index.html`

---

## 📞 Soporte

Si tenés problemas con la configuración, los archivos relevantes son:
- `src/components/ui/NewsletterForm.jsx` - Componente del formulario
- `index.html` - Declaración para Netlify Forms
- `api/newsletter.php` - Backend PHP (crear en hosting)
