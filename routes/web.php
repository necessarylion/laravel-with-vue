<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::any('/test',function() { 
    
    return 'this is test'; 
});


Route::get('/{all}',function () {
    return view('app');
})->where('all', '.*')->name('404');;

Route::get('/{all}',function () {
    return view('app');
})->where('all', '.*')->name('505');