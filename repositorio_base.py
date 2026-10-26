from abc import ABC, abstractmethod


class RepositorioBase(ABC):
    @abstractmethod
    def salvar(self, receita):
        pass
    @abstractmethod
    def listar(self):
        pass