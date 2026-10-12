# O que é o angular?

- É um framework para desenvolvimento de aplicações Web, que fornece um estrutura completa
para desenvolver projetos.

- Mantido pela equipe do Google.

- Plataforma sólida para construir apps frontend robustos, eficientes e escaláveis.

- Programação Orientada a Objetos

- Typescritpt

- SPA (Single Page application)


# Requisitos

- Node JS v^18.19.1 or newer

```bash
npm install -g @angular/cli
```

- Versão 18 do framework

# Tópicos

#### 1. Criar um novo projeto

```bash
ng new meu-primeiro-app

# ng(angular cli)
# new (novo)
# meu-primeiro-app (nome do projeto)

> CSS
# CSS (StyleSheet escolhido)
```

#### 2. Estrutura base do projeto

Arquivos do projeto:

- .editorconfig: Configuração do editor/formatação (IDE)

- .gitignore: ignora os arquivos dentro dele no momento dos commits

- angular.json: Configuração do app Angular

- package-lock.json/package.json: Configuração do NodeJS

- README.md: Documentação do projeto

- tsconfig.json: Configuração do Typescript global

- tsconfig.app.json: Configuração do Typescript dentro do app

- tsconfig.spec.json: Configuração do Typescript dentro do teste unitario

Pastas do projeto:

- /public: Contem imagens e assets estáticos da aplicação

- /src: Código fonte
    - styles.css: Estilização global do projeto
    - main.ts: ponto de entrada/inicialização da aplicação
    - index.html: Arquivo renderizado para o usuário, vem com o componente app na criação do projeto
    - /app: Pasta onde fica os componentes que vão ser chamados na aplicação
        - Componentes iniciais da criação do projeto
            - app.component.css
            - app.component.html
            - app.component.spec.ts
            - app.component.ts
        - app.config.ts: Arquivo de configuração da renderização dos componentes
        - app.routes.ts: Arquivo de mapeamento de rotas das paginas virtuais e componentes


#### 3. Executar projeto
#### 4. Criar um componente
#### 5. Estrutura dos componentes
#### 6. Utilizando um componente
#### 7. Estados
#### 8. Renderizando dados dinâmicos
#### 9. Atributos dinâmicos
#### 10. Loops e Condicionais
#### 11. Services (compartilhando lógica)



