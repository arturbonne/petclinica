<img width="476" height="770" alt="image" src="https://github.com/user-attachments/assets/34fa6a6a-732a-451b-9019-7c3bc3972aee" /># 🐾 PetVida App - Clínica Veterinária e Estética

## 📖 Briefing do Problema
A PetVida é uma clínica de bairro fundada pelo Dr. Gabriel Santos e pela Dra. Camila Paes. Com o aumento para mais de 30 banhos diários, o gerenciamento de consultas feito puramente em agendas de papel gerou um caos administrativo, resultando em choques de horários. Além disso, a clínica perdia receita devido ao esquecimento das datas de banho ou vacina por parte dos tutores, gerando lacunas na agenda e perda de minutos valiosos da recepção buscando históricos em arquivos físicos de arquivo morto 

## 💡 Justificativa da Solução
Para resolver essa dor crônica, optei pelo desenvolvimento de um **Aplicativo Móvel** focado no tutor do pet. A grande oportunidade do negócio é justamente integrar o cuidado estético ao histórico de saúde do animal. O aplicativo móvel é a solução ideal porque: Todo o historico medico do animal estará na palma da mão do seu dono, adiantando muito o trabalho dos atendentes e distribuindo as responsabilidades
1. **Descentraliza o Agendamento:** O tutor agenda diretamente pelo app, eliminando a dependência da agenda de papel e os erros humanos
2. **Notificações e Lembretes:** Acaba com o problema do esquecimento, garantindo que os retornos preventivos sejam realizados a tempo e assegurando a previsibilidade de caixa para a clínica.
3. **Carteirinha Digital:** O histórico médico fica na palma da mão, eliminando a busca manual em pastas físicas

## 📱 Protótipos e Telas
*(Substitua os textos abaixo pelas imagens das capturas de tela do seu aplicativo)*
<img width="447" height="786" alt="image" src="https://github.com/user-attachments/assets/f41f7a6d-a09e-4dbb-8ddc-6ee94e8447ef" />
<img width="385" height="777" alt="image" src="https://github.com/user-attachments/assets/216aef49-31ce-4b15-b07e-39ff05305f1c" />
<img width="413" height="786" alt="image" src="https://github.com/user-attachments/assets/b4da1b15-f3ae-4f0a-8fae-2b155c39d90a" />
<img width="476" height="770" alt="image" src="https://github.com/user-attachments/assets/5dece3da-4e42-40b1-94b5-9c5ab1c4cedc" />

## 🏗️ Arquitetura e Tecnologias Utilizadas
O projeto foi estruturado utilizando **React Native** (via Expo), permitindo a construção de uma interface móvel de alta fidelidade e excelente performance para Android e iOS. 
- A interface foi desenhada utilizando *Flexbox* para garantir total responsividade nas diferentes telas de smartphones. 
- O estado da aplicação é gerenciado através do *Hook* `useState` do React, permitindo a navegação ágil entre as abas (Single Page Application) sem recarregamentos pesados.

## 🚀 Como Executar o Projeto (Instruções)

1. **Pré-requisitos:** Certifique-se de ter o Node.js instalado na sua máquina.
2. Clone este repositório para sua máquina local.
3. Abra o terminal na raiz do projeto e execute o comando abaixo para instalar as dependências:
   ```bash
   npm install#
