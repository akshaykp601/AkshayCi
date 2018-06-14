    $(function () {
    $("#s1_year_input").val(2018);
    $("#s1_month_select").val(1);
    $(".s1_day_input").val(1);

    $("#sizes").change(function(){
        var value = $('#sizes :selected').text();
        $( ".p" ).text( value );
    }); 

    var canvas = document.getElementById("example");
    var img    = canvas.toDataURL("image/png");
    window.open(canvas.toDataURL('image/png'));
        
    function drawSkyMap(backgroundColor, textColor) {

        //alert('clicked');

        // alert(backgroundColor);
        // var peram = backgroundColor.split("--");
        // backgroundColor = peram[0];
        var nam = document.getElementById('text_hidden').value;
        console.log(nam);
        // alert(peram); 
        var main_canvas = document.getElementById("main_canvas");
        var src = main_canvas.getContext('2d');
        var srcsrc = src.canvas.toDataURL("image/png");
        $(".main_canvas_image").attr("src", srcsrc);
        var img = document.getElementById("canvas_img");
        var example = document.getElementById("example");
        ctx = example.getContext('2d');

        ctx.clearRect(0, 0, example.width, example.height);

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, example.width, example.height);

        ctx.lineWidth = 10;
        ctx.strokeStyle = textColor;

        ctx.textAlign = "center";
        ctx.fillStyle = textColor;
        ctx.font = '35px sans-serif';

        switch (fillTextDateMonth) {
            case "1":
                fillTextDateMonth = "January";
                break;
            case "2":
                fillTextDateMonth = "February";
                break;
            case "3":
                fillTextDateMonth = "March";
                break;
            case "4":
                fillTextDateMonth = "April";
                break;
            case "5":
                fillTextDateMonth = "May";
                break;
            case "6":
                fillTextDateMonth = "June";
                break;
            case "7":
                fillTextDateMonth = "July";
                break;
            case "8":
                fillTextDateMonth = "August";
                break;
            case "9":
                fillTextDateMonth = "September";
                break;
            case "10":
                fillTextDateMonth = "October";
                break;
            case "11":
                fillTextDateMonth = "November";
                break;
            case "12":
                fillTextDateMonth = "December";
                break;
        }
        if ((fillTextComment_f != "") && (fillTextComment_s != "") && (fillTextComment_t != "")) {
            ctx.fillText(fillTextComment_f, example.width / 2, example.height * 0.73);
            ctx.fillText(fillTextComment_s, example.width / 2, example.height * 0.755);
            ctx.fillText(fillTextComment_t, example.width / 2, example.height * 0.78);
            //drawHeart(ctx, example.width / 2, example.height * 0.83, 5, 60, 25);
            if ($('.s1tc_pics ul li.is-active').hasClass("default_pic")) {
                drawStar(ctx, example.width / 2, example.height * 0.83, 5, 60, 25);
            }
            else {
                drawCustomImage(ctx, example.width / 2, example.height * 0.83)
            }

            ctx.fillStyle = textColor;
            ctx.fillText("Above is an exact depiction of", example.width / 2, example.height * 0.88);


            if (((fillTextDateHour == "0") && ((fillTextDateMinute == "00 AM") || (fillTextDateMinute == "00 PM"))) || ((fillTextDateHour == undefined) && (fillTextDateMinute == undefined))) {
                
                 
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.9);
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.92);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.94);
            }
            else {
                 
                 
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.9);
                ctx.fillText(fillTextDateHour + ":" + "" + fillTextDateMinute, example.width / 2, example.height * 0.92);
                
                
                
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.94);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.96);
            }

        }
        else if ((fillTextComment_f != "") && (fillTextComment_s != "") && (fillTextComment_t == "")) {
            ctx.fillText(fillTextComment_f, example.width / 2, example.height * 0.73);
            ctx.fillText(fillTextComment_s, example.width / 2, example.height * 0.755);
            if ($('.s1tc_pics ul li.is-active').hasClass("default_pic")) {
                drawStar(ctx, example.width / 2, example.height * 0.79, 5, 60, 25);
            }
            else {
                drawCustomImage(ctx, example.width / 2, example.height * 0.79)
            }
            //drawHeart(ctx, example.width / 2, example.height * 0.79, 5, 60, 25);
            ctx.fillStyle = textColor;
            ctx.fillText("Above is an exact depiction of", example.width / 2, example.height * 0.855);

            if (((fillTextDateHour == "0") && ((fillTextDateMinute == "00 AM") || (fillTextDateMinute == "00 PM"))) || ((fillTextDateHour == undefined) && (fillTextDateMinute == undefined) && (fillTextDateSec == undefined))) {
                 
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.875);
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.895);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.915);
            }
            else {
             
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.875);
                ctx.fillText(fillTextDateHour + ":" + "" + fillTextDateMinute, example.width / 2, example.height * 0.895);
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.915);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.935);
            }

        }
        else if ((fillTextComment_f != "") && (fillTextComment_s == "") && (fillTextComment_t == "")) {
            ctx.fillText(fillTextComment_f, example.width / 2, example.height * 0.73);
            if ($('.s1tc_pics ul li.is-active').hasClass("default_pic")) {
                drawStar(ctx, example.width / 2, example.height * 0.78, 5, 60, 25);
            }
            else {
                drawCustomImage(ctx, example.width / 2, example.height * 0.78)
            }
            //drawHeart(ctx, example.width / 2, example.height * 0.78, 5, 60, 25);
            ctx.fillStyle = textColor;
            ctx.fillText("Above is an exact depiction of", example.width / 2, example.height * 0.83);

            
            
             
            
            
            if (((fillTextDateHour == "0") && ((fillTextDateMinute == "00 AM") || (fillTextDateMinute == "00 PM"))) || ((fillTextDateHour == undefined) && (fillTextDateMinute == undefined))) {
                 
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.85);
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.87);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.89);
            }
            else {
            
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.85);
                ctx.fillText(fillTextDateHour + ":" + "" + fillTextDateMinute, example.width / 2, example.height * 0.87);
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.89);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.91);
            }
        }
        else if ((fillTextComment_f == "") && (fillTextComment_s == "") && (fillTextComment_t == "")) {
            if ($('.s1tc_pics ul li.is-active').hasClass("default_pic")) {
                drawStar(ctx, example.width / 2, example.height * 0.73, 5, 60, 25);
            }
            else {
                drawCustomImage(ctx, example.width / 2, example.height * 0.73)
            }
            //drawHeart(ctx, example.width / 2, example.height * 0.73, 5, 60, 25);
            ctx.fillStyle = textColor;
            ctx.fillText("Above is an exact depiction of", example.width / 2, example.height * 0.78);

            if (((fillTextDateHour == "0") && ((fillTextDateMinute == "00 AM") || (fillTextDateMinute == "00 PM"))) || ((fillTextDateHour == undefined) && (fillTextDateMinute == undefined))) {
                 
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.8);
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.82);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.84);
            }
            else { 
                ctx.fillText("the night sky on " + fillTextDateMonth + " " + fillTextDateDay + ", " + fillTextDateYear, example.width / 2, example.height * 0.8); 
                   
                ctx.fillText(fillTextDateHour + ":" + "" + fillTextDateMinute, example.width / 2, example.height * 0.82);
                 
                ctx.fillText("as viewed from " + fillTextLocation, example.width / 2, example.height * 0.84);
                ctx.fillText(fillTextLon + " , " + fillTextLat, example.width / 2, example.height * 0.86);
            }
        }
        ctx.font = '18px sans-serif';
        //ctx.fillText("©International Star Registry      MySkyMoment.com™", example.width / 2, example.height * 0.99-25);
        ctx.font = '35px sans-serif';
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#fff";
        if ($('.theme_on_white').hasClass('is-active')) {
            // ctx.fillStyle = textColor;
            ctx.fillStyle = "black";
        }
        else {
            ctx.fillStyle = backgroundColor;
        }
        //ctx.arc(example.width / 2, example.height * .36, example.width / 2.5, 0, 2 * Math.PI, false);
        ctx.stroke();
        // ctx.fill();
        ctx.save();

        ctx.clip();

        ctx.translate(0, -100);
        ctx.translate(example.width/2, example.width/2);
        ctx.rotate(0 * Math.PI / 180);
        ctx.drawImage(img, (example.width/2)*-1, (example.width/2)*-1, example.width, example.width);
        //ctx.drawImage(img, 0, -100, example.width, example.width);
        var ctxsrs = ctx.canvas.toDataURL("image/jpeg", 1.0);
        $(".finish_picture").attr("src", ctxsrs);
        ctx.restore();
        

        img.onload = function () {

            ctx.beginPath();
            ctx.lineWidth = 25;
            ctx.strokeStyle = "#fff";
            if ($('.theme_on_white').hasClass('is-active')) {
                // ctx.fillStyle = textColor;
                ctx.fillStyle = "black";
            }
            else {
                ctx.fillStyle = backgroundColor;
            }
             
            switch(nam) {
                case 'circle':
                console.log('I am here in Circle');
                      ctx.arc(example.width / 2, example.height * .36, example.width / 2.5, 0, 2 * Math.PI, false);
                break;
                case 'square':
                console.log('I am here in square');
                      ctx.rect(10,10,1980,1850);
                break;
                case 'trangle':
                console.log('I am here in Trangle');
                        var sWidth = 2000;
                        var sHeight = 3000;
                        var path=new Path2D();
                        ctx.moveTo((sWidth/2)+800,sHeight/2);
                        ctx.lineTo((sWidth/2),(sHeight/2)-1450);
                        ctx.lineTo((sWidth/2)-800,sHeight/2);       
                        ctx.closePath();
                break;
                case 'star':
                console.log('I am in Star');
                        drawStar(ctx, 1000, 900, 9, 850, 550);
                break;
                case 'heart':
                console.log('I am in HEART');
                        var w = 3500, h = 1600;
                        var d = Math.min(w, h);
                        var k = 200;

                        ctx.moveTo(k, k + d / 4);
                        ctx.quadraticCurveTo(k, k, k + d / 4, k);
                        ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
                        ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
                        ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
                        ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
                        ctx.lineTo(k + d / 2, k + d);
                        ctx.lineTo(k + d / 4, k + d * 3/4);
                        ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
                break;
                case 'diamond':
                console.log('I am in diamond');
                        ctx.moveTo(1000,150);
                        ctx.lineTo(1800,900);
                        ctx.lineTo(1000, 1650);
                        ctx.lineTo(180,900);
                        ctx.closePath();
                break;
                case 'oval':
                console.log('I am in Oval');
                      
                        //ctx.ellipse(1000, 850, 1000, 830, 0, 1200, 180, 1);
                          ctx.ellipse(1000, 800, 900, 700, 0 * Math.PI/180, 0, 2 * Math.PI);
                        // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
                break;
                case 'rectangle':
                console.log('I am in Oval');
                       ctx.rect(150,150,1700,1400);
                break;
                default:

                    console.log('I am in default, Circle');
                        ctx.arc(example.width / 2, example.height * .36, example.width / 2.5, 0, 2 * Math.PI, false);
                     
                } 
            //By sir -> ctx.rect(10,10,2500,1850);
           //ctx.rect(10,10,1980,1850);
            //ctx.arc(example.width / 2, example.height * .36, example.width / 2.5, 0, 2 * Math.PI, false);
    // FOR OVAL 
        
            // ctx.scale(1, 0.7);
           // ctx.ellipse(1000, 850, 1000, 830, 0, 1200, 180, 1);
            // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
            //ctx.arc(1000, 1040, 1000, 60,200 * Math.PI);
    //oVal endsd here
    // FOR TRANGLE

            
            // var sWidth = 2000;
            // var sHeight = 3000;
            // var path=new Path2D();
            // ctx.moveTo((sWidth/2)+800,sHeight/2);
            // ctx.lineTo((sWidth/2),(sHeight/2)-1450);
            // ctx.lineTo((sWidth/2)-800,sHeight/2);

    // TRANGLE ENDS HERE

// DIAMOND starts HERE

                    // ctx.moveTo(1000,0);
                    // ctx.lineTo(2000,900);
                    // ctx.lineTo(1000, 1800);
                    // ctx.lineTo(0,900);


// DIAMOND ENDS HERE

//STAR DESIGN CODE

            //drawStar(ctx, 1000, 900, 9, 750, 450);

//STAR DESIGN ENDS HERECODE

// HEART DESIGN STARTS HERE

                // var w = 3500, h = 1600;
                // var d = Math.min(w, h);
                // var k = 200;

                // ctx.moveTo(k, k + d / 4);
                // ctx.quadraticCurveTo(k, k, k + d / 4, k);
                // ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
                // ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
                // ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
                // ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
                // ctx.lineTo(k + d / 2, k + d);
                // ctx.lineTo(k + d / 4, k + d * 3/4);
                // ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);

//HEART DESIGN ENDS HERE

            ctx.stroke();
            ctx.fill();
            ctx.save();

            ctx.clip();

            ctx.translate(0, -100);
            ctx.translate(example.width/2, example.width/2);
            ctx.rotate(0 * Math.PI / 180);
            ctx.drawImage(img, (example.width/2)*-1, (example.width/2)*-1, example.width, example.width);
            //ctx.drawImage(img, 0, -100, example.width, example.width);
            var ctxsrs = ctx.canvas.toDataURL("image/jpeg", 1.0);
            $(".finish_picture").attr("src", ctxsrs);
            ctx.restore();

        };
    }

    setInterval('$(".woocommerce a.remove").click() ;', 1);
    //ctx.fillText(fillTextTitle, example.width / 2, example.height * 0.83);
    $(document).on('mousedown', 'img.finish_picture', function (e) {
        if (e.button == 2) {
            $(this)[0].oncontextmenu = function () {
                return false;
            } // эта строка непосредственно отключает вывод стандартного меню (отключает правую кнопку мыши на указанном конкретном элементе)
            // имя элемента передаём через ссылку this так как мы уже обрабатываем событие щелчка по нему, для любого другого элемента можно указать как обычно его селектор - class или id

            $(this).append('<a href="#" class="element_delete">удалить</a>');
            var it_left = 5;
            var it_top = 5;
            $('a.element_delete').css({'left': it_left + 'px', 'top': it_top + 'px'});
            return false;
        }
        else {
            return true;
        }
    });
    function drawHeart(ctx, cx, cy) {
        ctx.beginPath();
        cx = cx - 75;
        cy = cy - 75;
        ctx.moveTo(cx + 75, cy + 40);
        ctx.bezierCurveTo(cx + 75, cy + 37, cx + 70, cy + 25, cx + 50, cy + 25);
        ctx.bezierCurveTo(cx + 20, cy + 25, cx + 20, cy + 52.5, cx + 20, cy + 52.5);
        ctx.bezierCurveTo(cx + 20, cy + 75, cx + 37, cy + 85, cx + 75, cy + 130);
        ctx.bezierCurveTo(cx + 110, cy + 85, cx + 130, cy + 80, cx + 130, cy + 52.5);
        ctx.bezierCurveTo(cx + 130, cy + 52.5, cx + 130, cy + 25, cx + 100, cy + 25);
        ctx.bezierCurveTo(cx + 85, cy + 25, cx + 75, cy + 37, cx + 75, cy + 40);
        ctx.fillStyle = "red";
        ctx.fill();

    }

    function drawStar(ctx, cx, cy, spikes, r0, r1) {

        var rot = Math.PI / 2 * 3, x = cx, y = cy, step = Math.PI / spikes

        ctx.beginPath();
        ctx.moveTo(cx, cy - r0)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * r0;
            y = cy + Math.sin(rot) * r0;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * r1;
            y = cy + Math.sin(rot) * r1;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - r0)
        ctx.fill();
        ctx.closePath();
    }

    function drawCustomImage(ctx, cx, cy) { 
    
        var img = new Image();  
        var chkimg="";
         if($('.theme_on_white').hasClass('is-active')==false)
         { 
             chkimg=$(".s1tc_pics ul li.is-active img").attr("src"); 
             if( chkimg =="/wp-content/uploads/2018/03/12.png")
             {  
                img.src = $("#Peacesignwhite").attr("src");  
             } 
            else if( chkimg =="/wp-content/uploads/2018/03/Christian_cross.png")
             {    
                img.src = $("#crossWhite").attr("src");  
             } 
             else if( chkimg =="/wp-content/uploads/2018/04/StarOfDavidBlack.png")
             {    
                img.src = $("#Star_of_Davidblack").attr("src");  
             } 
              else if( chkimg =="/wp-content/uploads/2018/03/Weddingbells.png")
             {     
                img.src = $("#WeddingbellsWhite").attr("src");  
             } 
             
               else if( chkimg =="/wp-content/uploads/2018/03/Yin_yang.png")
             {      
                img.src = $("#Yin_yang").attr("src");  
             }  
             else{
              img.src = $(".s1tc_pics ul li.is-active img").attr("src"); 
             } 
         }
         else{
          img.src = $(".s1tc_pics ul li.is-active img").attr("src"); 
             }
             
             
             var chkimgactive=$(".s1tc_pics ul li.is-active img").attr("src");
             
             if( chkimgactive =="/wp-content/uploads/2018/03/WeddingRingsSilver.png")
             {      
                ctx.drawImage(img, 0, 0, img.width, img.height, cx - 120, cy - 60, 220, 120);
             }
             else if( chkimgactive =="/wp-content/uploads/2018/03/WeddingRingsGold.png")
             {      
                ctx.drawImage(img, 0, 0, img.width, img.height, cx - 120, cy - 60, 220, 120); 
             }
             else
             {
                ctx.drawImage(img, 0, 0, img.width, img.height, cx - 60, cy - 60, 120, 120); 
             }
         
        //img.src = $(".s1tc_pics ul li.is-active img").attr("src");  
        
        //ctx.drawImage(img, 0, 0, img.width, img.height, cx - 60, cy - 60, 120, 120); 
        //ctx.drawImage(img, 0, 0, img.width, img.height, cx - 120, cy - 60, 220, 120); 
    }

    $(document).on('mouseleave', 'div.element_name', function () {
        $('a.element_delete').remove();
    });
    var dd = $('.s1_day_input').val();
    var mm = $('.s1_month_select').val();
    var yy = $('.s1_year_input').val();
    var hh = $('.coords_hours').val();
    var mi = $('.coords_minutes').val();
    var ss = $('.coords_sec').val();


    function getSelTime() {
        if (($('.s1_day_input').val() < 0) || ($('.s1_day_input').val() > 31) || ($('.s1_year_input').val() < 0)) {
            alert("Wrong date");
            return 0;
        }
        var dd = $('.s1_day_input').val();
        var mm = $('.s1_month_select').val();
        var yy = $('.s1_year_input').val();
        var hh = $('.coords_hours').val();
        if($("#choosetime").val()=="PM"){
            hh+=12;
        }
        var mi = $('.coords_minutes').val();
        var ss = $('.coords_sec').val();
        return [Number(yy),
            Number(mm),
            Number(dd),
            Number(hh),
            Number(mi),
            Number(ss)];
    }

    $(".star_map canvas").attr("id", "main_canvas");
    $(".main_canvas_image").attr("id", "canvas_img");
    //autocomplete
    $(".s1_city_autocomplete").geocomplete();
    //click on buttons
    $('.s1t_theme').click(function () {
        $('.s1t_theme, .theme_on_white').removeClass('is-active');
        $(this).addClass('is-active');
    });
    $('.s1tc_pics ul li').click(function () {
        $('.s1tc_pics ul li').removeClass("is-active")
        $(this).addClass('is-active');
    });

    //advanced settings toggle
    $('.s1_advanced_options').hide();

    $('.underline_container h6').click(function () {
        $('.s1_advanced_options').slideToggle();
    });


    //magnific-form
    $('.save_design_form').magnificPopup({
        items: {
            src: '#check_form'
        },
        type: 'inline'
    });

    var lat = 0, lng = 0, str = 0, pararr;
    var address;
    //?????????? ?????? ? ?????? ??????????
    var fillTextComment_f = '';
    var fillTextComment_s = '';
    var fillTextComment_t = '';
    var fillTextTitle = 'THE NIGHT SKY';
    var fillTextLocation = 'San Francisco, CA, United States';
    var fillTextLon = 'LATTITUDE';
    var fillTextLat = 'LONGITUDE';
    var fillTextDateDay = '1';
    var fillTextDateMonth = 'January';
    var fillTextDateYear = '2017';
    var fillTextDateHour;
    var fillTextDateMinute;
    var fillTextDateSec;


    $('.city_submit').click(function () {


var txt = $('.s1_city_autocomplete').val();
        alert(txt);
            var geocoder = new google.maps.Geocoder();
            
    var address = txt;

    geocoder.geocode( { 'address': address}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();


        initialize(latitude,longitude);

                } 

        }); 


    function initialize(latitude,longitude) {
        var latlng = new google.maps.LatLng(latitude,longitude);

        var myOptions = {
          zoom: 14,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

        var marker = new google.maps.Marker({
          position: latlng, 
          map: map, 
            title:"location : Dublin"
        }); 
      }
        alert('adsasd');


        address1 = $(".s1_city_autocomplete").val();
        address = address1.replace(', USA', '');

        if (address == "") {

            sessionStorage.clickcount = 0;
            $('.s1_city_autocomplete').css('border-color', 'red');

            alert("Unknown city");
            return 0;
        } else {
            sessionStorage.clickcount = 1;
        }


        fillTextComment = $('.s1_comment').val();


        pos = fillTextComment.indexOf(" ", 50);
        check=0;
        if (pos == -1) {
            fillTextComment_f = fillTextComment;
            fillTextComment_s = "";
            fillTextComment_t = "";
            check=1;
        }
        else{
            fillTextComment_f = fillTextComment.slice(0, pos);
        }
       pos = fillTextComment.indexOf(" ", 100);
       if ((pos == -1)&&(check!=1)) {
           fillTextComment_s = fillTextComment.slice(fillTextComment.indexOf(" ",50), fillTextComment.length);
           fillTextComment_t = "";
           check=1;
       }
        else if(check!=1){
           fillTextComment_s = fillTextComment.slice(fillTextComment.indexOf(" ",50), pos);
           fillTextComment_t = fillTextComment.slice(pos, 150);
       }


        fillTextTitle = $('.s1_title_input input').val();
        fillTextLocation = $('.names').val();
        fillTextDateDay = $('.s1_day_input').val();
        fillTextDateMonth = $('.s1_month_select').val();
        switch (fillTextDateMonth) {
            case "1":
                fillTextDateMonth = "January";
                break;
            case "2":
                fillTextDateMonth = "February";
                break;
            case "3":
                fillTextDateMonth = "March";
                break;
            case "4":
                fillTextDateMonth = "April";
                break;
            case "5":
                fillTextDateMonth = "May";
                break;
            case "6":
                fillTextDateMonth = "June";
                break;
            case "7":
                fillTextDateMonth = "July";
                break;
            case "8":
                fillTextDateMonth = "August";
                break;
            case "9":
                fillTextDateMonth = "September";
                break;
            case "10":
                fillTextDateMonth = "October";
                break;
            case "11":
                fillTextDateMonth = "November";
                break;
            case "12":
                fillTextDateMonth = "December";
                break;
        }
        fillTextDateYear = $('.s1_year_input').val();
        
        
        
        fillTextDateHour = $('.coords_hours').val();
        
        fillTextDateMinute = $('.coords_minutes').val();
        
        
        //alert(fillTextDateHour);
        //alert(fillTextDateMinute);
        //alert($( "#choosetime option:selected" ).text());
        
      //  fillTextDateSec = $('.coords_sec').val();
        
        fillTextDateMinute += " " +  $( "#choosetime option:selected" ).text();
        
        
        if (fillTextDateHour > 12) {
           // fillTextDateHour -= 12;
           // fillTextDateMinute += " PM";
        }
        else {
            //fillTextDateMinute += " AM";
        }
        
         
        var googleGeocoder = new GeocoderJS.createGeocoder({'provider': 'google'});
        googleGeocoder.geocode(address, function (result) {
            console.log(result);
            str = JSON.stringify(result);
            str = str.replace('[', '').replace('{', '').replace('}', '').replace(']', '');
            pararr = str.split(',');
            lat = pararr[0].replace('"latitude":', '');
            lat1 = pararr[0].replace('"latitude":', '');
            lat = lat.substr(0, 7);
            if (typeof pararr[1] == "undefined") {
                alert("Unknown city");
                return 0;
            }
            lng = pararr[1].replace('"longitude":', '');
            lng1 = pararr[1].replace('"longitude":', '');
            lng = lng.substr(0, 7);
            lat = parseFloat(lat);
            lng = parseFloat(lng);
            
            
            dec2dms(lat1,lng1);
            
            
            
            fillTextLocation = address;
            
            
            //fillTextLon = lat + "N";
            //fillTextLat = lng + "W";
            
            fillTextLon = sessionStorage.fillTextLon
            fillTextLat = sessionStorage.fillTextLat
            
            
            
            
            $(".names").val(address);
            $(".coords").eq(0).val(lat);
            $(".coords").eq(1).val(lng);
            var mlayers = layers();
            var proj = dw.initProj();
            var cx = lng,
                cy = -1.0*lat,

                rect = dw.viewsizeOf(),
                skyRadius = .32 * Math.sqrt((rect[2] - rect[0]) * (rect[2] - rect[0]) + (rect[3] - rect[1]) * (rect[3] - rect[1])),
                eaRadius = Math.sqrt((proj.p15 - 1.0) / (proj.p15 + 1.0)) * 180 / Math.PI,
                eaRadiusM = proj.a,
                rotate = dw.m.rotate,
                centerof = dw.viewcenterOf(),
                gmtime = getSelTime(),
                darkhide = ('earth' in mlayers);
            var sat = {};
            // clear all
            dw.clearCarta();
            for (var i in dw.mflood) {
                switch (dw.mflood[i]['ftype']) {
                    case 'terminator':
                    case 'sattrace':
                    case 'satsurface':
                        delete dw.mflood[i];
                }
            }
            // clear map area
            dw.marea = {};
            for (var ftype in mlayers) {
                switch (ftype) {
                    case 'stars':
                        var stars = STARS,
                            mstars = Starry.renderSky(stars, rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, darkhide);
                        drawlonlat(mstars, ftype, 3);
                        break;
                    case 'cntlines':
                        var lns = CLNS,
                            mpts = [];
                        for (var i = 0; i < lns.length; i = i + 2) {
                            var m = Starry.renderSky([lns[i], lns[i + 1]], rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, darkhide, true);
                            if (m.length == 1)
                                m = Starry.renderSky([lns[i], lns[i + 1]], rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, false, false);
                            if (m.length > 1)
                                mpts.push([[m[0][0][0], m[1][0][0]]]);
                        }
                        drawlonlat(mpts, ftype);
                        break;
                }
            }

            if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_1').hasClass('is-active'))) {

                drawSkyMap("#fff", '#000');
            }
            //SECOND IF-ELSE
            else if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_2').hasClass('is-active'))) {

                drawSkyMap("#fff", '#191d29');
            }

            //THIRD IF-ELSE
            else if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_3').hasClass('is-active'))) {

                drawSkyMap("#fff", '#384657');
            }

            //4 IF-ELSE
            else if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_4').hasClass('is-active'))) {

                drawSkyMap("#fff", '#134b59');
            }
            //black
            else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_1').hasClass('is-active'))) {

                drawSkyMap("#000", '#fff');
            }
            else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_2').hasClass('is-active'))) {

                drawSkyMap("#191d29", '#fff');
            }
            else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_3').hasClass('is-active'))) {

                drawSkyMap("#384657", '#fff');
            }
            else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_4').hasClass('is-active'))) {

                drawSkyMap("#134b59", '#fff');
            }
        })


    });
    $('.s1tc_constell').click(function () {

        address = $(".s1_city_autocomplete").val();


        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            mopt["cntlines"]["fg"] = 'rgba(255,255,255,0)';
            var main_canvas = document.getElementById("main_canvas");
            var src = main_canvas.getContext('2d');
            var srcsrc = src.canvas.toDataURL("image/png");
            $(".main_canvas_image").attr("src", srcsrc);
        }
        else {
            $(this).addClass('is-active');
            mopt["cntlines"]["fg"] = 'rgba(255,255,255,1)';
            var main_canvas = document.getElementById("main_canvas");
            var src = main_canvas.getContext('2d');
            var srcsrc = src.canvas.toDataURL("image/png");
            $(".main_canvas_image").attr("src", srcsrc);
        }
        var googleGeocoder = new GeocoderJS.createGeocoder({'provider': 'google'});
        googleGeocoder.geocode(address, function (result) {
            str = JSON.stringify(result);
            str = str.replace('[', '').replace('{', '').replace('}', '').replace(']', '');
            pararr = str.split(',');
            lat = pararr[0].replace('"latitude":', '');
            lat = lat.substr(0, 7);
            lng = pararr[1].replace('"longitude":', '');
            lng = lng.substr(0, 7);
            lat = parseFloat(lat);
            lng = parseFloat(lng);
            $(".names").val(address);
            $(".coords").eq(0).val(lat);
            $(".coords").eq(1).val(lng);
        });
        var mlayers = layers();
        var proj = dw.initProj();
        var cx = lng * 180 / Math.PI,
            cy = lat * 180 / Math.PI,
            rect = dw.viewsizeOf(),
            skyRadius = .32 * Math.sqrt((rect[2] - rect[0]) * (rect[2] - rect[0]) + (rect[3] - rect[1]) * (rect[3] - rect[1])),
            eaRadius = Math.sqrt((proj.p15 - 1.0) / (proj.p15 + 1.0)) * 180 / Math.PI,
            eaRadiusM = proj.a,
            rotate = dw.m.rotate,
            centerof = dw.viewcenterOf(),
            gmtime = getSelTime(),
            darkhide = ('earth' in mlayers);
        var sat = {};
        // clear all
        dw.clearCarta();
        for (var i in dw.mflood) {
            switch (dw.mflood[i]['ftype']) {
                case 'terminator':
                case 'sattrace':
                case 'satsurface':
                    delete dw.mflood[i];
            }
        }
        // clear map area
        dw.marea = {};
        for (var ftype in mlayers) {
            switch (ftype) {
                case 'stars':
                    var stars = STARS,
                        mstars = Starry.renderSky(stars, rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, darkhide);
                    drawlonlat(mstars, ftype, 3);
                    break;
                case 'cntlines':
                    var lns = CLNS,
                        mpts = [];
                    for (var i = 0; i < lns.length; i = i + 2) {
                        var m = Starry.renderSky([lns[i], lns[i + 1]], rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, darkhide, true);
                        if (m.length == 1)
                            m = Starry.renderSky([lns[i], lns[i + 1]], rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, false, false);
                        if (m.length > 1)
                            mpts.push([[m[0][0][0], m[1][0][0]]]);
                    }
                    drawlonlat(mpts, ftype);
                    break;
            }
        }
        address = $(".s1_city_autocomplete").val();
        var googleGeocoder = new GeocoderJS.createGeocoder({'provider': 'google'});
        googleGeocoder.geocode(address, function (result) {
            str = JSON.stringify(result);
            str = str.replace('[', '').replace('{', '').replace('}', '').replace(']', '');
            pararr = str.split(',');
            lat = pararr[0].replace('"latitude":', '');
            lng = pararr[1].replace('"longitude":', '');
            lat = parseFloat(lat);
            lng = parseFloat(lng);
            $(".names").val(address);
            $(".coords").eq(0).val(lat);
            $(".coords").eq(1).val(lng);
        });
        var mlayers = layers();
        var proj = dw.initProj();
        var cx = lng * 180 / Math.PI,
            cy = lat * 180 / Math.PI,
            rect = dw.viewsizeOf(),
            skyRadius = .32 * Math.sqrt((rect[2] - rect[0]) * (rect[2] - rect[0]) + (rect[3] - rect[1]) * (rect[3] - rect[1])),
            eaRadius = Math.sqrt((proj.p15 - 1.0) / (proj.p15 + 1.0)) * 180 / Math.PI,
            eaRadiusM = proj.a,
            rotate = dw.m.rotate,
            centerof = dw.viewcenterOf(),
            gmtime = getSelTime(),
            darkhide = ('earth' in mlayers);
        var sat = {};
        // clear all
        dw.clearCarta();
        for (var i in dw.mflood) {
            switch (dw.mflood[i]['ftype']) {
                case 'terminator':
                case 'sattrace':
                case 'satsurface':
                    delete dw.mflood[i];
            }
        }
        // clear map area
        dw.marea = {};
        for (var ftype in mlayers) {
            switch (ftype) {
                case 'stars':
                    var stars = STARS,
                        mstars = Starry.renderSky(stars, rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, darkhide);
                    drawlonlat(mstars, ftype, 3);
                    break;
                case 'cntlines':
                    var lns = CLNS,
                        mpts = [];
                    for (var i = 0; i < lns.length; i = i + 2) {
                        var m = Starry.renderSky([lns[i], lns[i + 1]], rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, darkhide, true);
                        if (m.length == 1)
                            m = Starry.renderSky([lns[i], lns[i + 1]], rect, skyRadius, eaRadius, cx, cy, rotate, centerof, gmtime, false, false);
                        if (m.length > 1)
                            mpts.push([[m[0][0][0], m[1][0][0]]]);
                    }
                    drawlonlat(mpts, ftype);
                    break;
            }
        }


        var main_canvas = document.getElementById("main_canvas");
        var src = main_canvas.getContext('2d');
        var srcsrc = src.canvas.toDataURL("image/png");
        $(".main_canvas_image").attr("src", srcsrc);


    });


    //
    //drawSkyMap("#000",'#fff');
    drawSkyMap("#fff", '#000');

    $('.theme_on_white').click(function () {
        $('.theme_on_white').toggleClass("is-active");
    });


    //Manipulations with canvas on theme on white
        // $('.squr').click(function () {
        //     alert('adasdasdad');
        //     ctx.beginPath();
        //     ctx.lineWidth = 25;
        //     ctx.strokeStyle = "#fff";
        //     if ($('.theme_on_white').hasClass('is-active')) {
        //         // ctx.fillStyle = textColor;
        //         ctx.fillStyle = "black";
        //     }
        //     else {
        //         ctx.fillStyle = backgroundColor;
        //     }
        //     var img = document.getElementById("canvas_img");
        //     //By sir -> ctx.rect(10,10,2500,1850);
        //     ctx.rect(10,10,1980,1850);
        //     //ctx.arc(example.width / 2, example.height * .36, example.width / 2.5, 0, 2 * Math.PI, false);
        //     ctx.stroke();
        //     ctx.fill();
        //     ctx.save();

        //     //ctx.clip();

        //     ctx.translate(0, -100);
        //     ctx.translate(example.width/2, example.width/2);
        //     ctx.rotate(0 * Math.PI / 180);
        //     ctx.drawImage(img, (example.width/2)*-1, (example.width/2)*-1, example.width, example.width);
        //     //ctx.drawImage(img, 0, -100, example.width, example.width);
        //     var ctxsrs = ctx.canvas.toDataURL("image/jpeg", 1.0);
        //     $(".finish_picture").attr("src", ctxsrs);
        //     ctx.restore();
        // });

    //?????? ??????? ? ????? ???????
    $('.custom_button ul li input').click(function(){
        var Shape=$(this).data('item');
        document.getElementById('text_hidden').value = Shape;
           
    })
    $('.s1_themes ul li, .s1tc_pics ul li, .custom_button ul li input').click(function () {

        
        
        if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_1').hasClass('is-active'))) {
             drawSkyMap("#fff", '#000');

        }
        //SECOND IF-ELSE
        else if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_2').hasClass('is-active'))) {

            //drawSkyMap("#fff",'#191d29');
            
            drawSkyMap("#fff", '#000');
        }

        //THIRD IF-ELSE
        else if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_3').hasClass('is-active'))) {

            //drawSkyMap("#fff",'#384657');
           
            drawSkyMap("#fff", '#000');
        }

        //4 IF-ELSE
        else if (($('.theme_on_white').hasClass('is-active')) && ($('.theme_4').hasClass('is-active'))) {

            //drawSkyMap("#fff",'#134b59');
            
            drawSkyMap("#fff", '#000');
        }
        //black
        else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_1').hasClass('is-active'))) {
            
            drawSkyMap("#000", '#fff');

        }
        else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_2').hasClass('is-active'))) {
           
            drawSkyMap("#191d29", '#fff');

        }
        else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_3').hasClass('is-active'))) {
            
            drawSkyMap("#384657", '#fff');
        }
        else if (!($('.theme_on_white').hasClass('is-active')) && ($('.theme_4').hasClass('is-active'))) {
           
            drawSkyMap("#134b59", '#fff');
        }
    });
    $(".save_design_form").click(function () {
        var imgfinsrc = $(".finish_picture").attr("src");

    });

    $('.theme_1').addClass('is-active');

    $('.theme_on_white').addClass('is-active');
    // Custom JS

});


function dec2dms(lat,lan){  
    var e = lat, t = lan;  
       
    sessionStorage.fillTextLon = getdms(e, !0);
    sessionStorage.fillTextLat = getdms(t, !1);
       
}



function getdms(e, t){var n = 0, m = 0, l = 0, a = "X"; return a = t && 0 > e?"S":!t && 0 > e?"W":t?"N":"E", d = Math.abs(e), n = Math.floor(d), l = 3600 * (d - n), m = Math.floor(l / 60), l = Math.round(1e4 * (l - 60 * m)) / 1e4, n + "° " + m + "' " + l + "'' " + a}