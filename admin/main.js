$('[data-toggle="offcanvas"]').click(function () {
  $('.row-offcanvas').toggleClass('active');
  $('.sidebar-offcanvas').toggleClass('active');
});

var toolbarOptions = [
  [{ 'font': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'color': [] }, { 'background': [] }],
  ['blockquote', 'code-block'],
  ['image', 'video', 'link'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'align': [] }],
  ['clean']
];
if ($('#editor').length) {
  var editor = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: toolbarOptions
    }
  });
  var $text = $('.ql-editor');
  var $form = $('.edit');
  var $change = $('.change');
  $change.on('click', function () {
      var data = $form.serialize() + '&text=' + $text.html() + '&submit=1';
      $.post('/admin/proccess.php', data, function () {
          $('.saved').fadeIn(1000).delay(2000).fadeOut();
      });
      return false;
  });
}

$('.sideMenu').on('show.bs.collapse', function () {
  $(this).find('.collapse.in').collapse('hide');
});

$('li.active > a, li.disabled > a').removeAttr('href');