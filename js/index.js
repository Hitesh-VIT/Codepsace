$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    items: 1,
    dots: true,
    nav: false
  });
});

//Validation

$(':checkbox').click(function() {
    $('#reg_no').attr('disabled',! this.checked)
    $('#uni_name').attr('disabled', this.checked)
});