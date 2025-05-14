import datetime
class Pessoa:
    def __init__(self, nome, telefone, datanasc, email):
        self._nome = nome
        self._telefone = telefone
        self._datanasc = datanasc
        self._email = email

    @property
    def nome(self):
        return self._nome
    @property
    def telefone(self):
        return self._telefone
    @property
    def datanasc(self):
        return self._datanasc
    @property
    def email(self):
        return self._email

    @nome.setter
    def nome(self, nome):
        self._nome = nome

    @telefone.setter
    def telefone(self, telefone):
        self._telefone = telefone

    @datanasc.setter
    def datanasc(self, data):
        self._datanasc = data

    @email.setter
    def email(self, email):
        self._email = email

    def __str__(self):
        data_formatada = self._datanasc.strftime("%d%m%Y") if isinstance(self._datanasc, datetime.date) else self._datanasc
        return f'{self._nome}\n{self._telefone}\n{data_formatada}\n{self._email}'
