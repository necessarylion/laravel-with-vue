<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>BEFENI</title>
      @include('head')
      
</head>
<body class="app">

<!-- loader -->
<div id="loader">
  <div class="spinner"></div>
</div>
<!-- loader -->

<script>

window.addEventListener('load', function load() {
const loader = document.getElementById('loader');
setTimeout(function () {
      loader.classList.add('fadeOut');
}, 300);
});

</script>

<div id="app"></div>

  @include('scripts')
  
</body>
</html>


