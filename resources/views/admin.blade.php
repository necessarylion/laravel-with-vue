<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>{{config('app.name')}}</title>
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <link href="{{ asset( 'admin/css/app.css' ) }}" rel="stylesheet">
      <link href="{{ asset( 'assets/css/shared/style.css' ) }} " rel="stylesheet">
      <link href="{{ asset( 'assets/css/demo_2/style.css' ) }} " rel="stylesheet">
      <link href="{{ asset( 'assets/vendors/iconfonts/mdi/css/materialdesignicons.css' ) }} " rel="stylesheet">
      <link href="{{ asset( 'assets/images/favicon.ico' ) }} " rel="shortcut icon">
</head>
<body class="header-fixed">

  <!-- id for vue application -->
  <div id="app"></div>

  <script src="{{ asset ( 'admin/js/app.js' ) }}"></script>
  <script src="{{ asset ( 'assets/vendors/js/core.js' ) }} "></script>
  <script src="{{ asset ( 'assets/js/template.js' ) }} "></script>
  <script src="{{ asset ( 'assets/vendors/chartjs/Chart.min.js' ) }} "></script>
  <script src="{{ asset ( 'assets/js/charts/chartjs.addon.js' ) }} "></script>
  <script src="{{ asset ( 'assets/vendors/apexcharts/apexcharts.min.js' ) }} "></script>

</body>
</html>