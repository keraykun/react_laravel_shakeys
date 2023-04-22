<?php


use Illuminate\Support\Facades\Route;

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

Route::controller(App\Http\Controllers\Api\GuestController::class)->group(function(){
    Route::post('/logout','logout');
    Route::post('/login','login');
    Route::post('/signup','signup');
});

Route::middleware('auth:sanctum')->group(function(){
    Route::middleware('ability:server:admin')->prefix('admin')->group(function(){
        Route::controller(App\Http\Controllers\Api\Admin\AdminController::class)->group(function(){
            Route::get('/profile','profile');
        });
        Route::controller(App\Http\Controllers\Api\Admin\ProductController::class)->group(function(){
            Route::get('/product','index');
            Route::post('/product/create','create');
            Route::get('/product/edit/{product}','edit');
            Route::delete('/product/delete/{product}','destroy');
            Route::put('/product/update/{product}','update');
        });
    });

    Route::middleware('ability:server:user')->prefix('user')->group(function(){
        Route::controller(App\Http\Controllers\Api\User\UserController::class)->group(function(){
            Route::get('/profile','profile');
        });
    });
});


