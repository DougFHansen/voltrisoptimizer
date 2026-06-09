# Instruções de Deploy — Sistema de Licenciamento Voltris

## Ação obrigatória antes do lançamento

### 1. Configurar o segredo nas Edge Functions

No painel do Supabase:
**Dashboard → Edge Functions → Secrets**

Adicionar:
```
VOLTRIS_LICENSE_SECRET = <seu_segredo_aqui>
```

O segredo deve ser uma string aleatória de alta entropia (mínimo 32 caracteres).
Exemplo de geração: `openssl rand -hex 32`

**Este segredo NUNCA deve aparecer em:**
- Código C# do cliente
- Arquivos SQL versionados
- Repositório Git
- Logs de aplicação

---

### 2. Executar a migração SQL

No SQL Editor do Supabase, executar:
```
supabase/migrate_license_secret_to_env.sql
```

Isso remove a função `generate_voltris_signature` que expunha o segredo em texto claro.

---

### 3. Fazer deploy das Edge Functions

```bash
supabase functions deploy validate-license
supabase functions deploy activate-license
supabase functions deploy check-trial
```

---

### 4. Atualizar o endpoint no LicenseManager.cs

Substituir `YOUR_PROJECT` pelo ID real do projeto Supabase:

```csharp
// Services/LicenseManager.cs
private const string ValidateEndpoint = "https://SEU_PROJETO.supabase.co/functions/v1/validate-license";
private const string ActivateEndpoint = "https://SEU_PROJETO.supabase.co/functions/v1/activate-license";
```

O mesmo em `Services/Licensing/ServerSideLicenseValidator.cs`.

---

### 5. Verificar variáveis de ambiente no app

O app não precisa de nenhuma variável de ambiente com o segredo.
O segredo existe APENAS no servidor (Supabase Edge Functions).

---

## Resumo das mudanças de segurança

| Problema | Correção |
|----------|----------|
| Segredo de assinatura no binário C# | Removido — validação é server-side |
| `IsPro` com setter público | Removido — derivado do `LicenseTokenStore` |
| Chave AES hardcoded no `HardwareTrialService` | Substituída por derivação de hardware em runtime |
| `GlobalFeatureGateService` fail-open | Corrigido para fail-closed |
| `LicenseService` com campo `_cache` não declarado | Corrigido |
| Anti-debug com `Environment.Exit` em timing check | Substituído por log sem crash |
| Segredo em texto claro no SQL | Removido — função `generate_voltris_signature` deletada |
| Validação de licença 100% offline | Agora requer confirmação server-side na ativação |
