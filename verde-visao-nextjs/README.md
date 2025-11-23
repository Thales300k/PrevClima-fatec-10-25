# Verde Visão Digital - Next.js

Este projeto foi migrado de Vite + React para Next.js 16.

## 🚀 Tecnologias Utilizadas

- **Next.js 16** - Framework React com SSR e SSG
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS v4** - Framework CSS utility-first
- **Radix UI** - Componentes UI acessíveis e sem estilo
- **Lucide React** - Ícones modernos
- **Embla Carousel** - Carrossel de imagens
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **TanStack Query** - Gerenciamento de estado assíncrono

## 📁 Estrutura do Projeto

```
verde-visao-nextjs/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Estilos globais
│   ├── sobre/             # Página Sobre
│   ├── servicos/          # Página Serviços
│   ├── projetos/          # Página Projetos
│   ├── alertas/           # Página Alertas
│   └── contato/           # Página Contato
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes UI (shadcn/ui)
│   ├── Navigation.tsx    # Navegação principal
│   ├── Footer.tsx        # Rodapé
│   └── QueryProvider.tsx # Provider do TanStack Query
├── hooks/                # Custom hooks
├── lib/                  # Utilitários
└── public/               # Arquivos estáticos
    └── assets/           # Imagens do projeto

```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
# Criar build de produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 📝 Páginas Disponíveis

- **/** - Página inicial com hero section e serviços
- **/sobre** - Informações sobre a empresa e equipe
- **/servicos** - Serviços oferecidos
- **/projetos** - Portfólio de projetos
- **/alertas** - Alertas e destaques
- **/contato** - Formulário de contato

## 🎨 Customização

### Cores e Tema

As cores do tema estão definidas em `app/globals.css` usando variáveis CSS:

```css
@theme {
  --color-primary: 142 76% 36%;
  --color-secondary: 220 20% 18%;
  --color-accent: 180 70% 45%;
  /* ... outras cores */
}
```

### Componentes UI

Os componentes UI são baseados no shadcn/ui e estão localizados em `components/ui/`. Você pode personalizar cada componente conforme necessário.

## 🔄 Diferenças do Projeto Original (Vite + React)

1. **Roteamento**: Migrado de React Router para Next.js App Router
2. **Imagens**: Uso do componente `Image` do Next.js para otimização automática
3. **Links**: Substituído `<Link>` do React Router por `<Link>` do Next.js
4. **Client Components**: Componentes interativos marcados com `"use client"`
5. **Tailwind CSS**: Atualizado para v4 com nova sintaxe `@theme`

## 📦 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm start` - Inicia servidor de produção
- `pnpm lint` - Executa o linter

## 🐛 Problemas Conhecidos

- O build de produção pode apresentar alguns warnings relacionados aos componentes UI
- Alguns componentes do shadcn/ui foram adaptados para funcionar com Next.js 16

## 📄 Licença

© 2025 PrevClima Solutions. Todos os direitos reservados.
