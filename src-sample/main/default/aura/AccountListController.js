({
    doInit : function(component, event, helper) {
        console.log('I am here');
        component.set('v.columns', [
            {label: 'Name', fieldName:'Name',sortable:true,type:'text', initialWidth: 400},
            {label: 'Phone', fieldName:'Phone',sortable:true,type:'text', initialWidth: 300},
            {label: 'Webiste', fieldName:'Webiste',sortable:true,type:'text', initialWidth: 400},
            {label: 'Account Owner', fieldName:'Owner.Name',sortable:true,type:'text', initialWidth: 300},
            {label: 'Annual Revenue', fieldName:'AnnualRevenue',sortable:true,type:'text', initialWidth: 400}
        ]);
        helper.getAccounts(component, helper,component.get('v.searchKey'));
    },
    updateSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
    handleBlur:function (cmp, event, helper) {
        console.log('searchKey@@'+cmp.get('v.searchKey'));
        cmp.set('v.searchText',cmp.get('v.searchKey'));
        helper.getAccounts(cmp, helper,cmp.get('v.searchKey'));
    }
    
})