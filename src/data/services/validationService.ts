export const ValidatorsService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8;
  },
};
