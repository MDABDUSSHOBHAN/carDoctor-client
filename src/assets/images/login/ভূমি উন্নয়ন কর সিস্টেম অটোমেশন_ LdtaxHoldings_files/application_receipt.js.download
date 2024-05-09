//var webPath = document.location.origin + '/mutation/mutation/';
jQuery(document).ready(function () {
//alert(application_id);
//    jQuery.get(webPath + 'Applications/applicationDocumentsUpload/' + application_id+'/'+action, function (data) {
//        //alert(data);
//        jQuery('#loaded_n_total').html(data);
//        //jQuery('#district-id').parent(".form-group").after(data);
//    });
//    
jQuery("#sample_6 th").css('border','1px solid #000000!important');
jQuery("#sample_6 td").css('border','1px solid #000000!important');




});

function acceptApplication(msg,status_id) {
    //var union_id = jQuery('#union-id').val();union-id
    //alert(status_id);
    if (confirm(msg)){
        jQuery("#case-main-status-id").val(status_id);
        jQuery("#primarily_accepted").submit();
    }
    else
        return false;
    //window.location.href = webPath+'Applications/applicationAccept/'+application_id+'/'+union_id;
}

function print_data(div_print) {

//alert('adas');
//$("." + div_print).show().printElement();
    jQuery("." + div_print).jqprint();
}




function getPrintAllDocument(application_id){
    requestURL = webPath + 'reports/printPdfAllDocument/'+application_id;   
    downloadPrintView(requestURL);
}
function getPrintViewReport(page){
    if(page != 0){
        requestURL = webPath + 'reports/printPdfRegister9?page=' +page + '.pdf';
    }
    else{
        requestURL = webPath + 'reports/printPdfRegister9.pdf';
    }
    
//                    console.log(requestURL);
    downloadPrintView(requestURL);
}


function getPrintViewReport2(page){
    if(page != 0){
        requestURL = webPath + 'reports/printPdfRegister1?page=' +page + '.pdf';
    }
    else{
        requestURL = webPath + 'reports/printPdfRegister1.pdf';
    }
    
//                    console.log(requestURL);
    downloadPrintView(requestURL);
}



var windowObjectReference;

function downloadPrintView(requestURL){
    location.replace(requestURL);
}

function openPrintViewPop(requestURL){
    windowObjectReference = window.open(requestURL,
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}
