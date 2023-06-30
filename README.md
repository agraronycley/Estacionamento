# Estacionamento
Teste técnico - estacionamento

## Descrição:
O projeto possui:

1 fichário:
- Veículos: Onde se armazena as informaçãoes de vaga, apartamento, placa e tipo do veículo e informações da última movimentação (entrada/saída do estacionamento)

3 widgets:
- Checkin/checkout: Usuário vincula um apartamento a uma vaga no estacionamento (ckeckin) ou retiro esse vínculo (checkout).
![alt text](https://github.com/agraronycley/Estacionamento/blob/main/img/check.png)

- Registro de Movimentação: Usuário cadastra uma movimentação no estacionamento (entrada/saída).
![alt text](https://github.com/agraronycley/Estacionamento/blob/main/img/registro.png)

- Status do estacionamento: Relatório em forma de tabela que exibe informações sobres as vagas do estacionamento.
![alt text](https://github.com/agraronycley/Estacionamento/blob/main/img/rel.png)

5 datasets:
- ds_lista_dados_apartamento, ds_lista_vagas_com_checkin, ds_lista_vagas_disponiveis, ds_lista_vagas_placa, ds_lista_vagas: Usados para realizar consultas no fichário Veículos.

A implementação da utilização das vagas utiliza o método updateCardData do webservice ECMCardService.
![alt text](https://github.com/agraronycley/Estacionamento/blob/main/img/xml.png)

## Observação:
- Para uso correto, é necessário alterar, nos arquivos main.js, as informações de usuário e senha da integração e do código do fichário Veículos.
