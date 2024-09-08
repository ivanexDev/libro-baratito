
---

## Automatización de Commits y Configuración de Supabase

### Automatización de Commits

Para automatizar la creación de commits utilizando `commitizen`, `commitlint` y `husky`, sigue estos pasos:

1. **Agregar cambios al área de staging:**

   ```bash
   git add .
   ```

2. **Automatizar la creación de commits:**

   Ejecuta el siguiente comando para iniciar el proceso de commit:

   ```bash
   npm run commit
   ```

### Configuración de Supabase

Para probar las funcionalidades de login y registro con Supabase, sigue estos pasos:

1. **Crear el archivo de configuración:**

   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   ```

2. **Configurar el template de confirmación de registro:**

   Para que la confirmación de registro de usuario funcione correctamente, actualiza el template en Supabase con el siguiente contenido:

   ```html
   <h2>Confirma tu correo electrónico</h2>

   <p>Haz clic en el enlace para confirmar tu usuario:</p>
   <p>
     <a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=signup">
       Confirma tu correo
     </a>
   </p>
   ```

   **Nota:** Asegúrate de que el enlace de confirmación tenga la siguiente estructura:

   ```bash
   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=signup
   ```

3. **Configurar la recuperación de contraseñas:**

   Para que la recuperación de contraseñas funcione correctamente, asegúrate de que la URL de redirección esté configurada adecuadamente en la ruta de `reset-password`. Aquí tienes un ejemplo de cómo configurar esta funcionalidad en tu código:

   ```tsx
   async function resetPassword(values: { email: string }) {
     setIsLoading(true);

     const { data, error } = await supabase.auth.resetPasswordForEmail(
       values.email,
       {
         redirectTo: 'http://localhost:3000/auth/update-password',
       }
     );

     if (error) {
       router.push(
         `/reset-password?message=${encodeURIComponent(error.message)}`
       );
     } else {
       router.replace(`/auth/reset-password?email-sent=true`);
     }

     setIsLoading(false);
   }
   ```

   **Nota:** Asegúrate de que la URL de redirección (`redirectTo`) sea la correcta para tu aplicación.

--