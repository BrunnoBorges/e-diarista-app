import { useState, useMemo } from "react";
import { UseShortInterface } from "data/@types/userInterface";
import { ValidatorsService } from "data/services/validationService";
import { ApiService } from "data/services/apiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidatorsService.cep(cep);
    }, [cep]),
    [error, SetError] = useState(""),
    [search, setSearch] = useState(false),
    [loading, setLoading] = useState(false),
    [diaristas, setDiaristas] = useState([] as UseShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setSearch(false);
    setLoading(true);
    SetError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UseShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setSearch(true);
      setLoading(false);
    } catch (error) {
      SetError("CEP não encontrado ou inválido");
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diaristas,
    diaristasRestantes,
    search,
    loading,
  };
}
