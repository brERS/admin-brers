# admin-brers
Administrador Template 

### :information_source: Informações a cerca do projeto
##
- Todo o projeto foi desenvolvido com o intuito de facilitar o gerenciamento e monitoramento de equipamentos de redes de uma empresa, como por exemplo, roteadores, repetidores, OLT's, etc.

- Todos os dados contidos no projeto são fictícios, e não representam nenhuma empresa real.

- O projeto foi desenvolvido em HTML, CSS, JavaScript, Bootstrap, datatables e echarts.

- Toda a parte de coleta de dados, não foi desenvolvida, pois o objetivo do projeto é apenas a visualização dos dados.

- Caso tenha interesse em coletar os dados de forma real é possivel, e pode ser feito em Python, que irá coletar os dados e armazenar em um banco de dados.

- A forma de coleta pode variar para cada tipo de equipamento como por exemplo;
    - BNG's: Pode ser utilizado o SSH ou SNMP.
    - CND's: Pode ser utilizado o SNMP.
    - OLT's: Pode ser utilizado o TL1, telnet, SNMP e integração com Banco de dados do UNM200 ou U2000.
    - Repetidores: Pode ser utilizado o SNMP.

- Modulos para coleta de dados:
    - Telnetlib: Possibilita a conexão via telnet.
    - Paramiko: Possibilita a conexão via SSH.
    - Pysnmp: Possibilita a coleta via SNMP.
    - Mysql-connector: Para armazenar no banco os dados coletados. ( <a href="https://github.com/brERS/CRUD-Python">CRUD AQUI</a> CRUD simples sem classe, apenas funções, mas que pode ser utilizado como base para criar classes.)

- Observações:
     
    - Projeto está com páginas estática para que fosse possível a visualização no gitpages, mas lembre-se que páginas estáticas não são uma boa prática.
    - Projeto com responsividade parcial, pois não foi desenvolvido para dispositivos móveis.
    - Toda e qualquer contibuição é bem vinda e pode ser feita através do git hub.

- Lembre-se no mundo da informática, nunca se esqueça de como se faz algo, pois daqui a pouco você vai precisar fazer de novo.
- Esse foi meu intuito com o projeto, depois de um longo inverno, relembrar.
