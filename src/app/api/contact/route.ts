import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact] RESEND_API_KEY no configurada");
      return Response.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "hola@culturaenproyectos.com.ar";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const fromName = process.env.CONTACT_FROM_NAME || "Contacto Web";

    console.log("[Contact] Enviando desde:", fromEmail, "para:", toEmail);

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde culturaenproyectos.org`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: sans-serif; background: #f5f5f5; padding: 32px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(135deg, #1b4332, #2d6a4f); padding: 24px 32px;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje de contacto</h1>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #888; font-size: 14px; width: 100px;">Nombre:</td>
                  <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888; font-size: 14px;">Email:</td>
                  <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2d6a4f;">${email}</a></td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
              <h2 style="font-size: 16px; color: #1b4332; margin: 0 0 8px;">Mensaje</h2>
              <p style="font-size: 14px; line-height: 1.6; color: #444; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="background: #f8faf8; padding: 16px 32px; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #aaa; margin: 0;">
                Enviado desde culturaenproyectos.org
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("[Contact] Resend error:", JSON.stringify(error, null, 2));
      return Response.json(
        { error: "Error al enviar el mensaje", details: error.message || "Error desconocido de Resend" },
        { status: 500 }
      );
    }

    console.log("[Contact] Email enviado exitosamente ID:", data?.id);
    return Response.json({ success: true });
  } catch (err) {
    console.error("[Contact] Error inesperado:", err);
    return Response.json(
      { error: "Error interno del servidor", details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
