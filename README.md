# Portfólio Pessoal - Filipe Gabriel

Este é um projeto de portfólio pessoal desenvolvido para apresentar as habilidades, projetos e informações de contato de **Filipe Gabriel**, um Desenvolvedor Full Stack.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com um stack de tecnologias moderno e eficiente, focado em performance e experiência de desenvolvimento.

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework Frontend** | React | Biblioteca JavaScript para construção de interfaces de usuário. |
| **Linguagem** | TypeScript | Superset do JavaScript que adiciona tipagem estática, melhorando a robustez do código. |
| **Estilização** | Tailwind CSS | Framework CSS utilitário para estilização rápida e responsiva. |
| **Componentes UI** | Shadcn UI | Coleção de componentes de interface de usuário construídos com Radix UI e Tailwind CSS. |
| **Empacotador/Runtime** | Bun | Runtime JavaScript rápido, empacotador, e gerenciador de pacotes. |
| **Linter** | ESLint | Ferramenta para identificar e reportar padrões problemáticos encontrados no código. |

## ⚙️ Instalação e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o **Bun** instalado em sua máquina.

```bash
# Instalação do Bun (se necessário)
curl -fsSL https://bun.sh/install | bash
```

### Passos

1.  **Clone o repositório** (ou navegue até a pasta do projeto):

    ```bash
    # Se for um repositório Git
    git clone <URL_DO_REPOSITORIO>
    cd Projeto-Portfolio-main
    ```

2.  **Instale as dependências:**

    Utilize o Bun para instalar todas as dependências do projeto.

    ```bash
    bun install
    ```

3.  **Execute o projeto em modo de desenvolvimento:**

    O comando de desenvolvimento iniciará o servidor local.

    ```bash
    bun run dev
    ```

    O portfólio estará acessível em `http://localhost:3000` (ou outra porta indicada pelo Bun).

4.  **Construa para produção:**

    Para gerar os arquivos estáticos otimizados para produção, utilize o comando de build.

    ```bash
    bun run build
    ```

    Os arquivos de produção serão gerados na pasta `dist/`.

## 📂 Estrutura do Projeto

A estrutura de diretórios segue o padrão de projetos React/Vite com TypeScript:

```
Projeto-Portfolio-main/
├── src/
│   ├── assets/             # Arquivos estáticos como imagens e ícones
│   ├── components/         # Componentes React reutilizáveis (incluindo Shadcn UI)
│   ├── lib/                # Funções utilitárias e configurações
│   ├── pages/              # Componentes de página ou visualizações principais
│   ├── App.tsx             # Componente principal da aplicação
│   └── main.tsx            # Ponto de entrada da aplicação (montagem do React)
├── index.html              # Arquivo HTML principal
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── components.json         # Configuração do Shadcn UI
├── eslint.config.js        # Configuração do ESLint
├── bun.lockb               # Arquivo de lock do Bun
└── package.json            # Metadados e scripts do projeto
```

*(Nota: A estrutura `src/` é inferida com base nas tecnologias utilizadas e nos arquivos `index.html` e `components.json`.)*

## 📝 Licença

Este projeto está sob a licença **MIT** (ou outra licença padrão para projetos de código aberto).

---

**Desenvolvido por:** Manus AI (com base na análise do código-fonte)
**Proprietário Original:** Filipe Gabriel
