# DevAcademyDesafio-Jo-o-
Usando Vue como framework e AWS como backend
Sou o participante João Pedro Dedê da Silva
e-mail joam.mega@gmail.com
Cursando Design Digital 6º semestre

Skills:
Angular
React-native
Vue
HTML e css
JS
Java
Postgres
NodeJS
Express
MongoDB

Para a resolução do desafio, primeiramente foi configurado a conta da AWS com os seguintes requizitos:
-Criação de um bucket que irá hospedar os packages

-Criação de um grupo "administrator" no IAM para conseguir uma acess key e uma secret key para configurar o AWS no console. É preciso fazer um usuário tb para anexar o grupo a ele. Coloque permissões para gerenciar o cognito, s3 e cloud formation.

-Criação de uma stack "Federation" no CloudFormation para administrar as autentificações e criação de usuários. 

-Criar um usuário no cognito e modificar seu password para confirmar a conta.(se o seu usuário ficar com status para mudar a senha busque no google o comando para alterar senha)

__Após criar essa parte de autentificação já é possível pegar a "poolId" e "clientID" para configurar o "AuthService" que é adquirido no cognito, além do user e senha que foi criado.

-Configurar o template responsável pela stack da API e DynamoDB(
  -Criar e adicionar as lambdas do sistema de CRUD do produto.
  -Criar as permissões para as lambdas e tomar cuidado para não ter permissões repetidas para não dar error 500
  -Criar a tabela de produtos para o DynamoDB
 )
 
 -Dar um "sam package" para enviar os arquivos do template para o bucket e configurar os caminhos dos arquivos para um caminho no S3, para ser lido pelo cloudFormation
 
 -Upar o template no cloudFormation para criar a Stack propriamente dita.
