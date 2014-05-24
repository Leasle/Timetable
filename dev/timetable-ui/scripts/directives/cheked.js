<script type="text/javascript">
function chkRads()
            {
    formName = document.forms["myform"]
    radioName="rad"
    for( var i=0; i < formName[radioName].length; i++)
    {
        if(formName[radioName][i].checked)
        {
            currentValue = formName[radioName][i].value
        }
    }
document.getElementById("itext").innerHTML=currentValue
id=itext
}
</script>


<script>
         var myhref
                id = 1
                if (id < 3) {
                    myhref = "form3.1.html"
                }
                else {
                    myhref = "form3.2.html"
                }
            </script>