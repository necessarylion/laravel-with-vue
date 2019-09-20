<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>BEFENI</title>
      @include('head')
      <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
</head>
<body class="app">
  <div id="loader">
    <div class="spinner"></div>
  </div>
<script>
window.addEventListener('load', function load() {
const loader = document.getElementById('loader');
setTimeout(function () {
      loader.classList.add('fadeOut');
}, 300);
});

</script>

<div id="app">

</div>


  <script src="{{ asset( 'js/app.js') }}"></script>
  <script type="text/javascript" src="{{ asset ( 'assets/dist/js/vendor.js') }} "></script>
  <script type="text/javascript" src="{{ asset ( 'assets/dist/js/bundle.js') }} "></script>
</body>

</html>


