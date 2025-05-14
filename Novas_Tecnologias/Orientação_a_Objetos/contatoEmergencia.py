from Orientação_a_Objetos.Contato import Pessoa

class ContatoEmergencia(Pessoa):
    def __init__(self, nome, telefone, datanasc, email, prioridade=True):
        super().__init__(nome, telefone, datanasc, email)
        self._prioridade = prioridade

    @property
    def prioridade(self):
        return self._prioridade #é privado porque é só de leitura

    