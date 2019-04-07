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

Route::get('getquizes', 'QuizController@quizes');

Route::get('quiz/{id}', 'QuizController@quiz');

//Šeit vajadzēja būt POST, bet radās problēmas ar laravel CORS middleware, tāpēc šajā uzdevumā atstāts GET. 
Route::get('checkanswer/{id}/{aid}', 'QuizController@checkanswer');


