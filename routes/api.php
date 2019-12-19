<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/** Authentication Routes **/
Route::prefix('auth')->group(function () {
	Route::post('login', 'Auth\AuthController@login');
    Route::get('refresh', 'Auth\AuthController@refresh');
    Route::middleware('auth:api')->group(function () {
        Route::get('user', 'Auth\AuthController@user');
        Route::post('logout', 'Auth\AuthController@logout');
    });
});
