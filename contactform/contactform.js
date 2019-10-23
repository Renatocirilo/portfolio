$("#my-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Obrigado pela mensagem!");
  });

  $("#my-form")[0].reset();
});
