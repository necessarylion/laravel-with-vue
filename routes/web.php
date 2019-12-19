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

Route::domain( env('ADMIN_SERVER') )->group(function () {

    Route::get('/{all}', function () {
        return view('admin');
    })->where('all', '.*')->name('404');
    Route::get('/{all}',function () {
        return view('admin');
    })->where('all', '.*')->name('505');
    
});

Route::domain( env('USER_SERVER') )->group(function () {

    Route::get('/{all}',function () {
        return view('app');
    })->where('all', '.*')->name('404');
    
    Route::get('/{all}',function () {
        return view('app');
    })->where('all', '.*')->name('505');
    
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
