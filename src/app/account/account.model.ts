
interface AccountModel{
    currency:string;
    accountType:string;
    iban:string;
    accountId:string;
}
 interface CreateAccountModel{
    accountType:AccountType;
    currency:Currency;
    iban:string;
    userId:string;
}
const modal : AccountModel = {
    "accountId"
      :
      "modal",
    "accountType"
      :
      "modal",
    "currency"
      :
      "modal",
    "iban"
      :
      "modal"
  };
enum AccountType { Debit = 0, Credit = 1}
enum Currency { Ron = 0, Euro =1, Dollar=2}
export { AccountModel, CreateAccountModel ,AccountType,Currency,modal}