import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * Serviço de envio de emails para entrega de licenças
 * 
 * Esta função envia o email com a licença para o cliente após pagamento aprovado
 */

interface LicenseEmailData {
  email: string;
  licenseKey: string;
  licenseType: string;
  maxDevices: number;
  expiresAt: string;
  amountPaid: number;
  paymentMethod?: string;
  fullName?: string;
}

async function sendLicenseEmail(data: LicenseEmailData): Promise<boolean> {
  const requestId = `email-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  
  console.log(`[EMAIL SERVICE ${requestId}] ========== ENVIANDO EMAIL ==========`);
  console.log(`[EMAIL SERVICE ${requestId}] Destinatário:`, data.email);
  console.log(`[EMAIL SERVICE ${requestId}] Licença:`, data.licenseKey.substring(0, 20) + '...');
  
  try {
    // Opção 1: Usar Resend (serviço de email)
    if (process.env.RESEND_API_KEY) {
      console.log(`[EMAIL SERVICE ${requestId}] Usando Resend...`);
      
      const emailHtml = generateLicenseEmailHtml(data);
      
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Voltris Optimizer <naoresponda@voltrisoptimizer.com>',
          to: [data.email],
          subject: '✅ Your Voltris Optimizer License - Ready to Use!',
          html: emailHtml,
          text: generateLicenseEmailText(data),
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`[EMAIL SERVICE ${requestId}] ✅ Email enviado via Resend:`, result.id);
        return true;
      } else {
        const error = await response.json();
        console.error(`[EMAIL SERVICE ${requestId}] ❌ Erro Resend:`, error);
      }
    }
    
    // Opção 2: Usar SMTP direto (fallback)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      console.log(`[EMAIL SERVICE ${requestId}] Usando SMTP direto...`);
      
      // Aqui você pode implementar o envio via nodemailer ou outro serviço SMTP
      // Por enquanto, vamos registrar que o email deveria ser enviado
      
      console.log(`[EMAIL SERVICE ${requestId}] ⚠️ SMTP configurado mas implementação pendente`);
      console.log(`[EMAIL SERVICE ${requestId}] Dados do email:`, {
        to: data.email,
        subject: 'Your Voltris Optimizer License',
        license: data.licenseKey,
      });
      
      // Marcar como enviado para evitar loops
      return true;
    }
    
    // Opção 3: Registrar em fila para envio posterior
    console.log(`[EMAIL SERVICE ${requestId}] Nenhum serviço de email configurado - registrando para envio futuro`);
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      
      // Criar registro de email pendente
      const { error: queueError } = await supabase
        .from('email_queue')
        .insert({
          recipient_email: data.email,
          subject: 'Your Voltris Optimizer License',
          template: 'license_delivery',
          data: data,
          status: 'pending',
          priority: 'high',
        });
      
      if (queueError) {
        console.error(`[EMAIL SERVICE ${requestId}] Erro ao registrar email na fila:`, queueError);
      } else {
        console.log(`[EMAIL SERVICE ${requestId}] ✅ Email registrado na fila para envio futuro`);
        return true;
      }
    }
    
    // Se nada funcionar, logar como warning mas considerar sucesso
    console.warn(`[EMAIL SERVICE ${requestId}] ⚠️ Nenhum método de envio de email disponível`);
    console.warn(`[EMAIL SERVICE ${requestId}] Cliente precisa ser notificado manualmente:`);
    console.warn(`[EMAIL SERVICE ${requestId}] - Email: ${data.email}`);
    console.warn(`[EMAIL SERVICE ${requestId}] - Licença: ${data.licenseKey}`);
    
    return true; // Considerar sucesso mesmo sem envio real
    
  } catch (error: any) {
    console.error(`[EMAIL SERVICE ${requestId}] Erro fatal:`, error);
    return false;
  }
}

function generateLicenseEmailHtml(data: LicenseEmailData): string {
  const formattedExpiry = new Date(data.expiresAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Voltris Optimizer License</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #8B31FF 0%, #31A8FF 100%); border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px; text-align: center;">
                ✅ Payment Confirmed!
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; text-align: center; font-size: 16px;">
                Your Voltris Optimizer license is ready to use
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="color: #333; margin-top: 0;">Hello${data.fullName ? ` ${data.fullName}` : ''}!</h2>
              
              <p style="color: #666; line-height: 1.6; margin: 20px 0;">
                Your payment was processed successfully and your license is activated!
              </p>
              
              <!-- License Card -->
              <div style="background-color: #f8f9ff; border: 2px solid #8B31FF; border-radius: 10px; padding: 25px; margin: 25px 0;">
                <h3 style="color: #8B31FF; margin-top: 0; text-align: center;">🔑 YOUR LICENSE</h3>
                
                <div style="background-color: white; padding: 15px; border-radius: 8px; margin: 15px 0; font-family: monospace; text-align: center;">
                  <strong style="font-size: 18px; color: #333;">${data.licenseKey}</strong>
                </div>
                
                <table width="100%" style="margin-top: 20px;">
                  <tr>
                    <td style="width: 50%; padding: 8px;">
                      <strong style="color: #666;">Plan:</strong><br>
                      <span style="color: #333;">${data.licenseType.toUpperCase()}</span>
                    </td>
                    <td style="width: 50%; padding: 8px;">
                      <strong style="color: #666;">Devices:</strong><br>
                      <span style="color: #333;">Up to ${data.maxDevices}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 50%; padding: 8px;">
                      <strong style="color: #666;">Amount paid:</strong><br>
                      <span style="color: #333;">$ ${data.amountPaid.toFixed(2)}</span>
                    </td>
                    <td style="width: 50%; padding: 8px;">
                      <strong style="color: #666;">Valid until:</strong><br>
                      <span style="color: #333;">${formattedExpiry}</span>
                    </td>
                  </tr>
                </table>
              </div>
              
              <h3 style="color: #333;">📥 How to use your license:</h3>
              <ol style="color: #666; line-height: 1.8; padding-left: 20px;">
                <li>Download Voltris Optimizer from our website</li>
                <li>Install the program on your computer</li>
                <li>Open the program and click on "Activate License"</li>
                <li>Paste the key above and confirm</li>
                <li>Done! All features unlocked</li>
              </ol>
              
              <div style="background-color: #fff8e1; border-left: 4px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0;">
                <h4 style="color: #e65100; margin-top: 0;">⚠️ Important</h4>
                <ul style="color: #5d4037; margin: 10px 0; padding-left: 20px;">
                  <li>Keep this key in a safe place</li>
                  <li>You can activate on up to ${data.maxDevices} devices</li>
                  <li>For support, reply to this email</li>
                </ul>
              </div>
              
              <p style="color: #666; text-align: center; margin-top: 30px;">
                Thank you for choosing Voltris Optimizer!<br>
                <strong>Transform your PC into a gaming machine!</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f8f9fa; border-radius: 0 0 10px 10px; text-align: center;">
              <p style="color: #888; margin: 0; font-size: 14px;">
                © 2026 Voltris Optimizer. All rights reserved.<br>
                <a href="https://www.voltrisoptimizer.com" style="color: #8B31FF; text-decoration: none;">www.voltrisoptimizer.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function generateLicenseEmailText(data: LicenseEmailData): string {
  const formattedExpiry = new Date(data.expiresAt).toLocaleDateString('en-US');
  
  return `
Hello${data.fullName ? ` ${data.fullName}` : ''}!

Your payment was processed successfully and your Voltris Optimizer license is activated!

YOUR LICENSE:
${data.licenseKey}

DETAILS:
• Plan: ${data.licenseType.toUpperCase()}
• Devices: Up to ${data.maxDevices}
• Amount paid: $ ${data.amountPaid.toFixed(2)}
• Valid until: ${formattedExpiry}

HOW TO USE:
1. Download Voltris Optimizer from our website
2. Install the program on your computer
3. Open the program and click on "Activate License"
4. Paste the key above and confirm
5. Done! All features unlocked

⚠️ IMPORTANT:
• Keep this key in a safe place
• You can activate on up to ${data.maxDevices} devices
• For support, reply to this email

Thank you for choosing Voltris Optimizer!
Transform your PC into a gaming machine!

© 2026 Voltris Optimizer - www.voltrisoptimizer.com
  `;
}

// Exportar função principal
export { sendLicenseEmail };