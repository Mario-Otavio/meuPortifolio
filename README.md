# Meu Portfólio

Portfólio pessoal moderno e responsivo desenvolvido com Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com gradientes e efeitos visuais
- 🎭 **Animações Suaves**: Animações fluidas com Framer Motion
- 📱 **Totalmente Responsivo**: Adaptável a todos os dispositivos
- ⚡ **Performance Otimizada**: Construído com Next.js para máxima performance
- 🎯 **Scroll Suave**: Navegação intuitiva com scroll suave entre seções
- 🌐 **Multi-idioma**: Interface em português

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Mario-Otavio/meuPortifolio.git
cd meu_portifolio
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal com background fixo
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais e classes customizadas
└── components/
    ├── BarraMenu.tsx       # Barra de navegação com menu mobile
    ├── Hero.tsx            # Seção hero com orbes animados e cubos de tecnologia
    ├── Tecnologias.tsx     # Stack de tecnologias com cards animados
    ├── Projetos.tsx        # Seção de projetos com cards interativos
    ├── Contato.tsx         # Formulário de contato e informações
    ├── Rodape.tsx          # Rodapé
    ├── AnimacaoDoCursor.tsx # Animação de cursor personalizada
    └── ui/                 # Componentes UI reutilizáveis
        ├── card.tsx
        ├── dialog.tsx
        └── separator.tsx
```

## 🎨 Seções do Portfólio

### Hero

- Apresentação pessoal com animações de orbes
- Cubos flutuantes representando tecnologias
- Botões de ação (Ver Projetos, Entre em Contato)

### Tecnologias

- Cards interativos com hover effects
- Descrições de cada tecnologia
- Animações sequenciais ao scroll

### Projetos

- Cards de projetos com imagens
- Links para projetos e repositórios
- Animações de entrada ao scroll

### Contato

- Formulário de contato integrado com WhatsApp
- Cards de informações de contato
- Links para redes sociais

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org)** - Framework React para produção
- **[React](https://react.dev)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações para React
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones populares
- **[Tabler Icons](https://tabler.io/icons)** - Ícones adicionais
- **[Lucide Icons](https://lucide.dev)** - Ícones modernos e minimalistas

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🎯 Funcionalidades Principais

### Animações

- Animações de entrada ao scroll usando Framer Motion
- Efeitos de hover nos cards
- Transições suaves entre seções
- Orbes e cubos flutuantes no Hero

### Responsividade

- Menu hambúrguer para dispositivos móveis
- Layout adaptável para tablets e desktops
- Ajustes de posicionamento para diferentes tamanhos de tela

### Navegação

- Scroll suave para seções específicas
- Menu ativo destacado conforme a seção visível
- Links diretos para WhatsApp

## 🚢 Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com), plataforma criada pelos desenvolvedores do Next.js.

### Deploy na Vercel

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Configure as variáveis de ambiente (se necessário)
5. Deploy automático!

Para mais informações sobre deploy, consulte a [documentação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 Personalização

### Alterar Informações Pessoais

- **Hero**: Edite `src/components/Hero.tsx` para alterar nome e descrição
- **Tecnologias**: Modifique o array `tecnologias` em `src/components/Tecnologias.tsx`
- **Projetos**: Atualize o array `projetos` em `src/components/Projetos.tsx`
- **Contato**: Altere informações em `src/components/Contato.tsx`
- **WhatsApp**: Atualize o número em `src/components/Hero.tsx` e `src/components/Contato.tsx`

### Alterar Cores e Estilos

- **Background**: Modifique as classes em `src/app/layout.tsx`
- **Gradientes**: Ajuste as classes customizadas em `src/app/globals.css`
- **Componentes**: Personalize classes Tailwind nos componentes individuais

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Mário Otávio**

- GitHub: [@Mario-Otavio](https://github.com/Mario-Otavio)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- Next.js pela excelente documentação
- Framer Motion pela biblioteca de animações
- Comunidade open source por todas as ferramentas incríveis

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
