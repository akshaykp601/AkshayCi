 var hellopreloader = document.getElementById("hellopreloader_preload");
        function fadeOutnojquery(el) {
            el.style.opacity = 1;
            var interhellopreloader = setInterval(function () {
                el.style.opacity = el.style.opacity - 0.05;
                if (el.style.opacity <= 0.05) {
                    clearInterval(interhellopreloader);
                    hellopreloader.style.display = "none";
                    if ((document.getElementById("page_id").innerHTML == 25) && (document.getElementById("cart_amount").innerHTML > 0) && (hellopreloader.style.display == "none")) {
                        alert("Please Enter your personalized sky map information again.");

                    }
                }
            }, 16);

        }
        window.onload = function () {
            setTimeout(function () {
                fadeOutnojquery(hellopreloader);
            }, 1000);



        };


//
  //
    function ReadForm (obj1, tst) 
    { 
        // Read the user form
        var i,j,pos;
        val_total="";val_combo="";      
    
        for (i=0; i<obj1.length; i++) 
        {     
            // run entire form
            obj = obj1.elements[i];           // a form element
    
            if (obj.type == "select-one") 
            {   // just selects
                if (obj.name == "quantity" ||
                    obj.name == "amount") continue;
                pos = obj.selectedIndex;        // which option selected
                val = obj.options[pos].value;   // selected value
                val_combo = val_combo + " (" + val + ")";
            }
        }
        // Now summarize everything we have processed above
        val_total = obj1.product_tmp.value + val_combo;
        obj1.wspsc_product.value = val_total;
    }
    //-->
    