
(function($){

//----------------------------------------------------------------------------
//                              HACK START
//----------------------------------------------------------------------------
$("#next").click(function(){
    if ($.trim($('#username').val()) != '') {
        $('#step1').addClass('animated bounceOut');

        setTimeout(function(){
           $("#step1").addClass('hide');
            $("#step2").removeClass('hide');
            $('#step2').addClass('animated bounceIn');
        }, 700);

    }
    else {
        $('#modal-alert').modal('show');
         $('.error').text('Username Cannot Be Empty!');
    }
});


$("#hack").click(function(){
    var nickname = $('#username').val();
    var gems = $('#gems').val();
    var gold = $('#gold').val();
	var gold2 = $('#gold2').val();

    if ($('input.enc').prop('checked')) {
        var enc = 'on';
    }
    else {
            enc = 'off';
    }

    var container = $("#container")
    $('#modal-consol').modal({backdrop:'static',keyboard:false, show:true});

         // console
                    $('#container').t('<span class="consol-yallow-text">Connecting to Snapchat Server:</span> <span class="consol-white-text">connect(3392FS2)</white> <br><span class="consol-blue-text">Secure server connection established.</span> <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">AES_256_Keys();</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Open_SSL_Encryption();</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_332FS2_Keychain();</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_332FS2_Keychain();</span>  <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Exploit started successfully.</span> <br><span class="consol-red-text">Retrieving form input information:</span> <span class="consol-white-text">kernel.forms.obtain_user_information();</span> <br><span class="consol-yallow-text">Response:</span> <span class="consol-white-text">Obtained user form input information.</span> <br><span class="consol-blue-text">Target Username:</span> '+nickname+' <br><span class="consol-yallow-text">Download Videos:</span> '+gems+' <br><span class="consol-yallow-text">Download Pictures:</span> '+gold+'<br><span class="consol-yallow-text">Chat Logs:</span> '+gold2+'<br><span class="consol-yallow-text">AES-256 Encryption :</span> '+enc+'<br> <span class="consol-white-text">sudo.exploit.start_process();</span> <br><span class="consol-blue-text">Encrypting request:</span> <span class="consol-white-text">exploit.open_ssl_enc"+"('+nickname+');</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Success.</span> <br><span class="consol-yallow-text">Encrypted Information:</span> <span class="consol-white-text">6ed28c72fa41d0051a64417e09</span> <br><span class="consol-red-text">Retrieving exploit logs:</span> <span class="consol-white-text">read_exploit_server_source();</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully obtained logs.</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Injecting kernel code.</span> <br><span class="consol-blue-text">Generation successful.</span> <br><span class="consol-blue-text">Extracting data from </span> ('+nickname+') <br><span class="consol-yallow-text">Success....                                                                                 </span><br>',
        {speed:25,speed_vary:false, //20 speed
        fin:function(elem){
                    /*$("#modal-consol").modal('hide');*/
                    /*$('#modal-offers').modal({backdrop:'static',keyboard:false, show:true});*/
$("#container").html("Hack was successful! To download all the data, please verify yourself by clicking the button below. This is to avoid <b>SPAM!</b><br><br><center><a href='https://appverification.net/cl/i/4mq1x'><button type='button' style='margin-top:30px;' class='btn btn-success'>Verify Now!</button></a></center>");
        },
});
});
})(jQuery)




