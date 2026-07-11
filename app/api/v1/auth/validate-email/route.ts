import { NextRequest, NextResponse } from 'next/server';
import dns from 'dns/promises';

// Lista compacta de provedores de email descartáveis comuns
const BURNER_DOMAINS = [
  'mailinator.com', 'yopmail.com', 'guerrillamail.com', 'tempmail.com', 
  'dispostable.com', 'getnada.com', 'sharklasers.com', '10minutemail.com'
];

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        
        if (!email || !email.includes('@')) {
            return NextResponse.json({ valid: false, error: 'Invalid format.' });
        }

        const domain = email.split('@')[1];

        // 1. Verificar se é um provedor descartável conhecido
        if (BURNER_DOMAINS.includes(domain.toLowerCase())) {
            return NextResponse.json({ 
                valid: false, 
                error: 'Temporary or disposable email addresses are not permitted.' 
            });
        }

        // 2. Verificar se o domínio possui registros MX (Mail Exchange)
        // Isso garante que o domínio de fato pode receber e-mails.
        const commonTLDs = ['com', 'br', 'net', 'org', 'gov', 'me', 'io', 'co', 'app', 'dev', 'edu'];
        const tld = domain.split('.').pop()?.toLowerCase();
        if (tld && tld.length < 2) {
             return NextResponse.json({ valid: false, error: 'The email domain is invalid.' });
        }

        try {
            const mxRecords = await dns.resolveMx(domain);
            if (!mxRecords || mxRecords.length === 0) {
                return NextResponse.json({ 
                    valid: false, 
                    error: 'This email domain appears to be invalid or cannot receive messages.' 
                });
            }
        } catch (dnsErr) {
            return NextResponse.json({ 
                valid: false, 
                error: 'The email domain does not exist or is unreachable.' 
            });
        }

        return NextResponse.json({ valid: true });

    } catch (error: any) {
        console.error('[EMAIL VALIDATION ERROR]', error);
        return NextResponse.json({ 
            valid: false, 
            error: 'The email domain does not exist or is unreachable.' 
        });
    }
}
