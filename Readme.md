# Felipe Machado - Todo List (Lista de Tarefas) - Frontend Angular 9.0.3 - Backend Spring boot 2.25 Java JDK 13 - Repositório MongoDB  
A proposta desse projeto era poder desenvolver uma simples lista de tarefas utilizando Angular, Java Spring boot e o MongoDB como repositório. 
Link para o ver o projeto na web : https://todo-felipemachado.firebaseapp.com/

## Instruções de instalação e execução
1. Primeiro baixe/clone e compile todos os projetos.
2. O projeto Angular (Frontend) pode ser executado através da linha de commando: ng serve
3. O projeto Java Spring Boot pode ser executado através da linha de comando: mvn clean package para gerar o arquivo Jar do spring boot
    Depois execute o comando : java -jar target/spring-boot-demo-0.0.1-SNAPSHOT.jar
    O Frontend estará disponível em : http://localhost:4200
    O Backend estará disponível em : http://localhost:8080    

## Descrição detalhada da API REST.
- Segue o endereço da cada Endpoint: 
  - A porta padrão 8080 foi mantida para o Backend. Dessa formao endereço padrão é : 
  - http://localhost:8080/api/v1/todo/
  - O Header recebe o Content-Type: application/json
  - GET       --> http://localhost:8080/api/v1/todo/
  - POST      --> http://localhost:8080/api/v1/todo/
  - PUT       --> http://localhost:8080/api/v1/todo/
  - DELETE    --> http://localhost:8080/api/v1/todo/id  
  

## Requerimentos Técnicos
 - [.Node.Js Versão 10+](https://nodejs.org/)
 - [.Angular 9.0.3](https://angular.io/)
 - [.Java JDK 13](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
 - [.MongoDB 4.2.3](https://www.mongodb.com/download-center/community)