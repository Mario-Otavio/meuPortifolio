# Meu Portfólio

Portfólio pessoal desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## 🚀 Começando

Primeiro, instale as dependências e execute o servidor de desenvolvimento:

```bash
npm install
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
└── components/
    ├── Header.tsx      # Cabeçalho com navegação
    ├── Hero.tsx        # Seção hero/introdução
    ├── About.tsx       # Seção sobre mim
    ├── Projects.tsx    # Seção de projetos
    ├── Contact.tsx     # Seção de contato
    └── Footer.tsx      # Rodapé
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para personalizar suas informações:

- **`src/components/Hero.tsx`**: Altere "Seu Nome" e a descrição
- **`src/components/About.tsx`**: Atualize a biografia e tecnologias
- **`src/components/Projects.tsx`**: Adicione seus projetos reais
- **`src/components/Contact.tsx`**: Atualize email, LinkedIn e GitHub
- **`src/components/Footer.tsx`**: Altere o nome no rodapé

### 2. Projetos

Edite o array `projects` em `src/components/Projects.tsx` para adicionar seus projetos:

```typescript
const projects: Project[] = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    technologies: ['React', 'TypeScript'],
    link: 'https://seu-projeto.com',
    github: 'https://github.com/usuario/projeto',
  },
];
```

### 3. Cores e Estilos

Os estilos podem ser personalizados em:
- **`src/app/globals.css`**: Variáveis CSS e estilos globais
- **Componentes individuais**: Classes Tailwind CSS

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org) - Framework React
- [TypeScript](https://www.typescriptlang.org) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com) - Estilização
- [React](https://react.dev) - Biblioteca UI

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🚢 Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com), plataforma criada pelos desenvolvedores do Next.js.

Para mais informações sobre deploy, consulte a [documentação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
