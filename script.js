$(document).ready(function(){
    $('.product-main')
    
    .on('mouseover', function(){
       // debugger
      $(this).children('.product-img')
      .css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.product-img')
      .css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.product-img')
      .css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    .each(function(){
      $(this)
        // add a image container
        .append('<div class="product-img"></div>')
        // set up a background image on data-image attribute
        .children('.product-img').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });

  $(document).on('click','#myImg', function(){
    $('#myModal').show();
  });

  $(document).not('#myModal').click(function(){
    $('#myModal').hide();
  });

  $(document).on('click', '.close', function(){
    $('#myModal').hide();
  });
});

