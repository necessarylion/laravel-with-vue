<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function viewAdmin() {
        return view('admin');
    }

    public function viewApp() {
        return view('app');
    }
}