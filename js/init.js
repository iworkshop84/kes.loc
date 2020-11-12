$(document).ready(function (e) {
    $('li.has__children > a').click(function(event) {
        event.stopPropagation();
        if($(this).parent().hasClass('has__children')){
            $($(event.target).next('ul')).toggleClass('active__menu');
        }
    })
});


$(document).ready(function () {
    $('.header__burger').click(function (enent) {
        $('.header__burger, .header__menu').toggleClass('active__menu');
        $('body').toggleClass('lock');
        $('.mobile_wrapper').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.mobile_wrapper').click(function (enent) {
        $('.header__burger, .header__menu').toggleClass('active__menu');
        // $('.single__page .header__single_burger,.single__page .single__menu_block').toggleClass('active__menu');
        $('body').toggleClass('lock');
        $('.mobile_wrapper').toggleClass('active');
    });
});


$(document).ready(function () {
    $('.slider__wrapper').slick({
        arrows: true,
        slidesToShow: 1,
        nextArrow: '<div class="slick-prev"><i class="fas fa-angle-double-left"></i></div>',
        prevArrow: '<div class="slick-next"><i class="fas fa-angle-double-right"></i></div>',
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});



jQuery(function ($){
    var $el = $('#FileBrowser');

    $el.on('click', '.js-browse-btn', function (evt){
        evt.preventDefault();
        $el.find(':file').click();
    });

    $el.on('change', function (evt){
        $el.find('.js-file').text(evt.target.value);
        $el.find('.js-upload-btn').show();
    });
});


// Not Checked

$(document).ready(function(){
    var dropZone = $('#upload-container');
    var dialog = $('#file-input');

    $('#file-input').focus(function() {
        $('label').addClass('focus');
    }).focusout(function() {
        $('label').removeClass('focus');
    });

    // My work
    dropZone.on('click',function (evt) {
        $('.label_input').addClass('focus');
    });


    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
        return false;
    });

    dropZone.on('dragover dragenter', function() {
        dropZone.addClass('dragover');
    });

    dropZone.on('dragleave', function(e) {
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            dropZone.removeClass('dragover');
        }
    });

    dropZone.on('drop', function(e) {
        dropZone.removeClass('dragover');
        let files = e.originalEvent.dataTransfer.files;
        sendFiles(files);
    });

    $('#file-input').change(function() {
        let files = this.files;
        sendFiles(files);
    });


    function sendFiles(files) {
        let maxFileSize = 5242880;
        let Data = new FormData();
        $(files).each(function(index, file) {
            if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
                Data.append('images[]', file);
            }
        });

        $.ajax({
            url: dropZone.attr('action'),
            type: dropZone.attr('method'),
            data: Data,
            contentType: false,
            processData: false,
            success: function(data) {
                alert ('Файлы были успешно загружены!');
            }
        });
    }
});

// LOGIN POPUP BLOCK START

$(document).ready(function() {
    $('a.myLinkModal').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
            $('#loginPopupBlock')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close, #myOverlay').click( function(){
        $('#loginPopupBlock').animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
        });
    });
});

// LOGIN POPUP BLOCK END


$(document).ready(function () {
    $('.single__page .header__single_burger').click(function (enent) {
        $('.single__page .header__single_burger,.single__page .single__menu_block').toggleClass('active__menu');
        $('.single__page .mobile_wrapper').toggleClass('active');
    });
});


$(document).ready(function () {
    $('.single__page .mobile_wrapper').click(function (enent) {
        $('.header__single_burger, .single__menu_block').toggleClass('active__menu');
    });
});

$(document).ready(function () {
    $('.single__page .video__full_desc_more').click(function (enent) {
        $('.video__full_desc').toggleClass('active').animate('max-height', 5);
    });
});

