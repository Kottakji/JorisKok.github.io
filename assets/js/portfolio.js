let traditionalLyrics = $('.highlighter-rouge').children().eq(1);
let simplifiedLyrics = $('.highlighter-rouge').children().eq(0);

traditionalLyrics.hide();


let traditionLink = $('#simplified--traditional').children().eq(1);
let simplifiedLink = $('#simplified--traditional').children().eq(0);
traditionLink.css('color', 'gray');

$('#simplified--traditional').click(function (e) {
    let target = $(e.target);
    if (target.attr('href') === '#traditional') {
        traditionalLyrics.show();
        traditionLink.css('color', 'black');
        simplifiedLyrics.hide();
        simplifiedLink.css('color', 'gray')
    }
    if (target.attr('href') === '#simplified') {
        simplifiedLyrics.show();
        simplifiedLink.css('color', 'black');
        traditionalLyrics.hide();
        traditionLink.css('color', 'gray');
    }
});
