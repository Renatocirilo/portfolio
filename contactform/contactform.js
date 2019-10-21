$(function($) {
  $("form").submit(function(event) {
    event.preventDefault();

    $.ajax({
      url: "https://getform.io/f/911f664a-c94a-441a-8f35-80759d57fb97",
      method: "POST",
      data: {
        name: $("name").val(),
        email: $("email").val(),
        subject: $("subject").val(),
        message: $("message").val()
      },
      dataType: "json"
    })
      .done(function() {
        $("name").val("");
        $("email").val("");
        $("subject").val("");
        $("message").val("");
        alert("E-mail enviado com sucesso!");
      })
      .fail(function() {
        alert("Erro ao enviar e-mail!");
      });
  });
});
