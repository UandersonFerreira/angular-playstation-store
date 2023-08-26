Os padrões de commits no Git são convenções amplamente adotadas pela comunidade de desenvolvedores para criar mensagens de commit mais legíveis e significativas. Essas convenções ajudam a manter um histórico de commits limpo e organizado, facilitando a colaboração entre membros da equipe e a manutenção do código. Um dos padrões de commit mais conhecidos é o "Conventional Commits". Aqui está um resumo desse padrão:

O formato geral de uma mensagem de commit no padrão Conventional Commits é:

php

<tipo>(<âmbito opcional>): <descrição>

Aqui está uma explicação de cada parte:

    <tipo> (obrigatório): Indica o tipo de alteração feita no commit. Pode ser uma das palavras-chave predefinidas, como:
        feat: Para novas funcionalidades ou recursos.
        fix: Para correções de bugs.
        chore: Para tarefas de manutenção, como atualizações de dependências ou reformatação de código.
        docs: Para atualizações na documentação.
        style: Para alterações de estilo de código, como formatação.
        refactor: Para refatorações de código, ou seja, alterações no código que não adicionam novos recursos nem corrigem bugs.
        test: Para adição ou modificação de testes.

    Exemplo: feat, fix, chore, etc.

    <âmbito opcional> (opcional): Especifica a área ou componente do projeto afetado pela alteração. Isso ajuda a categorizar ainda mais o commit. Pode ser algo como um nome de módulo, diretório ou componente específico do projeto.

    Exemplo: authentication, database, UI, etc.

    <descrição> (obrigatório): Uma breve descrição da alteração feita. Deve ser clara e concisa, explicando o que a alteração faz.

    Exemplo: Adicionar autenticação de dois fatores, Corrigir erro de validação de entrada, etc.

Exemplos de mensagens de commit no padrão Conventional Commits:

    feat(authentication): Adicionar autenticação de dois fatores
    fix(database): Corrigir erro de conexão com o banco de dados
    chore(deploy): Atualizar versão do servidor de produção
