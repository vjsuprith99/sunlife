public class LightningDataTableCTRL {
    @AuraEnabled
    public static list<Account> getAccountList(String searchKey){
        List<Account> accList=new List<Account>();
        system.debug('searchKey@@'+searchKey);
        if(!String.isBlank(searchKey)){
            String searchString = searchKey + '%';
            accList= [Select Id, Name, CreatedDate,Owner.Name,Phone,Website,AnnualRevenue From Account where Industry='Financial Services' ANd Name like :searchString Order By CreatedDate];
        system.debug('accList@@'+accList);
        }
        else{
            accList= [Select Id, Name, CreatedDate,Owner.Name,Phone,Website,AnnualRevenue From Account where Industry='Financial Services' Order By CreatedDate];  
        system.debug('accListElse@@'+accList);
        }
        
        if(accList != null && accList.size()>0){
            return accList;
        }
        else{return null;}
    }
}