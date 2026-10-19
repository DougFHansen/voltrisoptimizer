import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // NOTA: não adianta passar auth.detectSessionInUrl:false aqui. O
      // createBrowserClient do @supabase/ssr escreve detectSessionInUrl:isBrowser()
      // DEPOIS do spread de options.auth, então ele sempre vence no navegador.
      // A troca do code PKCE é feita em um único ponto por arquitetura: quando o
      // Google cai em /auth/callback (servidor) o navegador nem chega a ver o
      // ?code=; e quando cai na home, o HomeClient deixa o próprio navegador
      // consumí-lo e só redireciona (não reenvia ao callback). Ver HomeClient.tsx.
      global: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    }
  )
} 