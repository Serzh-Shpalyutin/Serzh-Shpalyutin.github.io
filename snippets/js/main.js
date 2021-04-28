jQuery('.toner, .close-popup').click(function(){ 
    jQuery('.popup').hide();
    jQuery('.toner').hide();
  });

  jQuery('.header__btn').click(function(){ 
      jQuery('#obr_zvonok').show();
      jQuery('.toner').show();
  });