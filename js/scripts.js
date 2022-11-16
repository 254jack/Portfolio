$("documet").ready(function () {
  $('body').css('justify-content','center')
  $('body').css('align-items','center')

  $("#contact-btn").click(function () {
  });



  $("form").submit(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var topic = $("#topic").val();
    var message = $("#message").val(); 

   var  email_mssge = ("From:"+ email + " Name:" + name + " tp:"+ topic + " Message:" + message);
   console.log(email_mssge)


    $('.messg').text(
      "Thank you " +
        name +
        " for contacting us. We have received your message and be ready to receive our reply as soon as possible Here we go"
    );
    event.preventDefault()
  });

  $("#jack-img").hover(function () {

    console.log("here we go")

    $(".kim").text("   Yeah that's me!")

    $('.kim').css('text-align','center');
    $('.kim').css('color','rgba(23,73,3,1)');

  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("top-nav").style.marginTop = "-35px";
    document.getElementById("a").style.backgroundColor = "#fefbe9";

  } else {
    document.getElementById("top-nav").style = "none";
    document.getElementById("navbarCollapse").style = "none";

  }
}

function register($form) {
  $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function(err) {},
      success: function(data) {
          $("#subscribeForm").val('subscribe')
          if (data.result === 'success') {
              //Success
              $('#subscribe-result').html('<p>Thank you!</p>');
          };
      }
  });
};


